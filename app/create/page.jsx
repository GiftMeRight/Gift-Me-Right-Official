"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession, signIn } from "next-auth/react";

export default function CreateJournalPage() {
  const { data: session } = useSession();

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
  const [loaded, setLoaded] = useState(false);

  // Require login
  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="mb-4 text-gray-700">
          Please sign in to continue creating your journal.
        </p>
        <button
          onClick={() => signIn("google")}
          className="bg-pink-600 text-white px-6 py-3 rounded-full"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  // Load saved progress (client-only)
  useEffect(() => {
    if (!session) return;

    const email = session.user.email;
    const savedAnswers = localStorage.getItem(`journalAnswers_${email}`);
    const savedStep = localStorage.getItem(`journalStep_${email}`);

    if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
    if (savedStep) setStep(Number(savedStep));

    setLoaded(true);
  }, [session]);

  const handleAnswer = (key, value) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);

    localStorage.setItem(
      `journalAnswers_${session.user.email}`,
      JSON.stringify(updated)
    );

    if (key === "format") {
      localStorage.setItem(`journalFormat_${session.user.email}`, value);
    }

    setStep((prev) => {
      const next = prev + 1;
      localStorage.setItem(`journalStep_${session.user.email}`, next);
      return next;
    });
  };

  const saveAnswer = (key, value) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);
    localStorage.setItem(
      `journalAnswers_${session.user.email}`,
      JSON.stringify(updated)
    );
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
          email: session.user.email,
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
