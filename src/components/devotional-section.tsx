"use client";

import React from "react";
import { BookOpenCheck, ExternalLink } from "lucide-react";

export function DevotionalSection() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary/10 text-primary font-semibold rounded-full text-sm tracking-wide">
              <BookOpenCheck className="w-4 h-4" />
              <span>Daily Growth</span>
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark mb-6 tracking-tight">
            Join Our Devotional Plan
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-1 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Grow deeper in your faith with our church community through daily Bible reading plans on YouVersion
          </p>

          {/* Button CTA */}
          <div>
            <a
              href="https://www.bible.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide bg-gradient-primary text-white hover:shadow-primary-glow focus:ring-primary transform hover:scale-105 active:scale-95 px-10 py-5 text-xl rounded-full shadow-lg"
            >
              <span>Follow on YouVersion</span>
              <ExternalLink className="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
