import { Pool } from 'pg';

let pool: Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/kammel';

if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    connectionString,
  });
} else {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR.
  if (!(global as any).pgPool) {
    (global as any).pgPool = new Pool({
      connectionString,
    });
  }
  pool = (global as any).pgPool;
}

export { pool };

export async function query(text: string, params?: any[]) {
  return pool.query(text, params);
}
