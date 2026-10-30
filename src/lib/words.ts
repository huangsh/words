import "server-only";
import { getDb } from "./db";
import { HttpError, str } from "./api";

export interface WordInput {
  text?: unknown;
  meaning?: unknown;
  phonetic?: unknown;
  pos?: unknown;
  example?: unknown;
  example_cn?: unknown;
  emoji?: unknown;
  synonyms?: unknown;
  word_family?: unknown;
}

export const WORD_FIELDS = ["text", "meaning", "phonetic", "pos", "example", "example_cn", "emoji", "synonyms", "word_family"] as const;

export function cleanWord(b: WordInput, partial = false) {
  const out: Record<string, string> = {};
  for (const f of WORD_FIELDS) {
    if (b[f] === undefined && partial) continue;
    out[f] = str(b[f], f.startsWith("example") ? 300 : f === "synonyms" || f === "word_family" ? 2000 : 120);
  }
  if ((!partial || out.text !== undefined) && !out.text) throw new HttpError(400, "单词不能为空");
  return out;
}

/** 查询单词（附带标签 id 列表、当前用户的掌握盒子与各学习模式解锁状态） */
export function listWords(opts: { unitId?: number; tagId?: number; q?: string; userId: number; limit?: number }) {
  const where: string[] = [];
  const args: (string | number)[] = [opts.userId, opts.userId, opts.userId, opts.userId, opts.userId, opts.userId];
  if (opts.unitId) {
    where.push("w.unit_id = ?");
    args.push(opts.unitId);
  }
  if (opts.tagId) {
    where.push("w.id IN (SELECT word_id FROM word_tags WHERE tag_id = ?)");
    args.push(opts.tagId);
  }
  if (opts.q) {
    where.push("(w.text LIKE ? OR w.meaning LIKE ?)");
    args.push(`%${opts.q}%`, `%${opts.q}%`);
  }
  const rows = getDb()
    .prepare(
      `SELECT w.id, w.unit_id, w.text, w.meaning, w.phonetic, w.pos, w.example, w.example_cn, w.emoji, w.synonyms, w.word_family, w.sort,
              (w.ai_explain IS NOT NULL AND LENGTH(w.ai_explain) > 10) AS has_ai_explain,
              w.ai_explain,
              u.name AS unit_name, u.grade, u.term, b.name AS book_name,
              COALESCE(p.box, -1) AS box,
              (SELECT GROUP_CONCAT(tag_id) FROM word_tags WHERE word_id = w.id) AS tag_ids,
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
       FROM words w
       JOIN units u ON u.id = w.unit_id
       JOIN books b ON b.id = u.book_id
       LEFT JOIN progress p ON p.word_id = w.id AND p.user_id = ?
       ${where.length ? "WHERE " + where.join(" AND ") : ""}
       ORDER BY u.book_id, u.grade, u.term = '下', u.sort, w.sort, w.id
       LIMIT ${opts.limit ?? 2000}`,
    )
    .all(...args) as (Record<string, unknown> & {
      tag_ids: string | null;
      flashcard_done: number;
      quiz_done: number;
      listen_done: number;
      cloze_done: number;
      spell_done: number;
    })[];
  return rows.map((r) => {
    const flashcard_done = Boolean(r.flashcard_done);
    const quiz_done = Boolean(r.quiz_done);
    const listen_done = Boolean(r.listen_done);
    const cloze_done = Boolean(r.cloze_done);
    const spell_done = Boolean(r.spell_done);
    return {
      ...r,
      has_ai_explain: Boolean(r.has_ai_explain),
      ai_explain: (r.ai_explain as string) || undefined,
      tag_ids: r.tag_ids ? r.tag_ids.split(",").map(Number) : [],
      flashcard_done,
      quiz_done,
      listen_done,
      cloze_done,
      spell_done,
      quiz_unlocked: flashcard_done,
      listen_unlocked: flashcard_done,
      cloze_unlocked: flashcard_done && (quiz_done || listen_done),
      spell_unlocked: flashcard_done && (quiz_done || listen_done || cloze_done),
    };
  });
}
