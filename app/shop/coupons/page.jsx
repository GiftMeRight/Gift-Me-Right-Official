"use client";

export default function CouponsPage() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">

      <SectionGlow>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Coupon Packs 💌
        </h1>
        <p className="text-center text-gray-700">
          Thoughtful gestures, zero awkwardness.
        </p>
      </SectionGlow>

      <SectionGlow>
        <h2 className="text-2xl font-semibold text-pink-600 mb-2">
          Family Fun Coupon Pack
        </h2>
        <p className="text-gray-700 mb-4">
          124 printable coupons for mom, dad, siblings, and your favorite people.
        </p>
        <button
          onClick={() => checkout("price_1StvhfAAECronuKAhohialtZ")}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Buy Now
        </button>
      </SectionGlow>

      <SectionGlow className="border border-pink-300">
        <h2 className="text-2xl font-semibold text-pink-700 mb-2">
          Naughty & Nice Partner Coupons (18+)
        </h2>
        <p className="text-gray-700 mb-4">
          200+ playful, romantic, and spicy coupons designed for couples.
        </p>
        <button
          onClick={() => checkout("price_1StvjgAAECronuKAeJaJbisR")}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
        >
          Buy Now
        </button>
      </SectionGlow>

    </main>
  );
}
