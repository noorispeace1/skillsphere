"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
      <div className="text-center max-w-lg relative z-10">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-3xl font-bold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-400 mb-10 leading-relaxed">
          Oops! The page you are looking for doesn't exist or has been moved. Let's get you back to learning.
        </p>
        
        <Link href="/">
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-10 py-7 text-lg shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] hover:-translate-y-1 transition-all duration-300"
            radius="full"
          >
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
