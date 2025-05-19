import { createClient } from '@libsql/client/http';

const url = import.meta.env.TURSO_DATABASE_URL;
const authToken = import.meta.env.TURSO_AUTH_TOKEN;
console.log("TURSO_DATABASE_URL:", url);
console.log("TURSO_AUTH_TOKEN:", authToken);
console.log("ENV LOADED:", import.meta.env);

if (!url || !authToken) {
  throw new Error('Missing Turso database credentials');
}

export const db = createClient({
  url,
  authToken
});

interface CreateUserParams {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  role?: 'student' | 'teacher' | 'admin';
}

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  password_hash?: string;
}

export async function createUser({ email, passwordHash, firstName, lastName, role = 'student' }: CreateUserParams): Promise<User> {
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

  return result.rows[0] as unknown as User;
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const result = await db.execute({
    sql: 'SELECT id, email, password_hash, first_name, last_name, role FROM users WHERE email = ?',
    args: [email]
  });
  
  return result.rows[0] as unknown as User | undefined;
}

export async function getUserById(id: number): Promise<User | undefined> {
  const result = await db.execute({
    sql: 'SELECT id, email, first_name, last_name, role FROM users WHERE id = ?',
    args: [id]
  });
  
  return result.rows[0] as unknown as User | undefined;
}