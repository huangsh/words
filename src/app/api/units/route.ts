import { body, HttpError, int, ok, route, str } from "@/lib/api";
import { getDb } from "@/lib/db";

export const POST = route("parent", async ({ req }) => {
  const b = await body(req);
  const bookId = int(b.bookId);
  const grade = int(b.grade);
  const term = b.term === "下" ? "下" : "上";
  const name = str(b.name, 100);
  if (!name) throw new HttpError(400, "请填写单元名称");
  if (grade < 1 || grade > 6) throw new HttpError(400, "年级应为 1~6");
  const r = getDb()
    .prepare(
      `INSERT INTO units(book_id, grade, term, name, sort)
       VALUES(?, ?, ?, ?, (SELECT COALESCE(MAX(sort),0)+1 FROM units WHERE book_id = ?))`,
    )
    .run(bookId, grade, term, name, bookId);
  return ok({ id: Number(r.lastInsertRowid) });
});
