import { body, HttpError, int, ok, route, str } from "@/lib/api";
import { getDb } from "@/lib/db";

type P = { id: string };

export const PATCH = route<P>("parent", async ({ req, params }) => {
  const b = await body(req);
  const name = str(b.name, 20);
  if (!name) throw new HttpError(400, "请填写标签名");
  try {
    getDb().prepare("UPDATE tags SET name = ?, color = ? WHERE id = ?").run(name, str(b.color, 16) || "#4FA3FF", int(params.id));
  } catch (e) {
    if (String(e).includes("UNIQUE")) throw new HttpError(400, "标签已存在");
    throw e;
  }
  return ok();
});

export const DELETE = route<P>("parent", ({ params }) => {
  getDb().prepare("DELETE FROM tags WHERE id = ?").run(int(params.id));
  return ok();
});
