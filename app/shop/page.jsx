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

export default function ShopPage() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">

      <SectionGlow>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Shop Gift Me Right™
        </h1>
        <p className="text-center text-gray-700 text-lg">
          Two ways to stop guessing and start gifting with intention.
        </p>
      </SectionGlow>

      <SectionGlow>
        <h2 className="text-2xl font-semibold text-pink-600 mb-2">
          DIY Gift Blueprint
        </h2>

        <p className="text-gray-700 mb-4">
          A self-guided framework for people who want clarity without
          overthinking.
        </p>

        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Fillable personality questionnaire</li>
          <li>Gift interpretation guide</li>
          <li>Clear decision-making steps</li>
          <li>Instant access</li>
        </ul>

        <p className="font-semibold text-gray-900 mb-4">
          $19 — One-time purchase
        </p>

        <a
          href="#"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Get the DIY Blueprint
        </a>
      </SectionGlow>

      <SectionGlow className="border border-pink-400">
        <h2 className="text-2xl font-semibold text-pink-700 mb-2">
          Personalized Gift Match (Done-For-You)
        </h2>

        <p className="text-gray-700 mb-4">
          For moments that matter most. We analyze your answers and tell
          you exactly what to buy — and why it works.
        </p>

        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>We analyze the questionnaire for you</li>
          <li>Personalized gift recommendation</li>
          <li>Emotional reasoning behind the choice</li>
          <li>Delivered as a polished PDF or email</li>
        </ul>

        <p className="font-semibold text-gray-900 mb-4">
          $69 — Done for you
        </p>

        <a
          href="#"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Upgrade to Personalized Match
        </a>
      </SectionGlow>

    </main>
  );
}
