export default function GamesSuccessPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold">
          🎲 Game Time!
        </h1>

        <p className="text-white/70 text-lg">
          Your game is ready. These were built to create laughter,
          conversation, and unforgettable memories.
        </p>

        <a
          href="/shop"
          className="inline-block mt-6 rounded-xl bg-pink-600 px-6 py-3 font-semibold hover:bg-pink-500 transition"
        >
          Back to Shop
        </a>
      </div>
    </main>
  );
}
