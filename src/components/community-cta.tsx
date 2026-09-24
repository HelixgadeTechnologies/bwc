"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

interface CommunityCTAProps {
  onPlanVisitClick?: () => void;
}

export function CommunityCTA({ onPlanVisitClick }: CommunityCTAProps) {
  return (
    <section className="section-padding bg-gradient-primary text-white relative overflow-hidden">
      {/* Ambient white light shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-max text-center relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-display font-bold mb-8 tracking-tight">
          Ready to Join Our Community?
        </h2>

        <p className="text-xl sm:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
          We&apos;d love to welcome you to Beyond Worship Center. Come as you are and discover a place
          where you belong, grow, and make a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={onPlanVisitClick}
            className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide focus:ring-primary transform hover:scale-105 active:scale-95 px-10 py-5 text-xl bg-white text-primary hover:bg-white/90 hover:shadow-elegant min-w-[220px] rounded-full shadow-2xl cursor-pointer"
          >
            <span>Plan Your Visit</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </button>

          <Link
            href="/contact"
            className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 focus:ring-white transform hover:scale-105 active:scale-95 px-10 py-5 text-xl min-w-[220px] rounded-full shadow-lg"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
