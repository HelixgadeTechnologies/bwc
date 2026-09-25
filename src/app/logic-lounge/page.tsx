import React from "react";
import Link from "next/link";
import { Smartphone, Radio, BookOpen, Music, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "BWC Lounge | Beyond Worship Centre",
  description:
    "Your everyday companion for life in Christ. Stream BWC Radio, access sermon notes, worship tracks, and daily teachings on the BWC Lounge app.",
};

export default function LogicLoungePage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-gradient-to-br from-[#212120] to-[#121211] text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="container-max max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-400 font-semibold text-xs tracking-widest uppercase mb-6">
            <Smartphone className="w-4 h-4" />
            <span>Digital Discipleship</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight mb-6">
            BWC Lounge
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Your everyday companion for life in Christ. The Word, sermons, devotionals, and 24/7 BWC Radio—always within reach.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3.5 bg-gradient-primary text-white font-semibold rounded-full text-base shadow-lg hover:shadow-primary-glow transition-all hover:scale-105 active:scale-95 cursor-pointer">
              Download on iOS App Store
            </button>
            <button className="px-8 py-3.5 bg-white/10 border border-white/25 text-white font-semibold rounded-full text-base hover:bg-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer">
              Get on Google Play Store
            </button>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-dark">24/7 BWC Radio</h3>
              <p className="text-gray-1 text-sm leading-relaxed">
                Stream non-stop worship sets and anointed teachings in high definition audio without buffering.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-dark">Sermon Notes &amp; Bible</h3>
              <p className="text-gray-1 text-sm leading-relaxed">
                Follow along live on Sundays with integrated scripture lookups, sermon outlines, and personal bookmarks.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-dark">Worship Playlist</h3>
              <p className="text-gray-1 text-sm leading-relaxed">
                Access official BWC Sound original worship tracks, acoustic recordings, and prayer atmospheres.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
