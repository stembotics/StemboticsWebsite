import { v as verifyToken, d as db } from '../../../../chunks/auth_C-EZHYYi.mjs';
import { z } from 'zod';
export { r as renderers } from '../../../../chunks/internal_BsTt5pTQ.mjs';

const noteSchema = z.object({
  note: z.string()
});
const GET = async ({ params, cookies }) => {
  const { sessionId } = params;
  const token = cookies.get("token");
  if (!token) return new Response("Unauthorized", { status: 401 });
  const user = verifyToken(token.value);
  if (!user) return new Response("Unauthorized", { status: 401 });
  const notes = await db.execute({
    sql: "SELECT * FROM session_notes WHERE session_id = ? ORDER BY created_at",
    args: [sessionId]
  });
  return new Response(JSON.stringify(notes.rows), { status: 200 });
};
const POST = async ({ params, request, cookies }) => {
  const { sessionId } = params;
  const token = cookies.get("token");
  if (!token) return new Response("Unauthorized", { status: 401 });
  const user = verifyToken(token.value);
  if (!user) return new Response("Unauthorized", { status: 401 });
  const body = await request.json();
  const data = noteSchema.parse(body);
  const result = await db.execute({
    sql: "INSERT INTO session_notes (session_id, note) VALUES (?, ?) RETURNING *",
    args: [sessionId, data.note]
  });
  return new Response(JSON.stringify(result.rows[0]), { status: 201 });
};
const PATCH = async ({ params, request, cookies }) => {
  const { sessionId } = params;
  const token = cookies.get("token");
  if (!token) return new Response("Unauthorized", { status: 401 });
  const user = verifyToken(token.value);
  if (!user) return new Response("Unauthorized", { status: 401 });
  const { noteId, note } = await request.json();
  await db.execute({
    sql: "UPDATE session_notes SET note = ? WHERE id = ? AND session_id = ?",
    args: [note, noteId, sessionId]
  });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  PATCH,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
