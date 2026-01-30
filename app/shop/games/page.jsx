"use client";

export default function GamesPage() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">

      <SectionGlow>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Conversation Games 🎲
        </h1>
        <p className="text-center text-gray-700">
          Connection made fun (and easy).
        </p>
      </SectionGlow>

      <SectionGlow>
        <h2 className="text-2xl font-semibold text-pink-600 mb-2">
          Teen Love Quiz: The Flirt & Fun Challenge
        </h2>
        <p className="text-gray-700 mb-4">
          100 playful questions designed for teen couples.
        </p>
        <button
          onClick={() => checkout("price_1StvlVAAECronuKAQrzxDMem")}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Buy Now
        </button>
      </SectionGlow>

      <SectionGlow>
        <h2 className="text-2xl font-semibold text-pink-600 mb-2">
          Family Brainstorm Game: Connect & Laugh Pack
        </h2>
        <p className="text-gray-700 mb-4">
          95 thoughtful prompts that spark real family conversations.
        </p>
        <button
          onClick={() => checkout("price_1StvmPAAECronuKABuovXtyZ")}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Buy Now
        </button>
      </SectionGlow>

    </main>
  );
}
