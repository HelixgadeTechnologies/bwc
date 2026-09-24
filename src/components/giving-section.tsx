"use client";

import React from "react";
import { Heart, Gift } from "lucide-react";

interface GivingSectionProps {
  onOpenGiveModal?: () => void;
}

export function GivingSection({ onOpenGiveModal }: GivingSectionProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-white to-primary/10 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-l from-primary/15 to-transparent rounded-full blur-2xl animate-pulse delay-1000 pointer-events-none" />

      <div className="container-max text-center relative z-10 max-w-4xl mx-auto">
        {/* Tag */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary/10 text-primary font-semibold rounded-full text-sm tracking-wide">
            <Gift className="w-4 h-4" />
            <span>Partnership</span>
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark mb-8 tracking-tight">
          Hilarious Generosity
        </h2>

        {/* Paragraph */}
        <p className="text-xl sm:text-2xl text-gray-1 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Your giving fuels the spread of the gospel and helps us take the revelation of Jesus Christ to
          the nations.
        </p>

        {/* Action Button */}
        <div>
          <button
            onClick={onOpenGiveModal}
            className="font-display font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-3 tracking-wide text-white focus:ring-primary active:scale-95 px-10 py-5 text-xl bg-gradient-primary hover:shadow-primary-glow transform hover:scale-105 transition-all duration-300 min-w-[220px] rounded-full shadow-xl cursor-pointer"
          >
            <Heart className="w-5 h-5 fill-current" />
            <span>Give Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}
