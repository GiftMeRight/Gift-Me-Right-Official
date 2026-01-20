"use client";

import React from "react";
import SectionGlow from "../components/SectionGlow"; // Make sure SectionGlow is exported from components

export default function ShopPage() {
  return (
    <main className="px-6 pt-10 pb-16 space-y-28 bg-red-600 min-h-screen">

      {/* HERO SECTION */}
      <SectionGlow className="soft-glow bg-pink-600 text-white mt-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Shop Gift Me Right™
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4">
            Stop stressing over gifts. Get a personalized gifting blueprint created specifically for the person you’re shopping for.
          </p>
        </div>
      </SectionGlow>

      {/* PRODUCT SECTION */}
      <SectionGlow>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            Personalized Gift Blueprint
          </h2>

          <p className="text-gray-700 dark:text-gray-300">
            A custom 10-page gifting guide based on a private questionnaire. You’ll know exactly what to buy, how to give it, and why it works.
          </p>

          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Personalized to the recipient</li>
            <li>Emotion-backed gift guidance</li>
            <li>Clear recommendations (no guesswork)</li>
            <li>Delivered as a custom PDF</li>
          </ul>

          <p className="font-semibold text-gray-900 dark:text-gray-50">
            $XX — One-time purchase
          </p>

          {/* REPLACE THIS LINK WITH PAYHIP OR GUMROAD */}
          <a
            href="https://YOUR-PAYMENT-LINK-HERE"
            className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition transform hover:scale-105"
          >
            Buy the Blueprint
          </a>

          <p className="text-sm text-gray-500 mt-4">
            After purchase, you’ll receive a private personalization questionnaire.
          </p>
        </div>
      </SectionGlow>

      {/* CTA SECTION */}
      <SectionGlow className="soft-glow">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
            Need help choosing?
          </h2>
          <div className="flex justify-center mt-6 gap-4">
            <a
              href="/create"
              className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700"
            >
              Create Your Journal
            </a>
            <a
              href="/how-it-works"
              className="border border-pink-600 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50"
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </SectionGlow>

    </main>
  );
}
