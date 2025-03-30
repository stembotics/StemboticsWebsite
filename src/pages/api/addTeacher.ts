import type { APIRoute } from "astro";
import { turso } from "@/turso";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const first_name = data.get("first_name");
  const last_name = data.get("last_name");
  const email = data.get("email");
  const institution = data.get("institution");
  const password = data.get("password");
  const hours = data.get("hours");
  const dob = data.get("dob");
  const date = new Date(); // Current timestamp for registration date

  // Convert date of birth to Date object if needed
  const date_of_birth = new Date(dob);

  if (date_of_birth > date) {
    return new Response(
      JSON.stringify({
        message: "That birthday has gotta be wrong! Try again?",
      }),
      { status: 400 }
    );
  }

  await turso.execute({
    sql: 'INSERT INTO Teachers (first_name, last_name, email, institution, password, birth_date, hours) VALUES (?, ?, ?, ?, ?, ?, ?)',
    args: [first_name, last_name, email, institution, password, date_of_birth, 0]
  });

  
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success! You can now hit the close button and then sign in"
    }),
    { status: 200 }
  );
};