"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        You’re In 🎉
      </h1>

      <p className="text-gray-700 mb-8">
        Your payment was successful. Here’s what happens next:
      </p>

      <div className="space-y-6 text-left">
        <div className="border rounded-xl p-6">
          <h2 className="font-semibold text-pink-600">
            DIY Blueprint
          </h2>
          <p className="text-gray-700">
            Download your blueprint and start gifting with confidence.
          </p>
          <a
            href="/downloads/diy-blueprint.pdf"
            className="text-pink-600 underline"
          >
            Download Your Blueprint
          </a>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="font-semibold text-pink-600">
            Personalized Gift Match
          </h2>
          <p className="text-gray-700">
            You’ll be prompted to fill out your questionnaire next.
            Your personalized gift recommendation will be delivered
            within 24–48 hours.
          </p>
        </div>
      </div>
    </main>
  );
}
