import { body, HttpError, int, ok, route, str } from "@/lib/api";
import { getDb } from "@/lib/db";
import { listWords } from "@/lib/words";

type P = { id: string };

export const GET = route<P>("any", ({ params, user }) => {
  const id = int(params.id);
  const unit = getDb()
    .prepare(
      "SELECT u.id, u.book_id, u.grade, u.term, u.name, b.name AS book_name FROM units u JOIN books b ON b.id = u.book_id WHERE u.id = ?",
    )
    .get(id);
  if (!unit) throw new HttpError(404, "单元不存在");
  return ok({ unit, words: listWords({ unitId: id, userId: user.id }) });
});

export const PATCH = route<P>("parent", async ({ req, params }) => {
  const b = await body(req);
  const name = str(b.name, 100);
  if (!name) throw new HttpError(400, "请填写单元名称");
  const grade = int(b.grade);
  getDb()
    .prepare("UPDATE units SET name = ?, grade = ?, term = ? WHERE id = ?")
    .run(name, grade, b.term === "下" ? "下" : "上", int(params.id));
  return ok();
});

export const DELETE = route<P>("parent", ({ params }) => {
  getDb().prepare("DELETE FROM units WHERE id = ?").run(int(params.id));
  return ok();
});
