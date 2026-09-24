"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

export interface ChurchEvent {
  id: string;
  name: string;
  slug: string;
  badgeText?: string;
  badgeBg?: string;
  image?: string;
  date: string;
  time: string;
  location: string;
  description: string;
  href?: string;
  actionText?: string;
  disabledAction?: boolean;
}

const events: ChurchEvent[] = [
  {
    id: "lfc-2026",
    name: "BWC Foundation Class (BFC 2026, STREAM IV)",
    slug: "bwc-foundation-class-stream-iv",
    badgeText: "B",
    badgeBg: "#10B981",
    date: "Sep 21, 2026",
    time: "4:30 PM",
    location: "Beyond Worship Center (Port Harcourt)",
    description:
      "BWC Foundation Class equips believers with a solid spiritual foundation, grounding new and growing Christians in faith and truth.",
    href: "/trainings/lfc",
    actionText: "Learn More",
  },
  {
    id: "spc-2026",
    name: "Spirit & Power Conference 2026",
    slug: "spirit-and-power-conference-2026",
    badgeText: "S",
    badgeBg: "#F59E0B",
    date: "Sep 30, 2026",
    time: "4:00 PM",
    location: "Beyond Worship Center (Port Harcourt)",
    description:
      "Spirit & Power Conference 2026 — a time to be reminded of your supernatural identity in Christ and activated for His purposes.",
    href: "/events",
    actionText: "Learn More",
  },
  {
    id: "midweek-koinonia",
    name: "Midweek Koinonia",
    slug: "midweek-koinonia",
    image: "/images/midweek_koinonia.png",
    date: "Every Wednesday",
    time: "5:00 PM",
    location: "Beyond Worship Center (Port Harcourt)",
    description:
      "Midweek Koinonia is our family gathering featuring prayers, word, and interactive Questions & Answers.",
    href: "/events",
    actionText: "View Details",
  },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=112+Eliozu+Airport+Road+Bypass+opposite+Harritex+Services+Eligbolo+Port+Harcourt";

export function UpcomingEvents() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-6 py-2.5 bg-primary/10 text-primary font-semibold rounded-full text-sm tracking-wide">
              Join Us
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark mb-6 tracking-tight">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-1 max-w-2xl mx-auto font-light leading-relaxed">
            Join us for these upcoming gatherings, classes, and activities
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event) => (
            <div
              key={event.id}
              className="card-elegant overflow-hidden flex flex-col group border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-300"
            >
              {/* Card Banner / Image */}
              <div className="relative h-48 overflow-hidden flex-shrink-0 bg-gray-900">
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center text-white text-4xl font-bold font-display shadow-inner"
                    style={{ backgroundColor: event.badgeBg || "#077BAE" }}
                  >
                    {event.badgeText}
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors line-clamp-2">
                    {event.name}
                  </h3>

                  {/* Date, Time, Location details */}
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white bg-gray-500 hover:bg-primary px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Get directions
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-1 text-sm leading-relaxed mb-6 line-clamp-3">
                    {event.description}
                  </p>
                </div>

                {/* Card Button */}
                <div className="pt-2">
                  {event.href ? (
                    <Link
                      href={event.href}
                      className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide bg-transparent hover:bg-primary text-primary hover:text-white border-2 border-primary focus:ring-primary transform hover:scale-[1.02] active:scale-95 px-6 py-3 text-sm rounded-xl w-full text-center"
                    >
                      {event.actionText}
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="font-display font-semibold inline-flex items-center justify-center px-6 py-3 text-sm rounded-xl w-full text-center border-2 border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50"
                    >
                      {event.actionText || "No Details Available"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center">
          <Link
            href="/events"
            className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide bg-transparent hover:bg-primary text-primary hover:text-white border-2 border-primary focus:ring-primary transform hover:scale-105 active:scale-95 px-8 py-4 text-lg rounded-full shadow-sm hover:shadow-primary-glow"
          >
            <span>View All Events</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
