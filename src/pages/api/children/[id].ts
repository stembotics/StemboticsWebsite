import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';
import { z } from 'zod';

const updateChildSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z.string(),
  grade: z.string(),
  medicalInfo: z.string().optional()
});

// Get a specific child
export const GET: APIRoute = async ({ params, cookies }) => {
  try {
    const token = cookies.get('token');
    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const user = verifyToken(token.value);
    if (!user || user.role !== 'parent') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const childId = params.id;
    if (!childId) {
      return new Response(JSON.stringify({ error: 'Child ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const child = await db.execute({
      sql: 'SELECT * FROM children WHERE id = ? AND parent_user_id = ?',
      args: [childId, user.userId]
    });

    if (!child.rows[0]) {
      return new Response(JSON.stringify({ error: 'Child not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify(child.rows[0]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// Update a child
export const PUT: APIRoute = async ({ params, request, cookies }) => {
  try {
    const token = cookies.get('token');
    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const user = verifyToken(token.value);
    if (!user || user.role !== 'parent') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const childId = params.id;
    if (!childId) {
      return new Response(JSON.stringify({ error: 'Child ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify child belongs to parent
    const childCheck = await db.execute({
      sql: 'SELECT id FROM children WHERE id = ? AND parent_user_id = ?',
      args: [childId, user.userId]
    });

    if (!childCheck.rows[0]) {
      return new Response(JSON.stringify({ error: 'Child not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
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
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// Delete a child
export const DELETE: APIRoute = async ({ params, cookies }) => {
  try {
    const token = cookies.get('token');
    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const user = verifyToken(token.value);
    if (!user || user.role !== 'parent') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const childId = params.id;
    if (!childId) {
      return new Response(JSON.stringify({ error: 'Child ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify child belongs to parent
    const childCheck = await db.execute({
      sql: 'SELECT id FROM children WHERE id = ? AND parent_user_id = ?',
      args: [childId, user.userId]
    });

    if (!childCheck.rows[0]) {
      return new Response(JSON.stringify({ error: 'Child not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    await db.execute({
      sql: 'DELETE FROM children WHERE id = ?',
      args: [childId]
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 