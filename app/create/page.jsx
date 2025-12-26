"use client"

import { useState } from "react"
import Link from "next/link"

export default function CreatePage() {
  const [started, setStarted] = useState(false)

  if (!started) {
    // SCREEN 0 — Entry Screen
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-xl text-center space-y-6">
          <h1 className="text-4xl font-bold">
            💖 Create Your “All About Me” Journal
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            Answer a few thoughtful questions so the people who love you
            can finally gift you something you’ll truly love.
          </p>

          <p className="text-sm text-gray-500">
            Takes about 2 minutes ✨
          </p>

          <button
            onClick={() => setStarted(true)}
            className="mt-4 px-8 py-4 rounded-full bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
          >
            Take the Quiz
          </button>

          <p className="text-xs text-gray-400 mt-4">
            You’ll preview everything before purchasing.
          </p>
        </div>
      </main>
    )
  }

  // SCREEN 1 — First Quiz Question (placeholder)
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <h2 className="text-3xl font-semibold">
          What made you want to create this journal?
        </h2>

        <div className="space-y-3">
          {[
            "I’m doing this for myself",
            "I’m tired of getting bad gifts",
            "I want people to really know me",
            "It’s a gift for someone else",
            "I’m just curious",
          ].map((option) => (
<button
  key={option}
  className="
    w-full px-6 py-4 rounded-xl border
    border-gray-300 dark:border-gray-700
    bg-white dark:bg-gray-900
    text-gray-900 dark:text-gray-100
    hover:bg-pink-50 dark:hover:bg-gray-800
    transition text-left
  "
>
  {option}
</button>

          ))}
        </div>
      </div>
    </main>
  )
}

