import { d as db, v as verifyToken } from '../../chunks/auth_DGYWq9VH.mjs';
import Stripe from 'stripe';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16"
});
const GET = async ({ request }) => {
  try {
    const products = await db.execute({
      sql: "SELECT * FROM products ORDER BY created_at DESC",
      args: []
    });
    return new Response(JSON.stringify(products.rows), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const POST = async ({ request }) => {
  console.log("POST request received1 ");
  try {
    console.log("POST request received");
    const token = request.headers.get("cookie")?.split(";").find((c) => c.trim().startsWith("token="))?.split("=")[1];
    console.log("Token:", token);
    if (!token) {
      console.log("No token provided");
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const user = verifyToken(token);
    console.log("User:", user);
    if (!user || user.role !== "admin") {
      console.log("User not admin or invalid");
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const data = await request.json();
    console.log("Product data:", data);
    const { name, description, price, category, stock, image } = data;
    if (!name || !description || !price || !category || stock === void 0 || !image) {
      console.log("Missing required fields:", { name, description, price, category, stock, image });
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    console.log("Before Stripe product creation");
    const imageUrl = image.startsWith("data:image") ? "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" : image;
    const stripeProduct = await stripe.products.create({
      name,
      description,
      images: [imageUrl],
      metadata: {
        category
      }
    });
    console.log("After Stripe product creation:", stripeProduct);
    console.log("Before Stripe price creation");
    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: Math.round(Number(price) * 100),
      // Convert to cents
      currency: "usd"
    });
    console.log("After Stripe price creation:", stripePrice);
    console.log("Before DB insert");
    const result = await db.execute({
      sql: `
        INSERT INTO products (
          name, 
          description, 
          price, 
          category, 
          stock,
          stripe_product_id, 
          stripe_price_id
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
        RETURNING *
      `,
      args: [
        name,
        description,
        price,
        category,
        stock,
        stripeProduct.id,
        stripePrice.id
      ]
    });
    console.log("After DB insert:", result.rows[0]);
    const product = result.rows[0];
    console.log("Before product_images insert");
    await db.execute({
      sql: `
        INSERT INTO product_images (product_id, url, alt_text, display_order)
        VALUES (?, ?, ?, ?)
      `,
      args: [product.id, image, name, 0]
    });
    console.log("After product_images insert");
    console.log("Returning response for product:", product);
    return new Response(JSON.stringify(product), {
      status: 201,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
