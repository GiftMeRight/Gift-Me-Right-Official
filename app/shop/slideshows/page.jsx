"use client";

export default function SlideshowsPage() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">

      <SectionGlow>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Educational Slideshows 🧠
        </h1>
        <p className="text-center text-gray-700">
          Science-backed insights on love, emotions, and gifting.
        </p>
      </SectionGlow>

      {[
        ["Learning About Love: Relationship 101", "price_1Stvq4AAECronuKAnbp9mtfT"],
        ["Love for Brainiacs: Clever Connections", "price_1StvqaAAECronuKAXgQstRgP"],
        ["The Science of Better Gift-Giving", "price_1StvsjAAECronuKAsk3QyRvg"],
        ["When the Brain Loves & Breaks", "price_1StvtKAAECronuKA3l28jLCU"],
      ].map(([title, priceId]) => (
        <SectionGlow key={priceId}>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            {title}
          </h2>
          <button
            onClick={() => checkout(priceId)}
            className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Buy Now
          </button>
        </SectionGlow>
      ))}

    </main>
  );
}
