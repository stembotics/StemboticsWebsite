import { v as verifyToken, d as db } from '../../../chunks/auth_AXbtZ2QN.mjs';
import { d as sendCourseEnrollmentEmail } from '../../../chunks/mailService_CEJTORmm.mjs';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const prerender = false;
const POST = async ({ request, cookies }) => {
  try {
    const token = cookies.get("token");
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const user = verifyToken(token.value);
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { courseId } = await request.json();
    if (!courseId) {
      return new Response(JSON.stringify({ error: "Course ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const courseResult = await db.execute({
      sql: `SELECT c.*, u.email as instructor_email 
            FROM courses c 
            JOIN users u ON c.instructor_id = u.id 
            WHERE c.id = ?`,
      args: [courseId]
    });
    if (!courseResult.rows[0]) {
      return new Response(JSON.stringify({ error: "Course not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const course = courseResult.rows[0];
    const studentResult = await db.execute({
      sql: "SELECT first_name, last_name, email FROM users WHERE id = ?",
      args: [user.userId]
    });
    if (!studentResult.rows[0]) {
      return new Response(JSON.stringify({ error: "Student not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const student = studentResult.rows[0];
    const existingEnrollment = await db.execute({
      sql: "SELECT id FROM enrollments WHERE user_id = ? AND course_id = ?",
      args: [user.userId, courseId]
    });
    if (existingEnrollment.rows[0]) {
      return new Response(JSON.stringify({ error: "Already enrolled in this course" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    await db.execute({
      sql: "INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)",
      args: [user.userId, courseId]
    });
    await sendCourseEnrollmentEmail(
      student.email,
      `${student.first_name} ${student.last_name}`,
      course.title
    );
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "An error occurred" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
