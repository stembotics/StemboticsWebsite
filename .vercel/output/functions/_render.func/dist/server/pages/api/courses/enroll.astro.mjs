import { v as verifyToken, d as db } from '../../../chunks/auth_DTf2el9S.mjs';
import nodemailer from 'nodemailer';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
async function sendCourseEnrollmentEmail(data) {
  const { studentName, courseName, courseStartDate, courseDuration, courseLevel } = data;
  const mailOptions = {
    from: `"Stembotics Academy" <${process.env.SMTP_FROM}>`,
    to: process.env.SMTP_TO,
    subject: "Course Enrollment Confirmation",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #4CAF50; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Course Enrollment Confirmation</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <p>Dear ${studentName},</p>
          
          <p>You have successfully enrolled in <strong>${courseName}</strong>.</p>
          
          <div style="background-color: #fff; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Course Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Start Date:</strong> ${new Date(courseStartDate).toLocaleDateString()}</li>
              <li><strong>Duration:</strong> ${courseDuration}</li>
              <li><strong>Level:</strong> ${courseLevel}</li>
            </ul>
          </div>
          
          <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #856404;">Important Payment Information</h3>
            <p style="color: #856404;">
              Payment links will be sent to your email one week before the first class. 
              Please make sure to check your email regularly for updates.
            </p>
          </div>
          
          <p>
            In the meantime, you can explore the course content and structure under the course description on the course page.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.SITE_URL}/dashboard" 
               style="background-color: #4CAF50; color: white; padding: 12px 24px; 
                      text-decoration: none; border-radius: 5px; display: inline-block;">
              Access Course
            </a>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; background-color: #f5f5f5; font-size: 12px; color: #666;">
          <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} Stembotics Academy. All rights reserved.</p>
          <p>123 Education Street, Learning City, ST 12345</p>
        </div>
      </div>
    `
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending enrollment email:", error);
    throw error;
  }
}

const prerender = false;
const POST = async ({ request }) => {
  try {
    const token = request.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const user = await verifyToken(token);
    if (!user || user.role !== "parent") {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const data = await request.json();
    const { childId, courseId } = data;
    if (!childId || !courseId) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const childResult = await db.execute({
      sql: `
        SELECT * FROM children
        WHERE id = ? AND parent_user_id = ?
      `,
      args: [childId, user.userId]
    });
    if (childResult.rows.length === 0) {
      return new Response(JSON.stringify({ error: "Child not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const courseResult = await db.execute({
      sql: `
        SELECT * FROM courses
        WHERE id = ?
      `,
      args: [courseId]
    });
    if (courseResult.rows.length === 0) {
      return new Response(JSON.stringify({ error: "Course not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const enrollmentResult = await db.execute({
      sql: `
        SELECT * FROM enrollments
        WHERE child_id = ? AND course_id = ?
      `,
      args: [childId, courseId]
    });
    if (enrollmentResult.rows.length > 0) {
      return new Response(JSON.stringify({ error: "Already enrolled in this course" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const result = await db.execute({
      sql: `
        INSERT INTO enrollments (
          child_id,
          course_id,
          status,
          created_at,
          updated_at
        ) VALUES (?, ?, 'pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
        RETURNING *
      `,
      args: [childId, courseId]
    });
    const enrollment = result.rows[0];
    await sendCourseEnrollmentEmail({
      studentName: `${String(childResult.rows[0].first_name)} ${String(childResult.rows[0].last_name)}`,
      courseName: String(courseResult.rows[0].title),
      courseStartDate: (/* @__PURE__ */ new Date()).toISOString(),
      courseDuration: String(courseResult.rows[0].duration),
      courseLevel: String(courseResult.rows[0].level)
    });
    return new Response(JSON.stringify(enrollment), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error enrolling in course:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
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
