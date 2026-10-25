import { body, HttpError, int, ok, route, str } from "@/lib/api";
import { getDb, getSetting, setSetting } from "@/lib/db";

const DEFAULT_DEEPSEEK_BASE_URL = "https://api.deepseek.com";
const DEFAULT_DEEPSEEK_MODEL = "deepseek-chat";

const DEFAULT_EXPLAIN_PROMPT = `请作为资深英语词汇学与词源记忆专家，对单词「{{word}}」（{{pos}} {{meaning}}）进行深度拆解与助记分析。
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

const SYSTEM_JSON_INSTRUCTION = `你是一位精通构词法、历史语言学与高效记忆法的英语词汇导师。
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

function getAiConfig() {
  const dbKey = getSetting("deepseek_api_key")?.trim() || "";
  const envKey = process.env.DEEPSEEK_API_KEY?.trim() || "";
  const apiKey = dbKey || envKey;
  const baseUrl = (getSetting("deepseek_base_url")?.trim() || process.env.DEEPSEEK_BASE_URL?.trim() || DEFAULT_DEEPSEEK_BASE_URL).replace(/\/+$/, "");
  const model = getSetting("deepseek_model")?.trim() || process.env.DEEPSEEK_MODEL?.trim() || DEFAULT_DEEPSEEK_MODEL;
  const customPrompt = getSetting("deepseek_prompt")?.trim() || "";

  return {
    apiKey,
    hasKey: Boolean(apiKey),
    keySource: dbKey ? "db" : envKey ? "env" : "none",
    maskedKey: apiKey ? `${apiKey.slice(0, 5)}****${apiKey.slice(-4)}` : "",
    baseUrl,
    model,
    prompt: customPrompt || DEFAULT_EXPLAIN_PROMPT,
    defaultPrompt: DEFAULT_EXPLAIN_PROMPT,
  };
}

/** GET /api/words/explain — 获取当前 AI 配置状态 */
export const GET = route("any", () => {
  const cfg = getAiConfig();
  return ok({
    hasKey: cfg.hasKey,
    keySource: cfg.keySource,
    maskedKey: cfg.maskedKey,
    baseUrl: cfg.baseUrl,
    model: cfg.model,
    prompt: cfg.prompt,
    defaultPrompt: cfg.defaultPrompt,
  });
});

/** PUT /api/words/explain — 保存 DeepSeek API 配置 */
export const PUT = route("any", async ({ req }) => {
  const b = await body<{
    apiKey?: string;
    baseUrl?: string;
    model?: string;
    prompt?: string;
  }>(req);

  if (typeof b.apiKey === "string") {
    const trimmed = b.apiKey.trim();
    // 只有输入了新的非空且不含掩码的 Key 时才更新覆盖；留空则保持已有 Key 不变
    if (trimmed && !trimmed.includes("****")) {
      setSetting("deepseek_api_key", trimmed);
    }
  }
  if (typeof b.baseUrl === "string") {
    setSetting("deepseek_base_url", b.baseUrl.trim() || DEFAULT_DEEPSEEK_BASE_URL);
  }
  if (typeof b.model === "string") {
    setSetting("deepseek_model", b.model.trim() || DEFAULT_DEEPSEEK_MODEL);
  }
  if (typeof b.prompt === "string") {
    setSetting("deepseek_prompt", b.prompt.trim());
  }

  const cfg = getAiConfig();
  return ok({
    hasKey: cfg.hasKey,
    keySource: cfg.keySource,
    maskedKey: cfg.maskedKey,
    baseUrl: cfg.baseUrl,
    model: cfg.model,
    prompt: cfg.prompt,
    defaultPrompt: cfg.defaultPrompt,
  });
});

/** POST /api/words/explain — 调用 DeepSeek Flash (non-thinking) 拆解单词并缓存 */
export const POST = route("any", async ({ req }) => {
  const b = await body<{
    wordId?: number;
    text?: string;
    meaning?: string;
    pos?: string;
    force?: boolean;
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

  if (!text) {
    throw new HttpError(400, "缺少需要拆解的单词");
  }

  const cfg = getAiConfig();
  if (!cfg.apiKey) {
    throw new HttpError(400, "MISSING_API_KEY: 请先设置 DeepSeek API Key");
  }

  const userPrompt = cfg.prompt
    .replace(/\{\{\s*word\s*\}\}/g, text)
    .replace(/\{\{\s*pos\s*\}\}/g, pos || "")
    .replace(/\{\{\s*meaning\s*\}\}/g, meaning || "");

  const endpoint = cfg.baseUrl.endsWith("/chat/completions")
    ? cfg.baseUrl
    : `${cfg.baseUrl}/chat/completions`;

  const payloadBase = {
    model: cfg.model,
    messages: [
      { role: "system", content: SYSTEM_JSON_INSTRUCTION },
      { role: "user", content: userPrompt },
    ],
    response_format: { type: "json_object" },
    temperature: 0.3,
    max_tokens: 1200,
    stream: false,
  };

  // 优先附带 thinking: { type: "disabled" } 强制关闭思考模式（Flash 极速响应）
  let res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cfg.apiKey}`,
    },
    body: JSON.stringify({
      ...payloadBase,
      thinking: { type: "disabled" },
    }),
  });

  // 如果兼容接口不支持 thinking 参数返回 400，则回退标准非思考请求
  if (res.status === 400) {
    res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cfg.apiKey}`,
      },
      body: JSON.stringify(payloadBase),
    });
  }

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new HttpError(
      res.status === 401 ? 400 : 502,
      res.status === 401
        ? "DeepSeek API Key 无效或已过期，请检查配置"
        : `DeepSeek 接口调用失败 (${res.status}): ${errText.slice(0, 180)}`,
    );
  }

  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const rawContent = data.choices?.[0]?.message?.content?.trim() || "";
  if (!rawContent) {
    throw new HttpError(502, "DeepSeek 返回内容为空，请重试");
  }

  // 清理可能包裹的 ```json ... ```
  const cleanJson = rawContent
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/, "")
    .trim();

  let parsed: AiExplainResult;
  try {
    parsed = JSON.parse(cleanJson) as AiExplainResult;
  } catch {
    throw new HttpError(502, "AI 返回格式解析失败，请点击重试");
  }

  // 写入数据库持久化缓存
  if (wordId > 0) {
    db.prepare("UPDATE words SET ai_explain = ? WHERE id = ?").run(JSON.stringify(parsed), wordId);
  }

  return ok({
    explain: parsed,
    cached: false,
  });
});
