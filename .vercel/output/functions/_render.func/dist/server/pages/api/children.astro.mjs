import { v as verifyToken, d as db } from '../../chunks/auth_DTf2el9S.mjs';
import { z } from 'zod';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const childSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z.string(),
  grade: z.string(),
  medicalInfo: z.string().optional()
});
const GET = async ({ cookies }) => {
  try {
    const token = cookies.get("token");
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const user = verifyToken(token.value);
    if (!user || user.role !== "parent") {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const children = await db.execute({
      sql: "SELECT * FROM children WHERE parent_user_id = ?",
      args: [user.userId]
    });
    return new Response(JSON.stringify({ children: children.rows }), {
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
const POST = async ({ request, cookies }) => {
  try {
    const token = cookies.get("token");
    console.log("Token from cookies:", token);
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const user = verifyToken(token.value);
    console.log("Decoded user from token:", user);
    if (!user || user.role !== "parent") {
      console.log("User is not authorized. User:", user);
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const data = childSchema.parse(await request.json());
    const result = await db.execute({
      sql: `INSERT INTO children (
        first_name, last_name, date_of_birth, grade_level, medical_emergency_contact_info, parent_user_id
      ) VALUES (?, ?, ?, ?, ?, ?)
      RETURNING id`,
      args: [
        data.firstName,
        data.lastName,
        data.dateOfBirth,
        data.grade,
        data.medicalInfo || null,
        user.userId
      ]
    });
    return new Response(JSON.stringify({
      success: true,
      childId: result.rows[0].id
    }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error in POST /api/children:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
