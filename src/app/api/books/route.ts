import { body, HttpError, ok, route, str } from "@/lib/api";
import { getDb } from "@/lib/db";

export const GET = route("any", () => {
  const books = getDb()
    .prepare(
      `SELECT b.id, b.name, b.description, b.builtin,
              (SELECT COUNT(*) FROM units u WHERE u.book_id = b.id) AS unit_count,
              (SELECT COUNT(*) FROM words w JOIN units u ON u.id = w.unit_id WHERE u.book_id = b.id) AS word_count
       FROM books b ORDER BY b.sort, b.id`,
    )
    .all();
  return ok({ books });
});

export const POST = route("parent", async ({ req }) => {
  const b = await body(req);
  const name = str(b.name, 64);
  if (!name) throw new HttpError(400, "请填写词库名称");
  const r = getDb()
    .prepare("INSERT INTO books(name, description, sort) VALUES(?, ?, (SELECT COALESCE(MAX(sort),0)+1 FROM books))")
    .run(name, str(b.description, 200));
  return ok({ id: Number(r.lastInsertRowid) });
});
