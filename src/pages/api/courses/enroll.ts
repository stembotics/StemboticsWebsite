import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';
import { sendCourseEnrollmentEmail } from '../../../lib/mailService';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const user = await verifyToken(token);
    if (!user || user.role !== 'parent') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await request.json();
    const { childId, courseId } = data;

    if (!childId || !courseId) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify child belongs to parent
    const childResult = await db.execute({
      sql: `
        SELECT * FROM children
        WHERE id = ? AND parent_user_id = ?
      `,
      args: [childId, user.userId]
    });

    if (childResult.rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Child not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify course exists
    const courseResult = await db.execute({
      sql: `
        SELECT * FROM courses
        WHERE id = ?
      `,
      args: [courseId]
    });

    if (courseResult.rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Course not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if already enrolled
    const enrollmentResult = await db.execute({
      sql: `
        SELECT * FROM enrollments
        WHERE child_id = ? AND course_id = ?
      `,
      args: [childId, courseId]
    });

    if (enrollmentResult.rows.length > 0) {
      return new Response(JSON.stringify({ error: 'Already enrolled in this course' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create enrollment
    const result = await db.execute({
      sql: `
        INSERT INTO enrollments (
          child_id,
          course_id,
          status,
          created_at,
          updated_at
        ) VALUES (?, ?, 'pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
        RETURNING *
      `,
      args: [childId, courseId]
    });

    const enrollment = result.rows[0];

    // Send enrollment confirmation email
    await sendCourseEnrollmentEmail({
      studentName: `${String(childResult.rows[0].first_name)} ${String(childResult.rows[0].last_name)}`,
      courseName: String(courseResult.rows[0].title),
      courseStartDate: new Date().toISOString(),
      courseDuration: String(courseResult.rows[0].duration),
      courseLevel: String(courseResult.rows[0].level)
    });

    return new Response(JSON.stringify(enrollment), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error enrolling in course:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};