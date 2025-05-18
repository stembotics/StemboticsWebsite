import { v as verifyToken, d as db } from '../../../../chunks/auth_H6y_H1li.mjs';
import { z } from 'zod';
export { r as renderers } from '../../../../chunks/internal_BsTt5pTQ.mjs';

const progressSchema = z.object({
  courseId: z.string().uuid(),
  contentId: z.string().uuid(),
  completed: z.boolean()
});
const POST = async ({ request, cookies }) => {
  try {
    const token = cookies.get("token");
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const user = verifyToken(token.value);
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const data = progressSchema.parse(await request.json());
    const existingRecord = await db.execute({
      sql: "SELECT id FROM progress WHERE enrollment_id = ? AND content_id = ?",
      args: [user.userId, data.contentId]
    });
    let result;
    if (existingRecord.rows.length > 0) {
      result = await db.execute({
        sql: `UPDATE progress 
              SET status = ?, completed_at = CURRENT_TIMESTAMP 
              WHERE enrollment_id = ? AND content_id = ?
              RETURNING id`,
        args: [data.completed ? "completed" : "in_progress", user.userId, data.contentId]
      });
    } else {
      result = await db.execute({
        sql: `INSERT INTO progress (enrollment_id, content_id, status)
              VALUES (?, ?, ?)
              RETURNING id`,
        args: [user.userId, data.contentId, data.completed ? "completed" : "in_progress"]
      });
    }
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
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
