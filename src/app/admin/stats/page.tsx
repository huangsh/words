"use client";
import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";
import { Empty, Loading, ProgressBar } from "@/components/ui";
import { useApi } from "@/lib/client";
import { BOX_COLORS, BOX_LABELS, gradeLabel } from "@/lib/constants";
import { speak } from "@/lib/speech";

interface Member {
  id: number;
  display_name: string;
  avatar: string;
  color: string;
  role: string;
}
interface StatsData {
  user: Member & { daily_goal: number };
  summary: { todayAnswers: number; todayCorrect: number; stars: number; streak: number; reviewDue: number; wrongCount: number; learned: number; mastered: number };
  daily: { day: string; answers: number; correct: number; words: number }[];
  boxes: { box: number; c: number }[];
  weak: { id: number; text: string; meaning: string; emoji: string; box: number; correct: number; wrong: number }[];
  units: { id: number; name: string; grade: number; term: string; book_name: string; total: number; learned: number; mastered: number }[];
}

export default function StatsPage() {
  const usersQ = useApi<{ users: Member[] }>("/api/users");
  const [uid, setUid] = useState<number>(0);

  useEffect(() => {
    if (!uid && usersQ.data?.users.length) {
      const child = usersQ.data.users.find((u) => u.role === "child") ?? usersQ.data.users[0];
      setUid(child.id);
    }
  }, [usersQ.data, uid]);

  const statsQ = useApi<StatsData>(uid ? `/api/stats?userId=${uid}` : null);
  const s = statsQ.data;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black sm:text-3xl">学习统计</h1>
          <p className="text-sm text-ink-soft">查看每个孩子的学习量、掌握度与薄弱单词</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {usersQ.data?.users.map((u) => (
            <button
              key={u.id}
              onClick={() => setUid(u.id)}
              className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold transition ${uid === u.id ? "bg-brand-400 text-white shadow" : "bg-white text-ink hover:bg-slate-50"}`}
            >
              <span className="text-lg">{u.avatar}</span> {u.display_name}
            </button>
          ))}
        </div>
      </div>

      {statsQ.loading || !s ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatCard label="今日答题" value={`${s.summary.todayAnswers}`} sub={`正确 ${s.summary.todayCorrect}`} color="text-brand-500" />
            <StatCard label="连续打卡" value={`${s.summary.streak} 天`} sub={`累计 ⭐ ${s.summary.stars}`} color="text-coral-500" />
            <StatCard label="已学单词" value={`${s.summary.learned}`} sub={`已掌握 ${s.summary.mastered}`} color="text-mint-600" />
            <StatCard label="待复习 / 易错" value={`${s.summary.reviewDue} / ${s.summary.wrongCount}`} sub="间隔重复队列" color="text-amber-500" />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* 掌握度分布 */}
            <div className="card-soft p-6">
              <h2 className="mb-4 text-lg font-extrabold">记忆盒子分布（Leitner 1~5 级）</h2>
              {!s.boxes.length ? (
                <Empty icon="📦" title="还没有学习记录" />
              ) : (
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((b) => {
                    const c = s.boxes.find((x) => x.box === b)?.c ?? 0;
                    const ratio = s.summary.learned ? c / s.summary.learned : 0;
                    return (
                      <div key={b} className="flex items-center gap-3 text-sm">
                        <span className="w-16 font-bold">
                          Lv.{b} {BOX_LABELS[b]}
                        </span>
                        <div className="flex-1">
                          <ProgressBar value={ratio} color={BOX_COLORS[b]} />
                        </div>
                        <span className="w-12 text-right font-bold">{c} 词</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 近 14 天趋势 */}
            <div className="card-soft p-6">
              <h2 className="mb-4 text-lg font-extrabold">最近学习记录</h2>
              {!s.daily.length ? (
                <Empty icon="📅" title="最近还没有学习" />
              ) : (
                <div className="space-y-2.5">
                  {s.daily
                    .slice()
                    .reverse()
                    .slice(0, 7)
                    .map((d) => {
                      const acc = d.answers ? Math.round((d.correct / d.answers) * 100) : 0;
                      return (
                        <div key={d.day} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 text-sm">
                          <span className="font-bold">{d.day}</span>
                          <span>练习 {d.words} 词 · 答题 {d.answers} 次</span>
                          <span className="font-bold text-mint-600">正确率 {acc}%</span>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>

          {/* 单元进度 */}
          {s.units.length > 0 && (
            <div className="card-soft p-6">
              <h2 className="mb-4 text-lg font-extrabold">近期学习的单元</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {s.units.map((u) => (
                  <div key={u.id} className="rounded-2xl border border-slate-100 p-4">
                    <div className="text-xs font-bold text-brand-500">{gradeLabel(u.grade, u.term)}</div>
                    <div className="truncate font-bold">{u.name}</div>
                    <div className="mt-2 mb-1 flex justify-between text-xs text-ink-soft">
                      <span>已学 {u.learned}/{u.total}</span>
                      <span>掌握 {u.mastered}</span>
                    </div>
                    <ProgressBar value={u.total ? u.learned / u.total : 0} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 薄弱词 */}
          <div className="card-soft p-6">
            <h2 className="mb-4 text-lg font-extrabold">易错单词（按错误率排序）</h2>
            {!s.weak.length ? (
              <Empty icon="🎉" title="太棒了，目前没有易错词！" />
            ) : (
              <div className="grid gap-2 sm:grid-cols-2">
                {s.weak.map((w) => (
                  <div key={w.id} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-2.5">
                    <button onClick={() => speak(w.text)} className="rounded-full p-1.5 text-brand-500 hover:bg-brand-100">
                      <Volume2 size={16} />
                    </button>
                    <div className="min-w-0 flex-1">
                      <span className="font-word font-bold">
                        {w.emoji} {w.text}
                      </span>
                      <span className="ml-2 text-sm text-ink-soft">{w.meaning}</span>
                    </div>
                    <span className="text-xs font-bold text-coral-500">
                      错 {w.wrong} / 对 {w.correct}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function StatCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div className="card-soft p-5">
      <div className="text-xs font-bold text-ink-soft">{label}</div>
      <div className={`mt-1 text-3xl font-black ${color}`}>{value}</div>
      <div className="mt-1 text-xs text-ink-soft">{sub}</div>
    </div>
  );
}
