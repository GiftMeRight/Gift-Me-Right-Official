"use client";

import React from "react";

/* SECTION GLOW */
function SectionGlow({ children }) {
  return (
    <section className="animate-fadeIn relative bg-white/80 backdrop-blur rounded-3xl p-10 shadow-sm overflow-hidden my-12">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 via-pink-100 to-white/0 opacity-40 -z-10 rounded-3xl" />
      <div className="absolute inset-0 bg-glow -z-20 rounded-3xl" />
      {children}
    </section>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">

      <SectionGlow>
        <h1 className="text-4xl font-bold text-center mb-4">
          How Gift Me Right Works
        </h1>
        <p className="text-center text-gray-700 text-lg">
          Stop guessing. Start gifting with intention.
        </p>
      </SectionGlow>

      <SectionGlow>
        <h2 className="text-2xl font-semibold mb-4">Step 1: Choose Your Path</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              💡 DIY Gift Blueprint
            </h3>
            <p className="text-gray-600">
              You fill out a thoughtful questionnaire and use our interpretation
              guide to confidently choose a meaningful gift yourself.
            </p>
          </div>

          <div className="border border-pink-400 rounded-xl p-6 bg-pink-50">
            <h3 className="text-xl font-semibold mb-2">
              💖 Personalized Gift Match (Upgrade)
            </h3>
            <p className="text-gray-600">
              You answer the same questions — but we analyze everything and
              tell you exactly what gift to buy and why it works.
            </p>
          </div>
        </div>
      </SectionGlow>

      <SectionGlow>
        <h2 className="text-2xl font-semibold mb-4">Step 2: Complete the Questionnaire</h2>
        <p className="text-gray-600">
          After purchase, you’ll receive a private questionnaire designed to
          capture personality, preferences, emotional needs, and gifting style.
        </p>
      </SectionGlow>

      <SectionGlow>
        <h2 className="text-2xl font-semibold mb-4">Step 3: Get Clarity</h2>
        <p className="text-gray-600">
          Whether you DIY or upgrade, the result is the same:
          confidence, intention, and gifts that actually land.
        </p>
      </SectionGlow>

    </main>
  );
}
