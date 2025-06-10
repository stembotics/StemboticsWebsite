import { v as verifyToken, d as db } from '../../../../chunks/auth_DGYWq9VH.mjs';
import { z } from 'zod';
export { r as renderers } from '../../../../chunks/internal_BsTt5pTQ.mjs';

const attendanceSchema = z.object({
  student_id: z.number(),
  status: z.enum(["completed", "pending", "missed"])
});
const GET = async ({ params, cookies }) => {
  const { sessionId } = params;
  if (!sessionId) {
    return new Response("Session ID is required", { status: 400 });
  }
  const token = cookies.get("token");
  if (!token) return new Response("Unauthorized", { status: 401 });
  const user = verifyToken(token.value);
  if (!user) return new Response("Unauthorized", { status: 401 });
  const attendance = await db.execute({
    sql: `SELECT ca.*, u.first_name, u.last_name FROM class_attendance ca
          JOIN users u ON ca.student_id = u.id
          WHERE ca.session_id = ?`,
    args: [sessionId]
  });
  return new Response(JSON.stringify(attendance.rows), { status: 200 });
};
const POST = async ({ params, request, cookies }) => {
  const { sessionId } = params;
  if (!sessionId) {
    return new Response("Session ID is required", { status: 400 });
  }
  const token = cookies.get("token");
  if (!token) return new Response("Unauthorized", { status: 401 });
  const user = verifyToken(token.value);
  if (!user) return new Response("Unauthorized", { status: 401 });
  const body = await request.json();
  const data = attendanceSchema.parse(body);
  const existingRecord = await db.execute({
    sql: "SELECT id FROM class_attendance WHERE session_id = ? AND student_id = ?",
    args: [sessionId, data.student_id]
  });
  if (existingRecord.rows.length > 0) {
    await db.execute({
      sql: "UPDATE class_attendance SET status = ? WHERE session_id = ? AND student_id = ?",
      args: [data.status, sessionId, data.student_id]
    });
  } else {
    await db.execute({
      sql: "INSERT INTO class_attendance (session_id, student_id, status) VALUES (?, ?, ?)",
      args: [sessionId, data.student_id, data.status]
    });
  }
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
