import type { APIRoute } from 'astro';
import { db } from '../../../../lib/db';
import { z } from 'zod';
import { verifyToken } from '../../../../lib/auth';

const progressSchema = z.object({
  courseId: z.string().uuid(),
  contentId: z.string().uuid(),
  completed: z.boolean()
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
    if (!user) {
      return new Response(JSON.stringify({ error: 'Invalid token' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = progressSchema.parse(await request.json());

    // Check if progress record exists
    const existingRecord = await db.execute({
      sql: 'SELECT id FROM progress WHERE enrollment_id = ? AND content_id = ?',
      args: [user.userId, data.contentId]
    });

    let result;
    if (existingRecord.rows.length > 0) {
      // Update existing record
      result = await db.execute({
        sql: `UPDATE progress 
              SET status = ?, completed_at = CURRENT_TIMESTAMP 
              WHERE enrollment_id = ? AND content_id = ?
              RETURNING id`,
        args: [data.completed ? 'completed' : 'in_progress', user.userId, data.contentId]
      });
    } else {
      // Insert new record
      result = await db.execute({
        sql: `INSERT INTO progress (enrollment_id, content_id, status)
              VALUES (?, ?, ?)
              RETURNING id`,
        args: [user.userId, data.contentId, data.completed ? 'completed' : 'in_progress']
      });
    }

    // Calculate overall course progress
    const progressResult = await db.execute({
      sql: `SELECT 
              ROUND(
                (COUNT(CASE WHEN p.status = 'completed' THEN 1 END)::float / COUNT(*)::float) * 100
              ) as progress
            FROM course_content cc
            LEFT JOIN progress p 
              ON p.content_id = cc.id 
              AND p.enrollment_id = ?
            WHERE cc.course_id = ?`,
      args: [user.userId, data.courseId]
    });

    // Update enrollment progress
    await db.execute({
      sql: `UPDATE enrollments 
            SET progress = ? 
            WHERE user_id = ? AND course_id = ?`,
      args: [progressResult.rows[0].progress, user.userId, data.courseId]
    });

    return new Response(JSON.stringify({ 
      progress: result.rows[0],
      courseProgress: progressResult.rows[0].progress
    }), {
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