import { d as db, v as verifyToken } from '../../../chunks/auth_C-EZHYYi.mjs';
import Stripe from 'stripe';
export { r as renderers } from '../../../chunks/internal_BsTt5pTQ.mjs';

const stripe = new Stripe(undefined                                 , {
  apiVersion: "2023-10-16"
});
const GET = async ({ params }) => {
  try {
    const { id } = params;
    if (!id) {
      return new Response(JSON.stringify({ error: "Product ID is required" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const result = await db.execute({
      sql: "SELECT * FROM products WHERE id = ?",
      args: [id]
    });
    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    return new Response(JSON.stringify(result.rows[0]), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch product" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const PUT = async ({ request, params }) => {
  try {
    const token = request.headers.get("cookie")?.split(";").find((c) => c.trim().startsWith("token="))?.split("=")[1];
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const user = verifyToken(token);
    if (!user || user.role !== "admin") {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const { id } = params;
    if (!id) {
      return new Response(JSON.stringify({ error: "Product ID is required" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const data = await request.json();
    const { name, description, price, category, stock, image } = data;
    if (!name || !description || !price || !category || stock === void 0 || !image) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const currentProduct = await db.execute({
      sql: "SELECT stripe_product_id, stripe_price_id FROM products WHERE id = ?",
      args: [id]
    });
    if (currentProduct.rows.length === 0) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const { stripe_product_id, stripe_price_id } = currentProduct.rows[0];
    const imageUrl = image.startsWith("data:image") ? "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" : image;
    let stripeProduct;
    if (stripe_product_id) {
      stripeProduct = await stripe.products.update(stripe_product_id, {
        name,
        description,
        images: [imageUrl],
        metadata: {
          category
        }
      });
    } else {
      stripeProduct = await stripe.products.create({
        name,
        description,
        images: [imageUrl],
        metadata: {
          category
        }
      });
    }
    let stripePrice;
    if (stripe_price_id) {
      const currentPrice = await stripe.prices.retrieve(stripe_price_id);
      if (currentPrice.unit_amount !== Math.round(Number(price) * 100)) {
        stripePrice = await stripe.prices.create({
          product: stripeProduct.id,
          unit_amount: Math.round(Number(price) * 100),
          currency: "usd"
        });
      } else {
        stripePrice = { id: stripe_price_id };
      }
    } else {
      stripePrice = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: Math.round(Number(price) * 100),
        currency: "usd"
      });
    }
    const result = await db.execute({
      sql: `
        UPDATE products 
        SET name = ?, 
            description = ?, 
            price = ?, 
            category = ?, 
            stock = ?,
            stripe_product_id = ?, 
            stripe_price_id = ?
        WHERE id = ?
        RETURNING *
      `,
      args: [
        name,
        description,
        price,
        category,
        stock,
        stripeProduct.id,
        stripePrice.id,
        id
      ]
    });
    await db.execute({
      sql: `
        UPDATE product_images 
        SET url = ?, alt_text = ?
        WHERE product_id = ? AND display_order = 0
      `,
      args: [image, name, id]
    });
    const imageCheck = await db.execute({
      sql: "SELECT id FROM product_images WHERE product_id = ?",
      args: [id]
    });
    if (imageCheck.rows.length === 0) {
      await db.execute({
        sql: `
          INSERT INTO product_images (product_id, url, alt_text, display_order)
          VALUES (?, ?, ?, ?)
        `,
        args: [id, image, name, 0]
      });
    }
    return new Response(JSON.stringify(result.rows[0]), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return new Response(JSON.stringify({ error: "Failed to update product" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const DELETE = async ({ request, params }) => {
  try {
    const token = request.headers.get("cookie")?.split(";").find((c) => c.trim().startsWith("token="))?.split("=")[1];
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const user = verifyToken(token);
    if (!user || user.role !== "admin") {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const { id } = params;
    if (!id) {
      return new Response(JSON.stringify({ error: "Product ID is required" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const product = await db.execute({
      sql: "SELECT stripe_product_id FROM products WHERE id = ?",
      args: [id]
    });
    if (product.rows.length === 0) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const { stripe_product_id } = product.rows[0];
    if (stripe_product_id) {
      await stripe.products.update(stripe_product_id, {
        active: false
      });
    }
    await db.execute({
      sql: "DELETE FROM products WHERE id = ?",
      args: [id]
    });
    return new Response(null, {
      status: 204
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return new Response(JSON.stringify({ error: "Failed to delete product" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
