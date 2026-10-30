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

  // 易错单词：按学习模式分类统计及全部聚合
  const MODE_TITLES: Record<string, string> = {
    flashcard: "闪卡认词",
    quiz: "四选一闯关",
    listen: "听音选词",
    cloze: "例句挖空",
    spell: "拼写挑战",
  };

  const modeRows = db
    .prepare(
      `SELECT 
        sl.mode,
        sl.word_id AS id,
        w.text,
        w.meaning,
        w.emoji,
        COALESCE(p.box, 0) AS box,
        SUM(CASE WHEN sl.correct = 1 THEN 1 ELSE 0 END) AS mode_correct,
        SUM(CASE WHEN sl.correct = 0 THEN 1 ELSE 0 END) AS mode_wrong
       FROM study_logs sl
       JOIN words w ON w.id = sl.word_id
       LEFT JOIN progress p ON p.user_id = sl.user_id AND p.word_id = sl.word_id
       WHERE sl.user_id = ?
       GROUP BY sl.mode, sl.word_id
       HAVING mode_wrong > 0
       ORDER BY (mode_wrong * 1.0 / (mode_correct + mode_wrong)) DESC, mode_wrong DESC`,
    )
    .all(uid) as {
      mode: string;
      id: number;
      text: string;
      meaning: string;
      emoji: string;
      box: number;
      mode_correct: number;
      mode_wrong: number;
    }[];

  const weakByMode: Record<
    string,
    Array<{
      id: number;
      text: string;
      meaning: string;
      emoji: string;
      box: number;
      correct: number;
      wrong: number;
      mode: string;
    }>
  > = {
    flashcard: [],
    quiz: [],
    listen: [],
    cloze: [],
    spell: [],
  };

  const wordMap = new Map<
    number,
    {
      id: number;
      text: string;
      meaning: string;
      emoji: string;
      box: number;
      correct: number;
      wrong: number;
      modes: { mode: string; modeTitle: string; wrong: number; correct: number }[];
    }
  >();

  for (const r of modeRows) {
    const item = {
      id: r.id,
      text: r.text,
      meaning: r.meaning,
      emoji: r.emoji,
      box: r.box,
      correct: r.mode_correct,
      wrong: r.mode_wrong,
      mode: r.mode,
    };
    if (weakByMode[r.mode]) {
      weakByMode[r.mode].push(item);
    }

    const title = MODE_TITLES[r.mode] || r.mode;
    let existing = wordMap.get(r.id);
    if (!existing) {
      existing = {
        id: r.id,
        text: r.text,
        meaning: r.meaning,
        emoji: r.emoji,
        box: r.box,
        correct: 0,
        wrong: 0,
        modes: [],
      };
      wordMap.set(r.id, existing);
    }
    existing.correct += r.mode_correct;
    existing.wrong += r.mode_wrong;
    existing.modes.push({
      mode: r.mode,
      modeTitle: title,
      wrong: r.mode_wrong,
      correct: r.mode_correct,
    });
  }

  // 兜底兼容历史只记在 progress.wrong 的记录（若存在）
  const legacyProgress = db
    .prepare(
      `SELECT w.id, w.text, w.meaning, w.emoji, p.box, p.correct, p.wrong
       FROM progress p JOIN words w ON w.id = p.word_id
       WHERE p.user_id = ? AND p.wrong > 0`,
    )
    .all(uid) as {
      id: number;
      text: string;
      meaning: string;
      emoji: string;
      box: number;
      correct: number;
      wrong: number;
    }[];

  for (const lp of legacyProgress) {
    if (!wordMap.has(lp.id)) {
      const fallbackItem = {
        id: lp.id,
        text: lp.text,
        meaning: lp.meaning,
        emoji: lp.emoji,
        box: lp.box,
        correct: lp.correct,
        wrong: lp.wrong,
        mode: "spell",
      };
      weakByMode.spell.push(fallbackItem);
      wordMap.set(lp.id, {
        ...fallbackItem,
        modes: [{ mode: "spell", modeTitle: "拼写挑战", wrong: lp.wrong, correct: lp.correct }],
      });
    }
  }

  const weak = Array.from(wordMap.values()).sort((a, b) => {
    const rateA = a.wrong / (a.correct + a.wrong);
    const rateB = b.wrong / (b.correct + b.wrong);
    if (rateB !== rateA) return rateB - rateA;
    return b.wrong - a.wrong;
  });

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

  return ok({ user: target, summary: todayStats(uid), daily, boxes, weak, weakByMode, units });
});
