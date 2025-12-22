import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="soft-glow min-h-screen px-6 py-12 space-y-24">

      {/* HERO */}
      <section className="animate-fadeIn text-center space-y-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-3xl p-10 shadow-sm">
        <div className="relative w-full max-w-xl mx-auto h-64 md:h-96 overflow-hidden rounded-3xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1518459031867-a89b944bffe0?auto=format&fit=crop&w=1200&q=80"
            alt="Beautiful gift wrapping"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-gray-50">
          Welcome to <span className="text-pink-600">Gift Me Right</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          The place where thoughtful gifting begins.
        </p>

        <a
          href="/create"
          className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 hover:shadow-lg"
        >
          Create Your Journal
        </a>
      </section>

      {/* PROBLEM */}
      <section className="animate-fadeIn space-y-6 max-w-4xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-3xl p-10 shadow-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-50">
          Gift-giving shouldn’t feel like a guessing game
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg text-center">
          We’ve all been there — awkward smiles, unused gifts, and the feeling of
          “they tried… but they didn’t really get me.”
        </p>
      </section>

      {/* SOLUTION */}
      <section className="animate-fadeIn bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-3xl p-10 space-y-8 shadow-sm">
        <div className="relative w-full max-w-xl mx-auto h-64 md:h-96 overflow-hidden rounded-3xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1520975911775-6c50c337414d?auto=format&fit=crop&w=1200&q=80"
            alt="Happy people exchanging gifts"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-50">
          We turn your personality into a gifting guide
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto text-center">
          Gift Me Right transforms your personality, preferences, and love language
          into a custom-designed <strong>“All About Me” journal</strong>.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="animate-fadeIn bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-3xl p-10 space-y-8 shadow-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-50">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
              title: "You fill it out",
              desc: "Answer our guided prompts — thoughtfully designed to help you reflect on what truly makes you feel loved.",
            },
            {
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
              title: "We design it",
              desc: "We turn your answers into a polished, beautiful journal — digital or printed.",
            },
            {
              img: "https://images.unsplash.com/photo-1589182371626-26ee3e6970c9?auto=format&fit=crop&w=600&q=80",
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
      </section>

      {/* TESTIMONIALS */}
      <section className="animate-fadeIn bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-3xl p-10 space-y-8 shadow-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-50">
          What people are saying
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { text: "This changed how my partner shows love. I’ve never felt more understood.", name: "Emily" },
            { text: "Birthdays are no longer awkward. Everyone finally gets me.", name: "Sarah" },
            { text: "I made one for myself and one for my best friend. It’s thoughtful, fun, and emotional.", name: "Alex" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/90 dark:bg-gray-800 rounded-2xl p-6 shadow-sm transition transform hover:scale-105 hover:shadow-lg">
              <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
              <p className="mt-4 font-semibold text-gray-900 dark:text-gray-50">— {item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="animate-fadeIn bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-3xl p-10 space-y-8 shadow-sm text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
          Thoughtful gifts start here
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Let’s help the people who love you… love you the right way.
        </p>

        <a
          href="/create"
          className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </a>
      </section>

    </main>
  );
}
