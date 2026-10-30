"use client";
import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Printer, Shuffle } from "lucide-react";
import { useApi } from "@/lib/client";
import { Button, Loading } from "@/components/ui";

interface WordItem {
  id: number;
  text: string;
  meaning: string;
  phonetic: string;
  pos: string;
  example: string;
  example_cn: string;
  sort: number;
  unit_name?: string;
  grade?: number;
  term?: string;
  book_name?: string;
}

interface Unit {
  id: number;
  book_id: number;
  grade: number;
  term: string;
  name: string;
  sort: number;
}

interface Book {
  id: number;
  name: string;
  description: string;
}

type PrintMode = "zh_to_en" | "en_to_zh" | "dictation";

/** 小学生英语规范书写·四线三格组件（四线全采用矢量高精度虚线） */
function FourLineGrid({ height = "md" }: { height?: "md" | "lg" }) {
  const isLg = height === "lg";
  const h = isLg ? 38 : 32;
  const y1 = 1;
  const y2 = isLg ? 13 : 11;
  const y3 = isLg ? 25 : 21;
  const y4 = isLg ? 37 : 31;

  return (
    <svg
      className="w-full block select-none"
      height={h}
      viewBox={`0 0 100 ${h}`}
      preserveAspectRatio="none"
      style={{ printColorAdjust: "exact", WebkitPrintColorAdjust: "exact" }}
      aria-label="四线三格规范书写区（四线均用虚线）"
    >
      {/* 第 1 线：顶线（虚线） */}
      <line
        x1="0"
        y1={y1}
        x2="100"
        y2={y1}
        stroke="#94a3b8"
        strokeWidth="1"
        strokeDasharray="4 3"
        vectorEffect="non-scaling-stroke"
      />
      {/* 第 2 线：中腰线（虚线） */}
      <line
        x1="0"
        y1={y2}
        x2="100"
        y2={y2}
        stroke="#94a3b8"
        strokeWidth="1"
        strokeDasharray="4 3"
        vectorEffect="non-scaling-stroke"
      />
      {/* 第 3 线：基准线（虚线，颜色稍深方便孩子端正坐落字母） */}
      <line
        x1="0"
        y1={y3}
        x2="100"
        y2={y3}
        stroke="#64748b"
        strokeWidth="1.2"
        strokeDasharray="4 3"
        vectorEffect="non-scaling-stroke"
      />
      {/* 第 4 线：底线下沉线（虚线） */}
      <line
        x1="0"
        y1={y4}
        x2="100"
        y2={y4}
        stroke="#94a3b8"
        strokeWidth="1"
        strokeDasharray="4 3"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function PrintPage() {
  return (
    <Suspense fallback={<Loading text="正在准备练习卷…" />}>
      <PrintWorksheetInner />
    </Suspense>
  );
}

function PrintWorksheetInner() {
  const router = useRouter();
  const sp = useSearchParams();
  const initialUnitId = sp.get("unitId") ? Number(sp.get("unitId")) : null;
  const initialBookId = sp.get("bookId") ? Number(sp.get("bookId")) : null;

  const [selectedBookId, setSelectedBookId] = useState<number | null>(initialBookId);
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(initialUnitId);

  // 练习卷模式：
  // 1. zh_to_en: 看中文写英文
  // 2. en_to_zh: 看英文写中文
  // 3. dictation: 纯听写卷（仅保留题号和横线，供家长报听写）
  const [mode, setMode] = useState<PrintMode>("zh_to_en");

  // 选项
  const [showHint, setShowHint] = useState(false); // 是否提供首字母与长度提示 (e.g. a _ _ _ _ e)
  const [showPhonetic, setShowPhonetic] = useState(true); // 是否展示音标
  const [showAnswerKey, setShowAnswerKey] = useState(true); // 是否附带家长答案对照页
  const [columns, setColumns] = useState<2 | 3>(2); // 2 列或 3 列
  const [randomize, setRandomize] = useState(false); // 随机乱序
  const [randomSeed, setRandomSeed] = useState(0);
  const [lineStyle, setLineStyle] = useState<"four_lines" | "single_line">("four_lines"); // 书写格线格式：四线三格 / 单横线
  const [gridHeight, setGridHeight] = useState<"md" | "lg">("md"); // 格高：md(32px 标准) / lg(38px 加宽大格)

  // 数据查询
  const booksQ = useApi<{ books: Book[] }>("/api/books");
  const unitsQ = useApi<{ units: Unit[] }>(selectedBookId ? `/api/books/${selectedBookId}` : null);
  const wordsQ = useApi<{ words: WordItem[] }>(selectedUnitId ? `/api/words?unitId=${selectedUnitId}` : null);

  // 默认选中第一个词库与单元
  useMemo(() => {
    if (!selectedBookId && booksQ.data?.books.length) {
      const bId = initialBookId || booksQ.data.books[0].id;
      setSelectedBookId(bId);
    }
  }, [booksQ.data, selectedBookId, initialBookId]);

  useMemo(() => {
    if (selectedBookId && unitsQ.data?.units.length && !selectedUnitId) {
      setSelectedUnitId(unitsQ.data.units[0].id);
    }
  }, [unitsQ.data, selectedBookId, selectedUnitId]);

  const rawWords = wordsQ.data?.words || [];

  const displayWords = useMemo(() => {
    if (!rawWords.length) return [];
    if (!randomize) return [...rawWords].sort((a, b) => a.sort - b.sort);
    // 乱序排序
    const arr = [...rawWords];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [rawWords, randomize, randomSeed]);

  const currentUnit = unitsQ.data?.units.find((u) => u.id === selectedUnitId);
  const currentBook = booksQ.data?.books.find((b) => b.id === selectedBookId);

  const titlePrefix = currentBook?.name ? `【${currentBook.name}】` : "";
  const unitTitle = currentUnit?.name || "英语单词练习";
  const paperTitle =
    mode === "zh_to_en"
      ? `${titlePrefix}${unitTitle} · 看中文写英文默写卷`
      : mode === "en_to_zh"
      ? `${titlePrefix}${unitTitle} · 看英文写中文测试卷`
      : `${titlePrefix}${unitTitle} · 听写测试卷（报听写专用）`;

  function handlePrint() {
    window.print();
  }

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 print:bg-white print:text-black">
      {/* 顶部控制面板（打印时自动隐藏） */}
      <div className="border-b border-slate-200 bg-white shadow-xs print:hidden sticky top-0 z-30">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => router.back()}
                className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-100 transition"
                title="返回上一页"
              >
                <ArrowLeft size={18} />
              </button>
              <div>
                <h1 className="flex items-center gap-2 text-lg font-black text-slate-900">
                  <Printer className="text-brand-600" size={20} />
                  <span>英语默写 / 听写练习纸一键生成</span>
                </h1>
                <p className="text-xs text-slate-500">
                  支持 A4 打印与另存为 PDF，含学生答卷及家长报词对照表
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Button
                variant="secondary"
                size="md"
                onClick={() => {
                  setRandomize(true);
                  setRandomSeed((s) => s + 1);
                }}
                className="gap-1.5 text-xs font-bold"
                title="打乱单词出题顺序"
              >
                <Shuffle size={14} />
                <span>随机乱序</span>
              </Button>
              <Button
                size="md"
                onClick={handlePrint}
                className="gap-2 text-sm font-extrabold shadow-sm px-5"
              >
                <Printer size={16} />
                <span>一键打印 / 另存为 PDF</span>
              </Button>
            </div>
          </div>

          {/* 筛选与模式控制工具栏 */}
          <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 pt-3 border-t border-slate-100">
            {/* 1. 词库与单元选择 */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">选择词库</label>
              <select
                value={selectedBookId ?? ""}
                onChange={(e) => {
                  setSelectedBookId(Number(e.target.value));
                  setSelectedUnitId(null);
                }}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold focus:border-brand-500 focus:outline-hidden"
              >
                {booksQ.data?.books.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">选择单元</label>
              <select
                value={selectedUnitId ?? ""}
                onChange={(e) => setSelectedUnitId(Number(e.target.value))}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold focus:border-brand-500 focus:outline-hidden"
              >
                {unitsQ.data?.units.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name} ({u.grade}年级{u.term})
                  </option>
                ))}
              </select>
            </div>

            {/* 2. 练习模式切换 */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">默写/听写模式</label>
              <div className="flex rounded-xl bg-slate-100 p-0.5 border border-slate-200/80">
                <button
                  type="button"
                  onClick={() => setMode("zh_to_en")}
                  className={`flex-1 rounded-lg py-1 text-xs font-bold transition ${
                    mode === "zh_to_en" ? "bg-white text-brand-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  看中写英
                </button>
                <button
                  type="button"
                  onClick={() => setMode("en_to_zh")}
                  className={`flex-1 rounded-lg py-1 text-xs font-bold transition ${
                    mode === "en_to_zh" ? "bg-white text-brand-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  看英写中
                </button>
                <button
                  type="button"
                  onClick={() => setMode("dictation")}
                  className={`flex-1 rounded-lg py-1 text-xs font-bold transition ${
                    mode === "dictation" ? "bg-white text-brand-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  家长听写卷
                </button>
              </div>
            </div>

            {/* 3. 辅助选项 */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">排版与附加选项</label>
              <div className="flex items-center gap-3 flex-wrap text-xs font-medium text-slate-700">
                <label className="inline-flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={columns === 3}
                    onChange={(e) => setColumns(e.target.checked ? 3 : 2)}
                    className="rounded border-slate-300 text-brand-600 focus:ring-0"
                  />
                  <span>3列紧凑</span>
                </label>
                <label className="inline-flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showAnswerKey}
                    onChange={(e) => setShowAnswerKey(e.target.checked)}
                    className="rounded border-slate-300 text-brand-600 focus:ring-0"
                  />
                  <span>附答案表</span>
                </label>
                {(mode === "zh_to_en" || mode === "dictation") && (
                  <>
                    <label
                      className="inline-flex items-center gap-1.5 cursor-pointer"
                      title="开启标准四线三格，帮助小朋友规范英文字母书写"
                    >
                      <input
                        type="checkbox"
                        checked={lineStyle === "four_lines"}
                        onChange={(e) => setLineStyle(e.target.checked ? "four_lines" : "single_line")}
                        className="rounded border-slate-300 text-brand-600 focus:ring-0"
                      />
                      <span className="font-bold text-brand-700">四线三格</span>
                    </label>
                    {lineStyle === "four_lines" && (
                      <label
                        className="inline-flex items-center gap-1.5 cursor-pointer"
                        title="加宽格高（38px），适合低年级初学者端正书写"
                      >
                        <input
                          type="checkbox"
                          checked={gridHeight === "lg"}
                          onChange={(e) => setGridHeight(e.target.checked ? "lg" : "md")}
                          className="rounded border-slate-300 text-brand-600 focus:ring-0"
                        />
                        <span>加宽大格</span>
                      </label>
                    )}
                  </>
                )}
                {mode === "zh_to_en" && (
                  <label className="inline-flex items-center gap-1.5 cursor-pointer" title="如：m _ _ _ _ e (6字母)">
                    <input
                      type="checkbox"
                      checked={showHint}
                      onChange={(e) => setShowHint(e.target.checked)}
                      className="rounded border-slate-300 text-brand-600 focus:ring-0"
                    />
                    <span>词长提示</span>
                  </label>
                )}
                {mode === "en_to_zh" && (
                  <label className="inline-flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showPhonetic}
                      onChange={(e) => setShowPhonetic(e.target.checked)}
                      className="rounded border-slate-300 text-brand-600 focus:ring-0"
                    />
                    <span>显示音标</span>
                  </label>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 练习纸主体（A4 标准排版） */}
      <main className="mx-auto max-w-4xl p-4 sm:p-8 print:p-0 print:max-w-none">
        {wordsQ.loading ? (
          <div className="py-20 text-center">
            <Loading text="正在生成标准化练习纸…" />
          </div>
        ) : !displayWords.length ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-xs border border-slate-200">
            <div className="text-4xl mb-2">📄</div>
            <div className="text-lg font-bold text-slate-800">该单元暂无单词</div>
            <p className="mt-1 text-xs text-slate-500">请在上方的下拉菜单中选择一个包含单词的单元</p>
          </div>
        ) : (
          <div className="space-y-8 print:space-y-0">
            {/* ══════════════ 第 1 部分：学生默写/答卷 ══════════════ */}
            <div className="rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-slate-200/80 print:shadow-none print:border-none print:p-4 print:pt-2">
              {/* 试卷卷头 */}
              <header className="border-b-2 border-slate-900 pb-3 text-center">
                <h2 className="text-xl sm:text-2xl font-black tracking-wide text-slate-900 font-serif">
                  {paperTitle}
                </h2>
                <div className="mt-3 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 px-2">
                  <span>姓名：<span className="inline-block w-24 border-b border-slate-800"></span></span>
                  <span>班级：<span className="inline-block w-24 border-b border-slate-800"></span></span>
                  <span>日期：<span className="inline-block w-28 border-b border-slate-800"></span></span>
                  <span>得分：<span className="inline-block w-20 border-b border-slate-800"></span> / 100</span>
                </div>
              </header>

              {/* 答题指导说明 */}
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 italic pb-2 border-b border-slate-200">
                <span>
                  {mode === "zh_to_en" &&
                    (lineStyle === "four_lines"
                      ? "【提示】请根据给出的中文释义与词性，在四线三格内端正、规范书写对应的英文单词。"
                      : "【提示】请根据给出的中文释义与词性，在横线上准确书写对应的英文单词。")}
                  {mode === "en_to_zh" && "【提示】请根据给出的英文单词，在横线上端正写出准确的中文释义。"}
                  {mode === "dictation" &&
                    (lineStyle === "four_lines"
                      ? "【提示】家长或老师报读单词，请注意听清发音，在四线三格内端正拼写出该单词。"
                      : "【提示】家长或老师报读单词，请注意听清发音，在对应题号横线上拼写出该单词。")}
                </span>
                <span className="not-italic font-bold font-mono">共 {displayWords.length} 题</span>
              </div>

              {/* 题目列表 */}
              <div
                className={`mt-4 grid gap-x-6 gap-y-5 ${
                  columns === 3 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
                }`}
              >
                {displayWords.map((w, i) => {
                  const num = String(i + 1).padStart(2, "0");

                  // 模式 1：看中文写英文
                  if (mode === "zh_to_en") {
                    let hintStr = "";
                    if (showHint) {
                      const clean = w.text.trim();
                      if (clean.length > 2) {
                        hintStr = `${clean[0]} ${" _".repeat(clean.length - 2)} ${clean[clean.length - 1]} (${clean.length}词)`;
                      } else {
                        hintStr = `(${clean.length}字母)`;
                      }
                    }

                    return (
                      <div
                        key={w.id}
                        className={`flex flex-col justify-between pb-3.5 pt-1 print:break-inside-avoid ${
                          lineStyle === "single_line" ? "border-b border-slate-200/90" : ""
                        }`}
                      >
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-mono text-xs font-bold text-slate-400 w-6 shrink-0">{num}.</span>
                            <span className="text-sm font-bold text-slate-800 leading-tight">
                              {w.pos && <span className="mr-1 italic text-slate-500 font-serif font-normal">{w.pos}</span>}
                              {w.meaning}
                            </span>
                          </div>
                          {hintStr && (
                            <div className="mt-0.5 pl-6 font-mono text-[11px] text-slate-400 tracking-wider">
                              {hintStr}
                            </div>
                          )}
                        </div>

                        {/* 英文书写区：四线三格（端正书写）或 单横线 */}
                        {lineStyle === "four_lines" ? (
                          <div className="mt-2.5 w-full">
                            <FourLineGrid height={gridHeight} />
                          </div>
                        ) : (
                          <div className="mt-3.5 pl-6 border-b border-dashed border-slate-400 h-6"></div>
                        )}
                      </div>
                    );
                  }

                  // 模式 2：看英文写中文
                  if (mode === "en_to_zh") {
                    return (
                      <div key={w.id} className="flex flex-col justify-end border-b border-slate-200/90 pb-2.5 print:break-inside-avoid">
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-mono text-xs font-bold text-slate-400 w-6 shrink-0">{num}.</span>
                          <span className="font-word text-base font-bold text-slate-900 tracking-wide">
                            {w.text}
                          </span>
                          {showPhonetic && w.phonetic && (
                            <span className="ml-1 text-xs text-slate-500 font-normal">
                              {w.phonetic}
                            </span>
                          )}
                          {w.pos && (
                            <span className="ml-1 text-xs italic text-slate-400 font-serif">
                              {w.pos}
                            </span>
                          )}
                        </div>
                        {/* 中文释义书写横线 */}
                        <div className="mt-3.5 pl-6 border-b border-dashed border-slate-400 h-6"></div>
                      </div>
                    );
                  }

                  // 模式 3：听写卷（家长报听写，纯保留题号与留白横线或四线格）
                  if (lineStyle === "four_lines") {
                    return (
                      <div key={w.id} className="flex flex-col justify-end pb-3.5 pt-1 print:break-inside-avoid">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="font-mono text-xs font-bold text-slate-500 w-6 shrink-0">{num}.</span>
                          <span className="text-[11px] text-slate-400 italic">报听写</span>
                        </div>
                        <FourLineGrid height={gridHeight} />
                      </div>
                    );
                  }

                  return (
                    <div key={w.id} className="flex items-end gap-2 border-b border-slate-200/90 pb-2 print:break-inside-avoid">
                      <span className="font-mono text-sm font-bold text-slate-500 w-7 shrink-0">{num}.</span>
                      <div className="flex-1 border-b-2 border-slate-400 h-7"></div>
                    </div>
                  );
                })}
              </div>

              {/* 答卷页脚 */}
              <div className="mt-8 text-center text-[11px] text-slate-400 print:mt-6 border-t border-slate-100 pt-2">
                单词乐园系统智能生成 · 保持自律，天天坚持！
              </div>
            </div>

            {/* ══════════════ 第 2 部分：家长听写对照卷 / 参考答案 ══════════════ */}
            {showAnswerKey && (
              <div className="rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-slate-200/80 print:shadow-none print:border-none print:p-4 print:pt-4 print:break-before-page">
                <header className="border-b-2 border-emerald-700 pb-2.5 text-center">
                  <div className="inline-block rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-black text-emerald-800 border border-emerald-200 print:hidden mb-1">
                    家长速查专用
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-emerald-900 font-serif">
                    【家长报听写速查表 / 参考答案】{unitTitle}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    方便家长按顺序报读单词、核对拼写，并可念出例句帮助孩子理解实际用法
                  </p>
                </header>

                <div className="mt-4 divide-y divide-slate-100 text-xs">
                  {displayWords.map((w, i) => {
                    const num = String(i + 1).padStart(2, "0");
                    return (
                      <div key={w.id} className="py-2.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 print:py-1.5 print:break-inside-avoid">
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono font-bold text-emerald-700 w-6 shrink-0">{num}.</span>
                          <span className="font-word text-sm font-extrabold text-slate-900">{w.text}</span>
                          {w.phonetic && <span className="text-slate-400 font-normal">{w.phonetic}</span>}
                          {w.pos && <span className="italic font-serif text-slate-500">{w.pos}</span>}
                          <span className="font-bold text-emerald-800 ml-1">{w.meaning}</span>
                        </div>
                        {w.example && (
                          <div className="text-slate-500 text-[11px] sm:max-w-md italic pl-8 sm:pl-0">
                            <span>“{w.example}”</span>
                            {w.example_cn && <span className="ml-1 text-slate-400 not-italic">({w.example_cn})</span>}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
