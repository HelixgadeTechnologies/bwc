"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  onPlanVisitClick?: () => void;
  onWatchOnlineClick?: () => void;
}

const heroSlides = [
  {
    image: "/images/welcome-cover.png",
    alt: "Beyond Worship Center - Living Beyond The Veil",
  },
  {
    image: "/images/welcome-cover-1.png",
    alt: "Beyond Worship Center - Community & Fellowship",
  },
  {
    image: "/images/souledout.JPG",
    alt: "Beyond Worship Center - Worship & Word",
  },
];

export function Hero({ onPlanVisitClick, onWatchOnlineClick }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  }, []);

  // Automatic slide interval (5.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(timer);
  }, [nextSlide, currentIndex]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("welcome-home");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black flex items-center justify-center select-none">
      {/* Background Image Carousel with smooth crossfade and subtle scale */}
      <div className="absolute inset-0 overflow-hidden">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                isActive
                  ? "opacity-100 scale-100 z-10 pointer-events-auto"
                  : "opacity-0 scale-105 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center filter brightness-[0.82]"
              />
            </div>
          );
        })}

        {/* Scrim Gradients for pristine contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#212120]/90 via-[#212120]/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#212120]/85 via-transparent to-black/35 z-10 pointer-events-none" />
      </div>

      {/* Carousel Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 backdrop-blur-md text-white items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer opacity-70 hover:opacity-100 group shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 backdrop-blur-md text-white items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer opacity-70 hover:opacity-100 group shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Main Content Area */}
      <div className="relative z-20 container-max px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Subtle badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-medium mb-6 uppercase tracking-widest animate-in fade-in slide-in-from-bottom-3 duration-500">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
            <span>Relate • Restore • Reign</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1] drop-shadow-md">
            Welcome to Beyond Worship Center
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            We are a Christ-centered community with a passion to build and restore relationships, raising believers through the Gospel of Christ.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onPlanVisitClick}
              className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide bg-gradient-primary text-white hover:shadow-primary-glow focus:ring-primary transform hover:scale-105 active:scale-95 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-full min-w-[280px] sm:min-w-[220px] shadow-lg cursor-pointer"
            >
              Join Us This Sunday
            </button>

            <button
              onClick={onWatchOnlineClick}
              className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 focus:ring-white transform hover:scale-105 active:scale-95 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-full min-w-[280px] sm:min-w-[220px] cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" />
              Watch Online
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Dots Indicators */}
      <div className="absolute bottom-24 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-2.5">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === idx
                ? "w-8 h-2 bg-secondary shadow-lg shadow-secondary/50"
                : "w-2 h-2 bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Brand accent bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <div className="h-full bg-gradient-to-r from-primary via-secondary to-primary w-full animate-pulse" />
      </div>

      {/* Animated Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white z-20 flex flex-col items-center space-y-1.5 cursor-pointer transition-colors focus:outline-none"
        aria-label="Scroll to next section"
      >
        <span className="text-[10px] font-display font-medium tracking-widest uppercase opacity-80">Scroll</span>
        <div className="w-5 h-9 border-2 border-white/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
}
