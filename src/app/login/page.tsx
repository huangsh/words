"use client";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button, Input, Loading } from "@/components/ui";
import { useToast } from "@/components/Toast";
import { api } from "@/lib/client";
import { AVATARS } from "@/lib/constants";

interface Member {
  id: number;
  display_name: string;
  avatar: string;
  color: string;
  role: "parent" | "child";
}

export default function LoginPage() {
  const router = useRouter();
  const toast = useToast();
  const [state, setState] = useState<{ initialized: boolean; users: Member[] } | null>(null);
  const [picked, setPicked] = useState<Member | null>(null);
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [shake, setShake] = useState(0);
  const pwRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    api<{ initialized: boolean; users: Member[] }>("/api/auth/members").then(setState);
  }, []);

  useEffect(() => {
    if (picked) setTimeout(() => pwRef.current?.focus(), 250);
  }, [picked]);

  async function login(e?: React.FormEvent) {
    e?.preventDefault();
    if (!picked || !password) return;
    setBusy(true);
    try {
      const r = await api<{ role: string }>("/api/auth/login", { body: { userId: picked.id, password } });
      router.replace(r.role === "parent" ? "/admin" : "/learn");
    } catch (err) {
      setShake((s) => s + 1);
      setPassword("");
      toast((err as Error).message, "error");
      setBusy(false);
    }
  }

  if (!state) return <Loading />;
  if (!state.initialized) return <SetupForm />;

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 py-10">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
        <motion.div
          className="mb-3 text-6xl"
          animate={{ rotate: [0, -8, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3, repeatDelay: 1 }}
        >
          📖
        </motion.div>
        <h1 className="text-3xl font-black tracking-wide sm:text-4xl">单词乐园</h1>
        <p className="mt-2 text-ink-soft">{picked ? "输入密码进入" : "你是谁呀？点一下自己的头像"}</p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!picked ? (
          <motion.div
            key="grid"
            className="grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3"
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, scale: 0.95 }}
            variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          >
            {state.users.map((u) => (
              <motion.button
                key={u.id}
                variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1 } }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => setPicked(u)}
                className="card-soft flex flex-col items-center gap-3 p-6"
              >
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full text-5xl"
                  style={{ background: u.color + "26" }}
                >
                  {u.avatar}
                </div>
                <div className="text-lg font-bold">{u.display_name}</div>
                {u.role === "parent" && (
                  <span className="rounded-full bg-grape-500/10 px-2 py-0.5 text-xs font-semibold text-grape-600">家长</span>
                )}
              </motion.button>
            ))}
          </motion.div>
        ) : (
          <motion.form
            key="pw"
            onSubmit={login}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="card-soft w-full max-w-sm p-8"
          >
            <motion.div
              key={shake}
              animate={shake ? { x: [0, -12, 12, -8, 8, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-4"
            >
              <div
                className="flex h-24 w-24 items-center justify-center rounded-full text-6xl"
                style={{ background: picked.color + "26" }}
              >
                {picked.avatar}
              </div>
              <div className="text-xl font-bold">{picked.display_name}</div>
              <Input
                ref={pwRef}
                type="password"
                placeholder="密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-center text-xl tracking-widest"
                autoComplete="current-password"
              />
              <Button type="submit" size="lg" className="w-full" loading={busy} disabled={!password}>
                进入
              </Button>
              <button
                type="button"
                onClick={() => (setPicked(null), setPassword(""))}
                className="flex items-center gap-1 text-sm text-ink-soft hover:text-ink"
              >
                <ArrowLeft size={16} /> 换一个人
              </button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </main>
  );
}

function SetupForm() {
  const router = useRouter();
  const toast = useToast();
  const [f, setF] = useState({ displayName: "爸爸妈妈", username: "parent", password: "", avatar: "🦉" });
  const [busy, setBusy] = useState(false);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      await api("/api/auth/setup", { body: f });
      toast("创建成功，欢迎使用！", "success");
      router.replace("/admin/members");
    } catch (err) {
      toast((err as Error).message, "error");
      setBusy(false);
    }
  }
  return (
    <main className="flex min-h-dvh items-center justify-center px-6 py-10">
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-soft w-full max-w-md space-y-5 p-8"
      >
        <div className="text-center">
          <div className="text-5xl">👋</div>
          <h1 className="mt-3 text-2xl font-black">欢迎使用单词乐园</h1>
          <p className="mt-1 text-sm text-ink-soft">先创建一个家长账号，用来管理词库和孩子的账号</p>
        </div>
        <div>
          <span className="mb-1.5 block text-sm font-semibold text-ink-soft">头像</span>
          <div className="flex flex-wrap gap-2">
            {AVATARS.slice(0, 12).map((a) => (
              <button
                type="button"
                key={a}
                onClick={() => setF({ ...f, avatar: a })}
                className={`flex h-11 w-11 items-center justify-center rounded-full text-2xl transition ${f.avatar === a ? "bg-brand-100 ring-2 ring-brand-400" : "bg-slate-50"}`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
        <Input label="称呼" value={f.displayName} onChange={(e) => setF({ ...f, displayName: e.target.value })} />
        <Input label="登录名" value={f.username} onChange={(e) => setF({ ...f, username: e.target.value })} />
        <Input
          label="密码（至少 4 位）"
          type="password"
          value={f.password}
          onChange={(e) => setF({ ...f, password: e.target.value })}
          autoComplete="new-password"
        />
        <Button type="submit" size="lg" className="w-full" loading={busy}>
          开始使用
        </Button>
      </motion.form>
    </main>
  );
}
