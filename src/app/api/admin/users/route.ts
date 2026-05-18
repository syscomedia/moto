import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';
import { hashPassword } from '@/lib/auth-utils';

// GET all admin users (Protected)
export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const res = await query('SELECT id, username, role, created_at FROM users ORDER BY id ASC');
    return NextResponse.json({ success: true, users: res.rows });
  } catch (error: any) {
    console.error('Error fetching admin users:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST create a new admin (Protected)
export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { username, password, role } = await request.json();

    if (!username || !password || !role) {
      return NextResponse.json({ error: 'Username, password and role are required' }, { status: 400 });
    }

    // Check if username already exists
    const checkRes = await query('SELECT id FROM users WHERE username = $1', [username]);
    if (checkRes.rows.length > 0) {
      return NextResponse.json({ error: 'Username already exists' }, { status: 400 });
    }

    const hashedPassword = hashPassword(password);
    await query(
      'INSERT INTO users (username, password, role) VALUES ($1, $2, $3)',
      [username, hashedPassword, role]
    );

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error creating admin user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PUT update an admin's password (Protected)
export async function PUT(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { userId, newPassword } = await request.json();

    if (!userId || !newPassword) {
      return NextResponse.json({ error: 'User ID and new password are required' }, { status: 400 });
    }

    // Verify user exists
    const userRes = await query('SELECT id, username FROM users WHERE id = $1', [userId]);
    if (userRes.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const hashedPassword = hashPassword(newPassword);
    await query('UPDATE users SET password = $1 WHERE id = $2', [hashedPassword, userId]);

    return NextResponse.json({ 
      success: true, 
      message: `Password for admin "${userRes.rows[0].username}" updated successfully` 
    });
  } catch (error: any) {
    console.error('Error updating admin password:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
