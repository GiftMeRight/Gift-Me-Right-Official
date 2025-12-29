"use client";

import { useState } from "react";
import Image from "next/image";

/* ---------------- DATA ---------------- */

const covers = [
  { id: "blush", label: "Soft Blush", img: "/images/cover-blush.jpg" },
  { id: "cream", label: "Linen Cream", img: "/images/cover-cream.jpg" },
  { id: "black", label: "Modern Black", img: "/images/cover-black.jpg" },
  { id: "floral", label: "Floral Romantic", img: "/images/cover-floral.jpg" },
];

const readerOptions = [
  "My partner",
  "My family",
  "Friends",
  "Anyone who shops for me",
  "Just for me",
];

/* ---------------- PAGE ---------------- */

export default function CreatePage() {
  const [step, setStep] = useState(0);

  const [cover, setCover] = useState(null);
  const [reader, setReader] = useState(null);
  const [isGift, setIsGift] = useState(null);
  const [giftMessage, setGiftMessage] = useState("");

  /* ---------------- STEP SCREENS ---------------- */

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-3xl p-10 shadow-xl">

        {/* STEP INDICATOR */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Step {step + 1} of 5
        </p>

        {/* ---------------- STEP 1: COVER ---------------- */}
        {step === 0 && (
          <>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Choose your journal cover
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Pick the one that feels most like you.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {covers.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setCover(c);
                    setStep(1);
                  }}
                  className={`rounded-2xl overflow-hidden border transition
                    ${
                      cover?.id === c.id
                        ? "border-pink-500"
                        : "border-gray-200 dark:border-gray-700"
                    }
                    hover:scale-[1.02]
                  `}
                >
                  <div className="relative h-40 w-full">
                    <Image src={c.img} alt={c.label} fill className="object-cover" />
                  </div>
                  <p className="py-3 font-medium text-gray-900 dark:text-white">
                    {c.label}
                  </p>
                </button>
              ))}
            </div>
          </>
        )}

        {/* ---------------- STEP 2: WHO WILL READ ---------------- */}
        {step === 1 && (
          <>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Who will be reading this?
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              This helps shape the tone of your journal.
            </p>

            <div className="space-y-4">
              {readerOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setReader(opt);
                    setStep(2);
                  }}
                  className="w-full px-6 py-4 rounded-xl border
                    bg-gray-100 dark:bg-gray-800
                    text-gray-900 dark:text-white
                    border-gray-300 dark:border-gray-600
                    hover:bg-pink-100 dark:hover:bg-gray-700
                    transition text-left"
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}

        {/* ---------------- STEP 3: IS THIS A GIFT ---------------- */}
        {step === 2 && (
          <>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Is this a gift?
            </h1>

            <div className="space-y-4 mt-8">
              <button
                onClick={() => {
                  setIsGift(false);
                  setStep(4);
                }}
                className="w-full px-6 py-4 rounded-xl bg-gray-100 dark:bg-gray-800
                  text-gray-900 dark:text-white hover:bg-pink-100 dark:hover:bg-gray-700 transition"
              >
                This is for me
              </button>

              <button
                onClick={() => {
                  setIsGift(true);
                  setStep(3);
                }}
                className="w-full px-6 py-4 rounded-xl bg-gray-100 dark:bg-gray-800
                  text-gray-900 dark:text-white hover:bg-pink-100 dark:hover:bg-gray-700 transition"
              >
                This is a gift
              </button>
            </div>
          </>
        )}

        {/* ---------------- STEP 4: GIFT MESSAGE ---------------- */}
        {step === 3 && (
          <>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Add a gift message
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This will appear at the front of the journal.
            </p>

            <textarea
              value={giftMessage}
              onChange={(e) => setGiftMessage(e.target.value)}
              placeholder="To the people who love me..."
              className="w-full h-32 p-4 rounded-xl border
                bg-white dark:bg-gray-800
                text-gray-900 dark:text-white
                border-gray-300 dark:border-gray-600"
            />

            <button
              onClick={() => setStep(4)}
              className="mt-6 bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Continue →
            </button>
          </>
        )}

        {/* ---------------- STEP 5: REVIEW ---------------- */}
        {step === 4 && (
          <>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Review & finish
            </h1>

            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p><strong>Cover:</strong> {cover?.label}</p>
              <p><strong>Readers:</strong> {reader}</p>
              <p><strong>Gift:</strong> {isGift ? "Yes" : "No"}</p>
              {isGift && giftMessage && (
                <p><strong>Message:</strong> “{giftMessage}”</p>
              )}
            </div>

            <button
              className="mt-8 w-full bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
            >
              Create My Journal 💖
            </button>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
              You’ll be able to review everything before payment.
            </p>
          </>
        )}

      </div>
    </main>
  );
}
