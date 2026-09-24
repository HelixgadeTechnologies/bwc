"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Play,
  Clock,
  Radio,
  Sparkles,
  BookOpen,
  Filter,
  X,
  Volume2,
  Calendar,
  User,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useAudioPlayer } from "@/context/audio-context";

export interface SermonSeries {
  id: string;
  name: string;
  subtitle: string;
  slug: string;
  messageCount: string;
  speaker: string;
  year: string;
  image: string;
  category: string;
  description: string;
}

export interface SermonItem {
  id: string;
  title: string;
  series: string;
  speaker: string;
  date: string;
  duration: string;
  category: string;
  image: string;
  youtubeId?: string;
  description: string;
}

const SERMON_SERIES: SermonSeries[] = [
  {
    id: "series-1",
    name: "Righteousness of Faith",
    subtitle: "Cease from Struggling",
    slug: "righteousness-of-faith",
    messageCount: "5 Parts",
    speaker: "Pastor Udochukwu Nwanma",
    year: "2026",
    image: "/images/word-cover.jpg",
    category: "Grace",
    description: "Understanding righteousness as an irrevocable gift of grace, completely separate from religious works.",
  },
  {
    id: "series-2",
    name: "RELATE. RESTORE. REIGN.",
    subtitle: "The Mandate of the Finished Work",
    slug: "relate-restore-reign",
    messageCount: "4 Parts",
    speaker: "Pastor Udochukwu Nwanma",
    year: "2026",
    image: "/images/love_life_impact.png",
    category: "Identity",
    description: "How God's grace anchors believers to relate authentically, experience supernatural restoration, and reign in kingdom authority.",
  },
  {
    id: "series-3",
    name: "The Multiplier's Anointing",
    subtitle: "Supernatural Supply & Increase",
    slug: "the-multipliers-anointing",
    messageCount: "3 Parts",
    speaker: "Pastor Udochukwu Nwanma",
    year: "2026",
    image: "/images/welcome-cover-2.png",
    category: "Supernatural",
    description: "Nothing dies in your hands. Activating the divine advantage that causes everything you touch to flourish.",
  },
  {
    id: "series-4",
    name: "Spirit & Power",
    subtitle: "Walking in Kingdom Authority",
    slug: "spirit-and-power",
    messageCount: "6 Parts",
    speaker: "Pastor Udochukwu Nwanma",
    year: "2026",
    image: "/images/midweek_koinonia.png",
    category: "Holy Spirit",
    description: "A deep immersion into spiritual empowerment, prophetic intimacy, and demonstrable kingdom power.",
  },
];

const SERMONS: SermonItem[] = [
  {
    id: "sermon-1",
    title: "The Gift of Righteousness: Cease from Struggling",
    series: "Righteousness of Faith",
    speaker: "Pastor Udochukwu Nwanma",
    date: "Sep 20, 2026",
    duration: "1h 14m",
    category: "Grace",
    image: "/images/word-cover.jpg",
    youtubeId: "v4_3m4bK7yY",
    description:
      "Religious traditions teach that righteousness must be earned. Discover the finished work of Jesus where you stand complete and justified.",
  },
  {
    id: "sermon-2",
    title: "RELATE. RESTORE. REIGN. — Walking in Kingdom Dominion",
    series: "RELATE. RESTORE. REIGN.",
    speaker: "Pastor Udochukwu Nwanma",
    date: "Sep 13, 2026",
    duration: "1h 08m",
    category: "Identity",
    image: "/images/love_life_impact.png",
    youtubeId: "v4_3m4bK7yY",
    description:
      "How God's sacrificial grace anchors your soul to relate deeply with God, receive total restoration, and reign with Christ in culture.",
  },
  {
    id: "sermon-3",
    title: "Nothing Dies in My Hands: Operating in Multiplication",
    series: "The Multiplier's Anointing",
    speaker: "Pastor Udochukwu Nwanma",
    date: "Sep 06, 2026",
    duration: "58m",
    category: "Supernatural",
    image: "/images/welcome-cover-2.png",
    youtubeId: "v4_3m4bK7yY",
    description:
      "When the presence of God resides within you, scarcity is swallowed up by divine supply. Discover how to stir the multiplier's anointing.",
  },
  {
    id: "sermon-4",
    title: "Living in Divine Authority: No Condemnation",
    series: "Righteousness of Faith",
    speaker: "Pastor Udochukwu Nwanma",
    date: "Aug 30, 2026",
    duration: "1h 22m",
    category: "Grace",
    image: "/images/about.png",
    youtubeId: "v4_3m4bK7yY",
    description:
      "There is now therefore no condemnation for those in Christ Jesus. Walking boldly into the presence of the Father without shame.",
  },
  {
    id: "sermon-5",
    title: "The Helper Within: Fellowship with the Holy Spirit",
    series: "Spirit & Power",
    speaker: "Pastor Chika UD Nwanma",
    date: "Aug 23, 2026",
    duration: "52m",
    category: "Holy Spirit",
    image: "/images/PMaks-3.jpg",
    youtubeId: "v4_3m4bK7yY",
    description:
      "Deepening your everyday sensitivity to the Holy Spirit as your advocate, comforter, and supernatural strategist.",
  },
  {
    id: "sermon-6",
    title: "Wisdom for Marketplace Dominion",
    series: "Supernatural",
    speaker: "Pastor Udochukwu Nwanma",
    date: "Aug 16, 2026",
    duration: "1h 05m",
    category: "Leadership",
    image: "/images/pflo.png",
    youtubeId: "v4_3m4bK7yY",
    description:
      "How spiritual wisdom and strategic competence combine to position believers at the cutting edge of industry and innovation.",
  },
];

const CATEGORIES = ["All", "Grace", "Identity", "Supernatural", "Holy Spirit", "Leadership"];

export function SermonsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState<SermonItem | null>(null);

  const { playTrack, isPlaying } = useAudioPlayer();

  // Search filtering
  const isSearching = searchQuery.trim().length > 0;

  const filteredSeries = useMemo(() => {
    if (!isSearching) return SERMON_SERIES;
    const query = searchQuery.toLowerCase();
    return SERMON_SERIES.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.subtitle.toLowerCase().includes(query) ||
        s.speaker.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query)
    );
  }, [searchQuery, isSearching]);

  const filteredSermons = useMemo(() => {
    let list = SERMONS;
    if (selectedCategory !== "All" && !isSearching) {
      list = list.filter((s) => s.category.toLowerCase() === selectedCategory.toLowerCase());
    }
    if (isSearching) {
      const query = searchQuery.toLowerCase();
      list = SERMONS.filter(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.speaker.toLowerCase().includes(query) ||
          s.series.toLowerCase().includes(query) ||
          s.category.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query)
      );
    }
    return list;
  }, [searchQuery, selectedCategory, isSearching]);

  const handlePlaySermon = (sermon: SermonItem) => {
    playTrack(sermon.title, `${sermon.speaker} • ${sermon.series}`);
  };

  const handlePlayLiveRadio = () => {
    playTrack("BWC Radio Live 24/7", "Beyond Worship Center Global Stream");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Hero Section (Modeled after https://thelogicchurch.org/sermons) */}
      <section className="relative overflow-hidden bg-gradient-primary text-white flex items-center pt-32 pb-16 md:pt-40 md:pb-24 min-h-[70vh]">
        {/* Ambient Glowing Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container-max relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight leading-tight flex items-center justify-center gap-4">
              Sermons
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
              Experience life-transforming messages that bring hope, healing, and breakthrough.
            </p>

            {/* Search Input Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search sermons, series, or speakers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 text-base sm:text-lg text-gray-900 bg-white/95 backdrop-blur-sm rounded-2xl border-0 shadow-2xl focus:ring-4 focus:ring-white/40 outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Container with Latest Series & Latest Sermons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* SEARCH ACTIVE RESULTS VIEW */}
          {isSearching && (
            <div className="space-y-12">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <h2 className="text-2xl font-bold font-display text-gray-900">
                  Search Results for &ldquo;{searchQuery}&rdquo;
                </h2>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Reset Search
                </button>
              </div>

              {filteredSeries.length === 0 && filteredSermons.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                  <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-display text-dark">No Messages Found</h3>
                  <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
                    We couldn&apos;t find any sermons or series matching your search term. Try searching for &ldquo;Grace&rdquo;, &ldquo;Righteousness&rdquo;, or &ldquo;Nwanma&rdquo;.
                  </p>
                </div>
              ) : null}

              {/* Matching Series */}
              {filteredSeries.length > 0 && (
                <section>
                  <h3 className="text-xl font-bold font-display text-gray-900 mb-6">
                    Series ({filteredSeries.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredSeries.map((s) => (
                      <SeriesCard key={s.id} series={s} onSelect={() => setSearchQuery(s.name)} />
                    ))}
                  </div>
                </section>
              )}

              {/* Matching Sermons */}
              {filteredSermons.length > 0 && (
                <section>
                  <h3 className="text-xl font-bold font-display text-gray-900 mb-6">
                    Sermons ({filteredSermons.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredSermons.map((sermon) => (
                      <SermonCard
                        key={sermon.id}
                        sermon={sermon}
                        onPlay={() => handlePlaySermon(sermon)}
                        onWatch={() => setActiveVideo(sermon)}
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}

          {/* STANDARD VIEW (When Not Searching) */}
          {!isSearching && (
            <>
              {/* Section 1: Latest Series */}
              <section>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                      Latest Series
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 hidden sm:block">
                      Systematic expositions of the Word of grace for spiritual maturity.
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide bg-transparent hover:bg-primary text-primary hover:text-white border-2 border-primary focus:ring-primary transform hover:scale-105 active:scale-95 px-5 py-2 rounded-full text-sm cursor-pointer"
                  >
                    View All Series
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  {SERMON_SERIES.map((s) => (
                    <SeriesCard key={s.id} series={s} onSelect={() => setSearchQuery(s.name)} />
                  ))}
                </div>
              </section>

              {/* Section 2: Latest Sermons */}
              <section>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                      Latest Sermons
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Stream unedited Sunday &amp; Midweek messages in full HD audio.
                    </p>
                  </div>

                  {/* Category Pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                          selectedCategory === cat
                            ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                            : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredSermons.map((sermon) => (
                    <SermonCard
                      key={sermon.id}
                      sermon={sermon}
                      onPlay={() => handlePlaySermon(sermon)}
                      onWatch={() => setActiveVideo(sermon)}
                    />
                  ))}
                </div>
              </section>

              {/* Section 3: Live Radio Feature Banner (Modeled after target site) */}
              <section className="section-padding bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200/80 shadow-elegant p-8 sm:p-14 text-center relative overflow-hidden">
                <div className="max-w-3xl mx-auto relative z-10">
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary/10 text-primary font-semibold rounded-full text-sm tracking-wide">
                      <Radio className="w-4 h-4 text-primary animate-pulse" />
                      <span>Live Radio</span>
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-display font-bold text-dark mb-4 tracking-tight">
                    BWC Radio
                  </h2>

                  <p className="text-base sm:text-xl text-gray-1 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Stay connected with live worship, teachings, and uplifting music 24/7 across every device.
                  </p>

                  <div>
                    <button
                      onClick={handlePlayLiveRadio}
                      className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-3 tracking-wide bg-gradient-primary text-white hover:shadow-primary-glow focus:ring-primary transform hover:scale-105 active:scale-95 px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-full shadow-xl cursor-pointer"
                    >
                      <Radio className="w-6 h-6 flex-shrink-0" />
                      <span>Listen Live</span>
                    </button>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>

      {/* Video Modal (Popup Player) */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#1a1a19] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 text-white">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-secondary">
                  {activeVideo.series}
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display mt-0.5 line-clamp-1">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Video Player */}
            <div className="relative aspect-video bg-black flex items-center justify-center group">
              <Image
                src={activeVideo.image}
                alt={activeVideo.title}
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10 text-center text-white px-4">
                <div className="w-20 h-20 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto mb-4 shadow-primary-glow animate-pulse">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <p className="text-lg font-bold font-display">Streaming HD Video Broadcast</p>
                <p className="text-xs text-gray-300 mt-1">Speaker: {activeVideo.speaker}</p>
                <div className="mt-6 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      handlePlaySermon(activeVideo);
                      setActiveVideo(null);
                    }}
                    className="px-6 py-2.5 bg-white text-dark font-semibold text-xs sm:text-sm rounded-full hover:bg-gray-100 transition-all flex items-center gap-2"
                  >
                    <Volume2 className="w-4 h-4 text-primary" />
                    <span>Play Audio Stream</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// Sub-components
// -------------------------------------------------------------

function SeriesCard({
  series,
  onSelect,
}: {
  series: SermonSeries;
  onSelect: () => void;
}) {
  return (
    <div
      onClick={onSelect}
      className="group card-elegant overflow-hidden rounded-3xl border border-gray-100 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between bg-white"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-dark">
        <Image
          src={series.image}
          alt={series.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#212120]/90 via-[#212120]/20 to-transparent" />

        {/* Part Count Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20">
            {series.messageCount}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary-300">
            {series.category}
          </span>
          <h3 className="text-lg font-bold font-display leading-tight line-clamp-1 group-hover:text-primary-200 transition-colors">
            {series.name}
          </h3>
        </div>
      </div>

      <div className="p-5 flex items-center justify-between text-xs text-gray-500 border-t border-gray-50">
        <span>{series.speaker}</span>
        <span className="text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}

function SermonCard({
  sermon,
  onPlay,
  onWatch,
}: {
  sermon: SermonItem;
  onPlay: () => void;
  onWatch: () => void;
}) {
  return (
    <div className="card-elegant overflow-hidden rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between bg-white group">
      <div>
        {/* Cover Art with Play Button */}
        <div className="relative aspect-[16/9] sm:aspect-[4/3] overflow-hidden bg-dark">
          <Image
            src={sermon.image}
            alt={sermon.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

          {/* Centered Play Trigger */}
          <button
            onClick={onPlay}
            aria-label={`Play ${sermon.title}`}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </div>
          </button>

          {/* Badges */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-md">
              {sermon.category}
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="px-2.5 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Clock className="w-3 h-3 text-white/80" />
              <span>{sermon.duration}</span>
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2.5">
            <span className="font-semibold text-primary">{sermon.series}</span>
            <span>{sermon.date}</span>
          </div>

          <h3
            onClick={onPlay}
            className="text-lg font-bold font-display text-dark group-hover:text-primary transition-colors line-clamp-2 cursor-pointer mb-2 leading-snug"
          >
            {sermon.title}
          </h3>

          <p className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-gray-400" />
            <span>{sermon.speaker}</span>
          </p>

          <p className="text-gray-1 text-sm line-clamp-2 leading-relaxed">
            {sermon.description}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 flex items-center gap-3">
        <button
          onClick={onPlay}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-primary text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-primary-glow transition-all active:scale-95 cursor-pointer"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>Listen Now</span>
        </button>
        <button
          onClick={onWatch}
          className="py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-dark text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
        >
          <span>Watch</span>
        </button>
      </div>
    </div>
  );
}
