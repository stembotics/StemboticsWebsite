import type { APIRoute } from 'astro';
import { signup } from '../../../lib/auth';
import { z } from 'zod';
import { sendWelcomeStudentEmail } from '../mailService';

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  role: z.enum(['student', 'teacher', 'parent', 'admin']).optional()
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = signupSchema.parse(await request.json());
    
    const { token, user } = await signup({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role
    });

    await sendWelcomeStudentEmail(data.email, `${data.firstName} ${data.lastName}`);
    
    return new Response(JSON.stringify({ token, user }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};