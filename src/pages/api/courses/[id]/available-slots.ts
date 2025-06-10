import type { APIRoute } from 'astro';
import { db } from '../../../../lib/db';
import { verifyToken } from '../../../../lib/auth';

export const GET: APIRoute = async ({ params, request, cookies }) => {
  try {
    const token = cookies.get('token');
    const user = token ? verifyToken(token.value) : null;

    if (!user || user.role !== 'parent') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const courseId = params.id;
    const url = new URL(request.url);
    const childId = url.searchParams.get('childId');

    if (!courseId || !childId) {
      return new Response(JSON.stringify({ error: 'Course ID and child ID are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify the child belongs to the parent
    const childResult = await db.execute({
      sql: 'SELECT id FROM children WHERE id = ? AND parent_user_id = ?',
      args: [childId, user.userId]
    });

    if (!childResult.rows.length) {
      return new Response(JSON.stringify({ error: 'Child not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get available time slots
    const timeSlotsResult = await db.execute({
      sql: `
        SELECT 
          ts.*,
          (SELECT COUNT(*) FROM enrollments e WHERE e.time_slot_id = ts.id) as current_enrollment,
          CASE WHEN EXISTS (
            SELECT 1 FROM enrollments e 
            WHERE e.child_id = ? 
            AND e.time_slot_id = ts.id
          ) THEN 1 ELSE 0 END as is_enrolled
        FROM time_slots ts
        WHERE ts.course_id = ?
        ORDER BY ts.day_of_week, ts.start_time
      `,
      args: [childId, courseId]
    });

    const timeSlots = timeSlotsResult.rows.map(row => ({
      id: String(row.id),
      day_of_week: String(row.day_of_week),
      start_time: String(row.start_time),
      end_time: String(row.end_time),
      max_capacity: Number(row.max_capacity),
      current_enrollment: Number(row.current_enrollment),
      is_enrolled: Boolean(row.is_enrolled)
    }));

    return new Response(JSON.stringify({ timeSlots }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching available time slots:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 