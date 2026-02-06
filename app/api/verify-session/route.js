import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { sessionId } = await req.json();

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      return NextResponse.json({ paid: true });
    }

    return NextResponse.json({ paid: false });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ paid: false }, { status: 500 });
  }
}
