import { body, int, ok, route } from "@/lib/api";
import { getDb, tx } from "@/lib/db";
import { cleanWord, WORD_FIELDS } from "@/lib/words";

type P = { id: string };

export const PATCH = route<P>("parent", async ({ req, params }) => {
  const id = int(params.id);
  const b = await body<Record<string, unknown>>(req);
  const w = cleanWord(b, true);
  tx((db) => {
    const keys = WORD_FIELDS.filter((f) => w[f] !== undefined);
    if (keys.length)
      db.prepare(`UPDATE words SET ${keys.map((k) => `${k} = ?`).join(", ")} WHERE id = ?`).run(
        ...keys.map((k) => w[k]),
        id,
      );
    if (b.unitId !== undefined) db.prepare("UPDATE words SET unit_id = ? WHERE id = ?").run(int(b.unitId), id);
    if (Array.isArray(b.tagIds)) {
      db.prepare("DELETE FROM word_tags WHERE word_id = ?").run(id);
      const ins = db.prepare("INSERT OR IGNORE INTO word_tags(word_id, tag_id) VALUES(?, ?)");
      b.tagIds.map(Number).filter(Number.isInteger).forEach((t) => ins.run(id, t));
    }
  });
  return ok();
});

export const DELETE = route<P>("parent", ({ params }) => {
  getDb().prepare("DELETE FROM words WHERE id = ?").run(int(params.id));
  return ok();
});
