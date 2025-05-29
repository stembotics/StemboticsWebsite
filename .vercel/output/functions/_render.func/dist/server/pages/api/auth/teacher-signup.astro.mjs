import { s as signup, d as db } from '../../../chunks/auth_DTf2el9S.mjs';
import { z } from 'zod';
import { a as sendWelcomeTeacherEmail } from '../../../chunks/mailService_DS7jSZO7.mjs';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const teacherSignupSchema = z.object({
  // User data
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  // Teacher data
  location: z.string().min(1, "Location is required"),
  currentRole: z.string().min(1, "Current role is required"),
  experience: z.string().min(1, "Experience is required"),
  education: z.string().min(1, "Education is required"),
  linkedin: z.string().url("Please enter a valid LinkedIn URL (e.g., https://linkedin.com/in/username)").optional().or(z.literal("")),
  portfolio: z.string().url("Please enter a valid portfolio URL (e.g., https://yourportfolio.com)").optional().or(z.literal(""))
});
const POST = async ({ request }) => {
  try {
    const data = teacherSignupSchema.parse(await request.json());
    const result = await signup({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      role: "teacher"
    });
    const dbUser = result.user;
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
    await sendWelcomeTeacherEmail(data.email, `${data.firstName} ${data.lastName}`);
    return new Response(JSON.stringify({ token: result.token, user: dbUser }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
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
