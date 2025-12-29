import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { product, answers } = await req.json();

    // Determine price based on format
    const amount = product === "printed" ? 3900 : 1900; // $39 or $19

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "All About Me Journal",
              description: "A personalized journal that helps people gift you right",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      metadata: {
        // Save all answers in metadata
        ...answers,
        format: product,
      },
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/create`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
