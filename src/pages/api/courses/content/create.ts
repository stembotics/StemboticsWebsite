import type { APIRoute } from 'astro';
import { db } from '../../../../lib/db';
import { z } from 'zod';
import { verifyToken } from '../../../../lib/auth';
import { logger } from '../../../../lib/logger';

const contentSchema = z.object({
  courseId: z.string().transform(val => parseInt(val, 10)),
  weekNumber: z.number().int().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  type: z.enum(['video', 'text', 'quiz', 'assignment']),
  content: z.string().min(1),
  order: z.number().int().min(0)
});

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const token = cookies.get('token');
    if (!token) {
      logger.warn('Content creation attempted without authentication');
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const user = verifyToken(token.value);
    if (!user) {
      logger.warn('Content creation attempted with invalid token');
      return new Response(JSON.stringify({ error: 'Invalid token' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    logger.info(`Course content creation initiated by user ${user.userId}`);
    const data = contentSchema.parse(await request.json());
    
    // Verify that the user is the course instructor
    const courseCheck = await db.execute({
      sql: 'SELECT instructor_id FROM courses WHERE id = ?',
      args: [data.courseId]
    });

    if (!courseCheck.rows[0]) {
      logger.warn(`Course not found: ${data.courseId}`);
      return new Response(JSON.stringify({ error: 'Course not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (courseCheck.rows[0].instructor_id !== user.userId) {
      logger.warn(`Unauthorized content creation attempt for course ${data.courseId} by user ${user.userId}`);
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get the next order index for this week
    const orderResult = await db.execute({
      sql: `SELECT COALESCE(MAX(order_index), -1) + 1 as next_order 
            FROM course_content 
            WHERE course_id = ? AND week_number = ?`,
      args: [data.courseId, data.weekNumber]
    });

    const orderIndex = orderResult.rows[0].next_order;

    // Create the content
    const result = await db.execute({
      sql: `INSERT INTO course_content (
              course_id, 
              week_number,
              title, 
              description,
              type, 
              content, 
              order_index
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
            RETURNING id`,
      args: [
        data.courseId,
        data.weekNumber,
        data.title,
        data.description,
        data.type,
        data.content,
        orderIndex
      ]
    });

    logger.info(`Course content created successfully: ${result.rows[0].id} for course ${data.courseId} week ${data.weekNumber}`);
    return new Response(JSON.stringify({ content: result.rows[0] }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    logger.error('Course content creation failed:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};