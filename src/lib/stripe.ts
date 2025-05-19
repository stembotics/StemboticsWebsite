import Stripe from 'stripe';
import { STRIPE_SECRET_KEY, SITE_URL } from 'astro:env/server';

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16'
});

export async function createCheckoutSession(priceId: string, userId: string) {
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${SITE_URL}/checkout/cancel`,
    metadata: {
      userId,
    },
  });

  return session;
}

export async function handleWebhook(rawBody: string, signature: string) {
  try {
    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      import.meta.env.STRIPE_WEBHOOK_SECRET
    );

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        // Handle successful payment
        break;
    }

    return { success: true };
  } catch (err) {
    console.error('Webhook error:', err);
    throw new Error('Webhook signature verification failed');
  }
}