import type { APIRoute } from 'astro';
import { signup } from '../../../lib/auth';
import { db } from '../../../lib/db';
import { z } from 'zod';
import { sendWelcomeTeacherEmail } from '../mailService';

// This matches what createUser returns from the database
interface DbUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
}

const teacherSignupSchema = z.object({
  // User data
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  
  // Teacher data
  location: z.string().min(1, 'Location is required'),
  currentRole: z.string().min(1, 'Current role is required'),
  experience: z.string().min(1, 'Experience is required'),
  education: z.string().min(1, 'Education is required'),
  linkedin: z.string()
    .url('Please enter a valid LinkedIn URL (e.g., https://linkedin.com/in/username)')
    .optional()
    .or(z.literal('')),
  portfolio: z.string()
    .url('Please enter a valid portfolio URL (e.g., https://yourportfolio.com)')
    .optional()
    .or(z.literal('')),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = teacherSignupSchema.parse(await request.json());
    
    // Create the user first
    const result = await signup({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      role: 'teacher'
    });

    // The user object from signup contains the database row
    const dbUser = result.user as unknown as DbUser;

    // Insert teacher profile
    await db.execute({
      sql: `INSERT INTO teachers (
        user_id, location, current_role, experience, education,
        linkedin, portfolio
      ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      args: [
        dbUser.id,
        data.location,
        data.currentRole,
        data.experience,
        data.education,
        data.linkedin || null,
        data.portfolio || null
      ]
    });

    // Send welcome email
    await sendWelcomeTeacherEmail(data.email, `${data.firstName} ${data.lastName}`);

    return new Response(JSON.stringify({ token: result.token, user: dbUser }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 