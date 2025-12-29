// /app/success/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const [journalAnswers, setJournalAnswers] = useState({});
  const router = useRouter();

  useEffect(() => {
    const savedAnswers = localStorage.getItem("journalAnswers");
    if (savedAnswers) setJournalAnswers(JSON.parse(savedAnswers));
  }, []);

  const handleBeginCreating = () => {
    router.push("/journal"); // <-- this is your journal creation page
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-xl w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur rounded-3xl p-10 shadow-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-6">
          🎉 Thank you for your order!
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Your personalized “All About Me” journal is ready to begin.
        </p>
        <button
          onClick={handleBeginCreating}
          className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition transform"
        >
          Begin Creating 💖
        </button>
      </div>
    </main>
  );
}
