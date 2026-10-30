import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import AdminNav from "./AdminNav";

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();
  if (!user) redirect("/login");
  if (user.role !== "parent") redirect("/learn");
  return (
    <div className="min-h-dvh">
      <AdminNav user={{ name: user.display_name, avatar: user.avatar }} />
      <main className="mx-auto max-w-6xl px-4 pt-4 pb-16 sm:px-6">{children}</main>
    </div>
  );
}
