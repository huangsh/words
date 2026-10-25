import type { DatabaseSync } from "node:sqlite";
import { EMOJI, PEP_BOOK, PEP_UNITS, PHONETIC } from "./data/pep";
import { EXAMPLES } from "./data/examples";

export const SEED_KEY = "seed_pep_v2_2025";
export const EXAMPLES_SEED_KEY = "seed_examples_v1";

/** 补充现有单词的例句（如果缺失） */
export function syncExamples(db: DatabaseSync) {
  const done = db.prepare("SELECT value FROM settings WHERE key = ?").get(EXAMPLES_SEED_KEY);
  if (done) return;

  const updateStmt = db.prepare(
    "UPDATE words SET example = ?, example_cn = ? WHERE text = ? AND (example = '' OR example IS NULL)",
  );
  db.exec("BEGIN");
  try {
    for (const [text, [ex, exCn]] of Object.entries(EXAMPLES)) {
      updateStmt.run(ex, exCn, text);
    }
    db.prepare(
      "INSERT INTO settings(key, value) VALUES(?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
    ).run(EXAMPLES_SEED_KEY, new Date().toISOString());
    db.exec("COMMIT");
  } catch (e) {
    db.exec("ROLLBACK");
    console.error("Failed to sync examples:", e);
  }
}

/** 首次启动或版本升级时写入/更新最新内置词库与默认标签 */
export function seedBuiltinBooks(db: DatabaseSync) {
  syncExamples(db);

  const done = db.prepare("SELECT value FROM settings WHERE key = ?").get(SEED_KEY);
  if (done) return;

  db.exec("BEGIN");
  try {
    const insTag = db.prepare("INSERT OR IGNORE INTO tags(name, color) VALUES(?, ?)");
    insTag.run("重点", "#FF6B6B");
    insTag.run("易错", "#FF9F43");
    insTag.run("短语", "#A55EEA");
    const phraseTag = db.prepare("SELECT id FROM tags WHERE name = '短语'").get() as { id: number };

    const existingBook = db.prepare("SELECT id FROM books WHERE builtin = 1 ORDER BY id LIMIT 1").get() as
      | { id: number }
      | undefined;

    let bookId: number;
    if (existingBook) {
      bookId = existingBook.id;
      db.prepare("UPDATE books SET name = ?, description = ? WHERE id = ?").run(
        PEP_BOOK.name,
        PEP_BOOK.description,
        bookId,
      );
      db.prepare("DELETE FROM units WHERE book_id = ?").run(bookId);
    } else {
      const book = db
        .prepare("INSERT INTO books(name, description, builtin, sort) VALUES(?, ?, 1, 0)")
        .run(PEP_BOOK.name, PEP_BOOK.description);
      bookId = Number(book.lastInsertRowid);
    }

    const insUnit = db.prepare("INSERT INTO units(book_id, grade, term, name, sort) VALUES(?, ?, ?, ?, ?)");
    const insWord = db.prepare(
      "INSERT INTO words(unit_id, text, meaning, phonetic, emoji, example, example_cn, sort) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
    );
    const insWordTag = db.prepare("INSERT OR IGNORE INTO word_tags(word_id, tag_id) VALUES(?, ?)");

    PEP_UNITS.forEach((u, ui) => {
      const unitId = Number(insUnit.run(bookId, u.grade, u.term, u.name, ui).lastInsertRowid);
      u.words.split("|").forEach((pair, wi) => {
        const idx = pair.indexOf("=");
        const text = pair.slice(0, idx).trim();
        const meaning = pair.slice(idx + 1).trim();
        if (!text) return;
        const ex = EXAMPLES[text] ?? ["", ""];
        const wordId = Number(
          insWord.run(unitId, text, meaning, PHONETIC[text] ?? "", EMOJI[text] ?? "", ex[0], ex[1], wi).lastInsertRowid,
        );
        if (text.includes(" ")) insWordTag.run(wordId, phraseTag.id);
      });
    });

    db.prepare(
      "INSERT INTO settings(key, value) VALUES(?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
    ).run(SEED_KEY, new Date().toISOString());
    db.exec("COMMIT");
  } catch (e) {
    db.exec("ROLLBACK");
    throw e;
  }
}
