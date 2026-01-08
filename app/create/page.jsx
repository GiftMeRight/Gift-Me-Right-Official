"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CreateJournalPage() {
  const steps = [
    {
      key: "cover",
      question: "What frustrates you the most? Is it when they say:",
      options: [
        "I'm just a bad gift giver",
        "You're hard to get gifts for",
        "I just don't know you well enough",
      ],
    },
    {
      key: "storyteller",
      question: "Who will be telling the stories?",
      options: ["Me", "Someone else"],
    },
    {
      key: "recipient",
      question: "Who is this for?",
      options: [
        "Partner",
        "Family",
        "Friend",
        "Gym Buddy",
        "Myself",
        "Boyfriend/Girlfriend",
      ],
    },
    {
      key: "giftMessage",
      question: "Add a Gift Message",
      options: [],
    },
    {
      key: "format",
      question: "Choose your journal format",
      options: ["Digital", "Printed"],
    },
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loaded, setLoaded] = useState(true); // No need to wait for login

  // Save answers in localStorage (optional)
  const handleAnswer = (key, value) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);
    localStorage.setItem("journalAnswers", JSON.stringify(updated));

    if (key === "format") {
      localStorage.setItem("journalFormat", value);
    }

    setStep((prev) => prev + 1);
  };

  const saveAnswer = (key, value) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);
    localStorage.setItem("journalAnswers", JSON.stringify(updated));
  };

  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [{ name: "All About Me Journal", amount: 2900, quantity: 1 }],
        metadata: {
          answers: JSON.stringify(answers),
          format: answers.format || "Digital",
        },
      }),
    });

    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  if (!loaded) return null;

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-xl w-full bg-white rounded-3xl p-10 shadow-lg text-center">
        <AnimatePresence mode="wait">
          {step < steps.length ? (
            <motion.div
              key={steps[step].key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h1 className="text-2xl font-bold mb-6">
                {steps[step].question}
              </h1>

              {steps[step].options.length > 0 ? (
                <div className="space-y-3">
                  {steps[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(steps[step].key, opt)}
                      className="w-full px-6 py-3 rounded-xl bg-pink-100 hover:bg-pink-200"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <>
                  <textarea
                    className="w-full h-32 p-4 border rounded-xl mb-4"
                    placeholder="Type your message here..."
                    value={answers.giftMessage || ""}
                    onChange={(e) =>
                      saveAnswer("giftMessage", e.target.value)
                    }
                  />
                  <button
                    onClick={() =>
                      handleAnswer(
                        "giftMessage",
                        answers.giftMessage || ""
                      )
                    }
                    className="w-full bg-pink-600 text-white py-3 rounded-full"
                  >
                    Continue 💖
                  </button>
                </>
              )}
            </motion.div>
          ) : (
            <motion.div>
              <h1 className="text-2xl font-bold mb-6">
                You’re almost done 💖
              </h1>
              <button
                onClick={handleCheckout}
                className="w-full bg-pink-600 text-white py-3 rounded-full"
              >
                Proceed to Checkout
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
