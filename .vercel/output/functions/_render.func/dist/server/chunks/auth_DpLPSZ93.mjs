import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createClient } from '@libsql/client/http';

const url = undefined                                  ;
const authToken = undefined                                ;
console.log("TURSO_DATABASE_URL:", url);
console.log("TURSO_AUTH_TOKEN:", authToken);
{
  throw new Error("Missing Turso database credentials");
}
const db = createClient({
  url,
  authToken
});
async function createUser({ email, passwordHash, firstName, lastName, role = "student" }) {
  const result = await db.execute({
    sql: `INSERT INTO users (email, password_hash, first_name, last_name, role) 
          VALUES (?, ?, ?, ?, ?)
          RETURNING id, email, first_name, last_name, role`,
    args: [email, passwordHash, firstName, lastName, role]
  });
  if (!result.rows || result.rows.length === 0) {
    throw new Error("Failed to create user");
  }
  return result.rows[0];
}
async function getUserByEmail(email) {
  const result = await db.execute({
    sql: "SELECT id, email, password_hash, first_name, last_name, role FROM users WHERE email = ?",
    args: [email]
  });
  return result.rows[0];
}

const JWT_SECRET = "your-secret-key";
async function signup({ email, password, firstName, lastName, role = "student" }) {
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already exists");
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await createUser({ email, passwordHash, firstName, lastName, role });
  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
  return { token, user: { ...user, password_hash: void 0 } };
}
async function login({ email, password }) {
  const user = await getUserByEmail(email);
  console.log("user");
  console.log(user);
  if (!user) {
    throw new Error("Invalid credentials");
  }
  const passwordHash = String(user.password_hash || "");
  const validPassword = await bcrypt.compare(password, passwordHash);
  if (!validPassword) {
    throw new Error("Invalid credentials");
  }
  const tokenPayload = { userId: user.id, role: user.role };
  console.log("Creating token with payload:", tokenPayload);
  const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: "7d" });
  return {
    token,
    user: { ...user, password_hash: void 0 }
  };
}
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded.userId) {
      return null;
    }
    return decoded;
  } catch (error) {
    return null;
  }
}

export { db as d, login as l, signup as s, verifyToken as v };
