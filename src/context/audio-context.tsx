"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";

interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  playTrack: (title: string, subtitle?: string, url?: string) => void;
  pauseTrack: () => void;
  volume: number;
  setVolume: (vol: number) => void;
  trackTitle: string;
  trackSubtitle: string;
  isVisible: boolean;
  setIsVisible: (val: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

// Stream URL with reliable live stream audio
const DEFAULT_STREAM_URL = "https://stream.zeno.fm/46b4129x8wzuv";

export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.8);
  const [trackTitle, setTrackTitle] = useState("BWC Radio 24/7");
  const [trackSubtitle, setTrackSubtitle] = useState("Beyond Worship Center • Live Atmosphere");
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(DEFAULT_STREAM_URL);
    audioRef.current.preload = "none";
    audioRef.current.volume = volume;

    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      setIsPlaying(false);
    };

    audioRef.current.addEventListener("ended", handleEnded);
    audioRef.current.addEventListener("error", handleError);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("ended", handleEnded);
        audioRef.current.removeEventListener("error", handleError);
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    setIsVisible(true);

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(true);
        });
    }
  };

  const playTrack = (title: string, subtitle = "Beyond Worship Center", url?: string) => {
    setTrackTitle(title);
    setTrackSubtitle(subtitle);
    setIsVisible(true);

    if (audioRef.current) {
      if (url && audioRef.current.src !== url) {
        audioRef.current.src = url;
      }
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(true);
        });
    }
  };

  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  const setVolume = (vol: number) => {
    setVolumeState(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        togglePlay,
        playTrack,
        pauseTrack,
        volume,
        setVolume,
        trackTitle,
        trackSubtitle,
        isVisible,
        setIsVisible,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudioPlayer() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudioPlayer must be used within an AudioPlayerProvider");
  }
  return context;
}
