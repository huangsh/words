import { body, HttpError, int, ok, route, str } from "@/lib/api";
import { getDb } from "@/lib/db";
import { MASTERED_BOX } from "@/lib/study";

type P = { id: string };

/** 词库详情：所有单元（含单词数、当前用户的学习进度） */
export const GET = route<P>("any", ({ params, user }) => {
  const id = int(params.id);
  const db = getDb();
  const book = db.prepare("SELECT id, name, description, builtin FROM books WHERE id = ?").get(id);
  if (!book) throw new HttpError(404, "词库不存在");
  const units = db
    .prepare(
      `SELECT u.id, u.grade, u.term, u.name, u.sort,
              COUNT(w.id) AS word_count,
              COALESCE(SUM(p.word_id IS NOT NULL), 0) AS learned,
              COALESCE(SUM(p.box >= ${MASTERED_BOX}), 0) AS mastered
       FROM units u
       LEFT JOIN words w ON w.unit_id = u.id
       LEFT JOIN progress p ON p.word_id = w.id AND p.user_id = ?
       WHERE u.book_id = ?
       GROUP BY u.id
       ORDER BY u.grade, u.term = '下', u.sort, u.id`,
    )
    .all(user.id, id);
  return ok({ book, units });
});

export const PATCH = route<P>("parent", async ({ req, params }) => {
  const b = await body(req);
  const name = str(b.name, 64);
  if (!name) throw new HttpError(400, "请填写词库名称");
  getDb().prepare("UPDATE books SET name = ?, description = ? WHERE id = ?").run(name, str(b.description, 200), int(params.id));
  return ok();
});

export const DELETE = route<P>("parent", ({ params }) => {
  getDb().prepare("DELETE FROM books WHERE id = ?").run(int(params.id));
  return ok();
});
