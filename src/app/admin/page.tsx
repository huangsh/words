"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { BookOpen, Pencil, Plus, Search, Trash2 } from "lucide-react";
import { Button, confirmDialog, Empty, Input, Loading, Modal } from "@/components/ui";
import { useToast } from "@/components/Toast";
import { api, useApi } from "@/lib/client";
import { WordSearch } from "./WordSearch";

interface Book {
  id: number;
  name: string;
  description: string;
  builtin: number;
  unit_count: number;
  word_count: number;
}

const CARD_COLORS = ["from-brand-400 to-brand-600", "from-mint-400 to-mint-600", "from-sun-400 to-sun-600", "from-grape-400 to-grape-600", "from-coral-400 to-coral-600"];

export default function BooksPage() {
  const { data, loading, reload } = useApi<{ books: Book[] }>("/api/books");
  const [edit, setEdit] = useState<Partial<Book> | null>(null);
  const [searching, setSearching] = useState(false);
  const toast = useToast();

  async function save() {
    if (!edit) return;
    try {
      if (edit.id) await api(`/api/books/${edit.id}`, { method: "PATCH", body: edit });
      else await api("/api/books", { body: edit });
      toast("已保存", "success");
      setEdit(null);
      reload();
    } catch (e) {
      toast((e as Error).message, "error");
    }
  }

  async function remove(b: Book) {
    if (!confirmDialog(`确定删除词库「${b.name}」？其中 ${b.word_count} 个单词和学习记录都会被删除。`)) return;
    await api(`/api/books/${b.id}`, { method: "DELETE" });
    toast("已删除");
    reload();
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black sm:text-3xl">词库</h1>
          <p className="text-sm text-ink-soft">按 词库 → 年级 → 单元 管理单词</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => setSearching(true)}>
            <Search size={18} /> 搜索单词
          </Button>
          <Button onClick={() => setEdit({ name: "", description: "" })}>
            <Plus size={18} /> 新建词库
          </Button>
        </div>
      </div>

      {loading && !data ? (
        <Loading />
      ) : !data?.books.length ? (
        <Empty icon="📚" title="还没有词库">点击右上角新建一个吧</Empty>
      ) : (
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        >
          {data.books.map((b, i) => (
            <motion.div
              key={b.id}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
              className="card-soft group relative overflow-hidden"
            >
              <Link href={`/admin/books/${b.id}`} className="block">
                <div className={`bg-gradient-to-br ${CARD_COLORS[i % CARD_COLORS.length]} relative h-28 p-5 text-white`}>
                  <BookOpen className="absolute -right-3 -bottom-4 h-28 w-28 opacity-20" />
                  {b.builtin ? (
                    <span className="rounded-full bg-white/25 px-2 py-0.5 text-xs font-bold">内置</span>
                  ) : null}
                  <h2 className="mt-2 text-xl font-black drop-shadow-sm">{b.name}</h2>
                </div>
                <div className="p-5">
                  <p className="line-clamp-2 min-h-10 text-sm text-ink-soft">{b.description || "暂无描述"}</p>
                  <div className="mt-4 flex gap-4 text-sm font-bold">
                    <span>
                      <span className="text-2xl text-brand-500">{b.unit_count}</span> 个单元
                    </span>
                    <span>
                      <span className="text-2xl text-mint-600">{b.word_count}</span> 个单词
                    </span>
                  </div>
                </div>
              </Link>
              <div className="absolute top-3 right-3 flex gap-1 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                <button onClick={() => setEdit(b)} className="rounded-xl bg-white/90 p-2 text-ink hover:bg-white" title="编辑">
                  <Pencil size={16} />
                </button>
                <button onClick={() => remove(b)} className="rounded-xl bg-white/90 p-2 text-coral-600 hover:bg-white" title="删除">
                  <Trash2 size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <Modal open={!!edit} onClose={() => setEdit(null)} title={edit?.id ? "编辑词库" : "新建词库"}>
        <div className="space-y-4">
          <Input label="名称" value={edit?.name ?? ""} onChange={(e) => setEdit({ ...edit, name: e.target.value })} placeholder="如：外研版 / 课外拓展" autoFocus />
          <Input label="描述" value={edit?.description ?? ""} onChange={(e) => setEdit({ ...edit, description: e.target.value })} />
          <Button className="w-full" size="lg" onClick={save}>
            保存
          </Button>
        </div>
      </Modal>

      <WordSearch open={searching} onClose={() => setSearching(false)} />
    </div>
  );
}
