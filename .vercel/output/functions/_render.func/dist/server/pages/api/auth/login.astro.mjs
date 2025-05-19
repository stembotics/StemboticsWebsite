import { l as login } from '../../../chunks/auth_AXbtZ2QN.mjs';
import { z } from 'zod';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const prerender = false;
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});
const POST = async ({ request }) => {
  try {
    console.log("Login API endpoint called");
    const body = await request.json();
    const data = loginSchema.parse(body);
    console.log("Login data validated:", { email: data.email });
    const { token, user } = await login(data);
    console.log("Login successful, token generated:", { userId: user.id });
    return new Response(JSON.stringify({ token, user }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Login API error:", error);
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
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
