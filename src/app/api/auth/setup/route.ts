import { NextResponse } from "next/server";
import { body, HttpError, route, str } from "@/lib/api";
import { createSessionToken, hashPassword, hasUsers, SESSION_COOKIE, sessionCookieOptions } from "@/lib/auth";
import { getDb } from "@/lib/db";

/** 首次使用：创建家长账号 */
export const POST = route("public", async ({ req }) => {
  if (hasUsers()) throw new HttpError(400, "已经初始化过了");
  const b = await body(req);
  const username = str(b.username, 32);
  const password = str(b.password, 64);
  const displayName = str(b.displayName, 32) || username;
  if (!username || password.length < 4) throw new HttpError(400, "用户名不能为空，密码至少 4 位");
  const r = getDb()
    .prepare("INSERT INTO users(username, password_hash, role, display_name, avatar, color) VALUES(?, ?, 'parent', ?, ?, ?)")
    .run(username, hashPassword(password), displayName, str(b.avatar, 16) || "🦉", "#7C5CFF");
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, createSessionToken(Number(r.lastInsertRowid)), sessionCookieOptions);
  return res;
});
