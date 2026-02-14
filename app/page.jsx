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
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 via-pink-100 to-white/0 dark:from-pink-900 dark:via-pink-800 dark:to-black/0 opacity-40 -z-10 rounded-3xl" />
      <div className="absolute inset-0 bg-glow -z-20 rounded-3xl" />

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

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-gray-50">
            Welcome to <span className="text-pink-600">Gift Me Right</span>
          </h1>

          <p className="uppercase tracking-widest text-xs text-pink-500 mt-4">
            No stress. No guesswork. Just clarity.
          </p>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            The platform that helps you give a gift that actually lands.
            A clear, personalized blueprint based on who they truly are.
          </p>

          {/* Floating hearts */}
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

          {/* PRIMARY CTA */}
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/shop"
              className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 hover:shadow-lg"
            >
              Get My Gift Blueprint
            </a>

            <a
              href="/how-it-works"
              className="border px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              How It Works
            </a>
          </div>

          {/* Hero image */}
          <div className="relative w-full max-w-3xl h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg mt-12">
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
        <p className="text-gray-700 dark:text-gray-300 text-lg text-center mt-4 max-w-3xl mx-auto">
          We’ve all been there — awkward smiles, unused gifts, and that quiet
          feeling of “they tried… but they didn’t really get me.”
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
          We turn personality into a gifting blueprint
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto text-center mt-4">
          Through guided journals, structured prompts, and emotional clarity,
          we create something rare:
          <strong> a gift guide that actually feels personal.</strong>
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
              desc: "Your answers become a polished, elegant blueprint.",
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

      {/* OTHER PRODUCTS */}
      <SectionGlow>
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-50">
          Explore More Ways to Connect
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center mt-8">
          <div>
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Reflection Journals
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Private, guided journals designed for deeper emotional clarity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Connection Games
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Thoughtful prompts that bring people closer naturally.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Emotional Slideshows & Coupons
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              A simple way to say what’s hard to put into words.
            </p>
          </div>
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
            href="/shop"
            className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 hover:shadow-lg"
          >
            Get My Gift Blueprint
          </a>
        </div>
      </SectionGlow>

    </main>
  );
}
