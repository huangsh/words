import { body, int, ok, route, str } from "@/lib/api";
import { recordAnswer } from "@/lib/study";

export const POST = route("any", async ({ req, user }) => {
  const b = await body(req);
  const box = recordAnswer(user.id, int(b.wordId), str(b.mode, 20) || "unknown", b.correct === true, b.first !== false);
  return ok({ box });
});
