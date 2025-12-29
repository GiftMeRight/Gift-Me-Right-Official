"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JournalPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    favorites: "",
    giftingStyle: "",
    loveLanguage: "",
    comfort: "",
    surprises: "",
    petPeeves: "",
    rituals: "",
    customQuestion: "",
  });

  const steps = [
    {
      key: "favorites",
      question: "Favorites",
      description: "Foods, drinks, places, and activities you love",
      type: "text",
    },
    {
      key: "giftingStyle",
      question: "Gifting Style",
      description: "Practical, sentimental, experiences, or surprises?",
      type: "text",
    },
    {
      key: "loveLanguage",
      question: "Love Language",
      description: "How you feel most appreciated",
      type: "text",
    },
    {
      key: "comfort",
      question: "Comfort",
      description: "What helps you feel better on hard days",
      type: "text",
    },
    {
      key: "surprises",
      question: "Surprises",
      description: "What delights you — and what you don’t enjoy",
      type: "text",
    },
    {
      key: "petPeeves",
      question: "Pet Peeves",
      description: "The little things people should know",
      type: "text",
    },
    {
      key: "rituals",
      question: "Rituals",
      description: "Routines or traditions that matter to you",
      type: "text",
    },
    {
      key: "customQuestion",
      question: "Add Your Own Question",
      description: "Write any question or topic you want to include",
      type: "text",
    },
  ];

  const handleAnswer = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep(step + 1);
  };

  const handleCheckout = async () => {
    // Save journal answers in localStorage
    localStorage.setItem("journalAnswers", JSON.stringify(answers));

    // Call your Stripe checkout API
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [{ name: "All About Me Journal", amount: 2900, quantity: 1 }],
        metadata: { answers: JSON.stringify(answers) },
      }),
    });

    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="relative max-w-xl w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur rounded-3xl p-10 shadow-lg text-center">
        <AnimatePresence mode="wait">
          {step < steps.length ? (
            <motion.div
              key={steps[step].key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                {steps[step].question}
              </h1>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {steps[step].description}
              </p>

              <textarea
                placeholder="Write your answer here"
                value={answers[steps[step].key]}
                onChange={(e) => setAnswers((prev) => ({
                  ...prev,
                  [steps[step].key]: e.target.value,
                }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-600 resize-none h-32 mb-4"
              />

              <button
                onClick={() =>
                  handleAnswer(steps[step].key, answers[steps[step].key])
                }
                disabled={!answers[steps[step].key]}
                className="w-full bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {step === steps.length - 1 ? "Proceed to Checkout 💖" : "Next →"}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="checkout"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">
                You’re almost done! 💖
              </h1>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Review your answers, then proceed to checkout.
              </p>
              <button
                onClick={handleCheckout}
                className="w-full bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition transform"
              >
                Proceed to Checkout 💌
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
