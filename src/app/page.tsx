"use client";

import React, { useState } from "react";
import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { LogicLoungeBanner } from "@/components/logic-lounge-banner";

import { SermonsCTA } from "@/components/sermons-cta";

import { RadioSection } from "@/components/radio-section";
import { GivingSection } from "@/components/giving-section";
import { CommunityCTA } from "@/components/community-cta";
import { useShellModal } from "@/components/app-shell";
import { X } from "lucide-react";

export default function HomePage() {
  const { openPlanVisit, openGiving } = useShellModal();
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
      {/* 1. Hero Section */}
      <Hero
        onPlanVisitClick={openPlanVisit}
        onWatchOnlineClick={() => setVideoModalOpen(true)}
      />

      {/* 2. Core Pillars ("Welcome Home") */}
      <Pillars />

      {/* 3. BWC Lounge App Banner */}
      <LogicLoungeBanner />


      {/* 5. Life-Changing Messages (Sermons CTA) */}
      <SermonsCTA />


      {/* 8. BWC Radio 24/7 */}
      <RadioSection />

      {/* 9. Offerings and Commitments (Giving) */}
      <GivingSection onOpenGiveModal={openGiving} />

      {/* 10. Community CTA Banner */}
      <CommunityCTA onPlanVisitClick={openPlanVisit} />

      {/* Online Broadcast Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="flex items-center justify-between p-4 bg-dark text-white border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-sm font-semibold tracking-wide">
                  Beyond Worship Centre • Live Service Stream
                </span>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/live_stream?channel=UCv_bT6o-o86M9U4h_4A81Xw"
                title="Beyond Worship Centre Live Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
