import { defineMiddleware } from 'astro/middleware';
import { verifyToken } from '../lib/auth';

export const authMiddleware = defineMiddleware(async ({ request, redirect, cookies }) => {
  const token = cookies.get('token');
  
  // Protected routes that require authentication
  const protectedRoutes = ['/dashboard'];
  const url = new URL(request.url);
  
  if (protectedRoutes.some(route => url.pathname.startsWith(route))) {
    if (!token || !verifyToken(token.value)) {
      return redirect('/login');
    }
  }
  
  return;
});