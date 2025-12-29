import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { items, metadata } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map(item => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.amount,
        },
        quantity: item.quantity,
      })),
      metadata, // store answers & format
      success_url: `${req.headers.get("origin")}/journal?email=${metadata.email}`, // redirect to journal page
      cancel_url: `${req.headers.get("origin")}/create`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
