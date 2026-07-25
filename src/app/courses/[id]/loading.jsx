import { Loader2, Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Icon Container */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-40 animate-pulse"></div>
          <div className="w-20 h-20 bg-gray-900 border border-gray-800 rounded-2xl flex items-center justify-center relative z-10 shadow-2xl">
            <Loader2 className="w-10 h-10 text-indigo-400 animate-spin" />
            <Sparkles className="absolute top-2 right-2 w-4 h-4 text-purple-400 animate-pulse" />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 tracking-wide mb-2 animate-pulse">
          Loading Course Details...
        </h2>
        <p className="text-gray-500 text-sm font-medium">
          Getting everything ready for you
        </p>
      </div>
    </div>
  );
}
