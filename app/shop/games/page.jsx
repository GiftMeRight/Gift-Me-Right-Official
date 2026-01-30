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

/* ---------------- PAGE ---------------- */
export default function GamesPage() {
  return (
    <main className="soft-glow min-h-screen px-6 py-16 max-w-5xl mx-auto">
      <SectionGlow>
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Conversation & Connection Games
        </h1>

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
      </SectionGlow>

      <SectionGlow>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Teen Couple Quiz: The Flirt & Fun Challenge
        </h2>

        <p className="text-gray-700 mb-4">
          5 questions per page, 20 pages total — playful and engaging for teen couples.
        </p>

        <p className="font-semibold text-gray-900 mb-4">
          $9.99 • Instant download
        </p>

        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700">
          Buy Teen Couple Quiz
        </button>
      </SectionGlow>

      <SectionGlow>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Family Brainstorm Game: Connect & Laugh Pack
        </h2>

        <p className="text-gray-700 mb-4">
          5 questions per page, 19 pages total — fun and meaningful family bonding.
        </p>

        <p className="font-semibold text-gray-900 mb-4">
          $9.99 • Instant download
        </p>

        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700">
          Buy Family Game
        </button>
      </SectionGlow>
    </main>
  );
}
