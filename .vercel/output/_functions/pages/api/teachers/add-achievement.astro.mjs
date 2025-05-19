import { v as verifyToken, d as db } from '../../../chunks/auth_DpLPSZ93.mjs';
import { z } from 'zod';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const addAchievementSchema = z.object({
  title: z.string(),
  description: z.string(),
  issuer: z.string().optional(),
  date: z.string().optional()
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
    const teacherCheck = await db.execute({
      sql: "SELECT id FROM teachers WHERE user_id = ?",
      args: [user.userId]
    });
    if (!teacherCheck.rows[0]) {
      return new Response(JSON.stringify({ error: "Not a teacher" }), {
        status: 403,
        headers: { "Content-Type": "application/json" }
      });
    }
    const data = addAchievementSchema.parse(await request.json());
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
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error adding achievement:", error);
    return new Response(JSON.stringify({ error: "Failed to add achievement" }), {
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
