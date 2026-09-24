"use client";

import React from "react";
import { HeartHandshake, RefreshCw, Crown } from "lucide-react";

const pillars = [
  {
    title: "Relate",
    subtitle: "What we preach — walking in intimate relationship and authentic fellowship with God and one another.",
    icon: HeartHandshake,
  },
  {
    title: "Restore",
    subtitle: "What we experience — a grace family where brokenness is healed, hope is revived, and lives flourish.",
    icon: RefreshCw,
  },
  {
    title: "Reign",
    subtitle: "What we do — rising in kingdom authority, supernatural purpose, and dominion in every sphere.",
    icon: Crown,
  },
];

export function Pillars() {
  return (
    <section
      id="welcome-home"
      className="section-padding bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Background ambient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="mb-6">
            <span className="inline-block px-6 py-2.5 bg-primary/10 text-primary font-semibold rounded-full text-sm tracking-wide">
              Relate • Restore • Reign
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark mb-8 tracking-tight">
            Welcome to <span className="text-gradient">Beyond Worship Center</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-1 leading-relaxed font-light">
            We are a Word-based, Spirit-filled family where God&apos;s grace empowers us to Relate deeply, experience complete Restoration, and Reign in life.
            Here, you&apos;ll grow in grace, experience true worship, build real relationships, and encounter
            the power of God.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="text-center group p-8 rounded-3xl bg-white/70 hover:bg-white border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto shadow-primary-glow group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white stroke-[2.2]" />
                  </div>
                  {/* Subtle pulsing status dot */}
                  <div className="absolute -top-1 -right-1 left-1/2 translate-x-6 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                  </div>
                </div>

                <h3 className="text-2xl font-display font-semibold mb-4 text-dark group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-1 leading-relaxed text-base sm:text-lg">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
