"use client";

import React, { useState, useEffect } from "react";
import {
  Smartphone,
  ArrowRight,
  X,
  Sparkles,
  Radio,
  BookOpen,
  Headphones,
  Bell,
  CheckCircle2,
} from "lucide-react";

export function LogicLoungeBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <section className="bg-gradient-to-br from-white via-primary/5 to-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="container-max overflow-hidden rounded-3xl border border-primary/15 bg-[radial-gradient(circle_at_85%_50%,rgba(7,123,174,0.15),transparent_40%),linear-gradient(135deg,#ffffff,#f4f9fc)] px-6 py-8 shadow-elegant sm:px-10 sm:py-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              {/* Tag Badge */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary uppercase">
                <Smartphone className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>BWC LOUNGE</span>
              </div>

              {/* Title */}
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Your everyday companion for life in Christ.
              </h2>

              {/* Description */}
              <p className="mt-3 max-w-xl text-base sm:text-lg leading-7 text-gray-1">
                The Word, messages, and BWC Radio—always within reach.
              </p>
            </div>

            {/* Button CTA */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full bg-primary px-6 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-primary-glow shadow-md md:self-auto cursor-pointer"
            >
              <span>Explore the app</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Coming Soon Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-[#212120] to-[#121211] text-white p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-secondary/20 rounded-full blur-2xl pointer-events-none" />

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Coming Soon</span>
              </div>
              <h3 id="coming-soon-title" className="text-2xl sm:text-3xl font-display font-bold text-white">
                BWC Mobile App
              </h3>
              <p className="text-gray-300 text-sm mt-1.5 leading-relaxed">
                Your portable sanctuary and companion for daily Christian growth is currently in final testing.
              </p>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-bold text-primary uppercase tracking-widest">
                  What to expect in BWC Mobile App:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Radio className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-dark">BWC Radio 24/7</h4>
                      <p className="text-[11px] text-gray-500">Live streaming anywhere</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-secondary/20 text-secondary-dark flex items-center justify-center shrink-0">
                      <Headphones className="w-4 h-4 text-dark" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-dark">Sermon Vault</h4>
                      <p className="text-[11px] text-gray-500">Audio &amp; video archives</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-dark">Daily Devotionals</h4>
                      <p className="text-[11px] text-gray-500">Word-centred study</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-dark">Live Alerts</h4>
                      <p className="text-[11px] text-gray-500">Service reminders</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/15 text-center">
                <div className="flex items-center justify-center gap-2 text-primary font-semibold text-xs mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Cross-Platform Release</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Launching soon on both <strong>iOS (Apple App Store)</strong> and <strong>Android (Google Play Store)</strong>.
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 bg-gradient-primary text-white font-display font-semibold rounded-xl text-sm shadow-md hover:shadow-primary-glow transition-all cursor-pointer hover:scale-[1.01] active:scale-95"
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
