import { createClient } from '@libsql/client/http';
import type { Row } from '@libsql/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendWelcomeStudentEmail } from '../pages/api/mailService';

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

console.log("TURSO_DATABASE_URL:", url);
console.log("TURSO_AUTH_TOKEN:", authToken);

if (!url || !authToken) {
  throw new Error('Missing Turso database credentials');
}

export const db = createClient({
  url,
  authToken
});

export type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  password_hash?: string; // Only included when fetching for login
}

interface CreateUserParams {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}

interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: UserRole; // Allow optional role for flexibility
}

async function createUser({ email, passwordHash, firstName, lastName, role }: CreateUserParams): Promise<User> {
  const result = await db.execute({
    sql: `INSERT INTO users (email, password_hash, first_name, last_name, role) 
          VALUES (?, ?, ?, ?, ?)
          RETURNING id, email, first_name, last_name, role`,
    args: [email, passwordHash, firstName, lastName, role]
  });
  
  if (!result.rows || result.rows.length === 0) {
    throw new Error('Failed to create user');
  }

  const row = result.rows[0] as any;
  return {
    id: row.id,
    email: row.email,
    firstName: row.first_name,
    lastName: row.last_name,
    role: row.role as UserRole,
  };
}

async function getUserByEmail(email: string): Promise<User | undefined> {
  const result = await db.execute({
    sql: 'SELECT id, email, password_hash, first_name, last_name, role FROM users WHERE email = ?',
    args: [email]
  });
  
  const row = result.rows[0] as any;
  if (row) {
    return {
      id: row.id,
      email: row.email,
      firstName: row.first_name,
      lastName: row.last_name,
      role: row.role as UserRole,
      password_hash: row.password_hash
    };
  } else {
    return undefined;
  }
}

async function getUserById(id: number): Promise<User | undefined> {
  const result = await db.execute({
    sql: 'SELECT id, email, first_name, last_name, role FROM users WHERE id = ?',
    args: [id]
  });
  
  const row = result.rows[0] as any;
  if (row) {
    return {
      id: row.id,
      email: row.email,
      firstName: row.first_name,
      lastName: row.last_name,
      role: row.role as UserRole,
    };
  } else {
    return undefined;
  }
}

export async function signup({ email, password, firstName, lastName, role = 'student' }: SignupData): Promise<{ token: string; user: User } | Error> {
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return new Error('Email already exists');
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const userRole: UserRole = (role && ['student', 'teacher', 'parent', 'admin'].includes(role)) ? role as UserRole : 'student';
  const user = await createUser({ email, passwordHash, firstName, lastName, role: userRole });
  const token = jwt.sign({ userId: user.id, role: user.role }, authToken!, { expiresIn: '7d' });
  await sendWelcomeStudentEmail(user.email, `${user.firstName} ${user.lastName}`);
  return { token, user: { ...user, password_hash: undefined } };
}

export async function verifyToken(token: string): Promise<User | null> {
  try {
    const decoded = jwt.verify(token, authToken!) as { userId: number; role: string };
    const user = await getUserById(decoded.userId);
    if (user) {
      return {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role as UserRole,
      };
    } else {
      return null;
    }
  } catch (error: any) {
    console.error('Token verification failed:', error);
    return null;
  }
}

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  price: number;
  instructor_id: number;
  instructor: {
    name: string;
    role: string;
  };
  teacher_id: number;
  is_enrolled?: boolean;
  likeCount?: number;
  isLiked?: boolean;
}

export interface Child {
  id: number;
  parent_user_id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  grade_level: string;
  medical_emergency_contact_info: string | null;
  enrollments?: Array<{
    id: number;
    course: {
      id: number;
      title: string;
      description?: string;
      instructor: string;
    };
    status: string;
    time_slot?: {
      day_of_week: string;
      start_time: string;
      end_time: string;
    } | null;
  }>;
}

export async function getCourse(id: number): Promise<Course | undefined> {
  const result = await db.execute({
    sql: `
      SELECT 
        c.*,
        u.first_name || ' ' || u.last_name as instructor_name,
        t.id as teacher_id,
        t.current_role as instructor_role
      FROM courses c
      JOIN users u ON c.instructor_id = u.id
      JOIN teachers t ON t.user_id = u.id
      WHERE c.id = ?
    `,
    args: [id]
  });
  
  return result.rows[0] as unknown as Course | undefined; // Cast for now, improve later
}

export async function getChildren(parentId: number): Promise<Child[]> {
  const result = await db.execute({
    sql: `
      SELECT 
        c.id,
        c.parent_user_id,
        c.first_name,
        c.last_name,
        c.date_of_birth,
        c.grade_level,
        c.medical_emergency_contact_info,
        json_group_array(
          json_object(
            'id', e.id,
            'course', json_object(
              'id', co.id,
              'title', co.title,
              'description', co.description,
              'instructor', (
                SELECT u.first_name || ' ' || u.last_name
                FROM users u
                WHERE u.id = co.instructor_id
              )
            ),
            'status', e.status,
            'time_slot', CASE WHEN ts.id IS NOT NULL THEN json_object(
              'day_of_week', ts.day_of_week,
              'start_time', ts.start_time,
              'end_time', ts.end_time
            ) ELSE NULL END
          )
        ) as enrollments
      FROM children c
      LEFT JOIN enrollments e ON c.id = e.child_id
      LEFT JOIN courses co ON e.course_id = co.id
      LEFT JOIN time_slots ts ON e.time_slot_id = ts.id
      WHERE c.parent_user_id = ?
      GROUP BY c.id
    `,
    args: [parentId]
  });

  return result.rows.map((row: any) => ({
    id: row.id,
    parent_user_id: row.parent_user_id,
    first_name: row.first_name,
    last_name: row.last_name,
    date_of_birth: row.date_of_birth,
    grade_level: row.grade_level,
    medical_emergency_contact_info: row.medical_emergency_contact_info,
    enrollments: JSON.parse(row.enrollments || '[]').filter((e: any) => e && e.course && e.course.id),
  }));
}

// TODO: Implement activity tracking and add 'activities' table to schema
// Once implemented, add 'activities' field back to Child interface and update getChildren query and dashboard usage.

export { getUserByEmail, createUser };