"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signIn } from "next-auth/react";

export default function CreateJournalPage() {
  const { data: session } = useSession();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [format, setFormat] = useState("digital"); // default format

  // ✅ Require login
  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="mb-4 text-gray-700">Please sign in to continue creating your journal.</p>
        <button
          onClick={() => signIn("google")}
          className="bg-pink-600 text-white px-6 py-3 rounded-full"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  const steps = [
    { key: "cover", question: "Choose Your Cover", options: ["Pink Heart", "Gold Foil", "Soft Pastel"] },
    { key: "storyteller", question: "Who will be telling the stories?", options: ["Me", "Someone else"] },
    { key: "recipient", question: "Who is this for?", options: ["Partner", "Family", "Friend"] },
    { key: "giftMessage", question: "Add a Gift Message", options: [] }, // free text
    { key: "format", question: "Choose your journal format", options: ["Digital", "Printed"] },
  ];

  const handleAnswer = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep(step + 1);
  };

  const handleCheckout = async () => {
    // Save locally for success page
    localStorage.setItem("journalAnswers", JSON.stringify(answers));
    localStorage.setItem("journalFormat", format);

    // Call Stripe API
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [{ name: "All About Me Journal", amount: 2900, quantity: 1 }],
        metadata: { answers: JSON.stringify(answers), format },
      }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Oops! Something went wrong. Please try again.");
      console.error(data);
    }
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
                  <textarea
                    placeholder="Write your message here"
                    value={answers.giftMessage || ""}
                    onChange={(e) =>
                      setAnswers((prev) => ({
                        ...prev,
                        giftMessage: e.target.value,
                      }))
                    }
                    className="w-full h-32 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-600 resize-none mb-4"
                  />
                </div>
              )}
            </motion.div>
          ) : (
            // ✅ LAST STEP: SHOW ONLY PROCEED TO CHECKOUT
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
                <span className="block text-sm mt-1 opacity-80">
                  You’re almost done 💖
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
