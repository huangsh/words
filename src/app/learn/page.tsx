"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Flame, Headphones, Layers, ListChecks, LogOut, RotateCcw, Settings, Sparkles, SpellCheck, Star, Volume2 } from "lucide-react";
import { Button, Empty, Loading, Modal, ProgressBar } from "@/components/ui";
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
  emoji: string;
  box: number;
  spell_unlocked?: boolean;
}

const MODES = [
  { key: "flashcard", title: "闪卡认词", desc: "翻卡片 + 跟读发音", icon: Layers, color: "bg-brand-400", shadow: "#1b6be0" },
  { key: "quiz", title: "四选一闯关", desc: "中英互选，快速反应", icon: ListChecks, color: "bg-mint-500", shadow: "#24b872" },
  { key: "listen", title: "听音选词", desc: "磨耳朵，听发音选意思", icon: Headphones, color: "bg-sun-500 text-ink", shadow: "#f5a623" },
  { key: "spell", title: "拼写挑战", desc: "点字母块拼出单词", icon: SpellCheck, color: "bg-grape-500", shadow: "#7c3aed" },
];

export default function LearnHomePage() {
  const router = useRouter();
  const toast = useToast();
  const meQ = useApi<MeData>("/api/me");
  const booksQ = useApi<{ books: Book[] }>("/api/books");
  const tagsQ = useApi<{ tags: Tag[] }>("/api/tags");

  const [bookId, setBookId] = useState<number>(0);
  const [gradeKey, setGradeKey] = useState<string>("");
  const [scope, setScope] = useState<{ type: string; id?: number; title: string; count: number } | null>(null);
  const [previewUnit, setPreviewUnit] = useState<Unit | null>(null);
  const unitWordsQ = useApi<{ words: WordItem[] }>(previewUnit ? `/api/words?unitId=${previewUnit.id}` : null);

  const spellInfoQ = useApi<{ total: number; spellCount: number; scopeTotal: number }>(
    scope ? `/api/study/queue?type=${scope.type}&id=${scope.id ?? ""}&bookId=${bookId ?? ""}&limit=1&mode=spell` : null,
  );
  const unlockedSpellCount = spellInfoQ.data?.total ?? 0;

  useEffect(() => {
    if (!bookId && booksQ.data?.books.length) setBookId(booksQ.data.books[0].id);
  }, [booksQ.data, bookId]);

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
    if (gradeGroups.length && (!gradeKey || !gradeGroups.some(([k]) => k === gradeKey))) {
      setGradeKey(gradeGroups[0][0]);
    }
  }, [gradeGroups, gradeKey]);

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
            <Link href="/admin" className="rounded-2xl bg-white p-2.5 text-ink-soft shadow-sm hover:text-ink" title="返回管理端">
              <Settings size={18} />
            </Link>
          )}
          <button onClick={logout} className="rounded-2xl bg-white p-2.5 text-ink-soft shadow-sm hover:text-ink" title="切换账号">
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

      {/* 词库 & 年级选择 */}
      {booksQ.data && booksQ.data.books.length > 1 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {booksQ.data.books.map((b) => (
            <button
              key={b.id}
              onClick={() => setBookId(b.id)}
              className={`rounded-2xl px-4 py-2 text-sm font-extrabold transition ${bookId === b.id ? "bg-ink text-white" : "bg-white text-ink-soft"}`}
            >
              📚 {b.name}
            </button>
          ))}
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

                  <div className="mt-5 flex gap-2">
                    <Button variant="secondary" size="sm" onClick={() => setPreviewUnit(u)} className="px-3">
                      词表
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
        <p className="mb-4 text-sm text-ink-soft">共 {scope?.count} 个单词，选一种喜欢的方式开始吧：</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {MODES.map((m) => {
            const Icon = m.icon;
            const isSpell = m.key === "spell";
            const isLocked = isSpell && !spellInfoQ.loading && spellInfoQ.data !== undefined && unlockedSpellCount === 0;

            const handleClick = () => {
              if (isLocked) {
                toast("拼写挑战需要先完成闪卡认词、四选一或听音选词中任意一项，先去认词吧！", "info");
                return;
              }
              const targetCount = isSpell ? unlockedSpellCount : (scope?.count || 20);
              startMode(m.key, targetCount);
            };

            let desc = m.desc;
            if (isSpell) {
              if (spellInfoQ.loading) {
                desc = "正在检查已认词进度…";
              } else if (unlockedSpellCount === 0) {
                desc = "🔒 需先完成认词后解锁";
              } else {
                desc = `已解锁 ${unlockedSpellCount} 词可拼写`;
              }
            }

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
                  <div className="truncate text-xs opacity-90">{desc}</div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </Modal>

      {/* 单元词表预览弹窗 */}
      <Modal open={!!previewUnit} onClose={() => setPreviewUnit(null)} title={previewUnit?.name} wide>
        {unitWordsQ.loading ? (
          <Loading />
        ) : (
          <div className="max-h-[60dvh] divide-y divide-slate-100 overflow-y-auto">
            {unitWordsQ.data?.words.map((w) => {
              const b = Math.max(0, w.box);
              return (
                <div key={w.id} className="flex items-center gap-3 py-3">
                  <button onClick={() => speak(w.text)} className="rounded-full bg-brand-50 p-2.5 text-brand-500 hover:bg-brand-100">
                    <Volume2 size={18} />
                  </button>
                  <span className="w-8 text-center text-2xl">{w.emoji}</span>
                  <div className="flex-1">
                    <span className="font-word text-lg font-bold">{w.text}</span>
                    {w.phonetic && <span className="ml-2 text-sm text-ink-soft">{w.phonetic}</span>}
                    <div className="text-sm text-ink-soft">{w.meaning}</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {w.spell_unlocked ? (
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-600">
                        ✍️ 可拼写
                      </span>
                    ) : (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-400">
                        🔒 需先认词
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
        <div className="mt-4">
          <Button
            size="lg"
            className="w-full"
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
    </div>
  );
}
