"use client";

import React, { useState } from "react";
import { AudioPlayerProvider } from "@/context/audio-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AudioPlayer } from "@/components/audio-player";
import { PlanVisitModal } from "@/components/plan-visit-modal";
import { GivingModal } from "@/components/giving-modal";

interface ShellContextType {
  openPlanVisit: () => void;
  openGiving: () => void;
}

export const ShellContext = React.createContext<ShellContextType>({
  openPlanVisit: () => {},
  openGiving: () => {},
});

export function useShellModal() {
  return React.useContext(ShellContext);
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isPlanVisitOpen, setIsPlanVisitOpen] = useState(false);
  const [isGivingOpen, setIsGivingOpen] = useState(false);

  const openPlanVisit = () => setIsPlanVisitOpen(true);
  const openGiving = () => setIsGivingOpen(true);

  return (
    <AudioPlayerProvider>
      <ShellContext.Provider value={{ openPlanVisit, openGiving }}>
        <div className="min-h-screen flex flex-col justify-between selection:bg-primary selection:text-white">
          <Navbar onOpenGiveModal={openGiving} />
          <main className="flex-1">{children}</main>
          <Footer />
          <AudioPlayer />

          {/* Interactive Modals */}
          <PlanVisitModal
            isOpen={isPlanVisitOpen}
            onClose={() => setIsPlanVisitOpen(false)}
          />
          <GivingModal
            isOpen={isGivingOpen}
            onClose={() => setIsGivingOpen(false)}
          />
        </div>
      </ShellContext.Provider>
    </AudioPlayerProvider>
  );
}
