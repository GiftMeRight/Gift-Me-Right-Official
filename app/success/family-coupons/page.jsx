"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessFamilyCoupons() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verify() {
      const res = await fetch("/api/verify-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });

      const data = await res.json();
      setVerified(data.paid);
      setLoading(false);
    }

    if (sessionId) verify();
  }, [sessionId]);

  if (loading) return <p className="text-center">Verifying purchase…</p>;

  if (!verified) {
    return <p className="text-center">Access denied.</p>;
  }

  return (
    <main className="px-6 py-16 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">
        Your Coupons Are Ready 🎉
      </h1>

      <a
        href={`/api/download?session_id=${sessionId}&file=family-fun-coupons.pdf`}
        className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold"
      >
        Download Your PDF
      </a>
    </main>
  );
}
