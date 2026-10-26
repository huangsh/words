"use client";
import { useCallback, useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  RefreshCw,
  Save,
  Settings,
  Sparkles,
  Volume2,
} from "lucide-react";
import { Button, Loading, Modal } from "@/components/ui";
import { api } from "@/lib/client";
import { speak } from "@/lib/speech";

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

export interface AiExplainModalWord {
  id: number;
  text: string;
  meaning: string;
  phonetic?: string;
  pos?: string;
  emoji?: string;
  ai_explain?: string;
}

export interface ModalProfileItem {
  id: string;
  name: string;
  baseUrl: string;
  model: string;
  prompt: string;
  thinkingMode?: "disabled" | "enabled" | "auto";
  hasKey: boolean;
  maskedKey: string;
}

export function AiExplainModal({
  open,
  onClose,
  word,
  onCacheExplain,
}: {
  open: boolean;
  onClose: () => void;
  word: AiExplainModalWord | null;
  onCacheExplain?: (wordId: number, rawJson: string) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [explainData, setExplainData] = useState<AiExplainResult | null>(null);
  const [isCached, setIsCached] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  // 多方案配置项状态
  const [profiles, setProfiles] = useState<ModalProfileItem[]>([]);
  const [activeProfileId, setActiveProfileId] = useState<string>("");
  const [profileNameInput, setProfileNameInput] = useState("");
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [maskedKey, setMaskedKey] = useState("");
  const [baseUrlInput, setBaseUrlInput] = useState("https://api.deepseek.com");
  const [modelInput, setModelInput] = useState("deepseek-chat");
  const [thinkingMode, setThinkingMode] = useState<"disabled" | "enabled" | "auto">("auto");
  const [promptInput, setPromptInput] = useState("");
  const [defaultPrompt, setDefaultPrompt] = useState("");
  const [hasKey, setHasKey] = useState(true);
  const [savingConfig, setSavingConfig] = useState(false);

  const loadConfig = useCallback(async () => {
    try {
      const cfg = await api<{
        activeProfileId?: string;
        profiles?: ModalProfileItem[];
        hasKey: boolean;
        maskedKey: string;
        baseUrl: string;
        model: string;
        prompt: string;
        defaultPrompt: string;
      }>("/api/words/explain");
      const list = cfg.profiles || [];
      setProfiles(list);
      const activeId = cfg.activeProfileId || list[0]?.id || "profile-1";
      setActiveProfileId(activeId);
      const active = list.find((p) => p.id === activeId);
      setProfileNameInput(active?.name || "当前配置");
      setHasKey(active ? active.hasKey : cfg.hasKey);
      setMaskedKey(active ? active.maskedKey : cfg.maskedKey || "");
      setApiKeyInput("");
      setBaseUrlInput(active ? active.baseUrl : (cfg.baseUrl || "https://api.deepseek.com"));
      setModelInput(active ? active.model : (cfg.model || "deepseek-chat"));
      setThinkingMode(
        active?.thinkingMode ||
          (active?.model?.includes("reasoner") || active?.model?.includes("r1") ? "enabled" : "auto"),
      );
      setPromptInput(active ? active.prompt : (cfg.prompt || ""));
      setDefaultPrompt(cfg.defaultPrompt || "");
      return { ...cfg, activeProfileId: activeId, profiles: list };
    } catch {
      return null;
    }
  }, []);

  const fetchExplain = useCallback(
    async (force = false, profileIdOverride?: string) => {
      if (!word) return;
      setLoading(true);
      setError(null);
      try {
        const targetProfileId = profileIdOverride || activeProfileId || undefined;
        const res = await api<{ explain: AiExplainResult; cached: boolean }>("/api/words/explain", {
          method: "POST",
          body: {
            wordId: word.id,
            text: word.text,
            meaning: word.meaning,
            pos: word.pos,
            force,
            profileId: targetProfileId,
          },
        });
        setExplainData(res.explain);
        setIsCached(res.cached);
        setShowConfig(false);
        onCacheExplain?.(word.id, JSON.stringify(res.explain));
      } catch (e) {
        const msg = e instanceof Error ? e.message : "调用失败";
        if (msg.includes("MISSING_API_KEY")) {
          setHasKey(false);
          setShowConfig(true);
          await loadConfig();
        } else {
          setError(msg);
        }
      } finally {
        setLoading(false);
      }
    },
    [activeProfileId, loadConfig, onCacheExplain, word],
  );

  useEffect(() => {
    if (!open || !word) return;
    setError(null);
    loadConfig();
    // 优先检查已缓存数据
    if (word.ai_explain) {
      try {
        const parsed = JSON.parse(word.ai_explain) as AiExplainResult;
        if (parsed && parsed.etymology && parsed.evolution && parsed.cognates) {
          setExplainData(parsed);
          setIsCached(true);
          return;
        }
      } catch {}
    }
    setExplainData(null);
    fetchExplain(false);
  }, [open, word?.id, word?.ai_explain, fetchExplain, loadConfig]);

  async function handleSelectProfile(targetId: string) {
    if (targetId === activeProfileId) return;
    setActiveProfileId(targetId);
    const target = profiles.find((p) => p.id === targetId);
    if (target) {
      setProfileNameInput(target.name);
      setHasKey(target.hasKey);
      setMaskedKey(target.maskedKey);
      setBaseUrlInput(target.baseUrl);
      setModelInput(target.model);
      setThinkingMode(
        target.thinkingMode ||
          (target.model?.includes("reasoner") || target.model?.includes("r1") ? "enabled" : "auto"),
      );
      setPromptInput(target.prompt);
      setApiKeyInput("");
    }
    try {
      await api("/api/words/explain", {
        method: "PUT",
        body: { action: "select", profileId: targetId },
      });
      await fetchExplain(true, targetId);
    } catch (e) {
      setError(e instanceof Error ? e.message : "切换方案失败");
    }
  }

  async function handleSaveConfigAndRun() {
    setSavingConfig(true);
    setError(null);
    try {
      const targetId = activeProfileId || "profile-1";
      const cfg = await api<{
        activeProfileId: string;
        profiles: ModalProfileItem[];
      }>("/api/words/explain", {
        method: "PUT",
        body: {
          action: "save",
          id: targetId,
          name: profileNameInput.trim() || "当前配置",
          apiKey: apiKeyInput.trim() || undefined,
          baseUrl: baseUrlInput.trim(),
          model: modelInput.trim(),
          prompt: promptInput.trim(),
          thinkingMode,
        },
      });
      if (cfg.profiles) {
        setProfiles(cfg.profiles);
        setActiveProfileId(cfg.activeProfileId);
        const active = cfg.profiles.find((p) => p.id === cfg.activeProfileId);
        if (active) {
          setProfileNameInput(active.name);
          setHasKey(active.hasKey);
          setMaskedKey(active.maskedKey);
          setBaseUrlInput(active.baseUrl);
          setModelInput(active.model);
          setThinkingMode(
            active.thinkingMode ||
              (active.model?.includes("reasoner") || active.model?.includes("r1") ? "enabled" : "auto"),
          );
          setPromptInput(active.prompt);
        }
      }
      setApiKeyInput("");
      setShowConfig(false);
      await fetchExplain(true, cfg.activeProfileId);
    } catch (e) {
      setError(e instanceof Error ? e.message : "保存配置失败");
    } finally {
      setSavingConfig(false);
    }
  }

  if (!word) return null;

  const activeProfile = profiles.find((p) => p.id === activeProfileId);
  const isReasoning =
    activeProfile?.thinkingMode === "enabled" ||
    (activeProfile?.thinkingMode !== "disabled" &&
      (activeProfile?.model?.toLowerCase().includes("reasoner") ||
        activeProfile?.model?.toLowerCase().includes("r1")));

  return (
    <Modal open={open} onClose={onClose} title="✨ AI 单词深度拆解与记忆" wide>
      <div className="space-y-4">
        {/* 顶部单词信息栏 */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3 border border-slate-200/70">
          <div className="flex items-center gap-3">
            {word.emoji && <span className="text-3xl">{word.emoji}</span>}
            <div>
              <div className="flex items-center gap-2">
                <span className="font-word text-2xl font-black text-brand-600">{word.text}</span>
                {word.phonetic && <span className="text-xs text-ink-soft">{word.phonetic}</span>}
                <button
                  type="button"
                  onClick={() => speak(word.text)}
                  className="rounded-full bg-brand-100/80 p-1.5 text-brand-600 hover:bg-brand-200 transition cursor-pointer"
                  title="朗读单词"
                >
                  <Volume2 size={15} />
                </button>
              </div>
              <div className="text-sm font-bold text-ink">
                {word.pos && <span className="mr-1.5 italic font-serif text-ink-soft">{word.pos}</span>}
                {word.meaning}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {explainData && !loading && (
              <button
                type="button"
                onClick={() => fetchExplain(true)}
                className="inline-flex items-center gap-1 rounded-xl bg-white px-2.5 py-1.5 text-xs font-bold text-ink-soft hover:text-brand-600 border border-slate-200 shadow-2xs transition cursor-pointer"
                title="重新生成拆解"
              >
                <RefreshCw size={13} />
                <span>重新生成</span>
              </button>
            )}
            <button
              type="button"
              onClick={async () => {
                if (!showConfig) await loadConfig();
                setShowConfig((s) => !s);
              }}
              className={`inline-flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-bold border shadow-2xs transition cursor-pointer ${
                showConfig
                  ? "bg-violet-600 text-white border-violet-600"
                  : "bg-white text-ink-soft hover:text-violet-600 border-slate-200"
              }`}
              title="配置 AI 方案与提示词"
            >
              <Settings size={13} />
              <span>AI 设置</span>
            </button>
          </div>
        </div>

        {/* AI 配置与提示词优化面板 */}
        {showConfig && (
          <div className="rounded-2xl border-2 border-violet-200 bg-violet-50/50 p-4 space-y-3 text-left">
            <div className="flex items-center justify-between">
              <div className="text-sm font-black text-violet-950 flex items-center gap-1.5">
                <Sparkles size={16} className="text-violet-600" />
                <span>AI 单词拆解配置方案</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/admin/settings"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-bold text-violet-600 hover:underline"
                >
                  系统设置管理所有方案 ↗
                </a>
                {!hasKey && (
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold text-amber-800">
                    需先填写 API Key
                  </span>
                )}
              </div>
            </div>

            {/* 方案快速切换按钮 */}
            {profiles.length > 1 && (
              <div className="flex flex-wrap items-center gap-1.5 pb-1">
                <span className="text-xs font-bold text-ink-soft mr-1">选择方案:</span>
                {profiles.map((p) => {
                  const isActive = p.id === activeProfileId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleSelectProfile(p.id)}
                      className={`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
                        isActive
                          ? "bg-violet-600 text-white shadow-2xs"
                          : "bg-white text-ink-soft hover:bg-violet-100 border border-slate-200"
                      }`}
                    >
                      {p.name}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
              <div>
                <label className="block text-xs font-bold text-ink-soft mb-1">方案名称</label>
                <input
                  type="text"
                  value={profileNameInput}
                  onChange={(e) => setProfileNameInput(e.target.value)}
                  placeholder="方案名称"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-ink focus:border-violet-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-ink-soft mb-1">模型名称</label>
                <input
                  type="text"
                  value={modelInput}
                  onChange={(e) => setModelInput(e.target.value)}
                  placeholder="deepseek-chat"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-mono font-bold text-ink focus:border-violet-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-ink-soft mb-1">
                  思考模式 ({isReasoning ? "🧠 深度思考" : "⚡ 极速非思考"})
                </label>
                <select
                  value={thinkingMode}
                  onChange={(e) =>
                    setThinkingMode(e.target.value as "disabled" | "enabled" | "auto")
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-2.5 py-2 text-xs font-bold text-ink focus:border-violet-500 focus:outline-none"
                >
                  <option value="auto">自动适配 (根据模型名判断)</option>
                  <option value="disabled">强制关闭思考 (极速推荐)</option>
                  <option value="enabled">启用思考过程 (深度拆解)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink-soft mb-1">API Key</label>
                <div className="relative">
                  <input
                    type={showKey ? "text" : "password"}
                    value={apiKeyInput}
                    onChange={(e) => setApiKeyInput(e.target.value)}
                    placeholder={hasKey ? (maskedKey ? `保留现存 (${maskedKey})` : "已配置") : "输入 sk-..."}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-mono text-ink pr-8 focus:border-violet-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowKey((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-ink cursor-pointer"
                  >
                    {showKey ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-1">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setShowConfig(false)}
                className="text-xs"
              >
                取消
              </Button>
              <Button
                size="sm"
                onClick={handleSaveConfigAndRun}
                loading={savingConfig}
                className="gap-1.5 text-xs bg-violet-600 hover:bg-violet-700"
              >
                <Save size={13} />
                <span>保存并重新生成</span>
              </Button>
            </div>
          </div>
        )}

        {/* 正在生成中的状态 */}
        {loading && (
          <div className="py-12 text-center space-y-3">
            <Loading text="DeepSeek AI 正在深度拆解构词公式与演进画面…" />
            <p className="text-xs text-ink-soft">
              {isReasoning ? "🧠 深度思考模型正在组织词源链路，稍等几秒…" : "⚡ 极速生成中，通常 1-2 秒即可完成…"}
            </p>
          </div>
        )}

        {/* 错误提示 */}
        {error && !loading && (
          <div className="rounded-2xl border border-coral-200 bg-coral-50 p-4 text-center">
            <div className="text-sm font-bold text-coral-600">{error}</div>
            <div className="mt-3 flex justify-center gap-2">
              <Button size="sm" variant="secondary" onClick={() => fetchExplain(true)}>
                🔄 重试
              </Button>
              <Button
                size="sm"
                onClick={async () => {
                  await loadConfig();
                  setShowConfig(true);
                }}
              >
                ⚙️ 检查 API 设置
              </Button>
            </div>
          </div>
        )}

        {/* 三段式 AI 拆解结果展示 */}
        {explainData && !loading && (
          <div className="space-y-3.5 text-left">
            {/* 1. 结构拆解 */}
            <div className="rounded-2xl border border-indigo-200/80 bg-indigo-50/60 p-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="text-sm font-black text-indigo-950 flex items-center gap-1.5">
                  <span>🧩 1. 结构拆解（构词公式）</span>
                </div>
                {isCached && (
                  <span className="rounded-full bg-indigo-100/90 px-2 py-0.5 text-[10px] font-bold text-indigo-700">
                    ⚡ 极速秒开
                  </span>
                )}
              </div>

              {explainData.etymology?.formula && (
                <div className="mt-2.5 rounded-xl bg-white px-3.5 py-2 font-mono text-xs sm:text-sm font-black text-indigo-700 border border-indigo-200/60 shadow-2xs">
                  {explainData.etymology.formula}
                </div>
              )}

              {Array.isArray(explainData.etymology?.parts) && explainData.etymology.parts.length > 0 && (
                <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {explainData.etymology.parts.map((p, i) => (
                    <div key={i} className="rounded-xl bg-white/90 p-2.5 border border-indigo-100">
                      <div className="flex items-center gap-1.5">
                        <span className="font-word text-sm font-black text-indigo-600">{p.affix}</span>
                        {p.type && (
                          <span className="rounded bg-indigo-100 px-1.5 py-0.2 text-[10px] font-bold text-indigo-800">
                            {p.type}
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-xs text-slate-700 leading-snug">{p.meaning}</div>
                    </div>
                  ))}
                </div>
              )}

              {explainData.etymology?.literal && (
                <div className="mt-2.5 rounded-xl bg-indigo-100/60 px-3 py-2 text-xs font-semibold text-indigo-950 leading-relaxed">
                  💡 <span className="font-black">字面合义：</span>
                  {explainData.etymology.literal}
                </div>
              )}
            </div>

            {/* 2. 词义演进逻辑 */}
            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/60 p-4 shadow-2xs">
              <div className="text-sm font-black text-amber-950 flex items-center gap-1.5">
                <span>🧭 2. 词义演进逻辑（认知画面链）</span>
              </div>
              <div className="mt-2.5 space-y-2 text-xs leading-relaxed text-slate-800">
                {explainData.evolution?.origin && (
                  <div className="rounded-xl bg-white/90 px-3 py-2 border border-amber-100">
                    <span className="font-black text-amber-800">🎬 源头画面：</span>
                    {explainData.evolution.origin}
                  </div>
                )}
                {explainData.evolution?.development && (
                  <div className="rounded-xl bg-white/90 px-3 py-2 border border-amber-100">
                    <span className="font-black text-amber-800">🔄 演进路径：</span>
                    {explainData.evolution.development}
                  </div>
                )}
                {explainData.evolution?.usage && (
                  <div className="rounded-xl bg-amber-100/60 px-3 py-2 border border-amber-200/50 font-medium text-amber-950">
                    <span className="font-black text-amber-900">🎯 现代语境：</span>
                    {explainData.evolution.usage}
                  </div>
                )}
              </div>
            </div>

            {/* 3. 同根词串联记忆 */}
            <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/60 p-4 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-sm font-black text-emerald-950 flex items-center gap-1.5">
                  <span>🔗 3. 同根词串联记忆（一网打尽）</span>
                </div>
                {explainData.cognates?.root && (
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-extrabold text-emerald-800">
                    🌱 词根：{explainData.cognates.root}
                  </span>
                )}
              </div>

              {Array.isArray(explainData.cognates?.words) && explainData.cognates.words.length > 0 && (
                <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {explainData.cognates.words.map((cw, i) => (
                    <div
                      key={i}
                      onClick={() => speak(cw.word)}
                      className="group cursor-pointer rounded-xl bg-white p-2.5 border border-emerald-200/60 hover:bg-emerald-100/60 transition shadow-2xs"
                      title="点击朗读同根词"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="font-word text-sm font-black text-emerald-950 group-hover:text-emerald-700">
                            {cw.word}
                          </span>
                          {cw.pos && <span className="text-[11px] italic font-serif text-emerald-700">{cw.pos}</span>}
                          <span className="text-xs font-bold text-slate-800">{cw.meaning}</span>
                        </div>
                        <Volume2 size={13} className="text-emerald-600 opacity-75 group-hover:opacity-100 shrink-0" />
                      </div>
                      {cw.breakdown && (
                        <div className="mt-1 text-[11px] text-slate-600 leading-snug">{cw.breakdown}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {explainData.cognates?.mnemonic && (
                <div className="mt-2.5 rounded-xl bg-emerald-100/75 px-3 py-2 text-xs font-bold text-emerald-950 border border-emerald-200/60 leading-relaxed">
                  ⚡ <span className="text-emerald-900">串记口诀：</span>
                  {explainData.cognates.mnemonic}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
