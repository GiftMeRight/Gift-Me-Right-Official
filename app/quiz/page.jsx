"use client";

import { useState } from "react";

const quizSteps = [
  {
    question: "What made you want an “All About Me” journal?",
    options: [
      "I’m tired of getting gifts that don’t feel like me",
      "I want the people in my life to really understand me",
      "I love thoughtful, meaningful gifts",
      "This is for a partner, family member, or friend",
      "I’m doing this for myself",
      "I’m just curious",
    ],
    afterText:
      "✨ That makes sense. Wanting to feel understood is a beautiful place to start.",
  },
  {
    question: "How easy is it for you to explain what you like?",
    options: [
      "Very easy — I know exactly what I like",
      "Somewhat easy — but it’s hard to explain",
      "Hard — I wish people just knew",
      "I usually don’t say anything and hope for the best 😅",
    ],
    afterText:
      "You don’t need the perfect words — this journal does the explaining for you.",
  },
  {
    question: "What kind of gifts feel most meaningful to you?",
    options: [
      "Sentimental & emotional",
      "Practical & useful",
      "Experiences & memories",
      "Personalized items",
      "The thought matters more than the item",
      "A mix — it depends",
    ],
  },
  {
    question: "Who do you imagine reading this journal?",
    options: [
      "My partner",
      "My family",
      "Friends",
      "Anyone who shops for me",
      "Multiple people",
      "Just for me",
    ],
    afterText:
      "This helps us shape your journal in a way that feels natural to share.",
  },
  {
    question: "How confident do you feel writing about yourself?",
    options: [
      "Very confident",
      "Somewhat confident",
      "Not confident at all",
    ],
    afterText:
      "💗 You don’t need to be a writer — just honest. We’ll guide you with gentle prompts the whole way.",
  },
];

export default function QuizPage() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  // 🌸 SCREEN 0 — ENTRY
  if (!started) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-3xl p-10 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Let’s create a journal that helps people gift you right 💖
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Answer a few quick questions so we can personalize your “All About Me”
            journal perfectly.
          </p>

          <button
            onClick={() => setStarted(true)}
            className="mt-8 bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition hover:scale-105 hover:shadow-lg"
          >
            Start the Quiz →
          </button>

          <p className="text-sm text-gray-500 mt-3">Takes ~2 minutes</p>
        </div>
      </main>
    );
  }

  const current = quizSteps[step];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setTimeout(() => {
      setStep(step + 1);
    }, 400);
  };

  // 🌟 FINAL SCREEN
  if (step >= quizSteps.length) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-3xl p-10 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            You’re exactly who this journal was made for ✨
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Based on your answers, we’ll personalize your journal so the people in
            your life can finally gift you right.
          </p>

          <a
            href="/create"
            className="inline-block mt-6 bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition hover:scale-105"
          >
            Create My Journal →
          </a>
        </div>
      </main>
    );
  }

  // 🧠 QUIZ QUESTIONS
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-3xl p-10 shadow-lg">
        <p className="text-sm text-gray-500 mb-2">
          Question {step + 1} of {quizSteps.length}
        </p>

        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {current.question}
        </h1>

        <div className="space-y-3">
          {current.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt)}
              className="
                w-full text-left px-6 py-4 rounded-xl border
                bg-gray-100 text-gray-900 border-gray-300
                dark:bg-gray-800 dark:text-white dark:border-gray-600
                hover:bg-pink-100 dark:hover:bg-gray-700
                transition
              "
            >
              {opt}
            </button>
          ))}
        </div>

        {current.afterText && (
          <p className="text-gray-600 dark:text-gray-400 mt-6 italic">
            {current.afterText}
          </p>
        )}
      </div>
    </main>
  );
}
