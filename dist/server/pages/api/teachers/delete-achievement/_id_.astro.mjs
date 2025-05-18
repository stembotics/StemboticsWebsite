import { v as verifyToken, d as db } from '../../../../chunks/auth_C-EZHYYi.mjs';
export { r as renderers } from '../../../../chunks/internal_BsTt5pTQ.mjs';

const DELETE = async ({ params, cookies }) => {
  try {
    const achievementId = params.id;
    if (!achievementId) {
      return new Response(JSON.stringify({ error: "Achievement ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
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
      return new Response(JSON.stringify({ error: "Achievement not found or unauthorized" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    await db.execute({
      sql: "DELETE FROM teacher_achievements WHERE id = ?",
      args: [achievementId]
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error deleting achievement:", error);
    return new Response(JSON.stringify({ error: "Failed to delete achievement" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
