"use client";

import React, { useState } from "react";
import { useAudioPlayer } from "@/context/audio-context";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Radio,
  X,
  ChevronUp,
  ChevronDown,
  SkipBack,
  SkipForward,
} from "lucide-react";

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

export function AudioPlayer() {
  const {
    isPlaying,
    togglePlay,
    volume,
    setVolume,
    trackTitle,
    trackSubtitle,
    isVisible,
    setIsVisible,
    playNextTrack,
    playPreviousTrack,
    currentTime,
    duration,
    seekTo,
  } = useAudioPlayer();

  const [isMinimized, setIsMinimized] = useState(false);
  const [prevVolume, setPrevVolume] = useState(0.8);

  if (!isVisible) return null;

  const handleMuteToggle = () => {
    if (volume > 0) {
      setPrevVolume(volume);
      setVolume(0);
    } else {
      setVolume(prevVolume || 0.8);
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isMinimized ? "translate-y-[calc(100%-2rem)]" : "translate-y-0"
      }`}
    >
      {/* Top Toggle Bar */}
      <div className="flex justify-center -mb-2">
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="bg-dark/95 border-t border-x border-white/20 text-white/80 hover:text-white px-4 py-0.5 rounded-t-lg text-xs flex items-center gap-1 shadow-lg backdrop-blur-md cursor-pointer"
          aria-label={isMinimized ? "Expand audio player" : "Minimize audio player"}
        >
          {isMinimized ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          <span className="font-medium tracking-wide">BWC Radio {isPlaying && "• ON AIR"}</span>
        </button>
      </div>

      <div className="bg-[#1b1b1a]/95 backdrop-blur-lg border-t border-white/15 px-4 py-3 sm:px-6 shadow-2xl relative">
        {/* Scrubber Bar across top of player */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 group cursor-pointer">
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
            className="absolute -top-1 left-0 right-0 w-full h-3 opacity-0 cursor-pointer"
            aria-label="Audio scrubber"
          />
        </div>

        <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
          {/* Station & Track Info */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-primary-glow">
              <Radio className="w-5 h-5 animate-pulse" />
              {isPlaying && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              )}
            </div>
            <div className="min-w-0 max-w-xs sm:max-w-sm">
              <div className="flex items-center gap-2">
                <p className="text-white font-semibold text-sm truncate">{trackTitle}</p>
                <span className="bg-secondary/20 text-secondary text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider whitespace-nowrap">
                  Radio
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <p className="truncate">{trackSubtitle}</p>
                <span className="text-white/40">•</span>
                <span className="font-mono text-[11px] text-white/70 whitespace-nowrap">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
            </div>
          </div>

          {/* Player Controls (Previous, Play/Pause, Next) */}
          <div className="flex items-center gap-3">
            <button
              onClick={playPreviousTrack}
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              title="Previous Sermon"
              aria-label="Previous Sermon"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={togglePlay}
              className="w-11 h-11 rounded-full bg-gradient-primary hover:shadow-primary-glow text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              aria-label={isPlaying ? "Pause broadcast" : "Play broadcast"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={playNextTrack}
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              title="Next Sermon"
              aria-label="Next Sermon"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            {/* Audio Waveform Graphic */}
            <div className="hidden md:flex items-center gap-1 h-6 ml-2">
              {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlaying
                      ? i % 2 === 0
                        ? "bg-primary animate-pulse"
                        : "bg-secondary animate-pulse"
                      : "bg-white/20"
                  }`}
                  style={{
                    height: isPlaying ? `${h}%` : "20%",
                    animationDelay: `${i * 120}ms`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Volume & Close */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={handleMuteToggle}
                className="text-white/70 hover:text-white transition-colors cursor-pointer"
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
                className="w-20 accent-primary h-1 bg-white/20 rounded-lg cursor-pointer"
                aria-label="Volume slider"
              />
            </div>

            <button
              onClick={() => {
                togglePlay();
                setIsVisible(false);
              }}
              className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close audio player"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
