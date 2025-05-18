import type { APIRoute } from 'astro';
import { db } from '../../../../lib/db';
import { verifyToken } from '../../../../lib/auth';
import { z } from 'zod';

const sessionSchema = z.object({
  session_date: z.string(), // ISO date string
  notes: z.string().optional()
});

export const GET: APIRoute = async ({ params, cookies }) => {
  const { id } = params;
  const token = cookies.get('token');
  if (!token) return new Response('Unauthorized', { status: 401 });
  const user = verifyToken(token.value);
  if (!user) return new Response('Unauthorized', { status: 401 });

  // Only instructor can view sessions
  const courseResult = await db.execute({
    sql: 'SELECT instructor_id FROM courses WHERE id = ?',
    args: [id]
  });
  if (!courseResult.rows[0] || courseResult.rows[0].instructor_id !== user.userId) {
    return new Response('Unauthorized', { status: 403 });
  }

  const sessions = await db.execute({
    sql: 'SELECT * FROM class_sessions WHERE course_id = ? ORDER BY session_date',
    args: [id]
  });
  return new Response(JSON.stringify(sessions.rows), { status: 200 });
};

export const POST: APIRoute = async ({ params, request, cookies }) => {
  const { id } = params;
  const token = cookies.get('token');
  if (!token) return new Response('Unauthorized', { status: 401 });
  const user = verifyToken(token.value);
  if (!user) return new Response('Unauthorized', { status: 401 });

  // Only instructor can create sessions
  const courseResult = await db.execute({
    sql: 'SELECT instructor_id FROM courses WHERE id = ?',
    args: [id]
  });
  if (!courseResult.rows[0] || courseResult.rows[0].instructor_id !== user.userId) {
    return new Response('Unauthorized', { status: 403 });
  }

  const body = await request.json();
  const data = sessionSchema.parse(body);
  const result = await db.execute({
    sql: 'INSERT INTO class_sessions (course_id, session_date, notes) VALUES (?, ?, ?) RETURNING *',
    args: [id, data.session_date, data.notes || null]
  });
  return new Response(JSON.stringify(result.rows[0]), { status: 201 });
};

export const DELETE: APIRoute = async ({ params, request, cookies }) => {
  const { id } = params;
  const token = cookies.get('token');
  if (!token) return new Response('Unauthorized', { status: 401 });
  const user = verifyToken(token.value);
  if (!user) return new Response('Unauthorized', { status: 401 });

  // Only instructor can delete sessions
  const courseResult = await db.execute({
    sql: 'SELECT instructor_id FROM courses WHERE id = ?',
    args: [id]
  });
  if (!courseResult.rows[0] || courseResult.rows[0].instructor_id !== user.userId) {
    return new Response('Unauthorized', { status: 403 });
  }

  const { sessionId } = await request.json();
  await db.execute({
    sql: 'DELETE FROM class_sessions WHERE id = ? AND course_id = ?',
    args: [sessionId, id]
  });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}; 