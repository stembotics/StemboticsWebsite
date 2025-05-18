export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const POST = async ({ cookies }) => {
  try {
    cookies.delete("token", {
      path: "/",
      secure: true,
      httpOnly: true,
      sameSite: "lax"
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to sign out" }), {
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
