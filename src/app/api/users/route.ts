import { body, HttpError, ok, route, str } from "@/lib/api";
import { hashPassword } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { todayStats } from "@/lib/study";

export const GET = route("parent", () => {
  const users = getDb()
    .prepare("SELECT id, username, role, display_name, avatar, color, daily_goal, created_at FROM users ORDER BY role DESC, id")
    .all() as { id: number }[];
  return ok({ users: users.map((u) => ({ ...u, stats: todayStats(u.id) })) });
});

export const POST = route("parent", async ({ req }) => {
  const b = await body(req);
  const username = str(b.username, 32);
  const password = str(b.password, 64);
  if (!username) throw new HttpError(400, "请填写登录名");
  if (password.length < 3) throw new HttpError(400, "密码至少 3 位");
  const role = b.role === "parent" ? "parent" : "child";
  try {
    const r = getDb()
      .prepare(
        "INSERT INTO users(username, password_hash, role, display_name, avatar, color, daily_goal) VALUES(?, ?, ?, ?, ?, ?, ?)",
      )
      .run(
        username,
        hashPassword(password),
        role,
        str(b.displayName, 32) || username,
        str(b.avatar, 16) || "🐼",
        str(b.color, 16) || "#4FA3FF",
        Math.max(5, Math.min(200, Number(b.dailyGoal) || 20)),
      );
    return ok({ id: Number(r.lastInsertRowid) });
  } catch (e) {
    if (String(e).includes("UNIQUE")) throw new HttpError(400, "登录名已存在");
    throw e;
  }
});
