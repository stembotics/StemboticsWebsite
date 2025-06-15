import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { g as getUserByEmail, c as createUser } from './db_C4TQcXrr.mjs';

const secret = process.env.JWT_SECRET || "your-secret-key";
async function signup({ email, password, firstName, lastName, role = "student" }) {
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already exists");
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await createUser({ email, passwordHash, firstName, lastName, role });
  const token = jwt.sign({ userId: user.id, role: user.role }, secret, { expiresIn: "7d" });
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
  const token = jwt.sign(tokenPayload, secret, { expiresIn: "7d" });
  return {
    token,
    user: { ...user, password_hash: void 0 }
  };
}
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secret);
    if (!decoded.userId) {
      return null;
    }
    return decoded;
  } catch (error) {
    return null;
  }
}

export { login as l, signup as s, verifyToken as v };
