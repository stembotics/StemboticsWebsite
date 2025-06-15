import { d as db } from '../../../chunks/db_C4TQcXrr.mjs';
import { v as verifyToken } from '../../../chunks/auth_DSpB_Pv2.mjs';
import { z } from 'zod';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const updateChildSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z.string(),
  grade: z.string(),
  medicalInfo: z.string().optional()
});
const GET = async ({ params, cookies }) => {
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
    const childId = params.id;
    if (!childId) {
      return new Response(JSON.stringify({ error: "Child ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const child = await db.execute({
      sql: "SELECT * FROM children WHERE id = ? AND parent_user_id = ?",
      args: [childId, user.userId]
    });
    if (!child.rows[0]) {
      return new Response(JSON.stringify({ error: "Child not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify(child.rows[0]), {
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
const PUT = async ({ params, request, cookies }) => {
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
    const childId = params.id;
    if (!childId) {
      return new Response(JSON.stringify({ error: "Child ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const childCheck = await db.execute({
      sql: "SELECT id FROM children WHERE id = ? AND parent_user_id = ?",
      args: [childId, user.userId]
    });
    if (!childCheck.rows[0]) {
      return new Response(JSON.stringify({ error: "Child not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const data = updateChildSchema.parse(await request.json());
    await db.execute({
      sql: `UPDATE children SET
        first_name = ?,
        last_name = ?,
        date_of_birth = ?,
        grade_level = ?,
        medical_emergency_contact_info = ?
      WHERE id = ?`,
      args: [
        data.firstName,
        data.lastName,
        data.dateOfBirth,
        data.grade,
        data.medicalInfo || null,
        childId
      ]
    });
    return new Response(JSON.stringify({ success: true }), {
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
const DELETE = async ({ params, cookies }) => {
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
    const childId = params.id;
    if (!childId) {
      return new Response(JSON.stringify({ error: "Child ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const childCheck = await db.execute({
      sql: "SELECT id FROM children WHERE id = ? AND parent_user_id = ?",
      args: [childId, user.userId]
    });
    if (!childCheck.rows[0]) {
      return new Response(JSON.stringify({ error: "Child not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    await db.execute({
      sql: "DELETE FROM children WHERE id = ?",
      args: [childId]
    });
    return new Response(JSON.stringify({ success: true }), {
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
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
