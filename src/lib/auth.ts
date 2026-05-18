import { cookies } from 'next/headers';
import { verifyToken, SessionPayload } from './auth-utils';

export async function getAdminSession(): Promise<SessionPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_session')?.value;
    if (!token) return null;
    return verifyToken(token);
  } catch (error) {
    console.error("Error retrieving admin session:", error);
    return null;
  }
}
