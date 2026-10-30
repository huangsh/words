"use client";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { use, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Pencil, Plus, Trash2, Upload } from "lucide-react";
import { Button, confirmDialog, Empty, Input, Loading, Modal, Select } from "@/components/ui";
import { useToast } from "@/components/Toast";
import { api, useApi } from "@/lib/client";
import { GRADES, gradeLabel } from "@/lib/constants";

interface Unit {
  id: number;
  grade: number;
  term: string;
  name: string;
  word_count: number;
}
interface Data {
  book: { id: number; name: string; description: string };
  units: Unit[];
}

export default function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data, loading, reload } = useApi<Data>(`/api/books/${id}`);
  const [tab, setTab] = useState<string>("all");
  const [edit, setEdit] = useState<Partial<Unit> | null>(null);
  const toast = useToast();

  const groups = useMemo(() => {
    const m = new Map<string, Unit[]>();
    data?.units.forEach((u) => {
      const k = `${u.grade}${u.term}`;
      if (!m.has(k)) m.set(k, []);
      m.get(k)!.push(u);
    });
    return [...m.entries()];
  }, [data]);

  const shown = tab === "all" ? groups : groups.filter(([k]) => k === tab);

  async function save() {
    if (!edit) return;
    try {
      if (edit.id) await api(`/api/units/${edit.id}`, { method: "PATCH", body: edit });
      else await api("/api/units", { body: { ...edit, bookId: Number(id) } });
      toast("已保存", "success");
      setEdit(null);
      reload();
    } catch (e) {
      toast((e as Error).message, "error");
    }
  }

  async function remove(u: Unit) {
    if (!confirmDialog(`删除「${u.name}」及其中 ${u.word_count} 个单词？`)) return;
    await api(`/api/units/${u.id}`, { method: "DELETE" });
    toast("已删除");
    reload();
  }

  if (loading && !data) return <Loading />;
  if (!data) return <Empty title="词库不存在" />;

  const lastUnit = data.units[data.units.length - 1];

  return (
    <div>
      <Link href="/admin" className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-ink-soft hover:text-ink">
        <ChevronLeft size={16} /> 全部词库
      </Link>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black sm:text-3xl">{data.book.name}</h1>
          <p className="text-sm text-ink-soft">{data.book.description}</p>
        </div>
        <div className="flex gap-2">
          <Link href={`/admin/import?bookId=${id}`}>
            <Button variant="secondary">
              <Upload size={18} /> 批量导入
            </Button>
          </Link>
          <Button
            onClick={() =>
              setEdit({ grade: lastUnit?.grade ?? 3, term: lastUnit?.term ?? "上", name: `Unit ${(groups.find(([k]) => k === tab)?.[1].length ?? 0) + 1} ` })
            }
          >
            <Plus size={18} /> 新建单元
          </Button>
        </div>
      </div>

      {/* 年级筛选 */}
      <div className="no-scrollbar -mx-4 mb-6 flex gap-2 overflow-x-auto px-4">
        {[["all", "全部"] as const, ...groups.map(([k, us]) => [k, gradeLabel(us[0].grade, us[0].term)] as const)].map(([k, label]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`relative shrink-0 rounded-2xl px-4 py-2 text-sm font-bold transition ${tab === k ? "text-white" : "bg-white text-ink-soft hover:text-ink"}`}
          >
            {tab === k && <motion.span layoutId="grade-tab" className="absolute inset-0 rounded-2xl bg-brand-400" />}
            <span className="relative">{label}</span>
          </button>
        ))}
      </div>

      {!groups.length && <Empty icon="🧩" title="还没有单元">新建单元，或使用批量导入自动创建</Empty>}

      <AnimatePresence mode="popLayout">
        {shown.map(([k, units]) => (
          <motion.section key={k} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mb-8">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-extrabold">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sun-400 text-sm text-ink">{units[0].grade}</span>
              {gradeLabel(units[0].grade, units[0].term)}
              <span className="text-sm font-semibold text-ink-soft">· {units.reduce((n, u) => n + u.word_count, 0)} 词</span>
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {units.map((u) => (
                <motion.div key={u.id} whileHover={{ y: -2 }} className="card-soft group flex items-center gap-3 p-4">
                  <Link href={`/admin/units/${u.id}`} className="flex min-w-0 flex-1 items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-lg font-black text-brand-500">
                      {u.word_count}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-bold">{u.name}</div>
                      <div className="text-xs text-ink-soft">{u.word_count} 个单词</div>
                    </div>
                  </Link>
                  <div className="flex gap-1 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                    <button onClick={() => setEdit(u)} className="rounded-lg p-2 text-ink-soft hover:bg-slate-100">
                      <Pencil size={16} />
                    </button>
                    <button onClick={() => remove(u)} className="rounded-lg p-2 text-coral-500 hover:bg-coral-500/10">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <ChevronRight size={18} className="text-slate-300" />
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </AnimatePresence>

      <Modal open={!!edit} onClose={() => setEdit(null)} title={edit?.id ? "编辑单元" : "新建单元"}>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Select label="年级" value={edit?.grade ?? 3} onChange={(e) => setEdit({ ...edit, grade: Number(e.target.value) })}>
              {GRADES.map((g) => (
                <option key={g} value={g}>
                  {g} 年级
                </option>
              ))}
            </Select>
            <Select label="册" value={edit?.term ?? "上"} onChange={(e) => setEdit({ ...edit, term: e.target.value })}>
              <option value="上">上册</option>
              <option value="下">下册</option>
            </Select>
          </div>
          <Input label="单元名称" value={edit?.name ?? ""} onChange={(e) => setEdit({ ...edit, name: e.target.value })} placeholder="如：Unit 1 Hello!" autoFocus />
          <Button className="w-full" size="lg" onClick={save}>
            保存
          </Button>
        </div>
      </Modal>
    </div>
  );
}
