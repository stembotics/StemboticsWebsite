import { createClient } from '@libsql/client';

const url = import.meta.env.TURSO_DATABASE_URL;
const authToken = import.meta.env.TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  throw new Error('Missing Turso database credentials');
}

export const db = createClient({
  url,
  authToken
});

export async function createUser({ email, passwordHash, firstName, lastName, role = 'student' }) {
  // Insert the user and return all fields
  const result = await db.execute({
    sql: `INSERT INTO users (email, password_hash, first_name, last_name, role) 
          VALUES (?, ?, ?, ?, ?)
          RETURNING id, email, first_name, last_name, role`,
    args: [email, passwordHash, firstName, lastName, role]
  });
  
  if (!result.rows || result.rows.length === 0) {
    throw new Error('Failed to create user');
  }

  return result.rows[0];
}

export async function getUserByEmail(email: string) {
  const result = await db.execute({
    sql: 'SELECT id, email, password_hash, first_name, last_name, role FROM users WHERE email = ?',
    args: [email]
  });
  
  return result.rows[0];
}

export async function getUserById(id: number) {
  const result = await db.execute({
    sql: 'SELECT id, email, first_name, last_name, role FROM users WHERE id = ?',
    args: [id]
  });
  
  return result.rows[0];
}