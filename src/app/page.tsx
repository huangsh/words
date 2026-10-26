import { redirect } from "next/navigation";
import { getSessionUser, hasUsers } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function Home() {
  if (!hasUsers()) redirect("/login");
  const user = await getSessionUser();
  if (!user) redirect("/login");
  redirect("/learn");
}
