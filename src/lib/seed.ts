import type { DatabaseSync } from "node:sqlite";
import { EMOJI, PEP_BOOK, PEP_UNITS } from "./data/pep";

const SEED_KEY = "seed_pep_v1";

/** 首次启动时写入内置词库与默认标签（只执行一次，之后可自由编辑） */
export function seedBuiltinBooks(db: DatabaseSync) {
  const done = db.prepare("SELECT value FROM settings WHERE key = ?").get(SEED_KEY);
  if (done) return;

  db.exec("BEGIN");
  try {
    const insTag = db.prepare("INSERT OR IGNORE INTO tags(name, color) VALUES(?, ?)");
    insTag.run("重点", "#FF6B6B");
    insTag.run("易错", "#FF9F43");
    insTag.run("短语", "#A55EEA");
    const phraseTag = db.prepare("SELECT id FROM tags WHERE name = '短语'").get() as { id: number };

    const book = db
      .prepare("INSERT INTO books(name, description, builtin, sort) VALUES(?, ?, 1, 0)")
      .run(PEP_BOOK.name, PEP_BOOK.description);
    const bookId = Number(book.lastInsertRowid);

    const insUnit = db.prepare("INSERT INTO units(book_id, grade, term, name, sort) VALUES(?, ?, ?, ?, ?)");
    const insWord = db.prepare("INSERT INTO words(unit_id, text, meaning, emoji, sort) VALUES(?, ?, ?, ?, ?)");
    const insWordTag = db.prepare("INSERT OR IGNORE INTO word_tags(word_id, tag_id) VALUES(?, ?)");

    PEP_UNITS.forEach((u, ui) => {
      const unitId = Number(insUnit.run(bookId, u.grade, u.term, u.name, ui).lastInsertRowid);
      u.words.split("|").forEach((pair, wi) => {
        const idx = pair.indexOf("=");
        const text = pair.slice(0, idx).trim();
        const meaning = pair.slice(idx + 1).trim();
        if (!text) return;
        const wordId = Number(insWord.run(unitId, text, meaning, EMOJI[text] ?? "", wi).lastInsertRowid);
        if (text.includes(" ")) insWordTag.run(wordId, phraseTag.id);
      });
    });

    db.prepare("INSERT INTO settings(key, value) VALUES(?, ?)").run(SEED_KEY, new Date().toISOString());
    db.exec("COMMIT");
  } catch (e) {
    db.exec("ROLLBACK");
    throw e;
  }
}
