"use client";

/** 浏览器语音合成（TTS） */
let voice: SpeechSynthesisVoice | null = null;
let voicesLoaded = false;

function pickVoice() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return;
  voicesLoaded = true;
  const prefer = ["Samantha", "Google US English", "Microsoft Aria", "Microsoft Jenny", "Karen", "Daniel", "Alex"];
  voice =
    prefer.map((n) => voices.find((v) => v.name.includes(n))).find(Boolean) ??
    voices.find((v) => v.lang === "en-US") ??
    voices.find((v) => v.lang.startsWith("en")) ??
    null;
}

if (typeof window !== "undefined" && "speechSynthesis" in window) {
  pickVoice();
  window.speechSynthesis.onvoiceschanged = pickVoice;
}

export function canSpeak() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function speak(text: string, opts: { rate?: number; lang?: string } = {}) {
  if (!canSpeak() || !text) return;
  if (!voicesLoaded) pickVoice();
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const isZh = opts.lang?.startsWith("zh");
  if (!isZh && voice) u.voice = voice;
  u.lang = opts.lang ?? voice?.lang ?? "en-US";
  u.rate = opts.rate ?? (text.length <= 12 ? 0.8 : 0.9);
  u.pitch = 1.05;
  synth.speak(u);
}

/** 小音效（Web Audio，无需素材） */
let ctx: AudioContext | null = null;
export function sfx(kind: "correct" | "wrong" | "tap" | "finish") {
  try {
    ctx ??= new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const notes: Record<typeof kind, [number, number][]> = {
      correct: [
        [660, 0],
        [880, 0.09],
      ],
      wrong: [
        [300, 0],
        [220, 0.12],
      ],
      tap: [[520, 0]],
      finish: [
        [523, 0],
        [659, 0.12],
        [784, 0.24],
        [1047, 0.36],
      ],
    };
    const now = ctx.currentTime;
    for (const [freq, t] of notes[kind]) {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = kind === "wrong" ? "triangle" : "sine";
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, now + t);
      g.gain.exponentialRampToValueAtTime(kind === "tap" ? 0.06 : 0.18, now + t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + t + (kind === "finish" ? 0.35 : 0.2));
      o.connect(g).connect(ctx.destination);
      o.start(now + t);
      o.stop(now + t + 0.4);
    }
  } catch {
    /* ignore */
  }
}
