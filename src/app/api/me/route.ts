import { ok, route } from "@/lib/api";
import { todayStats } from "@/lib/study";

export const GET = route("any", ({ user }) => ok({ user, stats: todayStats(user.id) }));
