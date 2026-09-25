"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  CalendarDays,
  Clock,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Star,
  Video,
  Laptop,
  Globe,
} from "lucide-react";

const WEEKS = [
  {
    week: "Week 1",
    title: "BWC Identity",
    description:
      "Understanding the vision, mission, kingdom mandate, and core identity that define Beyond Worship Center as a Christ-centred community.",
  },
  {
    week: "Week 2",
    title: "The Heart and Principles for Ministry Excellence",
    description:
      "Cultivating the heart of a servant-leader, divine stewardship, and mastering practical principles for excellence in ministry.",
  },
  {
    week: "Week 3",
    title: "Church Growth Strategies",
    description:
      "Kingdom-driven approaches to relational evangelism, effective discipleship, community impact, and sustainable church expansion.",
  },
  {
    week: "Week 4",
    title: "Worker Ethics and Code of Conduct",
    description:
      "Kingdom character, integrity in service, punctuality, ministry etiquette, confidentiality, and honouring leadership in all pursuits.",
  },
  {
    week: "Week 5",
    title: "Doctrines and Spiritual Foundation (Part 1)",
    description:
      "Foundational Christian doctrines, the revelation of God's unconditional grace, our righteousness in Christ, and New Covenant truths.",
  },
  {
    week: "Week 6",
    title: "Doctrines and Spiritual Foundation (Part 2)",
    description:
      "Deepening spiritual vitality through the Word, prayer, the empowering presence of the Holy Spirit, and walking in spiritual authority.",
  },
];

const BENEFITS = [
  "Structured 6-week online curriculum led by senior church leadership",
  "Bi-weekly live virtual classes: Tuesdays & Thursdays (6:30 PM – 8:00 PM)",
  "100% online format — join from anywhere with interactive participation",
  "Clear pathway and placement into your chosen Expression (department)",
  "Certificate of completion upon graduation",
  "Digital session materials, class notes, and leadership mentorship",
  "Formal commissioning and induction into the BWC active workforce",
  "Access to BWC workforce network, resources, and community",
];

export default function TrainingsPage() {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expression: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/workers.jpg"
            alt="BWC Intending Workers Training"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#212120]/92 via-[#212120]/72 to-[#212120]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#212120]/85 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-28">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary font-semibold text-xs tracking-widest uppercase mb-6">
            <Users className="w-4 h-4" />
            <span>Join the Workforce</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-5 leading-tight">
            BWC Intending Workers Training
          </h1>

          <p className="text-lg sm:text-xl text-white/85 font-light leading-relaxed max-w-2xl mx-auto mb-8">
            A six-week intensive programme designed to equip and deploy passionate
            believers into active service within the Beyond Worship Center family.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
              <CalendarDays className="w-4 h-4 text-secondary" />
              6 Weeks Intensive
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-secondary" />
              Tue & Thurs · 6:30 PM – 8:00 PM
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
              <Video className="w-4 h-4 text-secondary" />
              100% Online · Virtual Sessions
            </div>
          </div>
        </div>
      </section>

      {/* About the Programme */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-4">
                About the Programme
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark mb-6 leading-snug">
                Serving with Purpose,{" "}
                <span className="text-primary">Trained for Excellence</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The BWC Intending Workers Training (IWT) is a structured six-week
                discipleship and deployment programme for members who feel called
                to actively serve in the church. Whether you&apos;re drawn to
                worship, children&apos;s ministry, ushering, media, or any other
                Expression — this training is your first step.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                You&apos;ll be trained by experienced leaders, shaped in character,
                and formally commissioned into your assigned department at the end
                of the programme.
              </p>

              {/* Virtual Schedule Notice Callout */}
              <div className="mb-8 p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-dark mb-1">
                    Virtual Class Schedule & Access
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Classes take place every <strong>Tuesday and Thursday from 6:30 PM to 8:00 PM</strong> online.
                    This training is entirely virtual (not physical), allowing you to attend and participate live from anywhere.
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "6", label: "Weeks of Training", icon: <CalendarDays className="w-6 h-6" /> },
                { value: "Tue & Thu", label: "6:30 PM – 8:00 PM", icon: <Clock className="w-6 h-6" /> },
                { value: "100%", label: "Online & Interactive", icon: <Video className="w-6 h-6" /> },
                { value: "10+", label: "Expressions to Join", icon: <Users className="w-6 h-6" /> },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                    {s.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-dark mb-1">{s.value}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6-Week Curriculum */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-4">
              Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark mb-4">
              Your Six-Week Journey
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Each week builds on the last — from foundational kingdom principles
              to your formal commissioning into the BWC workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEEKS.map((w, i) => (
              <div
                key={w.week}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary text-white flex items-center justify-center font-display font-bold text-sm shadow-primary-glow/30 shadow-md">
                    {i + 1}
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                    {w.week}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {w.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-white" id="register">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-4">
                Register
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark mb-4">
                Sign Up for the Next Cohort
              </h2>
              <p className="text-gray-600">
                Fill in the form below to register for the upcoming cohort. Classes hold
                every <strong>Tuesday & Thursday from 6:30 PM to 8:00 PM online</strong> (virtual via video link).
              </p>
            </div>

            {registered ? (
              <div className="py-16 text-center space-y-4 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-display text-dark">
                  Registration Received!
                </h3>
                <p className="text-gray-600 max-w-sm mx-auto text-sm">
                  Thank you for signing up for the BWC Intending Workers Training.
                  Classes hold Tuesdays & Thursdays (6:30 PM - 8:00 PM online).
                  Our team will contact you shortly with your virtual meeting link.
                </p>
                <button
                  onClick={() => {
                    setRegistered(false);
                    setFormData({ name: "", email: "", phone: "", expression: "" });
                  }}
                  className="text-sm text-primary font-semibold hover:underline cursor-pointer mt-2"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-3xl border border-gray-100 p-8 sm:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-dark bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-dark bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-dark bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Preferred Expression
                    </label>
                    <select
                      value={formData.expression}
                      onChange={(e) => setFormData({ ...formData, expression: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-dark bg-white"
                    >
                      <option value="">Select department</option>
                      <option>Worship & Music</option>
                      <option>Children's Department</option>
                      <option>Protocol & Ushering</option>
                      <option>Media & Livestream</option>
                      <option>Pastoral Care</option>
                      <option>Choir</option>
                      <option>Creative Arts</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-white font-display font-semibold px-8 py-4 rounded-xl text-lg shadow-md hover:shadow-primary-glow transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
