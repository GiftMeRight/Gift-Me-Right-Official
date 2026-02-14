"use client";
import React from "react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16">
      <div className="bg-white rounded-3xl p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8 text-center">
          Terms of Service
        </h1>

        <div className="space-y-6 text-gray-700">
          <p>
            By purchasing or using products from Gift Me Right, you agree to
            the following terms.
          </p>

          <h2 className="text-xl font-semibold text-black">
            Digital Products
          </h2>
          <p>
            All products sold on this website are digital downloads. No
            physical items will be shipped.
          </p>

          <h2 className="text-xl font-semibold text-black">
            Intellectual Property
          </h2>
          <p>
            All content, including journals, slideshows, games, and blueprints,
            is for personal use only. Redistribution, resale, or reproduction
            is strictly prohibited.
          </p>

          <h2 className="text-xl font-semibold text-black">
            Limitation of Liability
          </h2>
          <p>
            We are not responsible for any outcomes resulting from the use of
            our products.
          </p>
        </div>
      </div>
    </main>
  );
}
