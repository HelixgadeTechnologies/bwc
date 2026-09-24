"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Search,
  ArrowUpRight,
  Clock,
  Phone,
  Mail,
  X,
  Copy,
  Check,
  Navigation,
  Sparkles,
  Radio,
} from "lucide-react";

export interface Branch {
  id: string;
  name: string;
  slug: string;
  city: string;
  region: string;
  country: string;
  category: "Nigeria" | "United Kingdom" | "United States" | "Africa" | "Europe" | "Online Global";
  isHQ?: boolean;
  address: string;
  services: string;
  detailedServices?: { day: string; time: string; note: string }[];
  phone: string;
  email: string;
  image: string;
  mapQuery?: string;
  onlineUrl?: string;
}

const BRANCHES: Branch[] = [
  {
    id: "ph-hq",
    name: "Beyond Worship Center HQ (Port Harcourt)",
    slug: "port-harcourt-hq",
    city: "Port Harcourt",
    region: "Rivers State",
    country: "Nigeria",
    category: "Nigeria",
    isHQ: true,
    address: "112 Eliozu Airport Road Bypass, opposite Harritex Services, Eligbolo, Port Harcourt, Nigeria",
    services: "Sunday 8:00 AM & 10:30 AM | Wednesday 6:00 PM",
    detailedServices: [
      { day: "Sunday", time: "8:00 AM", note: "First Glory Experience" },
      { day: "Sunday", time: "10:30 AM", note: "Second Glory Experience" },
      { day: "Wednesday", time: "6:00 PM", note: "Midweek Koinonia & Word Study" },
    ],
    phone: "+234 809 668 2229",
    email: "ph@beyondworshipcenter.org",
    image: "https://logicchurch-cms.s3.eu-west-2.amazonaws.com/Save_Clip_App_654017709_17937404316178617_949830048260340818_n_9cadb21a87.jpg",
    mapQuery: "112 Eliozu Airport Road Bypass, opposite Harritex Services, Eligbolo, Port Harcourt, Nigeria",
  },
  {
    id: "lagos-lekki",
    name: "Beyond Worship Center Lagos (Lekki)",
    slug: "lagos-lekki",
    city: "Lekki, Lagos",
    region: "Lagos State",
    country: "Nigeria",
    category: "Nigeria",
    address: "Block 115 T.F. Kuboye Road, By The Podium Event Centre, Marwa Bus Stop, Lekki Phase 1, Lagos State",
    services: "Sunday 9:00 AM | Wednesday 6:00 PM",
    detailedServices: [
      { day: "Sunday", time: "9:00 AM", note: "Sunday Worship & Communion" },
      { day: "Wednesday", time: "6:00 PM", note: "Midweek Believers Koinonia" },
    ],
    phone: "+234 809 668 2229",
    email: "lekki@beyondworshipcenter.org",
    image: "https://logicchurch-cms.s3.eu-west-2.amazonaws.com/IMGL_7730_e60f41b598.jpg",
    mapQuery: "Block 115 T.F. Kuboye Road, Lekki Phase 1, Lagos",
  },
  {
    id: "lagos-mainland",
    name: "Beyond Worship Center Lagos Mainland",
    slug: "lagos-mainland",
    city: "Lagos Mainland",
    region: "Lagos State",
    country: "Nigeria",
    category: "Nigeria",
    address: "Ikeja GRA / Maryland Centre, Lagos Mainland, Nigeria",
    services: "Sunday 9:00 AM | Wednesday 6:00 PM",
    detailedServices: [
      { day: "Sunday", time: "9:00 AM", note: "Mainland Celebration Service" },
      { day: "Wednesday", time: "6:00 PM", note: "Midweek Fellowship & Prayer" },
    ],
    phone: "+234 809 668 2229",
    email: "mainland@beyondworshipcenter.org",
    image: "https://logicchurch-cms.s3.eu-west-2.amazonaws.com/626263718_18043295783722646_1151342318886587165_n_1ed1c07f86.jpg",
    mapQuery: "Ikeja GRA, Lagos, Nigeria",
  },
  {
    id: "abuja",
    name: "Beyond Worship Center Abuja",
    slug: "abuja",
    city: "Abuja",
    region: "Federal Capital Territory",
    country: "Nigeria",
    category: "Nigeria",
    address: "Central Business District, Near National Mosque, Abuja, FCT, Nigeria",
    services: "Sunday 9:00 AM | Wednesday 6:00 PM",
    detailedServices: [
      { day: "Sunday", time: "9:00 AM", note: "Capital City Celebration" },
      { day: "Wednesday", time: "6:00 PM", note: "Midweek Spiritual Refreshing" },
    ],
    phone: "+234 809 668 2229",
    email: "abuja@beyondworshipcenter.org",
    image: "https://logicchurch-cms.s3.eu-west-2.amazonaws.com/IMG_20260309_WA_0036_bc6a52f5c0.jpg",
    mapQuery: "Central Business District, Abuja, Nigeria",
  },
  {
    id: "london-uk",
    name: "Beyond Worship Center UK (London)",
    slug: "london-uk",
    city: "London",
    region: "Greater London",
    country: "United Kingdom",
    category: "United Kingdom",
    address: "Central London Campus & European Expression, Westminster, London, United Kingdom",
    services: "Sunday 11:00 AM GMT",
    detailedServices: [
      { day: "Sunday", time: "11:00 AM GMT", note: "London Sunday Service" },
      { day: "Thursday", time: "7:00 PM GMT", note: "Online Gist & Intercession" },
    ],
    phone: "+44 20 7946 0991",
    email: "london@beyondworshipcenter.org",
    image: "https://logicchurch-cms.s3.eu-west-2.amazonaws.com/Save_Clip_App_642511286_17882249466376917_4888609595151372339_n_c728a4b256.jpg",
    mapQuery: "London, United Kingdom",
  },
  {
    id: "houston-usa",
    name: "Beyond Worship Center USA (Houston)",
    slug: "houston-usa",
    city: "Houston",
    region: "Texas",
    country: "United States",
    category: "United States",
    address: "Houston Campus & North America Fellowship, Houston, TX, United States",
    services: "Sunday 10:00 AM CST",
    detailedServices: [
      { day: "Sunday", time: "10:00 AM CST", note: "North America Worship Service" },
      { day: "Tuesday", time: "7:00 PM CST", note: "Bible Blueprint & Prayer" },
    ],
    phone: "+1 713 555 0199",
    email: "houston@beyondworshipcenter.org",
    image: "https://logicchurch-cms.s3.eu-west-2.amazonaws.com/IMGL_7730_e60f41b598.jpg",
    mapQuery: "Houston, Texas, USA",
  },
  {
    id: "ghana-accra",
    name: "Beyond Worship Center Ghana",
    slug: "ghana-accra",
    city: "Accra",
    region: "Greater Accra",
    country: "Ghana",
    category: "Africa",
    address: "East Legon / Airport Residential, Accra, Ghana",
    services: "Sunday 9:30 AM GMT",
    detailedServices: [
      { day: "Sunday", time: "9:30 AM GMT", note: "West Africa Celebration" },
      { day: "Wednesday", time: "6:30 PM GMT", note: "Midweek Fellowship" },
    ],
    phone: "+233 24 000 0000",
    email: "ghana@beyondworshipcenter.org",
    image: "https://logicchurch-cms.s3.eu-west-2.amazonaws.com/Chat_GPT_Image_Mar_21_2026_12_09_55_AM_fc0438ad9d.png",
    mapQuery: "East Legon, Accra, Ghana",
  },
  {
    id: "ireland-dublin",
    name: "Beyond Worship Center Ireland",
    slug: "ireland-dublin",
    city: "Dublin",
    region: "County Dublin",
    country: "Ireland",
    category: "Europe",
    address: "Dublin Expression & European Community, Dublin, Ireland",
    services: "Sunday 10:30 AM IST",
    detailedServices: [
      { day: "Sunday", time: "10:30 AM IST", note: "Sunday Worship Gathering" },
      { day: "Thursday", time: "7:30 PM IST", note: "Gist Centre & Discipleship" },
    ],
    phone: "+353 1 496 0000",
    email: "ireland@beyondworshipcenter.org",
    image: "https://logicchurch-cms.s3.eu-west-2.amazonaws.com/Screenshot_2026_03_01_at_19_01_53_ccd85541b5.png",
    mapQuery: "Dublin, Ireland",
  },
  {
    id: "online-global",
    name: "Beyond Worship Center Online (Global Campus)",
    slug: "online-global",
    city: "Online Global",
    region: "Worldwide",
    country: "Global",
    category: "Online Global",
    address: "Broadcasting live to 50+ nations across YouTube, Facebook, and BWC 24/7 Radio",
    services: "Sunday 8:00 AM & 10:30 AM (WAT) | Wednesday 6:00 PM (WAT)",
    detailedServices: [
      { day: "Sunday", time: "8:00 AM & 10:30 AM (WAT)", note: "Global Live Broadcast" },
      { day: "Wednesday", time: "6:00 PM (WAT)", note: "Midweek Global Stream" },
      { day: "Daily", time: "24/7", note: "BWC Live Internet Radio & Worship Stream" },
    ],
    phone: "+234 809 668 2229",
    email: "online@beyondworshipcenter.org",
    image: "/images/welcome-cover-2.png",
    onlineUrl: "/radio",
  },
];

const CATEGORIES = [
  "All",
  "Nigeria",
  "United Kingdom",
  "United States",
  "Africa",
  "Europe",
  "Online Global",
] as const;

export function BranchesClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredBranches = useMemo(() => {
    return BRANCHES.filter((b) => {
      const matchesCategory =
        activeCategory === "All" || b.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery =
        b.name.toLowerCase().includes(q) ||
        b.city.toLowerCase().includes(q) ||
        b.region.toLowerCase().includes(q) ||
        b.country.toLowerCase().includes(q) ||
        b.address.toLowerCase().includes(q) ||
        b.slug.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, activeCategory]);

  const handleCopyAddress = (branch: Branch) => {
    navigator.clipboard.writeText(branch.address);
    setCopiedId(branch.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <section className="relative overflow-hidden bg-gradient-primary text-white flex items-center pt-32 pb-16 md:pt-40 md:pb-24 min-h-[50vh]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container-max relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight leading-tight flex items-center justify-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center p-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
                <MapPin className="w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 text-white" />
              </span>
              <span>Our Branches</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
              Find a Beyond Worship Center location near you and join our global family of faith.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40 p-4 sm:p-5 space-y-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by church name, location, or slug..."
              className="w-full pl-12 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 text-sm sm:text-base placeholder-gray-400 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs sm:text-sm">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-primary text-white shadow-md shadow-primary/20 scale-102"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200/60 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900">
              All Campuses
            </h2>
            <p className="text-gray-600 mt-1.5 text-sm sm:text-base">
              {filteredBranches.length}{" "}
              {filteredBranches.length === 1 ? "location" : "locations"} found
              {activeCategory !== "All" && ` in ${activeCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>

          {(searchQuery || activeCategory !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="text-sm font-semibold text-primary hover:text-primary-700 transition-colors self-start sm:self-auto cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              onClick={() => setSelectedBranch(branch)}
              className="group outline-none cursor-pointer"
            >
              <div className="relative h-[25rem] w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-gray-900 border border-white/10 group-hover:-translate-y-2">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {branch.isHQ && (
                  <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-secondary text-dark text-xs font-bold tracking-wider uppercase shadow-xl flex items-center gap-1.5 border border-white/20">
                    <Sparkles className="w-3.5 h-3.5 fill-current text-dark" />
                    <span>HQ Campus</span>
                  </div>
                )}

                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 shadow-xl transition-all duration-500 delay-75 border border-white/30 text-white hover:bg-white/30 hover:scale-110">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary-400" />
                    <span className="text-white/85 font-semibold text-xs sm:text-sm tracking-widest uppercase">
                      {branch.city}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-md font-display leading-tight">
                    {branch.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mb-3 font-light">
                    {branch.address}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-xs text-primary-300 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{branch.services}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">
              Can&apos;t Find a Branch Near You?
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-light">
              Join our online community and worship with us from anywhere in the world. Experience the Beyond Worship Center family through our live streams, online gist centres, and digital gatherings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/radio"
                className="font-display font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 tracking-wide backdrop-blur-sm border border-white/30 transform hover:scale-105 active:scale-95 px-8 py-4 text-base sm:text-lg bg-white text-primary hover:bg-white/95 rounded-xl shadow-lg cursor-pointer"
              >
                <Radio className="w-5 h-5 text-primary" />
                Join Online
              </Link>
              <Link
                href="/contact"
                className="font-display font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 tracking-wide bg-transparent hover:text-white border-2 border-white transform hover:scale-105 active:scale-95 px-8 py-4 text-base sm:text-lg rounded-xl hover:bg-white/10 text-white cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {selectedBranch && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedBranch(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-xl w-full border border-gray-100 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 sm:h-64 w-full">
              <Image
                src={selectedBranch.image}
                alt={selectedBranch.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <button
                onClick={() => setSelectedBranch(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors cursor-pointer backdrop-blur-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/90 text-xs font-semibold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {selectedBranch.city}, {selectedBranch.country}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display drop-shadow-md">
                  {selectedBranch.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Physical Address
                  </span>
                  <p className="text-sm font-medium text-gray-800 leading-relaxed">
                    {selectedBranch.address}
                  </p>
                </div>
                <button
                  onClick={() => handleCopyAddress(selectedBranch)}
                  className="p-2 text-gray-500 hover:text-primary rounded-lg hover:bg-white transition-all border border-transparent hover:border-gray-200 cursor-pointer flex-shrink-0"
                  title="Copy Address"
                >
                  {copiedId === selectedBranch.id ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary" /> Service Schedules
                </span>
                <div className="space-y-2">
                  {selectedBranch.detailedServices?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-sm py-2 px-3 rounded-xl bg-gray-50 border border-gray-100"
                    >
                      <span className="font-semibold text-gray-900">{item.day} - {item.time}</span>
                      <span className="text-xs text-gray-500">{item.note}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <a
                  href={`tel:${selectedBranch.phone}`}
                  className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-700 hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="truncate">{selectedBranch.phone}</span>
                </a>
                <a
                  href={`mailto:${selectedBranch.email}`}
                  className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-700 hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="truncate">{selectedBranch.email}</span>
                </a>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                {selectedBranch.mapQuery ? (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      selectedBranch.mapQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-primary text-white font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md cursor-pointer"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions (Google Maps)
                  </a>
                ) : (
                  <Link
                    href={selectedBranch.onlineUrl || "/radio"}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-primary text-white font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md cursor-pointer"
                  >
                    <Radio className="w-4 h-4" />
                    Tune In Online
                  </Link>
                )}
                <button
                  onClick={() => setSelectedBranch(null)}
                  className="py-3 px-6 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
