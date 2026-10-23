export const AVATARS = ["🐼", "🐯", "🦊", "🐰", "🐱", "🐶", "🦁", "🐨", "🐸", "🐵", "🦄", "🐧", "🐻", "🐹", "🦉", "🐳", "🦖", "🐙"];
export const COLORS = ["#4FA3FF", "#3DD68C", "#FFC23C", "#FF6B6B", "#A55EEA", "#26C6DA", "#F368E0", "#FF9F43"];
export const GRADES = [1, 2, 3, 4, 5, 6];
export const GRADE_CN = ["", "一", "二", "三", "四", "五", "六"];
export const gradeLabel = (g: number, t: string) => `${GRADE_CN[g] ?? g}年级${t}册`;
export const BOX_LABELS = ["新词", "初识", "眼熟", "记住", "熟练", "掌握"];
export const BOX_COLORS = ["#CBD5E1", "#FF8787", "#FFC23C", "#84BDFF", "#5EE3A1", "#24B872"];
