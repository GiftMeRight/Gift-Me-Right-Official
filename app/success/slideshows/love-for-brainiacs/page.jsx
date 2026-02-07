"use client";
import React from "react";

export default function LoveForBrainiacsSuccess() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 flex items-center justify-center">
      <section className="bg-white rounded-3xl p-10 max-w-xl w-full text-center shadow-lg">
        <h1 className="text-4xl font-bold text-black mb-4">
          Love for Brainiacs 🧠💗
        </h1>

        <p className="text-gray-700 mb-8">
          This slideshow celebrates clever connection, emotional insight,
          and thoughtful love.
        </p>

        <a
          href="/downloads/love-for-brainiacs.pdf"
          target="_blank"
          className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition"
        >
          Download Your Slideshow
        </a>
      </section>
    </main>
  );
}
