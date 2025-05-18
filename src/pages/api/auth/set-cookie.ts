import type { APIRoute } from 'astro';
import { verifyToken } from '../../../lib/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    console.log('Set-cookie API endpoint called');
    const { token } = await request.json();
    
    if (!token) {
      console.error('No token provided in request');
      return new Response(JSON.stringify({ error: 'Token is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify token before setting cookie
    const decoded = verifyToken(token);
    if (!decoded) {
      console.error('Invalid token provided');
      return new Response(JSON.stringify({ error: 'Invalid token' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('Setting cookie with verified token for user:', decoded.userId);
    // Set the cookie with appropriate options
    cookies.set('token', token, {
      path: '/',
      httpOnly: false, // Allow JavaScript access
      secure: process.env.NODE_ENV === 'production', // Secure in production
      sameSite: 'lax', // Changed from 'strict' to 'lax' for better compatibility
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });
    console.log('Cookie set successfully');

    return new Response(JSON.stringify({ success: true, userId: decoded.userId }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Set-cookie API error:', error);
    const message = error instanceof Error ? error.message : 'Failed to set cookie';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 