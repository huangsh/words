"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";
import { Input, Modal } from "@/components/ui";
import { api } from "@/lib/client";
import { gradeLabel } from "@/lib/constants";
import { speak } from "@/lib/speech";

interface Hit {
  id: number;
  unit_id: number;
  text: string;
  meaning: string;
  emoji: string;
  unit_name: string;
  book_name: string;
  grade: number;
  term: string;
}

export function WordSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const [hits, setHits] = useState<Hit[]>([]);
  useEffect(() => {
    if (!q.trim()) return setHits([]);
    const t = setTimeout(() => {
      api<{ words: Hit[] }>(`/api/words?q=${encodeURIComponent(q.trim())}`).then((r) => setHits(r.words.slice(0, 60)));
    }, 250);
    return () => clearTimeout(t);
  }, [q]);
  return (
    <Modal open={open} onClose={onClose} title="搜索单词" wide>
      <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="输入英文或中文…" autoFocus />
      <div className="mt-4 max-h-[60dvh] divide-y divide-slate-100 overflow-y-auto">
        {hits.map((h) => (
          <div key={h.id} className="flex items-center gap-3 py-3">
            <button onClick={() => speak(h.text)} className="rounded-full p-2 text-brand-500 hover:bg-brand-50">
              <Volume2 size={18} />
            </button>
            <div className="min-w-0 flex-1">
              <div className="font-word text-lg font-bold">
                {h.emoji} {h.text} <span className="ml-2 text-sm font-normal text-ink-soft">{h.meaning}</span>
              </div>
              <div className="text-xs text-ink-soft">
                {h.book_name} · {gradeLabel(h.grade, h.term)} · {h.unit_name}
              </div>
            </div>
            <Link href={`/admin/units/${h.unit_id}`} onClick={onClose} className="text-sm font-bold text-brand-500">
              查看
            </Link>
          </div>
        ))}
        {q && !hits.length && <div className="py-10 text-center text-ink-soft">没有找到</div>}
      </div>
    </Modal>
  );
}
