"use client";
import React from "react";

export default function FamilyFunCouponsSuccess() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 flex items-center justify-center">
      <section className="bg-white rounded-3xl p-10 max-w-xl w-full text-center shadow-lg">
        <h1 className="text-4xl font-bold text-black mb-4">
          Family Fun Coupons 🎉
        </h1>

        <p className="text-gray-700 mb-8">
          Your coupon pack is ready! These are designed to spark laughter,
          bonding, and meaningful moments together.
        </p>

        <a
          href="/downloads/family-fun-coupons.pdf"
          target="_blank"
          className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition"
        >
          Download Your Coupons
        </a>
      </section>
    </main>
  );
}
