import { HttpError, ok, route } from "@/lib/api";
import { getUserById } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { MASTERED_BOX, todayStats } from "@/lib/study";

/** 学习统计：家长可查看任意成员，孩子只能看自己 */
export const GET = route("any", ({ req, user }) => {
  const sp = new URL(req.url).searchParams;
  const uid = Number(sp.get("userId")) || user.id;
  if (uid !== user.id && user.role !== "parent") throw new HttpError(403, "无权查看");
  const target = getUserById(uid);
  if (!target) throw new HttpError(404, "用户不存在");
  const db = getDb();

  const daily = db
    .prepare(
      `SELECT day, COUNT(*) AS answers, SUM(correct) AS correct, COUNT(DISTINCT word_id) AS words
       FROM study_logs WHERE user_id = ? AND day >= date('now','localtime','-13 days')
       GROUP BY day ORDER BY day`,
    )
    .all(uid);

  const boxes = db
    .prepare("SELECT box, COUNT(*) AS c FROM progress WHERE user_id = ? GROUP BY box ORDER BY box")
    .all(uid);

  const weak = db
    .prepare(
      `SELECT w.id, w.text, w.meaning, w.emoji, p.box, p.correct, p.wrong
       FROM progress p JOIN words w ON w.id = p.word_id
       WHERE p.user_id = ? AND p.wrong > 0
       ORDER BY (p.wrong * 1.0 / (p.correct + p.wrong)) DESC, p.wrong DESC LIMIT 20`,
    )
    .all(uid);

  const units = db
    .prepare(
      `SELECT u.id, u.name, u.grade, u.term, b.name AS book_name, COUNT(w.id) AS total,
              SUM(p.word_id IS NOT NULL) AS learned, SUM(p.box >= ${MASTERED_BOX}) AS mastered
       FROM units u JOIN books b ON b.id = u.book_id JOIN words w ON w.unit_id = u.id
       LEFT JOIN progress p ON p.word_id = w.id AND p.user_id = ?
       GROUP BY u.id HAVING learned > 0
       ORDER BY MAX(p.last_seen_at) DESC LIMIT 12`,
    )
    .all(uid);

  return ok({ user: target, summary: todayStats(uid), daily, boxes, weak, units });
});
