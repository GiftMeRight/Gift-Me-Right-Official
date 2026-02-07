"use client";
import React from "react";

function SectionGlow({ children }) {
  return (
    <section className="relative bg-white rounded-3xl p-10 shadow-sm my-12">
      {children}
    </section>
  );
}

export default function FamilyGameSuccess() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 flex items-center justify-center">
      <SectionGlow>
        <h1 className="text-4xl font-bold text-center text-black mb-4">
          Your Game Is Ready 🎲
        </h1>

        <p className="text-center text-gray-700 mb-6">
          Download your Family Brainstorm Game below.
        </p>

        <a
          href="/downloads/family-brainstorm-game.pdf"
          target="_blank"
          className="block text-center bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700"
        >
          Download Game
        </a>
      </SectionGlow>
    </main>
  );
}
