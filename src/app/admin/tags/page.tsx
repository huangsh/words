"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { Pencil, Plus, Trash2, Volume2 } from "lucide-react";
import { Button, confirmDialog, Empty, Input, Loading, Modal, TagPill } from "@/components/ui";
import { useToast } from "@/components/Toast";
import type { Tag, Word } from "@/components/WordEditor";
import { api, useApi } from "@/lib/client";
import { COLORS, gradeLabel } from "@/lib/constants";
import { speak } from "@/lib/speech";

interface WordWithUnit extends Word {
  unit_name: string;
  book_name: string;
  grade: number;
  term: string;
}

export default function TagsPage() {
  const { data, loading, reload } = useApi<{ tags: Tag[] }>("/api/tags");
  const [edit, setEdit] = useState<Partial<Tag> | null>(null);
  const [activeTag, setActiveTag] = useState<Tag | null>(null);
  const wordsQ = useApi<{ words: WordWithUnit[] }>(activeTag ? `/api/words?tagId=${activeTag.id}` : null);
  const toast = useToast();

  async function save() {
    if (!edit) return;
    try {
      if (edit.id) await api(`/api/tags/${edit.id}`, { method: "PATCH", body: edit });
      else await api("/api/tags", { body: edit });
      toast("已保存", "success");
      setEdit(null);
      reload();
    } catch (e) {
      toast((e as Error).message, "error");
    }
  }

  async function remove(t: Tag) {
    if (!confirmDialog(`删除标签「${t.name}」？（不会删除单词本身）`)) return;
    await api(`/api/tags/${t.id}`, { method: "DELETE" });
    if (activeTag?.id === t.id) setActiveTag(null);
    toast("已删除");
    reload();
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black sm:text-3xl">标签管理</h1>
          <p className="text-sm text-ink-soft">给单词打上「重点」「易错」「期末必考」等标签，孩子可按标签专项练习</p>
        </div>
        <Button onClick={() => setEdit({ name: "", color: COLORS[0] })}>
          <Plus size={18} /> 新建标签
        </Button>
      </div>

      {loading && !data ? (
        <Loading />
      ) : !data?.tags.length ? (
        <Empty icon="🏷️" title="还没有标签" />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.tags.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -2 }}
              onClick={() => setActiveTag(t)}
              className={`card-soft flex cursor-pointer items-center justify-between p-5 transition ${activeTag?.id === t.id ? "ring-2 ring-brand-400" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-full" style={{ background: t.color }} />
                <div>
                  <div className="text-lg font-extrabold">{t.name}</div>
                  <div className="text-xs text-ink-soft">{t.word_count ?? 0} 个单词</div>
                </div>
              </div>
              <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setEdit(t)} className="rounded-lg p-2 text-ink-soft hover:bg-slate-100">
                  <Pencil size={16} />
                </button>
                <button onClick={() => remove(t)} className="rounded-lg p-2 text-coral-500 hover:bg-coral-500/10">
                  <Trash2 size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {activeTag && (
        <div className="card-soft mt-8 overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div className="flex items-center gap-2 font-bold">
              <TagPill name={activeTag.name} color={activeTag.color} />
              <span className="text-sm text-ink-soft">共 {wordsQ.data?.words.length ?? 0} 个单词</span>
            </div>
          </div>
          {wordsQ.loading ? (
            <Loading />
          ) : !wordsQ.data?.words.length ? (
            <Empty icon="🔖" title="该标签下还没有单词">可在单元页面勾选单词批量打标签</Empty>
          ) : (
            <div className="divide-y divide-slate-100">
              {wordsQ.data.words.map((w) => (
                <div key={w.id} className="flex items-center gap-3 px-5 py-3">
                  <button onClick={() => speak(w.text)} className="rounded-full p-2 text-brand-500 hover:bg-brand-50">
                    <Volume2 size={18} />
                  </button>
                  <div className="flex-1">
                    <span className="font-word font-bold">{w.text}</span>
                    <span className="ml-2 text-sm text-ink-soft">{w.meaning}</span>
                  </div>
                  <span className="text-xs text-ink-soft">
                    {gradeLabel(w.grade, w.term)} · {w.unit_name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <Modal open={!!edit} onClose={() => setEdit(null)} title={edit?.id ? "编辑标签" : "新建标签"}>
        <div className="space-y-4">
          <Input label="标签名称" value={edit?.name ?? ""} onChange={(e) => setEdit({ ...edit, name: e.target.value })} placeholder="如：重点 / 易错 / 动物" autoFocus />
          <div>
            <span className="mb-2 block text-sm font-semibold text-ink-soft">颜色</span>
            <div className="flex flex-wrap gap-2.5">
              {COLORS.map((c) => (
                <button
                  type="button"
                  key={c}
                  onClick={() => setEdit({ ...edit, color: c })}
                  className={`h-9 w-9 rounded-full transition ${edit?.color === c ? "scale-110 ring-4 ring-slate-200" : ""}`}
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
          <Button className="w-full" size="lg" onClick={save}>
            保存
          </Button>
        </div>
      </Modal>
    </div>
  );
}
