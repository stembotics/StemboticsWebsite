import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { courseId } = await request.json();
    if (!courseId) {
      return new Response(JSON.stringify({ error: 'Course ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if course exists
    const courseResult = await db.execute({
      sql: 'SELECT id FROM courses WHERE id = ?',
      args: [courseId]
    });

    if (!courseResult.rows[0]) {
      return new Response(JSON.stringify({ error: 'Course not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const token = cookies.get('token');
    const user = token ? verifyToken(token.value) : null;
    const likedCourses = cookies.get('liked_courses')?.value?.split(',') || [];
    const isLiked = likedCourses.includes(courseId);

    let newLikeCount = 0;

    if (user) {
      // Handle authenticated user likes
      const existingLike = await db.execute({
        sql: 'SELECT id FROM course_likes WHERE course_id = ? AND user_id = ?',
        args: [courseId, user.userId]
      });

      if (existingLike.rows[0]) {
        // Unlike
        await db.execute({
          sql: 'DELETE FROM course_likes WHERE course_id = ? AND user_id = ?',
          args: [courseId, user.userId]
        });
        newLikeCount = -1;
      } else {
        // Like
        await db.execute({
          sql: 'INSERT INTO course_likes (course_id, user_id) VALUES (?, ?)',
          args: [courseId, user.userId]
        });
        newLikeCount = 1;
      }
    } else {
      // Handle unauthenticated user likes
      if (isLiked) {
        // Unlike - remove from cookie
        const newLikedCourses = likedCourses.filter(id => id !== courseId);
        cookies.set('liked_courses', newLikedCourses.join(','), {
          path: '/',
          maxAge: 60 * 60 * 24 * 365, // 1 year
          sameSite: 'strict'
        });
      } else {
        // Like - add to cookie
        likedCourses.push(courseId);
        cookies.set('liked_courses', likedCourses.join(','), {
          path: '/',
          maxAge: 60 * 60 * 24 * 365, // 1 year
          sameSite: 'strict'
        });
      }
    }

    // Get current like count
    const likeCountResult = await db.execute({
      sql: 'SELECT COUNT(*) as count FROM course_likes WHERE course_id = ?',
      args: [courseId]
    });

    const currentCount = Number(likeCountResult.rows[0].count);
    const updatedCount = currentCount + newLikeCount;

    return new Response(JSON.stringify({ 
      liked: !isLiked,
      count: updatedCount
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to process like' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 