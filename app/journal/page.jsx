"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signIn } from "next-auth/react";

export default function JournalPage() {
  const { data: session } = useSession();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const steps = [
    { key: "favorites", question: "Favorites", description: "Foods, drinks, places, and activities you love" },
    { key: "giftingStyle", question: "Gifting Style", description: "Practical, sentimental, experiences, or surprises?" },
    { key: "loveLanguage", question: "Love Language", description: "How you feel most appreciated" },
    { key: "comfort", question: "Comfort", description: "What helps you feel better on hard days" },
    { key: "surprises", question: "Surprises", description: "What delights you — and what you don’t enjoy" },
    { key: "petPeeves", question: "Pet Peeves", description: "The little things people should know" },
    { key: "rituals", question: "Rituals", description: "Routines or traditions that matter to you" },
    { key: "goals", question: "Life Goals", description: "What do you hope to achieve or experience?" },
    { key: "memorableMoments", question: "Memorable Moments", description: "Your favorite memories from childhood or adulthood" },
    { key: "advice", question: "Advice or Wisdom", description: "What advice would you give to your loved ones?" },
    { key: "customQuestion", question: "Add Your Own Question", description: "Write any question or topic you want to include" },
  ];

  // Load saved answers on mount
  useEffect(() => {
    const saved = localStorage.getItem("journalAnswers");
    if (saved) setAnswers(JSON.parse(saved));
  }, []);

  const handleNext = () => {
    localStorage.setItem("journalAnswers", JSON.stringify(answers));
    setStep(step + 1);
  };

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
        <p className="mb-4 text-gray-700 dark:text-gray-300">Please sign in to continue your journal.</p>
        <button
          onClick={() => signIn("google")}
          className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  if (step >= steps.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800 text-center">
        <h1 className="text-3xl font-bold mb-4">🎉 Journal Complete!</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          You can download your journal or continue editing anytime.
        </p>
        <button
          onClick={() => alert("Here you could trigger PDF download or print template")}
          className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          Finish & Download 💖
        </button>
      </div>
    );
  }

  const current = steps[step];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-xl w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur rounded-3xl p-10 shadow-lg text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-gray-50">{current.question}</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{current.description}</p>
            <textarea
              className="w-full h-32 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-600 resize-none mb-4"
              value={answers[current.key] || ""}
              onChange={(e) =>
                setAnswers({ ...answers, [current.key]: e.target.value })
              }
            />
            <button
              onClick={handleNext}
              disabled={!answers[current.key]}
              className="w-full bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === steps.length - 1 ? "Finish Journal 💖" : "Next →"}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
