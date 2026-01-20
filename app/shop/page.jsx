"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ShopPage() {
  return (
    <main className="bg-red-600 min-h-screen">
      <h1 className="text-white text-4xl p-8">
        Shop Gift Me Right™
      </h1>

      <p className="text-gray-600 mb-12 max-w-2xl">
        Stop stressing over gifts. Get a personalized gifting blueprint
        created specifically for the person you’re shopping for.
      </p>

      <div className="border rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">
          Personalized Gift Blueprint
        </h2>

        <p className="text-gray-600 mb-4">
          A custom 10-page gifting guide based on a private questionnaire.
          You’ll know exactly what to buy, how to give it, and why it works.
        </p>

        <ul className="list-disc pl-5 mb-6 text-gray-600">
          <li>Personalized to the recipient</li>
          <li>Emotion-backed gift guidance</li>
          <li>Clear recommendations (no guesswork)</li>
          <li>Delivered as a custom PDF</li>
        </ul>

        <p className="font-semibold mb-4">
          $XX — One-time purchase
        </p>

        {/* REPLACE THIS LINK WITH PAYHIP OR GUMROAD */}
        <a
          href="https://YOUR-PAYMENT-LINK-HERE"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Buy the Blueprint
        </a>

        <p className="text-sm text-gray-500 mt-4">
          After purchase, you’ll receive a private personalization questionnaire.
        </p>
      </div>
    </main>
  );
}

