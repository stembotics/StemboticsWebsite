import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';
import { sendCourseEnrollmentEmail } from '../../../lib/mailService';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const token = cookies.get('token');
    const user = token ? verifyToken(token.value) : null;

    if (!user || user.role !== 'parent') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { courseId, childId, timeSlotId } = await request.json();

    // Convert IDs to numbers
    const courseIdNum = Number(courseId);
    const childIdNum = Number(childId);
    const timeSlotIdNum = Number(timeSlotId);

    if (isNaN(courseIdNum) || isNaN(childIdNum) || isNaN(timeSlotIdNum)) {
      return new Response(JSON.stringify({ error: 'Invalid ID format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify the child belongs to the parent
    const childResult = await db.execute({
      sql: 'SELECT id, first_name, last_name FROM children WHERE id = ? AND parent_user_id = ?',
      args: [childIdNum, user.userId]
    });

    if (!childResult.rows.length) {
      return new Response(JSON.stringify({ error: 'Child not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if already enrolled
    const existingEnrollment = await db.execute({
      sql: 'SELECT id, time_slot_id FROM enrollments WHERE child_id = ? AND course_id = ?',
      args: [childIdNum, courseIdNum]
    });

    if (existingEnrollment.rows.length) {
      // If enrolled in a different time slot, update it
      const currentTimeSlotId = Number(existingEnrollment.rows[0].time_slot_id);
      if (currentTimeSlotId !== timeSlotIdNum) {
        await db.execute({
          sql: 'UPDATE enrollments SET time_slot_id = ? WHERE child_id = ? AND course_id = ?',
          args: [timeSlotIdNum, childIdNum, courseIdNum]
        });
        return new Response(JSON.stringify({ success: true, message: 'Time slot updated' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      return new Response(JSON.stringify({ error: 'Already enrolled in this course with the same time slot' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify the time slot is available
    const timeSlotResult = await db.execute({
      sql: `
        SELECT 
          ts.*,
          c.title,
          c.duration,
          c.level,
          (SELECT COUNT(*) FROM enrollments e WHERE e.time_slot_id = ts.id) as current_enrollment
        FROM time_slots ts
        JOIN courses c ON c.id = ts.course_id
        WHERE ts.id = ? AND ts.course_id = ?
      `,
      args: [timeSlotIdNum, courseIdNum]
    });

    if (!timeSlotResult.rows.length) {
      return new Response(JSON.stringify({ error: 'Time slot not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const timeSlot = timeSlotResult.rows[0];
    const currentEnrollment = Number(timeSlot.current_enrollment) || 0;
    const maxCapacity = Number(timeSlot.max_capacity) || 0;

    if (currentEnrollment >= maxCapacity) {
      return new Response(JSON.stringify({ error: 'Time slot is full' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create enrollment
    await db.execute({
      sql: `
        INSERT INTO enrollments (
          child_id, course_id, time_slot_id, status
        ) VALUES (?, ?, ?, 'pending')
      `,
      args: [childIdNum, courseIdNum, timeSlotIdNum]
    });

    // Try to send enrollment confirmation email, but don't fail if it doesn't work
    try {
      await sendCourseEnrollmentEmail({
        studentName: `${String(childResult.rows[0].first_name)} ${String(childResult.rows[0].last_name)}`,
        courseName: String(timeSlot.title),
        courseStartDate: new Date().toISOString(),
        courseDuration: String(timeSlot.duration),
        courseLevel: String(timeSlot.level)
      });
    } catch (emailError) {
      console.error('Error sending enrollment email:', emailError);
      // Continue with the response even if email fails
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
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