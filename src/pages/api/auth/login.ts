import type { APIRoute } from 'astro';
import { login } from '../../../lib/auth';
import { z } from 'zod';

export const prerender = false;

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('Login API endpoint called');
    const body = await request.json();
    const data = loginSchema.parse(body);
    console.log('Login data validated:', { email: data.email });
    
    const { token, user } = await login(data);
    console.log('Login successful, token generated:', { userId: user.id });
    
    return new Response(JSON.stringify({ token, user }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Login API error:', error);
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};