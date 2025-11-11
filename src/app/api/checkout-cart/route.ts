import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty' },
        { status: 400 }
      );
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
    let needsShipping = false;

    items.forEach((item: any) => {
      // Add product
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.productName,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      });

      // Add delivery fee if needed
      if (item.fulfillmentType === 'delivery') {
        needsShipping = true;
        lineItems.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Delivery Fee',
            },
            unit_amount: 1000,
          },
          quantity: item.quantity,
        });
      }
    });

    const sessionConfig: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/treats`,
    };

    if (needsShipping) {
      sessionConfig.shipping_address_collection = {
        allowed_countries: ['US'],
      };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: error?.message || 'Error creating checkout session' },
      { status: 500 }
    );
  }
}
