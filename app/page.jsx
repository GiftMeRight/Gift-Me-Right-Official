export default function HomePage() {
  return (
   <main className="soft-glow min-h-screen px-6 py-12 space-y-24">

      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Welcome to <span className="text-pink-600">Gift Me Right</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          The place where thoughtful gifting begins.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          If you’ve ever wished your partner, friends, or family would finally understand what you actually like — what makes you feel loved, appreciated, and genuinely surprised — you’re in the right place.
        </p>

        <div className="pt-6">
<a
  href="/create"
  className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition"
>
  Create Your Journal
</a>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">
          Gift-giving shouldn’t feel like a guessing game
        </h2>
        <p className="text-gray-700 text-lg text-center">
          We’ve all been there — awkward smiles, unused gifts, and the feeling of
          “they tried… but they didn’t really get me.”
        </p>
        <p className="text-gray-700 text-lg text-center">
          That’s not because the people in your life don’t care.  
          It’s because they don’t have a clear roadmap to *you*.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="bg-pink-50 rounded-3xl p-10 space-y-8">
        <h2 className="text-3xl font-semibold text-center">
          We turn your personality into a gifting guide
        </h2>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto text-center">
          Gift Me Right transforms your personality, preferences, and love language
          into a custom-designed <strong>“All About Me” journal</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-lg">
          <ul className="space-y-3">
            <li>• Your favorite foods, places, and activities</li>
            <li>• Your gift preferences & dream wishlist</li>
            <li>• Your love language & ideal date styles</li>
            <li>• How to cheer you up on hard days</li>
          </ul>
          <ul className="space-y-3">
            <li>• How to surprise you (the *right* way)</li>
            <li>• Your routines, rituals, and pet peeves</li>
            <li>• The little details that matter most</li>
            <li>• Things people usually forget — but shouldn’t</li>
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-center">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="text-3xl">📝</div>
            <h3 className="font-semibold text-xl">You fill it out</h3>
            <p className="text-gray-600">
              Answer our guided prompts — thoughtfully designed to help you reflect on what truly makes you feel loved.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-3xl">✨</div>
            <h3 className="font-semibold text-xl">We design it</h3>
            <p className="text-gray-600">
              We turn your answers into a polished, beautiful journal — digital or printed.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-3xl">💝</div>
            <h3 className="font-semibold text-xl">They gift better</h3>
            <p className="text-gray-600">
              Your people finally know how to love, surprise, and celebrate you the right way.
            </p>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="space-y-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">
          Perfect for every kind of relationship
        </h2>

        <div className="space-y-6 text-lg text-gray-700">
          <p>
            💕 <strong>For your partner:</strong> So they never have to guess how to show love again.
          </p>
          <p>
            🎉 <strong>For friends & family:</strong> So birthdays and holidays feel meaningful, not stressful.
          </p>
          <p>
            🌱 <strong>For yourself:</strong> As a yearly tradition to reconnect with who you are and what you want.
          </p>
        </div>
      </section>
<section className="bg-gray-50 rounded-3xl p-10 space-y-8">
  <h2 className="text-3xl font-semibold text-center">
    What people are saying
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <p className="text-gray-700">
        “This completely changed how my partner shows love.
        I’ve never felt more understood.”
      </p>
      <p className="mt-4 font-semibold">— Emily</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <p className="text-gray-700">
        “Birthdays are no longer awkward.
        Everyone finally gets me.”
      </p>
      <p className="mt-4 font-semibold">— Sarah</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <p className="text-gray-700">
        “I made one for myself and one for my best friend.
        It’s thoughtful, fun, and emotional.”
      </p>
      <p className="mt-4 font-semibold">— Alex</p>
    </div>
  </div>
</section>

      {/* FINAL CTA */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-semibold">
          Thoughtful gifts start here
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Let’s help the people who love you… love you the right way.
        </p>

<a
  href="/create"
  className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition"
>
  Get Started
</a>

      </section>

    </main>
  )
}
