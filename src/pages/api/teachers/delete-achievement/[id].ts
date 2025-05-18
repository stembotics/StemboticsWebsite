import type { APIRoute } from 'astro';
import { db } from '../../../../lib/db';
import { verifyToken } from '../../../../lib/auth';

export const DELETE: APIRoute = async ({ params, cookies }) => {
  try {
    const achievementId = params.id;
    if (!achievementId) {
      return new Response(JSON.stringify({ error: 'Achievement ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

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

    // Verify user is a teacher and owns the achievement
    const achievementCheck = await db.execute({
      sql: `
        SELECT ta.id 
        FROM teacher_achievements ta
        JOIN teachers t ON ta.teacher_id = t.id
        WHERE ta.id = ? AND t.user_id = ?
      `,
      args: [achievementId, user.userId]
    });

    if (!achievementCheck.rows[0]) {
      return new Response(JSON.stringify({ error: 'Achievement not found or unauthorized' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Delete achievement
    await db.execute({
      sql: 'DELETE FROM teacher_achievements WHERE id = ?',
      args: [achievementId]
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error deleting achievement:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete achievement' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
