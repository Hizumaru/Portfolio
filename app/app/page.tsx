"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Floating gradient background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Navigation Buttons */}
      <div className="absolute top-6 left-6 flex gap-4 z-10">
        <Link href="/about">
          <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-xl text-white text-md shadow-lg hover:scale-105">
            About Me
          </button>
        </Link>
        <Link href="/projects">
          <button className="px-5 py-2 bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-xl text-white text-md shadow-lg hover:scale-105">
            My Projects
          </button>
        </Link>
      </div>

      {/* Animated Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
      >
        Hi, I'm Sean Du
      </motion.h1>
    </div>
  );
}