"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Search,
  ArrowUpRight,
  Clock,
  Phone,
  Mail,
  X,
  Check,
  Heart,
  Users,
  Music,
  ShieldCheck,
  BookOpen,
  Car,
  Brush,
  Baby,
  Smile,
  Stethoscope,
  Send,
} from "lucide-react";

export interface DepartmentExpression {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  image: string;
  description: string;
  responsibilities: string[];
  schedule: string;
  leadContact?: string;
  iconName: string;
}

const EXPRESSIONS: DepartmentExpression[] = [
  {
    id: "living-stones",
    name: "Living Stones",
    slug: "living-stones",
    category: "Protocol & Pastoral Care",
    tagline: "Honour, Dignity, and Pastoral Care",
    image: "/images/expression/Livingstones.jpg",
    description:
      "Living Stones is the church protocol and pastoral care department of Beyond Worship Centre. Dedicated to caring for our Lead Pastors, receiving visiting ministers with utmost dignity, and providing executive ministerial support to ensure sacred order and honor in God's house.",
    responsibilities: [
      "Pastoral care, welfare, and executive support for the Lead Pastors",
      "VIP and visiting guest minister protocol and reception",
      "Sanctuary stage, pulpit, and altar reverence coordination",
      "Executive logistics during conferences and apostolic meetings",
    ],
    schedule: "Saturdays 5:00 PM & Sunday Pre-service Briefing",
    iconName: "ShieldCheck",
  },
  {
    id: "souled-out",
    name: "Souled Out",
    slug: "souled-out",
    category: "Music & Choir",
    tagline: "Living Beyond the Veil Through Sound and Worship",
    image: "/images/expression/souled%20out.jpg",
    description:
      "Souled Out is the dynamic Church Choir and Music Ministry of Beyond Worship Centre. Anointed vocalists, worship leaders, and skilled musicians who cultivate the sound of heavenly worship, leading worshippers beyond the veil into deep intimacy with the Father.",
    responsibilities: [
      "Leading praise and deep congregational worship in all services",
      "Vocal coaching, harmonic blending, and choral excellence",
      "Instrumental accompaniment and musicianship",
      "Creative music production, songwriting, and concert ministrations",
    ],
    schedule: "Thursdays 6:00 PM & Saturdays 4:00 PM Rehearsals",
    iconName: "Music",
  },
  {
    id: "attendants",
    name: "Attendants",
    slug: "attendants",
    category: "Sanctuary & Ushering",
    tagline: "Serving with Honour, Order in the Sanctuary",
    image: "/images/expression/Attendents.jpg",
    description:
      "The Attendants department constitutes the sanctuary ushers who maintain order, facilitate smooth congregation movement, welcome worshippers, and ensure every service proceeds in divine peace, reverence, and harmony.",
    responsibilities: [
      "Sanctuary ushering, seating coordination, and aisle order",
      "Collecting tithes, offerings, and sacrificial seeds reverently",
      "Distributing service bulletins, communion elements, and materials",
      "Assisting attendees and managing crowd flow with grace",
    ],
    schedule: "Sundays 7:00 AM Call Time & Wednesdays 5:00 PM",
    iconName: "Users",
  },
  {
    id: "heirs",
    name: "Heirs",
    slug: "heirs",
    category: "Children Department",
    tagline: "Raising Kingdom Champions, Rooted in Grace",
    image: "/images/expression/heirs.jpg",
    description:
      "Heirs is the Children's Department of Beyond Worship Centre. We provide a fun, safe, loving, and spirit-filled sanctuary where kids discover their royal identity in Christ, learn the scriptures through creative arts, and grow in grace.",
    responsibilities: [
      "Creative Bible storytelling, interactive lessons, and memory verses",
      "Children's worship, dance, drama, and fun kingdom activities",
      "Child safety, check-in registration, and loving care",
      "Parental engagement and discipleship for the next generation",
    ],
    schedule: "Sundays 7:30 AM (during both Sunday services)",
    iconName: "Baby",
  },
  {
    id: "gleamers",
    name: "Gleamers",
    slug: "gleamers",
    category: "Sanctuary Care & Environment",
    tagline: "Excellence in God's House, A Spotless Sanctuary",
    image: "/images/expression/gleamers.jpg",
    description:
      "Gleamers take loving care of the church sanctuary and premises. They clean, sanitize, polish, and arrange the auditorium, altars, and church environment to maintain a pristine, fragrant, and heavenly atmosphere worthy of God's presence.",
    responsibilities: [
      "Sanctuary cleaning, sanitization, and ambient beautification",
      "Arranging chairs, platforms, and facilities for seamless services",
      "Post-service cleaning and auditorium readiness",
      "Environmental aesthetics and upkeep of God's house",
    ],
    schedule: "Saturdays 8:00 AM & Post-service touch-ups",
    iconName: "Brush",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    slug: "hospitality",
    category: "Guest & Member Care",
    tagline: "A Heart of Love, Making Everyone Feel at Home",
    image: "/images/expression/hospitality.jpg",
    description:
      "The Hospitality expression embodies the warm, compassionate heart of Christ. Dedicated to welcoming first-time visitors, managing the reception lounge, providing refreshments, and helping new members feel genuinely loved, valued, and integrated.",
    responsibilities: [
      "Hosting first-time guests at the reception lounge after service",
      "Serving refreshments, snacks, and celebratory hospitality packs",
      "New member assimilation, warm calls, and follow-up care",
      "Special event catering, banquets, and celebration hosting",
    ],
    schedule: "Sundays Post-Service & Special Church Events",
    iconName: "Smile",
  },
  {
    id: "parking-wheels",
    name: "Parking Wheels",
    slug: "parking-wheels",
    category: "Logistics & Traffic",
    tagline: "Seamless Movement, Safety for All",
    image: "/images/expression/ParkingWheels.jpg",
    description:
      "Parking Wheels oversees traffic control, vehicular movement, parking arrangements, and perimeter safety. They ensure that every worshipper enters, parks, and exits church grounds seamlessly, securely, and peacefully.",
    responsibilities: [
      "Traffic control and vehicular coordination along church bypass",
      "Orderly parking bay allocation and ease of transit",
      "Perimeter vehicular security and surveillance assistance",
      "Ensuring road safety for pedestrians, families, and visitors",
    ],
    schedule: "Sundays 7:00 AM - 1:00 PM & Major Night Events",
    iconName: "Car",
  },
  {
    id: "the-scrybe",
    name: "The Scrybe",
    slug: "the-scrybe",
    category: "Media & Editorial",
    tagline: "Pen of a Ready Writer, Chronicling God's Grace",
    image: "/images/expression/Scrybe.jpg",
    description:
      "The Scrybe is the literary, media, and editorial expression of Beyond Worship Centre. They record sermons, write daily devotionals, document prophetic chronicles and testimonies, and author compelling content across church publications and online media.",
    responsibilities: [
      "Accurate sermon transcription and message highlight synthesis",
      "Editorial writing for blog articles, study guides, and books",
      "Chronicling testimonies, miracles, and church milestone records",
      "Creating text captions and creative written copy for social channels",
    ],
    schedule: "Weekly Editorial Meetings & Remote Collaborative Work",
    iconName: "BookOpen",
  },
  {
    id: "medical",
    name: "Medical Team",
    slug: "medical-team",
    category: "Healthcare & Emergency",
    tagline: "Healing Hands, Caring for God's People",
    image: "/images/expression/medical.jpg",
    description:
      "Composed of certified healthcare practitioners, nurses, doctors, and trained first aiders, the Medical Team provides immediate health interventions, first aid support, and compassionate emergency care during all services and community outreaches.",
    responsibilities: [
      "Emergency medical response and first aid during church services",
      "Vital signs screening and health advisory for congregation members",
      "Managing the church clinic and medical recovery room",
      "Organizing periodic community health outreaches and medical fairs",
    ],
    schedule: "On-call during all Sunday, Midweek, and Special Gatherings",
    iconName: "Stethoscope",
  },
];

const CATEGORIES = [
  "All",
  "Music & Choir",
  "Protocol & Pastoral Care",
  "Sanctuary & Ushering",
  "Children Department",
  "Sanctuary Care & Environment",
  "Guest & Member Care",
  "Logistics & Traffic",
  "Media & Editorial",
  "Healthcare & Emergency",
] as const;

export function ExpressionsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedExpression, setSelectedExpression] = useState<DepartmentExpression | null>(null);

  // Volunteer form state
  const [volunteerName, setVolunteerName] = useState("");
  const [volunteerPhone, setVolunteerPhone] = useState("");
  const [volunteerEmail, setVolunteerEmail] = useState("");
  const [volunteerNote, setVolunteerNote] = useState("");
  const [submittedDept, setSubmittedDept] = useState<string | null>(null);

  const filteredExpressions = useMemo(() => {
    return EXPRESSIONS.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery =
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, activeCategory]);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerName || !volunteerPhone) return;
    setSubmittedDept(selectedExpression?.name || "this department");
    setTimeout(() => {
      setVolunteerName("");
      setVolunteerPhone("");
      setVolunteerEmail("");
      setVolunteerNote("");
    }, 500);
  };

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case "Music":
        return <Music className="w-4 h-4 text-primary-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-primary-400" />;
      case "Users":
        return <Users className="w-4 h-4 text-primary-400" />;
      case "Baby":
        return <Baby className="w-4 h-4 text-primary-400" />;
      case "Brush":
        return <Brush className="w-4 h-4 text-primary-400" />;
      case "Smile":
        return <Smile className="w-4 h-4 text-primary-400" />;
      case "Car":
        return <Car className="w-4 h-4 text-primary-400" />;
      case "BookOpen":
        return <BookOpen className="w-4 h-4 text-primary-400" />;
      case "Stethoscope":
        return <Stethoscope className="w-4 h-4 text-primary-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-primary-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* 1. Hero Section (Modeled after target site) */}
      <section className="relative overflow-hidden bg-gradient-primary text-white flex items-center pt-32 pb-16 md:pt-40 md:pb-24 min-h-[50vh]">
        {/* Ambient Radial Background Glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container-max relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight leading-tight flex items-center justify-center gap-3 sm:gap-4">
              <span className="inline-flex items-center justify-center p-2.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
                <Sparkles className="w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 text-white" />
              </span>
              <span>Our Expressions</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
              Discover the ministry departments and service expressions of Beyond Worship Centre. Find your place to serve, grow in grace, and impact lives.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Floating Search & Filter Bar (-mt-8 overlapping hero) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40 p-4 sm:p-5 space-y-4">
          {/* Search Input Box */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by department name, category, or role..."
              className="w-full pl-12 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 text-sm sm:text-base placeholder-gray-400 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
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

      {/* 3. Expressions Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200/60 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900">
              Ministry Departments
            </h2>
            <p className="text-gray-600 mt-1.5 text-sm sm:text-base">
              {filteredExpressions.length}{" "}
              {filteredExpressions.length === 1 ? "expression" : "expressions"} found
              {activeCategory !== "All" && ` under ${activeCategory}`}
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

        {/* Empty State */}
        {filteredExpressions.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 shadow-sm p-8 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
              No expressions found
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              We couldn&apos;t find any department matching your search. Try resetting your filters to explore all expressions!
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="px-6 py-2.5 bg-gradient-primary text-white font-medium text-sm rounded-xl shadow hover:scale-105 transition-all cursor-pointer"
            >
              View All Expressions
            </button>
          </div>
        )}

        {/* Grid Cards (1:1 styling with the target site) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExpressions.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedExpression(item);
                setSubmittedDept(null);
              }}
              className="group outline-none cursor-pointer"
            >
              <div className="relative h-[25rem] w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-gray-900 border border-white/10 group-hover:-translate-y-2">
                {/* Background Image with Hover Zoom */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Top Right External Arrow Circle Pill (Reveals on hover) */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 shadow-xl transition-all duration-500 delay-75 border border-white/30 text-white hover:bg-white/30 hover:scale-110">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                {/* Bottom Content Card Details */}
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 mb-2">
                    {getCategoryIcon(item.iconName)}
                    <span className="text-white/85 font-semibold text-xs sm:text-sm tracking-widest uppercase">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-md font-display leading-tight">
                    {item.name}
                  </h3>

                  {/* Tagline / Brief Description */}
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mb-3.5 font-light">
                    {item.tagline}
                  </p>

                  {/* Schedule badge */}
                  <div className="inline-flex items-center gap-1.5 text-xs text-primary-300 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{item.schedule}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Ready to Serve? (1:1 CTA with target site) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Ambient Glow Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display">
              Ready to Find Your Place to Serve?
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-light">
              Every believer is blessed with spiritual gifts and talents to enrich the body of Christ. Step into purpose and partner with us in advancing the kingdom of God at Beyond Worship Centre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  if (EXPRESSIONS.length > 0) {
                    setSelectedExpression(EXPRESSIONS[0]);
                    setSubmittedDept(null);
                  }
                }}
                className="font-display font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 tracking-wide backdrop-blur-sm border border-white/30 transform hover:scale-105 active:scale-95 px-8 py-4 text-base sm:text-lg bg-white text-primary hover:bg-white/95 rounded-xl shadow-lg cursor-pointer"
              >
                <Heart className="w-5 h-5 text-primary fill-current" />
                Join an Expression
              </button>
              <Link
                href="/contact"
                className="font-display font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 tracking-wide bg-transparent hover:text-white border-2 border-white transform hover:scale-105 active:scale-95 px-8 py-4 text-base sm:text-lg rounded-xl hover:bg-white/10 text-white cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                Contact Ministry Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Detailed Expression & Volunteer Sign-Up Modal */}
      {selectedExpression && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => {
            setSelectedExpression(null);
            setSubmittedDept(null);
          }}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-gray-100 relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-60 sm:h-72 w-full flex-shrink-0">
              <Image
                src={selectedExpression.image}
                alt={selectedExpression.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              <button
                onClick={() => {
                  setSelectedExpression(null);
                  setSubmittedDept(null);
                }}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors cursor-pointer backdrop-blur-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider mb-2">
                  {getCategoryIcon(selectedExpression.iconName)}
                  <span>{selectedExpression.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display drop-shadow-md">
                  {selectedExpression.name}
                </h3>
                <p className="text-sm text-gray-200 font-light mt-0.5">
                  {selectedExpression.tagline}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  About This Expression
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {selectedExpression.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Key Areas of Service
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedExpression.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs sm:text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meeting Schedule */}
              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Rehearsal / Service Schedule
                  </span>
                  <p className="text-sm font-semibold text-gray-900 mt-0.5">
                    {selectedExpression.schedule}
                  </p>
                </div>
              </div>

              {/* Volunteer Interest Form */}
              <div className="border-t border-gray-200/70 pt-6">
                <h4 className="text-base font-bold font-display text-gray-900 mb-1 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary fill-current" />
                  Volunteer for {selectedExpression.name}
                </h4>
                <p className="text-xs text-gray-500 mb-4">
                  Fill out the quick form below, and the {selectedExpression.name} department coordinator will reach out to you!
                </p>

                {submittedDept === selectedExpression.name ? (
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2 animate-in fade-in duration-200">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <h5 className="font-bold font-display text-base">Request Received!</h5>
                    <p className="text-xs text-emerald-700">
                      Thank you for your heart to serve in <strong>{selectedExpression.name}</strong>. Our ministry leadership will get in touch with you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleVolunteerSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={volunteerName}
                          onChange={(e) => setVolunteerName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={volunteerPhone}
                          onChange={(e) => setVolunteerPhone(e.target.value)}
                          placeholder="+234..."
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={volunteerEmail}
                        onChange={(e) => setVolunteerEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Any relevant experience or notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={volunteerNote}
                        onChange={(e) => setVolunteerNote(e.target.value)}
                        placeholder="Tell us briefly about your interest or skills..."
                        className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        className="flex-1 py-3 px-4 rounded-xl bg-gradient-primary text-white font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Submit Volunteer Request
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedExpression(null)}
                        className="py-3 px-5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
