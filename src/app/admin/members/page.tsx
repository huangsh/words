"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { Flame, Pencil, Plus, Star, Trash2 } from "lucide-react";
import { Button, confirmDialog, Input, Loading, Modal, Select } from "@/components/ui";
import { useToast } from "@/components/Toast";
import { api, useApi } from "@/lib/client";
import { AVATARS, COLORS } from "@/lib/constants";

interface Member {
  id: number;
  username: string;
  role: "parent" | "child";
  display_name: string;
  avatar: string;
  color: string;
  daily_goal: number;
  stats: { todayAnswers: number; stars: number; streak: number; learned: number; mastered: number };
}

export default function MembersPage() {
  const { data, loading, reload } = useApi<{ users: Member[] }>("/api/users");
  const [edit, setEdit] = useState<(Partial<Member> & { password?: string }) | null>(null);
  const toast = useToast();

  async function save() {
    if (!edit) return;
    try {
      const payload = {
        username: edit.username,
        displayName: edit.display_name,
        avatar: edit.avatar,
        color: edit.color,
        dailyGoal: edit.daily_goal,
        role: edit.role,
        password: edit.password,
      };
      if (edit.id) await api(`/api/users/${edit.id}`, { method: "PATCH", body: payload });
      else await api("/api/users", { body: payload });
      toast("已保存", "success");
      setEdit(null);
      reload();
    } catch (e) {
      toast((e as Error).message, "error");
    }
  }

  async function remove(u: Member) {
    if (!confirmDialog(`确定删除账号「${u.display_name}」？`)) return;
    try {
      await api(`/api/users/${u.id}`, { method: "DELETE" });
      toast("已删除");
      reload();
    } catch (e) {
      toast((e as Error).message, "error");
    }
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black sm:text-3xl">家庭成员</h1>
          <p className="text-sm text-ink-soft">为每个孩子创建独立账号，各自记录学习进度和错题</p>
        </div>
        <Button
          onClick={() =>
            setEdit({
              role: "child",
              display_name: "",
              username: "",
              password: "",
              avatar: AVATARS[Math.floor(Math.random() * 12)],
              color: COLORS[Math.floor(Math.random() * COLORS.length)],
              daily_goal: 20,
            })
          }
        >
          <Plus size={18} /> 添加孩子账号
        </Button>
      </div>

      {loading && !data ? (
        <Loading />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data?.users.map((u) => (
            <motion.div key={u.id} whileHover={{ y: -3 }} className="card-soft p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full text-4xl" style={{ background: u.color + "26" }}>
                    {u.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-extrabold">{u.display_name}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-bold ${u.role === "parent" ? "bg-grape-500/10 text-grape-600" : "bg-brand-100 text-brand-600"}`}
                      >
                        {u.role === "parent" ? "家长" : "小朋友"}
                      </span>
                    </div>
                    <div className="text-xs text-ink-soft">登录名：{u.username} · 每日目标 {u.daily_goal} 题</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => setEdit({ ...u, password: "" })} className="rounded-lg p-2 text-ink-soft hover:bg-slate-100">
                    <Pencil size={16} />
                  </button>
                  <button onClick={() => remove(u)} className="rounded-lg p-2 text-coral-500 hover:bg-coral-500/10">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-slate-50 p-3 text-center text-xs">
                <div>
                  <div className="flex items-center justify-center gap-1 text-base font-black text-amber-500">
                    <Star size={15} fill="currentColor" /> {u.stats.stars}
                  </div>
                  <div className="text-ink-soft">星星</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-base font-black text-coral-500">
                    <Flame size={15} fill="currentColor" /> {u.stats.streak}
                  </div>
                  <div className="text-ink-soft">连续天数</div>
                </div>
                <div>
                  <div className="text-base font-black text-mint-600">
                    {u.stats.mastered}/{u.stats.learned}
                  </div>
                  <div className="text-ink-soft">掌握/已学</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <Modal open={!!edit} onClose={() => setEdit(null)} title={edit?.id ? "编辑成员" : "添加家庭成员"}>
        <div className="space-y-4">
          <div>
            <span className="mb-1.5 block text-sm font-semibold text-ink-soft">头像</span>
            <div className="flex flex-wrap gap-2">
              {AVATARS.map((a) => (
                <button
                  type="button"
                  key={a}
                  onClick={() => setEdit({ ...edit, avatar: a })}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-2xl ${edit?.avatar === a ? "bg-brand-100 ring-2 ring-brand-400" : "bg-slate-50"}`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className="mb-1.5 block text-sm font-semibold text-ink-soft">主题色</span>
            <div className="flex gap-2">
              {COLORS.map((c) => (
                <button
                  type="button"
                  key={c}
                  onClick={() => setEdit({ ...edit, color: c })}
                  className={`h-8 w-8 rounded-full ${edit?.color === c ? "scale-110 ring-4 ring-slate-200" : ""}`}
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Input label="昵称 *" value={edit?.display_name ?? ""} onChange={(e) => setEdit({ ...edit, display_name: e.target.value })} placeholder="如：哥哥 / 妹妹" />
            <Input label="登录名 *" value={edit?.username ?? ""} onChange={(e) => setEdit({ ...edit, username: e.target.value })} placeholder="如：xiaoming" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Select label="角色" value={edit?.role ?? "child"} onChange={(e) => setEdit({ ...edit, role: e.target.value as "parent" | "child" })} disabled={!!edit?.id}>
              <option value="child">小朋友（学习端）</option>
              <option value="parent">家长（可管理词库）</option>
            </Select>
            <Input
              label="每日目标（题数）"
              type="number"
              value={edit?.daily_goal ?? 20}
              onChange={(e) => setEdit({ ...edit, daily_goal: Number(e.target.value) })}
            />
          </div>
          <Input
            label={edit?.id ? "新密码（留空则不修改）" : "登录密码（至少 3 位，简单好记即可）"}
            type="password"
            value={edit?.password ?? ""}
            onChange={(e) => setEdit({ ...edit, password: e.target.value })}
            placeholder={edit?.id ? "不修改请留空" : "如：123"}
          />
          <Button className="w-full" size="lg" onClick={save}>
            保存
          </Button>
        </div>
      </Modal>
    </div>
  );
}
