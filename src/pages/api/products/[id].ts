import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16'
});

export const GET: APIRoute = async ({ params }) => {
  try {
    const { id } = params;
    if (!id) {
      return new Response(JSON.stringify({ error: 'Product ID is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const result = await db.execute({
      sql: 'SELECT * FROM products WHERE id = ?',
      args: [id]
    });

    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return new Response(JSON.stringify(result.rows[0]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch product' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const PUT: APIRoute = async ({ request, params }) => {
  try {
    const token = request.headers.get('cookie')?.split(';').find(c => c.trim().startsWith('token='))?.split('=')[1];
    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const user = verifyToken(token);
    if (!user || user.role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const { id } = params;
    if (!id) {
      return new Response(JSON.stringify({ error: 'Product ID is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const data = await request.json();
    const { name, description, price, category, stock, image } = data;

    if (!name || !description || !price || !category || stock === undefined || !image) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Get current product to check if it has Stripe IDs
    const currentProduct = await db.execute({
      sql: 'SELECT stripe_product_id, stripe_price_id FROM products WHERE id = ?',
      args: [id]
    });

    if (currentProduct.rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const { stripe_product_id, stripe_price_id } = currentProduct.rows[0] as unknown as { 
      stripe_product_id: string | null;
      stripe_price_id: string | null;
    };

    const imageUrl = image.startsWith('data:image') 
      ? 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
      : image;

    // Update or create Stripe product
    let stripeProduct;
    if (stripe_product_id) {
      // Update existing product
      stripeProduct = await stripe.products.update(stripe_product_id, {
        name,
        description,
        images: [imageUrl],
        metadata: {
          category
        }
      });
    } else {
      // Create new product if it doesn't exist
      stripeProduct = await stripe.products.create({
        name,
        description,
        images: [imageUrl],
        metadata: {
          category
        }
      });
    }

    // Create new price if price has changed or if no price exists
    let stripePrice;
    if (stripe_price_id) {
      const currentPrice = await stripe.prices.retrieve(stripe_price_id);
      if (currentPrice.unit_amount !== Math.round(Number(price) * 100)) {
        // Create new price if the amount changed
        stripePrice = await stripe.prices.create({
          product: stripeProduct.id,
          unit_amount: Math.round(Number(price) * 100),
          currency: 'usd',
        });
      } else {
        // Keep existing price if amount hasn't changed
        stripePrice = { id: stripe_price_id };
      }
    } else {
      // Create new price if none exists
      stripePrice = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: Math.round(Number(price) * 100),
        currency: 'usd',
      });
    }

    // Update product in our database
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

    // Update the image in product_images table
    await db.execute({
      sql: `
        UPDATE product_images 
        SET url = ?, alt_text = ?
        WHERE product_id = ? AND display_order = 0
      `,
      args: [image, name, id]
    });

    // If no image record exists, create one
    const imageCheck = await db.execute({
      sql: 'SELECT id FROM product_images WHERE product_id = ?',
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
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error updating product:', error);
    return new Response(JSON.stringify({ error: 'Failed to update product' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const DELETE: APIRoute = async ({ request, params }) => {
  try {
    const token = request.headers.get('cookie')?.split(';').find(c => c.trim().startsWith('token='))?.split('=')[1];
    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const user = verifyToken(token);
    if (!user || user.role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const { id } = params;
    if (!id) {
      return new Response(JSON.stringify({ error: 'Product ID is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Get product to check if it has Stripe IDs
    const product = await db.execute({
      sql: 'SELECT stripe_product_id FROM products WHERE id = ?',
      args: [id]
    });

    if (product.rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const { stripe_product_id } = product.rows[0] as unknown as { stripe_product_id: string | null };

    // Archive Stripe product if it exists
    if (stripe_product_id) {
      await stripe.products.update(stripe_product_id, {
        active: false
      });
    }

    // Delete from our database
    await db.execute({
      sql: 'DELETE FROM products WHERE id = ?',
      args: [id]
    });

    return new Response(null, {
      status: 204
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete product' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 