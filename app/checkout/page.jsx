"use client";

import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [answers, setAnswers] = useState([]);

  // Load answers from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("journalAnswers");
    if (stored) setAnswers(JSON.parse(stored));
  }, []);

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });

      const data = await res.json();
      if (data.url) {
        // Redirect user to Stripe checkout
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Checkout failed. Please try again.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-xl w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-3xl p-10 shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
          You’re almost done 💖
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Review your selections and proceed to checkout to complete your journal order.
        </p>

        <button
          onClick={handleCheckout}
          className="mt-6 bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition hover:scale-105 hover:shadow-lg"
        >
          Proceed to Checkout
        </button>

        <div className="mt-4 text-left text-sm text-gray-500">
          <h2 className="font-semibold">Your selections:</h2>
          <ul className="list-disc pl-5 mt-2">
            {answers.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
