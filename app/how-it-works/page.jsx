"use client";

import React from "react";
import SectionGlow from "../components/SectionGlow"; // Make sure you export SectionGlow in its own file

export default function HowItWorksPage() {
  return (
    <main className="px-6 pt-10 pb-16 space-y-28 bg-red-600 min-h-screen">
      {/* HERO SECTION */}
      <SectionGlow className="soft-glow bg-pink-600 text-white mt-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            How Gift Me Right Works
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4">
            We turn your personality into a gifting guide so every gift lands perfectly.
          </p>
        </div>
      </SectionGlow>

      {/* STEP SECTIONS */}
      <SectionGlow>
        <div className="space-y-10 max-w-3xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-50">
              1. Purchase the Blueprint
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Choose the Personalized Gift Blueprint from our shop.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-50">
              2. Complete the Questionnaire
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              After purchase, you’ll receive a private questionnaire that captures who the recipient truly is.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-50">
              3. Receive Your Custom Gift Plan
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Your responses are used to personalize a gifting blueprint you can trust — no guessing required.
            </p>
          </div>
        </div>
      </SectionGlow>

      {/* CTA SECTION */}
      <SectionGlow className="soft-glow">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
            Ready to start?
          </h2>
          <div className="flex justify-center mt-6 gap-4">
            <a
              href="/create"
              className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700"
            >
              Create Your Journal
            </a>
            <a
              href="/shop"
              className="border border-pink-600 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50"
            >
              Shop Gifts
            </a>
          </div>
        </div>
      </SectionGlow>
    </main>
  );
}
