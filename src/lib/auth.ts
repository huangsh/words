import "server-only";
import crypto from "node:crypto";
import { cookies } from "next/headers";
import { getDb, getSetting, setSetting } from "./db";

export const SESSION_COOKIE = "words_session";
const SESSION_DAYS = 60;

export type Role = "parent" | "child";
export interface SessionUser {
  id: number;
  username: string;
  role: Role;
  display_name: string;
  avatar: string;
  color: string;
  daily_goal: number;
}

function secret(): string {
  if (process.env.SESSION_SECRET) return process.env.SESSION_SECRET;
  let s = getSetting("session_secret");
  if (!s) {
    s = crypto.randomBytes(32).toString("hex");
    setSetting("session_secret", s);
  }
  return s;
}

export function hashPassword(pw: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(pw, salt, 32).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(pw: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const test = crypto.scryptSync(pw, salt, 32);
  const ref = Buffer.from(hash, "hex");
  return ref.length === test.length && crypto.timingSafeEqual(ref, test);
}

function sign(data: string) {
  return crypto.createHmac("sha256", secret()).update(data).digest("base64url");
}

export function createSessionToken(userId: number): string {
  const payload = Buffer.from(JSON.stringify({ uid: userId, exp: Date.now() + SESSION_DAYS * 864e5 })).toString(
    "base64url",
  );
  return `${payload}.${sign(payload)}`;
}

function parseToken(token: string | undefined): number | null {
  if (!token) return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  const expected = sign(payload);
  if (sig.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  try {
    const { uid, exp } = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (typeof uid !== "number" || Date.now() > exp) return null;
    return uid;
  } catch {
    return null;
  }
}

export const sessionCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: SESSION_DAYS * 86400,
  // 家庭内网常用 http 访问，只有显式开启时才设置 secure
  secure: process.env.COOKIE_SECURE === "true",
};

export function getUserById(id: number): SessionUser | null {
  return (
    (getDb()
      .prepare("SELECT id, username, role, display_name, avatar, color, daily_goal FROM users WHERE id = ?")
      .get(id) as SessionUser | undefined) ?? null
  );
}

export async function getSessionUser(): Promise<SessionUser | null> {
  const store = await cookies();
  const uid = parseToken(store.get(SESSION_COOKIE)?.value);
  return uid ? getUserById(uid) : null;
}

export function hasUsers(): boolean {
  return !!getDb().prepare("SELECT 1 FROM users LIMIT 1").get();
}
