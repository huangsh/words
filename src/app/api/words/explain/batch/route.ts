import { body, HttpError, int, ok, route } from "@/lib/api";
import { getDb } from "@/lib/db";
import { requestAiExplainForWord } from "@/lib/aiExplain";

interface BatchTask {
  unitId: number;
  total: number;
  processed: number;
  succeeded: number;
  failed: number;
  currentWord?: string;
  status: "running" | "completed" | "error" | "cancelled";
  error?: string;
  startTime: number;
}

// 内存中保存后台任务状态（按 unitId 索引）
const activeTasks = new Map<number, BatchTask>();

/** 查询当前单元的 AI 解释统计数据及后台任务状态 */
export const GET = route("any", ({ req }) => {
  const sp = new URL(req.url).searchParams;
  const unitId = Number(sp.get("unitId"));
  if (!unitId) throw new HttpError(400, "缺少 unitId");

  const db = getDb();
  const counts = db
    .prepare(
      `SELECT COUNT(*) as total,
              SUM(CASE WHEN ai_explain IS NOT NULL AND LENGTH(ai_explain) > 10 THEN 1 ELSE 0 END) as explained
       FROM words
       WHERE unit_id = ?`,
    )
    .get(unitId) as { total: number; explained: number } | undefined;

  const total = counts?.total || 0;
  const explained = counts?.explained || 0;
  const unexplained = Math.max(0, total - explained);

  const task = activeTasks.get(unitId);

  return ok({
    unitId,
    totalWords: total,
    explainedWords: explained,
    unexplainedWords: unexplained,
    task: task
      ? {
          unitId: task.unitId,
          total: task.total,
          processed: task.processed,
          succeeded: task.succeeded,
          failed: task.failed,
          currentWord: task.currentWord,
          status: task.status,
          error: task.error,
        }
      : undefined,
  });
});

/** 触发单元内单词的批量后台 AI 解释 */
export const POST = route("any", async ({ req }) => {
  const b = await body<{ unitId: number; force?: boolean }>(req);
  const unitId = int(b.unitId);
  if (!unitId) throw new HttpError(400, "缺少 unitId");

  // 如果当前单元已有正在运行的后台任务，直接返回当前任务进度
  const existing = activeTasks.get(unitId);
  if (existing && existing.status === "running") {
    return ok({ task: existing, alreadyRunning: true });
  }

  const db = getDb();
  const query = b.force
    ? "SELECT id, text, meaning, pos FROM words WHERE unit_id = ? ORDER BY sort, id"
    : "SELECT id, text, meaning, pos FROM words WHERE unit_id = ? AND (ai_explain IS NULL OR LENGTH(ai_explain) <= 10) ORDER BY sort, id";

  const words = db.prepare(query).all(unitId) as { id: number; text: string; meaning: string; pos: string }[];

  if (words.length === 0) {
    return ok({
      message: "本单元所有单词均已完成 AI 解释！",
      total: 0,
      processed: 0,
      status: "completed",
    });
  }

  const task: BatchTask = {
    unitId,
    total: words.length,
    processed: 0,
    succeeded: 0,
    failed: 0,
    currentWord: words[0]?.text,
    status: "running",
    startTime: Date.now(),
  };

  activeTasks.set(unitId, task);

  // 异步在 Node.js 后台进行，逐词调用与持久化保存，不阻塞当前 HTTP 响应
  (async () => {
    for (const w of words) {
      // 若任务被取消则中止
      const cur = activeTasks.get(unitId);
      if (!cur || cur.status !== "running") break;

      task.currentWord = w.text;
      try {
        const { explain } = await requestAiExplainForWord({
          text: w.text,
          meaning: w.meaning,
          pos: w.pos,
        });
        db.prepare("UPDATE words SET ai_explain = ? WHERE id = ?").run(JSON.stringify(explain), w.id);
        task.succeeded++;
      } catch (err) {
        task.failed++;
        console.error(`[BatchExplain] 单词 ${w.text} 生成失败:`, err instanceof Error ? err.message : err);
      }
      task.processed++;
      // 短暂缓冲 150ms 避免上游 API 限频
      await new Promise((r) => setTimeout(r, 150));
    }

    if (task.status === "running") {
      task.status = "completed";
      task.currentWord = undefined;
    }
  })().catch((err) => {
    task.status = "error";
    task.error = err instanceof Error ? err.message : "后台执行异常";
  });

  return ok({
    task,
    started: true,
  });
});

/** 取消正在运行的后台生成任务 */
export const DELETE = route("any", ({ req }) => {
  const sp = new URL(req.url).searchParams;
  const unitId = Number(sp.get("unitId"));
  if (!unitId) throw new HttpError(400, "缺少 unitId");

  const task = activeTasks.get(unitId);
  if (task && task.status === "running") {
    task.status = "cancelled";
    task.currentWord = undefined;
  }

  return ok({ cancelled: true });
});
