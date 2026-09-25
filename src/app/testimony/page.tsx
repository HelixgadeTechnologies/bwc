"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Heart, Mic, Star, BookOpen, ArrowRight } from "lucide-react";

const REASONS = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Encourage Others",
    desc: "Your story of God's faithfulness ignites hope and faith in someone else who is still waiting for their miracle.",
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Glorify God",
    desc: "Testimonies are declarations of who God is. When you share, you magnify His name before the congregation.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Seal Your Victory",
    desc: "Revelation 12:11 — they overcame by the blood of the Lamb and the word of their testimony. Speak it out!",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Build Your Faith",
    desc: "Documenting what God has done reminds you of His faithfulness and anchors your trust in Him for the future.",
  },
];

export default function TestimonyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/testimony.JPG"
            alt="Share your testimony at Beyond Worship Centre"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#212120]/85 via-[#212120]/70 to-[#212120]/95" />
          <div className="absolute inset-0 bg-primary/10" />
        </div>

        {/* Animated glow orbs */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-24 right-16 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-24 left-16 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/20 border border-secondary/50 text-secondary font-semibold text-xs tracking-widest uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Mic className="w-4 h-4" />
            <span>Share Your Story</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 uppercase">
            HAVE YOU DOCUMENTED{" "}
            <span className="text-secondary">YOUR TESTIMONY?</span>
          </h1>

          {/* Sub message */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto mb-10 animate-in fade-in duration-700 uppercase tracking-wide">
            MAKE IT A HABIT TO ALWAYS SHARE WHAT GOD HAS DONE FOR YOU IN THE COURSE OF THE WEEK.
          </p>

          {/* CTA Button */}
          <a
            href="https://forms.gle/N1RpMPGMjuyixHwa9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary text-dark font-display font-bold text-lg px-10 py-5 rounded-full shadow-lg hover:shadow-secondary/50 hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <Mic className="w-5 h-5" />
            Share My Testimony
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs uppercase tracking-widest font-medium">Scroll to learn more</span>
            <div className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Share Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-4">
              Why It Matters
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark mb-4">
              Your Testimony is a{" "}
              <span className="text-primary">Weapon</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              &ldquo;And they overcame him by the blood of the Lamb and by the word of their testimony.&rdquo;
              <br />
              <span className="text-sm text-gray-400 mt-1 block">— Revelation 12:11</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REASONS.map((r) => (
              <div
                key={r.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {r.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-dark mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-4">
                How It Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark mb-4">
                Simple Steps to Share
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Reflect on Your Week",
                  desc: "Think about what God has done for you — a healing, a breakthrough, an answered prayer, a word that came alive, or a moment of grace.",
                },
                {
                  step: "02",
                  title: "Click the Link Below",
                  desc: "Use our Google Form to type out your testimony. It takes just a few minutes and you can do it from your phone.",
                },
                {
                  step: "03",
                  title: "Get Featured on Sunday",
                  desc: "Approved testimonies are shared during our Sunday service, giving you the platform to encourage the whole BWC family.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="flex items-start gap-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary text-white font-display font-bold text-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-dark mb-1">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="section-padding bg-[#212120] text-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container-max relative z-10 text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mic className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6 leading-tight">
            Don&apos;t Let Your Testimony{" "}
            <span className="text-secondary">Go Untold</span>
          </h2>
          <p className="text-lg text-white/75 font-light mb-10 max-w-xl mx-auto">
            Someone in the congregation needs to hear exactly what God did for you.
            Take a moment right now and document it.
          </p>
          <a
            href="https://forms.gle/N1RpMPGMjuyixHwa9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary text-dark font-display font-bold text-lg px-10 py-5 rounded-full shadow-lg hover:shadow-secondary/40 hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Submit Your Testimony
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-white/40 text-sm mt-6">
            Your response goes directly to our pastoral team for review.
          </p>
        </div>
      </section>
    </div>
  );
}
