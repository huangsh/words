import { NextResponse } from "next/server";
import { body, HttpError, int, route, str } from "@/lib/api";
import { createSessionToken, SESSION_COOKIE, sessionCookieOptions, verifyPassword } from "@/lib/auth";
import { getDb } from "@/lib/db";

// 简单的防暴力尝试：同一账号连续失败 5 次锁定 1 分钟
const failures = new Map<number, { n: number; until: number }>();

export const POST = route("public", async ({ req }) => {
  const b = await body(req);
  const userId = int(b.userId);
  const password = str(b.password, 64);
  const f = failures.get(userId);
  if (f && f.until > Date.now()) throw new HttpError(429, "尝试次数太多，请稍等一分钟");

  const u = getDb().prepare("SELECT id, password_hash, role FROM users WHERE id = ?").get(userId) as
    | { id: number; password_hash: string; role: string }
    | undefined;
  if (!u || !verifyPassword(password, u.password_hash)) {
    const n = (f?.n ?? 0) + 1;
    failures.set(userId, { n: n >= 5 ? 0 : n, until: n >= 5 ? Date.now() + 60_000 : 0 });
    throw new HttpError(401, "密码不对哦，再试一次");
  }
  failures.delete(userId);
  const res = NextResponse.json({ ok: true, role: u.role });
  res.cookies.set(SESSION_COOKIE, createSessionToken(u.id), sessionCookieOptions);
  return res;
});
