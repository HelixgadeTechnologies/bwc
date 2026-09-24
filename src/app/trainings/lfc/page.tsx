"use client";

import React, { useState } from "react";
import { GraduationCap, Calendar, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export default function LFCPage() {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    mode: "In-Person (Beyond Worship Center, Port Harcourt)",
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#212120] to-[#121211] text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="container-max max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-xs tracking-widest uppercase mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>Spiritual Grounding</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight mb-4">
            BWC Foundation Class
          </h1>
          <p className="text-sm font-semibold tracking-wider text-emerald-400 uppercase mb-4">
            BFC 2026, STREAM IV
          </p>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Equipping believers with an unshakeable spiritual foundation, grounding new and growing Christians
            in the gospel of grace, salvation, and the new creation reality.
          </p>
        </div>
      </section>

      {/* Details & Registration */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Curriculum Breakdown */}
            <div className="card-elegant p-8 border border-gray-100 space-y-6">
              <h2 className="text-2xl font-bold font-display text-dark">Course Outline</h2>
              <div className="space-y-4 text-sm text-gray-700">
                <div className="p-3.5 rounded-xl bg-white border border-gray-100 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-dark">The Gospel of Grace &amp; Salvation</h4>
                    <p className="text-xs text-gray-500">Unveiling the finished work of Christ and eternal security.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-gray-100 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-dark">Righteousness Without Works</h4>
                    <p className="text-xs text-gray-500">Living free from guilt, shame, and religious performance.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-gray-100 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-dark">The Person and Gifts of the Holy Spirit</h4>
                    <p className="text-xs text-gray-500">Operating in spiritual authority and divine empowerment.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-gray-100 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold text-dark">Water Baptism &amp; The Church Family</h4>
                    <p className="text-xs text-gray-500">Flourishing in community and discovering your unique calling.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="card-elegant p-8 border border-gray-100">
              <h2 className="text-2xl font-bold font-display text-dark mb-4">Register for BWC Foundation Class</h2>
              {registered ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-dark">Registration Confirmed!</h3>
                  <p className="text-gray-600 text-sm">
                    Thank you, <strong className="text-dark">{formData.name}</strong>. You have been enrolled in
                    BFC Stream IV. Class schedules and access materials have been sent to your email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4 text-sm">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-dark outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-dark outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-dark outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Attendance Mode
                    </label>
                    <select
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-dark outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option>In-Person (Beyond Worship Center, Port Harcourt)</option>
                      <option>Online Classroom (Zoom / Interactive Portal)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-base shadow-md transition-all cursor-pointer hover:scale-[1.01] active:scale-95"
                  >
                    Submit Enrollment
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
