import { body, HttpError, int, ok, route } from "@/lib/api";
import { tx } from "@/lib/db";

/** 批量操作：打标签 / 去标签 / 移动到单元 / 删除 / 排序 */
export const POST = route("parent", async ({ req }) => {
  const b = await body<{ action: string; wordIds: unknown[]; tagId?: unknown; unitId?: unknown }>(req);
  const ids = (Array.isArray(b.wordIds) ? b.wordIds : []).map(Number).filter(Number.isInteger);
  if (!ids.length) throw new HttpError(400, "请先选择单词");
  tx((db) => {
    switch (b.action) {
      case "tag": {
        const s = db.prepare("INSERT OR IGNORE INTO word_tags(word_id, tag_id) VALUES(?, ?)");
        const t = int(b.tagId);
        ids.forEach((id) => s.run(id, t));
        break;
      }
      case "untag": {
        const s = db.prepare("DELETE FROM word_tags WHERE word_id = ? AND tag_id = ?");
        const t = int(b.tagId);
        ids.forEach((id) => s.run(id, t));
        break;
      }
      case "move": {
        const s = db.prepare("UPDATE words SET unit_id = ? WHERE id = ?");
        const u = int(b.unitId);
        ids.forEach((id) => s.run(u, id));
        break;
      }
      case "delete": {
        const s = db.prepare("DELETE FROM words WHERE id = ?");
        ids.forEach((id) => s.run(id));
        break;
      }
      case "reorder": {
        const s = db.prepare("UPDATE words SET sort = ? WHERE id = ?");
        ids.forEach((id, i) => s.run(i, id));
        break;
      }
      default:
        throw new HttpError(400, "未知操作");
    }
  });
  return ok({ count: ids.length });
});
