import { v as verifyToken, d as db } from '../../../chunks/auth_DTf2el9S.mjs';
import { z } from 'zod';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const noteSchema = z.object({
  classId: z.number(),
  note: z.string().min(1, "Note cannot be empty"),
  studentId: z.number()
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
    if (!user || user.role !== "teacher") {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const data = noteSchema.parse(await request.json());
    await db.execute({
      sql: `INSERT INTO class_notes (class_id, teacher_id, note, student_id)
            VALUES (?, ?, ?, ?)`,
      args: [data.classId, user.userId, data.note, data.studentId]
    });
    return new Response(JSON.stringify({ message: "Note added successfully" }), {
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
