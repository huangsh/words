import { ok, route } from "@/lib/api";
import { hasUsers } from "@/lib/auth";
import { getDb } from "@/lib/db";

/** 登录页使用：列出家庭成员头像（家庭私有部署，不涉及敏感信息） */
export const GET = route("public", () => {
  const users = getDb()
    .prepare("SELECT id, display_name, avatar, color, role FROM users ORDER BY role DESC, id")
    .all();
  return ok({ initialized: hasUsers(), users });
});
