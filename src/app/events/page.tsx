import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Events | Beyond Worship Center",
  description:
    "Explore upcoming gatherings, worship services, conferences, and training sessions at Beyond Worship Center.",
};

const allEvents = [
  {
    id: "lfc-2026",
    name: "BWC Foundation Class (BFC 2026, STREAM IV)",
    category: "Training",
    badgeColor: "#10B981",
    date: "Sep 21, 2026",
    time: "4:30 PM",
    location: "Beyond Worship Center (Port Harcourt)",
    description:
      "BWC Foundation Class equips believers with a solid spiritual foundation, grounding new and growing Christians in faith and truth.",
    href: "/trainings/lfc",
    action: "Register Now",
  },
  {
    id: "spc-2026",
    name: "Spirit & Power Conference 2026",
    category: "Conference",
    badgeColor: "#F59E0B",
    date: "Sep 30 - Oct 4, 2026",
    time: "4:00 PM Daily",
    location: "Beyond Worship Center (Port Harcourt)",
    description:
      "Spirit & Power Conference 2026 — a time to be reminded of your supernatural identity in Christ and activated for His purposes.",
    href: "#",
    action: "Conference Details",
  },
  {
    id: "midweek-koinonia",
    name: "Midweek Service",
    category: "Midweek Fellowship",
    image: "/images/midweek_koinonia.png",
    date: "Every Wednesday",
    time: "5:00 PM",
    location: "Beyond Worship Center (Port Harcourt)",
    description:
      "Midweek Service is our family gathering featuring prayers, word, and interactive Questions & Answers.",
    href: "#",
    action: "Join Service",
  },
  {
    id: "sunday-celebration",
    name: "Sunday Celebration Service",
    category: "Worship Service",
    badgeColor: "#077BAE",
    date: "Every Sunday",
    time: "8:00 AM & 10:30 AM",
    location: "Beyond Worship Center (Port Harcourt)",
    description:
      "Experience high-energy worship, revelation teachings, and the love of God in a vibrant fellowship atmosphere.",
    href: "/contact",
    action: "Plan Your Visit",
  },
];

export default function EventsPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-[#212120] text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container-max max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-400 font-semibold text-xs tracking-widest uppercase mb-4">
            Gatherings &amp; Fellowships
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight mb-4">
            Church Events
          </h1>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Stay plugged into what God is doing at Beyond Worship Center across our campuses and online streams.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allEvents.map((event) => (
              <div
                key={event.id}
                className="card-elegant overflow-hidden flex flex-col justify-between border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-300"
              >
                {event.image ? (
                  <div className="relative h-56 bg-dark">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    className="h-32 flex items-center justify-between px-6 text-white"
                    style={{ backgroundColor: event.badgeColor || "#212120" }}
                  >
                    <div>
                      <span className="text-xs uppercase tracking-widest opacity-80 font-bold">
                        {event.category}
                      </span>
                      <h3 className="text-xl font-bold font-display mt-1">{event.name}</h3>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-gray-1 text-sm pt-2 leading-relaxed">{event.description}</p>
                  </div>

                  <Link
                    href={event.href}
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm bg-gradient-primary text-white hover:shadow-primary-glow transition-all"
                  >
                    <span>{event.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
