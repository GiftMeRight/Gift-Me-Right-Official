"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SuccessPage() {
  const [answers, setAnswers] = useState({});
  const [format, setFormat] = useState("digital");

  useEffect(() => {
    // Pull Q answers & journal format from localStorage (or other state mechanism)
    const storedAnswers = localStorage.getItem("journalAnswers");
    const storedFormat = localStorage.getItem("journalFormat");
    if (storedAnswers) setAnswers(JSON.parse(storedAnswers));
    if (storedFormat) setFormat(storedFormat);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-pink-50 via-pink-100 to-white dark:from-gray-900 dark:via-pink-900 dark:to-black text-gray-900 dark:text-gray-50">
      <div className="max-w-xl w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur rounded-3xl p-12 shadow-2xl text-center space-y-6">
        {/* Magical checkmark */}
        <div className="text-6xl animate-pulse">✨💖✨</div>

        <h1 className="text-3xl md:text-4xl font-bold">
          Thank you for creating your journal!
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Your <strong>{format === "printed" ? "printed" : "digital"}</strong>{" "}
          “All About Me” journal order is almost complete.
        </p>

        {answers && Object.keys(answers).length > 0 && (
          <div className="text-left mt-6 bg-pink-50 dark:bg-pink-900/30 p-6 rounded-2xl space-y-3">
            <h2 className="font-semibold text-xl text-gray-900 dark:text-gray-50">
              Here’s a summary of your choices:
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {Object.entries(answers).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.replace(/_/g, " ")}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg">
          You’re almost done 💖 Your journal will be personalized exactly the way
          you imagined.
        </p>

        <a
          href="/"
          className="inline-block mt-6 bg-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 hover:shadow-xl shadow-lg"
        >
          Back to Homepage
        </a>
      </div>

      {/* Optional sparkle animation behind */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 12 }).map((_, idx) => (
          <div
            key={idx}
            className="absolute text-pink-300 dark:text-pink-600 animate-fadeIn"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              fontSize: `${Math.random() * 24 + 12}px`,
              animationDuration: `${Math.random() * 6 + 4}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>
    </main>
  );
}
