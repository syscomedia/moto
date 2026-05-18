import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // 1. Total Visits
    const totalVisitsRes = await query('SELECT COUNT(*) as count FROM visitor_logs');
    const totalVisits = parseInt(totalVisitsRes.rows[0].count || '0', 10);

    // 2. Unique Visitors (count unique IP addresses)
    const uniqueVisitorsRes = await query('SELECT COUNT(DISTINCT ip_address) as count FROM visitor_logs');
    const uniqueVisitors = parseInt(uniqueVisitorsRes.rows[0].count || '0', 10);

    // 3. Top Countries
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

    // 4. Top Visited Pages
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

    // 5. Recent Visitor Logs (last 100 visits)
    const recentLogsRes = await query(`
      SELECT id, ip_address, country, page_path, user_agent, visited_at 
      FROM visitor_logs 
      ORDER BY visited_at DESC 
      LIMIT 100
    `);
    const recentLogs = recentLogsRes.rows;

    // 6. Daily Visits over the last 7 Days
    const last7DaysRes = await query(`
      SELECT TO_CHAR(visited_at, 'YYYY-MM-DD') as date, COUNT(*) as count
      FROM visitor_logs
      WHERE visited_at >= CURRENT_DATE - INTERVAL '6 days'
      GROUP BY date
      ORDER BY date ASC
    `);
    
    // Fill in dates that might have 0 visits to ensure a complete graph
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

    return NextResponse.json({
      success: true,
      stats: {
        totalVisits,
        uniqueVisitors,
        topCountries,
        topPages,
        recentLogs,
        last7Days
      }
    });
  } catch (error: any) {
    console.error('Error fetching statistics:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
