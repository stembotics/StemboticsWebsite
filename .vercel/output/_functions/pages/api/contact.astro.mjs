import { b as sendContactFormNotification } from '../../chunks/mailService_DS7jSZO7.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const POST = async ({ request }) => {
  try {
    const { name, email, subject, message } = await request.json();
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    await sendContactFormNotification(name, email, subject, message);
    return new Response(JSON.stringify({
      success: true,
      message: "Message sent successfully"
    }), {
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
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
