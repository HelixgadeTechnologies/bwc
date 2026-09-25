"use client";

import React from "react";
import { Radio, Volume2 } from "lucide-react";
import { useAudioPlayer } from "@/context/audio-context";

export function RadioSection() {
  const { isPlaying, togglePlay } = useAudioPlayer();

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background audio visual ripples */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10 text-center">
        {/* Tag */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary/10 text-primary font-semibold rounded-full text-sm tracking-wide">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>Live Radio</span>
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark mb-6 tracking-tight">
          BWC Radio
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-gray-1 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Stay connected with live worship, teachings, and uplifting music 24/7 from Beyond Worship Centre
        </p>

        {/* Audio Player Trigger */}
        <div>
          <button
            onClick={togglePlay}
            className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-3 tracking-wide bg-gradient-primary text-white hover:shadow-primary-glow focus:ring-primary transform hover:scale-105 active:scale-95 px-10 py-5 text-xl rounded-full shadow-xl cursor-pointer"
          >
            <Radio className={`w-5 h-5 ${isPlaying ? "animate-spin" : ""}`} />
            <span>{isPlaying ? "Pause Stream" : "Listen Live"}</span>
            {isPlaying && (
              <span className="flex h-2.5 w-2.5 relative ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
            )}
          </button>
        </div>

        {/* Broadcast Features Ribbon */}
        <div className="mt-14 inline-flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-medium">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-primary" />
            <span>Crystal Clear Audio</span>
          </div>
          <span className="hidden sm:inline text-gray-300">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>24/7 Uninterrupted Broadcast</span>
          </div>
          <span className="hidden sm:inline text-gray-300">•</span>
          <div>Global Grace Feed</div>
        </div>
      </div>
    </section>
  );
}
