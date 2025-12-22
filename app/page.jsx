"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function SectionGlow({ children, className = "" }) {
  const particles = Array.from({ length: 10 }).map((_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 4 + 2}px`,
    duration: `${Math.random() * 12 + 6}s`,
    delay: `${Math.random() * 5}s`,
  }));

  return (
    <section
      className={`animate-fadeIn relative bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-3xl p-10 shadow-sm overflow-hidden my-12 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 via-pink-100 to-white/0 dark:from-pink-900 dark:via-pink-800 dark:to-black/0 opacity-40 -z-10 rounded-3xl"></div>
      <div className="absolute inset-0 bg-glow -z-20 rounded-3xl"></div>
      {particles.map((p, idx) => (
        <div
          key={idx}
          className="particle -z-10"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
      {children}
    </section>
  );
}

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [isDark]);

  return (
    <div className="relative">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full flex items-center px-6 py-1 z-50 bg-white/0 dark:bg-gray-900/0">
        <img src="/images/logo.png" alt="Logo" className="h-10" />
      </header>

      <main className="px-6 pb-12 space-y-24 relative">
        {/* Dark mode toggle */}
        <div className="fixed top-6 right-6 z-50">
          <button
            onClick={() => setIsDark(!isDark)}
            className="bg-pink-600 dark:bg-pink-400 text-white dark:text-gray-900 px-4 py-2 rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-xl"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* HERO */}
        <SectionGlow className="soft-glow">
          <div className="relative flex flex-col items-center text-center pt-12">
            {/* Floating hearts behind text */}
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="floating-heart"
                style={{
                  top: `${Math.random() * 40 + 5}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  fontSize: `${Math.random() * 12 + 10}px`,
                  animationDuration: `${Math.random() * 8 + 6}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                ❤️
              </div>
            ))}

            {/* Title and subtitle above hero image */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-gray-50 mt-0">
              Welcome to <span className="text-pink-600">Gift Me Right</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-2">
              The place where thoughtful gifting begins.
            </p>
            <a
              href="/create"
              className="mt-4 inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 hover:shadow-lg"
            >
              Create Your Journal
            </a>

            {/* Hero image below text */}
            <div className="relative w-full max-w-3xl h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg mt-4">
              <Image
                src="/images/hero-gift.jpg"
                alt="Beautiful gift wrapping"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </SectionGlow>

        {/* PROBLEM */}
        <SectionGlow>
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-50">
            Gift-giving shouldn’t feel like a guessing game
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg text-center mt-2">
            We’ve all been there — awkward smiles, unused gifts, and the feeling of
            “they tried… but they didn’t really get me.”
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg text-center mt-2">
            That’s not because the people in your life don’t care. It’s because they
            don’t have a clear roadmap to *you*.
          </p>
        </SectionGlow>

        {/* SOLUTION */}
        <SectionGlow>
          <div className="relative w-full max-w-3xl h-64 md:h-96 mx-auto rounded-3xl overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-xl mb-6">
            <Image
              src="/images/people-gifting.jpg"
              alt="Happy people exchanging gifts"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-50">
            We turn your personality into a gifting guide
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto text-center mt-2">
            Gift Me Right transforms your personality, preferences, and love language
            into a custom-designed <strong>“All About Me” journal</strong>.
          </p>
        </SectionGlow>

        {/* HOW IT WORKS */}
        <SectionGlow>
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-50">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-6 text-center">
            {[
              {
                img: "/images/fill-it-out.jpg",
                title: "You fill it out",
                desc: "Answer our guided prompts — thoughtfully designed to help you reflect on what truly makes you feel loved.",
              },
              {
                img: "/images/design-it.jpg",
                title: "We design it",
                desc: "We turn your answers into a polished, beautiful journal — digital or printed.",
              },
              {
                img: "/images/gift-better.jpg",
                title: "They gift better",
                desc: "Your people finally know how to love, surprise, and celebrate you the right way.",
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg transition transform hover:scale-110 hover:shadow-xl">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-50">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </SectionGlow>

        {/* TESTIMONIALS */}
        <SectionGlow>
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-50">
            What people are saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { img: "/images/testimonial1.jpg", name: "Emily", quote: "This completely changed how my partner shows love. I’ve never felt more understood." },
              { img: "/images/testimonial2.jpg", name: "Sarah", quote: "Birthdays are no longer awkward. Everyone finally gets me." },
              { img: "/images/testimonial3.jpg", name: "Alex", quote: "I made one for myself and one for my best friend. It’s thoughtful, fun, and emotional." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm transition transform hover:scale-105 hover:shadow-lg">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={item.img} alt={item.name} fill className="object-cover" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">“{item.quote}”</p>
                <p className="mt-4 font-semibold text-gray-900 dark:text-gray-50">— {item.name}</p>
              </div>
            ))}
          </div>
        </SectionGlow>

        {/* FINAL CTA */}
        <SectionGlow>
          <div className="relative w-full max-w-3xl h-64 md:h-96 mx-auto rounded-3xl overflow-hidden shadow-lg mb-6">
            <Image
              src="/images/cta-gift.jpg"
              alt="Person opening gift"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-50">
            Thoughtful gifts start here
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto text-center mt-2">
            Let’s help the people who love you… love you the right way.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="/create"
              className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
        </SectionGlow>
      </main>
    </div>
  );
}
