"use client";
import React from "react";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16">
      <div className="bg-white rounded-3xl p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8 text-center">
          Disclaimer
        </h1>

        <div className="space-y-6 text-gray-700">
          <p>
            The journals, guides, and materials provided on this website are
            for educational and self-reflection purposes only.
          </p>

          <p>
            They are not intended to substitute professional medical,
            psychological, or legal advice.
          </p>

          <p>
            If you are experiencing a medical or mental health emergency,
            please seek assistance from a qualified professional.
          </p>
        </div>
      </div>
    </main>
  );
}
