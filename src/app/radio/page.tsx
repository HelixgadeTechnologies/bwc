"use client";

import React from "react";
import { Volume2, Play, Pause, Disc } from "lucide-react";
import { useAudioPlayer } from "@/context/audio-context";

export default function RadioPage() {
  const { isPlaying, togglePlay, volume, setVolume, trackTitle, trackSubtitle } = useAudioPlayer();

  return (
    <div className="pt-24 pb-20">
      <section className="bg-gradient-to-br from-[#212120] to-[#121211] text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="container-max max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-xs tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>24/7 Global Stream</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight mb-4">
            BWC Radio
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
            Immerse yourself in non-stop spontaneous worship, sound teachings of the grace of God,
            and prophetic atmospheres from Beyond Worship Center wherever you are in the world.
          </p>

          {/* Large Live Visualizer Deck */}
          <div className="card-elegant bg-dark/95 border border-white/20 p-8 sm:p-10 rounded-3xl max-w-xl mx-auto shadow-2xl space-y-6">
            <div className="relative w-32 h-32 rounded-3xl bg-gradient-primary flex items-center justify-center mx-auto shadow-primary-glow">
              <Disc className={`w-16 h-16 text-white ${isPlaying ? "animate-spin" : ""}`} />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-secondary font-bold">Now Broadcasting</span>
              <h2 className="text-2xl font-bold font-display text-white mt-1">{trackTitle}</h2>
              <p className="text-gray-400 text-sm mt-1">{trackSubtitle}</p>
            </div>

            {/* Play/Pause Button */}
            <div className="flex justify-center pt-2">
              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-gradient-primary hover:shadow-primary-glow text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
                aria-label={isPlaying ? "Pause broadcast" : "Play broadcast"}
              >
                {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
              </button>
            </div>

            {/* Live Audio Visualizer Lines */}
            <div className="flex items-center justify-center gap-1.5 h-12 pt-2">
              {[30, 60, 45, 90, 75, 40, 95, 60, 85, 50, 70, 40, 80, 55, 90].map((h, i) => (
                <div
                  key={i}
                  className={`w-1.5 rounded-full transition-all duration-300 ${
                    isPlaying
                      ? i % 2 === 0
                        ? "bg-primary animate-pulse"
                        : "bg-secondary animate-pulse"
                      : "bg-white/15"
                  }`}
                  style={{
                    height: isPlaying ? `${h}%` : "20%",
                    animationDelay: `${i * 90}ms`,
                  }}
                />
              ))}
            </div>

            {/* Volume Control */}
            <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/10 max-w-xs mx-auto">
              <Volume2 className="w-4 h-4 text-gray-400" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-48 accent-primary h-1 bg-white/20 rounded-lg cursor-pointer"
                aria-label="Volume slider"
              />
              <span className="text-xs text-gray-400 font-mono">{Math.round(volume * 100)}%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
