"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Check, FileText, Flame, Headphones, Layers, ListChecks, LogOut, Printer, RotateCcw, Settings, SlidersHorizontal, Sparkles, SpellCheck, Star, Volume2 } from "lucide-react";
import { Button, Empty, Loading, Modal, ProgressBar } from "@/components/ui";
import { AiExplainModal } from "@/components/AiExplainModal";
import { useToast } from "@/components/Toast";
import type { Tag } from "@/components/WordEditor";
import { api, useApi } from "@/lib/client";
import { BOX_COLORS, BOX_LABELS, gradeLabel } from "@/lib/constants";
import { speak } from "@/lib/speech";

interface MeData {
  user: { id: number; display_name: string; avatar: string; color: string; role: "parent" | "child"; daily_goal: number };
  stats: { todayAnswers: number; todayCorrect: number; stars: number; streak: number; reviewDue: number; wrongCount: number; learned: number; mastered: number };
}
interface Book {
  id: number;
  name: string;
  description?: string;
  builtin?: number;
  unit_count?: number;
  word_count?: number;
}
interface Unit {
  id: number;
  grade: number;
  term: string;
  name: string;
  word_count: number;
  learned: number;
  mastered: number;
}
interface WordItem {
  id: number;
  text: string;
  meaning: string;
  phonetic: string;
  pos?: string;
  emoji: string;
  synonyms?: string;
  word_family?: string;
  box: number;
  flashcard_done?: boolean;
  quiz_done?: boolean;
  listen_done?: boolean;
  quiz_unlocked?: boolean;
  listen_unlocked?: boolean;
  spell_unlocked?: boolean;
  has_ai_explain?: boolean;
  ai_explain?: string;
}

interface BatchTaskData {
  unitId: number;
  total: number;
  processed: number;
  succeeded: number;
  failed: number;
  currentWord?: string;
  status: "running" | "completed" | "error" | "cancelled";
  error?: string;
}

interface BatchExplainStatus {
  unitId: number;
  totalWords: number;
  explainedWords: number;
  unexplainedWords: number;
  task?: BatchTaskData;
}

const ALL_MODES_CONFIG = [
  { key: "flashcard", title: "闪卡认词", desc: "翻卡片 + 跟读发音", icon: Layers, color: "bg-brand-400", shadow: "#1b6be0" },
  { key: "quiz", title: "四选一闯关", desc: "中英互选，快速反应", icon: ListChecks, color: "bg-mint-500", shadow: "#24b872" },
  { key: "listen", title: "听音选词", desc: "磨耳朵，听发音选意思", icon: Headphones, color: "bg-sun-500 text-ink", shadow: "#f5a623" },
  { key: "cloze", title: "例句挖空", desc: "语境填词，掌握用法", icon: FileText, color: "bg-amber-500 text-white", shadow: "#d97706" },
  { key: "spell", title: "拼写挑战", desc: "点字母块拼出单词", icon: SpellCheck, color: "bg-grape-500", shadow: "#7c3aed" },
];

export default function LearnHomePage() {
  const router = useRouter();
  const toast = useToast();
  const meQ = useApi<MeData>("/api/me");
  const currentUser = meQ.data?.user;
  const booksQ = useApi<{ books: Book[] }>("/api/books");
  const tagsQ = useApi<{ tags: Tag[] }>("/api/tags");

  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsQ = useApi<{ visibleBookIds: number[] | null; dailyGoal: number }>("/api/me/settings");

  // 本地持久化的可见词库 id 列表（优先用户专属 key，回退通用 key）
  const [visibleBookIds, setVisibleBookIdsState] = useState<number[] | null>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("words_visible_book_ids");
      if (saved) {
        try {
          const arr = JSON.parse(saved);
          if (Array.isArray(arr) && arr.length > 0) return arr;
        } catch {}
      }
    }
    return null;
  });

  // 当用户或远端设置加载时，同步可见词库
  useEffect(() => {
    if (currentUser && typeof window !== "undefined") {
      const userSaved = localStorage.getItem(`words_visible_book_ids_${currentUser.id}`);
      if (userSaved) {
        try {
          const arr = JSON.parse(userSaved);
          if (Array.isArray(arr) && arr.length > 0) {
            setVisibleBookIdsState(arr);
            return;
          }
        } catch {}
      }
    }
    if (settingsQ.data?.visibleBookIds) {
      setVisibleBookIdsState(settingsQ.data.visibleBookIds);
      if (typeof window !== "undefined" && currentUser) {
        localStorage.setItem(`words_visible_book_ids_${currentUser.id}`, JSON.stringify(settingsQ.data.visibleBookIds));
      }
    }
  }, [settingsQ.data, currentUser]);

  const updateVisibleBooks = async (newIds: number[]) => {
    if (newIds.length === 0) {
      toast("至少需要保留一个显示的词库哦", "error");
      return;
    }
    setVisibleBookIdsState(newIds);
    if (typeof window !== "undefined") {
      localStorage.setItem("words_visible_book_ids", JSON.stringify(newIds));
      if (currentUser) {
        localStorage.setItem(`words_visible_book_ids_${currentUser.id}`, JSON.stringify(newIds));
      }
    }
    try {
      await api("/api/me/settings", { method: "PATCH", body: { visibleBookIds: newIds } });
    } catch (e) {
      console.error("Failed to sync visible books to server:", e);
    }
  };

  const allBooks = booksQ.data?.books || [];
  const visibleBooks = useMemo(() => {
    if (!visibleBookIds || visibleBookIds.length === 0) return allBooks;
    const filtered = allBooks.filter((b) => visibleBookIds.includes(b.id));
    return filtered.length > 0 ? filtered : allBooks;
  }, [allBooks, visibleBookIds]);

  const [bookId, setBookIdState] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("words_active_book_id");
      if (saved) return Number(saved) || 0;
    }
    return 0;
  });

  const setBookId = (id: number) => {
    setBookIdState(id);
    if (typeof window !== "undefined") {
      localStorage.setItem("words_active_book_id", String(id));
    }
  };

  const [gradeKey, setGradeKeyState] = useState<string>("");
  const setGradeKey = (k: string) => {
    setGradeKeyState(k);
    if (typeof window !== "undefined" && bookId) {
      localStorage.setItem(`words_grade_${bookId}`, k);
    }
  };

  const [scope, setScope] = useState<{ type: string; id?: number; title: string; count: number } | null>(null);
  const [previewUnit, setPreviewUnit] = useState<Unit | null>(null);
  const unitWordsQ = useApi<{ words: WordItem[] }>(previewUnit ? `/api/words?unitId=${previewUnit.id}` : null);

  const [batchStatus, setBatchStatus] = useState<BatchExplainStatus | null>(null);
  const [batchLoading, setBatchLoading] = useState(false);
  const [selectedExplainWord, setSelectedExplainWord] = useState<WordItem | null>(null);

  const pollBatchStatus = useCallback(async (unitId: number) => {
    try {
      const res = await api<BatchExplainStatus>(`/api/words/explain/batch?unitId=${unitId}`);
      setBatchStatus(res);
      return res;
    } catch {
      return null;
    }
  }, []);

  const reloadWords = unitWordsQ.reload;

  useEffect(() => {
    if (!previewUnit) {
      setBatchStatus(null);
      return;
    }

    let timer: NodeJS.Timeout | null = null;
    let isMounted = true;
    let prevRunning = false;

    const check = async () => {
      const res = await pollBatchStatus(previewUnit.id);
      if (!isMounted) return;
      const isRunning = res?.task?.status === "running";
      if (prevRunning && !isRunning) {
        reloadWords();
        if (res?.task?.status === "completed") {
          toast(`批量 AI 拆解已完成！成功 ${res.task.succeeded} 词`, "success");
        } else if (res?.task?.status === "error") {
          toast(res.task.error || "批量 AI 拆解出错", "error");
        }
      }
      prevRunning = Boolean(isRunning);

      if (isRunning) {
        timer = setTimeout(check, 1200);
      }
    };

    check();

    return () => {
      isMounted = false;
      if (timer) clearTimeout(timer);
    };
  }, [previewUnit, pollBatchStatus, reloadWords, toast]);

  const handleStartBatchExplain = async (force: boolean = false) => {
    if (!previewUnit) return;
    setBatchLoading(true);
    try {
      const res = await api<{ task?: BatchTaskData; message?: string; alreadyRunning?: boolean }>(
        "/api/words/explain/batch",
        {
          method: "POST",
          body: JSON.stringify({ unitId: previewUnit.id, force }),
        },
      );
      if (res.message) {
        toast(res.message, "info");
      } else {
        toast("已启动后台批量 AI 拆解，请稍候...", "success");
      }
      await pollBatchStatus(previewUnit.id);
    } catch (err) {
      toast((err as Error).message, "error");
    } finally {
      setBatchLoading(false);
    }
  };

  const handleCancelBatchExplain = async () => {
    if (!previewUnit) return;
    try {
      await api(`/api/words/explain/batch?unitId=${previewUnit.id}`, { method: "DELETE" });
      toast("已取消后台批量任务", "info");
      await pollBatchStatus(previewUnit.id);
    } catch (err) {
      toast((err as Error).message, "error");
    }
  };

  const scopeInfoQ = useApi<{
    total: number;
    scopeTotal: number;
    enabledModes?: string[];
    modeProgress?: Record<string, { done: number; unlocked: number; prevMode: string | null }>;
    flashcardCount: number;
    quizCount: number;
    listenCount: number;
    clozeCount: number;
    spellCount: number;
    quizUnlockedCount: number;
    listenUnlockedCount: number;
    clozeUnlockedCount: number;
    spellUnlockedCount: number;
  }>(
    scope ? `/api/study/queue?type=${scope.type}&id=${scope.id ?? ""}&bookId=${bookId ?? ""}&limit=1` : null,
  );

  useEffect(() => {
    if (visibleBooks.length) {
      const valid = visibleBooks.some((b) => b.id === bookId);
      if (!bookId || !valid) {
        setBookId(visibleBooks[0].id);
      }
    }
  }, [visibleBooks, bookId]);

  const bookDetailQ = useApi<{ units: Unit[] }>(bookId ? `/api/books/${bookId}` : null);

  const gradeGroups = useMemo(() => {
    const m = new Map<string, { grade: number; term: string; units: Unit[] }>();
    bookDetailQ.data?.units.forEach((u) => {
      const k = `${u.grade}${u.term}`;
      if (!m.has(k)) m.set(k, { grade: u.grade, term: u.term, units: [] });
      m.get(k)!.units.push(u);
    });
    return [...m.entries()];
  }, [bookDetailQ.data]);

  useEffect(() => {
    if (gradeGroups.length) {
      const savedKey = typeof window !== "undefined" && bookId ? localStorage.getItem(`words_grade_${bookId}`) : null;
      if (savedKey && gradeGroups.some(([k]) => k === savedKey)) {
        setGradeKeyState(savedKey);
      } else if (!gradeKey || !gradeGroups.some(([k]) => k === gradeKey)) {
        setGradeKeyState(gradeGroups[0][0]);
      }
    }
  }, [gradeGroups, gradeKey, bookId]);

  async function logout() {
    await api("/api/auth/logout", { method: "POST" });
    router.replace("/login");
  }

  function startMode(mode: string, limit?: number) {
    if (!scope) return;
    const count = limit ?? scope.count;
    const qs = new URLSearchParams({ type: scope.type, mode, limit: String(count), title: scope.title });
    if (scope.id) qs.set("id", String(scope.id));
    if (bookId) qs.set("bookId", String(bookId));
    router.push(`/learn/session?${qs.toString()}`);
  }

  if (meQ.loading || !meQ.data) return <Loading />;
  const { user, stats } = meQ.data;
  const activeGroup = gradeGroups.find(([k]) => k === gradeKey)?.[1];
  const goalRatio = Math.min(1, stats.todayAnswers / Math.max(1, user.daily_goal));

  return (
    <div className="mx-auto max-w-5xl px-4 pt-4 pb-20 sm:px-6">
      {/* 顶部栏 */}
      <header className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-13 w-13 items-center justify-center rounded-2xl text-3xl shadow-sm" style={{ background: user.color + "30" }}>
            {user.avatar}
          </div>
          <div>
            <div className="text-lg font-black">{user.display_name}</div>
            <div className="text-xs text-ink-soft">今天也要加油背单词哦！</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-2xl bg-white px-3 py-1.5 text-sm font-black text-amber-500 shadow-sm">
            <Star size={17} fill="currentColor" /> {stats.stars}
          </div>
          <div className="flex items-center gap-1 rounded-2xl bg-white px-3 py-1.5 text-sm font-black text-coral-500 shadow-sm">
            <Flame size={17} fill="currentColor" /> {stats.streak}
          </div>
          {user.role === "parent" && (
            <Link
              href="/admin"
              className="rounded-2xl bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm hover:text-brand-600 transition flex items-center gap-1.5"
              title="家长管理后台（词库与模式设置）"
            >
              <span>🛠️</span>
              <span className="hidden sm:inline">管理</span>
            </Link>
          )}
          <button
            onClick={() => setSettingsOpen(true)}
            className="rounded-2xl bg-white p-2.5 text-ink-soft shadow-sm hover:text-ink transition"
            title="学习设置"
          >
            <Settings size={18} />
          </button>
          <button onClick={logout} className="rounded-2xl bg-white p-2.5 text-ink-soft shadow-sm hover:text-ink transition" title="切换账号">
            <LogOut size={18} />
          </button>
        </div>
      </header>

      {/* 今日目标 + 快捷任务 */}
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="card-soft p-5 md:col-span-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-extrabold">🎯 今日目标</span>
            <span className="text-sm font-black text-brand-500">
              {stats.todayAnswers} / {user.daily_goal} 题
            </span>
          </div>
          <div className="my-3">
            <ProgressBar value={goalRatio} color={goalRatio >= 1 ? "#3DD68C" : "#4FA3FF"} className="h-4" />
          </div>
          <div className="flex justify-between text-xs text-ink-soft">
            <span>已学 {stats.learned} 词</span>
            <span>掌握 {stats.mastered} 词</span>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          disabled={stats.reviewDue === 0}
          onClick={() => setScope({ type: "review", title: "今日复习", count: stats.reviewDue })}
          className="card-soft flex items-center justify-between p-5 text-left disabled:opacity-60"
        >
          <div>
            <div className="flex items-center gap-1.5 text-base font-extrabold text-brand-600">
              <RotateCcw size={18} /> 今日待复习
            </div>
            <p className="mt-1 text-xs text-ink-soft">{stats.reviewDue ? "根据艾宾浩斯节奏自动安排" : "太棒啦，今天没有到期复习词"}</p>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-2xl font-black text-brand-600">
            {stats.reviewDue}
          </div>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.97 }}
          disabled={stats.wrongCount === 0}
          onClick={() => setScope({ type: "wrong", title: "错题本专项", count: stats.wrongCount })}
          className="card-soft flex items-center justify-between p-5 text-left disabled:opacity-60"
        >
          <div>
            <div className="flex items-center gap-1.5 text-base font-extrabold text-coral-600">
              <Sparkles size={18} /> 错题本消灭
            </div>
            <p className="mt-1 text-xs text-ink-soft">{stats.wrongCount ? "把之前答错的词再练一遍" : "错题本空空如也！"}</p>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-coral-300/30 text-2xl font-black text-coral-600">
            {stats.wrongCount}
          </div>
        </motion.button>
      </div>

      {/* 按标签练习 */}
      {tagsQ.data && tagsQ.data.tags.some((t) => (t.word_count ?? 0) > 0) && (
        <div className="mb-6">
          <div className="mb-2.5 text-sm font-extrabold text-ink-soft">🏷️ 按标签专项练习</div>
          <div className="no-scrollbar -mx-4 flex gap-2.5 overflow-x-auto px-4">
            {tagsQ.data.tags
              .filter((t) => (t.word_count ?? 0) > 0)
              .map((t) => (
                <motion.button
                  key={t.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setScope({ type: "tag", id: t.id, title: `#${t.name}`, count: t.word_count ?? 0 })}
                  className="flex shrink-0 items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-bold shadow-sm"
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: t.color }} />
                  <span>{t.name}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-ink-soft">{t.word_count}</span>
                </motion.button>
              ))}
          </div>
        </div>
      )}

      {/* 词库选择 & 设置入口 */}
      {allBooks.length > 0 && (
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {visibleBooks.map((b) => (
              <button
                key={b.id}
                onClick={() => setBookId(b.id)}
                className={`rounded-2xl px-4 py-2 text-sm font-extrabold transition ${bookId === b.id ? "bg-ink text-white" : "bg-white text-ink-soft"}`}
              >
                📚 {b.name}
              </button>
            ))}
          </div>
          <button
            onClick={() => setSettingsOpen(true)}
            className="flex items-center gap-1.5 rounded-2xl bg-white px-3 py-2 text-xs font-bold text-ink-soft hover:text-ink shadow-sm transition shrink-0"
            title="选择要显示的词库"
          >
            <SlidersHorizontal size={14} className="text-brand-500" />
            <span>词库设置</span>
          </button>
        </div>
      )}

      <div className="no-scrollbar -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 py-1">
        {gradeGroups.map(([k, g]) => (
          <button
            key={k}
            onClick={() => setGradeKey(k)}
            className={`relative shrink-0 rounded-2xl px-4 py-2.5 text-sm font-extrabold transition ${gradeKey === k ? "text-white" : "bg-white text-ink-soft hover:text-ink"}`}
          >
            {gradeKey === k && (
              <motion.span layoutId="learn-grade" className="absolute inset-0 rounded-2xl bg-brand-400 shadow" transition={{ type: "spring", stiffness: 420, damping: 32 }} />
            )}
            <span className="relative">{gradeLabel(g.grade, g.term)}</span>
          </button>
        ))}
      </div>

      {/* 单元卡片列表 */}
      {!activeGroup ? (
        <Empty icon="📖" title="该词库还没有单元" />
      ) : (
        <>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-black">{gradeLabel(activeGroup.grade, activeGroup.term)}</h2>
            <button
              onClick={() =>
                setScope({
                  type: "grade",
                  id: activeGroup.grade * 10 + (activeGroup.term === "下" ? 1 : 0),
                  title: `${gradeLabel(activeGroup.grade, activeGroup.term)} 综合练习`,
                  count: activeGroup.units.reduce((n, u) => n + u.word_count, 0),
                })
              }
              className="text-sm font-extrabold text-brand-500 hover:underline"
            >
              整册随机抽查 →
            </button>
          </div>
          <motion.div
            key={gradeKey}
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.05 } } }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {activeGroup.units.map((u, idx) => {
              const doneRatio = u.word_count ? u.learned / u.word_count : 0;
              const masterRatio = u.word_count ? u.mastered / u.word_count : 0;
              return (
                <motion.div
                  key={u.id}
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ y: -3 }}
                  className="card-soft flex flex-col justify-between p-5"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="rounded-xl bg-brand-50 px-2.5 py-1 text-xs font-black text-brand-500">UNIT {idx + 1}</span>
                      {masterRatio >= 1 && u.word_count > 0 && <span className="text-xl" title="全部掌握">🏆</span>}
                    </div>
                    <h3 className="mt-2.5 text-lg font-extrabold">{u.name}</h3>
                    <div className="mt-3 mb-1.5 flex justify-between text-xs text-ink-soft">
                      <span>共 {u.word_count} 词</span>
                      <span>
                        已学 {u.learned} · 掌握 {u.mastered}
                      </span>
                    </div>
                    <ProgressBar value={doneRatio} color={masterRatio >= 1 ? "#FFC23C" : "#3DD68C"} />
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <Button variant="secondary" size="sm" onClick={() => setPreviewUnit(u)} className="px-3" title="查看单元词单">
                      词表
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => router.push(`/learn/print?unitId=${u.id}&bookId=${bookId}`)}
                      className="p-2 text-ink-soft hover:text-brand-600"
                      title="一键生成默写/听写练习纸"
                    >
                      <Printer size={16} />
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      disabled={u.word_count === 0}
                      onClick={() => setScope({ type: "unit", id: u.id, title: u.name, count: u.word_count })}
                    >
                      开始闯关
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </>
      )}

      {/* 选择学习模式弹窗 */}
      <Modal open={!!scope} onClose={() => setScope(null)} title={scope?.title}>
        {(() => {
          const activeModes = ALL_MODES_CONFIG.filter(
            (m) => !scopeInfoQ.data?.enabledModes || scopeInfoQ.data.enabledModes.includes(m.key),
          );
          const pipelineTitles = activeModes.map((m) => m.title).join(" ➔ ");

          return (
            <>
              <p className="mb-4 text-xs font-bold text-ink-soft leading-relaxed">
                共 {scope?.count} 个单词，按「{pipelineTitles}」循序渐进闯关（前一阶段完成解锁下一阶段）：
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {activeModes.map((m, idx) => {
                  const Icon = m.icon;
                  const info = scopeInfoQ.data;
                  const loading = scopeInfoQ.loading;

                  let isLocked = false;
                  let lockMsg = "";
                  let targetCount = scope?.count || 20;
                  let desc = m.desc;

                  if (idx === 0) {
                    // 首个阶段（闪卡认词）：直接开放
                    isLocked = false;
                    if (info) {
                      desc =
                        info.flashcardCount >= info.scopeTotal
                          ? `✅ 已认全全部 ${info.scopeTotal} 词`
                          : info.flashcardCount > 0
                          ? `已完成 ${info.flashcardCount}/${info.scopeTotal} 词认词`
                          : "翻卡片 + 跟读发音（入门首选）";
                    }
                  } else {
                    const prevMode = activeModes[idx - 1];
                    const unlocked =
                      info?.modeProgress?.[m.key]?.unlocked ??
                      (info as Record<string, unknown> | undefined)?.[`${m.key}UnlockedCount`] as number ??
                      0;
                    const done =
                      info?.modeProgress?.[m.key]?.done ??
                      (info as Record<string, unknown> | undefined)?.[`${m.key}Count`] as number ??
                      0;

                    isLocked = !loading && info !== undefined && unlocked === 0;
                    targetCount = unlocked || (scope?.count || 20);
                    lockMsg = `需先在「${prevMode.title}」中完成练习后，才能开启${m.title}哦！`;

                    if (loading) {
                      desc = "正在检查前置完成进度…";
                    } else if (isLocked) {
                      desc = `🔒 需先完成${prevMode.title}解锁`;
                    } else if (info) {
                      desc =
                        done >= info.scopeTotal
                          ? `✅ 已通关全部 ${info.scopeTotal} 词`
                          : `已解锁 ${unlocked}/${info.scopeTotal} 词可练习`;
                    }
                  }

                  const handleClick = () => {
                    if (isLocked) {
                      toast(lockMsg, "info");
                      return;
                    }
                    startMode(m.key, targetCount);
                  };

                  return (
                    <motion.button
                      key={m.key}
                      whileTap={{ scale: 0.96 }}
                      onClick={handleClick}
                      className={`btn-3d ${isLocked ? "bg-slate-400 opacity-80" : m.color} flex items-center gap-3.5 rounded-3xl p-4 text-left text-white`}
                      style={{ ["--shadow-color" as string]: isLocked ? "#94a3b8" : m.shadow }}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/25">
                        <Icon size={26} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 text-lg font-black">
                          <span>{m.title}</span>
                          {isLocked && <span className="text-sm">🔒</span>}
                        </div>
                        <div className="text-xs opacity-90 truncate">{desc}</div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </>
          );
        })()}
      </Modal>

      {/* 单元词表预览弹窗 */}
      <Modal open={!!previewUnit} onClose={() => setPreviewUnit(null)} title={previewUnit?.name} wide>
        {/* 批量 AI 解释进度/操作卡片 */}
        {batchStatus && (
          <div className="mb-3 rounded-2xl border border-purple-100 bg-gradient-to-r from-purple-50/70 via-indigo-50/50 to-blue-50/60 p-3">
            {batchStatus.task && batchStatus.task.status === "running" ? (
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white animate-spin">
                      <RotateCcw size={14} />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-bold text-slate-800">
                          AI 深度拆解生成中 ({batchStatus.task.processed}/{batchStatus.task.total})
                        </span>
                        <span className="rounded bg-purple-100 px-1.5 py-0.2 text-[10px] font-semibold text-purple-700">
                          后台运行中
                        </span>
                      </div>
                      {batchStatus.task.currentWord && (
                        <div className="truncate text-[11px] text-purple-700 font-medium">
                          正在解析：<span className="font-bold underline">{batchStatus.task.currentWord}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={handleCancelBatchExplain}
                    className="shrink-0 rounded-lg px-2.5 py-1 text-xs font-semibold text-rose-500 hover:bg-rose-50 transition"
                  >
                    终止任务
                  </button>
                </div>
                <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-purple-200/50">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-300"
                    style={{
                      width: `${Math.max(
                        5,
                        Math.round((batchStatus.task.processed / (batchStatus.task.total || 1)) * 100),
                      )}%`,
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                    <Sparkles size={15} />
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                      <span>AI 词源拆解助记</span>
                      <span className="rounded-full bg-purple-100/80 px-2 py-0.2 text-[10px] font-semibold text-purple-700">
                        已覆盖 {batchStatus.explainedWords}/{batchStatus.totalWords} 词
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {batchStatus.unexplainedWords > 0
                        ? `还有 ${batchStatus.unexplainedWords} 个单词未生成拆解，可一键批量后台生成`
                        : "本单元所有单词均已完成 AI 构词深度拆解与助记！"}
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  disabled={batchLoading}
                  onClick={() => {
                    if (batchStatus.unexplainedWords === 0) {
                      if (confirm("本单元全部单词已生成拆解，是否全部重新生成？")) {
                        handleStartBatchExplain(true);
                      }
                    } else {
                      handleStartBatchExplain(false);
                    }
                  }}
                  className="shrink-0 gap-1 border-purple-200 bg-white/80 text-purple-700 hover:bg-purple-100/80 text-xs py-1 px-3"
                >
                  <Sparkles size={13} className="text-purple-600" />
                  <span>
                    {batchLoading
                      ? "启动中..."
                      : batchStatus.unexplainedWords > 0
                        ? `批量AI解释 (${batchStatus.unexplainedWords})`
                        : "全部重新生成"}
                  </span>
                </Button>
              </div>
            )}
          </div>
        )}

        {unitWordsQ.loading ? (
          <Loading />
        ) : (
          <div className="max-h-[58dvh] divide-y divide-slate-100 overflow-y-auto">
            {unitWordsQ.data?.words.map((w) => {
              const b = Math.max(0, w.box);
              return (
                <div key={w.id} className="flex items-center gap-3 py-3">
                  <button onClick={() => speak(w.text)} className="rounded-full bg-brand-50 p-2.5 text-brand-500 hover:bg-brand-100">
                    <Volume2 size={18} />
                  </button>
                  <span className="w-8 text-center text-2xl">{w.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-word text-lg font-bold">{w.text}</span>
                      {w.pos && <span className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-semibold text-ink-soft">{w.pos}</span>}
                      {w.phonetic && <span className="text-sm text-ink-soft">{w.phonetic}</span>}
                    </div>
                    <div className="text-sm text-ink-soft">{w.meaning}</div>
                    {(() => {
                      if (!w.synonyms) return null;
                      try {
                        const parsed = JSON.parse(w.synonyms);
                        const words = parsed.words || (Array.isArray(parsed) ? parsed : []);
                        if (words.length > 0) {
                          return (
                            <div className="mt-0.5 flex items-center gap-1 text-[11px] text-amber-800">
                              <span className="font-bold text-amber-600">≈</span>
                              <span className="font-medium text-amber-900/90 truncate max-w-xs">
                                {words.slice(0, 3).join(", ")}
                                {words.length > 3 ? "…" : ""}
                              </span>
                            </div>
                          );
                        }
                      } catch {}
                      return null;
                    })()}
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {/* AI 拆解查看/生成按钮 */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedExplainWord(w);
                      }}
                      className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold transition ${
                        w.has_ai_explain || w.ai_explain
                          ? "bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200/60"
                          : "bg-slate-100/80 text-slate-500 hover:bg-purple-50 hover:text-purple-600 border border-slate-200/50"
                      }`}
                      title={w.has_ai_explain || w.ai_explain ? "查看 AI 构词拆解" : "点击生成 AI 构词拆解"}
                    >
                      <Sparkles size={11} className={w.has_ai_explain || w.ai_explain ? "text-purple-600" : "text-slate-400"} />
                      <span>{w.has_ai_explain || w.ai_explain ? "AI拆解" : "AI解析"}</span>
                    </button>

                    {w.spell_unlocked ? (
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-600">
                        ✍️ 可拼写
                      </span>
                    ) : w.flashcard_done ? (
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-brand-600">
                        🎯 待闯关/听音
                      </span>
                    ) : (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-400">
                        🃏 待闪卡认词
                      </span>
                    )}
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-bold"
                      style={{ background: BOX_COLORS[b] + "33", color: b === 0 ? "#64748b" : "#1e293b" }}
                    >
                      {BOX_LABELS[b]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
          <Button
            size="lg"
            variant="secondary"
            className="flex-1 gap-1.5"
            onClick={() => {
              const u = previewUnit!;
              router.push(`/learn/print?unitId=${u.id}&bookId=${bookId}`);
            }}
          >
            <Printer size={18} />
            <span>生成练习纸</span>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            disabled={batchLoading || batchStatus?.task?.status === "running"}
            onClick={() => {
              if (batchStatus && batchStatus.unexplainedWords === 0) {
                if (confirm("本单元全部单词已生成拆解，是否全部重新生成？")) {
                  handleStartBatchExplain(true);
                }
              } else {
                handleStartBatchExplain(false);
              }
            }}
            className="flex-1 gap-1.5 border-purple-200 bg-purple-50/70 text-purple-700 hover:bg-purple-100 hover:text-purple-800"
          >
            <Sparkles size={18} className="text-purple-600" />
            <span>
              {batchStatus?.task?.status === "running"
                ? `后台解释中 (${batchStatus.task.processed}/${batchStatus.task.total})`
                : batchStatus && batchStatus.unexplainedWords > 0
                  ? `批量AI解释 (${batchStatus.unexplainedWords}词)`
                  : "批量AI解释"}
            </span>
          </Button>
          <Button
            size="lg"
            className="flex-1"
            onClick={() => {
              const u = previewUnit!;
              setPreviewUnit(null);
              setScope({ type: "unit", id: u.id, title: u.name, count: u.word_count });
            }}
          >
            开始背这个单元
          </Button>
        </div>
      </Modal>

      {/* 单词 AI 构词深度拆解弹窗 */}
      <AiExplainModal
        open={!!selectedExplainWord}
        onClose={() => setSelectedExplainWord(null)}
        word={selectedExplainWord}
        onCacheExplain={() => {
          reloadWords();
          if (previewUnit) {
            pollBatchStatus(previewUnit.id);
          }
        }}
      />

      {/* 学习设置弹窗 */}
      <Modal open={settingsOpen} onClose={() => setSettingsOpen(false)} title="⚙️ 学习设置">
        <div className="space-y-6">
          {/* 选择要显示的词库 */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-black text-ink">📚 显示的词库</span>
              <span className="text-xs text-ink-soft">至少保留 1 个</span>
            </div>
            <p className="text-xs text-ink-soft mb-3">
              勾选您当前需要背诵的词库，未勾选的词库将不在背单词主页中显示。
            </p>
            <div className="space-y-2.5">
              {allBooks.map((b) => {
                const isChecked = !visibleBookIds || visibleBookIds.includes(b.id);
                return (
                  <div
                    key={b.id}
                    onClick={() => {
                      const cur = visibleBookIds ?? allBooks.map((x) => x.id);
                      if (isChecked) {
                        if (cur.length <= 1) {
                          toast("至少需要保留一个显示的词库哦", "error");
                          return;
                        }
                        updateVisibleBooks(cur.filter((id) => id !== b.id));
                      } else {
                        updateVisibleBooks([...cur, b.id]);
                      }
                    }}
                    className={`flex items-start gap-3 rounded-2xl border-2 p-3.5 cursor-pointer transition select-none ${
                      isChecked
                        ? "border-brand-400 bg-brand-50/40"
                        : "border-slate-200 bg-slate-50/50 hover:bg-slate-50 opacity-60"
                    }`}
                  >
                    <div
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border-2 transition"
                      style={{
                        borderColor: isChecked ? "#4FA3FF" : "#CBD5E1",
                        backgroundColor: isChecked ? "#4FA3FF" : "transparent",
                      }}
                    >
                      {isChecked && <Check size={14} className="text-white stroke-[3]" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-ink truncate">{b.name}</span>
                        {b.builtin ? (
                          <span className="rounded bg-brand-100 px-1.5 py-0.5 text-[10px] font-extrabold text-brand-600">
                            内置
                          </span>
                        ) : null}
                      </div>
                      <div className="mt-0.5 text-xs text-ink-soft line-clamp-1">
                        {b.description || "暂无描述"}
                      </div>
                      <div className="mt-1 text-[11px] font-semibold text-ink-soft">
                        {b.unit_count ?? 0} 个单元 · {b.word_count ?? 0} 个单词
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 每日学习目标 */}
          {user && (
            <div className="pt-3 border-t border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-black text-ink">🎯 每日学习目标</span>
                <span className="text-xs font-bold text-brand-600">{user.daily_goal} 题 / 天</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[10, 20, 30, 50].map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    onClick={async () => {
                      try {
                        await api("/api/me/settings", { method: "PATCH", body: { dailyGoal: goal } });
                        meQ.reload();
                        toast(`已设定每日目标为 ${goal} 题`, "success");
                      } catch (e) {
                        toast((e as Error).message, "error");
                      }
                    }}
                    className={`rounded-xl py-2 text-xs font-extrabold border-2 transition ${
                      user.daily_goal === goal
                        ? "border-brand-400 bg-brand-50 text-brand-600"
                        : "border-slate-200 bg-white text-ink-soft hover:text-ink"
                    }`}
                  >
                    {goal} 题
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 家长管理后台快捷入口 */}
          {user?.role === "parent" && (
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <Link
                href="/admin/settings"
                className="flex items-center justify-between rounded-2xl bg-brand-50 px-4 py-3 text-sm font-bold text-brand-700 hover:bg-brand-100 transition border border-brand-200"
              >
                <div className="flex items-center gap-2">
                  <span>🎯</span>
                  <span>学习模式与多成员闯关设置</span>
                </div>
                <span className="text-xs text-brand-600 font-semibold">去配置 →</span>
              </Link>
              <Link
                href="/admin"
                className="flex items-center justify-between rounded-2xl bg-slate-100/80 px-4 py-3 text-sm font-bold text-ink hover:bg-slate-200/80 transition"
              >
                <div className="flex items-center gap-2">
                  <span>📚</span>
                  <span>词库与成员管理后台</span>
                </div>
                <span className="text-xs text-ink-soft">进入 →</span>
              </Link>
            </div>
          )}

          <Button variant="primary" size="md" className="w-full" onClick={() => setSettingsOpen(false)}>
            完成
          </Button>
        </div>
      </Modal>
    </div>
  );
}
