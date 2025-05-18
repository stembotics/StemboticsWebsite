import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';
import { z } from 'zod';

const updateBioSchema = z.object({
  bio: z.string()
});

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // Verify authentication
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

    // Verify user is a teacher
    const teacherCheck = await db.execute({
      sql: 'SELECT id FROM teachers WHERE user_id = ?',
      args: [user.userId]
    });

    if (!teacherCheck.rows[0]) {
      return new Response(JSON.stringify({ error: 'Not a teacher' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate request body
    const data = updateBioSchema.parse(await request.json());

    // Update bio
    await db.execute({
      sql: 'UPDATE teachers SET bio = ? WHERE user_id = ?',
      args: [data.bio, user.userId]
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error updating bio:', error);
    return new Response(JSON.stringify({ error: 'Failed to update bio' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 