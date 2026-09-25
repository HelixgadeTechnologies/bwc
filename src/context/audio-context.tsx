"use client";

import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from "react";
import { BWC_RADIO_TRACKS, RadioTrack } from "@/data/radio-tracks";

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

  // Radio Playlist & Scrubber Controls
  tracks: RadioTrack[];
  currentTrackIndex: number;
  currentTrack: RadioTrack;
  playNextTrack: () => void;
  playPreviousTrack: () => void;
  playTrackByIndex: (index: number) => void;
  currentTime: number;
  duration: number;
  seekTo: (time: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.8);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const currentTrack = BWC_RADIO_TRACKS[currentTrackIndex] || BWC_RADIO_TRACKS[0];

  const [trackTitle, setTrackTitle] = useState(currentTrack.title);
  const [trackSubtitle, setTrackSubtitle] = useState(`${currentTrack.speaker} • ${currentTrack.series}`);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(currentTrack.durationSeconds || 0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrackIndexRef = useRef(currentTrackIndex);
  currentTrackIndexRef.current = currentTrackIndex;

  const playTrackByIndex = useCallback((index: number) => {
    const targetTrack = BWC_RADIO_TRACKS[index];
    if (!targetTrack) return;

    setCurrentTrackIndex(index);
    setTrackTitle(targetTrack.title);
    setTrackSubtitle(`${targetTrack.speaker} • ${targetTrack.series}`);
    setDuration(targetTrack.durationSeconds);
    setCurrentTime(0);
    setIsVisible(true);

    if (audioRef.current) {
      audioRef.current.src = targetTrack.src;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const playNextTrack = useCallback(() => {
    const nextIndex = (currentTrackIndexRef.current + 1) % BWC_RADIO_TRACKS.length;
    playTrackByIndex(nextIndex);
  }, [playTrackByIndex]);

  const playPreviousTrack = useCallback(() => {
    const prevIndex =
      (currentTrackIndexRef.current - 1 + BWC_RADIO_TRACKS.length) % BWC_RADIO_TRACKS.length;
    playTrackByIndex(prevIndex);
  }, [playTrackByIndex]);

  useEffect(() => {
    const initialTrack = BWC_RADIO_TRACKS[0];
    audioRef.current = new Audio(initialTrack.src);
    audioRef.current.preload = "metadata";
    audioRef.current.volume = volume;

    const handleEnded = () => {
      // Continuous Radio Auto-Advance
      const nextIdx = (currentTrackIndexRef.current + 1) % BWC_RADIO_TRACKS.length;
      playTrackByIndex(nextIdx);
    };

    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        if (audioRef.current.duration && !isNaN(audioRef.current.duration)) {
          setDuration(audioRef.current.duration);
        }
      }
    };

    const handleLoadedMetadata = () => {
      if (audioRef.current?.duration && !isNaN(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
      }
    };

    const handleError = () => {
      setIsPlaying(false);
    };

    audioRef.current.addEventListener("ended", handleEnded);
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioRef.current.addEventListener("error", handleError);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("ended", handleEnded);
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audioRef.current.removeEventListener("error", handleError);
        audioRef.current = null;
      }
    };
  }, [playTrackByIndex]);

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
        .catch(() => setIsPlaying(false));
    }
  };

  const playTrack = (title: string, subtitle = "Beyond Worship Centre", url?: string) => {
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
        .catch(() => setIsPlaying(false));
    }
  };

  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
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
        tracks: BWC_RADIO_TRACKS,
        currentTrackIndex,
        currentTrack,
        playNextTrack,
        playPreviousTrack,
        playTrackByIndex,
        currentTime,
        duration,
        seekTo,
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
