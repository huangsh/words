"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BarChart3, BookOpen, GraduationCap, LogOut, Tags, Upload, Users } from "lucide-react";
import { api } from "@/lib/client";

const NAV = [
  { href: "/admin", label: "词库", icon: BookOpen, match: (p: string) => p === "/admin" || p.startsWith("/admin/books") || p.startsWith("/admin/units") },
  { href: "/admin/import", label: "批量导入", icon: Upload },
  { href: "/admin/tags", label: "标签", icon: Tags },
  { href: "/admin/members", label: "家庭成员", icon: Users },
  { href: "/admin/stats", label: "学习统计", icon: BarChart3 },
];

export default function AdminNav({ user }: { user: { name: string; avatar: string } }) {
  const path = usePathname();
  const router = useRouter();
  async function logout() {
    await api("/api/auth/logout", { method: "POST" });
    router.replace("/login");
  }
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link href="/admin" className="flex shrink-0 items-center gap-2 text-lg font-black">
          <span className="text-2xl">📖</span>
          <span className="hidden sm:inline">单词乐园</span>
          <span className="rounded-lg bg-grape-500/10 px-2 py-0.5 text-xs font-bold text-grape-600">管理</span>
        </Link>
        <nav className="no-scrollbar -mx-1 flex flex-1 gap-1 overflow-x-auto px-1">
          {NAV.map((n) => {
            const active = n.match ? n.match(path) : path.startsWith(n.href);
            const Icon = n.icon;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`relative flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-bold transition ${active ? "text-brand-600" : "text-ink-soft hover:text-ink"}`}
              >
                {active && (
                  <motion.span
                    layoutId="admin-nav"
                    className="absolute inset-0 rounded-xl bg-brand-100"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <Icon size={17} className="relative" />
                <span className="relative">{n.label}</span>
              </Link>
            );
          })}
        </nav>
        <Link
          href="/learn"
          className="flex shrink-0 items-center gap-1.5 rounded-xl bg-sun-400/30 px-3 py-2 text-sm font-bold text-amber-700 hover:bg-sun-400/50"
          title="以自己的身份进入学习页"
        >
          <GraduationCap size={17} />
          <span className="hidden md:inline">学习</span>
        </Link>
        <button onClick={logout} className="flex shrink-0 items-center gap-1 rounded-xl p-2 text-ink-soft hover:bg-slate-100" title="退出登录">
          <span className="text-xl">{user.avatar}</span>
          <LogOut size={16} />
        </button>
      </div>
    </header>
  );
}
