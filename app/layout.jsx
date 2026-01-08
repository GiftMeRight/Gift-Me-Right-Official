import Image from "next/image";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Gift Me Right",
  description: "The All About Me journal that helps people gift you right",
};

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
        <SessionProvider>
          <main>{children}</main>
        </SessionProvider>

      </body>
    </html>
  );
}
