import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const token = cookies.get('token');
    const user = token ? verifyToken(token.value) : null;

    if (!user || user.role !== 'teacher') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { courseId, timeSlots } = await request.json();

    // Validate courseId and timeSlots
    if (typeof courseId !== 'number' || !Array.isArray(timeSlots)) {
      return new Response(JSON.stringify({ error: 'Invalid courseId or timeSlots format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify the course belongs to the teacher
    const courseResult = await db.execute({
      sql: 'SELECT instructor_id FROM courses WHERE id = ?',
      args: [courseId]
    });

    if (!courseResult.rows.length || courseResult.rows[0].instructor_id !== user.userId) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Delete existing time slots
    await db.execute({
      sql: 'DELETE FROM time_slots WHERE course_id = ?',
      args: [courseId]
    });

    // Insert new time slots
    for (const slot of timeSlots) {
      await db.execute({
        sql: `
          INSERT INTO time_slots (
            course_id, day_of_week, start_time, end_time, max_capacity
          ) VALUES (?, ?, ?, ?, ?)
        `,
        args: [
          courseId,
          slot.day_of_week,
          slot.start_time,
          slot.end_time,
          slot.max_capacity
        ]
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error managing time slots:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 