"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Thank you for your order!</h1>
      {showConfetti && <motion.div /* ... */ />}
    </div>
  );
}

