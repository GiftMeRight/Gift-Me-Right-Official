"use client";

import SectionGlow from "../components/SectionGlow";

export default function ShopPage() {
  return (
    <main className="px-6 pt-8 pb-16 space-y-12 relative bg-pink-50">

      {/* PAGE TITLE */}
      <SectionGlow className="bg-pink-100/80 dark:bg-pink-900/60">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 text-center">
          Shop Gift Me Right™
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4 text-center">
          Stop stressing over gifts. Get a personalized gifting blueprint created specifically for the person you’re shopping for.
        </p>
      </SectionGlow>

      {/* PRODUCT DETAILS */}
      <SectionGlow className="bg-pink-200/80 dark:bg-pink-800/60">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
          Personalized Gift Blueprint
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          A custom 10-page gifting guide based on a private questionnaire. You’ll know exactly what to buy, how to give it, and why it works.
        </p>

        <ul className="list-disc pl-5 mb-6 text-gray-700 dark:text-gray-300">
          <li>Personalized to the recipient</li>
          <li>Emotion-backed gift guidance</li>
          <li>Clear recommendations (no guesswork)</li>
          <li>Delivered as a custom PDF</li>
        </ul>

        <p className="font-semibold mb-4 text-gray-900 dark:text-gray-50">
          $XX — One-time purchase
        </p>

        <a
          href="https://YOUR-PAYMENT-LINK-HERE"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
        >
          Buy the Blueprint
        </a>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          After purchase, you’ll receive a private personalization questionnaire.
        </p>
      </SectionGlow>

    </main>
  );
}
