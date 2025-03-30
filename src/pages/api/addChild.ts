import type { APIRoute } from "astro";
import { turso } from "@/turso";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const first_name = data.get("first_name");
  const user_id = data.get("user_id");
  const last_name = data.get("last_name");
  const dob = data.get("dob");
  const date_of_birth = new Date(dob);
  const date = new Date();

  if (date_of_birth > date) {
    return new Response(
      JSON.stringify({
        message: "That birthday has gotta be wrong! Try again?",
      }),
      { status: 400 }
    );
  }

  // Validate the data - you'll probably want to do more than this
  await turso.execute({
    sql: 'INSERT INTO Children (first_name, last_name, birth_date) VALUES (?, ?, ?)',
    args: [first_name, last_name, dob]
  });
  
  // Step 2: Retrieve the ID of the newly inserted child
  const { rows } = await turso.execute({
    sql: 'SELECT child_id FROM Children WHERE first_name = ? AND last_name = ? AND birth_date = ?',
    args: [first_name, last_name, dob]
  });
  
  // Retrieve the child_id
  const child_id = rows[0]?.child_id;

//   console.log(user_id);
//   console.log( child_id);
  // Step 3: Link the child with their parent in the UserChildren table
  await turso.execute({
    sql: 'INSERT INTO UserChildren (user_id, child_id) VALUES (?, ?)',
    args: [user_id, child_id]
  });



  
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success! You can now hit the close button and DON'T FORGET TO RELOAD"
    }),
    { status: 200 }
  );
};