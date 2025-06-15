import { d as db } from '../../../../chunks/db_C4TQcXrr.mjs';
export { r as renderers } from '../../../../chunks/internal_BsTt5pTQ.mjs';

const GET = async ({ params }) => {
  try {
    const sessionId = params.id;
    if (!sessionId) {
      return new Response(JSON.stringify({ error: "Session ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const result = await db.execute({
      sql: `
        SELECT 
          ca.id,
          ca.child_id,
          ca.session_id,
          ca.status,
          c.first_name,
          c.last_name
        FROM class_attendance ca
        JOIN children c ON ca.child_id = c.id
        WHERE ca.session_id = ?
        ORDER BY c.first_name, c.last_name
      `,
      args: [sessionId]
    });
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching attendance:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch attendance" }), {
      status: 500,
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
