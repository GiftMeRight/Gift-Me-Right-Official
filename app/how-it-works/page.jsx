"use client";

import SectionGlow from "../components/SectionGlow";

export default function HowItWorksPage() {
  return (
    <main className="px-6 pt-8 pb-16 space-y-12 relative bg-pink-50">

      {/* PAGE TITLE */}
      <SectionGlow className="bg-pink-100/80 dark:bg-pink-900/60">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 text-center">
          How Gift Me Right Works
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4 text-center">
          A simple, stress-free way to give gifts that actually land.
        </p>
      </SectionGlow>

      {/* STEP 1 */}
      <SectionGlow className="bg-pink-200/80 dark:bg-pink-800/60">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
          1. Purchase the Blueprint
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Choose the Personalized Gift Blueprint from our shop.
        </p>
      </SectionGlow>

      {/* STEP 2 */}
      <SectionGlow className="bg-pink-200/80 dark:bg-pink-800/60">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
          2. Complete the Questionnaire
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          After purchase, you’ll receive a private questionnaire that captures who the recipient truly is.
        </p>
      </SectionGlow>

      {/* STEP 3 */}
      <SectionGlow className="bg-pink-200/80 dark:bg-pink-800/60">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
          3. Receive Your Custom Gift Plan
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Your responses are used to personalize a gifting blueprint you can trust — no guessing required.
        </p>
      </SectionGlow>

    </main>
  );
}
