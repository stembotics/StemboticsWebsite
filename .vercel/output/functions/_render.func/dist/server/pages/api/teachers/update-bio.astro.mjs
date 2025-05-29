import { v as verifyToken, d as db } from '../../../chunks/auth_DTf2el9S.mjs';
import { z } from 'zod';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const updateBioSchema = z.object({
  bio: z.string()
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
    const data = updateBioSchema.parse(await request.json());
    await db.execute({
      sql: "UPDATE teachers SET bio = ? WHERE user_id = ?",
      args: [data.bio, user.userId]
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error updating bio:", error);
    return new Response(JSON.stringify({ error: "Failed to update bio" }), {
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
