import "server-only";
import { NextResponse } from "next/server";
import { getSessionUser, type Role, type SessionUser } from "./auth";

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

export const ok = (data: unknown = { ok: true }) => NextResponse.json(data);

/** 统一包装：鉴权 + 错误处理 */
export function route<C = unknown>(
  role: Role | "any" | "public",
  fn: (ctx: { req: Request; user: SessionUser; params: C }) => Promise<Response> | Response,
) {
  return async (req: Request, context: { params: Promise<C> }) => {
    try {
      let user = null as SessionUser | null;
      if (role !== "public") {
        user = await getSessionUser();
        if (!user) throw new HttpError(401, "请先登录");
        if (role === "parent" && user.role !== "parent") throw new HttpError(403, "需要家长权限");
      }
      const params = (context?.params ? await context.params : {}) as C;
      return await fn({ req, user: user as SessionUser, params });
    } catch (e) {
      if (e instanceof HttpError) return NextResponse.json({ error: e.message }, { status: e.status });
      console.error(e);
      const msg = e instanceof Error ? e.message : "服务器错误";
      return NextResponse.json({ error: msg }, { status: 500 });
    }
  };
}

export async function body<T = Record<string, unknown>>(req: Request): Promise<T> {
  try {
    const parsed = await req.json();
    if (typeof parsed === "string") {
      return JSON.parse(parsed) as T;
    }
    return parsed as T;
  } catch {
    throw new HttpError(400, "请求格式错误");
  }
}

export function str(v: unknown, max = 500): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export function int(v: unknown): number {
  const n = Number(v);
  if (!Number.isInteger(n)) throw new HttpError(400, "参数错误");
  return n;
}
