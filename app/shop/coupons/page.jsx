"use client";

import React from "react";

/* ---------------- SECTION GLOW ---------------- */
function SectionGlow({ children, className = "" }) {
  return (
    <section
      className={`animate-fadeIn relative bg-white/80 backdrop-blur rounded-3xl p-10 shadow-sm overflow-hidden my-12 ${className}`}
    >
      {/* background layers for glow effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 via-pink-100 to-white/0 opacity-40 -z-10 rounded-3xl" />
      <div className="absolute inset-0 bg-glow -z-20 rounded-3xl" />
      {children}
    </section>
  );
}

/* ---------------- PAGE ---------------- */
export default function CouponsPage() {
  return (
    <main className="soft-glow min-h-screen px-6 py-16 max-w-5xl mx-auto">
      <SectionGlow>
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Thoughtful Coupon Packs
        </h1>

        <p className="text-gray-700 mb-6">
          Simple, meaningful gestures that feel intentional — not awkward.
          These coupons are designed for family, friends, or your partner.
        </p>

        <ul className="list-disc pl-5 text-gray-700 mb-6">
          <li>Printable & digital formats</li>
          <li>No guilt-based promises</li>
          <li>Emotionally thoughtful, not cheesy</li>
          <li>Perfect as a main gift or add-on</li>
        </ul>

        <p className="font-semibold text-gray-900 mb-4">
          Instant download • Low-pressure • High impact
        </p>
      </SectionGlow>

      {/* Example Product Button */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Family Fun Coupon Pack
        </h2>

        <p className="text-gray-700 mb-4">
          4 coupons per page, 31 pages total — thoughtful and easy to use.
        </p>

        <p className="font-semibold text-gray-900 mb-4">
          $9.99 • Instant download
        </p>

        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700">
          Buy Family Coupons
        </button>
      </SectionGlow>

      <SectionGlow>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Naughty & Nice Partner Coupons (18+)
        </h2>

        <p className="text-gray-700 mb-4">
          4 coupons per page, 51 pages total — fun, romantic, and memorable.
        </p>

        <p className="font-semibold text-gray-900 mb-4">
          $12.99 • Instant download
        </p>

        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700">
          Buy Partner Coupons
        </button>
      </SectionGlow>
    </main>
  );
}
