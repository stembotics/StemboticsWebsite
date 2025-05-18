import { d as db, v as verifyToken } from '../../../chunks/auth_H6y_H1li.mjs';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const POST = async ({ request, cookies }) => {
  try {
    const { courseId } = await request.json();
    if (!courseId) {
      return new Response(JSON.stringify({ error: "Course ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const courseResult = await db.execute({
      sql: "SELECT id FROM courses WHERE id = ?",
      args: [courseId]
    });
    if (!courseResult.rows[0]) {
      return new Response(JSON.stringify({ error: "Course not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const token = cookies.get("token");
    const user = token ? verifyToken(token.value) : null;
    const likedCourses = cookies.get("liked_courses")?.value?.split(",") || [];
    const isLiked = likedCourses.includes(courseId);
    let newLikeCount = 0;
    if (user) {
      const existingLike = await db.execute({
        sql: "SELECT id FROM course_likes WHERE course_id = ? AND user_id = ?",
        args: [courseId, user.userId]
      });
      if (existingLike.rows[0]) {
        await db.execute({
          sql: "DELETE FROM course_likes WHERE course_id = ? AND user_id = ?",
          args: [courseId, user.userId]
        });
        newLikeCount = -1;
      } else {
        await db.execute({
          sql: "INSERT INTO course_likes (course_id, user_id) VALUES (?, ?)",
          args: [courseId, user.userId]
        });
        newLikeCount = 1;
      }
    } else {
      if (isLiked) {
        const newLikedCourses = likedCourses.filter((id) => id !== courseId);
        cookies.set("liked_courses", newLikedCourses.join(","), {
          path: "/",
          maxAge: 60 * 60 * 24 * 365,
          // 1 year
          sameSite: "strict"
        });
      } else {
        likedCourses.push(courseId);
        cookies.set("liked_courses", likedCourses.join(","), {
          path: "/",
          maxAge: 60 * 60 * 24 * 365,
          // 1 year
          sameSite: "strict"
        });
      }
    }
    const likeCountResult = await db.execute({
      sql: "SELECT COUNT(*) as count FROM course_likes WHERE course_id = ?",
      args: [courseId]
    });
    const currentCount = Number(likeCountResult.rows[0].count);
    const updatedCount = currentCount + newLikeCount;
    return new Response(JSON.stringify({
      liked: !isLiked,
      count: updatedCount
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to process like" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
