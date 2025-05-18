import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ cookies }) => {
  try {
    // Clear the auth cookie
    cookies.delete('token', {
      path: '/',
      secure: true,
      httpOnly: true,
      sameSite: 'lax'
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to sign out' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 