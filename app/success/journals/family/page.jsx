"use client";
import React from "react";

export default function FamilyJournalSuccess() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 flex items-center justify-center">
      <section className="bg-white rounded-3xl p-10 max-w-xl w-full text-center shadow-lg">
        <h1 className="text-4xl font-bold text-black mb-4">
          For My Family 👨‍👩‍👧‍👦
        </h1>

        <p className="text-gray-700 mb-8">
          Your family reflection journal is ready — created to encourage
          understanding, appreciation, and shared growth.
        </p>

        <a
          href="/downloads/FINALIZEDFAMILYJOURNAL(1).pdf"
          target="_blank"
          className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition"
        >
          Download Your Journal
        </a>
      </section>
    </main>
  );
}
