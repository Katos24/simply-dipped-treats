import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { productName, price, quantity = 1, fulfillmentType } = await req.json();

    if (!productName || !price) {
      return NextResponse.json(
        { error: 'Missing product name or price.' },
        { status: 400 }
      );
    }

    // Use Stripe's built-in type for line items
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: productName,
          },
          unit_amount: Math.round(price * 100), // in cents
        },
        quantity,
      },
    ];

    if (fulfillmentType === 'delivery') {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Delivery Fee',
          },
          unit_amount: 1000, // $10 delivery fee
        },
        quantity: 1,
      });
    }

    // Use Stripe's proper type for session creation
    const sessionConfig: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/treats`,
      metadata: {
        fulfillmentType,
      },
    };

    if (fulfillmentType === 'delivery') {
      sessionConfig.shipping_address_collection = {
        allowed_countries: ['US'],
      };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}
