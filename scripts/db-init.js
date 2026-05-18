const { Pool } = require('pg');
const crypto = require('crypto');

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/kammel";

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

const pool = new Pool({
  connectionString,
});

async function main() {
  console.log("Connecting to database...");
  const client = await pool.connect();
  try {
    console.log("Creating tables...");
    
    // Create users table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(20) NOT NULL DEFAULT 'admin',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("- Table 'users' created or exists.");

    // Create visitor_logs table
    await client.query(`
      CREATE TABLE IF NOT EXISTS visitor_logs (
        id SERIAL PRIMARY KEY,
        ip_address VARCHAR(50) NOT NULL,
        country VARCHAR(100) NOT NULL DEFAULT 'Unknown',
        page_path VARCHAR(255) NOT NULL,
        user_agent TEXT,
        visited_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("- Table 'visitor_logs' created or exists.");

    // Check if there is an admin user
    const res = await client.query("SELECT * FROM users WHERE username = 'admin';");
    if (res.rows.length === 0) {
      const hashedPassword = hashPassword("admin123");
      await client.query(
        "INSERT INTO users (username, password, role) VALUES ($1, $2, $3);",
        ["admin", hashedPassword, "admin"]
      );
      console.log("- Inserted default admin user: admin / admin123");
    } else {
      console.log("- Admin user already exists.");
    }
    
    console.log("Database initialized successfully!");
  } catch (err) {
    console.error("Database initialization failed:", err);
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch(console.error);
