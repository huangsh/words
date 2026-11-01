import { ok, route } from "@/lib/api";
import { getEnabledModes, todayStats } from "@/lib/study";

export const GET = route("any", ({ user }) =>
  ok({ user, stats: todayStats(user.id), enabledModes: getEnabledModes(undefined, user.id) }),
);
