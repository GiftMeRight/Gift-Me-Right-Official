export default function CreatePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Create Your “All About Me” Journal
        </h1>
        <p className="text-lg text-gray-700">
          This journal helps the people in your life understand how to love you —
          thoughtfully, intentionally, and joyfully.
        </p>
      </section>

      <section className="bg-pink-50 rounded-3xl p-8 space-y-6">
        <h2 className="text-2xl font-semibold">
          What you’ll create
        </h2>
        <ul className="space-y-3 text-gray-700 text-lg">
          <li>• Your likes, dislikes, and dream gifts</li>
          <li>• How you feel most appreciated</li>
          <li>• Your love language & ideal surprises</li>
          <li>• The little things people often forget</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Choose your format
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-2xl p-6 space-y-3">
            <h3 className="text-xl font-semibold">Digital Journal</h3>
            <p className="text-gray-600">
              A beautifully designed digital version you can share instantly.
            </p>
            <p className="font-semibold">$29</p>
          </div>

          <div className="border rounded-2xl p-6 space-y-3">
            <h3 className="text-xl font-semibold">Printed Journal</h3>
            <p className="text-gray-600">
              A physical keepsake — perfect for gifting or journaling.
            </p>
            <p className="font-semibold">$49</p>
          </div>
        </div>
      </section>

      <section className="text-center pt-6">
        <button className="bg-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition">
          Continue
        </button>
      </section>

    </main>
  )
}
