"use client";

import React from "react";

/* ---------------- SECTION GLOW ---------------- */
function SectionGlow({ children }) {
  return (
    <section className="relative bg-white/80 backdrop-blur rounded-3xl p-10 shadow-sm my-12">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 via-pink-100 to-white/0 opacity-40 -z-10 rounded-3xl" />
      {children}
    </section>
  );
}

/* ---------------- STRIPE CHECKOUT ---------------- */
async function checkout(priceId, successPath) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId, successPath }),
  });

  const data = await res.json();

  if (data?.url) {
    window.location.href = data.url;
  } else {
    alert("Something went wrong. Please try again.");
  }
}

/* ---------------- JOURNALS PAGE ---------------- */
export default function JournalsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 max-w-5xl mx-auto">

      <SectionGlow>
        <h1 className="text-4xl font-bold text-black text-center mb-4">
          Private Reflection Journals
        </h1>
        <p className="text-gray-700 text-center">
          Designed for deep reflection, emotional clarity, and honest self-work.
        </p>
      </SectionGlow>

      {/* RELATIONSHIP JOURNALS */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-black mb-6">
          Relationship Journals
        </h2>

        <ul className="space-y-6">
          <li>
            <strong>For My Partner</strong> — $19.99  
            <br />
            <button
              onClick={() =>
                checkout("PRICE_ID_PARTNER", "/success/journals/partner")
              }
              className="mt-2 bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-700"
            >
              Buy Journal
            </button>
          </li>

          <li>
            <strong>For My Boyfriend</strong> — $19.99  
            <br />
            <button
              onClick={() =>
                checkout("PRICE_ID_BOYFRIEND", "/success/journals/boyfriend")
              }
              className="mt-2 bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-700"
            >
              Buy Journal
            </button>
          </li>

          <li>
            <strong>For My Girlfriend</strong> — $19.99  
            <br />
            <button
              onClick={() =>
                checkout("PRICE_ID_GIRLFRIEND", "/success/journals/girlfriend")
              }
              className="mt-2 bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-700"
            >
              Buy Journal
            </button>
          </li>
        </ul>
      </SectionGlow>

      {/* FRIENDS & FAMILY */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-black mb-6">
          Friends & Family
        </h2>

        <ul className="space-y-6">
          <li>
            <strong>For My Best Friend</strong> — $14.99  
            <br />
            <button
              onClick={() =>
                checkout("PRICE_ID_BEST_FRIEND", "/success/journals/best-friend")
              }
              className="mt-2 bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-700"
            >
              Buy Journal
            </button>
          </li>

          <li>
            <strong>For My Family</strong> — $14.99  
            <br />
            <button
              onClick={() =>
                checkout("PRICE_ID_FAMILY", "/success/journals/family")
              }
              className="mt-2 bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-700"
            >
              Buy Journal
            </button>
          </li>

          <li>
            <strong>For My Gym Buddy</strong> — $9.99  
            <br />
            <button
              onClick={() =>
                checkout("PRICE_ID_GYM", "/success/journals/gym-buddy")
              }
              className="mt-2 bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-700"
            >
              Buy Journal
            </button>
          </li>
        </ul>
      </SectionGlow>

      {/* NEURODIVERGENT */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-black mb-6">
          Neurodivergent Editions
        </h2>

        <ul className="space-y-6">
          <li>
            <strong>OCD Edition</strong> — $24.99  
            <br />
            <button
              onClick={() =>
                checkout("PRICE_ID_OCD", "/success/journals/ocd")
              }
              className="mt-2 bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-700"
            >
              Buy Journal
            </button>
          </li>

          <li>
            <strong>ADHD Edition</strong> — $24.99  
            <br />
            <button
              onClick={() =>
                checkout("PRICE_ID_ADHD", "/success/journals/adhd")
              }
              className="mt-2 bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-700"
            >
              Buy Journal
            </button>
          </li>
        </ul>
      </SectionGlow>

    </main>
  );
}
