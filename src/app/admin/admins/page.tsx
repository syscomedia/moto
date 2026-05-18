import { getAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { query } from "@/lib/db";
import AdminsClient from "@/app/admin/admins/AdminsClient";

export const dynamic = 'force-dynamic'; // Prevent caching, query postgres every load

export default async function AdminsPage() {
  // 1. Secure session verification
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  try {
    // 2. Fetch list of admins directly from database
    const res = await query('SELECT id, username, role, created_at FROM users ORDER BY id ASC');
    const admins = res.rows.map(row => ({
      id: row.id,
      username: row.username,
      role: row.role,
      created_at: row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at
    }));

    return (
      <AdminsClient 
        currentUserId={session.userId} 
        currentUsername={session.username} 
        currentRole={session.role} 
        initialAdmins={admins} 
      />
    );
  } catch (error) {
    console.error("Admins server page query failed:", error);
    
    // Fail-safe defaults
    const fallbackAdmins = [
      {
        id: session.userId,
        username: session.username,
        role: session.role,
        created_at: new Date().toISOString()
      }
    ];

    return (
      <AdminsClient 
        currentUserId={session.userId} 
        currentUsername={session.username} 
        currentRole={session.role} 
        initialAdmins={fallbackAdmins} 
      />
    );
  }
}
