import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';
import { sendCourseCreatedEmail } from '../mailService';
import { randomUUID } from 'crypto';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const token = cookies.get('token');
    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const user = verifyToken(token.value);
    if (!user || user.role !== 'teacher') {
      return new Response(JSON.stringify({ error: 'Only teachers can create courses' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { title, description, image, level, duration, price } = await request.json();

    if (!title || !description || !image || !level || !duration || price === undefined) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const courseId = randomUUID();

    // Create the course
    await db.execute({
      sql: `INSERT INTO courses (id, title, description, image, level, duration, price, instructor_id) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [courseId, title, description, image, level, duration, price, user.userId]
    });

    // Get teacher details for email
    const teacherResult = await db.execute({
      sql: 'SELECT first_name, last_name, email FROM users WHERE id = ?',
      args: [user.userId]
    });

    if (!teacherResult.rows[0]) {
      return new Response(JSON.stringify({ error: 'Teacher not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const teacher = teacherResult.rows[0];

    // Send course creation notification
    await sendCourseCreatedEmail(
      teacher.email,
      `${teacher.first_name} ${teacher.last_name}`,
      title
    );

    return new Response(JSON.stringify({ 
      success: true, 
      courseId,
      message: 'Course created successfully' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'An error occurred' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};