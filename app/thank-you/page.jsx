"use client";

import React from "react";

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

export default function ThankYouPage() {
  return (
    <main className="px-6 py-16 max-w-4xl mx-auto">

      <SectionGlow>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          We’ve Got It From Here 💗
        </h1>
        <p className="text-center text-gray-700 text-lg">
          Your responses are in. Thank you for taking the time to be thoughtful.
        </p>
      </SectionGlow>

      <SectionGlow>
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">
          What Happens Now?
        </h2>

        <ul className="list-disc pl-5 text-gray-700 space-y-3">
          <li>
            Your answers are being reviewed for patterns, emotional cues,
            and meaningful details
          </li>
          <li>
            If you selected a personalized gift match, you’ll receive your
            recommendation by email
          </li>
          <li>
            Standard delivery is within 2 to 3 business days
          </li>
        </ul>
      </SectionGlow>

      <SectionGlow className="border border-pink-300">
        <h3 className="text-xl font-semibold text-pink-700 mb-3">
          While You Wait…
        </h3>

        <p className="text-gray-700 mb-4">
          Thoughtful gifting is a skill — and you’re already practicing it.
        </p>

        <p className="text-gray-700">
          More tools, prompts, and guides are coming soon to make gifting
          feel easier, calmer, and more intentional.
        </p>
      </SectionGlow>

    </main>
  );
}
