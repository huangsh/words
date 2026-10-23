"use client";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { use, useMemo, useState } from "react";
import { Check, ChevronLeft, FolderInput, Pencil, Plus, Tag as TagIcon, Trash2, Upload, Volume2, X } from "lucide-react";
import { Button, confirmDialog, Empty, Loading, Modal, Select, TagPill } from "@/components/ui";
import { useToast } from "@/components/Toast";
import { type Tag, type Word, WordEditor } from "@/components/WordEditor";
import { api, useApi } from "@/lib/client";
import { gradeLabel } from "@/lib/constants";
import { speak } from "@/lib/speech";

interface Data {
  unit: { id: number; book_id: number; grade: number; term: string; name: string; book_name: string };
  words: Word[];
}

export default function UnitPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data, loading, reload } = useApi<Data>(`/api/units/${id}`);
  const tagsQ = useApi<{ tags: Tag[] }>("/api/tags");
  const tags = useMemo(() => tagsQ.data?.tags ?? [], [tagsQ.data]);
  const tagMap = useMemo(() => new Map(tags.map((t) => [t.id, t])), [tags]);
  const [editing, setEditing] = useState<Partial<Word> | null>(null);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [filter, setFilter] = useState<number | null>(null);
  const [batch, setBatch] = useState<"tag" | "untag" | "move" | null>(null);
  const toast = useToast();

  const words = useMemo(() => (data?.words ?? []).filter((w) => !filter || w.tag_ids.includes(filter)), [data, filter]);

  async function saveWord(w: Partial<Word>, keepOpen: boolean) {
    try {
      const payload = { ...w, tagIds: w.tag_ids };
      if (w.id) await api(`/api/words/${w.id}`, { method: "PATCH", body: payload });
      else await api("/api/words", { body: { ...payload, unitId: Number(id) } });
      toast(w.id ? "已保存" : `已添加 ${w.text}`, "success");
      if (!keepOpen) setEditing(null);
      reload();
      tagsQ.reload();
      return true;
    } catch (e) {
      toast((e as Error).message, "error");
      return false;
    }
  }

  async function removeWord(w: Word) {
    if (!confirmDialog(`删除单词「${w.text}」？`)) return;
    await api(`/api/words/${w.id}`, { method: "DELETE" });
    reload();
  }

  async function runBatch(action: string, extra: Record<string, unknown> = {}) {
    try {
      const r = await api<{ count: number }>("/api/words/batch", { body: { action, wordIds: [...selected], ...extra } });
      toast(`已处理 ${r.count} 个单词`, "success");
      setSelected(new Set());
      setBatch(null);
      reload();
      tagsQ.reload();
    } catch (e) {
      toast((e as Error).message, "error");
    }
  }

  const toggle = (wid: number) =>
    setSelected((s) => {
      const n = new Set(s);
      if (n.has(wid)) n.delete(wid);
      else n.add(wid);
      return n;
    });
  const allSelected = words.length > 0 && words.every((w) => selected.has(w.id));

  if (loading && !data) return <Loading />;
  if (!data) return <Empty title="单元不存在" />;
  const { unit } = data;

  return (
    <div className="pb-24">
      <Link href={`/admin/books/${unit.book_id}`} className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-ink-soft hover:text-ink">
        <ChevronLeft size={16} /> {unit.book_name}
      </Link>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="text-sm font-bold text-brand-500">{gradeLabel(unit.grade, unit.term)}</div>
          <h1 className="text-2xl font-black sm:text-3xl">{unit.name}</h1>
          <p className="text-sm text-ink-soft">{data.words.length} 个单词</p>
        </div>
        <div className="flex gap-2">
          <Link href={`/admin/import?bookId=${unit.book_id}&unitId=${unit.id}`}>
            <Button variant="secondary">
              <Upload size={18} /> 批量添加
            </Button>
          </Link>
          <Button onClick={() => setEditing({})}>
            <Plus size={18} /> 添加单词
          </Button>
        </div>
      </div>

      {tags.length > 0 && (
        <div className="no-scrollbar -mx-4 mb-4 flex items-center gap-2 overflow-x-auto px-4">
          <span className="shrink-0 text-sm text-ink-soft">筛选：</span>
          <TagPill name="全部" color="#2b3245" active={filter === null} onClick={() => setFilter(null)} />
          {tags.map((t) => (
            <TagPill key={t.id} name={t.name} color={t.color} active={filter === t.id} onClick={() => setFilter(filter === t.id ? null : t.id)} />
          ))}
        </div>
      )}

      {!words.length ? (
        <Empty icon="✏️" title={filter ? "没有带这个标签的单词" : "这个单元还没有单词"}>
          点击「添加单词」或「批量添加」
        </Empty>
      ) : (
        <div className="card-soft overflow-hidden">
          <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 text-sm font-bold text-ink-soft">
            <Checkbox checked={allSelected} onChange={() => setSelected(allSelected ? new Set() : new Set(words.map((w) => w.id)))} />
            <span>{selected.size ? `已选 ${selected.size} 个` : "全选"}</span>
          </div>
          <motion.ul initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.015 } } }}>
            {words.map((w) => (
              <motion.li
                key={w.id}
                variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }}
                className={`flex items-center gap-3 border-b border-slate-50 px-4 py-3 transition last:border-0 ${selected.has(w.id) ? "bg-brand-50/60" : "hover:bg-slate-50/60"}`}
              >
                <Checkbox checked={selected.has(w.id)} onChange={() => toggle(w.id)} />
                <button onClick={() => speak(w.text)} className="shrink-0 rounded-full p-2 text-brand-500 hover:bg-brand-100" title="发音">
                  <Volume2 size={18} />
                </button>
                <div className="w-8 shrink-0 text-center text-2xl">{w.emoji}</div>
                <div className="min-w-0 flex-1 cursor-pointer" onClick={() => setEditing(w)}>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-word text-lg font-bold">{w.text}</span>
                    {w.phonetic && <span className="text-sm text-ink-soft">{w.phonetic}</span>}
                    <span className="text-ink">
                      {w.pos && <span className="mr-1 text-sm text-ink-soft italic">{w.pos}</span>}
                      {w.meaning}
                    </span>
                  </div>
                  {(w.example || w.tag_ids.length > 0) && (
                    <div className="mt-1 flex flex-wrap items-center gap-1.5">
                      {w.tag_ids.map((t) => tagMap.get(t)).filter(Boolean).map((t) => (
                        <TagPill key={t!.id} name={t!.name} color={t!.color} small />
                      ))}
                      {w.example && <span className="truncate text-xs text-ink-soft">{w.example}</span>}
                    </div>
                  )}
                </div>
                <button onClick={() => setEditing(w)} className="hidden rounded-lg p-2 text-ink-soft hover:bg-slate-100 sm:block">
                  <Pencil size={16} />
                </button>
                <button onClick={() => removeWord(w)} className="rounded-lg p-2 text-coral-500 hover:bg-coral-500/10">
                  <Trash2 size={16} />
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      )}

      {/* 批量操作栏 */}
      <AnimatePresence>
        {selected.size > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 safe-bottom"
          >
            <div className="flex items-center gap-2 rounded-3xl bg-ink p-2 pl-5 text-white shadow-2xl">
              <span className="mr-1 text-sm font-bold whitespace-nowrap">已选 {selected.size}</span>
              <Button size="sm" variant="primary" onClick={() => setBatch("tag")}>
                <TagIcon size={15} /> <span className="hidden sm:inline">打标签</span>
              </Button>
              <Button size="sm" variant="sun" onClick={() => setBatch("untag")}>
                <X size={15} /> <span className="hidden sm:inline">去标签</span>
              </Button>
              <Button size="sm" variant="grape" onClick={() => setBatch("move")}>
                <FolderInput size={15} /> <span className="hidden sm:inline">移动</span>
              </Button>
              <Button size="sm" variant="danger" onClick={() => confirmDialog(`删除选中的 ${selected.size} 个单词？`) && runBatch("delete")}>
                <Trash2 size={15} />
              </Button>
              <button onClick={() => setSelected(new Set())} className="rounded-full p-2 text-white/70 hover:text-white">
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Modal open={batch === "tag" || batch === "untag"} onClose={() => setBatch(null)} title={batch === "tag" ? "给选中单词打标签" : "移除选中单词的标签"}>
        {tags.length ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <TagPill key={t.id} name={t.name} color={t.color} onClick={() => runBatch(batch!, { tagId: t.id })} />
            ))}
          </div>
        ) : (
          <Empty title="还没有标签">
            <Link href="/admin/tags" className="text-brand-500">去创建标签</Link>
          </Empty>
        )}
      </Modal>

      <MoveModal open={batch === "move"} bookId={unit.book_id} onClose={() => setBatch(null)} onMove={(uid) => runBatch("move", { unitId: uid })} />

      <WordEditor open={!!editing} word={editing} tags={tags} onClose={() => setEditing(null)} onSave={saveWord} />
    </div>
  );
}

function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 transition ${checked ? "border-brand-400 bg-brand-400 text-white" : "border-slate-300 bg-white"}`}
    >
      <AnimatePresence>
        {checked && (
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <Check size={14} strokeWidth={3.5} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

function MoveModal({ open, bookId, onClose, onMove }: { open: boolean; bookId: number; onClose: () => void; onMove: (unitId: number) => void }) {
  const books = useApi<{ books: { id: number; name: string }[] }>(open ? "/api/books" : null);
  const [book, setBook] = useState(bookId);
  const units = useApi<{ units: { id: number; name: string; grade: number; term: string }[] }>(open ? `/api/books/${book}` : null);
  const [unit, setUnit] = useState<number | null>(null);
  return (
    <Modal open={open} onClose={onClose} title="移动到其他单元">
      <div className="space-y-4">
        <Select label="词库" value={book} onChange={(e) => (setBook(Number(e.target.value)), setUnit(null))}>
          {books.data?.books.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </Select>
        <Select label="单元" value={unit ?? ""} onChange={(e) => setUnit(Number(e.target.value))}>
          <option value="">请选择</option>
          {units.data?.units.map((u) => (
            <option key={u.id} value={u.id}>
              {gradeLabel(u.grade, u.term)} · {u.name}
            </option>
          ))}
        </Select>
        <Button className="w-full" size="lg" disabled={!unit} onClick={() => unit && onMove(unit)}>
          移动
        </Button>
      </div>
    </Modal>
  );
}
