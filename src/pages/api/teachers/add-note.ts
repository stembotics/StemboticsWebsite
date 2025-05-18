import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';
import { z } from 'zod';

const noteSchema = z.object({
  classId: z.number(),
  note: z.string().min(1, 'Note cannot be empty'),
  studentId: z.number()
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

    const data = noteSchema.parse(await request.json());

    await db.execute({
      sql: `INSERT INTO class_notes (class_id, teacher_id, note, student_id)
            VALUES (?, ?, ?, ?)`,
      args: [data.classId, user.userId, data.note, data.studentId]
    });

    return new Response(JSON.stringify({ message: 'Note added successfully' }), {
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