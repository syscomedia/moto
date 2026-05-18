import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { verifyPassword, signToken } from '@/lib/auth-utils';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
    }

    // Query database for the user
    const res = await query('SELECT * FROM users WHERE username = $1', [username]);
    if (res.rows.length === 0) {
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
    }

    const user = res.rows[0];
    
    // Verify password hash
    const isPasswordValid = verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
    }

    // Sign session token
    const token = signToken({ 
      userId: user.id, 
      username: user.username, 
      role: user.role 
    });

    const response = NextResponse.json({ 
      success: true, 
      user: { username: user.username, role: user.role } 
    });
    
    // Set HTTP-Only, secure cookie
    response.cookies.set({
      name: 'admin_session',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 // 1 day
    });

    return response;
  } catch (error: any) {
    console.error('Login API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
