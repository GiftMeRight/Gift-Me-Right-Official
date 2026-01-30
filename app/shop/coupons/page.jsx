"use client";

export default function CouponsPage() {
  return (
    <main className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Coupon Packs
      </h1>

      {/* Family Coupons */}
      <div className="border rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold text-pink-600">
          Family Fun Coupon Pack
        </h2>
        <p className="text-gray-700 mb-4">
          124 coupons for mom, dad, siblings, and friends.
        </p>
        <button
          onClick={() => checkout("price_1StvhfAAECronuKAhohialtZ")}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Buy Now
        </button>
      </div>

      {/* Partner Coupons */}
      <div className="border rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-pink-600">
          Naughty & Nice Partner Coupons (18+)
        </h2>
        <p className="text-gray-700 mb-4">
          204 playful and romantic coupons for couples.
        </p>
        <button
          onClick={() => checkout("price_1StvjgAAECronuKAeJaJbisR")}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Buy Now
        </button>
      </div>
    </main>
  );
}
