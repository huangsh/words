"use client";
import { AnimatePresence, motion } from "motion/react";
import { forwardRef, useEffect } from "react";
import { X } from "lucide-react";

type Variant = "primary" | "secondary" | "success" | "danger" | "sun" | "ghost" | "grape";
const VARIANTS: Record<Variant, { cls: string; shadow: string }> = {
  primary: { cls: "bg-brand-400 text-white", shadow: "#1b6be0" },
  secondary: { cls: "bg-white text-ink border-2 border-slate-200", shadow: "#e2e8f0" },
  success: { cls: "bg-mint-500 text-white", shadow: "#24b872" },
  danger: { cls: "bg-coral-500 text-white", shadow: "#e85151" },
  sun: { cls: "bg-sun-500 text-ink", shadow: "#f5a623" },
  grape: { cls: "bg-grape-500 text-white", shadow: "#7c3aed" },
  ghost: { cls: "bg-transparent text-ink-soft hover:bg-slate-100", shadow: "transparent" },
};
const SIZES = {
  sm: "h-9 px-3 text-sm rounded-xl gap-1.5",
  md: "h-11 px-5 text-base rounded-2xl gap-2",
  lg: "h-14 px-7 text-lg rounded-2xl gap-2",
  xl: "h-16 px-8 text-xl rounded-3xl gap-3",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: keyof typeof SIZES;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", loading, className = "", children, disabled, style, ...rest },
  ref,
) {
  const v = VARIANTS[variant];
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={`${variant === "ghost" ? "" : "btn-3d"} inline-flex select-none items-center justify-center font-bold whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50 ${v.cls} ${SIZES[size]} ${className}`}
      style={{ ["--shadow-color" as string]: v.shadow, ...style }}
      {...rest}
    >
      {loading ? <Spinner className="h-5 w-5" /> : children}
    </button>
  );
});

export function Spinner({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={`animate-spin ${className}`} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="4" />
      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Loading({ text = "加载中…" }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-brand-400">
      <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 0.9 }} className="text-5xl">
        📚
      </motion.div>
      <span className="text-sm text-ink-soft">{text}</span>
    </div>
  );
}

export function Empty({ icon = "🗂️", title, children }: { icon?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3 py-16 text-center">
      <div className="text-6xl">{icon}</div>
      <div className="text-lg font-bold">{title}</div>
      {children && <div className="text-sm text-ink-soft">{children}</div>}
    </div>
  );
}

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { label?: string }>(
  function Input({ label, className = "", ...rest }, ref) {
    const el = (
      <input
        ref={ref}
        className={`h-12 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100 ${className}`}
        {...rest}
      />
    );
    if (!label) return el;
    return (
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-ink-soft">{label}</span>
        {el}
      </label>
    );
  },
);

export function Select({
  label,
  className = "",
  children,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string }) {
  const el = (
    <select
      className={`h-12 w-full rounded-2xl border-2 border-slate-200 bg-white px-3 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100 ${className}`}
      {...rest}
    >
      {children}
    </select>
  );
  if (!label) return el;
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink-soft">{label}</span>
      {el}
    </label>
  );
}

export function Modal({
  open,
  onClose,
  title,
  children,
  wide,
}: {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  wide?: boolean;
}) {
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={`card-soft max-h-[92dvh] w-full overflow-y-auto rounded-b-none p-6 sm:rounded-b-[1.75rem] ${wide ? "sm:max-w-3xl" : "sm:max-w-md"} safe-bottom`}
            initial={{ y: 60, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
            onClick={(e) => e.stopPropagation()}
          >
            {title && (
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-extrabold">{title}</h3>
                <button onClick={onClose} className="rounded-full p-2 text-ink-soft hover:bg-slate-100" aria-label="关闭">
                  <X size={20} />
                </button>
              </div>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function TagPill({
  name,
  color,
  active,
  onClick,
  small,
}: {
  name: string;
  color: string;
  active?: boolean;
  onClick?: () => void;
  small?: boolean;
}) {
  const Comp = onClick ? motion.button : motion.span;
  return (
    <Comp
      whileTap={onClick ? { scale: 0.92 } : undefined}
      onClick={onClick}
      className={`inline-flex items-center gap-1 rounded-full font-semibold transition ${small ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm"}`}
      style={{
        background: active === false ? "#f1f5f9" : color + "22",
        color: active === false ? "#94a3b8" : color,
        boxShadow: active ? `inset 0 0 0 2px ${color}` : undefined,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: active === false ? "#cbd5e1" : color }} />
      {name}
    </Comp>
  );
}

export function ProgressBar({ value, color = "#3DD68C", className = "h-3" }: { value: number; color?: string; className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-full bg-slate-100 ${className}`}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        animate={{ width: `${Math.max(0, Math.min(100, value * 100))}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />
    </div>
  );
}

export function confirmDialog(text: string) {
  return typeof window !== "undefined" && window.confirm(text);
}
