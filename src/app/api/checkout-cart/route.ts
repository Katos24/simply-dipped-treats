import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface CartItem {
  productName: string;
  price: number;
  quantity: number;
  fulfillmentType: 'pickup' | 'delivery';
}

export async function POST(req: NextRequest) {
  try {
    const { items }: { items: CartItem[] } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty' },
        { status: 400 }
      );
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
    let needsShipping = false;

    items.forEach((item: CartItem) => {
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
  } catch (error) {
    console.error('Checkout error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error creating checkout session';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
