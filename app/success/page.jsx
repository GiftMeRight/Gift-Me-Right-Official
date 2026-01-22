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

export default function SuccessPage() {
  return (
    <main className="px-6 py-16 max-w-4xl mx-auto">

      {/* CONFIRMATION */}
      <SectionGlow>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          You’re In 🎉
        </h1>
        <p className="text-center text-gray-700 text-lg">
          Your purchase was successful. You’re officially done guessing.
        </p>
      </SectionGlow>

      {/* NEXT STEP */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">
          Your Next Step
        </h2>

        <p className="text-gray-700 mb-6">
          Click below to fill out the gifting questionnaire. This helps clarify
          what actually matters — whether you’re using the DIY Blueprint or
          receiving a personalized gift match.
        </p>

        <a
          href="https://forms.gle/nLLKi7omcpcKvPrv5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition"
        >
          Start the Questionnaire →
        </a>

        <p className="text-sm text-gray-600 mt-4">
          Takes about 5–7 minutes. Thoughtful answers = better results.
        </p>
      </SectionGlow>

      {/* WHAT HAPPENS NEXT */}
      <SectionGlow>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          What Happens Next?
        </h3>

        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>DIY Blueprint:</strong> Use your answers to confidently choose
            a meaningful gift.
          </li>
          <li>
            <strong>Personalized Gift Match:</strong> We analyze your responses
            and send you a clear recommendation with reasoning.
          </li>
        </ul>
      </SectionGlow>

      {/* COMMUNITY / SOFT ENGAGEMENT */}
      <SectionGlow className="border border-pink-300">
        <h3 className="text-xl font-semibold text-pink-700 mb-3">
          Want More Thoughtful Gifting Ideas?
        </h3>

        <p className="text-gray-700 mb-4">
          Gift Me Right™ is growing into a space for intentional gifting,
          emotional intelligence, and never feeling unsure again.
        </p>

        <ul className="list-disc pl-5 text-gray-700 mb-6">
          <li>Upcoming mini-guides & gift prompts</li>
          <li>Seasonal gifting ideas</li>
          <li>Community insights & real examples</li>
        </ul>

        <p className="text-gray-700 font-medium">
          More coming soon 💗
        </p>
      </SectionGlow>

    </main>
  );
}
