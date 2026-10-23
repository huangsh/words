"use client";
import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";
import { Button, Input, Modal, TagPill } from "@/components/ui";
import { speak } from "@/lib/speech";

export interface Tag {
  id: number;
  name: string;
  color: string;
  word_count?: number;
}
export interface Word {
  id: number;
  unit_id: number;
  text: string;
  meaning: string;
  phonetic: string;
  pos: string;
  example: string;
  example_cn: string;
  emoji: string;
  tag_ids: number[];
  box: number;
}

const EMPTY = { text: "", meaning: "", phonetic: "", pos: "", example: "", example_cn: "", emoji: "", tag_ids: [] as number[] };

export function WordEditor({
  open,
  word,
  tags,
  onClose,
  onSave,
}: {
  open: boolean;
  word: Partial<Word> | null;
  tags: Tag[];
  onClose: () => void;
  onSave: (w: Partial<Word>, keepOpen: boolean) => Promise<boolean>;
}) {
  const [f, setF] = useState<Partial<Word>>(EMPTY);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (open) setF({ ...EMPTY, ...word });
  }, [open, word]);

  const set = (k: keyof Word) => (e: React.ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: e.target.value });
  const toggleTag = (id: number) =>
    setF({ ...f, tag_ids: f.tag_ids?.includes(id) ? f.tag_ids.filter((t) => t !== id) : [...(f.tag_ids ?? []), id] });

  async function submit(keepOpen: boolean) {
    setBusy(true);
    const ok = await onSave(f, keepOpen);
    setBusy(false);
    if (ok && keepOpen) setF({ ...EMPTY, tag_ids: f.tag_ids });
  }

  return (
    <Modal open={open} onClose={onClose} title={word?.id ? "编辑单词" : "添加单词"} wide>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(!word?.id);
        }}
        className="space-y-4"
      >
        <div className="grid gap-3 sm:grid-cols-[1fr_1fr_90px]">
          <div className="relative">
            <Input label="英文 *" value={f.text} onChange={set("text")} autoFocus className="font-word pr-11 text-lg font-bold" autoCapitalize="off" autoCorrect="off" spellCheck={false} />
            <button type="button" onClick={() => speak(f.text ?? "")} className="absolute right-2 bottom-2 rounded-xl p-1.5 text-brand-500 hover:bg-brand-50">
              <Volume2 size={20} />
            </button>
          </div>
          <Input label="中文释义" value={f.meaning} onChange={set("meaning")} />
          <Input label="图标" value={f.emoji} onChange={set("emoji")} placeholder="🍎" className="text-center text-xl" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input label="音标" value={f.phonetic} onChange={set("phonetic")} placeholder="/ˈæpl/" />
          <Input label="词性" value={f.pos} onChange={set("pos")} placeholder="n." />
        </div>
        <Input label="例句" value={f.example} onChange={set("example")} placeholder="I like apples." />
        <Input label="例句翻译" value={f.example_cn} onChange={set("example_cn")} placeholder="我喜欢苹果。" />
        {tags.length > 0 && (
          <div>
            <span className="mb-2 block text-sm font-semibold text-ink-soft">标签</span>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <TagPill key={t.id} name={t.name} color={t.color} active={f.tag_ids?.includes(t.id) ?? false} onClick={() => toggleTag(t.id)} />
              ))}
            </div>
          </div>
        )}
        <div className="flex gap-3 pt-2">
          {!word?.id && (
            <Button type="button" variant="secondary" size="lg" className="flex-1" onClick={() => submit(false)} disabled={!f.text}>
              保存并关闭
            </Button>
          )}
          <Button type="submit" size="lg" className="flex-1" loading={busy} disabled={!f.text}>
            {word?.id ? "保存" : "保存，继续添加"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
