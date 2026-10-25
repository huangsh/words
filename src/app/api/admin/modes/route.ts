import { body, ok, route } from "@/lib/api";
import { getEnabledModes, setEnabledModes, SYSTEM_MODES } from "@/lib/study";

export const GET = route("parent", () => {
  return ok({
    enabledModes: getEnabledModes(),
    allModes: SYSTEM_MODES,
  });
});

export const POST = route("parent", async ({ req }) => {
  const b = await body<{ enabledModes: string[] }>(req);
  const updated = setEnabledModes(Array.isArray(b.enabledModes) ? b.enabledModes : []);
  return ok({
    enabledModes: updated,
  });
});
