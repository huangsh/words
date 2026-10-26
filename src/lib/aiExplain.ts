import { HttpError } from "@/lib/api";
import { getSetting, setSetting } from "@/lib/db";

export const DEFAULT_DEEPSEEK_BASE_URL = "https://api.deepseek.com";
export const DEFAULT_DEEPSEEK_MODEL = "deepseek-chat";

export const DEFAULT_EXPLAIN_PROMPT = `请作为资深英语词汇学与词源记忆专家，对单词「{{word}}」（{{pos}} {{meaning}}）进行深度拆解与助记分析。
请严格按照以下三个核心维度展开，语言要求简练透彻、通俗易懂、富有画面感，杜绝生僻术语：

1. 结构拆解（构词公式）
- 拆解公式：按「前缀 + 词根 + 后缀」拆解（若为基础原生词/合成词，则按词源本义、音义联想或合成结构拆解，切勿强行编造伪词根）。
- 部件解析：逐一说明每个前缀（方向/状态）、词根（核心动作/意象，注明词源本义）和后缀（词性转换）的具体含义。
- 字面合义：用一句话总结各部件组合后的字面本义如何过渡到现代核心释义。

2. 词义演进逻辑（认知画面链）
- 源头具象画面：还原该词或词根最初对应的具体物理动作、生活场景或历史源头（帮助大脑建立视觉锚点）。
- 引申演进路径：用清晰的逻辑链条（具象本义 → 隐喻引申 → 现代高频义），解释为什么最初的动作会演变为现在的中文释义。
- 高频语境应用：点出该词在现代英语（如学术阅读、写作或日常核心场景）中的地道搭配与语感色彩。

3. 同根词串联记忆（滚雪球扩充）
- 核心词根提炼：提炼出最核心的同源词根及其一句话核心意象。
- 同根词家族串联：精选 3～5 个共用该词根的高频核心词汇（以熟带生），每个词给出「英文 + 词性 + 核心释义 + 前缀词根拆解微公式」。
- 一句话串记口诀：编写一句朗朗上口、有场景逻辑的助记口诀，将目标词与同根词串联在一句话中一网打尽。`;

export const SYSTEM_JSON_INSTRUCTION = `你是一位精通构词法、历史语言学与高效记忆法的英语词汇导师。
请根据用户的拆解要求，输出严格合法的 JSON 对象（不要包含任何 Markdown 代码块包裹之外的多余解释），JSON 结构如下：
{
  "etymology": {
    "formula": "前缀 + 词根 + 后缀 的直观公式，如：dis- (分开、展开) + sert (连接、编排) + -ation (名词后缀)",
    "parts": [
      { "affix": "部件，如 dis-", "type": "前缀 / 词根 / 后缀 / 词源", "meaning": "该部件的简明含义与作用" }
    ],
    "literal": "字面合义到实际词义的一句话推导总结"
  },
  "evolution": {
    "origin": "源头具象画面：最初的物理动作或具象场景",
    "development": "引申演进路径：从具体画面到抽象词义的逻辑推导链条",
    "usage": "高频语境应用：现代英语中的典型搭配、常见场景或语感提示"
  },
  "cognates": {
    "root": "核心词根及其本义，如：sert / ser = 连接、编排 (join / arrange)",
    "words": [
      {
        "word": "同根词英文，如 insert",
        "pos": "词性，如 v.",
        "meaning": "核心中文释义，如 插入，嵌入",
        "breakdown": "拆解助记微公式，如 in- (向内) + sert (连接) → 往里面塞进去"
      }
    ],
    "mnemonic": "一句话把目标词与上述同根词全部串联起来的趣味助记口诀"
  }
}`;

export interface AiExplainResult {
  thinking?: string;
  etymology: {
    formula: string;
    parts: { affix: string; type: string; meaning: string }[];
    literal: string;
  };
  evolution: {
    origin: string;
    development: string;
    usage: string;
  };
  cognates: {
    root: string;
    words: { word: string; pos: string; meaning: string; breakdown: string }[];
    mnemonic: string;
  };
}

export type AiThinkingMode = "disabled" | "enabled" | "auto";

export interface AiProfileStored {
  id: string;
  name: string;
  apiKey: string;
  baseUrl: string;
  model: string;
  prompt: string;
  thinkingMode?: AiThinkingMode;
}

export interface AiProfileClient {
  id: string;
  name: string;
  hasKey: boolean;
  maskedKey: string;
  baseUrl: string;
  model: string;
  prompt: string;
  thinkingMode: AiThinkingMode;
}

export function isReasoningModel(modelName: string): boolean {
  const m = (modelName || "").toLowerCase();
  return (
    m.includes("reasoner") ||
    m.includes("r1") ||
    m.includes("qwq") ||
    m.includes("thinking") ||
    m.includes("deepseek-r")
  );
}

export function maskKey(key: string): string {
  if (!key) return "";
  if (key.length <= 8) return "****";
  return `${key.slice(0, 5)}****${key.slice(-4)}`;
}

export function resolveEndpoint(baseUrl: string): { primary: string; fallback: string } {
  const clean = (baseUrl || DEFAULT_DEEPSEEK_BASE_URL).trim().replace(/\/+$/, "");
  if (clean.endsWith("/chat/completions")) {
    return { primary: clean, fallback: clean };
  }
  if (clean.endsWith("/v1")) {
    return { primary: `${clean}/chat/completions`, fallback: clean.replace(/\/v1$/, "/chat/completions") };
  }
  if (clean.includes("api.deepseek.com")) {
    return { primary: `${clean}/chat/completions`, fallback: `${clean}/v1/chat/completions` };
  }
  // 绝大多数兼容网关 (如 Magpie, Ollama, OpenRouter, OneAPI) 默认位于 /v1/chat/completions
  return { primary: `${clean}/v1/chat/completions`, fallback: `${clean}/chat/completions` };
}

export function toClientProfile(p: AiProfileStored): AiProfileClient {
  const effectiveKey = p.apiKey || process.env.DEEPSEEK_API_KEY?.trim() || "";
  const model = p.model || DEFAULT_DEEPSEEK_MODEL;
  const thinkingMode: AiThinkingMode = p.thinkingMode || (isReasoningModel(model) ? "enabled" : "auto");
  return {
    id: p.id,
    name: p.name,
    hasKey: Boolean(effectiveKey),
    maskedKey: maskKey(effectiveKey),
    baseUrl: p.baseUrl || DEFAULT_DEEPSEEK_BASE_URL,
    model,
    prompt: p.prompt || DEFAULT_EXPLAIN_PROMPT,
    thinkingMode,
  };
}

export function loadAiProfilesState(): {
  profiles: AiProfileStored[];
  activeProfileId: string;
  active: AiProfileStored;
} {
  const legacyKey = getSetting("deepseek_api_key")?.trim() || process.env.DEEPSEEK_API_KEY?.trim() || "";
  const legacyBaseUrl = (
    getSetting("deepseek_base_url")?.trim() ||
    process.env.DEEPSEEK_BASE_URL?.trim() ||
    DEFAULT_DEEPSEEK_BASE_URL
  ).replace(/\/+$/, "");
  const legacyModel = getSetting("deepseek_model")?.trim() || process.env.DEEPSEEK_MODEL?.trim() || DEFAULT_DEEPSEEK_MODEL;
  const legacyPrompt = getSetting("deepseek_prompt")?.trim() || DEFAULT_EXPLAIN_PROMPT;

  let profiles: AiProfileStored[] = [];
  const rawProfiles = getSetting("ai_profiles");
  if (rawProfiles) {
    try {
      const parsed = JSON.parse(rawProfiles);
      if (Array.isArray(parsed) && parsed.length > 0) {
        profiles = parsed.map((item, idx) => {
          const model = String(item.model || DEFAULT_DEEPSEEK_MODEL);
          return {
            id: String(item.id || `profile-${idx + 1}`),
            name: String(item.name || `配置方案 ${idx + 1}`),
            apiKey: typeof item.apiKey === "string" && item.apiKey.trim() ? item.apiKey.trim() : legacyKey,
            baseUrl: String(item.baseUrl || DEFAULT_DEEPSEEK_BASE_URL).replace(/\/+$/, ""),
            model,
            prompt: String(item.prompt || DEFAULT_EXPLAIN_PROMPT),
            thinkingMode:
              (item.thinkingMode as AiThinkingMode) || (isReasoningModel(model) ? "enabled" : "auto"),
          };
        });
      }
    } catch {}
  }

  if (profiles.length === 0) {
    profiles = [
      {
        id: "profile-1",
        name: "DeepSeek 极速 (deepseek-flash)",
        apiKey: legacyKey,
        baseUrl: legacyBaseUrl,
        model: legacyModel !== "deepseek-chat" ? legacyModel : "deepseek-flash",
        prompt: legacyPrompt,
        thinkingMode: "disabled",
      },
      {
        id: "profile-2",
        name: "DeepSeek 标准 (deepseek-chat)",
        apiKey: legacyKey,
        baseUrl: legacyBaseUrl,
        model: "deepseek-chat",
        prompt: legacyPrompt,
        thinkingMode: "auto",
      },
      {
        id: "profile-3",
        name: "DeepSeek 深度推理 (deepseek-reasoner)",
        apiKey: legacyKey,
        baseUrl: legacyBaseUrl,
        model: "deepseek-reasoner",
        prompt: legacyPrompt,
        thinkingMode: "enabled",
      },
    ];
    setSetting("ai_profiles", JSON.stringify(profiles));
    setSetting("ai_active_profile_id", profiles[0].id);
  }

  const savedActiveId = getSetting("ai_active_profile_id") || profiles[0].id;
  const active = profiles.find((p) => p.id === savedActiveId) || profiles[0];
  return {
    profiles,
    activeProfileId: active.id,
    active,
  };
}

export function saveAiProfilesState(profiles: AiProfileStored[], activeProfileId: string) {
  const active = profiles.find((p) => p.id === activeProfileId) || profiles[0];
  setSetting("ai_profiles", JSON.stringify(profiles));
  setSetting("ai_active_profile_id", active.id);
  if (active.apiKey) setSetting("deepseek_api_key", active.apiKey);
  setSetting("deepseek_base_url", active.baseUrl || DEFAULT_DEEPSEEK_BASE_URL);
  setSetting("deepseek_model", active.model || DEFAULT_DEEPSEEK_MODEL);
  setSetting("deepseek_prompt", active.prompt || DEFAULT_EXPLAIN_PROMPT);
}

export function buildConfigResponse() {
  const state = loadAiProfilesState();
  const activeClient = toClientProfile(state.active);
  return {
    profiles: state.profiles.map(toClientProfile),
    activeProfileId: state.activeProfileId,
    hasKey: activeClient.hasKey,
    maskedKey: activeClient.maskedKey,
    baseUrl: activeClient.baseUrl,
    model: activeClient.model,
    prompt: activeClient.prompt,
    thinkingMode: activeClient.thinkingMode,
    defaultPrompt: DEFAULT_EXPLAIN_PROMPT,
  };
}

export function parseAiResponse(data: {
  choices?: {
    message?: {
      content?: string;
      reasoning_content?: string;
      reasoning?: string;
    };
  }[];
}): AiExplainResult {
  const choice = data.choices?.[0];
  const msg = choice?.message;
  let content = (msg?.content || "").trim();
  let reasoning = (msg?.reasoning_content || (msg as Record<string, unknown>)?.reasoning || "").toString().trim();

  const thinkRegex = /<think>([\s\S]*?)<\/think>/i;
  let thinkMatch: RegExpMatchArray | null;
  while ((thinkMatch = content.match(thinkRegex)) !== null) {
    const embedded = thinkMatch[1].trim();
    reasoning = reasoning ? `${reasoning}\n\n${embedded}` : embedded;
    content = content.replace(thinkRegex, "").trim();
  }

  if (content.includes("<think>")) {
    const parts = content.split(/<think>/i);
    content = parts[0].trim();
    const tail = parts.slice(1).join("\n").trim();
    if (tail) {
      reasoning = reasoning ? `${reasoning}\n\n${tail}` : tail;
    }
  }
  content = content.replace(/<\/?think>/gi, "").trim();

  if (!content) {
    throw new HttpError(502, "AI 接口未返回有效构词拆解内容，请重试");
  }

  let parsedJson: Record<string, unknown> | null = null;

  try {
    parsedJson = JSON.parse(content);
  } catch {}

  if (!parsedJson) {
    const codeBlockMatch = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    if (codeBlockMatch) {
      try {
        parsedJson = JSON.parse(codeBlockMatch[1].trim());
      } catch {}
    }
  }

  if (!parsedJson) {
    const firstBrace = content.indexOf("{");
    const lastBrace = content.lastIndexOf("}");
    if (firstBrace !== -1 && lastBrace > firstBrace) {
      const candidate = content.slice(firstBrace, lastBrace + 1).trim();
      try {
        parsedJson = JSON.parse(candidate);
      } catch {}
    }
  }

  const pObj = parsedJson as Record<string, Record<string, unknown>> | null;
  if (
    !pObj ||
    typeof pObj !== "object" ||
    !pObj.etymology ||
    !pObj.evolution ||
    !pObj.cognates
  ) {
    throw new HttpError(502, "AI 返回的拆解格式无法解析为有效构词数据，请点击重新生成");
  }

  // 规范化 etymology
  const rawParts = Array.isArray(pObj.etymology?.parts) ? pObj.etymology.parts : [];
  const normalizedParts = rawParts.map((p: unknown) => {
    if (typeof p === "string") return { affix: p, type: "", meaning: "" };
    const obj = p && typeof p === "object" ? (p as Record<string, unknown>) : {};
    return {
      affix: String(obj.affix || obj.part || obj.component || obj.name || ""),
      type: String(obj.type || ""),
      meaning: String(obj.meaning || obj.desc || obj.definition || ""),
    };
  });

  // 规范化 cognates.words
  const rawWords = Array.isArray(pObj.cognates?.words) ? pObj.cognates.words : [];
  const normalizedWords = rawWords.map((cw: unknown) => {
    if (typeof cw === "string") {
      return { word: cw, pos: "", meaning: "", breakdown: "" };
    }
    const obj = cw && typeof cw === "object" ? (cw as Record<string, unknown>) : {};
    return {
      word: String(obj.word || obj.text || obj.name || ""),
      pos: String(obj.pos || ""),
      meaning: String(obj.meaning || obj.desc || obj.definition || ""),
      breakdown: String(obj.breakdown || obj.formula || obj.relation || ""),
    };
  });

  const result: AiExplainResult = {
    etymology: {
      formula: String(pObj.etymology?.formula || ""),
      parts: normalizedParts,
      literal: String(pObj.etymology?.literal || ""),
    },
    evolution: {
      origin: String(pObj.evolution?.origin || ""),
      development: String(pObj.evolution?.development || ""),
      usage: String(pObj.evolution?.usage || ""),
    },
    cognates: {
      root: String(pObj.cognates?.root || ""),
      words: normalizedWords,
      mnemonic: String(pObj.cognates?.mnemonic || ""),
    },
  };

  if (reasoning) {
    result.thinking = reasoning;
  }

  return result;
}

export async function requestAiExplainForWord(opts: {
  text: string;
  meaning?: string;
  pos?: string;
  profileId?: string;
}): Promise<{ explain: AiExplainResult; profileName: string }> {
  const { text, meaning = "", pos = "", profileId } = opts;
  if (!text) {
    throw new HttpError(400, "缺少需要拆解的单词");
  }

  const state = loadAiProfilesState();
  const selectedProfile =
    (profileId ? state.profiles.find((p) => p.id === profileId) : undefined) || state.active;
  const apiKey = selectedProfile.apiKey || process.env.DEEPSEEK_API_KEY?.trim() || "";

  if (!apiKey) {
    throw new HttpError(400, "MISSING_API_KEY: 请先设置 DeepSeek API Key");
  }

  const userPrompt = (selectedProfile.prompt || DEFAULT_EXPLAIN_PROMPT)
    .replace(/\{\{\s*word\s*\}\}/g, text)
    .replace(/\{\{\s*pos\s*\}\}/g, pos || "")
    .replace(/\{\{\s*meaning\s*\}\}/g, meaning || "");

  const { primary: primaryEndpoint, fallback: fallbackEndpoint } = resolveEndpoint(
    selectedProfile.baseUrl || DEFAULT_DEEPSEEK_BASE_URL,
  );
  let endpoint = primaryEndpoint;
  const model = selectedProfile.model || DEFAULT_DEEPSEEK_MODEL;

  const mode = selectedProfile.thinkingMode || (isReasoningModel(model) ? "enabled" : "auto");
  const isReasoning = mode === "enabled" || (mode === "auto" && isReasoningModel(model));

  const finalUserPrompt = `${userPrompt}\n\n【重要输出格式】请务必以合法的 JSON 格式输出最终拆解结果（必须严格包含 etymology, evolution, cognates 三个字段，可使用 \`\`\`json ... \`\`\` 代码块包裹）。`;

  let res: Response;

  if (isReasoning) {
    res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_JSON_INSTRUCTION },
          { role: "user", content: finalUserPrompt },
        ],
        max_tokens: 8192,
        stream: false,
      }),
    });

    if (res.status === 404 && endpoint !== fallbackEndpoint) {
      endpoint = fallbackEndpoint;
      res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: SYSTEM_JSON_INSTRUCTION },
            { role: "user", content: finalUserPrompt },
          ],
          max_tokens: 8192,
          stream: false,
        }),
      });
    }

    if (res.status === 400) {
      res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "user", content: `${SYSTEM_JSON_INSTRUCTION}\n\n${finalUserPrompt}` }],
          max_tokens: 8192,
          stream: false,
        }),
      });
    }
  } else {
    res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_JSON_INSTRUCTION },
          { role: "user", content: finalUserPrompt },
        ],
        response_format: { type: "json_object" },
        temperature: 0.3,
        max_tokens: 4096,
        stream: false,
        thinking: { type: "disabled" },
      }),
    });

    if (res.status === 404 && endpoint !== fallbackEndpoint) {
      endpoint = fallbackEndpoint;
      res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: SYSTEM_JSON_INSTRUCTION },
            { role: "user", content: finalUserPrompt },
          ],
          response_format: { type: "json_object" },
          temperature: 0.3,
          max_tokens: 4096,
          stream: false,
          thinking: { type: "disabled" },
        }),
      });
    }

    if (res.status === 400) {
      res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: SYSTEM_JSON_INSTRUCTION },
            { role: "user", content: finalUserPrompt },
          ],
          response_format: { type: "json_object" },
          temperature: 0.3,
          max_tokens: 4096,
          stream: false,
        }),
      });
    }

    if (res.status === 400) {
      res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: SYSTEM_JSON_INSTRUCTION },
            { role: "user", content: finalUserPrompt },
          ],
          temperature: 0.3,
          max_tokens: 4096,
          stream: false,
        }),
      });
    }

    if (
      !res.ok &&
      (res.status === 400 || res.status === 404) &&
      model.toLowerCase() === "deepseek-flash" &&
      endpoint.includes("api.deepseek.com")
    ) {
      res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            { role: "system", content: SYSTEM_JSON_INSTRUCTION },
            { role: "user", content: finalUserPrompt },
          ],
          temperature: 0.3,
          max_tokens: 3000,
          stream: false,
        }),
      });
    }
  }

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new HttpError(
      res.status === 401 ? 400 : 502,
      res.status === 401
        ? "API Key 无效或已过期，请检查配置"
        : `AI 接口调用失败 (${res.status}): ${errText.slice(0, 180)}`,
    );
  }

  const data = (await res.json()) as {
    choices?: {
      message?: {
        content?: string;
        reasoning_content?: string;
        reasoning?: string;
      };
    }[];
  };

  const parsed = parseAiResponse(data);
  return { explain: parsed, profileName: selectedProfile.name };
}
