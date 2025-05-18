import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';
import { z } from 'zod';

const attendanceSchema = z.object({
  classId: z.number(),
  studentId: z.number(),
  status: z.enum(['completed', 'pending', 'missed'])
});

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
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const body = await request.json();
    console.log('Received attendance update body:', body);
    let data;
    try {
      data = attendanceSchema.parse(body);
    } catch (err: any) {
      console.error('Attendance schema validation error:', err);
      return new Response(JSON.stringify({ error: 'Validation error', details: err.errors }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify the teacher is the instructor for this class
    const classCheck = await db.execute({
      sql: `
        SELECT cs.id 
        FROM class_sessions cs
        JOIN courses c ON cs.course_id = c.id
        WHERE cs.id = ? AND c.instructor_id = ?
      `,
      args: [data.classId, user.userId]
    });

    if (!classCheck.rows[0]) {
      return new Response(JSON.stringify({ error: 'Class not found or unauthorized' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Update or create attendance record
    const existingRecord = await db.execute({
      sql: 'SELECT id FROM class_attendance WHERE student_id = ? AND session_id = ?',
      args: [data.studentId, data.classId]
    });

    if (existingRecord.rows.length > 0) {
      // Update existing record
      await db.execute({
        sql: 'UPDATE class_attendance SET status = ? WHERE student_id = ? AND session_id = ?',
        args: [data.status, data.studentId, data.classId]
      });
    } else {
      // Insert new record
      await db.execute({
        sql: 'INSERT INTO class_attendance (student_id, session_id, status) VALUES (?, ?, ?)',
        args: [data.studentId, data.classId, data.status]
      });
    }

    return new Response(JSON.stringify({ message: 'Attendance updated successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 