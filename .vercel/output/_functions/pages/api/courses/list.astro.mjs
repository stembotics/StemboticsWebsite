import { v as verifyToken, d as db } from '../../../chunks/auth_DuCNQg1W.mjs';
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
    const userResult = await db.execute({
      sql: "SELECT role FROM users WHERE id = ?",
      args: [user.userId]
    });
    const role = userResult.rows[0].role;
    let courses;
    if (role === "teacher") {
      courses = await db.execute({
        sql: `SELECT * FROM courses WHERE instructor_id = ?`,
        args: [user.userId]
      });
    } else {
      courses = await db.execute({
        sql: `SELECT c.*, 
              CASE WHEN e.id IS NOT NULL THEN true ELSE false END as enrolled
              FROM courses c
              LEFT JOIN enrollments e ON e.course_id = c.id AND e.user_id = ?`,
        args: [user.userId]
      });
    }
    return new Response(JSON.stringify({ courses: courses.rows }), {
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
