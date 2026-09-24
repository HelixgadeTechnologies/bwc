"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Play } from "lucide-react";

export function SermonsCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-white to-primary/10 relative overflow-hidden">
      {/* Dynamic ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-primary/15 to-transparent rounded-full blur-2xl animate-pulse delay-1000 pointer-events-none" />

      <div className="container-max relative z-10 text-center">
        {/* Tag Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary/10 text-primary font-semibold rounded-full text-sm tracking-wide">
            <BookOpen className="w-4 h-4" />
            <span>Resources</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-dark mb-8 tracking-tight max-w-4xl mx-auto">
          Life-Changing Messages for{" "}
          <span className="text-gradient-secondary font-black underline decoration-secondary/40">
            FREE
          </span>
        </h2>

        {/* Description */}
        <p className="text-xl sm:text-2xl text-gray-1 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Dive into our collection of powerful sermons and series — available to listen anytime.
          Listen at your fingertips, revisit, anytime, anywhere.
        </p>

        {/* Animated Play CTA Button */}
        <div className="relative inline-block">
          <Link
            href="/sermons"
            className="font-display font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-3 tracking-wide text-white focus:ring-primary active:scale-95 px-10 py-5 text-xl bg-gradient-primary hover:shadow-primary-glow transform hover:scale-105 transition-all duration-300 min-w-[260px] rounded-full shadow-xl group"
          >
            <div className="relative">
              <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-secondary rounded-full animate-ping" />
            </div>
            <span>Explore Sermons</span>
          </Link>

          {/* Playful animated dot decorations */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary/20 rounded-full animate-bounce delay-300 pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 w-5 h-5 bg-secondary/30 rounded-full animate-bounce delay-700 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
