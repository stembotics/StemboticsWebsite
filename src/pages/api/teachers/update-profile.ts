import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';
import { z } from 'zod';

const updateProfileSchema = z.object({
  bio: z.string(),
  education: z.string().optional(),
  experience: z.string().optional(),
  location: z.string().optional(),
  linkedin: z.string().url().nullish(),
  portfolio: z.string().url().nullish(),
  twitter: z.string().url().nullish(),
  github: z.string().url().nullish(),
  youtube: z.string().url().nullish()
});

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // Verify authentication
    const token = cookies.get('token');
    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const user = verifyToken(token.value);
    if (!user) {
      return new Response(JSON.stringify({ error: 'Invalid token' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify user is a teacher
    const teacherCheck = await db.execute({
      sql: 'SELECT id FROM teachers WHERE user_id = ?',
      args: [user.userId]
    });

    if (!teacherCheck.rows[0]) {
      return new Response(JSON.stringify({ error: 'Not a teacher' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate request body
    const data = updateProfileSchema.parse(await request.json());

    // Update profile
    await db.execute({
      sql: `
        UPDATE teachers 
        SET bio = ?, 
            education = ?, 
            experience = ?, 
            location = ?, 
            linkedin = ?, 
            portfolio = ?,
            twitter = ?,
            github = ?,
            youtube = ?
        WHERE user_id = ?
      `,
      args: [
        data.bio,
        data.education || null,
        data.experience || null,
        data.location || null,
        data.linkedin || null,
        data.portfolio || null,
        data.twitter || null,
        data.github || null,
        data.youtube || null,
        user.userId
      ]
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    return new Response(JSON.stringify({ error: 'Failed to update profile' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 