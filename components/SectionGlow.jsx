"use client";

import React from "react";

/* ---------------- SECTION GLOW WRAPPER ---------------- */
export default function SectionGlow({ children, className = "" }) {
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
