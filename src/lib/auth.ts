import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, getUserByEmail } from './db';

const secret = process.env.JWT_SECRET || 'your-secret-key';

export type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  password_hash?: string;
}

export interface TokenPayload {
  userId: number;
  email: string;
  role: UserRole;
}

interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: string;
}

export async function signup({ email, password, firstName, lastName, role = 'student' }: SignupData) {
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new Error('Email already exists');
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await createUser({ email, passwordHash, firstName, lastName, role });
  
  const token = jwt.sign({ userId: user.id, role: user.role }, secret, { expiresIn: '7d' });
  return { token, user: { ...user, password_hash: undefined } };
}

export async function login({ email, password }: { email: string; password: string }) {
  const user = await getUserByEmail(email);
  console.log("user");
  console.log(user);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const passwordHash = String(user.password_hash || '');
  const validPassword = await bcrypt.compare(password, passwordHash);
  if (!validPassword) {
    throw new Error('Invalid credentials');
  }

  // Create token with explicit userId in payload
  const tokenPayload = { userId: user.id, role: user.role };
  console.log('Creating token with payload:', tokenPayload);
  const token = jwt.sign(tokenPayload, secret, { expiresIn: '7d' });
  
  // Return user without password hash
  return { 
    token, 
    user: { ...user, password_hash: undefined } 
  };
}

export async function createToken(user: User): Promise<string> {
  const tokenPayload = {
    userId: user.id,
    email: user.email,
    role: user.role
  };
  
  return jwt.sign(tokenPayload, secret, { expiresIn: '24h' });
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, secret) as TokenPayload;
    
    if (!decoded.userId) {
      return null;
    }
    
    return decoded;
  } catch (error) {
    return null;
  }
}

