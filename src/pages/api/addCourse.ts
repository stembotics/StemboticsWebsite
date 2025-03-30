import type { APIRoute } from "astro";
import { turso } from "@/turso";
import Stripe from "stripe";
import { sendMail } from "./mailService";


export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const stripe = new Stripe(import.meta.env.STRIPE_KEY);
  const teacher_id = data.get("teacher_id");
  const name = data.get("name");
  const description = data.get("description");
  const category = data.get("category");
  const location = data.get("location");
  const startDate = data.get("start_date");
  const day_id = data.get("day");
  const endDate = data.get("end_date");
  const price = parseFloat(data.get("price")); // Convert price to a number
  const date = new Date();

  // Optionally, if you need to work with dates as Date objects:
  const start_date = new Date(startDate);
  const end_date = new Date(endDate);
  console.log(day_id)
  const product = await stripe.products.create({
    name: name,
    description: description,
    default_price_data: {
      currency: 'usd',
      unit_amount: price*100
    }
  });
  
  const paymentLink = await stripe.paymentLinks.create({
    line_items: [
      {
        price: `${product.default_price}`,
        quantity: 1,
      },
    ],
  });
  console.log(product);

  const { rows } = await turso.execute({
    sql: 'SELECT first_name, last_name, email FROM Teachers WHERE teacher_id = ?;',
    args: [teacher_id]
  });
  const teacher_name = rows[0][0] + rows[0][1]
  const teacher_email = rows[0][2]

  const from: string = 'Stembotics Academy <info.stembotics@gmail.com>';
  const to: string = 'info@stembotics.org';
  const subject: string = 'New Course request: ' + name;
   const mailTemplate: string = `New Course to be added: \n

Name: ${name}\n
Category: ${category}\n
Location: ${location}\n
Start Date: ${startDate}\n
End Date: ${endDate}\n
Description: ${description}\n
Price: ${price}\n
Day ID: ${day_id}\n
Teacher ID: ${teacher_id}\n
Teacher Name: ${teacher_name}\n
Teacher Email: ${teacher_email}\n`

// Product ID: ${product.id}\n
// Payment Link ID: ${paymentLink.id}\n
  
  sendMail( from, to, subject, mailTemplate);
  await turso.execute({
    sql: `
      INSERT INTO Courses (name, description, category, location, start_date, end_date, price, product_id, plink_id, day_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    args: [name, description, category, location, startDate, endDate, price, product.id, paymentLink.id, day_id]
  });

  // Step 2: Retrieve the ID of the newly inserted child
  const { rows } = await turso.execute({
    sql: 'SELECT id FROM Courses WHERE name = ? AND category = ? AND location = ?',
    args: [name, category, location]
  });
  
  // Retrieve the child_id
  const course_id = rows[0]?.id;

  console.log(course_id)
  console.log(teacher_id)
  // Step 3: Link the child with their parent in the UserChildren table
  await turso.execute({
    sql: 'INSERT INTO CourseTeachers (course_id, teacher_id) VALUES (?, ?)',
    args: [course_id, teacher_id]
  });

  
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success! You can now hit the close button and DON'T FORGET TO RELOAD"
    }),
    { status: 200 }
  );
};