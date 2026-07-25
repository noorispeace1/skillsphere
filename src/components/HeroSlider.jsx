"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Learn from",
    highlight: "Industry Experts",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Unlock Your",
    highlight: "Full Potential",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Master the",
    highlight: "Latest Technologies",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop",
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative overflow-hidden w-full h-[600px] sm:h-[700px] flex items-center justify-center">
      {/* Background Images Slider */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-gray-950/80 z-10" /> {/* Dark overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? "scale(1.1)" : "scale(1)",
            }} 
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl text-center px-6 lg:px-8 mt-16">
       
        
        <div className="relative h-48 sm:h-40 flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={`text-${slide.id}`}
              className={`absolute w-full transition-all duration-700 transform ${
                index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                {slide.title} <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {slide.highlight}
                </span>
              </h1>
            </div>
          ))}
        </div>

        <div className="relative h-24 sm:h-20 mt-4 sm:mt-8">
          {slides.map((slide, index) => (
            <div
              key={`desc-${slide.id}`}
              className={`absolute w-full transition-all duration-700 delay-100 transform ${
                index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <p className="text-lg md:text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
                {slide.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link
            href="/auth/register"
            className="w-full sm:w-auto inline-flex justify-center items-center h-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Learning Now
          </Link>
          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex justify-center items-center h-12 font-bold px-8 rounded-full border-2 border-gray-400 text-gray-200 hover:border-indigo-500 hover:text-indigo-400 hover:bg-gray-900/50 transition-all duration-300 backdrop-blur-sm"
          >
            Explore Courses
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-30 p-3 rounded-full bg-gray-900/40 text-white hover:bg-indigo-600 transition-colors backdrop-blur-sm border border-gray-700/50 hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-30 p-3 rounded-full bg-gray-900/40 text-white hover:bg-indigo-600 transition-colors backdrop-blur-sm border border-gray-700/50 hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 z-30 flex justify-center gap-3 w-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? "w-8 h-2 bg-indigo-500" 
                : "w-2 h-2 bg-gray-400/50 hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
