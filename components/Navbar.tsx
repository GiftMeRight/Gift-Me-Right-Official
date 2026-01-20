"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b bg-white">
      <Link href="/" className="text-xl font-semibold">
        Gift Me Right™
      </Link>
      
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/shop" className="hover:text-pink-600">
          Shop
        </Link>
        <Link href="/how-it-works" className="hover:text-pink-600">
          How It Works
        </Link>
      </div>
    </nav>
  );
}

