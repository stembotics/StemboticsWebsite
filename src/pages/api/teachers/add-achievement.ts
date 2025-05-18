import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';
import { z } from 'zod';

const addAchievementSchema = z.object({
  title: z.string(),
  description: z.string(),
  issuer: z.string().optional(),
  date: z.string().optional()
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
    const data = addAchievementSchema.parse(await request.json());

    // Add achievement
    const result = await db.execute({
      sql: `
        INSERT INTO teacher_achievements (
          teacher_id,
          title,
          description,
          issuer,
          date
        ) VALUES (?, ?, ?, ?, ?)
        RETURNING id, title, description, issuer, date
      `,
      args: [
        teacherCheck.rows[0].id,
        data.title,
        data.description,
        data.issuer || null,
        data.date || null
      ]
    });

    return new Response(JSON.stringify(result.rows[0]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error adding achievement:', error);
    return new Response(JSON.stringify({ error: 'Failed to add achievement' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
