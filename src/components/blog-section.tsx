"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";

export function BlogSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary/10 text-primary font-semibold rounded-full text-sm tracking-wide">
              <BookOpen className="w-4 h-4" />
              <span>Resources</span>
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark mb-6 tracking-tight">
            Latest from Our Blog
          </h2>

          <p className="text-xl text-gray-1 max-w-2xl mx-auto font-light leading-relaxed">
            Jesus Revealed. Grace Explained. Faith Strengthened.
          </p>
        </div>

        {/* Featured Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="card-elegant overflow-hidden group border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-300">
            <Link href="/blog/relate-restore-reign" className="block h-full">
              {/* Cover Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/love_life_impact.png"
                  alt="Cover image for RELATE. RESTORE. REIGN."
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold shadow-md">
                    Identity
                  </span>
                </div>
              </div>

              {/* Card Meta & Text */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>July 1, 2025</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                    <span>Pastor Udochukwu Nwanma</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors line-clamp-1">
                  RELATE. RESTORE. REIGN.
                </h3>

                <p className="text-gray-1 text-sm leading-relaxed line-clamp-3 mb-4">
                  How God&apos;s Grace Empowers Us to Relate in Love, Walk in Restoration, and Reign in Kingdom Purpose
                </p>

                <div className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:text-primary-700 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>

          {/* Secondary Mock Post 1: Grace & Faith */}
          <div className="card-elegant overflow-hidden group border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-300">
            <Link href="/blog" className="block h-full">
              <div className="relative h-56 overflow-hidden bg-gradient-to-tr from-dark to-primary/40 flex items-center justify-center p-6 text-center">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-widest text-white/80 font-bold">The Gospel of Grace</span>
                  <p className="text-xl font-bold font-display mt-2">Walking in Supernatural Victory</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold shadow-md">
                    Grace
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>June 15, 2025</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                    <span>BWC Media</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors line-clamp-1">
                  Living Out the New Creation Reality
                </h3>

                <p className="text-gray-1 text-sm leading-relaxed line-clamp-3 mb-4">
                  Understanding what Christ accomplished and stepping boldly into righteousness without condemnation.
                </p>

                <div className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:text-primary-700 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>

          {/* Secondary Mock Post 2: Worship & Family */}
          <div className="card-elegant overflow-hidden group border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-300">
            <Link href="/blog" className="block h-full">
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary-900 to-dark flex items-center justify-center p-6 text-center">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-widest text-white/80 font-bold">Culture</span>
                  <p className="text-xl font-bold font-display mt-2">Authentic Worship in Spirit and Truth</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold shadow-md">
                    Worship
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>May 28, 2025</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                    <span>Beyond Worship</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors line-clamp-1">
                  The Power of Heartfelt Worship
                </h3>

                <p className="text-gray-1 text-sm leading-relaxed line-clamp-3 mb-4">
                  How entering His presence with thanksgiving dismantles anxieties and activates divine peace.
                </p>

                <div className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:text-primary-700 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Explore Blog Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide bg-transparent hover:bg-primary text-primary hover:text-white border-2 border-primary focus:ring-primary transform hover:scale-105 active:scale-95 px-8 py-4 text-lg rounded-full shadow-sm hover:shadow-primary-glow"
          >
            <span>Explore the Blog</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
