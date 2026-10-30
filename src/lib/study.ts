import "server-only";
import { getDb, tx, type DB } from "./db";

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
  synonyms?: string;
  word_family?: string;
  ai_explain?: string;
  box?: number;
  flashcard_done?: number;
  quiz_done?: number;
  listen_done?: number;
  spell_eligible?: number;
}

const WORD_COLS = "w.id, w.unit_id, w.text, w.meaning, w.phonetic, w.pos, w.example, w.example_cn, w.emoji, w.synonyms, w.word_family, w.ai_explain";

export function recordAnswer(userId: number, wordId: number, mode: string, correct: boolean, updateBox: boolean) {
  return tx((db) => {
    db.prepare("INSERT INTO study_logs(user_id, word_id, mode, correct) VALUES(?, ?, ?, ?)").run(
      userId,
      wordId,
      mode,
      correct ? 1 : 0,
    );
    if (!updateBox) return null;
    const p = db.prepare("SELECT box, wrong FROM progress WHERE user_id = ? AND word_id = ?").get(userId, wordId) as
      | { box: number; wrong: number }
      | undefined;
    const oldBox = p?.box ?? 0;
    const oldWrong = p?.wrong ?? 0;
    const box = correct ? Math.min(oldBox + 1, MASTERED_BOX) : 1;
    // 答错：10 分钟后可再复习；答对：按盒子间隔推迟
    const offset = correct ? `+${INTERVAL_DAYS[box]} days` : "+10 minutes";

    // 错题本规则：只针对「拼写挑战」中拼写错误的单词，其他练习（闪卡认词、四选一、听音选词）不计入错题本
    let wrongChange = 0;
    if (mode === "spell") {
      if (!correct) {
        wrongChange = 1; // 拼写挑战答错，计入错题本
      } else if (oldWrong > 0) {
        wrongChange = -1; // 拼写挑战重新拼对，从错题本消灭
      }
    }
    const initWrong = mode === "spell" && !correct ? 1 : 0;

    db.prepare(
      `INSERT INTO progress(user_id, word_id, box, next_review_at, correct, wrong, last_seen_at)
       VALUES(?, ?, ?, datetime('now', ?), ?, ?, datetime('now'))
       ON CONFLICT(user_id, word_id) DO UPDATE SET
         box = excluded.box, next_review_at = excluded.next_review_at,
         correct = correct + excluded.correct,
         wrong = MAX(0, wrong + ?),
         last_seen_at = excluded.last_seen_at`,
    ).run(userId, wordId, box, offset, correct ? 1 : 0, initWrong, wrongChange);
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

export interface SystemMode {
  key: string;
  title: string;
  desc: string;
  iconName: string;
  color: string;
  shadow: string;
  required: boolean;
}

export const SYSTEM_MODES: SystemMode[] = [
  { key: "flashcard", title: "闪卡认词", desc: "翻卡片 + 跟读发音", iconName: "Layers", color: "bg-brand-400", shadow: "#1b6be0", required: true },
  { key: "quiz", title: "四选一闯关", desc: "中英互选，快速反应", iconName: "ListChecks", color: "bg-mint-500", shadow: "#24b872", required: false },
  { key: "listen", title: "听音选词", desc: "磨耳朵，听发音选意思", iconName: "Headphones", color: "bg-sun-500 text-ink", shadow: "#f5a623", required: false },
  { key: "cloze", title: "例句挖空", desc: "语境填词，掌握用法", iconName: "FileText", color: "bg-amber-500", shadow: "#d97706", required: false },
  { key: "spell", title: "拼写挑战", desc: "全键盘拼出完整单词", iconName: "SpellCheck", color: "bg-grape-500", shadow: "#7c3aed", required: false },
];

/** 获取启用的学习模式列表（支持按用户独立定制，严格保证 flashcard 在首位且必开启） */
export function getEnabledModes(dbInstance?: DB, userId?: number): string[] {
  const db = dbInstance ?? getDb();

  // 若传入特定用户 ID，优先查询该用户的个性化定制模式
  if (userId && userId > 0) {
    const userRow = db
      .prepare("SELECT value FROM settings WHERE key = ?")
      .get(`user_modes_${userId}`) as { value: string } | undefined;
    if (userRow?.value) {
      try {
        const list = JSON.parse(userRow.value);
        if (Array.isArray(list) && list.length > 0) {
          const set = new Set(list);
          const valid = SYSTEM_MODES.map((m) => m.key).filter((k) => k === "flashcard" || set.has(k));
          if (valid.length > 0) return valid;
        }
      } catch {}
    }
  }

  // 回退至系统全局默认设置
  const row = db.prepare("SELECT value FROM settings WHERE key = 'enabled_modes'").get() as { value: string } | undefined;
  if (!row?.value) {
    return ["flashcard", "quiz", "listen", "cloze", "spell"];
  }
  try {
    const list = JSON.parse(row.value);
    if (Array.isArray(list) && list.length > 0) {
      const set = new Set(list);
      const valid = SYSTEM_MODES.map((m) => m.key).filter((k) => k === "flashcard" || set.has(k));
      return valid.length > 0 ? valid : ["flashcard"];
    }
  } catch {}
  return ["flashcard", "quiz", "listen", "cloze", "spell"];
}

/** 家长更新启用的学习模式（支持全局设置或针对特定用户定制） */
export function setEnabledModes(modes: string[], userId?: number): string[] {
  const set = new Set(modes);
  set.add("flashcard");
  const filtered = SYSTEM_MODES.map((m) => m.key).filter((k) => set.has(k));
  const val = JSON.stringify(filtered);
  const db = getDb();
  const key = userId && userId > 0 ? `user_modes_${userId}` : "enabled_modes";
  db.prepare(
    "INSERT INTO settings(key, value) VALUES(?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
  ).run(key, val);
  return filtered;
}

/** 重置特定用户的定制模式，恢复为跟随全局默认 */
export function resetUserModes(userId: number, dbInstance?: DB): void {
  const db = dbInstance ?? getDb();
  db.prepare("DELETE FROM settings WHERE key = ?").run(`user_modes_${userId}`);
}

/** 获取所有单独定制了模式的用户 ID 及其模式映射 */
export function getAllUsersModes(dbInstance?: DB): Record<number, string[]> {
  const db = dbInstance ?? getDb();
  const rows = db.prepare("SELECT key, value FROM settings WHERE key LIKE 'user_modes_%'").all() as {
    key: string;
    value: string;
  }[];
  const map: Record<number, string[]> = {};
  for (const r of rows) {
    const uid = Number(r.key.replace("user_modes_", ""));
    if (uid > 0 && r.value) {
      try {
        const list = JSON.parse(r.value);
        if (Array.isArray(list)) {
          const set = new Set(list);
          map[uid] = SYSTEM_MODES.map((m) => m.key).filter((k) => k === "flashcard" || set.has(k));
        }
      } catch {}
    }
  }
  return map;
}

export type ScopeType = "unit" | "tag" | "review" | "wrong" | "grade";

/** 生成学习队列：
 * 按照已开启模式的流水线顺序（前一个模式完成后才可以进行下一个模式）
 */
export function buildQueue(
  userId: number,
  type: ScopeType,
  id: number | null,
  limit: number,
  bookId?: number,
  mode?: string,
) {
  const db = getDb();
  const enabledModes = getEnabledModes(db, userId);

  let where = "";
  // 5 个 EXISTS (flashcard, quiz, listen, cloze, spell) + 1 个 LEFT JOIN progress
  const args: (string | number)[] = [userId, userId, userId, userId, userId, userId];
  let join = "";

  switch (type) {
    case "unit":
      where = "w.unit_id = ?";
      args.push(id!);
      break;
    case "grade": {
      // id = grade*10 + (term==='下'?1:0)
      join = "JOIN units u ON u.id = w.unit_id";
      where = "u.book_id = ? AND u.grade = ? AND (u.term = ? OR (u.term NOT IN ('上', '下') AND 1=1))";
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
      where = "p.wrong > 0";
      break;
  }

  const rows = db
    .prepare(
      `SELECT ${WORD_COLS}, COALESCE(p.box, 0) AS box,
              CASE WHEN p.word_id IS NULL THEN 1
                   WHEN p.next_review_at <= datetime('now') AND p.box < ${MASTERED_BOX} THEN 0
                   WHEN p.box < ${MASTERED_BOX} THEN 2 ELSE 3 END AS pri,
              EXISTS (
                SELECT 1 FROM study_logs sl
                WHERE sl.user_id = ? AND sl.word_id = w.id
                  AND sl.mode = 'flashcard'
                  AND sl.correct = 1
              ) AS flashcard_done,
              EXISTS (
                SELECT 1 FROM study_logs sl
                WHERE sl.user_id = ? AND sl.word_id = w.id
                  AND sl.mode = 'quiz'
                  AND sl.correct = 1
              ) AS quiz_done,
              EXISTS (
                SELECT 1 FROM study_logs sl
                WHERE sl.user_id = ? AND sl.word_id = w.id
                  AND sl.mode = 'listen'
                  AND sl.correct = 1
              ) AS listen_done,
              EXISTS (
                SELECT 1 FROM study_logs sl
                WHERE sl.user_id = ? AND sl.word_id = w.id
                  AND sl.mode = 'cloze'
                  AND sl.correct = 1
              ) AS cloze_done,
              EXISTS (
                SELECT 1 FROM study_logs sl
                WHERE sl.user_id = ? AND sl.word_id = w.id
                  AND sl.mode = 'spell'
                  AND sl.correct = 1
              ) AS spell_done
       FROM words w ${join}
       LEFT JOIN progress p ON p.word_id = w.id AND p.user_id = ?
       WHERE ${where}
       ORDER BY pri, p.next_review_at, w.sort, w.id`,
    )
    .all(...args) as unknown as (WordRow & {
      pri: number;
      flashcard_done: number;
      quiz_done: number;
      listen_done: number;
      cloze_done: number;
      spell_done: number;
    })[];

  const flashcardCount = rows.filter((r) => Number(r.flashcard_done) === 1).length;
  const quizCount = rows.filter((r) => Number(r.quiz_done) === 1).length;
  const listenCount = rows.filter((r) => Number(r.listen_done) === 1).length;
  const clozeCount = rows.filter((r) => Number(r.cloze_done) === 1).length;
  const spellCount = rows.filter((r) => Number(r.spell_done) === 1).length;

  // 根据已开启模式的流水线，计算每个模式的解锁数量（前一个模式完成后才可以进行下一个模式）
  const unlockedMap: Record<string, number> = {};
  const prevModeMap: Record<string, string | null> = {};

  enabledModes.forEach((mKey, idx) => {
    if (idx === 0) {
      // 首个模式（flashcard）直接全部解锁
      unlockedMap[mKey] = rows.length;
      prevModeMap[mKey] = null;
    } else {
      const prevKey = enabledModes[idx - 1];
      prevModeMap[mKey] = prevKey;
      unlockedMap[mKey] = rows.filter((r) => Number((r as unknown as Record<string, unknown>)[`${prevKey}_done`]) === 1).length;
    }
  });

  let candidateRows = rows;
  if (mode && enabledModes.includes(mode)) {
    const mIdx = enabledModes.indexOf(mode);
    if (mIdx > 0) {
      const prevKey = enabledModes[mIdx - 1];
      candidateRows = rows.filter((r) => Number((r as unknown as Record<string, unknown>)[`${prevKey}_done`]) === 1);
    }
  }

  const picked = candidateRows.slice(0, limit);
  const words = shuffle(picked).map(
    ({ pri, flashcard_done, quiz_done, listen_done, cloze_done, spell_done, ...w }) => {
      void pri;
      void flashcard_done;
      void quiz_done;
      void listen_done;
      void cloze_done;
      void spell_done;
      return w;
    },
  );

  // 干扰项：同单元 / 同册的其它单词
  const unitIds = [...new Set(rows.map((w) => w.unit_id))];
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

  return {
    words,
    pool,
    total: candidateRows.length,
    scopeTotal: rows.length,
    enabledModes,
    modeProgress: {
      flashcard: { done: flashcardCount, unlocked: rows.length, prevMode: null },
      quiz: { done: quizCount, unlocked: unlockedMap.quiz ?? 0, prevMode: prevModeMap.quiz ?? null },
      listen: { done: listenCount, unlocked: unlockedMap.listen ?? 0, prevMode: prevModeMap.listen ?? null },
      cloze: { done: clozeCount, unlocked: unlockedMap.cloze ?? 0, prevMode: prevModeMap.cloze ?? null },
      spell: { done: spellCount, unlocked: unlockedMap.spell ?? 0, prevMode: prevModeMap.spell ?? null },
    },
    flashcardCount,
    quizCount,
    listenCount,
    clozeCount,
    spellCount,
    quizUnlockedCount: unlockedMap.quiz ?? 0,
    listenUnlockedCount: unlockedMap.listen ?? 0,
    clozeUnlockedCount: unlockedMap.cloze ?? 0,
    spellUnlockedCount: unlockedMap.spell ?? 0,
  };
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
  const wrong = db.prepare("SELECT COUNT(*) AS c FROM progress WHERE user_id = ? AND wrong > 0").get(
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
