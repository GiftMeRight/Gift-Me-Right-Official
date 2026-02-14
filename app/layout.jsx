"use client";

import Image from "next/image";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>

      <body className="bg-[#fffafc] dark:bg-neutral-950 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        {/* HEADER */}
        <header className="max-w-7xl mx-auto px-6 py-4">
          <Image
            src="/logo.png"
            alt="Gift Me Right logo"
            width={140}
            height={140}
            priority
          />
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>
        {/* FOOTER */}
        <footer className="bg-black text-gray-400 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
            
            <div className="space-x-6 text-sm">
              <a href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="/refund" className="hover:text-white transition">
                Refund Policy
              </a>
              <a href="/disclaimer" className="hover:text-white transition">
                Disclaimer
              </a>
            </div>

            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Gift Me Right. All rights reserved.
            </p>

          </div>
        </footer>

      </body>
    </html>
  );
}
