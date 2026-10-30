import { body, HttpError, ok, route } from "@/lib/api";
import { getDb, getSetting, setSetting } from "@/lib/db";

export const GET = route("any", ({ user }) => {
  const raw = getSetting(`visible_books_${user.id}`);
  let visibleBookIds: number[] | null = null;
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        visibleBookIds = parsed.map(Number).filter((n) => !isNaN(n));
      }
    } catch {
      visibleBookIds = null;
    }
  }
  return ok({ visibleBookIds, dailyGoal: user.daily_goal });
});

export const PATCH = route("any", async ({ req, user }) => {
  const b = await body(req);
  const db = getDb();

  if (Array.isArray(b.visibleBookIds)) {
    const ids = b.visibleBookIds.map(Number).filter((n) => !isNaN(n) && n > 0);
    if (ids.length === 0) {
      throw new HttpError(400, "至少需要保留一个显示的词库");
    }
    setSetting(`visible_books_${user.id}`, JSON.stringify(ids));
  }

  if (typeof b.dailyGoal === "number") {
    const goal = Math.max(5, Math.min(200, Math.round(b.dailyGoal)));
    db.prepare("UPDATE users SET daily_goal = ? WHERE id = ?").run(goal, user.id);
  }

  return ok();
});
