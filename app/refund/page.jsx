"use client";
import React from "react";

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16">
      <div className="bg-white rounded-3xl p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8 text-center">
          Refund Policy
        </h1>

        <div className="space-y-6 text-gray-700">
          <p>
            Due to the digital nature of our products, all sales are final.
          </p>

          <p>
            Once a product has been purchased and downloaded, we are unable to
            offer refunds or exchanges.
          </p>

          <p>
            If you experience a technical issue, please contact us and we will
            work to resolve it promptly.
          </p>
        </div>
      </div>
    </main>
  );
}
