"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Check, CheckCircle2, FileText, Headphones, Layers, ListChecks, Lock, Save, Settings, ShieldCheck, Sparkles, SpellCheck } from "lucide-react";
import { api, useApi } from "@/lib/client";
import { Button, Loading } from "@/components/ui";
import { useToast } from "@/components/Toast";

interface ModeItem {
  key: string;
  title: string;
  desc: string;
  iconName: string;
  color: string;
  shadow: string;
  required: boolean;
}

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Layers,
  ListChecks,
  Headphones,
  FileText,
  SpellCheck,
};

export default function AdminSettingsPage() {
  const toast = useToast();
  const modesQ = useApi<{ enabledModes: string[]; allModes: ModeItem[] }>("/api/admin/modes");
  const aiQ = useApi<{
    hasKey: boolean;
    maskedKey: string;
    baseUrl: string;
    model: string;
    prompt: string;
    defaultPrompt: string;
  }>("/api/words/explain");

  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);

  const [apiKey, setApiKey] = useState("");
  const [baseUrl, setBaseUrl] = useState("https://api.deepseek.com");
  const [model, setModel] = useState("deepseek-chat");
  const [prompt, setPrompt] = useState("");
  const [savingAi, setSavingAi] = useState(false);

  useEffect(() => {
    if (modesQ.data?.enabledModes) {
      setSelectedModes(modesQ.data.enabledModes);
    }
  }, [modesQ.data]);

  useEffect(() => {
    if (aiQ.data) {
      setBaseUrl(aiQ.data.baseUrl || "https://api.deepseek.com");
      setModel(aiQ.data.model || "deepseek-chat");
      setPrompt(aiQ.data.prompt || "");
    }
  }, [aiQ.data]);

  const allModes = modesQ.data?.allModes || [];

  function toggleMode(key: string) {
    if (key === "flashcard") {
      toast("《闪卡认词》是基础识词模式，必须保留，无法关闭哦！", "info");
      return;
    }
    setSelectedModes((prev) => {
      if (prev.includes(key)) {
        return prev.filter((k) => k !== key);
      } else {
        // 按照 allModes 原始顺序插入
        return allModes.map((m) => m.key).filter((k) => k === key || prev.includes(k));
      }
    });
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await api<{ enabledModes: string[] }>("/api/admin/modes", {
        method: "POST",
        body: { enabledModes: selectedModes },
      });
      await api("/api/words/explain", {
        method: "PUT",
        body: { apiKey, baseUrl, model, prompt },
      });
      setApiKey("");
      setSelectedModes(res.enabledModes);
      modesQ.reload();
      aiQ.reload();
      toast("设置已成功保存！", "success");
    } catch (e) {
      toast(e instanceof Error ? e.message : "保存失败，请重试", "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleSaveAi() {
    setSavingAi(true);
    try {
      const res = await api<{
        hasKey: boolean;
        maskedKey: string;
        baseUrl: string;
        model: string;
        prompt: string;
        defaultPrompt: string;
      }>("/api/words/explain", {
        method: "PUT",
        body: {
          apiKey,
          baseUrl,
          model,
          prompt,
        },
      });
      setApiKey("");
      setBaseUrl(res.baseUrl || "https://api.deepseek.com");
      setModel(res.model || "deepseek-chat");
      setPrompt(res.prompt || "");
      aiQ.setData(res);
      toast("DeepSeek AI 单词拆解设置已成功保存！", "success");
    } catch (e) {
      toast(e instanceof Error ? e.message : "保存失败，请重试", "error");
    } finally {
      setSavingAi(false);
    }
  }

  if (modesQ.loading && !modesQ.data) {
    return <Loading text="加载学习模式设置中…" />;
  }

  // 获得当前活跃流水线
  const activePipeline = allModes.filter((m) => selectedModes.includes(m.key));

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-6 sm:px-6">
      {/* 标题 */}
      <div>
        <h1 className="flex items-center gap-2.5 text-2xl font-black text-ink">
          <Settings className="text-brand-600" size={26} />
          <span>学习模式与闯关解锁设置</span>
        </h1>
        <p className="mt-1 text-sm text-ink-soft">
          自由设定开放的学习模式。系统自动将开启的模式串联为递进关卡，
          <strong className="text-ink font-semibold">前一个模式完成后方可解锁下一个模式</strong>。
        </p>
      </div>

      {/* 闯关流水线实时预览 */}
      <div className="rounded-3xl border border-brand-200/80 bg-brand-50/50 p-5 shadow-xs">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm font-bold text-brand-900">
            <Sparkles size={18} className="text-brand-600" />
            <span>当前生效的学习闯关流水线（按顺序解锁）</span>
          </div>
          <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-bold text-brand-700">
            共开启 {activePipeline.length} 个阶段
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
          {activePipeline.map((m, idx) => {
            const Icon = ICON_MAP[m.iconName] || Layers;
            return (
              <div key={m.key} className="flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2 shadow-2xs border border-brand-100">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-[11px] font-black text-brand-600">
                    {idx + 1}
                  </span>
                  <Icon size={16} className="text-brand-600" />
                  <span className="text-xs sm:text-sm font-bold text-ink">{m.title}</span>
                </div>
                {idx < activePipeline.length - 1 && (
                  <ArrowRight size={16} className="text-brand-400 shrink-0" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-3 text-xs text-brand-700/90 leading-relaxed">
          💡 规则说明：学生必须在 <strong>第 {activePipeline.length > 1 ? "1" : "1"} 阶段「{activePipeline[0]?.title}」</strong> 中完成单词，才会解锁后续 <strong>第 2 阶段「{activePipeline[1]?.title || "无"}」</strong>，环环相扣，杜绝未记先猜。
        </div>
      </div>

      {/* 模式列表卡片 */}
      <div className="space-y-3.5">
        <h2 className="text-base font-extrabold text-ink">学习模式开关列表</h2>

        <div className="grid grid-cols-1 gap-3.5">
          {allModes.map((m) => {
            const isEnabled = selectedModes.includes(m.key);
            const isMandatory = m.key === "flashcard";
            const Icon = ICON_MAP[m.iconName] || Layers;

            return (
              <div
                key={m.key}
                onClick={() => !isMandatory && toggleMode(m.key)}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl p-5 border-2 transition ${
                  isEnabled
                    ? "bg-white border-brand-200/90 shadow-2xs"
                    : "bg-slate-50/70 border-slate-200/70 opacity-75"
                } ${isMandatory ? "cursor-default" : "cursor-pointer hover:border-brand-300"}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-2xs ${
                      isEnabled ? m.color : "bg-slate-300"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-lg font-bold text-ink">{m.title}</span>
                      {isMandatory ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800 border border-amber-200">
                          <Lock size={12} />
                          核心基础模式（必须保留）
                        </span>
                      ) : isEnabled ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200">
                          <CheckCircle2 size={12} />
                          已开启
                        </span>
                      ) : (
                        <span className="rounded-full bg-slate-200/80 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                          已关闭
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-ink-soft leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  {isMandatory ? (
                    <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-500">
                      <ShieldCheck size={16} className="text-amber-600" />
                      <span>强制开启</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMode(m.key);
                      }}
                      className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                        isEnabled ? "bg-brand-600" : "bg-slate-300"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                          isEnabled ? "translate-x-6" : "translate-x-0"
                        }`}
                      />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 保存按钮 */}
      <div className="flex justify-end pt-2">
        <Button
          size="xl"
          onClick={handleSave}
          loading={saving}
          className="w-full sm:w-auto px-8 gap-2 shadow-md"
        >
          <Save size={18} />
          <span>保存模式设置</span>
        </Button>
      </div>

      {/* DeepSeek AI 单词拆解配置 */}
      <div className="mt-10 rounded-3xl border border-violet-200 bg-white p-6 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="flex items-center gap-2 text-lg font-black text-ink">
              <Sparkles size={20} className="text-violet-600" />
              <span>AI 单词深度拆解配置（DeepSeek Flash 非思考模式）</span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-ink-soft">
              用于闪卡认词中的「AI 单词解释」按钮。按照 <strong>1. 结构拆解 → 2. 词义演进逻辑 → 3. 同根词串联记忆</strong> 对单词进行深度剖析并自动缓存。
            </p>
          </div>
          {aiQ.data?.hasKey ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
              <CheckCircle2 size={14} /> 已配置 API Key ({aiQ.data.maskedKey})
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 border border-amber-200">
              待配置 API Key
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-bold text-ink-soft mb-1.5">
              DeepSeek API Key {aiQ.data?.hasKey && <span className="text-emerald-600 font-normal">（已保存，留空保持不变）</span>}
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder={aiQ.data?.hasKey ? `已保存 (${aiQ.data.maskedKey})，输入新 Key 可覆盖` : "请输入 sk-..."}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-mono focus:border-violet-500 focus:bg-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-ink-soft mb-1.5">API Base URL</label>
            <input
              type="text"
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
              placeholder="https://api.deepseek.com"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-mono focus:border-violet-500 focus:bg-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-ink-soft mb-1.5">模型名称 (默认非思考 Flash)</label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="deepseek-chat"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-mono focus:border-violet-500 focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-ink-soft">
              优化版 AI 单词拆解提示词模板（支持变量 <code className="text-violet-600">{"{{word}}"}</code>{" "}
              <code className="text-violet-600">{"{{pos}}"}</code>{" "}
              <code className="text-violet-600">{"{{meaning}}"}</code>）
            </label>
            {aiQ.data?.defaultPrompt && prompt !== aiQ.data.defaultPrompt && (
              <button
                type="button"
                onClick={() => setPrompt(aiQ.data!.defaultPrompt)}
                className="text-xs font-bold text-violet-600 hover:underline"
              >
                恢复默认优化提示词
              </button>
            )}
          </div>
          <textarea
            rows={7}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-xs sm:text-sm leading-relaxed focus:border-violet-500 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="flex justify-end">
          <Button
            size="lg"
            onClick={handleSaveAi}
            loading={savingAi}
            className="w-full sm:w-auto px-6 gap-2 shadow-sm"
          >
            <Save size={16} />
            <span>保存 AI 拆解配置</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
