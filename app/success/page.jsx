"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function SuccessPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState({});
  const [format, setFormat] = useState("Digital");

  useEffect(() => {
    // Access localStorage only on the client
    const savedAnswers = JSON.parse(
      localStorage.getItem("journalAnswers") || "{}"
    );
    const savedFormat = localStorage.getItem("journalFormat") || "Digital";

    setAnswers(savedAnswers);
    setFormat(savedFormat);
  }, []);

  const handleBegin = () => {
    router.push("/journal"); // Go to the journal page
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800 text-center">
      <h1 className="text-3xl font-bold mb-4">🎉 Thank you for your order!</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Your {format} “All About Me” journal is ready. You can now start creating your journal.
      </p>

      <button
        onClick={handleBegin}
        className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
      >
        Begin Creating 💖
      </button>

      {Object.keys(answers).length > 0 && (
        <div className="mt-6 text-left max-w-xl w-full">
          <h2 className="text-xl font-semibold mb-2">Your saved answers:</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            {Object.entries(answers).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
