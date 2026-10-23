import "server-only";
import { getDb, tx } from "./db";

/** Leitner 盒子：box 0 = 新词，1~5 逐级巩固，5 视为已掌握 */
export const MASTERED_BOX = 5;
// 每个盒子对应的下次复习间隔（天）
const INTERVAL_DAYS = [0, 1, 2, 4, 7, 15];

export interface WordRow {
  id: number;
  unit_id: number;
  text: string;
  meaning: string;
  phonetic: string;
  pos: string;
  example: string;
  example_cn: string;
  emoji: string;
  box?: number;
}

const WORD_COLS = "w.id, w.unit_id, w.text, w.meaning, w.phonetic, w.pos, w.example, w.example_cn, w.emoji";

export function recordAnswer(userId: number, wordId: number, mode: string, correct: boolean, updateBox: boolean) {
  return tx((db) => {
    db.prepare("INSERT INTO study_logs(user_id, word_id, mode, correct) VALUES(?, ?, ?, ?)").run(
      userId,
      wordId,
      mode,
      correct ? 1 : 0,
    );
    if (!updateBox) return null;
    const p = db.prepare("SELECT box FROM progress WHERE user_id = ? AND word_id = ?").get(userId, wordId) as
      | { box: number }
      | undefined;
    const oldBox = p?.box ?? 0;
    const box = correct ? Math.min(oldBox + 1, MASTERED_BOX) : 1;
    // 答错：10 分钟后可再复习；答对：按盒子间隔推迟
    const offset = correct ? `+${INTERVAL_DAYS[box]} days` : "+10 minutes";
    db.prepare(
      `INSERT INTO progress(user_id, word_id, box, next_review_at, correct, wrong, last_seen_at)
       VALUES(?, ?, ?, datetime('now', ?), ?, ?, datetime('now'))
       ON CONFLICT(user_id, word_id) DO UPDATE SET
         box = excluded.box, next_review_at = excluded.next_review_at,
         correct = correct + excluded.correct, wrong = wrong + excluded.wrong, last_seen_at = excluded.last_seen_at`,
    ).run(userId, wordId, box, offset, correct ? 1 : 0, correct ? 0 : 1);
    return box;
  });
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export type ScopeType = "unit" | "tag" | "review" | "wrong" | "grade";

/** 生成学习队列：优先到期复习词，其次新词，最后未掌握的词 */
export function buildQueue(userId: number, type: ScopeType, id: number | null, limit: number, bookId?: number) {
  const db = getDb();
  let where = "";
  const args: (string | number)[] = [userId];
  let join = "";

  switch (type) {
    case "unit":
      where = "w.unit_id = ?";
      args.push(id!);
      break;
    case "grade": {
      // id = grade*10 + (term==='下'?1:0)
      join = "JOIN units u ON u.id = w.unit_id";
      where = "u.book_id = ? AND u.grade = ? AND u.term = ?";
      args.push(bookId!, Math.floor(id! / 10), id! % 10 === 1 ? "下" : "上");
      break;
    }
    case "tag":
      join = "JOIN word_tags wt ON wt.word_id = w.id";
      where = "wt.tag_id = ?";
      args.push(id!);
      break;
    case "review":
      where = "p.word_id IS NOT NULL AND p.next_review_at <= datetime('now')";
      break;
    case "wrong":
      where = "p.wrong > 0 AND p.box < 3";
      break;
  }

  const rows = db
    .prepare(
      `SELECT ${WORD_COLS}, COALESCE(p.box, 0) AS box,
              CASE WHEN p.word_id IS NULL THEN 1
                   WHEN p.next_review_at <= datetime('now') AND p.box < ${MASTERED_BOX} THEN 0
                   WHEN p.box < ${MASTERED_BOX} THEN 2 ELSE 3 END AS pri
       FROM words w ${join}
       LEFT JOIN progress p ON p.word_id = w.id AND p.user_id = ?
       WHERE ${where}
       ORDER BY pri, p.next_review_at, w.sort, w.id`,
    )
    .all(...args) as unknown as (WordRow & { pri: number })[];

  // 已全部掌握时仍允许复习（取全部）
  const picked = rows.slice(0, limit);
  const words = shuffle(picked).map(({ pri, ...w }) => {
    void pri;
    return w;
  });

  // 干扰项：同单元 / 同册的其它单词
  const unitIds = [...new Set(words.map((w) => w.unit_id))];
  let pool: { id: number; text: string; meaning: string }[] = [];
  if (unitIds.length) {
    pool = db
      .prepare(
        `SELECT w.id, w.text, w.meaning FROM words w
         WHERE w.unit_id IN (SELECT id FROM units WHERE book_id IN (SELECT book_id FROM units WHERE id IN (${unitIds.map(() => "?").join(",")})))
         ORDER BY (w.unit_id IN (${unitIds.map(() => "?").join(",")})) DESC, RANDOM() LIMIT 80`,
      )
      .all(...unitIds, ...unitIds) as typeof pool;
  }
  return { words, pool, total: rows.length };
}

export function todayStats(userId: number) {
  const db = getDb();
  const today = db
    .prepare(
      "SELECT COUNT(*) AS answers, COALESCE(SUM(correct),0) AS correct FROM study_logs WHERE user_id = ? AND day = date('now','localtime')",
    )
    .get(userId) as { answers: number; correct: number };
  const stars = db.prepare("SELECT COALESCE(SUM(correct),0) AS s FROM study_logs WHERE user_id = ?").get(userId) as {
    s: number;
  };
  const days = db
    .prepare("SELECT DISTINCT day FROM study_logs WHERE user_id = ? ORDER BY day DESC LIMIT 400")
    .all(userId) as { day: string }[];
  // 连续打卡天数（今天没学则从昨天算起）
  let streak = 0;
  const cursor = new Date();
  const fmt = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const set = new Set(days.map((d) => d.day));
  if (!set.has(fmt(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (set.has(fmt(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  const review = db
    .prepare("SELECT COUNT(*) AS c FROM progress WHERE user_id = ? AND next_review_at <= datetime('now')")
    .get(userId) as { c: number };
  const wrong = db.prepare("SELECT COUNT(*) AS c FROM progress WHERE user_id = ? AND wrong > 0 AND box < 3").get(
    userId,
  ) as { c: number };
  const learned = db.prepare("SELECT COUNT(*) AS c, COALESCE(SUM(box >= ?),0) AS m FROM progress WHERE user_id = ?").get(
    MASTERED_BOX,
    userId,
  ) as { c: number; m: number };
  return {
    todayAnswers: today.answers,
    todayCorrect: today.correct,
    stars: stars.s,
    streak,
    reviewDue: review.c,
    wrongCount: wrong.c,
    learned: learned.c,
    mastered: learned.m,
  };
}
