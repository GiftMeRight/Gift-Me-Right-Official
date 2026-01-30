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

/* ---------------- GAMES PAGE ---------------- */
export default function GamesPage() {
  return (
    <main className="soft-glow min-h-screen px-6 py-16 max-w-5xl mx-auto">

      <SectionGlow>
        <h1 className="text-4xl font-bold text-pink-600 mb-4 text-center">
          Conversation & Connection Games
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Thoughtful prompts for fun and meaningful conversations with family or your partner.
        </p>
      </SectionGlow>

      {/* Teen Couples Game */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Teen Couple Quiz: The Flirt & Fun Challenge
        </h2>
        <p className="text-gray-700 mb-4">
          20 pages • 5 questions per page • Lighthearted fun for teen couples
        </p>
        <p className="font-semibold text-gray-900 mb-4">$9.99 • Instant download</p>
        <button
          onClick={() => checkout("price_1StvlVAAECronuKAQrzxDMem")}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Buy Teen Game
        </button>
      </SectionGlow>

      {/* Family Game */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Family Brainstorm Game: Connect & Laugh Pack
        </h2>
        <p className="text-gray-700 mb-4">
          19 pages • 5 questions per page • Fun and meaningful questions for family bonding
        </p>
        <p className="font-semibold text-gray-900 mb-4">$9.99 • Instant download</p>
        <button
          onClick={() => checkout("price_1StvmPAAECronuKABuovXtyZ")}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Buy Family Game
        </button>
      </SectionGlow>
    </main>
  );
}
