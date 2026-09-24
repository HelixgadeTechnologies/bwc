"use client";

import React from "react";
import Link from "next/link";
import { Smartphone, ArrowRight } from "lucide-react";

export function LogicLoungeBanner() {
  return (
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
          <Link
            href="/bwc-lounge"
            className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full bg-primary px-6 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-primary-glow shadow-md md:self-auto"
          >
            <span>Explore the app</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
