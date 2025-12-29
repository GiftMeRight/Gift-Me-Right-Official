"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CreateJournalPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [format, setFormat] = useState("digital"); // default format

  const steps = [
    {
      key: "cover",
      question: "Choose Your Cover",
      options: ["Pink Heart", "Gold Foil", "Soft Pastel"],
    },
    {
      key: "storyteller",
      question: "Who will be telling the stories?",
      options: ["Me", "Someone else"],
    },
    {
      key: "recipient",
      question: "Who is this for?",
      options: ["Partner", "Family", "Friend"],
    },
    {
      key: "giftMessage",
      question: "Add a Gift Message",
      options: [], // free text
    },
    {
      key: "format",
      question: "Choose your journal format",
      options: ["Digital", "Printed"],
    },
  ];

  const handleAnswer = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep(step + 1);
  };

  const handleCheckout = async () => {
    localStorage.setItem("journalAnswers", JSON.stringify(answers));
    localStorage.setItem("journalFormat", format);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [{ name: "All About Me Journal", amount: 2900, quantity: 1 }],
        metadata: { answers: JSON.stringify(answers), format },
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
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">
                {steps[step].question}
              </h1>

              {steps[step].options.length > 0 ? (
                <div className="space-y-4">
                  {steps[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() =>
                        steps[step].key === "format"
                          ? (setFormat(opt), handleAnswer("format", opt))
                          : handleAnswer(steps[step].key, opt)
                      }
                      className="w-full px-6 py-3 rounded-xl bg-pink-50 dark:bg-pink-700 text-pink-900 dark:text-white hover:bg-pink-100 dark:hover:bg-pink-600 transition shadow-md"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Write your message here"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-600"
                    onChange={(e) =>
                      setAnswers((prev) => ({ ...prev, giftMessage: e.target.value }))
                    }
                  />
                  <button
                    onClick={handleCheckout}
                    className="mt-4 w-full bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition transform"
                  >
                    Proceed to Checkout 💖
                  </button>
                </div>
              )}
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
