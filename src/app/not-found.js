"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  const [launch, setLaunch] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center relative overflow-hidden">
      {/* Floating Astronaut */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute top-20 right-10 text-6xl"
      >
        🧑‍🚀
      </motion.div>

      {/* 404 Text */}
      <h1 className="text-5xl font-bold mb-4">Lost in Space</h1>
      <p className="text-lg mb-8">Oops! This page drifted into the void.</p>

      {/* Rocket Button */}
      <motion.div
        animate={launch ? { y: -500, opacity: 0 } : {}}
        transition={{ duration: 2 }}
      >
        <Link href="/">
          <button
            onClick={() => setLaunch(true)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition transform hover:scale-105"
          >
            Go Home 🚀
          </button>
        </Link>
      </motion.div>

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 12 + 10}px`,
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              y: [-5, 5, -5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>
    </div>
  );
}
