"use client";

import React, { useState } from "react";
import { MapPin, Mail, Phone, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-[#212120] text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container-max max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-400 font-semibold text-xs tracking-widest uppercase mb-4">
            Connect With Us
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight mb-4">
            Contact &amp; Locations
          </h1>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Have questions, prayer requests, or want to connect with our pastoral team? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details & Map */}
            <div className="space-y-8">
              <div className="card-elegant p-8 border border-gray-100 space-y-6">
                <h2 className="text-2xl font-bold font-display text-dark">
                  Beyond Worship Center Headquarters
                </h2>

                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-dark block font-semibold">Port Harcourt Headquarters</strong>
                      <span>112 Eliozu Airport Road Bypass, opposite Harritex Services, Eligbolo, Port Harcourt, Nigeria</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="mailto:hello@beyondworshipcenter.org" className="text-primary hover:underline font-medium">
                      hello@beyondworshipcenter.org
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>+234 809 668 2229</span>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-dark block font-semibold">Service Hours</strong>
                      <p>Sunday Services: 8:00 AM &amp; 10:30 AM</p>
                      <p>Midweek Koinonia: Wednesday 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=112+Eliozu+Airport+Road+Bypass+opposite+Harritex+Services+Eligbolo+Port+Harcourt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center py-3 px-6 rounded-xl bg-gray-100 hover:bg-primary hover:text-white text-dark font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Message Form */}
            <div className="card-elegant p-8 border border-gray-100">
              <h2 className="text-2xl font-bold font-display text-dark mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-dark">Message Sent!</h3>
                  <p className="text-gray-600 text-sm max-w-sm mx-auto">
                    Thank you for reaching out to Beyond Worship Center. A member of our community team will respond to your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-dark outline-none focus:ring-2 focus:ring-primary"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-dark outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Prayer Request / Enquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-dark outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can we serve or pray with you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-dark outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-primary text-white font-semibold rounded-xl text-base shadow-md hover:shadow-primary-glow transition-all cursor-pointer hover:scale-[1.01] active:scale-95"
                  >
                    Send Message
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
