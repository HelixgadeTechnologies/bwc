"use client";

import React, { useState } from "react";
import { Heart, Copy, Check } from "lucide-react";
import { useShellModal } from "@/components/app-shell";

export default function GivePage() {
  const { openGiving } = useShellModal();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#212120] to-[#121211] text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="container-max max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary/20 text-primary-400 font-semibold text-xs tracking-widest uppercase mb-4">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Partnership &amp; Giving</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight mb-6">
            Hilarious Generosity
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-8">
            Your giving empowers the expansion of God&apos;s kingdom and takes the revelation of His unconditional
            grace to cities, campuses, and nations worldwide through Beyond Worship Center.
          </p>
          <button
            onClick={openGiving}
            className="px-10 py-4 bg-secondary text-dark font-display font-bold rounded-full text-lg shadow-xl hover:shadow-secondary-glow transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Open Giving Portal
          </button>
        </div>
      </section>

      {/* Nigerian Bank Accounts Grid */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Direct Transfer</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark mt-2">
              Church Bank Accounts
            </h2>
            <p className="text-gray-1 text-sm mt-2">
              Electronic wire and instant bank transfer accounts for Tithes, Offerings, and Building Projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account 1 */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-dark">Guaranty Trust Bank (GTBank)</h3>
                  <p className="text-xs text-gray-500 font-medium">Tithe &amp; General Offering</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">NGN (₦)</span>
              </div>
              <div className="text-xs text-gray-600">Account Name: Beyond Worship Center</div>
              <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-gray-200 font-mono text-lg font-bold text-dark">
                <span>0451234567</span>
                <button
                  onClick={() => handleCopy("0451234567", "gtb")}
                  className="text-xs text-primary font-sans flex items-center gap-1 hover:underline cursor-pointer"
                >
                  {copiedKey === "gtb" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKey === "gtb" ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Account 2 */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-dark">Zenith Bank Plc</h3>
                  <p className="text-xs text-gray-500 font-medium">Building &amp; Project Fund</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">NGN (₦)</span>
              </div>
              <div className="text-xs text-gray-600">Account Name: Beyond Worship Center Project</div>
              <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-gray-200 font-mono text-lg font-bold text-dark">
                <span>1019876543</span>
                <button
                  onClick={() => handleCopy("1019876543", "zenith")}
                  className="text-xs text-primary font-sans flex items-center gap-1 hover:underline cursor-pointer"
                >
                  {copiedKey === "zenith" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKey === "zenith" ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* USD Domiciliary */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-dark">GTBank USD Domiciliary</h3>
                  <p className="text-xs text-gray-500 font-medium">International Currency</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">USD ($)</span>
              </div>
              <div className="text-xs text-gray-600">Account Name: Beyond Worship Center USD</div>
              <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-gray-200 font-mono text-lg font-bold text-dark">
                <span>0451234588</span>
                <button
                  onClick={() => handleCopy("0451234588", "usd")}
                  className="text-xs text-primary font-sans flex items-center gap-1 hover:underline cursor-pointer"
                >
                  {copiedKey === "usd" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKey === "usd" ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* GBP Domiciliary */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-dark">GTBank GBP Domiciliary</h3>
                  <p className="text-xs text-gray-500 font-medium">International Currency</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">GBP (£)</span>
              </div>
              <div className="text-xs text-gray-600">Account Name: Beyond Worship Center GBP</div>
              <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-gray-200 font-mono text-lg font-bold text-dark">
                <span>0451234599</span>
                <button
                  onClick={() => handleCopy("0451234599", "gbp")}
                  className="text-xs text-primary font-sans flex items-center gap-1 hover:underline cursor-pointer"
                >
                  {copiedKey === "gbp" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKey === "gbp" ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
