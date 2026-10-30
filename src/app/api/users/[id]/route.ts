import { body, HttpError, int, ok, route, str } from "@/lib/api";
import { hashPassword } from "@/lib/auth";
import { getDb } from "@/lib/db";

type P = { id: string };

export const PATCH = route<P>("parent", async ({ req, params }) => {
  const id = int(params.id);
  const b = await body(req);
  const db = getDb();
  const sets: string[] = [];
  const args: (string | number)[] = [];
  if (b.displayName !== undefined) {
    sets.push("display_name = ?");
    args.push(str(b.displayName, 32));
  }
  if (b.avatar !== undefined) {
    sets.push("avatar = ?");
    args.push(str(b.avatar, 16));
  }
  if (b.color !== undefined) {
    sets.push("color = ?");
    args.push(str(b.color, 16));
  }
  if (b.dailyGoal !== undefined) {
    sets.push("daily_goal = ?");
    args.push(Math.max(5, Math.min(200, Number(b.dailyGoal) || 20)));
  }
  if (b.username !== undefined) {
    const u = str(b.username, 32);
    if (!u) throw new HttpError(400, "登录名不能为空");
    sets.push("username = ?");
    args.push(u);
  }
  if (b.password) {
    const pw = str(b.password, 64);
    if (pw.length < 3) throw new HttpError(400, "密码至少 3 位");
    sets.push("password_hash = ?");
    args.push(hashPassword(pw));
  }
  if (!sets.length) return ok();
  try {
    db.prepare(`UPDATE users SET ${sets.join(", ")} WHERE id = ?`).run(...args, id);
  } catch (e) {
    if (String(e).includes("UNIQUE")) throw new HttpError(400, "登录名已存在");
    throw e;
  }
  return ok();
});

export const DELETE = route<P>("parent", ({ params, user }) => {
  const id = int(params.id);
  if (id === user.id) throw new HttpError(400, "不能删除自己");
  getDb().prepare("DELETE FROM users WHERE id = ?").run(id);
  return ok();
});
