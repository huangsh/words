import { HttpError, ok, route } from "@/lib/api";
import { buildQueue, type ScopeType } from "@/lib/study";

const TYPES: ScopeType[] = ["unit", "tag", "review", "wrong", "grade"];

export const GET = route("any", ({ req, user }) => {
  const sp = new URL(req.url).searchParams;
  const type = sp.get("type") as ScopeType;
  if (!TYPES.includes(type)) throw new HttpError(400, "学习范围错误");
  const id = Number(sp.get("id")) || null;
  if ((type === "unit" || type === "tag" || type === "grade") && !id) throw new HttpError(400, "缺少参数");
  const limit = Math.max(1, Math.min(200, Number(sp.get("limit")) || 20));
  const bookId = Number(sp.get("bookId")) || undefined;
  const mode = sp.get("mode") || undefined;
  return ok(buildQueue(user.id, type, id, limit, bookId, mode));
});
