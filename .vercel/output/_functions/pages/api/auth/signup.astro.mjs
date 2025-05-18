import { s as signup } from '../../../chunks/auth_H6y_H1li.mjs';
import { z } from 'zod';
import { s as sendWelcomeStudentEmail } from '../../../chunks/mailService_CEJTORmm.mjs';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1)
});
const POST = async ({ request }) => {
  try {
    const data = signupSchema.parse(await request.json());
    const { token, user } = await signup({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      role: "student"
    });
    await sendWelcomeStudentEmail(data.email, `${data.firstName} ${data.lastName}`);
    return new Response(JSON.stringify({ token, user }), {
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
