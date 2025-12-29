"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SuccessPage() {
  const [answers, setAnswers] = useState({});
  const [format, setFormat] = useState("");

  useEffect(() => {
    const savedAnswers = localStorage.getItem("journalAnswers");
    const savedFormat = localStorage.getItem("journalFormat");
    if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
    if (savedFormat) setFormat(savedFormat);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-xl w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur rounded-3xl p-10 shadow-lg text-center">
        {/* Thank You */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          Thank you for your order! 💖
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
          Your “All About Me” journal is being prepared. Your choices help us make it perfect for you.
        </p>

        {/* Summary of answers */}
        <div className="space-y-4 text-left">
          {answers.cover && (
            <p>
              <strong>Cover:</strong> {answers.cover}
            </p>
          )}
          {answers.storyteller && (
            <p>
              <strong>Storyteller:</strong> {answers.storyteller}
            </p>
          )}
          {answers.recipient && (
            <p>
              <strong>Recipient:</strong> {answers.recipient}
            </p>
          )}
          {answers.giftMessage && (
            <p>
              <strong>Gift Message:</strong> {answers.giftMessage}
            </p>
          )}
          {format && (
            <p>
              <strong>Journal Format:</strong> {format}
            </p>
          )}
        </div>

        {/* Magical CTA */}
        <div className="mt-8">
          <a
            href="/"
            className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition transform"
          >
            Return Home ✨
          </a>
        </div>

        {/* Optional: Celebrate image */}
        <div className="relative w-full max-w-md h-48 mx-auto mt-8">
          <Image
            src="/images/cta-gift.jpg"
            alt="Celebratory gift"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
