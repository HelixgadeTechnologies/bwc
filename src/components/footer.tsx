"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Mail, CheckCircle } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#212120] text-white border-t border-white/10">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Church Info */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <BrandLogo />
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed">
              Beyond Worship Center (B.W.C) — A family of faith, worship, and supernatural living.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  112 Eliozu Airport Road Bypass, opposite Harritex Services, Eligbolo, Port Harcourt, Nigeria
                </span>
              </div>

              <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-gray-300">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@beyondworshipcenter.org"
                  className="hover:text-white transition-colors underline decoration-white/20"
                >
                  hello@beyondworshipcenter.org
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/expressions" className="text-gray-300 hover:text-white transition-colors">
                  Expressions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Times */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white tracking-wide">
              Service Times
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="font-semibold text-white">Sunday</p>
                <p className="text-xs text-secondary font-semibold mt-0.5">8:00 AM &amp; 10:30 AM</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="font-semibold text-white">Wednesday</p>
                <p className="text-xs text-secondary font-semibold mt-0.5">6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Column 4: Stay Connected & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white tracking-wide">
              Stay Connected
            </h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for weekly updates, teachings, and inspiration.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                className="font-display font-semibold transition-all duration-300 focus:outline-none inline-flex items-center justify-center gap-2 bg-gradient-primary text-white hover:shadow-primary-glow rounded-xl px-6 py-3 text-sm w-full cursor-pointer hover:scale-[1.02] active:scale-95 shadow-md"
              >
                {subscribed ? (
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle className="w-4 h-4" />
                    Subscribed!
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>

            {/* Social Media Links */}
            <div className="flex space-x-2 pt-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 hover:bg-primary transition-colors text-white"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 hover:bg-primary transition-colors text-white"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 hover:bg-primary transition-colors text-white"
                aria-label="X (Twitter)"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                </svg>
              </a>

              <a
                href="https://web.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 hover:bg-primary transition-colors text-white"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 hover:bg-primary transition-colors text-white"
                aria-label="Spotify"
              >
                <span className="text-xs font-bold">♫</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Beyond Worship Center. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
