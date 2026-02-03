export default function SlideshowsSuccessPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold">
          🧠 Slides Ready!
        </h1>

        <p className="text-white/70 text-lg">
          Your slideshow is unlocked. These presentations were designed
          to educate, connect, and make relationships feel easier to understand.
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
