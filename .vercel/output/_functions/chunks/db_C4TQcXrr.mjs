import { createClient } from '@libsql/client/http';
import 'bcryptjs';
import 'jsonwebtoken';
import './mailService_DS7jSZO7.mjs';

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;
console.log("TURSO_DATABASE_URL:", url);
console.log("TURSO_AUTH_TOKEN:", authToken);
if (!url || !authToken) {
  throw new Error("Missing Turso database credentials");
}
const db = createClient({
  url,
  authToken
});
async function createUser({ email, passwordHash, firstName, lastName, role }) {
  const result = await db.execute({
    sql: `INSERT INTO users (email, password_hash, first_name, last_name, role) 
          VALUES (?, ?, ?, ?, ?)
          RETURNING id, email, first_name, last_name, role`,
    args: [email, passwordHash, firstName, lastName, role]
  });
  if (!result.rows || result.rows.length === 0) {
    throw new Error("Failed to create user");
  }
  const row = result.rows[0];
  return {
    id: row.id,
    email: row.email,
    firstName: row.first_name,
    lastName: row.last_name,
    role: row.role
  };
}
async function getUserByEmail(email) {
  const result = await db.execute({
    sql: "SELECT id, email, password_hash, first_name, last_name, role FROM users WHERE email = ?",
    args: [email]
  });
  const row = result.rows[0];
  if (row) {
    return {
      id: row.id,
      email: row.email,
      firstName: row.first_name,
      lastName: row.last_name,
      role: row.role,
      password_hash: row.password_hash
    };
  } else {
    return void 0;
  }
}
async function getChildren(parentId) {
  const result = await db.execute({
    sql: `
      SELECT 
        c.id,
        c.parent_user_id,
        c.first_name,
        c.last_name,
        c.date_of_birth,
        c.grade_level,
        c.medical_emergency_contact_info,
        json_group_array(
          json_object(
            'id', e.id,
            'course', json_object(
              'id', co.id,
              'title', co.title,
              'description', co.description,
              'instructor', (
                SELECT u.first_name || ' ' || u.last_name
                FROM users u
                WHERE u.id = co.instructor_id
              )
            ),
            'status', e.status,
            'time_slot', CASE WHEN ts.id IS NOT NULL THEN json_object(
              'day_of_week', ts.day_of_week,
              'start_time', ts.start_time,
              'end_time', ts.end_time
            ) ELSE NULL END,
            'attendance', (
              SELECT json_group_array(
                json_object(
                  'date', ca.date,
                  'status', ca.status
                )
              )
              FROM course_attendance ca
              WHERE ca.child_id = c.id
              AND ca.course_id = co.id
            )
          )
        ) as enrollments
      FROM children c
      LEFT JOIN enrollments e ON c.id = e.child_id
      LEFT JOIN courses co ON e.course_id = co.id
      LEFT JOIN time_slots ts ON e.time_slot_id = ts.id
      WHERE c.parent_user_id = ?
      GROUP BY c.id
    `,
    args: [parentId]
  });
  return result.rows.map((row) => ({
    id: row.id,
    parent_user_id: row.parent_user_id,
    first_name: row.first_name,
    last_name: row.last_name,
    date_of_birth: row.date_of_birth,
    grade_level: row.grade_level,
    medical_emergency_contact_info: row.medical_emergency_contact_info,
    enrollments: JSON.parse(row.enrollments || "[]").filter((e) => e && e.course && e.course.id)
  }));
}

export { getChildren as a, createUser as c, db as d, getUserByEmail as g };
