import { body, ok, route } from "@/lib/api";
import { getDb } from "@/lib/db";
import { getAllUsersModes, getEnabledModes, resetUserModes, setEnabledModes, SYSTEM_MODES } from "@/lib/study";

export const GET = route("parent", () => {
  const db = getDb();
  const users = db
    .prepare(
      "SELECT id, username, display_name, role, avatar, color FROM users ORDER BY (CASE WHEN role = 'child' THEN 0 ELSE 1 END), id ASC",
    )
    .all() as { id: number; username: string; display_name: string; role: string; avatar: string; color: string }[];

  const globalModes = getEnabledModes(db);
  const userModes = getAllUsersModes(db);

  return ok({
    allModes: SYSTEM_MODES,
    globalModes,
    userModes,
    users,
    enabledModes: globalModes,
  });
});

export const POST = route("parent", async ({ req }) => {
  const b = await body<{
    enabledModes?: string[];
    userId?: number | "global";
    reset?: boolean;
  }>(req);

  const db = getDb();
  const targetUserId = typeof b.userId === "number" && b.userId > 0 ? b.userId : undefined;

  if (b.reset && targetUserId) {
    resetUserModes(targetUserId, db);
  } else if (Array.isArray(b.enabledModes)) {
    setEnabledModes(b.enabledModes, targetUserId);
  }

  const users = db
    .prepare(
      "SELECT id, username, display_name, role, avatar, color FROM users ORDER BY (CASE WHEN role = 'child' THEN 0 ELSE 1 END), id ASC",
    )
    .all() as { id: number; username: string; display_name: string; role: string; avatar: string; color: string }[];

  const globalModes = getEnabledModes(db);
  const userModes = getAllUsersModes(db);

  return ok({
    allModes: SYSTEM_MODES,
    globalModes,
    userModes,
    users,
    enabledModes: targetUserId ? userModes[targetUserId] || globalModes : globalModes,
  });
});
