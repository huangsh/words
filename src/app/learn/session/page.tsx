"use client";
import { AnimatePresence, motion } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { Check, Delete, HelpCircle, Keyboard, RotateCcw, Sparkles, Star, Volume2, X } from "lucide-react";
import { Button, Empty, Loading, Modal, ProgressBar } from "@/components/ui";
import { AiExplainModal } from "@/components/AiExplainModal";
import { api, useApi } from "@/lib/client";
import { sfx, speak } from "@/lib/speech";

interface QueueWord {
  id: number;
  unit_id: number;
  text: string;
  meaning: string;
  phonetic: string;
  pos: string;
  example: string;
  example_cn: string;
  emoji: string;
  box: number;
  synonyms?: string;
  word_family?: string;
  ai_explain?: string;
}
interface PoolItem {
  id: number;
  text: string;
  meaning: string;
}
interface QueueData {
  words: QueueWord[];
  pool: PoolItem[];
  total: number;
  spellCount?: number;
  scopeTotal?: number;
}

export default function SessionPage() {
  return (
    <Suspense fallback={<Loading text="准备题目中…" />}>
      <SessionInner />
    </Suspense>
  );
}

function SessionInner() {
  const sp = useSearchParams();
  const router = useRouter();
  const type = sp.get("type") || "unit";
  const id = sp.get("id") || "";
  const bookId = sp.get("bookId") || "";
  const mode = (sp.get("mode") || "flashcard") as "flashcard" | "quiz" | "listen" | "cloze" | "spell";
  const limit = sp.get("limit") || "50";
  const title = sp.get("title") || "背单词";

  const queryUrl = `/api/study/queue?type=${type}&id=${id}&bookId=${bookId}&limit=${limit}&mode=${mode}`;
  const { data, loading, reload } = useApi<QueueData>(queryUrl);

  const [queue, setQueue] = useState<(QueueWord & { retry?: boolean })[]>([]);
  const [idx, setIdx] = useState(0);
  const [starsEarned, setStarsEarned] = useState(0);
  const [firstCorrectCount, setFirstCorrectCount] = useState(0);
  const [wrongWords, setWrongWords] = useState<QueueWord[]>([]);
  const [done, setDone] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  useEffect(() => {
    if (data?.words) {
      setQueue(data.words.map((w) => ({ ...w, retry: false })));
      setIdx(0);
      setStarsEarned(0);
      setFirstCorrectCount(0);
      setWrongWords([]);
      setDone(false);
    }
  }, [data]);

  const current = queue[idx];

  const handleResult = useCallback(
    async (correct: boolean) => {
      if (!current) return;
      const isFirst = !current.retry;
      sfx(correct ? "correct" : "wrong");
      if (correct) {
        setStarsEarned((s) => s + 1);
        if (isFirst) setFirstCorrectCount((c) => c + 1);
      } else {
        if (isFirst) setWrongWords((w) => (w.some((x) => x.id === current.id) ? w : [...w, current]));
        // 答错的词塞到队尾再练一次
        setQueue((q) => [...q, { ...current, retry: true }]);
      }
      api("/api/study/answer", {
        body: { wordId: current.id, mode, correct, first: isFirst },
      }).catch(() => {});

      if (idx + 1 >= queue.length && correct) {
        sfx("finish");
        setDone(true);
      } else {
        setIdx((i) => i + 1);
      }
    },
    [current, idx, mode, queue.length],
  );

  if (loading || !data) return <Loading text="正在生成闯关题目…" />;
  if (!data.words.length) {
    if (mode === "quiz" || mode === "listen") {
      const modeName = mode === "quiz" ? "四选一闯关" : "听音选词";
      return (
        <div className="flex min-h-dvh flex-col items-center justify-center p-6 text-center">
          <Empty icon="🔒" title={`${modeName}暂未解锁`}>
            <p className="mt-2 max-w-sm text-sm text-ink-soft">
              需要在单词完成「闪卡认词」认词成功后，才能开启{modeName}哦！
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                onClick={() => {
                  const qs = new URLSearchParams({
                    type,
                    id,
                    bookId,
                    limit,
                    mode: "flashcard",
                    title,
                  });
                  router.replace(`/learn/session?${qs.toString()}`);
                }}
              >
                👉 先去闪卡认词
              </Button>
              <Button variant="secondary" onClick={() => router.push("/learn")}>
                返回首页
              </Button>
            </div>
          </Empty>
        </div>
      );
    }
    if (mode === "spell") {
      return (
        <div className="flex min-h-dvh flex-col items-center justify-center p-6 text-center">
          <Empty icon="🔒" title="拼写挑战暂未解锁">
            <p className="mt-2 max-w-sm text-sm text-ink-soft">
              需要在单词完成「闪卡认词」以及「四选一闯关」或「听音选词」后，才能开启拼写挑战哦！
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                onClick={() => {
                  const qs = new URLSearchParams({
                    type,
                    id,
                    bookId,
                    limit,
                    mode: "quiz",
                    title,
                  });
                  router.replace(`/learn/session?${qs.toString()}`);
                }}
              >
                👉 去四选一闯关
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  const qs = new URLSearchParams({
                    type,
                    id,
                    bookId,
                    limit,
                    mode: "listen",
                    title,
                  });
                  router.replace(`/learn/session?${qs.toString()}`);
                }}
              >
                👉 去听音选词
              </Button>
              <Button variant="secondary" onClick={() => router.push("/learn")}>
                返回首页
              </Button>
            </div>
          </Empty>
        </div>
      );
    }
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center p-6">
        <Empty icon="🎉" title="没有需要练习的单词啦">
          <Button className="mt-4" onClick={() => router.push("/learn")}>
            返回首页
          </Button>
        </Empty>
      </div>
    );
  }

  if (done) {
    return (
      <FinishView
        title={title}
        total={data.words.length}
        firstCorrect={firstCorrectCount}
        stars={starsEarned}
        wrongWords={wrongWords}
        onAgain={() => reload()}
        onHome={() => router.push("/learn")}
      />
    );
  }

  if (!current) return <Loading text="正在生成闯关题目…" />;

  return (
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col px-4 pt-4 pb-6 safe-bottom">
      {/* 顶部进度条 */}
      <div className="mb-4 flex items-center gap-3">
        <button onClick={() => router.push("/learn")} className="rounded-full bg-white p-2.5 text-ink-soft shadow-sm hover:text-ink" aria-label="退出">
          <X size={20} />
        </button>
        <div className="flex-1">
          <ProgressBar value={(idx + 1) / queue.length} color="#3DD68C" className="h-3.5" />
        </div>
        <button
          type="button"
          onClick={() => setShowShortcuts(true)}
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-ink-soft shadow-sm hover:text-brand-600 transition"
          title="查看快捷键指南"
        >
          <Keyboard size={14} className="text-brand-500" />
          <span>快捷键</span>
        </button>
        <div className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-black text-amber-500 shadow-sm">
          <Star size={16} fill="currentColor" /> {starsEarned}
        </div>
        <span className="text-xs font-extrabold text-ink-soft">
          {idx + 1}/{queue.length}
        </span>
      </div>

      {/* 主体区域 */}
      <div className="flex flex-1 flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${idx}-${current.id}-${current.retry ? 1 : 0}`}
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          >
            {mode === "flashcard" && (
              <FlashcardStep
                word={current}
                onAnswer={handleResult}
                onCacheExplain={(wordId, json) =>
                  setQueue((q) => q.map((item) => (item.id === wordId ? { ...item, ai_explain: json } : item)))
                }
              />
            )}
            {mode === "quiz" && <QuizStep word={current} pool={data.pool} listenOnly={false} onAnswer={handleResult} />}
            {mode === "listen" && <QuizStep word={current} pool={data.pool} listenOnly={true} onAnswer={handleResult} />}
            {mode === "cloze" && <ClozeStep word={current} pool={data.pool} onAnswer={handleResult} />}
            {mode === "spell" && <SpellStep word={current} onAnswer={handleResult} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 快捷键帮助弹窗 */}
      <Modal open={showShortcuts} onClose={() => setShowShortcuts(false)} title="⌨️ 全流程键盘快捷键指南">
        <div className="space-y-3.5 text-sm text-ink">
          <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-100">
            <div className="font-bold text-brand-600 mb-2 flex items-center gap-1.5">
              <span>🗂️ 闪卡认词</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-soft">
              <div><kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">空格 Space</kbd> / <kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">Enter</kbd> 翻转卡片</div>
              <div><kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">R</kbd> 朗读单词发音</div>
              <div><kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">1</kbd> 或 <kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">←</kbd> 标记为“还不熟”</div>
              <div><kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">2</kbd> 或 <kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">→</kbd> 标记为“认识啦”</div>
              <div className="sm:col-span-2"><kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">E</kbd> 打开 AI 单词深度拆解（结构 / 词义演进 / 同根词串联）</div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-100">
            <div className="font-bold text-brand-600 mb-2 flex items-center gap-1.5">
              <span>🎯 四选一 / 听音选词 / 语境填空</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-soft">
              <div><kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">A</kbd> <kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">B</kbd> <kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">C</kbd> <kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">D</kbd> 对应字母答题</div>
              <div><kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">1</kbd> <kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">2</kbd> <kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">3</kbd> <kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">4</kbd> 数字键答题</div>
              <div className="sm:col-span-2"><kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">空格 Space</kbd> / <kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">R</kbd> 朗读当前题目发音/例句</div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-100">
            <div className="font-bold text-brand-600 mb-2 flex items-center gap-1.5">
              <span>✍️ 拼写挑战</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-soft">
              <div><kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">A~Z</kbd> 物理键盘直接输入</div>
              <div><kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">Backspace</kbd> 退格删除</div>
              <div><kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">Tab</kbd> 获取下一个字母提示</div>
              <div><kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">空格 Space</kbd> / <kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">R</kbd> 重新朗读发音</div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-100">
            <div className="font-bold text-brand-600 mb-2 flex items-center gap-1.5">
              <span>🏆 通关结算</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-soft">
              <div><kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">Enter</kbd> / <kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">空格</kbd> 再来一轮</div>
              <div><kbd className="px-1.5 py-0.5 font-mono font-bold bg-white text-ink rounded border border-slate-200 shadow-2xs">Esc</kbd> 返回学习首页</div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <Button size="md" className="w-full" onClick={() => setShowShortcuts(false)}>
            我知道了
          </Button>
        </div>
      </Modal>
    </div>
  );
}

/* ────────────────────── 1. 闪卡模式 ────────────────────── */
function FlashcardStep({
  word,
  onAnswer,
  onCacheExplain,
}: {
  word: QueueWord;
  onAnswer: (ok: boolean) => void;
  onCacheExplain: (wordId: number, rawJson: string) => void;
}) {
  const [flipped, setFlipped] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => speak(word.text), 180);
    return () => clearTimeout(t);
  }, [word.text]);

  // 键盘快捷键：空格/Enter翻转卡片，1/左键还不熟，2/右键认识啦，R朗读单词，S朗读例句，E打开AI拆解
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (aiOpen) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.code === "Space" || e.key === "Enter") {
        e.preventDefault();
        sfx("tap");
        setFlipped((f) => !f);
      } else if (e.key === "1" || e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
        e.preventDefault();
        onAnswer(false);
      } else if (e.key === "2" || e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
        e.preventDefault();
        onAnswer(true);
      } else if (e.key.toLowerCase() === "r" || e.key.toLowerCase() === "v") {
        e.preventDefault();
        speak(word.text);
      } else if (e.key.toLowerCase() === "s" && word.example) {
        e.preventDefault();
        speak(word.example);
      } else if (e.key.toLowerCase() === "e") {
        e.preventDefault();
        setAiOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [aiOpen, onAnswer, word.example, word.text]);

  const synData = useMemo<{ words: string[]; note: string } | null>(() => {
    if (!word.synonyms) return null;
    try {
      const parsed = JSON.parse(word.synonyms);
      if (parsed && Array.isArray(parsed.words) && parsed.words.length > 0) {
        return { words: parsed.words, note: parsed.note || "" };
      }
      if (Array.isArray(parsed) && parsed.length > 0) {
        return { words: parsed, note: "" };
      }
    } catch {}
    return null;
  }, [word.synonyms]);

  const famData = useMemo<{ text: string; pos: string; meaning: string }[] | null>(() => {
    if (!word.word_family) return null;
    try {
      const parsed = JSON.parse(word.word_family);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch {}
    return null;
  }, [word.word_family]);

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={() => {
          sfx("tap");
          setFlipped((f) => !f);
        }}
        className="perspective w-full cursor-pointer select-none"
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative min-h-[500px] w-full sm:min-h-[580px] md:min-h-[620px]"
        >
          {/* 正面 */}
          <div className="card-soft backface-hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center sm:p-8">
            {word.emoji && <div className="mb-2 text-5xl sm:text-6xl">{word.emoji}</div>}
            <div className="font-word text-4xl font-black tracking-wide sm:text-5xl">{word.text}</div>
            {word.phonetic && <div className="mt-1.5 text-base sm:text-lg text-ink-soft">{word.phonetic}</div>}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  speak(word.text);
                }}
                className="flex items-center gap-2 rounded-2xl bg-brand-50 px-5 py-2 text-sm font-extrabold text-brand-600 hover:bg-brand-100 transition"
              >
                <Volume2 size={18} /> 点我读一读
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setAiOpen(true);
                }}
                className="flex items-center gap-1.5 rounded-2xl bg-violet-50 px-4 py-2 text-sm font-extrabold text-violet-600 hover:bg-violet-100 transition border border-violet-200/80 shadow-2xs"
                title="AI 深度拆解：结构拆解、词义演进逻辑、同根词串联记忆 (快捷键: E)"
              >
                <Sparkles size={16} /> AI 单词解释
              </button>
            </div>

            {/* 点我读一读下方 显示简单的例句（正面只显示英文，不泄露中文翻译） */}
            {word.example && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  speak(word.example);
                }}
                className="mt-3.5 max-w-sm rounded-2xl bg-slate-50/90 px-4 py-2.5 text-center transition hover:bg-brand-50/80 cursor-pointer border border-slate-100"
                title="点击朗读例句"
              >
                <div className="font-word font-bold text-ink flex items-center justify-center gap-1.5 text-sm sm:text-base">
                  <span>{word.example}</span>
                  <Volume2 size={15} className="text-brand-500 shrink-0" />
                </div>
              </div>
            )}

            <div className="mt-4 text-xs font-semibold text-ink-soft">
              👆 点击卡片翻转看中文与提分拓展 <span className="hidden sm:inline font-mono opacity-75 font-normal">(按空格 Space 翻转)</span>
            </div>
          </div>

          {/* 背面 */}
          <div
            style={{ transform: "rotateY(180deg)" }}
            className="card-soft backface-hidden absolute inset-0 flex flex-col items-center justify-start overflow-y-auto p-5 text-center sm:p-6"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setAiOpen(true);
              }}
              className="absolute top-4 right-4 flex items-center gap-1 rounded-xl bg-violet-50 px-3 py-1.5 text-xs font-extrabold text-violet-600 hover:bg-violet-100 transition border border-violet-200/80 shadow-2xs"
              title="AI 深度拆解：结构拆解、词义演进逻辑、同根词串联记忆 (快捷键: E)"
            >
              <Sparkles size={14} /> AI 单词解释
            </button>

            {word.emoji && <div className="mb-1 text-4xl sm:text-5xl">{word.emoji}</div>}
            <div className="font-word text-2xl sm:text-3xl font-black text-brand-600">{word.text}</div>
            <div className="mt-1 text-xl sm:text-2xl font-extrabold">
              {word.pos && <span className="mr-1.5 text-base text-ink-soft italic font-serif">{word.pos}</span>}
              {word.meaning}
            </div>

            {word.example && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  speak(word.example);
                }}
                className="mt-3 w-full max-w-md rounded-2xl bg-slate-50/90 px-4 py-2 text-center transition hover:bg-brand-50/80 cursor-pointer border border-slate-100"
                title="点击朗读例句"
              >
                <div className="font-word font-bold text-ink flex items-center justify-center gap-1.5 text-sm sm:text-base">
                  <span>{word.example}</span>
                  <Volume2 size={14} className="text-brand-500 shrink-0" />
                </div>
                {word.example_cn && <div className="mt-0.5 text-xs text-ink-soft">{word.example_cn}</div>}
              </div>
            )}

            {/* 🔁 同义替换 (Lexical Resource 核心) */}
            {synData && (
              <div className="mt-3 w-full max-w-md rounded-2xl bg-amber-50/80 p-3 text-left border border-amber-200/70 shadow-2xs">
                <div className="flex items-center justify-between text-xs font-bold text-amber-900">
                  <span className="flex items-center gap-1">🔁 同义替换 (写作提分)</span>
                  <span className="text-[11px] font-normal text-amber-700/80">点击单词发音</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {synData.words.map((syn) => (
                    <button
                      key={syn}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speak(syn);
                      }}
                      className="inline-flex items-center gap-1 rounded-xl bg-white px-2.5 py-1 text-xs font-bold text-slate-800 shadow-2xs hover:bg-amber-100 hover:text-amber-950 transition border border-amber-200/60"
                      title="点击朗读同义词"
                    >
                      <span className="font-word">{syn}</span>
                      <Volume2 size={11} className="text-amber-600 opacity-80" />
                    </button>
                  ))}
                </div>
                {synData.note && (
                  <div className="mt-2 text-xs font-medium text-amber-950/90 leading-relaxed bg-amber-100/60 rounded-xl px-2.5 py-1.5 border border-amber-200/50">
                    💡 <span className="font-semibold text-amber-900">辨析提示：</span>{synData.note}
                  </div>
                )}
              </div>
            )}

            {/* 🌳 词族派生 (Word Family) */}
            {famData && famData.length > 0 && (
              <div className="mt-2.5 w-full max-w-md rounded-2xl bg-emerald-50/80 p-3 text-left border border-emerald-200/70 shadow-2xs">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                  <span className="flex items-center gap-1">🌳 词族派生 (拓展记忆)</span>
                  <span className="text-[11px] font-normal text-emerald-700/80">点击发音</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {famData.map((f, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speak(f.text);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white px-2.5 py-1 text-xs font-bold text-slate-800 shadow-2xs hover:bg-emerald-100 hover:text-emerald-950 transition border border-emerald-200/60"
                      title="点击朗读派生词"
                    >
                      <span className="font-word">{f.text}</span>
                      {f.pos && <span className="text-[10px] text-emerald-700 italic font-serif">{f.pos}</span>}
                      {f.meaning && <span className="text-[11px] font-medium text-slate-600">{f.meaning}</span>}
                      <Volume2 size={11} className="text-emerald-600 opacity-80" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="mt-6 grid w-full grid-cols-2 gap-4">
        <Button variant="danger" size="xl" onClick={() => onAnswer(false)}>
          🤔 还不熟
        </Button>
        <Button variant="success" size="xl" onClick={() => onAnswer(true)}>
          😄 认识啦
        </Button>
      </div>

      {/* AI 单词深度拆解弹窗 */}
      <AiExplainModal
        open={aiOpen}
        onClose={() => setAiOpen(false)}
        word={word}
        onCacheExplain={onCacheExplain}
      />
    </div>
  );
}

/* ────────────────────── 2 & 3. 四选一 / 听音选词 ────────────────────── */
function QuizStep({
  word,
  pool,
  listenOnly,
  onAnswer,
}: {
  word: QueueWord;
  pool: PoolItem[];
  listenOnly: boolean;
  onAnswer: (ok: boolean) => void;
}) {
  // 随机决定是「看英选中」还是「看中选英」（听音模式固定选中文+英文）
  const enToZh = useMemo(() => (listenOnly ? true : Math.random() > 0.35), [listenOnly]);
  const options = useMemo(() => {
    const others = pool.filter((p) => p.id !== word.id && p.meaning && p.meaning !== word.meaning);
    const picked: PoolItem[] = [];
    const copy = [...others];
    while (picked.length < 3 && copy.length) {
      const idx = Math.floor(Math.random() * copy.length);
      picked.push(copy.splice(idx, 1)[0]);
    }
    const all = [{ id: word.id, text: word.text, meaning: word.meaning }, ...picked];
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }
    return all;
  }, [pool, word]);

  const [pickedId, setPickedId] = useState<number | null>(null);

  useEffect(() => {
    if (listenOnly || enToZh) {
      const t = setTimeout(() => speak(word.text), 150);
      return () => clearTimeout(t);
    }
  }, [listenOnly, enToZh, word.text]);

  function choose(opt: PoolItem) {
    if (pickedId !== null) return;
    setPickedId(opt.id);
    const ok = opt.id === word.id;
    speak(word.text);
    setTimeout(() => onAnswer(ok), ok ? 650 : 1400);
  }

  // 键盘快捷键：A/B/C/D 或 1/2/3/4 选择对应选项，空格/R 重新发音
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (pickedId !== null) return;

      const k = e.key.toLowerCase();
      let index = -1;
      if (k === "a" || k === "1") index = 0;
      else if (k === "b" || k === "2") index = 1;
      else if (k === "c" || k === "3") index = 2;
      else if (k === "d" || k === "4") index = 3;

      if (index >= 0 && index < options.length) {
        e.preventDefault();
        choose(options[index]);
      } else if (e.code === "Space" || k === "r" || k === "v") {
        e.preventDefault();
        speak(word.text);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [options, pickedId, word.text]);

  return (
    <div className="space-y-6">
      <div className="card-soft flex flex-col items-center justify-center p-8 text-center">
        {listenOnly ? (
          <>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => speak(word.text)}
              className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-400 text-white shadow-lg"
              title="点击或按空格/R朗读"
            >
              <Volume2 size={44} />
            </motion.button>
            <div className="mt-3 text-sm font-bold text-ink-soft">
              点击喇叭再听一遍，选出正确的意思 <span className="hidden sm:inline font-mono opacity-75 font-normal">(按空格/R发音)</span>
            </div>
            {pickedId !== null && (
              <div className="mt-2 text-2xl font-black text-brand-600">
                {word.emoji ? `${word.emoji} ` : ""}{word.meaning}
              </div>
            )}
          </>
        ) : enToZh ? (
          <>
            {word.emoji && <div className="mb-2 text-5xl">{word.emoji}</div>}
            <div className="flex items-center gap-2">
              <span className="font-word text-4xl font-black sm:text-5xl">{word.text}</span>
              <button onClick={() => speak(word.text)} className="rounded-full bg-brand-50 p-2.5 text-brand-500" title="点击或按空格/R朗读">
                <Volume2 size={22} />
              </button>
            </div>
            {word.phonetic && <div className="mt-1 text-sm text-ink-soft">{word.phonetic}</div>}
          </>
        ) : (
          <>
            {word.emoji && <div className="mb-2 text-5xl">{word.emoji}</div>}
            <div className="text-3xl font-black">{word.meaning}</div>
            <div className="mt-1 text-xs text-ink-soft">选出对应的英文单词</div>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {options.map((opt, i) => {
          const isTarget = opt.id === word.id;
          const isPicked = pickedId === opt.id;
          let cls = "bg-white text-ink border-2 border-slate-200";
          let shadow = "#e2e8f0";
          if (pickedId !== null) {
            if (isTarget) {
              cls = "bg-mint-500 text-white border-2 border-mint-500";
              shadow = "#24b872";
            } else if (isPicked) {
              cls = "bg-coral-500 text-white border-2 border-coral-500";
              shadow = "#e85151";
            }
          }
          const letters = ["A", "B", "C", "D"];
          return (
            <motion.button
              key={opt.id}
              whileTap={pickedId === null ? { scale: 0.97 } : undefined}
              animate={isPicked && !isTarget ? { x: [0, -10, 10, -6, 6, 0] } : {}}
              onClick={() => choose(opt)}
              className={`btn-3d flex min-h-16 items-center justify-between rounded-2xl px-5 py-4 text-left text-lg font-extrabold ${cls}`}
              style={{ ["--shadow-color" as string]: shadow }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black ${
                    pickedId !== null && (isTarget || isPicked)
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-ink-soft"
                  }`}
                >
                  {letters[i]}
                </span>
                <span className={listenOnly || enToZh ? "" : "font-word text-xl font-bold"}>
                  {listenOnly || enToZh ? opt.meaning : opt.text}
                </span>
              </div>
              {pickedId !== null && isTarget && <Check size={22} />}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/* ────────────────────── 3.5 例句挖空填词（Cloze Test） ────────────────────── */
function splitSentence(example: string, text: string): { before: string; match: string; after: string } {
  if (!example) {
    return { before: "Fill in the blank: ", match: text, after: "." };
  }
  const esc = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(^|\\s|[.,!?;:"'()])(${esc})([.,!?;:"'()]|\\s|$)`, "i");
  const m = example.match(regex);
  if (m && m.index !== undefined) {
    const matchStart = m.index + m[1].length;
    const matchEnd = matchStart + m[2].length;
    return {
      before: example.slice(0, matchStart),
      match: example.slice(matchStart, matchEnd),
      after: example.slice(matchEnd),
    };
  }
  const subIdx = example.toLowerCase().indexOf(text.toLowerCase());
  if (subIdx !== -1) {
    return {
      before: example.slice(0, subIdx),
      match: example.slice(subIdx, subIdx + text.length),
      after: example.slice(subIdx + text.length),
    };
  }
  return {
    before: example + " ( ",
    match: text,
    after: " )",
  };
}

function ClozeStep({
  word,
  pool,
  onAnswer,
}: {
  word: QueueWord;
  pool: PoolItem[];
  onAnswer: (ok: boolean) => void;
}) {
  const parts = useMemo(() => splitSentence(word.example, word.text), [word.example, word.text]);

  const options = useMemo(() => {
    const others = pool.filter((p) => p.id !== word.id && p.text.toLowerCase() !== word.text.toLowerCase());
    const picked: PoolItem[] = [];
    const copy = [...others];
    while (picked.length < 3 && copy.length) {
      const idx = Math.floor(Math.random() * copy.length);
      picked.push(copy.splice(idx, 1)[0]);
    }
    const all = [{ id: word.id, text: word.text, meaning: word.meaning }, ...picked];
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }
    return all;
  }, [pool, word]);

  const [pickedId, setPickedId] = useState<number | null>(null);

  const pickedOption = options.find((o) => o.id === pickedId);
  const isCorrect = pickedId === word.id;

  function choose(opt: PoolItem) {
    if (pickedId !== null) return;
    setPickedId(opt.id);
    const ok = opt.id === word.id;
    if (ok) {
      speak(word.example || word.text);
      setTimeout(() => onAnswer(true), 900);
    } else {
      speak(word.text);
      setTimeout(() => onAnswer(false), 1400);
    }
  }

  // 键盘快捷键：A/B/C/D 或 1/2/3/4 选择对应选项，空格/R 朗读例句
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (pickedId !== null) return;

      const k = e.key.toLowerCase();
      let index = -1;
      if (k === "a" || k === "1") index = 0;
      else if (k === "b" || k === "2") index = 1;
      else if (k === "c" || k === "3") index = 2;
      else if (k === "d" || k === "4") index = 3;

      if (index >= 0 && index < options.length) {
        e.preventDefault();
        choose(options[index]);
      } else if (e.code === "Space" || k === "r" || k === "v") {
        e.preventDefault();
        speak(word.example || word.text);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [options, pickedId, word.example, word.text]);

  return (
    <div className="space-y-6">
      <div className="card-soft flex flex-col items-center justify-center p-6 text-center sm:p-8">
        <div className="flex items-center gap-2 mb-3">
          <button
            type="button"
            onClick={() => speak(word.example || word.text)}
            className="rounded-full bg-brand-50 p-2 text-brand-600 hover:bg-brand-100 transition shadow-2xs"
            title="点击朗读例句 (按空格/R)"
          >
            <Volume2 size={20} />
          </button>
          <span className="text-xs font-bold text-ink-soft">
            点击喇叭听例句，根据语境选词填空 <span className="hidden sm:inline font-mono opacity-75 font-normal">(按空格/R朗读)</span>
          </span>
        </div>

        {/* 挖空句子主体 */}
        <div className="font-word text-xl sm:text-2xl font-bold leading-relaxed text-ink text-center max-w-xl">
          <span>{parts.before}</span>
          <span
            className={`inline-flex items-center justify-center min-w-[100px] mx-1.5 px-3 py-0.5 rounded-xl text-lg sm:text-xl font-black border-2 transition-all ${
              pickedId === null
                ? "border-dashed border-amber-400 bg-amber-50/80 text-amber-600"
                : isCorrect
                ? "border-mint-500 bg-mint-50 text-mint-600 shadow-2xs"
                : "border-coral-500 bg-coral-50 text-coral-600 shadow-2xs"
            }`}
          >
            {pickedId !== null ? (
              <span>{pickedOption?.text || word.text}</span>
            ) : (
              <span className="tracking-widest opacity-80 font-normal">______</span>
            )}
          </span>
          <span>{parts.after}</span>
        </div>

        {/* 例句中文释义 */}
        {word.example_cn && (
          <div className="mt-3 text-sm text-ink-soft leading-normal max-w-lg">
            “{word.example_cn}”
          </div>
        )}

        {/* 词义提示 */}
        <div className="mt-4 flex items-center gap-1.5 rounded-full bg-amber-50/90 px-3.5 py-1 text-xs font-bold text-amber-900 border border-amber-200/60 shadow-2xs">
          <span>🎯 填空目标词义：</span>
          {word.pos && <span className="font-serif italic text-amber-700">{word.pos}</span>}
          <span className="text-ink font-extrabold">{word.meaning}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {options.map((opt, i) => {
          const isTarget = opt.id === word.id;
          const isPicked = pickedId === opt.id;
          let cls = "bg-white text-ink border-2 border-slate-200";
          let shadow = "#e2e8f0";
          if (pickedId !== null) {
            if (isTarget) {
              cls = "bg-mint-500 text-white border-2 border-mint-500";
              shadow = "#24b872";
            } else if (isPicked) {
              cls = "bg-coral-500 text-white border-2 border-coral-500";
              shadow = "#e85151";
            }
          }
          const letters = ["A", "B", "C", "D"];
          return (
            <motion.button
              key={opt.id}
              whileTap={pickedId === null ? { scale: 0.97 } : undefined}
              animate={isPicked && !isTarget ? { x: [0, -10, 10, -6, 6, 0] } : {}}
              onClick={() => choose(opt)}
              className={`btn-3d flex min-h-16 items-center justify-between rounded-2xl px-5 py-4 text-left font-extrabold ${cls}`}
              style={{ ["--shadow-color" as string]: shadow }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black ${
                    pickedId !== null && (isTarget || isPicked)
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-ink-soft"
                  }`}
                >
                  {letters[i]}
                </span>
                <span className="font-word text-xl font-bold">{opt.text}</span>
              </div>
              {pickedId !== null && isTarget && <Check size={22} />}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/* ────────────────────── 4. 拼写挑战（全键盘 26 字母输入 + 支持物理键盘） ────────────────────── */
const KEYBOARD_ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

function SpellStep({ word, onAnswer }: { word: QueueWord; onAnswer: (ok: boolean) => void }) {
  // 只对英文字母挖空，空格和标点固定保留
  const chars = useMemo(() => word.text.split(""), [word.text]);
  const letterIndices = useMemo(() => chars.map((c, i) => (/[A-Za-z]/.test(c) ? i : -1)).filter((i) => i >= 0), [chars]);

  const [input, setInput] = useState<string[]>([]);
  const [status, setStatus] = useState<"typing" | "correct" | "wrong">("typing");
  const [uppercase, setUppercase] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => speak(word.text), 180);
    return () => clearTimeout(t);
  }, [word.text]);

  const checkResult = useCallback(
    (nextInput: string[]) => {
      if (nextInput.length < letterIndices.length) return;
      const attempt = nextInput.join("");
      const target = letterIndices.map((i) => chars[i]).join("");
      const ok = attempt.toLowerCase() === target.toLowerCase();
      setStatus(ok ? "correct" : "wrong");
      speak(word.text);
      setTimeout(() => onAnswer(ok), ok ? 750 : 1600);
    },
    [chars, letterIndices, onAnswer, word.text],
  );

  const tapChar = useCallback(
    (ch: string) => {
      if (status !== "typing" || input.length >= letterIndices.length) return;
      sfx("tap");
      const next = [...input, ch];
      setInput(next);
      checkResult(next);
    },
    [checkResult, input, letterIndices.length, status],
  );

  const backspace = useCallback(() => {
    if (status !== "typing" || !input.length) return;
    setInput((p) => p.slice(0, -1));
  }, [input.length, status]);

  const hint = useCallback(() => {
    if (status !== "typing" || input.length >= letterIndices.length) return;
    const nextTargetChar = chars[letterIndices[input.length]];
    tapChar(nextTargetChar.toLowerCase());
  }, [chars, input.length, letterIndices, status, tapChar]);

  // 支持外接键盘直接输入：字母键输入、Backspace 删除、Tab 提示、空格朗读
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (status !== "typing") return;

      if (e.key === "Backspace") {
        e.preventDefault();
        backspace();
      } else if (e.key === "Tab") {
        e.preventDefault();
        hint();
      } else if (e.code === "Space") {
        e.preventDefault();
        speak(word.text);
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        if (input.length < letterIndices.length) {
          tapChar(e.key.toLowerCase());
        }
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [backspace, hint, input.length, letterIndices.length, status, tapChar, word.text]);

  return (
    <div className="space-y-5">
      <div className="card-soft flex flex-col items-center p-7 text-center">
        {word.emoji && <div className="mb-2 text-5xl">{word.emoji}</div>}
        <div className="flex items-center gap-2 text-2xl font-extrabold">
          <span>{word.meaning}</span>
          <button onClick={() => speak(word.text)} className="rounded-full bg-brand-50 p-2 text-brand-500">
            <Volume2 size={20} />
          </button>
        </div>

        {/* 拼写槽位 */}
        <motion.div
          animate={status === "wrong" ? { x: [0, -10, 10, -8, 8, 0] } : {}}
          className="mt-6 flex flex-wrap items-center justify-center gap-1.5"
        >
          {chars.map((ch, idx) => {
            const slotPos = letterIndices.indexOf(idx);
            if (slotPos === -1) {
              return (
                <span key={idx} className="font-word px-1 text-2xl font-black text-ink-soft">
                  {ch}
                </span>
              );
            }
            const filled = input[slotPos] || "";
            const isCurrentSlot = status === "typing" && slotPos === input.length;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (status === "typing" && slotPos < input.length) {
                    setInput((prev) => prev.slice(0, slotPos));
                  }
                }}
                className={`font-word flex h-12 w-10 items-center justify-center rounded-xl border-b-4 text-2xl font-black transition sm:h-14 sm:w-12 ${
                  status === "correct"
                    ? "border-mint-600 bg-mint-500 text-white"
                    : status === "wrong"
                      ? "border-coral-600 bg-coral-500 text-white"
                      : filled
                        ? "border-brand-500 bg-brand-50 text-brand-600"
                        : isCurrentSlot
                          ? "border-brand-300 bg-brand-50/50 ring-2 ring-brand-300 ring-offset-1"
                          : "border-slate-300 bg-slate-100"
                }`}
              >
                {status === "correct" ? chars[idx] : filled}
              </button>
            );
          })}
        </motion.div>

        {status === "wrong" && (
          <div className="font-word mt-4 text-xl font-black text-coral-600">正确拼写：{word.text}</div>
        )}
      </div>

      {/* 26 键键盘区域 */}
      <div className="mx-auto w-full max-w-lg space-y-1.5 px-1 select-none">
        {/* 第一行 Q-P (10 键) */}
        <div className="flex justify-center gap-1 sm:gap-1.5">
          {KEYBOARD_ROWS[0].map((ch) => (
            <motion.button
              key={ch}
              type="button"
              whileTap={{ scale: 0.92 }}
              disabled={status !== "typing" || input.length >= letterIndices.length}
              onClick={() => tapChar(ch)}
              className="btn-3d font-word flex h-11 sm:h-13 flex-1 max-w-11 sm:max-w-12 items-center justify-center rounded-xl sm:rounded-2xl border-2 border-slate-200 bg-white text-lg sm:text-2xl font-black text-ink active:translate-y-0.5 disabled:opacity-50"
              style={{ ["--shadow-color" as string]: "#cbd5e1" }}
            >
              {uppercase ? ch.toUpperCase() : ch}
            </motion.button>
          ))}
        </div>

        {/* 第二行 A-L (9 键，居中对齐) */}
        <div className="flex justify-center gap-1 sm:gap-1.5 px-3 sm:px-4">
          {KEYBOARD_ROWS[1].map((ch) => (
            <motion.button
              key={ch}
              type="button"
              whileTap={{ scale: 0.92 }}
              disabled={status !== "typing" || input.length >= letterIndices.length}
              onClick={() => tapChar(ch)}
              className="btn-3d font-word flex h-11 sm:h-13 flex-1 max-w-11 sm:max-w-12 items-center justify-center rounded-xl sm:rounded-2xl border-2 border-slate-200 bg-white text-lg sm:text-2xl font-black text-ink active:translate-y-0.5 disabled:opacity-50"
              style={{ ["--shadow-color" as string]: "#cbd5e1" }}
            >
              {uppercase ? ch.toUpperCase() : ch}
            </motion.button>
          ))}
        </div>

        {/* 第三行 提示 + Z-M (7 键) + 退格 */}
        <div className="flex justify-center gap-1 sm:gap-1.5">
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            disabled={status !== "typing" || input.length >= letterIndices.length}
            onClick={hint}
            className="btn-3d flex h-11 sm:h-13 flex-[1.4] max-w-16 sm:max-w-20 items-center justify-center gap-1 rounded-xl sm:rounded-2xl border-2 border-amber-200 bg-amber-50 text-xs sm:text-sm font-black text-amber-700 active:translate-y-0.5 disabled:opacity-40"
            style={{ ["--shadow-color" as string]: "#fde68a" }}
            title="提示一个字母 (快捷键: Tab)"
          >
            <HelpCircle size={16} />
            <span>提示</span>
            <kbd className="hidden sm:inline-block rounded bg-amber-200/70 px-1 py-0.2 text-[9px] font-mono font-bold">Tab</kbd>
          </motion.button>

          {KEYBOARD_ROWS[2].map((ch) => (
            <motion.button
              key={ch}
              type="button"
              whileTap={{ scale: 0.92 }}
              disabled={status !== "typing" || input.length >= letterIndices.length}
              onClick={() => tapChar(ch)}
              className="btn-3d font-word flex h-11 sm:h-13 flex-1 max-w-11 sm:max-w-12 items-center justify-center rounded-xl sm:rounded-2xl border-2 border-slate-200 bg-white text-lg sm:text-2xl font-black text-ink active:translate-y-0.5 disabled:opacity-50"
              style={{ ["--shadow-color" as string]: "#cbd5e1" }}
            >
              {uppercase ? ch.toUpperCase() : ch}
            </motion.button>
          ))}

          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            disabled={status !== "typing" || !input.length}
            onClick={backspace}
            className="btn-3d flex h-11 sm:h-13 flex-[1.4] max-w-16 sm:max-w-20 items-center justify-center gap-1 rounded-xl sm:rounded-2xl border-2 border-slate-200 bg-slate-100 text-xs sm:text-sm font-black text-ink-soft active:translate-y-0.5 disabled:opacity-40"
            style={{ ["--shadow-color" as string]: "#cbd5e1" }}
            title="退格删除"
          >
            <Delete size={18} />
            <span>退格</span>
          </motion.button>
        </div>

        {/* 底部辅助栏 */}
        <div className="flex items-center justify-between px-2 pt-1 text-xs text-ink-soft">
          <button
            type="button"
            onClick={() => setUppercase((v) => !v)}
            className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 font-bold text-ink shadow-sm hover:bg-slate-50 transition"
          >
            <span>键盘大小写：</span>
            <span className="font-word text-brand-600 font-black">{uppercase ? "大写 (A-Z)" : "小写 (a-z)"}</span>
          </button>
          <span className="text-[11px] sm:text-xs">支持直接使用电脑键盘输入</span>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────── 结算庆祝界面 ────────────────────── */
function FinishView({
  title,
  total,
  firstCorrect,
  stars,
  wrongWords,
  onAgain,
  onHome,
}: {
  title: string;
  total: number;
  firstCorrect: number;
  stars: number;
  wrongWords: QueueWord[];
  onAgain: () => void;
  onHome: () => void;
}) {
  const acc = total ? Math.round((firstCorrect / total) * 100) : 100;

  // 结算页快捷键：Enter/空格 再来一轮，Esc 返回首页
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.code === "Space") {
        e.preventDefault();
        onAgain();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onHome();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onAgain, onHome]);

  return (
    <div className="relative mx-auto flex min-h-dvh max-w-lg flex-col items-center justify-center overflow-hidden px-6 py-10 text-center">
      {/* 彩带粒子 */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ y: -40, x: `${(i * 37) % 100}vw`, rotate: 0, opacity: 1 }}
            animate={{ y: "105vh", rotate: 360 * (i % 2 ? 1 : -1), opacity: 0.8 }}
            transition={{ duration: 2.4 + (i % 5) * 0.4, ease: "easeOut", delay: (i % 6) * 0.08 }}
            className="absolute text-2xl"
          >
            {["⭐", "🎉", "✨", "🌟", "🎈"][i % 5]}
          </motion.span>
        ))}
      </div>

      <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="card-soft w-full p-8">
        <div className="text-6xl">{acc >= 90 ? "🏆" : acc >= 70 ? "🎉" : "💪"}</div>
        <h1 className="mt-3 text-2xl font-black">闯关完成！</h1>
        <p className="mt-1 text-sm text-ink-soft">{title}</p>

        <div className="my-6 grid grid-cols-3 gap-3 rounded-2xl bg-slate-50 p-4">
          <div>
            <div className="text-2xl font-black text-brand-500">{total}</div>
            <div className="text-xs text-ink-soft">本次单词</div>
          </div>
          <div>
            <div className="text-2xl font-black text-mint-600">{acc}%</div>
            <div className="text-xs text-ink-soft">一次正确率</div>
          </div>
          <div>
            <div className="text-2xl font-black text-amber-500">+{stars} ⭐</div>
            <div className="text-xs text-ink-soft">获得星星</div>
          </div>
        </div>

        {wrongWords.length > 0 && (
          <div className="mb-6 text-left">
            <div className="mb-2 text-xs font-extrabold text-ink-soft">本轮重点巩固的单词：</div>
            <div className="max-h-40 space-y-1.5 overflow-y-auto rounded-2xl bg-amber-50/70 p-3">
              {wrongWords.map((w) => (
                <div key={w.id} className="flex items-center justify-between text-sm">
                  <span className="font-word font-bold">
                    {w.emoji} {w.text}
                  </span>
                  <span className="text-ink-soft">{w.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <Button variant="secondary" size="lg" className="flex-1" onClick={onAgain}>
            <span className="flex items-center justify-center gap-1.5">
              <RotateCcw size={18} />
              <span>再来一轮</span>
              <kbd className="hidden sm:inline-block rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-mono font-bold">Enter</kbd>
            </span>
          </Button>
          <Button size="lg" className="flex-1" onClick={onHome}>
            <span className="flex items-center justify-center gap-1.5">
              <Sparkles size={18} />
              <span>返回首页</span>
              <kbd className="hidden sm:inline-block rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-mono font-bold">Esc</kbd>
            </span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
