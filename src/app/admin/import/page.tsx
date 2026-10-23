"use client";
import { motion } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { AlertTriangle, CheckCircle2, FileUp, Sparkles } from "lucide-react";
import { Button, Loading, Select, TagPill } from "@/components/ui";
import { useToast } from "@/components/Toast";
import type { Tag } from "@/components/WordEditor";
import { api, useApi } from "@/lib/client";
import { GRADES, gradeLabel } from "@/lib/constants";
import { IMPORT_TEMPLATE, type ParsedRow } from "@/lib/importParser";

interface Book {
  id: number;
  name: string;
}
interface Unit {
  id: number;
  grade: number;
  term: string;
  name: string;
}
interface PreviewPlan {
  unit: { id: number | null; name: string; grade: number; term: string; isNew: boolean };
  rows: (ParsedRow & { status: "new" | "dup" | "repeat"; existingId?: number })[];
}
interface PreviewResponse {
  plan: PreviewPlan[];
  errors: { line: number; message: string }[];
  summary: { units: number; newUnits: number; newWords: number; dupWords: number };
}

export default function ImportPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ImportInner />
    </Suspense>
  );
}

function ImportInner() {
  const sp = useSearchParams();
  const router = useRouter();
  const toast = useToast();

  const booksQ = useApi<{ books: Book[] }>("/api/books");
  const tagsQ = useApi<{ tags: Tag[] }>("/api/tags");
  const [bookId, setBookId] = useState<number>(Number(sp.get("bookId")) || 0);
  const [unitId, setUnitId] = useState<number>(Number(sp.get("unitId")) || 0);
  const [grade, setGrade] = useState<number>(3);
  const [term, setTerm] = useState<"上" | "下">("上");
  const [tagIds, setTagIds] = useState<number[]>([]);
  const [duplicate, setDuplicate] = useState<"skip" | "update">("skip");
  const [text, setText] = useState("");
  const [preview, setPreview] = useState<PreviewResponse | null>(null);
  const [busy, setBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!bookId && booksQ.data?.books.length) setBookId(booksQ.data.books[0].id);
  }, [booksQ.data, bookId]);

  const unitsQ = useApi<{ units: Unit[] }>(bookId ? `/api/books/${bookId}` : null);

  async function handlePreview() {
    if (!bookId || !text.trim()) return toast("请先输入或粘贴单词内容", "error");
    setBusy(true);
    try {
      const res = await api<PreviewResponse>("/api/import", {
        body: { bookId, unitId: unitId || undefined, grade, term, text, tagIds, duplicate, commit: false },
      });
      setPreview(res);
    } catch (e) {
      toast((e as Error).message, "error");
    } finally {
      setBusy(false);
    }
  }

  async function handleCommit() {
    if (!bookId || !text.trim()) return;
    setBusy(true);
    try {
      const res = await api<{ added: number; updated: number; createdUnits: number }>("/api/import", {
        body: { bookId, unitId: unitId || undefined, grade, term, text, tagIds, duplicate, commit: true },
      });
      toast(`导入成功！新增 ${res.added} 词，更新 ${res.updated} 词`, "success");
      if (unitId) router.push(`/admin/units/${unitId}`);
      else router.push(`/admin/books/${bookId}`);
    } catch (e) {
      toast((e as Error).message, "error");
      setBusy(false);
    }
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setText(String(reader.result || ""));
      setPreview(null);
      toast(`已加载文件 ${file.name}`, "info");
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  const toggleTag = (id: number) =>
    setTagIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black sm:text-3xl">批量导入单词</h1>
          <p className="text-sm text-ink-soft">支持粘贴文本、Excel 直接复制、CSV 文件上传，支持用 # 自动创建年级和单元</p>
        </div>
        <div className="flex gap-2">
          <input ref={fileRef} type="file" accept=".txt,.csv,.tsv" className="hidden" onChange={handleFile} />
          <Button variant="secondary" size="sm" onClick={() => fileRef.current?.click()}>
            <FileUp size={16} /> 上传 CSV / TXT
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setText(IMPORT_TEMPLATE);
              setPreview(null);
            }}
          >
            <Sparkles size={16} /> 填入示例模板
          </Button>
        </div>
      </div>

      <div className="card-soft grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
        <Select label="目标词库" value={bookId} onChange={(e) => (setBookId(Number(e.target.value)), setUnitId(0), setPreview(null))}>
          {booksQ.data?.books.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </Select>

        <Select label="目标单元（无 # 标题行时生效）" value={unitId} onChange={(e) => (setUnitId(Number(e.target.value)), setPreview(null))}>
          <option value={0}>由文本中的 # 标题行决定</option>
          {unitsQ.data?.units.map((u) => (
            <option key={u.id} value={u.id}>
              {gradeLabel(u.grade, u.term)} · {u.name}
            </option>
          ))}
        </Select>

        <div className="grid grid-cols-2 gap-2">
          <Select label="默认年级" value={grade} onChange={(e) => setGrade(Number(e.target.value))}>
            {GRADES.map((g) => (
              <option key={g} value={g}>
                {g} 年级
              </option>
            ))}
          </Select>
          <Select label="默认册" value={term} onChange={(e) => setTerm(e.target.value as "上" | "下")}>
            <option value="上">上册</option>
            <option value="下">下册</option>
          </Select>
        </div>

        <Select label="遇到重复单词" value={duplicate} onChange={(e) => setDuplicate(e.target.value as "skip" | "update")}>
          <option value="skip">跳过（保留原内容）</option>
          <option value="update">更新释义/音标/例句</option>
        </Select>

        {tagsQ.data?.tags.length ? (
          <div className="sm:col-span-2 lg:col-span-4">
            <span className="mb-1.5 block text-sm font-semibold text-ink-soft">同时为本次导入的所有单词打上标签（可选）：</span>
            <div className="flex flex-wrap gap-2">
              {tagsQ.data.tags.map((t) => (
                <TagPill key={t.id} name={t.name} color={t.color} active={tagIds.includes(t.id)} onClick={() => toggleTag(t.id)} />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="card-soft p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-bold">粘贴单词列表（每行一个）</span>
          <span className="text-xs text-ink-soft">格式：英文 | 中文 | 音标 | 例句 | #标签（分隔符支持 |、Tab、逗号、空格）</span>
        </div>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setPreview(null);
          }}
          rows={10}
          placeholder={IMPORT_TEMPLATE}
          className="font-mono w-full rounded-2xl border-2 border-slate-200 bg-slate-50/50 p-4 text-sm outline-none transition focus:border-brand-400 focus:bg-white"
        />
        <div className="mt-4 flex justify-end gap-3">
          <Button variant="secondary" size="lg" onClick={handlePreview} loading={busy && !preview} disabled={!text.trim()}>
            预览并校验
          </Button>
          {preview && (
            <Button variant="success" size="lg" onClick={handleCommit} loading={busy} disabled={preview.summary.newWords === 0 && (duplicate === "skip" || preview.summary.dupWords === 0)}>
              确认导入（{preview.summary.newWords} 新增{duplicate === "update" && preview.summary.dupWords ? ` / ${preview.summary.dupWords} 更新` : ""}）
            </Button>
          )}
        </div>
      </div>

      {preview && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="card-soft flex flex-wrap items-center gap-6 p-5">
            <div className="flex items-center gap-2 font-bold text-mint-600">
              <CheckCircle2 size={20} /> 解析完成
            </div>
            <div className="text-sm">
              共 <b>{preview.summary.units}</b> 个单元（其中新建 <b>{preview.summary.newUnits}</b> 个） · 新单词{" "}
              <b className="text-mint-600">{preview.summary.newWords}</b> 个 · 已存在{" "}
              <b className="text-amber-600">{preview.summary.dupWords}</b> 个
            </div>
          </div>

          {preview.errors.length > 0 && (
            <div className="card-soft border-2 border-amber-200 bg-amber-50/70 p-4">
              <div className="mb-2 flex items-center gap-1.5 font-bold text-amber-800">
                <AlertTriangle size={18} /> 提示（{preview.errors.length} 处）
              </div>
              <ul className="space-y-1 text-xs text-amber-900">
                {preview.errors.map((err, i) => (
                  <li key={i}>
                    第 {err.line} 行：{err.message}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {preview.plan.map((p, idx) => (
            <div key={idx} className="card-soft overflow-hidden">
              <div className="flex items-center justify-between bg-slate-50 px-5 py-3">
                <div className="font-bold">
                  {gradeLabel(p.unit.grade, p.unit.term)} · {p.unit.name}
                  {p.unit.isNew && (
                    <span className="ml-2 rounded-full bg-brand-100 px-2 py-0.5 text-xs font-bold text-brand-600">新建单元</span>
                  )}
                </div>
                <span className="text-xs text-ink-soft">{p.rows.length} 词</span>
              </div>
              <div className="divide-y divide-slate-100">
                {p.rows.map((r, ri) => (
                  <div key={ri} className="flex flex-wrap items-center gap-3 px-5 py-2.5 text-sm">
                    <span
                      className={`rounded-md px-1.5 py-0.5 text-xs font-bold ${
                        r.status === "new"
                          ? "bg-mint-300/40 text-mint-600"
                          : r.status === "dup"
                            ? "bg-sun-300/50 text-amber-700"
                            : "bg-slate-200 text-ink-soft"
                      }`}
                    >
                      {r.status === "new" ? "新增" : r.status === "dup" ? "已存在" : "同行重复"}
                    </span>
                    <span className="font-word font-bold">{r.text}</span>
                    {r.phonetic && <span className="text-ink-soft">{r.phonetic}</span>}
                    {r.pos && <span className="text-ink-soft italic">{r.pos}</span>}
                    <span>{r.meaning || <em className="text-amber-600">无释义</em>}</span>
                    {r.example && <span className="text-xs text-ink-soft">例：{r.example}</span>}
                    {r.tags.map((t) => (
                      <span key={t} className="rounded-full bg-grape-500/10 px-2 py-0.5 text-xs font-semibold text-grape-600">
                        #{t}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
