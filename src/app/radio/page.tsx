"use client";

import React from "react";
import Image from "next/image";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Disc,
  SkipBack,
  SkipForward,
  Radio,
  Clock,
  Sparkles,
  Headphones,
} from "lucide-react";
import { useAudioPlayer } from "@/context/audio-context";

function formatTime(secs: number): string {
  if (isNaN(secs) || secs < 0) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  const h = Math.floor(m / 60);
  const remM = m % 60;
  if (h > 0) {
    return `${h}:${remM.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function RadioPage() {
  const {
    isPlaying,
    togglePlay,
    volume,
    setVolume,
    trackTitle,
    trackSubtitle,
    tracks,
    currentTrackIndex,
    playTrackByIndex,
    playNextTrack,
    playPreviousTrack,
    currentTime,
    duration,
    seekTo,
  } = useAudioPlayer();

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const currentTrack = tracks[currentTrackIndex] || tracks[0];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Deck */}
      <section className="bg-gradient-to-br from-[#212120] to-[#121211] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="container-max max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-xs tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>24/7 Global Stream</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight mb-4">
            BWC Radio
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Immerse yourself in non-stop anointed teachings of grace, apostolic revelation,
            and prophetic atmospheres from Beyond Worship Center wherever you are in the world.
          </p>

          {/* Large Live Visualizer Deck */}
          <div className="card-elegant bg-dark/95 border border-white/20 p-6 sm:p-10 rounded-3xl max-w-xl mx-auto shadow-2xl space-y-6">
            {/* Spinning Disc or Speaker Image */}
            <div className="relative w-36 h-36 rounded-3xl overflow-hidden mx-auto shadow-2xl border border-white/20 bg-gradient-primary flex items-center justify-center">
              {currentTrack?.image ? (
                <Image
                  src={currentTrack.image}
                  alt={currentTrack.speaker}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <Disc className={`w-16 h-16 text-white ${isPlaying ? "animate-spin" : ""}`} />
              )}
              {isPlaying && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                  </span>
                </div>
              )}
            </div>

            <div>
              <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-widest text-secondary font-bold px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/20">
                <Radio className="w-3 h-3 animate-pulse" />
                <span>Now Broadcasting</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2">
                {trackTitle}
              </h2>
              <p className="text-primary-300 text-sm mt-1 font-medium">{trackSubtitle}</p>
            </div>

            {/* Scrubber & Time */}
            <div className="space-y-1.5 max-w-md mx-auto pt-2">
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden cursor-pointer">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="1"
                  value={currentTime}
                  onChange={(e) => seekTo(parseFloat(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  aria-label="Seek time"
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-gray-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                onClick={playPreviousTrack}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                title="Previous sermon"
                aria-label="Previous sermon"
              >
                <SkipBack className="w-5 h-5" />
              </button>

              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-gradient-primary hover:shadow-primary-glow text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
                aria-label={isPlaying ? "Pause broadcast" : "Play broadcast"}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 fill-current" />
                ) : (
                  <Play className="w-8 h-8 fill-current ml-1" />
                )}
              </button>

              <button
                onClick={playNextTrack}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                title="Next sermon"
                aria-label="Next sermon"
              >
                <SkipForward className="w-5 h-5" />
              </button>
            </div>

            {/* Live Audio Visualizer Lines */}
            <div className="flex items-center justify-center gap-1.5 h-10 pt-2">
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
            <div className="flex items-center justify-center gap-3 pt-3 border-t border-white/10 max-w-xs mx-auto">
              <button
                onClick={() => setVolume(volume === 0 ? 0.8 : 0)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label={volume === 0 ? "Unmute" : "Mute"}
              >
                {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-44 accent-primary h-1 bg-white/20 rounded-lg cursor-pointer"
                aria-label="Volume slider"
              />
              <span className="text-xs text-gray-400 font-mono w-10 text-right">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Radio Broadcast Rotation Schedule / Playlist */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Program Lineup</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark">
              Sermons in Rotation
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Continuous 24/7 teachings broadcast from Beyond Worship Center. Click any sermon to tune in.
            </p>
          </div>

          <div className="space-y-4">
            {tracks.map((track, idx) => {
              const isCurrent = currentTrackIndex === idx;
              return (
                <div
                  key={track.id}
                  onClick={() => playTrackByIndex(idx)}
                  className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isCurrent
                      ? "bg-white border-primary shadow-lg ring-2 ring-primary/20"
                      : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Index or Speaker Avatar */}
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-gray-100 shrink-0 shadow-sm">
                      {track.image ? (
                        <Image
                          src={track.image}
                          alt={track.speaker}
                          fill
                          className="object-cover object-top"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-display font-bold text-primary">
                          {idx + 1}
                        </div>
                      )}
                      {isCurrent && isPlaying && (
                        <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                          <Radio className="w-5 h-5 text-white animate-pulse" />
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {track.category}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                            On Air
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold font-display text-dark mt-0.5">
                        {track.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {track.speaker} • <span className="text-gray-400">{track.series}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                    <span className="inline-flex items-center gap-1 text-xs text-gray-500 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{track.duration}</span>
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isCurrent) {
                          togglePlay();
                        } else {
                          playTrackByIndex(idx);
                        }
                      }}
                      className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                        isCurrent && isPlaying
                          ? "bg-secondary text-dark shadow-sm"
                          : "bg-gradient-primary text-white hover:shadow-primary-glow"
                      }`}
                    >
                      {isCurrent && isPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5 fill-current" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          <span>Tune In</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Notice */}
          <div className="mt-8 p-6 rounded-3xl bg-white border border-dashed border-gray-200 text-center">
            <div className="flex items-center justify-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider mb-1">
              <Headphones className="w-4 h-4" />
              <span>Uninterrupted Streaming</span>
            </div>
            <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
              BWC Radio automatically rotates through all apostolic teachings and messages. You can continue listening as you browse any page on the website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
