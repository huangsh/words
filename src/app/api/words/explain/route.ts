import { body, HttpError, int, ok, route, str } from "@/lib/api";
import { getDb } from "@/lib/db";
import {
  AiExplainResult,
  AiProfileStored,
  AiThinkingMode,
  buildConfigResponse,
  DEFAULT_DEEPSEEK_BASE_URL,
  DEFAULT_DEEPSEEK_MODEL,
  DEFAULT_EXPLAIN_PROMPT,
  isReasoningModel,
  loadAiProfilesState,
  requestAiExplainForWord,
  saveAiProfilesState,
} from "@/lib/aiExplain";

/** GET /api/words/explain — 获取所有 AI 配置方案及当前生效方案 */
export const GET = route("any", () => {
  return ok(buildConfigResponse());
});

/** PUT /api/words/explain — 新增、修改、切换或删除 AI 配置方案 */
export const PUT = route("any", async ({ req }) => {
  const b = await body<{
    action?: "save" | "select" | "delete";
    profileId?: string;
    profile?: {
      id?: string;
      name?: string;
      apiKey?: string;
      baseUrl?: string;
      model?: string;
      prompt?: string;
      thinkingMode?: AiThinkingMode;
    };
    id?: string;
    name?: string;
    apiKey?: string;
    baseUrl?: string;
    model?: string;
    prompt?: string;
    thinkingMode?: AiThinkingMode;
    setActive?: boolean;
  }>(req);

  const state = loadAiProfilesState();
  let profiles = [...state.profiles];
  let activeId = state.activeProfileId;

  if (b.action === "select" && b.profileId) {
    const target = profiles.find((p) => p.id === b.profileId);
    if (!target) throw new HttpError(404, "未找到该配置方案");
    saveAiProfilesState(profiles, target.id);
    return ok(buildConfigResponse());
  }

  if (b.action === "delete" && b.profileId) {
    if (profiles.length <= 1) {
      throw new HttpError(400, "至少需要保留一套 AI 配置方案");
    }
    profiles = profiles.filter((p) => p.id !== b.profileId);
    if (activeId === b.profileId) {
      activeId = profiles[0].id;
    }
    saveAiProfilesState(profiles, activeId);
    return ok(buildConfigResponse());
  }

  // 默认 save 行为：更新指定方案或新增方案
  const pData = b.profile || b;
  const targetId = pData.id || b.profileId || activeId;
  const existingIdx = profiles.findIndex((p) => p.id === targetId);
  const rawNewKey = typeof pData.apiKey === "string" ? pData.apiKey.trim() : "";
  const isValidNewKey = Boolean(rawNewKey && !rawNewKey.includes("****"));

  const cleanBaseUrl = (typeof pData.baseUrl === "string" ? pData.baseUrl.trim() : "").replace(/\/+$/, "") || DEFAULT_DEEPSEEK_BASE_URL;
  const cleanModel = (typeof pData.model === "string" ? pData.model.trim() : "") || DEFAULT_DEEPSEEK_MODEL;
  const cleanPrompt = (typeof pData.prompt === "string" ? pData.prompt.trim() : "") || DEFAULT_EXPLAIN_PROMPT;
  const cleanName = (typeof pData.name === "string" ? pData.name.trim() : "") || `${cleanModel} 配置`;
  const cleanThinkingMode: AiThinkingMode =
    pData.thinkingMode === "disabled" || pData.thinkingMode === "enabled" || pData.thinkingMode === "auto"
      ? pData.thinkingMode
      : isReasoningModel(cleanModel)
        ? "enabled"
        : "auto";

  if (existingIdx >= 0 && pData.id !== "new" && b.id !== "new") {
    const prev = profiles[existingIdx];
    const nextKey = isValidNewKey ? rawNewKey : prev.apiKey || state.active.apiKey;
    profiles[existingIdx] = {
      ...prev,
      name: typeof pData.name === "string" && pData.name.trim() ? pData.name.trim() : prev.name,
      apiKey: nextKey,
      baseUrl: cleanBaseUrl,
      model: cleanModel,
      prompt: cleanPrompt,
      thinkingMode: cleanThinkingMode,
    };
    if (isValidNewKey) {
      profiles = profiles.map((p, idx) =>
        idx !== existingIdx && p.baseUrl === cleanBaseUrl && (!p.apiKey || p.apiKey === prev.apiKey)
          ? { ...p, apiKey: rawNewKey }
          : p,
      );
    }
    if (b.setActive !== false) {
      activeId = profiles[existingIdx].id;
    }
  } else {
    const newId = `profile-${Date.now()}`;
    const inheritedKey = isValidNewKey ? rawNewKey : state.active.apiKey;
    const created: AiProfileStored = {
      id: newId,
      name: cleanName,
      apiKey: inheritedKey,
      baseUrl: cleanBaseUrl,
      model: cleanModel,
      prompt: cleanPrompt,
      thinkingMode: cleanThinkingMode,
    };
    profiles.push(created);
    if (b.setActive !== false) {
      activeId = created.id;
    }
  }

  saveAiProfilesState(profiles, activeId);
  return ok(buildConfigResponse());
});

/** POST /api/words/explain — 调用指定或当前激活的 AI 配置拆解单词并缓存 */
export const POST = route("any", async ({ req }) => {
  const b = await body<{
    wordId?: number;
    text?: string;
    meaning?: string;
    pos?: string;
    force?: boolean;
    profileId?: string;
  }>(req);

  const db = getDb();
  const wordId = b.wordId ? int(b.wordId) : 0;
  let text = str(b.text, 120);
  let meaning = str(b.meaning, 300);
  let pos = str(b.pos, 40);

  if (wordId > 0) {
    const row = db
      .prepare("SELECT id, text, meaning, pos, ai_explain FROM words WHERE id = ?")
      .get(wordId) as { id: number; text: string; meaning: string; pos: string; ai_explain: string } | undefined;

    if (row) {
      text = text || row.text;
      meaning = meaning || row.meaning;
      pos = pos || row.pos;
      if (!b.force && row.ai_explain) {
        try {
          const cached = JSON.parse(row.ai_explain) as AiExplainResult;
          if (cached && cached.etymology && cached.evolution && cached.cognates) {
            return ok({ explain: cached, cached: true });
          }
        } catch {}
      }
    }
  }

  const { explain, profileName } = await requestAiExplainForWord({
    text,
    meaning,
    pos,
    profileId: b.profileId,
  });

  if (wordId > 0) {
    db.prepare("UPDATE words SET ai_explain = ? WHERE id = ?").run(JSON.stringify(explain), wordId);
  }

  return ok({
    explain,
    cached: false,
    profileName,
  });
});
