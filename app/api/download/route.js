import Stripe from "stripe";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/* 🔒 PRICE → FILE MAP */
const PRICE_TO_FILE = {
  // Coupons
  "price_1StvhfAAECronuKAhohialtZ": "family-fun-coupons.pdf",
  "price_1StvjgAAECronuKAeJaJbisR": "partner-coupons.pdf",

  // Games
  "price_1StvmPAAECronuKABuovXtyZ": "family-brainstorm-game.pdf",
  "price_1StvlVAAECronuKAQrzxDMem": "teen-couple-quiz.pdf",

  // Slideshows
  "price_1StvtKAAECronuKA3l28jLCU": "brain-loves-and-breaks.pdf",
  "price_1StvsjAAECronuKAsk3QyRvg": "science-of-gift-giving.pdf",
  "price_1StvqaAAECronuKAXgQstRgP": "love-for-brainiacs.pdf",
  "price_1Stvq4AAECronuKAnbp9mtfT": "relationship-101-slideshow.pdf",
};

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return new NextResponse("Missing session ID", { status: 400 });
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items"],
  });

  const priceId = session.line_items.data[0].price.id;
  const fileName = PRICE_TO_FILE[priceId];

  if (!fileName) {
    return new NextResponse("File not found", { status: 404 });
  }

  const filePath = path.join(process.cwd(), "private-files", fileName);
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
    },
  });
}
