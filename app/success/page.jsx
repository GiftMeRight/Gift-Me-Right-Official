"use client";

import { useSearchParams } from "next/navigation";

/* ---------------- SECTION GLOW ---------------- */
function SectionGlow({ children, className = "" }) {
  return (
    <section
      className={`animate-fadeIn relative bg-white/80 backdrop-blur rounded-3xl p-10 shadow-sm overflow-hidden my-12 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 via-pink-100 to-white/0 opacity-40 -z-10 rounded-3xl" />
      <div className="absolute inset-0 bg-glow -z-20 rounded-3xl" />
      {children}
    </section>
  );
}

/* ---------------- SUCCESS PAGE ---------------- */
export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">

      {/* HEADER */}
      <SectionGlow>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          You’re All Set ✨
        </h1>
        <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto">
          This is the moment where gifting stops feeling stressful
          and starts feeling intentional.
        </p>
      </SectionGlow>

      {/* DIY SECTION */}
      <SectionGlow>
        <h2 className="text-2xl font-semibold text-pink-600 mb-2">
          Your DIY Gift Blueprint
        </h2>

        <p className="text-gray-700 mb-4">
          Use this as a framework to turn thoughtful answers into confident,
          meaningful gift decisions — without second-guessing yourself.
        </p>

        <p className="text-gray-700 mb-6">
          Some people enjoy walking through the process on their own.
          Others later decide they’d rather skip the mental load entirely.
          Either way, this gives you clarity.
        </p>

        <a
          href="/downloads/diy-blueprint.pdf"
          className="inline-block text-pink-600 font-semibold underline"
        >
          Download Your Blueprint
        </a>
      </SectionGlow>

      {/* DONE-FOR-YOU SECTION */}
      <SectionGlow className="border border-pink-200">
        <h2 className="text-2xl font-semibold text-pink-700 mb-2">
          Personalized Gift Match
        </h2>

        <p className="text-gray-700 mb-4">
          If you chose a personalized gift match, the next step is the questionnaire.
          This helps uncover what actually matters to the person you’re gifting —
          not just what they like, but why it resonates.
        </p>

        <p className="text-gray-700">
          Once submitted, your responses are reviewed and translated into
          a clear, intentional recommendation. Most matches are delivered
          within <strong>24–48 hours</strong>.
        </p>
      </SectionGlow>

      {/* SOFT UPSELL / REASSURANCE */}
      <SectionGlow className="bg-pink-50">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          A gentle reminder 💗
        </h3>

        <p className="text-gray-700">
          Many people start with the DIY blueprint and later decide they
          want a second set of eyes — especially for meaningful moments
          or high-pressure gifts.
        </p>

        <p className="text-gray-700 mt-3">
          If that ever feels right, upgrading is always an option.
          For now, you’re exactly where you need to be.
        </p>
      </SectionGlow>

    </main>
  );
}
