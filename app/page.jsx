"use client";

import Image from "next/image";

/* ---------------- SECTION GLOW WRAPPER ---------------- */

function SectionGlow({ children, className = "" }) {
  const particles = Array.from({ length: 10 }).map(() => ({
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
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 via-pink-100 to-white/0 dark:from-pink-900 dark:via-pink-800 dark:to-black/0 opacity-40 -z-10 rounded-3xl" />
      <div className="absolute inset-0 bg-glow -z-20 rounded-3xl" />

      {/* Floating particles */}
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

/* ---------------- HOME PAGE ---------------- */

export default function HomePage() {
  return (
    <main className="px-6 pt-0 pb-16 space-y-28 relative">

      {/* HERO */}
      <SectionGlow className="soft-glow mt-6">
        <div className="relative flex flex-col items-center text-center">

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-gray-50">
            Welcome to <span className="text-pink-600">Gift Me Right</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
  Gift Me Right helps you give a gift that actually lands.
  No guessing. No stress. Just a clear, personalized plan
  based on who they truly are.
          </p>

          {/* Floating hearts BELOW subtitle */}
          <div className="relative w-full h-12 mt-2 pointer-events-none">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="floating-heart absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  fontSize: `${Math.random() * 10 + 10}px`,
                  animationDuration: `${Math.random() * 8 + 6}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                ❤️
              </div>
            ))}
          </div>


<div className="mt-8 flex justify-center gap-4">
  <a
    href="/shop"
    className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700"
  >
    Get My Gift Blueprint
  </a>

  <a
    href="/how-it-works"
    className="border px-6 py-3 rounded-lg font-semibold hover:bg-gray-50"
  >
    How It Works
  </a>
</div>
          
          {/* PRIMARY + SECONDARY CTA */}
          <div className="mt-8 flex flex-col items-center gap-4">
            {/* Primary: Direct Builder */}
            <a
              href="/create"
              className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 hover:shadow-lg"
            >
              Create Your Journal
            </a>

            {/* Secondary: Quiz */}
            <a
              href="/quiz"
              className="inline-block border border-pink-400 text-pink-600 dark:text-pink-400 px-8 py-3 rounded-full text-base font-medium transition transform hover:scale-105 hover:bg-pink-50 dark:hover:bg-gray-800 text-center"
            >
              💖 Take the “All About Me” Quiz
              <span className="block text-sm opacity-80 mt-1">
                Takes ~2 minutes
              </span>
            </a>
          </div>

          {/* Hero image */}
          <div className="relative w-full max-w-3xl h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg mt-10">
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
        <p className="text-gray-700 dark:text-gray-300 text-lg text-center mt-4">
          We’ve all been there — awkward smiles, unused gifts, and the feeling of
          “they tried… but they didn’t really get me.”
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg text-center mt-2">
          It’s not a lack of love — it’s a lack of clarity.
        </p>
      </SectionGlow>

      {/* SOLUTION */}
      <SectionGlow>
        <div className="relative w-full max-w-3xl h-64 md:h-96 mx-auto rounded-3xl overflow-hidden shadow-lg mb-6">
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
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto text-center mt-4">
          Gift Me Right transforms your preferences, personality, and love language
          into a beautifully designed <strong>“All About Me” journal</strong>.
        </p>
      </SectionGlow>

      {/* HOW IT WORKS */}
      <SectionGlow>
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-50">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-8 text-center">
          {[
            {
              img: "/images/fill-it-out.jpg",
              title: "You fill it out",
              desc: "Answer thoughtful prompts about what makes you feel loved.",
            },
            {
              img: "/images/design-it.jpg",
              title: "We design it",
              desc: "Your answers become a polished, elegant journal.",
            },
            {
              img: "/images/gift-better.jpg",
              title: "They gift better",
              desc: "No more awkward gifts — just understanding.",
            },
          ].map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg transition transform hover:scale-110">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-50">
                {item.title}
              </h3>
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

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            {
              img: "/images/testimonial1.jpg",
              name: "Emily",
              quote: "Birthdays are no longer awkward. Everyone finally gets me.",
            },
            {
              img: "/images/testimonial2.jpg",
              name: "Sarah",
              quote:
                "This completely changed how my partner shows love. I’ve never felt more understood.",
            },
            {
              img: "/images/testimonial3.jpg",
              name: "Alex",
              quote:
                "I made one for myself and one for my best friend. It’s thoughtful, fun, and emotional.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm transition transform hover:scale-105"
            >
              <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden mb-4">
                <Image src={item.img} alt={item.name} fill className="object-cover" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                “{item.quote}”
              </p>
              <p className="mt-4 font-semibold text-center text-gray-900 dark:text-gray-50">
                — {item.name}
              </p>
            </div>
          ))}
        </div>
      </SectionGlow>

      {/* FINAL CTA */}
      <SectionGlow>
        <div className="relative w-full max-w-3xl h-64 md:h-96 mx-auto rounded-3xl overflow-hidden shadow-lg mb-6">
          <Image
            src="/images/cta-gift.jpg"
            alt="Person opening a gift"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-50">
          Thoughtful gifts start here
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto text-center mt-4">
          Help the people who love you… love you the right way.
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
  );
}
