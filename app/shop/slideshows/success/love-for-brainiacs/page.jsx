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

export default function SuccessLoveForBrainiacs() {
  return (
    <main className="px-6 py-16 max-w-4xl mx-auto">
      <SectionGlow>
        <h1 className="text-4xl font-bold text-center mb-4">
          Love for Brainiacs 🧠💞
        </h1>
        <p className="text-center text-gray-700">
          Your slideshow breaks down love using logic, psychology, and science —
          without losing the heart.
        </p>
      </SectionGlow>
    </main>
  );
}
