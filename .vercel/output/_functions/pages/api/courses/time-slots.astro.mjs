import { v as verifyToken, d as db } from '../../../chunks/auth_DGYWq9VH.mjs';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const POST = async ({ request, cookies }) => {
  try {
    const token = cookies.get("token");
    const user = token ? verifyToken(token.value) : null;
    if (!user || user.role !== "teacher") {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { courseId, timeSlots } = await request.json();
    if (typeof courseId !== "number" || !Array.isArray(timeSlots)) {
      return new Response(JSON.stringify({ error: "Invalid courseId or timeSlots format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const courseResult = await db.execute({
      sql: "SELECT instructor_id FROM courses WHERE id = ?",
      args: [courseId]
    });
    if (!courseResult.rows.length || courseResult.rows[0].instructor_id !== user.userId) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    await db.execute({
      sql: "DELETE FROM time_slots WHERE course_id = ?",
      args: [courseId]
    });
    for (const slot of timeSlots) {
      await db.execute({
        sql: `
          INSERT INTO time_slots (
            course_id, day_of_week, start_time, end_time, max_capacity
          ) VALUES (?, ?, ?, ?, ?)
        `,
        args: [
          courseId,
          slot.day_of_week,
          slot.start_time,
          slot.end_time,
          slot.max_capacity
        ]
      });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error managing time slots:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
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
