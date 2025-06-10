import { v as verifyToken, d as db } from '../../../../chunks/auth_DGYWq9VH.mjs';
import { z } from 'zod';
export { r as renderers } from '../../../../chunks/internal_BsTt5pTQ.mjs';

class Logger {
  formatMessage(level, message, ...args) {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const formattedArgs = args.map(
      (arg) => arg instanceof Error ? arg.stack || arg.message : JSON.stringify(arg)
    ).join(" ");
    return `[${timestamp}] ${level.toUpperCase()}: ${message} ${formattedArgs}`;
  }
  info(message, ...args) {
    console.log(this.formatMessage("info", message, ...args));
  }
  warn(message, ...args) {
    console.warn(this.formatMessage("warn", message, ...args));
  }
  error(message, ...args) {
    console.error(this.formatMessage("error", message, ...args));
  }
  debug(message, ...args) {
    if (process.env.NODE_ENV === "development") {
      console.debug(this.formatMessage("debug", message, ...args));
    }
  }
}
const logger = new Logger();

const contentSchema = z.object({
  courseId: z.string().transform((val) => parseInt(val, 10)),
  weekNumber: z.number().int().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  type: z.enum(["video", "text", "quiz", "assignment"]),
  content: z.string().min(1),
  order: z.number().int().min(0)
});
const POST = async ({ request, cookies }) => {
  try {
    const token = cookies.get("token");
    if (!token) {
      logger.warn("Content creation attempted without authentication");
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const user = verifyToken(token.value);
    if (!user) {
      logger.warn("Content creation attempted with invalid token");
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    logger.info(`Course content creation initiated by user ${user.userId}`);
    const data = contentSchema.parse(await request.json());
    const courseCheck = await db.execute({
      sql: "SELECT instructor_id FROM courses WHERE id = ?",
      args: [data.courseId]
    });
    if (!courseCheck.rows[0]) {
      logger.warn(`Course not found: ${data.courseId}`);
      return new Response(JSON.stringify({ error: "Course not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (courseCheck.rows[0].instructor_id !== user.userId) {
      logger.warn(`Unauthorized content creation attempt for course ${data.courseId} by user ${user.userId}`);
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 403,
        headers: { "Content-Type": "application/json" }
      });
    }
    const orderResult = await db.execute({
      sql: `SELECT COALESCE(MAX(order_index), -1) + 1 as next_order 
            FROM course_content 
            WHERE course_id = ? AND week_number = ?`,
      args: [data.courseId, data.weekNumber]
    });
    const orderIndex = orderResult.rows[0].next_order;
    const result = await db.execute({
      sql: `INSERT INTO course_content (
              course_id, 
              week_number,
              title, 
              description,
              type, 
              content, 
              order_index
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
            RETURNING id`,
      args: [
        data.courseId,
        data.weekNumber,
        data.title,
        data.description,
        data.type,
        data.content,
        orderIndex
      ]
    });
    logger.info(`Course content created successfully: ${result.rows[0].id} for course ${data.courseId} week ${data.weekNumber}`);
    return new Response(JSON.stringify({ content: result.rows[0] }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    logger.error("Course content creation failed:", error);
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
