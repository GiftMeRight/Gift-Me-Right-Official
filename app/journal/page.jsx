"use client";

import { useState, useEffect } from "react";

export default function JournalPage() {
  const [format, setFormat] = useState("Digital"); // default
  const [hasOrder, setHasOrder] = useState(false);

  useEffect(() => {
    // Read what user chose after checkout
    const savedFormat = localStorage.getItem("journalFormat") || "Digital";
    setFormat(savedFormat);

    // Here you could check for order metadata if you store it locally
    const orderMetadata = localStorage.getItem("journalAnswers"); // just as a flag
    if (orderMetadata) setHasOrder(true);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800 text-center">
      
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Welcome to Your Journal Hub 💖
      </h1>

      {hasOrder ? (
        <>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Your {format} journal is ready! 🎉
          </p>

          {format === "Digital" ? (
            <a
              href="/journal.pdf" // replace with actual PDF link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition mb-4 inline-block"
            >
              Download Your PDF Journal
            </a>
          ) : (
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your Printify order has been sent! Check your email for details.
            </p>
          )}

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Want to join our community and share your experiences with bad gift givers? 💌
          </p>
          <a
            href="/community" // replace with actual community/subscription page
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Join the Community
          </a>
        </>
      ) : (
        <>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            You haven’t created your journal yet. Start now!
          </p>
          <a
            href="/create-journal"
            className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Start Creating 💖
          </a>
        </>
      )}
    </main>
  );
}
