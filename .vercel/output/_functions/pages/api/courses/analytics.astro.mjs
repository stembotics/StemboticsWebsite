import { v as verifyToken, d as db } from '../../../chunks/auth_CSbJP1U3.mjs';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const GET = async ({ request, cookies }) => {
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
    const analytics = await db.execute({
      sql: `SELECT 
              c.id,
              c.title,
              COUNT(DISTINCT e.user_id) as total_students,
              ROUND(AVG(
                CASE 
                  WHEN p.status = 'completed' THEN 100
                  WHEN p.status = 'in_progress' THEN 50
                  ELSE 0
                END
              )) as average_progress,
              COUNT(DISTINCT CASE WHEN p.status = 'completed' THEN e.user_id END) as completed_students
            FROM courses c
            LEFT JOIN enrollments e ON e.course_id = c.id
            LEFT JOIN progress p ON p.enrollment_id = e.id
            WHERE c.instructor_id = ?
            GROUP BY c.id, c.title`,
      args: [user.userId]
    });
    return new Response(JSON.stringify({ analytics: analytics.rows }), {
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
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
