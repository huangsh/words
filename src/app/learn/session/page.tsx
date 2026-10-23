"use client";
import { AnimatePresence, motion } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { Check, Delete, HelpCircle, RotateCcw, Sparkles, Star, Volume2, X } from "lucide-react";
import { Button, Empty, Loading, ProgressBar } from "@/components/ui";
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
  const mode = (sp.get("mode") || "flashcard") as "flashcard" | "quiz" | "listen" | "spell";
  const limit = sp.get("limit") || "12";
  const title = sp.get("title") || "背单词";

  const queryUrl = `/api/study/queue?type=${type}&id=${id}&bookId=${bookId}&limit=${limit}`;
  const { data, loading, reload } = useApi<QueueData>(queryUrl);

  const [queue, setQueue] = useState<(QueueWord & { retry?: boolean })[]>([]);
  const [idx, setIdx] = useState(0);
  const [starsEarned, setStarsEarned] = useState(0);
  const [firstCorrectCount, setFirstCorrectCount] = useState(0);
  const [wrongWords, setWrongWords] = useState<QueueWord[]>([]);
  const [done, setDone] = useState(false);

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
            {mode === "flashcard" && <FlashcardStep word={current} onAnswer={handleResult} />}
            {mode === "quiz" && <QuizStep word={current} pool={data.pool} listenOnly={false} onAnswer={handleResult} />}
            {mode === "listen" && <QuizStep word={current} pool={data.pool} listenOnly={true} onAnswer={handleResult} />}
            {mode === "spell" && <SpellStep word={current} onAnswer={handleResult} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ────────────────────── 1. 闪卡模式 ────────────────────── */
function FlashcardStep({ word, onAnswer }: { word: QueueWord; onAnswer: (ok: boolean) => void }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => speak(word.text), 180);
    return () => clearTimeout(t);
  }, [word.text]);

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
          className="relative min-h-[340px] w-full sm:min-h-[380px]"
        >
          {/* 正面 */}
          <div className="card-soft backface-hidden absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            {word.emoji && <div className="mb-3 text-6xl">{word.emoji}</div>}
            <div className="font-word text-4xl font-black tracking-wide sm:text-5xl">{word.text}</div>
            {word.phonetic && <div className="mt-2 text-lg text-ink-soft">{word.phonetic}</div>}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                speak(word.text);
              }}
              className="mt-6 flex items-center gap-2 rounded-2xl bg-brand-50 px-5 py-2.5 text-sm font-extrabold text-brand-600 hover:bg-brand-100"
            >
              <Volume2 size={20} /> 点我读一读
            </button>
            <div className="mt-8 text-xs font-semibold text-ink-soft">👆 点击卡片翻转看中文意思</div>
          </div>

          {/* 背面 */}
          <div
            style={{ transform: "rotateY(180deg)" }}
            className="card-soft backface-hidden absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
          >
            {word.emoji && <div className="mb-2 text-5xl">{word.emoji}</div>}
            <div className="font-word text-3xl font-black text-brand-600">{word.text}</div>
            <div className="mt-3 text-2xl font-extrabold">
              {word.pos && <span className="mr-1.5 text-base text-ink-soft italic">{word.pos}</span>}
              {word.meaning}
            </div>
            {word.example && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  speak(word.example);
                }}
                className="mt-5 max-w-md rounded-2xl bg-slate-50 p-4 text-sm"
              >
                <div className="font-word font-bold text-ink">{word.example} 🔊</div>
                {word.example_cn && <div className="mt-1 text-xs text-ink-soft">{word.example_cn}</div>}
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

  return (
    <div className="space-y-6">
      <div className="card-soft flex flex-col items-center justify-center p-8 text-center">
        {listenOnly ? (
          <>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => speak(word.text)}
              className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-400 text-white shadow-lg"
            >
              <Volume2 size={44} />
            </motion.button>
            <div className="mt-3 text-sm font-bold text-ink-soft">点击喇叭再听一遍，选出正确的意思</div>
            {pickedId !== null && <div className="font-word mt-2 text-2xl font-black text-brand-600">{word.text}</div>}
          </>
        ) : enToZh ? (
          <>
            {word.emoji && <div className="mb-2 text-5xl">{word.emoji}</div>}
            <div className="flex items-center gap-2">
              <span className="font-word text-4xl font-black sm:text-5xl">{word.text}</span>
              <button onClick={() => speak(word.text)} className="rounded-full bg-brand-50 p-2.5 text-brand-500">
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
        {options.map((opt) => {
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
          return (
            <motion.button
              key={opt.id}
              whileTap={pickedId === null ? { scale: 0.97 } : undefined}
              animate={isPicked && !isTarget ? { x: [0, -10, 10, -6, 6, 0] } : {}}
              onClick={() => choose(opt)}
              className={`btn-3d flex min-h-16 items-center justify-between rounded-2xl px-5 py-4 text-left text-lg font-extrabold ${cls}`}
              style={{ ["--shadow-color" as string]: shadow }}
            >
              <span className={enToZh ? "" : "font-word text-xl"}>
                {listenOnly ? (
                  <>
                    <span className="font-word mr-2 font-black">{opt.text}</span>
                    <span className="text-base font-bold opacity-90">{opt.meaning}</span>
                  </>
                ) : enToZh ? (
                  opt.meaning
                ) : (
                  opt.text
                )}
              </span>
              {pickedId !== null && isTarget && <Check size={22} />}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/* ────────────────────── 4. 拼写挑战（字母块点选 + 支持键盘） ────────────────────── */
function SpellStep({ word, onAnswer }: { word: QueueWord; onAnswer: (ok: boolean) => void }) {
  // 只对英文字母挖空，空格和标点固定保留
  const chars = useMemo(() => word.text.split(""), [word.text]);
  const letterIndices = useMemo(() => chars.map((c, i) => (/[A-Za-z]/.test(c) ? i : -1)).filter((i) => i >= 0), [chars]);

  const tiles = useMemo(() => {
    const base = letterIndices.map((idx, pos) => ({ id: pos, ch: chars[idx] }));
    // 加 2 个干扰字母
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let k = 0; k < 2; k++) {
      base.push({ id: base.length + k, ch: alphabet[Math.floor(Math.random() * 26)] });
    }
    for (let i = base.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [base[i], base[j]] = [base[j], base[i]];
    }
    return base;
  }, [chars, letterIndices]);

  const [pickedTiles, setPickedTiles] = useState<number[]>([]);
  const [status, setStatus] = useState<"typing" | "correct" | "wrong">("typing");

  useEffect(() => {
    const t = setTimeout(() => speak(word.text), 180);
    return () => clearTimeout(t);
  }, [word.text]);

  const checkResult = useCallback(
    (nextPicked: number[]) => {
      if (nextPicked.length < letterIndices.length) return;
      const attempt = nextPicked.map((tid) => tiles.find((t) => t.id === tid)!.ch).join("");
      const target = letterIndices.map((i) => chars[i]).join("");
      const ok = attempt.toLowerCase() === target.toLowerCase();
      setStatus(ok ? "correct" : "wrong");
      speak(word.text);
      setTimeout(() => onAnswer(ok), ok ? 750 : 1600);
    },
    [chars, letterIndices, onAnswer, tiles, word.text],
  );

  const tapTile = useCallback(
    (id: number) => {
      if (status !== "typing" || pickedTiles.includes(id) || pickedTiles.length >= letterIndices.length) return;
      sfx("tap");
      const next = [...pickedTiles, id];
      setPickedTiles(next);
      checkResult(next);
    },
    [checkResult, letterIndices.length, pickedTiles, status],
  );

  const backspace = useCallback(() => {
    if (status !== "typing" || !pickedTiles.length) return;
    setPickedTiles((p) => p.slice(0, -1));
  }, [pickedTiles.length, status]);

  const hint = () => {
    if (status !== "typing" || pickedTiles.length >= letterIndices.length) return;
    const nextCharIdx = letterIndices[pickedTiles.length];
    const needed = chars[nextCharIdx].toLowerCase();
    const tile = tiles.find((t) => !pickedTiles.includes(t.id) && t.ch.toLowerCase() === needed);
    if (tile) tapTile(tile.id);
  };

  // 支持外接键盘直接输入
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (status !== "typing") return;
      if (e.key === "Backspace") {
        e.preventDefault();
        backspace();
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        const tile = tiles.find((t) => !pickedTiles.includes(t.id) && t.ch.toLowerCase() === e.key.toLowerCase());
        if (tile) tapTile(tile.id);
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [backspace, pickedTiles, status, tapTile, tiles]);

  return (
    <div className="space-y-6">
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
            const tileId = pickedTiles[slotPos];
            const filled = tileId !== undefined ? tiles.find((t) => t.id === tileId)?.ch : "";
            return (
              <button
                key={idx}
                onClick={() => {
                  if (status === "typing" && slotPos === pickedTiles.length - 1) backspace();
                }}
                className={`font-word flex h-12 w-10 items-center justify-center rounded-xl border-b-4 text-2xl font-black transition sm:h-14 sm:w-12 ${
                  status === "correct"
                    ? "border-mint-600 bg-mint-500 text-white"
                    : status === "wrong"
                      ? "border-coral-600 bg-coral-500 text-white"
                      : filled
                        ? "border-brand-500 bg-brand-50 text-brand-600"
                        : "border-slate-300 bg-slate-100"
                }`}
              >
                {filled}
              </button>
            );
          })}
        </motion.div>

        {status === "wrong" && (
          <div className="font-word mt-4 text-xl font-black text-coral-600">正确拼写：{word.text}</div>
        )}
      </div>

      {/* 字母块键盘 */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {tiles.map((t) => {
          const used = pickedTiles.includes(t.id);
          return (
            <motion.button
              key={t.id}
              whileTap={!used ? { scale: 0.9 } : undefined}
              disabled={used || status !== "typing"}
              onClick={() => tapTile(t.id)}
              className={`btn-3d font-word flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-black transition ${
                used ? "bg-slate-200 text-transparent opacity-40" : "border-2 border-slate-200 bg-white text-ink"
              }`}
              style={{ ["--shadow-color" as string]: "#cbd5e1" }}
            >
              {t.ch}
            </motion.button>
          );
        })}
      </div>

      <div className="flex justify-center gap-3">
        <Button variant="secondary" size="md" onClick={hint} disabled={status !== "typing"}>
          <HelpCircle size={18} /> 提示一个字母
        </Button>
        <Button variant="secondary" size="md" onClick={backspace} disabled={status !== "typing" || !pickedTiles.length}>
          <Delete size={18} /> 退格
        </Button>
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
            <RotateCcw size={18} /> 再来一轮
          </Button>
          <Button size="lg" className="flex-1" onClick={onHome}>
            <Sparkles size={18} /> 返回首页
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
