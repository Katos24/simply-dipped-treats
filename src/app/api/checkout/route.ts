import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

export async function POST(req: NextRequest) {
  try {
    const { productName, price, quantity = 1, fulfillmentType } = await req.json();

    const lineItems: any[] = [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: productName,
          },
          unit_amount: price * 100,
        },
        quantity,
      },
    ];

    // Add delivery fee if delivery selected
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

    const sessionConfig: any = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/treats`,
      metadata: {
        fulfillmentType,
      },
    };

    // Collect shipping address if delivery
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
