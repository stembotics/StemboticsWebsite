import { v as verifyToken, d as db } from '../../../../chunks/auth_CSbJP1U3.mjs';
import { z } from 'zod';
export { r as renderers } from '../../../../chunks/internal_BsTt5pTQ.mjs';

const sessionSchema = z.object({
  session_date: z.string(),
  // ISO date string
  notes: z.string().optional()
});
const GET = async ({ params, cookies }) => {
  const { id } = params;
  const token = cookies.get("token");
  if (!token) return new Response("Unauthorized", { status: 401 });
  const user = verifyToken(token.value);
  if (!user) return new Response("Unauthorized", { status: 401 });
  const courseResult = await db.execute({
    sql: "SELECT instructor_id FROM courses WHERE id = ?",
    args: [id]
  });
  if (!courseResult.rows[0] || courseResult.rows[0].instructor_id !== user.userId) {
    return new Response("Unauthorized", { status: 403 });
  }
  const sessions = await db.execute({
    sql: "SELECT * FROM class_sessions WHERE course_id = ? ORDER BY session_date",
    args: [id]
  });
  return new Response(JSON.stringify(sessions.rows), { status: 200 });
};
const POST = async ({ params, request, cookies }) => {
  const { id } = params;
  const token = cookies.get("token");
  if (!token) return new Response("Unauthorized", { status: 401 });
  const user = verifyToken(token.value);
  if (!user) return new Response("Unauthorized", { status: 401 });
  const courseResult = await db.execute({
    sql: "SELECT instructor_id FROM courses WHERE id = ?",
    args: [id]
  });
  if (!courseResult.rows[0] || courseResult.rows[0].instructor_id !== user.userId) {
    return new Response("Unauthorized", { status: 403 });
  }
  const body = await request.json();
  const data = sessionSchema.parse(body);
  const result = await db.execute({
    sql: "INSERT INTO class_sessions (course_id, session_date, notes) VALUES (?, ?, ?) RETURNING *",
    args: [id, data.session_date, data.notes || null]
  });
  return new Response(JSON.stringify(result.rows[0]), { status: 201 });
};
const DELETE = async ({ params, request, cookies }) => {
  const { id } = params;
  const token = cookies.get("token");
  if (!token) return new Response("Unauthorized", { status: 401 });
  const user = verifyToken(token.value);
  if (!user) return new Response("Unauthorized", { status: 401 });
  const courseResult = await db.execute({
    sql: "SELECT instructor_id FROM courses WHERE id = ?",
    args: [id]
  });
  if (!courseResult.rows[0] || courseResult.rows[0].instructor_id !== user.userId) {
    return new Response("Unauthorized", { status: 403 });
  }
  const { sessionId } = await request.json();
  await db.execute({
    sql: "DELETE FROM class_sessions WHERE id = ? AND course_id = ?",
    args: [sessionId, id]
  });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
