import { getAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import LoginFormClient from "@/app/admin/login/LoginFormClient";

export const dynamic = 'force-dynamic';

export default async function AdminLoginPage() {
  // Server-side check if already logged in
  const session = await getAdminSession();
  if (session) {
    redirect("/admin/dashboard");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center relative overflow-hidden font-sans">
      {/* GLOW EFFECTS */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* GEOMETRIC WATERMARK GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

      <div className="w-full max-w-md p-8 relative z-10">
        <LoginFormClient />
      </div>
    </div>
  );
}
