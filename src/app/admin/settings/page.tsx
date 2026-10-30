"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Check, CheckCircle2, Copy, Eye, EyeOff, FileText, Globe, Headphones, Layers, ListChecks, Lock, Plus, RotateCcw, Save, Settings, ShieldCheck, Sparkles, SpellCheck, Trash2, Users } from "lucide-react";
import { api, useApi } from "@/lib/client";
import { Button, Input, Loading } from "@/components/ui";
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

interface UserItem {
  id: number;
  username: string;
  display_name: string;
  role: "parent" | "child";
  avatar: string;
  color: string;
}

interface ModesResponse {
  allModes: ModeItem[];
  globalModes: string[];
  userModes: Record<number, string[]>;
  users: UserItem[];
  enabledModes: string[];
}

export interface AiProfileClient {
  id: string;
  name: string;
  hasKey: boolean;
  maskedKey: string;
  baseUrl: string;
  model: string;
  prompt: string;
  thinkingMode?: "disabled" | "enabled" | "auto";
}

interface AiConfigResponse {
  profiles: AiProfileClient[];
  activeProfileId: string;
  hasKey: boolean;
  maskedKey: string;
  baseUrl: string;
  model: string;
  prompt: string;
  thinkingMode?: "disabled" | "enabled" | "auto";
  defaultPrompt: string;
}

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Layers,
  ListChecks,
  Headphones,
  FileText,
  SpellCheck,
};

// 统一的分段选择/标签按钮样式
const TAB_BASE = "inline-flex cursor-pointer items-center gap-2 rounded-2xl border px-3.5 py-2 text-sm font-bold transition";
const TAB_ACTIVE = "border-brand-600 bg-brand-600 text-white shadow-sm";
const TAB_IDLE = "border-slate-200 bg-white text-ink-soft hover:bg-slate-50";
// 输入框下方的快捷预设按钮
const PRESET_BTN =
  "rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-ink-soft transition hover:border-brand-300 hover:text-brand-600";

export default function AdminSettingsPage() {
  const toast = useToast();
  const modesQ = useApi<ModesResponse>("/api/admin/modes");
  const aiQ = useApi<AiConfigResponse>("/api/words/explain");

  // 学习模式与多成员个性化状态
  const [targetUserId, setTargetUserId] = useState<number | "global">("global");
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [savingModes, setSavingModes] = useState(false);

  const allModes = modesQ.data?.allModes || [];
  const userModesMap = modesQ.data?.userModes || {};
  const usersList = modesQ.data?.users || [];
  const currentUser = targetUserId === "global" ? null : usersList.find((u) => u.id === targetUserId);
  const isUserCustomized = targetUserId !== "global" && Boolean(userModesMap[targetUserId as number]);

  // 当切换 targetUserId 或 modesQ 数据更新时，同步选中的模式
  useEffect(() => {
    if (!modesQ.data) return;
    if (targetUserId === "global") {
      setSelectedModes(modesQ.data.globalModes || modesQ.data.enabledModes || []);
    } else {
      const userCustom = modesQ.data.userModes?.[targetUserId as number];
      setSelectedModes(userCustom || modesQ.data.globalModes || modesQ.data.enabledModes || []);
    }
  }, [targetUserId, modesQ.data]);

  // AI 多方案状态
  const [editingProfileId, setEditingProfileId] = useState<string>("");
  const [profileName, setProfileName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [baseUrl, setBaseUrl] = useState("https://api.deepseek.com");
  const [model, setModel] = useState("deepseek-chat");
  const [thinkingMode, setThinkingMode] = useState<"disabled" | "enabled" | "auto">("auto");
  const [prompt, setPrompt] = useState("");
  const [savingAi, setSavingAi] = useState(false);

  const profiles = aiQ.data?.profiles || [];
  const activeProfileId = aiQ.data?.activeProfileId || profiles[0]?.id || "";
  const currentProfile =
    profiles.find((p) => p.id === editingProfileId) ||
    profiles.find((p) => p.id === activeProfileId) ||
    profiles[0];

  useEffect(() => {
    if (aiQ.data) {
      const targetId =
        editingProfileId && profiles.some((p) => p.id === editingProfileId)
          ? editingProfileId
          : activeProfileId;
      const target = profiles.find((p) => p.id === targetId) || profiles[0];
      if (target) {
        setEditingProfileId(target.id);
        setProfileName(target.name);
        setBaseUrl(target.baseUrl || "https://api.deepseek.com");
        setModel(target.model || "deepseek-chat");
        setThinkingMode(
          target.thinkingMode || (target.model?.includes("reasoner") || target.model?.includes("r1") ? "enabled" : "auto"),
        );
        setPrompt(target.prompt || aiQ.data.defaultPrompt || "");
      }
    }
  }, [aiQ.data, activeProfileId]);

  function selectProfile(p: AiProfileClient) {
    setEditingProfileId(p.id);
    setProfileName(p.name);
    setApiKey("");
    setBaseUrl(p.baseUrl || "https://api.deepseek.com");
    setModel(p.model || "deepseek-chat");
    setThinkingMode(
      p.thinkingMode || (p.model?.includes("reasoner") || p.model?.includes("r1") ? "enabled" : "auto"),
    );
    setPrompt(p.prompt || aiQ.data?.defaultPrompt || "");
  }

  function handleCreateNewProfile() {
    setEditingProfileId("new");
    setProfileName(`方案 ${profiles.length + 1}`);
    setApiKey("");
    setBaseUrl("https://api.deepseek.com");
    setModel("deepseek-chat");
    setThinkingMode("auto");
    setPrompt(aiQ.data?.defaultPrompt || "");
  }

  function handleDuplicateProfile() {
    if (!currentProfile) return;
    setEditingProfileId("new");
    setProfileName(`${currentProfile.name} (副本)`);
    setApiKey("");
    setBaseUrl(currentProfile.baseUrl);
    setModel(currentProfile.model);
    setThinkingMode(currentProfile.thinkingMode || "auto");
    setPrompt(currentProfile.prompt);
  }

  async function handleActivateProfile(profileId: string) {
    try {
      const res = await api<AiConfigResponse>("/api/words/explain", {
        method: "PUT",
        body: { action: "select", profileId },
      });
      aiQ.setData(res);
      toast("已切换当前生效的 AI 方案！", "success");
    } catch (e) {
      toast(e instanceof Error ? e.message : "切换失败", "error");
    }
  }

  async function handleDeleteProfile(profileId: string) {
    if (profiles.length <= 1) {
      toast("至少需要保留一套 AI 配置方案", "error");
      return;
    }
    if (!confirm("确定要删除这套配置方案吗？")) return;
    try {
      const res = await api<AiConfigResponse>("/api/words/explain", {
        method: "PUT",
        body: { action: "delete", profileId },
      });
      aiQ.setData(res);
      toast("配置方案已删除", "success");
    } catch (e) {
      toast(e instanceof Error ? e.message : "删除失败", "error");
    }
  }

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

  async function handleSaveModes() {
    setSavingModes(true);
    try {
      const res = await api<ModesResponse>("/api/admin/modes", {
        method: "POST",
        body: {
          enabledModes: selectedModes,
          userId: targetUserId,
        },
      });
      modesQ.setData(res);
      toast(
        targetUserId === "global"
          ? "全局默认模式设置已保存！"
          : `已成功保存「${currentUser?.display_name || "成员"}」的专属模式！`,
        "success",
      );
    } catch (e) {
      toast(e instanceof Error ? e.message : "保存失败，请重试", "error");
    } finally {
      setSavingModes(false);
    }
  }

  async function handleResetUserModes() {
    if (targetUserId === "global") return;
    setSavingModes(true);
    try {
      const res = await api<ModesResponse>("/api/admin/modes", {
        method: "POST",
        body: {
          userId: targetUserId,
          reset: true,
        },
      });
      modesQ.setData(res);
      toast(`「${currentUser?.display_name || "成员"}」已恢复跟随全局默认设置！`, "success");
    } catch (e) {
      toast(e instanceof Error ? e.message : "恢复默认失败", "error");
    } finally {
      setSavingModes(false);
    }
  }

  async function handleSaveAi(makeActive = true) {
    setSavingAi(true);
    try {
      const res = await api<AiConfigResponse>("/api/words/explain", {
        method: "PUT",
        body: {
          action: "save",
          id: editingProfileId,
          name: profileName,
          apiKey,
          baseUrl,
          model,
          prompt,
          thinkingMode,
          setActive: makeActive,
        },
      });
      setApiKey("");
      aiQ.setData(res);
      if (res.activeProfileId) setEditingProfileId(res.activeProfileId);
      toast("AI 配置方案已成功保存并生效！", "success");
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
  const targetName =
    targetUserId === "global"
      ? "全局默认模版"
      : currentUser
      ? currentUser.display_name
      : "成员";

  return (
    <div className="space-y-6">
      {/* 标题 */}
      <div>
        <h1 className="flex items-center gap-2.5 text-2xl font-black sm:text-3xl">
          <Settings className="text-brand-600" size={28} />
          <span>学习模式与闯关解锁设置</span>
        </h1>
        <p className="mt-1 text-sm text-ink-soft">
          自由设定开放的学习模式。系统自动将开启的模式串联为递进关卡，
          <strong className="font-semibold text-ink">前一个模式完成后方可解锁下一个模式</strong>。
        </p>
      </div>

      {/* 成员切换 / 全局模版选择卡片 */}
      <div className="card-soft p-5 sm:p-6">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-2">
            <Users size={18} className="text-brand-600" />
            <span className="text-sm font-bold text-ink">配置对象选择</span>
            <span className="text-sm text-ink-soft">（可为每位学生独立定制闯关模式）</span>
          </div>
          {isUserCustomized && (
            <button
              type="button"
              onClick={handleResetUserModes}
              disabled={savingModes}
              className="inline-flex cursor-pointer items-center gap-1.5 self-start text-xs font-semibold text-ink-soft transition hover:text-amber-600 disabled:cursor-not-allowed disabled:opacity-50 sm:self-auto"
            >
              <RotateCcw size={14} />
              <span>重置为跟随全局默认</span>
            </button>
          )}
        </div>

        {/* 标签栏 */}
        <div className="mt-4 flex flex-wrap gap-2">
          {/* 全局默认 */}
          <button
            type="button"
            onClick={() => setTargetUserId("global")}
            className={`${TAB_BASE} ${targetUserId === "global" ? TAB_ACTIVE : TAB_IDLE}`}
          >
            <Globe size={16} />
            <span>全局默认模版</span>
          </button>

          {/* 用户列表 */}
          {usersList.map((u) => {
            const isSelected = targetUserId === u.id;
            const hasCustom = Boolean(userModesMap[u.id]);
            return (
              <button
                key={u.id}
                type="button"
                onClick={() => setTargetUserId(u.id)}
                className={`${TAB_BASE} ${isSelected ? TAB_ACTIVE : TAB_IDLE}`}
              >
                <span>{u.avatar || "👤"}</span>
                <span>{u.display_name}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    isSelected
                      ? "bg-brand-700 text-white"
                      : u.role === "child"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {u.role === "child" ? "学生" : "家长"}
                </span>
                {hasCustom ? (
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                      isSelected ? "bg-amber-400 text-slate-950" : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    专属
                  </span>
                ) : (
                  <span className={`text-xs ${isSelected ? "text-brand-200" : "text-slate-400"}`}>默认</span>
                )}
              </button>
            );
          })}
        </div>

        {/* 当前选中提示 */}
        <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-relaxed text-ink-soft">
          {targetUserId === "global" ? (
            <span>
              🌐 正在编辑 <strong className="font-semibold text-ink">全局默认模版</strong>
              。所有未单独定制模式的成员将自动遵循此配置。
            </span>
          ) : isUserCustomized ? (
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-amber-500" />
              <span>
                当前正在编辑 <strong className="font-semibold text-ink">{currentUser?.display_name}</strong> 的专属学习模式（<strong className="font-semibold text-ink">已定制</strong>，不随全局模版变动）。
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <span>
                当前 <strong className="font-semibold text-ink">{currentUser?.display_name}</strong> 正在跟随
                <strong className="font-semibold text-ink">全局默认模版</strong>。修改并保存后将为其生成专属定制配置。
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 闯关流水线实时预览 */}
      <div className="card-soft p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm font-bold text-ink">
            <Sparkles size={18} className="text-brand-600" />
            <span>
              {targetUserId === "global" ? "全局默认" : `「${currentUser?.display_name || "成员"}」`}生效的学习闯关流水线（按顺序解锁）
            </span>
          </div>
          <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-bold text-brand-700">
            共开启 {activePipeline.length} 个阶段
          </span>
        </div>

        <div className="mt-4 rounded-2xl bg-brand-50/70 p-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {activePipeline.map((m, idx) => {
              const Icon = ICON_MAP[m.iconName] || Layers;
              return (
                <div key={m.key} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 rounded-xl border border-brand-100 bg-white px-3 py-1.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-xs font-black text-brand-600">
                      {idx + 1}
                    </span>
                    <Icon size={16} className="text-brand-600" />
                    <span className="text-sm font-bold text-ink">{m.title}</span>
                  </div>
                  {idx < activePipeline.length - 1 && (
                    <ArrowRight size={16} className="shrink-0 text-brand-400" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-3 text-xs leading-relaxed text-brand-900/80">
            💡 规则说明：学生必须在 <strong className="font-semibold">第 1 阶段「{activePipeline[0]?.title}」</strong> 中完成单词，才会解锁后续 <strong className="font-semibold">第 2 阶段「{activePipeline[1]?.title || "无"}」</strong>，环环相扣，杜绝未记先猜。
          </div>
        </div>
      </div>

      {/* 模式列表卡片 */}
      <div className="space-y-3">
        <h2 className="flex items-center gap-2 text-lg font-black text-ink">
          <Layers size={20} className="text-brand-600" />
          <span>学习模式开关列表</span>
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {allModes.map((m) => {
            const isEnabled = selectedModes.includes(m.key);
            const isMandatory = m.key === "flashcard";
            const Icon = ICON_MAP[m.iconName] || Layers;

            return (
              <div
                key={m.key}
                onClick={() => !isMandatory && toggleMode(m.key)}
                className={`card-soft flex items-center gap-3 border-2 p-4 transition ${
                  isEnabled ? "border-brand-200" : "border-transparent opacity-70"
                } ${isMandatory ? "cursor-default" : "cursor-pointer hover:border-brand-300"}`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-2xs ${
                    isEnabled ? m.color : "bg-slate-300"
                  }`}
                >
                  <Icon size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="truncate text-sm font-bold text-ink">{m.title}</span>
                    {isMandatory ? (
                      <span
                        title="核心基础模式（必须保留）"
                        className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-100 px-1.5 py-0.5 text-xs font-bold text-amber-800"
                      >
                        <Lock size={11} />
                        必选
                      </span>
                    ) : isEnabled ? (
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5 text-xs font-bold text-emerald-700">
                        <CheckCircle2 size={11} />
                        已开启
                      </span>
                    ) : (
                      <span className="shrink-0 rounded-full bg-slate-200/80 px-1.5 py-0.5 text-xs font-semibold text-slate-600">
                        已关闭
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 truncate text-xs text-ink-soft">{m.desc}</p>
                </div>

                {isMandatory ? (
                  <span
                    title="核心基础模式（必须保留）"
                    className="flex h-6 w-6 shrink-0 items-center justify-center text-amber-500"
                  >
                    <ShieldCheck size={18} />
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMode(m.key);
                    }}
                    aria-label={isEnabled ? `关闭${m.title}` : `开启${m.title}`}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                      isEnabled ? "bg-brand-600" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                        isEnabled ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 保存按钮 */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {isUserCustomized ? (
          <Button type="button" variant="secondary" size="md" onClick={handleResetUserModes} loading={savingModes} className="gap-2">
            <RotateCcw size={16} />
            <span>恢复跟随全局默认</span>
          </Button>
        ) : (
          <div />
        )}
        <Button size="md" onClick={handleSaveModes} loading={savingModes} className="w-full gap-2 shadow-md sm:w-auto">
          <Save size={16} />
          <span>保存「{targetName}」模式设置</span>
        </Button>
      </div>

      {/* DeepSeek AI 单词拆解配置（多方案管理） */}
      <div className="card-soft space-y-5 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="flex items-center gap-2 text-lg font-black text-ink">
              <Sparkles size={20} className="text-brand-600" />
              <span>AI 单词深度拆解配置</span>
            </h2>
            <p className="mt-1 text-sm text-ink-soft">
              支持保存多套不同的 AI 服务商、模型（如 DeepSeek 官方、硅基流动等）或定制提示词，并可随时一键切换当前生效方案。
            </p>
          </div>
          {currentProfile?.hasKey ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
              <CheckCircle2 size={14} /> 当前方案已配置 Key ({currentProfile.maskedKey})
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">
              当前方案待配置 API Key
            </span>
          )}
        </div>

        {/* 方案切换 Tabs */}
        <div>
          <div className="mb-2 flex items-center justify-between text-sm font-bold text-ink">
            <span>选择或新增配置方案</span>
            <span className="text-xs font-semibold text-ink-soft">共 {profiles.length} 套配置方案</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {profiles.map((p) => {
              const isActive = activeProfileId === p.id;
              const isEditing = editingProfileId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => selectProfile(p)}
                  className={`${TAB_BASE} group ${
                    isEditing ? "border-brand-400 bg-brand-50 text-brand-700 ring-2 ring-brand-100" : TAB_IDLE
                  }`}
                >
                  {isActive ? (
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500" title="当前全局生效中" />
                  ) : (
                    <span className="flex h-2 w-2 rounded-full bg-slate-300" />
                  )}
                  <span>{p.name}</span>
                  <span className="rounded border border-slate-200/60 bg-white/80 px-1.5 py-0.5 font-mono text-xs text-ink-soft">
                    {p.model}
                  </span>
                  {isActive && (
                    <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-xs font-bold text-emerald-800">
                      生效中
                    </span>
                  )}
                </button>
              );
            })}

            <button
              type="button"
              onClick={handleCreateNewProfile}
              className={`${TAB_BASE} border-dashed border-brand-300 text-brand-600 hover:bg-brand-50 ${
                editingProfileId === "new" ? "bg-brand-50 ring-2 ring-brand-100" : ""
              }`}
            >
              <Plus size={14} />
              <span>新增配置方案</span>
            </button>
          </div>
        </div>

        {/* 方案编辑表单 */}
        <div className="space-y-4 rounded-2xl bg-slate-50 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-ink">
                {editingProfileId === "new" ? "✨ 创建新配置方案" : `⚙️ 正在编辑：${profileName || "方案"}`}
              </span>
              {activeProfileId === editingProfileId && (
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700">
                  当前生效方案
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {editingProfileId !== "new" && activeProfileId !== editingProfileId && (
                <button
                  type="button"
                  onClick={() => handleActivateProfile(editingProfileId)}
                  className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-2xs transition hover:bg-emerald-700"
                >
                  <Check size={13} />
                  <span>切换为此方案</span>
                </button>
              )}
              {editingProfileId !== "new" && (
                <button
                  type="button"
                  onClick={handleDuplicateProfile}
                  className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-ink-soft transition hover:bg-slate-50"
                  title="基于当前方案复制新的一套"
                >
                  <Copy size={13} />
                  <span>复制此方案</span>
                </button>
              )}
              {editingProfileId !== "new" && profiles.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleDeleteProfile(editingProfileId)}
                  className="inline-flex items-center gap-1 rounded-xl border border-coral-200 bg-white px-2.5 py-1.5 text-xs font-bold text-coral-600 transition hover:bg-coral-50"
                  title="删除这套配置方案"
                >
                  <Trash2 size={13} />
                  <span>删除</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Input
              label="方案名称"
              type="text"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
              placeholder="例如：DeepSeek Flash 极速"
            />

            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink-soft">
                API Key{" "}
                {currentProfile?.hasKey && <span className="font-normal text-emerald-600">（留空保持不变）</span>}
              </span>
              <div className="relative">
                <Input
                  type={showKey ? "text" : "password"}
                  autoComplete="new-password"
                  name="ai_api_key_custom_noff"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder={
                    currentProfile?.hasKey
                      ? `已保存 (${currentProfile.maskedKey})，留空不变`
                      : "请输入 API Key (sk-...)"
                  }
                  className="pr-10 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowKey((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft transition hover:text-ink"
                  title={showKey ? "隐藏密钥" : "显示密钥"}
                >
                  {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </label>

            <div>
              <Input
                label="API Base URL"
                type="text"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                placeholder="https://api.deepseek.com"
                className="font-mono"
              />
              <div className="mt-1.5 flex flex-wrap gap-1">
                <button type="button" onClick={() => setBaseUrl("https://api.deepseek.com")} className={PRESET_BTN}>
                  DeepSeek 官方
                </button>
                <button type="button" onClick={() => setBaseUrl("https://api.siliconflow.cn/v1")} className={PRESET_BTN}>
                  硅基流动
                </button>
                <button type="button" onClick={() => setBaseUrl("https://dashscope.aliyuncs.com/compatible-mode/v1")} className={PRESET_BTN}>
                  阿里百炼
                </button>
                <button type="button" onClick={() => setBaseUrl("https://openrouter.ai/api/v1")} className={PRESET_BTN}>
                  OpenRouter
                </button>
              </div>
            </div>

            <div>
              <Input
                label="模型名称"
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="deepseek-chat"
                className="font-mono"
              />
              <div className="mt-1.5 flex flex-wrap gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setModel("deepseek-chat");
                    setThinkingMode("disabled");
                  }}
                  className={PRESET_BTN}
                >
                  deepseek-chat (极速)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setModel("deepseek-flash");
                    setThinkingMode("disabled");
                  }}
                  className={PRESET_BTN}
                >
                  deepseek-flash
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setModel("deepseek-reasoner");
                    setThinkingMode("enabled");
                  }}
                  className={PRESET_BTN}
                >
                  deepseek-reasoner (深度思考)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBaseUrl("https://api.siliconflow.cn/v1");
                    setModel("deepseek-ai/DeepSeek-R1");
                    setThinkingMode("enabled");
                  }}
                  className={PRESET_BTN}
                >
                  硅基 DeepSeek-R1
                </button>
              </div>
            </div>
          </div>

          {/* 思考与推理模式设置 */}
          <div className="space-y-2 rounded-2xl border border-brand-100 bg-brand-50/50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-sm font-bold text-ink">
                  <Sparkles size={14} className="text-brand-600" />
                  <span>思考与推理链设置 (Thinking Mode)</span>
                </div>
                <div className="mt-0.5 text-xs leading-relaxed text-ink-soft">
                  针对 DeepSeek-R1 / deepseek-reasoner 等无法取消思考或主打深度推理的模型，系统将自动适配并展示思维过程。
                </div>
              </div>
              <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setThinkingMode("disabled")}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition sm:text-sm ${
                    thinkingMode === "disabled" ? "bg-brand-600 text-white shadow-2xs" : "text-ink-soft hover:text-ink"
                  }`}
                  title="优先尝试取消思考，获得极速响应"
                >
                  ⚡ 极速非思考
                </button>
                <button
                  type="button"
                  onClick={() => setThinkingMode("enabled")}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition sm:text-sm ${
                    thinkingMode === "enabled" ? "bg-brand-600 text-white shadow-2xs" : "text-ink-soft hover:text-ink"
                  }`}
                  title="允许深度思考推理，展示完整思维链"
                >
                  🧠 深度思考/推理
                </button>
                <button
                  type="button"
                  onClick={() => setThinkingMode("auto")}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition sm:text-sm ${
                    thinkingMode === "auto" ? "bg-brand-600 text-white shadow-2xs" : "text-ink-soft hover:text-ink"
                  }`}
                  title="根据模型名称智能判断与回退"
                >
                  ⚙️ 智能自适应
                </button>
              </div>
            </div>
            <div className="text-xs leading-relaxed text-ink-soft">
              {thinkingMode === "disabled" && (
                <span>⚡ 极速模式：尝试关闭思考链以获得最快响应。若模型/厂商强制要求思考无法关闭，系统会自动容错，不会报错。</span>
              )}
              {thinkingMode === "enabled" && (
                <span>🧠 深度思考模式：自动放宽 Token 预算（4096），规避 reason_format 兼容问题，并在单词拆解结果中提供【查看思考过程】折叠卡片。</span>
              )}
              {thinkingMode === "auto" && (
                <span>⚙️ 智能自适应：自动检测模型名是否含 reasoner / r1 / qwq。非推理模型极速响应，推理模型保留思维链。</span>
              )}
            </div>
          </div>

          <div>
            <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
              <label className="text-sm font-semibold text-ink-soft">
                提示词模板（支持变量 <code className="text-brand-600">{"{{word}}"}</code>{" "}
                <code className="text-brand-600">{"{{pos}}"}</code>{" "}
                <code className="text-brand-600">{"{{meaning}}"}</code>）
              </label>
              {aiQ.data?.defaultPrompt && prompt !== aiQ.data.defaultPrompt && (
                <button
                  type="button"
                  onClick={() => setPrompt(aiQ.data!.defaultPrompt)}
                  className="text-xs font-bold text-brand-600 hover:underline"
                >
                  恢复默认优化提示词
                </button>
              )}
            </div>
            <textarea
              rows={6}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full rounded-2xl border-2 border-slate-200 bg-white p-4 text-sm leading-relaxed outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2.5 pt-1">
            <Button size="md" onClick={() => handleSaveAi(true)} loading={savingAi} className="w-full gap-2 shadow-sm sm:w-auto">
              <Save size={16} />
              <span>保存并设为当前生效方案</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
