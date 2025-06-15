import { db } from '../../../../lib/db';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params }) => {
  try {
    const sessionId = params.id;
    if (!sessionId) {
      return new Response(JSON.stringify({ error: 'Session ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const result = await db.execute({
      sql: `
        SELECT 
          ca.id,
          ca.child_id,
          ca.session_id,
          ca.status,
          c.first_name,
          c.last_name
        FROM class_attendance ca
        JOIN children c ON ca.child_id = c.id
        WHERE ca.session_id = ?
        ORDER BY c.first_name, c.last_name
      `,
      args: [sessionId]
    });

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching attendance:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch attendance' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 