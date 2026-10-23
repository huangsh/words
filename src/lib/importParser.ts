/**
 * 批量导入解析器（前后端共用，纯函数）
 *
 * 支持的格式（每行一个单词）：
 *   apple | 苹果
 *   apple	苹果	[ˈæpl]	n.          ← 直接从 Excel 复制（Tab 分隔）
 *   apple, 苹果, n.
 *   pencil box 铅笔盒                   ← 空格分隔也可，自动按中文切分
 *   apple | n. 苹果 | /ˈæpl/ | I like apples. | 我喜欢苹果。 | #水果 #重点
 *
 * 用 "#" 开头的行切换年级/单元：
 *   # 3上 Unit 1 Hello!
 *   # 4下 Unit 2 What time is it?
 *   # Unit 3 Colours                  ← 沿用上一个年级
 */

export interface ParsedRow {
  line: number;
  text: string;
  meaning: string;
  phonetic: string;
  pos: string;
  example: string;
  example_cn: string;
  tags: string[];
}

export interface ParsedSection {
  grade: number | null;
  term: "上" | "下" | null;
  unitName: string | null;
  rows: ParsedRow[];
}

export interface ParseResult {
  sections: ParsedSection[];
  errors: { line: number; message: string }[];
}

const POS_RE = /^(n|v|vt|vi|adj|adv|prep|pron|conj|num|art|int|interj|phr|aux|modal)\.?$/i;
const POS_PREFIX_RE = /^((?:n|v|vt|vi|adj|adv|prep|pron|conj|num|art|int|interj|phr|aux)\.(?:\s*[&/]\s*(?:n|v|adj|adv)\.)?)\s*/i;
const PHONETIC_RE = /^[[/].+[\]/]$/;
const CJK_RE = /[\u3400-\u9fff\uff00-\uffef（）]/;
const HEADER_WORDS = new Set(["单词", "英文", "word", "words", "english"]);

function splitFields(line: string): string[] {
  if (line.includes("\t")) return line.split("\t");
  if (line.includes("|")) return line.split("|");
  if (line.includes("｜")) return line.split("｜");
  if (line.includes(",") || line.includes("，")) {
    const parts = line.split(/[,，]/);
    if (parts.length > 1 && (CJK_RE.test(parts[1]) || PHONETIC_RE.test(parts[1].trim()) || POS_RE.test(parts[1].trim())))
      return parts;
  }
  // 空格分隔：从第一个中文/音标符号处切开
  const m = line.match(/^([A-Za-z][A-Za-z\s'’\-.!?]*?)\s+((?:[[/]|(?:n|v|adj|adv|prep|pron|conj|num)\.|[\u3400-\u9fff（]).*)$/);
  if (m) {
    const rest = m[2].trim();
    const ph = rest.match(/^([[/][^\]/]+[\]/])\s*(.*)$/);
    return ph ? [m[1], ph[2], ph[1]] : [m[1], rest];
  }
  return [line];
}

export function parseImportText(input: string): ParseResult {
  const sections: ParsedSection[] = [];
  const errors: ParseResult["errors"] = [];
  let current: ParsedSection = { grade: null, term: null, unitName: null, rows: [] };
  sections.push(current);
  let lastGrade: number | null = null;
  let lastTerm: "上" | "下" | null = null;

  input.split(/\r?\n/).forEach((raw, i) => {
    const lineNo = i + 1;
    const line = raw.trim();
    if (!line) return;

    if (line.startsWith("#")) {
      const h = line.replace(/^#+\s*/, "");
      const m = h.match(/^(?:([1-6一二三四五六])\s*(?:年级)?\s*([上下])?\s*册?\s*)?(.*)$/);
      const cn: Record<string, number> = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 };
      let grade = m?.[1] ? (cn[m[1]] ?? Number(m[1])) : lastGrade;
      const term = (m?.[2] as "上" | "下" | undefined) ?? (m?.[1] ? "上" : lastTerm);
      const name = (m?.[3] ?? "").trim();
      if (!name) {
        errors.push({ line: lineNo, message: "单元名称不能为空" });
        return;
      }
      if (!grade) grade = null;
      lastGrade = grade;
      lastTerm = term;
      current = { grade, term, unitName: name, rows: [] };
      sections.push(current);
      return;
    }

    const fields = splitFields(line)
      .map((f) => f.trim())
      .filter((f, idx) => idx === 0 || f !== "");
    const text = fields[0]?.replace(/\s+/g, " ");
    if (!text || HEADER_WORDS.has(text.toLowerCase())) return;
    if (!/[A-Za-z]/.test(text) || CJK_RE.test(text)) {
      errors.push({ line: lineNo, message: `第一列应为英文单词：${text}` });
      return;
    }

    const row: ParsedRow = { line: lineNo, text, meaning: "", phonetic: "", pos: "", example: "", example_cn: "", tags: [] };
    const rest: string[] = [];
    for (const f of fields.slice(1)) {
      if (f.startsWith("#")) {
        row.tags.push(
          ...f
            .split(/[#\s,，]+/)
            .map((t) => t.trim())
            .filter(Boolean),
        );
      } else if (!row.phonetic && PHONETIC_RE.test(f)) row.phonetic = f;
      else if (!row.pos && POS_RE.test(f)) row.pos = f.endsWith(".") ? f : f + ".";
      else rest.push(f);
    }
    // 剩余字段：释义、例句、例句翻译（按出现顺序，中文优先给释义）
    const meaningIdx = rest.findIndex((f) => CJK_RE.test(f));
    if (meaningIdx >= 0) row.meaning = rest.splice(meaningIdx, 1)[0];
    else if (rest.length && !/[A-Za-z]{2,}\s+[A-Za-z]{2,}/.test(rest[0])) row.meaning = rest.shift()!;
    const pm = row.meaning.match(POS_PREFIX_RE);
    if (pm) {
      if (!row.pos) row.pos = pm[1];
      row.meaning = row.meaning.slice(pm[0].length).trim();
    }
    const exIdx = rest.findIndex((f) => /[A-Za-z]/.test(f) && !CJK_RE.test(f));
    if (exIdx >= 0) row.example = rest.splice(exIdx, 1)[0];
    if (rest.length) row.example_cn = rest.shift()!;

    if (!row.meaning) errors.push({ line: lineNo, message: `"${text}" 缺少中文释义（仍可导入）` });
    current.rows.push(row);
  });

  return { sections: sections.filter((s) => s.rows.length || s.unitName), errors };
}

export const IMPORT_TEMPLATE = `# 3上 Unit 1 Hello!
ruler | 尺子
pencil | n. 铅笔 | /ˈpensl/
pencil box | 铅笔盒 | #短语
# 3上 Unit 2 Colours
red | 红色的 | | | I like red. | 我喜欢红色。 | #重点
green	绿色的`;
