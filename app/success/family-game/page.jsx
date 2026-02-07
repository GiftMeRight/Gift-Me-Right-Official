"use client";

import React from "react";

function SectionGlow({ children }) {
  return (
    <section className="relative bg-white/80 backdrop-blur rounded-3xl p-10 shadow-sm my-12">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 via-pink-100 to-white/0 opacity-40 -z-10 rounded-3xl" />
      {children}
    </section>
  );
}

export default function FamilyGameSuccess() {
  const sessionId =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("session_id")
      : "";

  return (
    <main className="px-6 py-16 max-w-4xl mx-auto">
      <SectionGlow>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Your Game Is Ready 🎲
        </h1>

        <p className="text-center text-gray-700 mb-6">
          Download your Family Brainstorm Game below.
        </p>

        <a
          href={`/api/download?session_id=${sessionId}`}
          className="block text-center bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700"
        >
          Download Game
        </a>
      </SectionGlow>
    </main>
  );
}
