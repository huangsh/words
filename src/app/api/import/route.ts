import { body, HttpError, int, ok, route } from "@/lib/api";
import { getDb, tx } from "@/lib/db";
import { parseImportText, type ParsedRow } from "@/lib/importParser";

const TAG_COLORS = ["#4FA3FF", "#3DD68C", "#FF9F43", "#A55EEA", "#FF6B6B", "#26C6DA", "#F368E0"];

/**
 * 批量导入
 * body: { bookId, unitId?, grade?, term?, text, tagIds?, duplicate: 'skip'|'update', commit: boolean }
 *  - 文本中 "# 3上 Unit 1 xxx" 会自动定位/创建单元
 *  - 没有标题行的单词放入 unitId 指定的单元
 */
export const POST = route("parent", async ({ req }) => {
  const b = await body<Record<string, unknown>>(req);
  const bookId = int(b.bookId);
  const text = typeof b.text === "string" ? b.text.slice(0, 200_000) : "";
  const defaultUnitId = b.unitId ? int(b.unitId) : null;
  const defaultGrade = Number(b.grade) || null;
  const defaultTerm = b.term === "下" ? "下" : "上";
  const tagIds = (Array.isArray(b.tagIds) ? b.tagIds : []).map(Number).filter(Number.isInteger);
  const updateDup = b.duplicate === "update";
  const commit = b.commit === true;

  const db = getDb();
  if (!db.prepare("SELECT 1 FROM books WHERE id = ?").get(bookId)) throw new HttpError(404, "词库不存在");
  const parsed = parseImportText(text);

  const findUnit = db.prepare("SELECT id, name, grade, term FROM units WHERE book_id = ? AND grade = ? AND term = ? AND lower(name) = lower(?)");
  const getUnit = db.prepare("SELECT id, name, grade, term FROM units WHERE id = ? AND book_id = ?");
  const existing = db.prepare("SELECT id FROM words WHERE unit_id = ? AND lower(text) = lower(?)");

  type Unit = { id: number | null; name: string; grade: number; term: string; isNew: boolean };
  const errors = [...parsed.errors];
  type Row = ParsedRow & { status: "new" | "dup" | "repeat"; existingId?: number };
  const plan: { unit: Unit; rows: Row[] }[] = [];

  for (const s of parsed.sections) {
    if (!s.rows.length) continue;
    let unit: Unit | null = null;
    if (s.unitName) {
      const grade = s.grade ?? defaultGrade;
      const term = s.term ?? defaultTerm;
      if (!grade) {
        errors.push({ line: s.rows[0].line, message: `单元 "${s.unitName}" 未指定年级（如 "# 3上 ${s.unitName}"），或在上方选择默认年级` });
        continue;
      }
      const u = findUnit.get(bookId, grade, term, s.unitName) as { id: number; name: string; grade: number; term: string } | undefined;
      unit = u ? { ...u, isNew: false } : { id: null, name: s.unitName, grade, term, isNew: true };
    } else if (defaultUnitId) {
      const u = getUnit.get(defaultUnitId, bookId) as { id: number; name: string; grade: number; term: string } | undefined;
      if (u) unit = { ...u, isNew: false };
    }
    if (!unit) {
      errors.push({ line: s.rows[0].line, message: "这些单词没有指定单元：请选择目标单元，或在前面加一行 \"# 3上 Unit 1 xxx\"" });
      continue;
    }
    // 合并同一单元的多个片段
    let entry = plan.find((p) => (p.unit.id ? p.unit.id === unit!.id : !p.unit.id && p.unit.name === unit!.name && p.unit.grade === unit!.grade && p.unit.term === unit!.term));
    if (!entry) plan.push((entry = { unit, rows: [] }));
    const seen = new Set(entry.rows.map((r) => r.text.toLowerCase()));
    for (const r of s.rows) {
      const key = r.text.toLowerCase();
      if (seen.has(key)) {
        entry.rows.push({ ...r, status: "repeat" });
        continue;
      }
      seen.add(key);
      const ex = unit.id ? (existing.get(unit.id, r.text) as { id: number } | undefined) : undefined;
      entry.rows.push({ ...r, status: ex ? "dup" : "new", existingId: ex?.id });
    }
  }

  const summary = {
    units: plan.length,
    newUnits: plan.filter((p) => p.unit.isNew).length,
    newWords: plan.reduce((n, p) => n + p.rows.filter((r) => r.status === "new").length, 0),
    dupWords: plan.reduce((n, p) => n + p.rows.filter((r) => r.status === "dup").length, 0),
  };

  if (!commit) return ok({ plan, errors, summary });

  const result = tx((db) => {
    const insUnit = db.prepare(
      "INSERT INTO units(book_id, grade, term, name, sort) VALUES(?, ?, ?, ?, (SELECT COALESCE(MAX(sort),0)+1 FROM units WHERE book_id = ?))",
    );
    const insWord = db.prepare(
      `INSERT INTO words(unit_id, text, meaning, phonetic, pos, example, example_cn, sort)
       VALUES(?, ?, ?, ?, ?, ?, ?, (SELECT COALESCE(MAX(sort),0)+1 FROM words WHERE unit_id = ?))`,
    );
    const updWord = db.prepare(
      `UPDATE words SET
         meaning = CASE WHEN ? <> '' THEN ? ELSE meaning END,
         phonetic = CASE WHEN ? <> '' THEN ? ELSE phonetic END,
         pos = CASE WHEN ? <> '' THEN ? ELSE pos END,
         example = CASE WHEN ? <> '' THEN ? ELSE example END,
         example_cn = CASE WHEN ? <> '' THEN ? ELSE example_cn END
       WHERE id = ?`,
    );
    const insWT = db.prepare("INSERT OR IGNORE INTO word_tags(word_id, tag_id) VALUES(?, ?)");
    const findTag = db.prepare("SELECT id FROM tags WHERE name = ?");
    const insTag = db.prepare("INSERT INTO tags(name, color) VALUES(?, ?)");
    const tagCache = new Map<string, number>();
    const tagId = (name: string) => {
      if (tagCache.has(name)) return tagCache.get(name)!;
      let t = findTag.get(name) as { id: number } | undefined;
      if (!t) t = { id: Number(insTag.run(name, TAG_COLORS[Math.floor(Math.random() * TAG_COLORS.length)]).lastInsertRowid) };
      tagCache.set(name, t.id);
      return t.id;
    };

    let added = 0, updated = 0, createdUnits = 0;
    for (const p of plan) {
      let unitId = p.unit.id;
      if (!unitId) {
        unitId = Number(insUnit.run(bookId, p.unit.grade, p.unit.term, p.unit.name, bookId).lastInsertRowid);
        createdUnits++;
      }
      for (const r of p.rows) {
        let wid: number | null = null;
        if (r.status === "new") {
          wid = Number(insWord.run(unitId, r.text, r.meaning, r.phonetic, r.pos, r.example, r.example_cn, unitId).lastInsertRowid);
          added++;
        } else if (r.status === "dup" && r.existingId) {
          wid = r.existingId;
          if (updateDup) {
            updWord.run(r.meaning, r.meaning, r.phonetic, r.phonetic, r.pos, r.pos, r.example, r.example, r.example_cn, r.example_cn, wid);
            updated++;
          }
        }
        if (wid) {
          tagIds.forEach((t) => insWT.run(wid, t));
          r.tags.forEach((name) => insWT.run(wid, tagId(name.slice(0, 20))));
        }
      }
    }
    return { added, updated, createdUnits };
  });
  return ok({ ...result, summary });
});
