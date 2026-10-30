import { body, int, ok, route, str } from "@/lib/api";
import { tx } from "@/lib/db";
import { cleanWord, listWords } from "@/lib/words";

export const GET = route("any", ({ req, user }) => {
  const sp = new URL(req.url).searchParams;
  return ok({
    words: listWords({
      userId: user.id,
      unitId: Number(sp.get("unitId")) || undefined,
      tagId: Number(sp.get("tagId")) || undefined,
      q: str(sp.get("q"), 50) || undefined,
      limit: 500,
    }),
  });
});

export const POST = route("parent", async ({ req }) => {
  const b = await body<Record<string, unknown>>(req);
  const unitId = int(b.unitId);
  const w = cleanWord(b);
  const tagIds = Array.isArray(b.tagIds) ? b.tagIds.map(Number).filter(Number.isInteger) : [];
  const id = tx((db) => {
    const r = db
      .prepare(
        `INSERT INTO words(unit_id, text, meaning, phonetic, pos, example, example_cn, emoji, synonyms, word_family, sort)
         VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, (SELECT COALESCE(MAX(sort),0)+1 FROM words WHERE unit_id = ?))`,
      )
      .run(unitId, w.text, w.meaning, w.phonetic, w.pos, w.example, w.example_cn, w.emoji, w.synonyms ?? "", w.word_family ?? "", unitId);
    const wid = Number(r.lastInsertRowid);
    const ins = db.prepare("INSERT OR IGNORE INTO word_tags(word_id, tag_id) VALUES(?, ?)");
    tagIds.forEach((t) => ins.run(wid, t));
    return wid;
  });
  return ok({ id });
});
