"use client";

import React from "react";

/* ---------------- SECTION GLOW ---------------- */
function SectionGlow({ children, className = "" }) {
  return (
    <section
      className={`animate-fadeIn relative bg-white/80 backdrop-blur rounded-3xl p-10 shadow-sm overflow-hidden my-12 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 via-pink-100 to-white/0 opacity-40 -z-10 rounded-3xl" />
      <div className="absolute inset-0 bg-glow -z-20 rounded-3xl" />
      {children}
    </section>
  );
}

/* ---------------- STRIPE CHECKOUT ---------------- */
async function checkout(priceId) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId }),
  });

  const data = await res.json();

  if (data.url) {
    window.location.href = data.url;
  } else {
    alert("Something went wrong. Please try again.");
  }
}

/* ---------------- SHOP PAGE ---------------- */
export default function ShopPage() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">

      {/* HEADER */}
      <SectionGlow>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Shop Gift Me Right™
        </h1>
        <p className="text-center text-gray-700 text-lg">
          Two ways to stop guessing and start gifting with intention.
        </p>
      </SectionGlow>

      {/* DIY PRODUCT */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-pink-600 mb-2">
          DIY Gift Blueprint
        </h2>

        <p className="text-gray-700 mb-4">
          A self-guided framework for people who want clarity without
          overthinking.
        </p>

        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Fillable personality questionnaire</li>
          <li>Gift interpretation guide</li>
          <li>Clear decision-making steps</li>
          <li>Instant access</li>
        </ul>

        <p className="font-semibold text-gray-900 mb-4">
          $29.99 — One-time purchase
        </p>

        <button
          onClick={() =>
            checkout(process.env.NEXT_PUBLIC_DIY_PRICE_ID)
          }
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Get the DIY Blueprint
        </button>
      </SectionGlow>

      {/* DONE-FOR-YOU PRODUCT */}
      <SectionGlow className="border border-pink-300">

        {/* MOST POPULAR BADGE */}
        <div className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-pink-700 bg-pink-100 rounded-full">
          Most Popular
        </div>

        <h2 className="text-2xl font-semibold text-pink-700 mb-2">
          🎁 Personalized Gift Match — Limited Spots
        </h2>

        <p className="text-gray-700 mb-4">
          For moments that matter most. We analyze your answers and tell
          you exactly what to buy — and why it works.
        </p>

        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>We analyze the questionnaire for you</li>
          <li>Personalized gift recommendation</li>
          <li>Emotional reasoning behind the choice</li>
          <li>Delivered as a polished PDF or email</li>
        </ul>

        <p className="font-semibold text-gray-900">
          $69.99 — Done for you
        </p>

        {/* EXCLUSIVITY LINE */}
        <p className="text-sm text-pink-700 mt-2 mb-4">
          Limited availability · Hand-reviewed for quality
        </p>

        <button
          onClick={() =>
            checkout(process.env.NEXT_PUBLIC_DONE_FOR_YOU_PRICE_ID)
          }
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Upgrade to Personalized Match
        </button>
      </SectionGlow>
        {/* COUPONS */}
      <SectionGlow>
        <h2 className="text-3xl font-semibold text-pink-600 mb-2">
          Thoughtful Coupons
        </h2>

        <p className="text-gray-700 mb-6">
          Small gestures can feel incredibly meaningful — when they’re done right.
          These coupons are designed to show care, appreciation, and effort without
          feeling cheesy or forced.
        </p>

        <ul className="list-disc pl-5 text-gray-700 mb-6">
          <li>Printable or digital coupons</li>
          <li>Designed for partners and family</li>
          <li>No awkward promises or pressure</li>
          <li>Perfect as a main gift or add-on</li>
        </ul>

        <p className="font-semibold text-gray-900 mb-4">
          Instant download • Low-pressure • High impact
        </p>

        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700">
          View Coupon Packs
        </button>
      </SectionGlow>

      {/* GAMES */}
      <SectionGlow>
        <h2 className="text-3xl font-semibold text-pink-600 mb-2">
          Conversation & Connection Games
        </h2>

        <p className="text-gray-700 mb-6">
          Not every meaningful moment needs a big gift. Sometimes it’s just the
          right question at the right time.
        </p>

        <ul className="list-disc pl-5 text-gray-700 mb-6">
          <li>Thoughtful, natural conversation prompts</li>
          <li>Balanced between fun and meaningful</li>
          <li>Perfect for couples, families, or quiet nights</li>
          <li>No forced vulnerability</li>
        </ul>

        <p className="font-semibold text-gray-900 mb-4">
          Connection — without the pressure to say the perfect thing
        </p>

        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700">
          Explore the Games
        </button>
      </SectionGlow>

      {/* SLIDESHOWS */}
      <SectionGlow>
        <h2 className="text-3xl font-semibold text-pink-600 mb-2">
          Emotional Slideshows
        </h2>

        <p className="text-gray-700 mb-6">
          When you know how you feel — but don’t know how to say it — these
          slideshows help you express appreciation, love, and gratitude in a
          calm, sincere way.
        </p>

        <ul className="list-disc pl-5 text-gray-700 mb-6">
          <li>Guided prompts to help you express yourself</li>
          <li>Clean, modern design</li>
          <li>Easy to personalize</li>
          <li>Share digitally or print</li>
        </ul>

        <p className="font-semibold text-gray-900 mb-4">
          A quiet, meaningful way to say “you matter to me”
        </p>

        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700">
          View Slideshows
        </button>
      </SectionGlow>

    </main>
  );
}
