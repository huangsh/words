import { body, HttpError, ok, route, str } from "@/lib/api";
import { getDb } from "@/lib/db";

export const GET = route("any", () => {
  const tags = getDb()
    .prepare(
      "SELECT t.id, t.name, t.color, (SELECT COUNT(*) FROM word_tags wt WHERE wt.tag_id = t.id) AS word_count FROM tags t ORDER BY t.id",
    )
    .all();
  return ok({ tags });
});

export const POST = route("parent", async ({ req }) => {
  const b = await body(req);
  const name = str(b.name, 20);
  if (!name) throw new HttpError(400, "请填写标签名");
  try {
    const r = getDb().prepare("INSERT INTO tags(name, color) VALUES(?, ?)").run(name, str(b.color, 16) || "#4FA3FF");
    return ok({ id: Number(r.lastInsertRowid) });
  } catch (e) {
    if (String(e).includes("UNIQUE")) throw new HttpError(400, "标签已存在");
    throw e;
  }
});
