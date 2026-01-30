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

/* ---------------- SLIDESHOWS PAGE ---------------- */
export default function SlideshowsPage() {
  return (
    <main className="soft-glow min-h-screen px-6 py-16 max-w-5xl mx-auto">
      <SectionGlow>
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Emotional Slideshows
        </h1>
        <p className="text-gray-700 mb-6">
          Learn about love, connection, and thoughtful gift-giving through
          visually engaging presentations. Perfect for reflection or sharing.
        </p>
      </SectionGlow>

      {/* Slideshow 1 */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Learning About Love: The Relationship 101 Presentation
        </h2>
        <p className="text-gray-700 mb-4">19 slides — clear, engaging, and insightful.</p>
        <p className="font-semibold text-gray-900 mb-4">$14.99 • Instant download</p>
        <button
          onClick={() => checkout("price_1Stvq4AAECronuKAnbp9mtfT")}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Buy This Slideshow
        </button>
      </SectionGlow>

      {/* Slideshow 2 */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Love for Brainiacs: Clever Connections
        </h2>
        <p className="text-gray-700 mb-4">20 slides — scientifically backed insights.</p>
        <p className="font-semibold text-gray-900 mb-4">$14.99 • Instant download</p>
        <button
          onClick={() => checkout("price_1StvqaAAECronuKAXgQstRgP")}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Buy This Slideshow
        </button>
      </SectionGlow>

      {/* Slideshow 3 */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          The Science of Better Gift-Giving: Make Every Gift Count
        </h2>
        <p className="text-gray-700 mb-4">19 slides — make your gifts meaningful and thoughtful.</p>
        <p className="font-semibold text-gray-900 mb-4">$14.99 • Instant download</p>
        <button
          onClick={() => checkout("price_1StvsjAAECronuKAsk3QyRvg")}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Buy This Slideshow
        </button>
      </SectionGlow>

      {/* Slideshow 4 */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          When the Brain Loves & Breaks: Understanding Emotional Patterns
        </h2>
        <p className="text-gray-700 mb-4">14 slides — explore love and heartbreak from a psychological perspective.</p>
        <p className="font-semibold text-gray-900 mb-4">$14.99 • Instant download</p>
        <button
          onClick={() => checkout("price_1StvtKAAECronuKA3l28jLCU")}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Buy This Slideshow
        </button>
      </SectionGlow>
    </main>
  );
}
