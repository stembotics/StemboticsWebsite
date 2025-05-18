import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';

export const GET: APIRoute = async ({ request, cookies }) => {
  try {
    const token = cookies.get('token');
    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const user = verifyToken(token.value);
    if (!user) {
      return new Response(JSON.stringify({ error: 'Invalid token' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get user role
    const userResult = await db.execute({
      sql: 'SELECT role FROM users WHERE id = ?',
      args: [user.userId]
    });

    const role = userResult.rows[0].role;

    let courses;
    if (role === 'teacher') {
      // Get courses created by the teacher
      courses = await db.execute({
        sql: `SELECT * FROM courses WHERE instructor_id = ?`,
        args: [user.userId]
      });
    } else {
      // Get all courses and enrollment status for the student
      courses = await db.execute({
        sql: `SELECT c.*, 
              CASE WHEN e.id IS NOT NULL THEN true ELSE false END as enrolled
              FROM courses c
              LEFT JOIN enrollments e ON e.course_id = c.id AND e.user_id = ?`,
        args: [user.userId]
      });
    }

    return new Response(JSON.stringify({ courses: courses.rows }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};