import { getAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { query } from "@/lib/db";
import DashboardClient from "@/app/admin/dashboard/DashboardClient";

export const dynamic = 'force-dynamic'; // Force dynamic rendering so database is always queried fresh

export default async function AdminDashboardPage() {
  // 1. Protect route with secure session verification
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  try {
    // 2. Fetch statistics directly on the server
    // Total Visits
    const totalVisitsRes = await query('SELECT COUNT(*) as count FROM visitor_logs');
    const totalVisits = parseInt(totalVisitsRes.rows[0].count || '0', 10);

    // Unique Visitors
    const uniqueVisitorsRes = await query('SELECT COUNT(DISTINCT ip_address) as count FROM visitor_logs');
    const uniqueVisitors = parseInt(uniqueVisitorsRes.rows[0].count || '0', 10);

    // Top Countries
    const topCountriesRes = await query(`
      SELECT country, COUNT(*) as count 
      FROM visitor_logs 
      GROUP BY country 
      ORDER BY count DESC 
      LIMIT 10
    `);
    const topCountries = topCountriesRes.rows.map(row => ({
      country: row.country,
      count: parseInt(row.count, 10)
    }));

    // Top Pages
    const topPagesRes = await query(`
      SELECT page_path, COUNT(*) as count 
      FROM visitor_logs 
      GROUP BY page_path 
      ORDER BY count DESC 
      LIMIT 10
    `);
    const topPages = topPagesRes.rows.map(row => ({
      page: row.page_path,
      count: parseInt(row.count, 10)
    }));

    // Recent Logs (serialize date to ISO string for client component compatibility)
    const recentLogsRes = await query(`
      SELECT id, ip_address, country, page_path, user_agent, visited_at 
      FROM visitor_logs 
      ORDER BY visited_at DESC 
      LIMIT 100
    `);
    const recentLogs = recentLogsRes.rows.map(row => ({
      ...row,
      visited_at: row.visited_at instanceof Date ? row.visited_at.toISOString() : row.visited_at
    }));

    // Daily Visits for the last 7 Days
    const last7DaysRes = await query(`
      SELECT TO_CHAR(visited_at, 'YYYY-MM-DD') as date, COUNT(*) as count
      FROM visitor_logs
      WHERE visited_at >= CURRENT_DATE - INTERVAL '6 days'
      GROUP BY date
      ORDER BY date ASC
    `);

    // Fill empty dates
    const last7DaysMap = new Map<string, number>();
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      last7DaysMap.set(dateStr, 0);
    }
    
    last7DaysRes.rows.forEach(row => {
      if (last7DaysMap.has(row.date)) {
        last7DaysMap.set(row.date, parseInt(row.count, 10));
      }
    });

    const last7Days = Array.from(last7DaysMap.entries()).map(([date, count]) => ({
      date,
      count
    }));

    const stats = {
      totalVisits,
      uniqueVisitors,
      topCountries,
      topPages,
      recentLogs,
      last7Days
    };

    return (
      <DashboardClient 
        username={session.username} 
        role={session.role} 
        initialStats={stats} 
      />
    );
  } catch (error) {
    console.error("Failed to query dashboard statistics:", error);
    
    // Fallback safe defaults if db is initializing
    const fallbackStats = {
      totalVisits: 0,
      uniqueVisitors: 0,
      topCountries: [],
      topPages: [],
      recentLogs: [],
      last7Days: []
    };
    
    return (
      <DashboardClient 
        username={session.username} 
        role={session.role} 
        initialStats={fallbackStats} 
      />
    );
  }
}
