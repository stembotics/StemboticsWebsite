import { v as verifyToken, d as db } from '../../../chunks/auth_DGYWq9VH.mjs';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 } from 'uuid';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

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
    const teacherCheck = await db.execute({
      sql: "SELECT id FROM teachers WHERE user_id = ?",
      args: [user.userId]
    });
    if (!teacherCheck.rows[0]) {
      return new Response(JSON.stringify({ error: "Not a teacher" }), {
        status: 403,
        headers: { "Content-Type": "application/json" }
      });
    }
    const formData = await request.formData();
    const image = formData.get("image");
    if (!image) {
      return new Response(JSON.stringify({ error: "No image provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!image.type.startsWith("image/")) {
      return new Response(JSON.stringify({ error: "File must be an image" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const fileExtension = image.name.split(".").pop();
    const fileName = `${v4()}.${fileExtension}`;
    const uploadDir = join(process.cwd(), "public", "uploads", "profiles");
    const filePath = join(uploadDir, fileName);
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await writeFile(filePath, buffer);
    const imageUrl = `/uploads/profiles/${fileName}`;
    await db.execute({
      sql: "UPDATE teachers SET profile_image = ? WHERE user_id = ?",
      args: [imageUrl, user.userId]
    });
    return new Response(JSON.stringify({ imageUrl }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    return new Response(JSON.stringify({ error: "Failed to upload image" }), {
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
