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
async function checkout(priceId, successPath) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId, successPath }),
  });

  const data = await res.json();

  if (data.url) {
    window.location.href = data.url;
  } else {
    alert("Something went wrong. Please try again.");
  }
}

/* ---------------- COUPONS PAGE ---------------- */
export default function CouponsPage() {
  return (
    <main className="soft-glow min-h-screen px-6 py-16 max-w-5xl mx-auto">

      <SectionGlow>
        <h1 className="text-4xl font-bold text-pink-600 mb-4 text-center">
          Thoughtful Coupons
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Small gestures that feel incredibly meaningful. Perfect for family or your partner.
        </p>
      </SectionGlow>

      {/* Family Coupons */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Family Fun Coupon Pack
        </h2>
        <p className="text-gray-700 mb-4">
          31 pages • 4 coupons per page • Designed for parents, siblings, and BFFs
        </p>
        <p className="font-semibold text-gray-900 mb-4">
          $9.99 • Instant download
        </p>

        <button
          onClick={() =>
            checkout(
              "price_1StvhfAAECronuKAhohialtZ",
              "/shop/coupons/success/family"
            )
          }
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
        >
          Buy Family Coupons →
        </button>
      </SectionGlow>

      {/* Partner Coupons */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Naughty & Nice Partner Coupons (18+)
        </h2>
        <p className="text-gray-700 mb-4">
          51 pages • 4 coupons per page • Fun and intimate gestures for your partner
        </p>
        <p className="font-semibold text-gray-900 mb-4">
          $11.99 • Instant download
        </p>

        <button
          onClick={() =>
            checkout(
              "price_1StvjgAAECronuKAeJaJbisR",
              "/shop/coupons/success/partner"
            )
          }
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
        >
          Buy Partner Coupons →
        </button>
      </SectionGlow>

    </main>
  );
}
