import crypto from 'crypto';

export interface SessionPayload {
  userId: number;
  username: string;
  role: string;
  exp: number;
}

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedValue: string): boolean {
  const [salt, hash] = storedValue.split(':');
  if (!salt || !hash) return false;
  const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hash === verifyHash;
}

export function signToken(payload: { userId: number; username: string; role: string }, expiresInSeconds = 86400): string {
  const secret = process.env.JWT_SECRET || 'speed_moto_pieces_admin_secret_key_2026';
  const exp = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const fullPayload: SessionPayload = { ...payload, exp };
  
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const body = Buffer.from(JSON.stringify(fullPayload)).toString('base64url');
  
  const signature = crypto
    .createHmac('sha256', secret)
    .update(`${header}.${body}`)
    .digest('base64url');
    
  return `${header}.${body}.${signature}`;
}

export function verifyToken(token: string): SessionPayload | null {
  try {
    const secret = process.env.JWT_SECRET || 'speed_moto_pieces_admin_secret_key_2026';
    const [header, body, signature] = token.split('.');
    if (!header || !body || !signature) return null;
    
    // Verify signature
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(`${header}.${body}`)
      .digest('base64url');
      
    if (signature !== expectedSignature) return null;
    
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8')) as SessionPayload;
    
    // Check expiration
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return null; // Expired
    }
    
    return payload;
  } catch (err) {
    return null;
  }
}
