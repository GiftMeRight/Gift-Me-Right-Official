"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HowItWorksPage() {
  return (
    <main className="bg-red-600 min-h-screen">
      <h1 className="text-white text-4xl p-8">
        How Gift Me Right Works
      </h1>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. Purchase the Blueprint
          </h2>
          <p className="text-gray-600">
            Choose the Personalized Gift Blueprint from our shop.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Complete the Questionnaire
          </h2>
          <p className="text-gray-600">
            After purchase, you’ll receive a private questionnaire that
            captures who the recipient truly is.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            3. Receive Your Custom Gift Plan
          </h2>
          <p className="text-gray-600">
            Your responses are used to personalize a gifting blueprint
            you can trust — no guessing required.
          </p>
        </div>
      </div>
    </main>
  );
}

