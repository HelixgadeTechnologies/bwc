"use client";

import React, { useState } from "react";
import { X, CheckCircle, Clock, MapPin } from "lucide-react";

interface PlanVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PlanVisitModal({ isOpen, onClose }: PlanVisitModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "8:00 AM (First Service)",
    location: "112 Eliozu Airport Road Bypass, opposite Harritex Services, Eligbolo, Port Harcourt, Nigeria",
    guestsCount: "1",
    hasKids: false,
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-primary text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-xs uppercase tracking-widest text-secondary font-bold">Welcome Home</span>
          <h3 className="text-2xl font-display font-bold mt-1 text-white">Plan Your Visit</h3>
          <p className="text-white/90 text-sm mt-1">
            We are excited to host you this Sunday at Beyond Worship Center!
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-display text-dark">You&apos;re All Set!</h4>
              <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-dark">{formData.name}</strong>. Our guest experience
                team will be waiting to welcome you and your family at{" "}
                <span className="text-primary font-semibold">{formData.service}</span>.
              </p>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-left text-xs space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>112 Eliozu Airport Road Bypass, opposite Harritex Services, Eligbolo, Port Harcourt, Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{formData.service}</span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 px-8 py-3 bg-gradient-primary text-white font-semibold rounded-xl text-sm shadow-md hover:shadow-primary-glow transition-all cursor-pointer"
              >
                Close &amp; Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-dark"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-dark"
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
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-dark"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Select Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-dark bg-white"
                  >
                    <option>8:00 AM (First Service)</option>
                    <option>10:30 AM (Second Service)</option>
                    <option>Wednesday 6:00 PM (Midweek Koinonia)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Guests Attending
                  </label>
                  <select
                    value={formData.guestsCount}
                    onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-dark bg-white"
                  >
                    <option value="1">Just me (1)</option>
                    <option value="2">2 People</option>
                    <option value="3-5">Family / Group (3-5)</option>
                    <option value="6+">Large Group (6+)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="hasKids"
                  checked={formData.hasKids}
                  onChange={(e) => setFormData({ ...formData, hasKids: e.target.checked })}
                  className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer"
                />
                <label htmlFor="hasKids" className="text-xs text-gray-600 cursor-pointer">
                  I will be bringing children (BWC Kids Church available)
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-primary text-white font-display font-semibold rounded-xl text-base shadow-lg hover:shadow-primary-glow transition-all duration-300 cursor-pointer hover:scale-[1.01] active:scale-95"
                >
                  Confirm My Visit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
