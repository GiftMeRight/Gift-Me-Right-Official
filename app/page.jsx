"use client";

import Image from "next/image";

/* SECTION GLOW */
function SectionGlow({ children, className = "" }) {
  return (
    <section
      className={`relative bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-3xl p-10 shadow-sm my-12 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 via-pink-100 to-white/0 dark:from-pink-900 dark:via-pink-800 dark:to-black/0 opacity-40 -z-10 rounded-3xl" />
      {children}
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="px-6 pb-16 space-y-28">

      {/* HERO */}
      <SectionGlow>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to <span className="text-pink-600">Gift Me Right</span>
          </h1>

          <p className="uppercase tracking-widest text-xs text-pink-500 mt-4">
            No stress. No guesswork. Just clarity.
          </p>

          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            The platform that helps you give a gift that actually lands —
            a personalized blueprint based on who they truly are.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/shop"
              className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
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

          <div className="relative w-full max-w-3xl h-64 md:h-96 mx-auto mt-12 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/hero-gift.jpg"
              alt="Beautiful gift wrapping"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionGlow>

      {/* PROBLEM */}
      <SectionGlow>
        <h2 className="text-3xl font-semibold text-center">
          Gift-giving shouldn’t feel like guessing.
        </h2>
        <p className="text-center mt-4 text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          We’ve all experienced it — the smile that doesn’t quite reach the eyes.
          The gift that says “I tried”… but not “I understand.”
        </p>
        <p className="text-center mt-2 text-lg">
          It’s not a lack of love. It’s a lack of insight.
        </p>
      </SectionGlow>

      {/* JOURNALS — EMOTIONAL CORE */}
      <SectionGlow>
        <h2 className="text-3xl font-semibold text-center">
          Some things are hard to say out loud.
        </h2>

        <p className="text-center mt-6 text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          The way you want to be loved.  
          The things that make you feel safe.  
          The small details that mean everything.
        </p>

        <p className="text-center mt-6 text-lg max-w-3xl mx-auto">
          Our private reflection journals are designed to gently guide those thoughts onto paper —
          so the people who love you finally understand you.
        </p>

        <div className="flex justify-center mt-8">
          <a
            href="/shop/journals"
            className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
          >
            Explore Journals
          </a>
        </div>
      </SectionGlow>

      {/* EXPLORE MORE WAYS TO CONNECT */}
      <SectionGlow>
        <h2 className="text-3xl font-semibold text-center">
          Explore More Ways to Connect
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-10 text-center">
          {[
            {
              img: "/images/fill-it-out.jpg",
              title: "Guided Blueprints",
              desc: "Structured clarity that removes gifting anxiety.",
            },
            {
              img: "/images/design-it.jpg",
              title: "Connection Games",
              desc: "Prompts that deepen conversations naturally.",
            },
            {
              img: "/images/gift-better.jpg",
              title: "Emotional Slideshows",
              desc: "Say what’s hard to put into words.",
            },
          ].map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg hover:scale-110 transition">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionGlow>

      {/* FINAL CTA */}
      <SectionGlow>
        <h2 className="text-3xl font-semibold text-center">
          Thoughtful gifts start here.
        </h2>

        <p className="text-center mt-4 text-lg">
          Help the people who love you… love you the right way.
        </p>

        <div className="flex justify-center mt-8">
          <a
            href="/shop"
            className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
          >
            Start Now
          </a>
        </div>
      </SectionGlow>

    </main>
  );
}
