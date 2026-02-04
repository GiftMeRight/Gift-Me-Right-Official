"use client";

import React from "react";
import Link from "next/link";

/* ---------------- SECTION GLOW ---------------- */
function SectionGlow({ children, className = "" }) {
  return (
    <section
      className={`relative bg-white/80 backdrop-blur rounded-3xl p-10 shadow-sm overflow-hidden my-12 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 via-pink-100 to-white/0 opacity-40 -z-10 rounded-3xl" />
      {children}
    </section>
  );
}

/* ---------------- STRIPE CHECKOUT ---------------- */
async function checkout(priceId, successPath = "/success") {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId, successPath }),
  });

  const data = await res.json();

  if (data?.url) {
    window.location.href = data.url;
  } else {
    alert("Something went wrong. Please try again.");
  }
}

/* ---------------- SHOP PAGE ---------------- */
export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 max-w-5xl mx-auto">

      {/* HEADER */}
      <SectionGlow>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Shop Gift Me Right™
        </h1>
        <p className="text-center text-gray-700 text-lg">
          Stop guessing and start gifting with intention.
        </p>
      </SectionGlow>

      {/* DIY GIFT BLUEPRINT */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-pink-600 mb-2">
          DIY Gift Blueprint™
        </h2>

        <p className="text-gray-700 mb-4">
          A self-guided framework for people who want clarity without overthinking.
        </p>

        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Fillable personality questionnaire</li>
          <li>Gift interpretation guide</li>
          <li>Clear decision-making steps</li>
          <li>Instant access</li>
        </ul>

        <p className="font-semibold text-gray-900 mb-4">
          $29.99 • One-time purchase
        </p>

        <button
          onClick={() =>
            checkout(process.env.NEXT_PUBLIC_DIY_PRICE_ID, "/success")
          }
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Get the DIY Blueprint
        </button>
      </SectionGlow>

      {/* PERSONALIZED GIFT MATCH */}
      <SectionGlow className="border border-pink-300">
        <div className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-pink-700 bg-pink-100 rounded-full">
          Most Popular
        </div>

        <h2 className="text-2xl font-semibold text-pink-700 mb-2">
          🎁 Personalized Gift Match™
        </h2>

        <p className="text-gray-700 mb-4">
          We analyze your answers and tell you exactly what to buy — and why it works.
        </p>

        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Hand-reviewed questionnaire</li>
          <li>Personalized gift recommendation</li>
          <li>Emotional reasoning behind the choice</li>
          <li>Delivered digitally</li>
        </ul>

        <p className="font-semibold text-gray-900 mb-4">
          $69.99 • Done for you
        </p>

        <button
          onClick={() =>
            checkout(process.env.NEXT_PUBLIC_DONE_FOR_YOU_PRICE_ID, "/success")
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
          Small gestures that feel meaningful — without pressure or awkwardness.
        </p>

        <Link
          href="/shop/coupons"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          View Coupon Packs
        </Link>
      </SectionGlow>

      {/* GAMES */}
      <SectionGlow>
        <h2 className="text-3xl font-semibold text-pink-600 mb-2">
          Conversation & Connection Games
        </h2>

        <p className="text-gray-700 mb-6">
          Thoughtful prompts designed for real connection.
        </p>

        <Link
          href="/shop/games"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Explore the Games
        </Link>
      </SectionGlow>

      {/* SLIDESHOWS */}
      <SectionGlow>
        <h2 className="text-3xl font-semibold text-pink-600 mb-2">
          Emotional Slideshows
        </h2>

        <p className="text-gray-700 mb-6">
          Learn about love, connection, and gifting — clearly and calmly.
        </p>

        <Link
          href="/shop/slideshows"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          View Slideshows
        </Link>
      </SectionGlow>

    </main>
  );
}
