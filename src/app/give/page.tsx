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
            Offerings and Commitments
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Account 1: Zenith Bank */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-dark">Zenith Bank</h3>
                  <p className="text-xs text-gray-500 font-medium">Tithe / Offering</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">NGN (₦)</span>
              </div>
              <div className="text-xs text-gray-600">Account Name: Beyond Worship Centre</div>
              <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-gray-200 font-mono text-lg font-bold text-dark">
                <span>1219464157</span>
                <button
                  onClick={() => handleCopy("1219464157", "zenith-tithe")}
                  className="text-xs text-primary font-sans flex items-center gap-1 hover:underline cursor-pointer"
                >
                  {copiedKey === "zenith-tithe" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKey === "zenith-tithe" ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Account 2: Premium Trust */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-dark">Premium Trust</h3>
                  <p className="text-xs text-gray-500 font-medium">Project Account</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">NGN (₦)</span>
              </div>
              <div className="text-xs text-gray-600">Account Name: BWC project</div>
              <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-gray-200 font-mono text-lg font-bold text-dark">
                <span>0040085128</span>
                <button
                  onClick={() => handleCopy("0040085128", "premium-project")}
                  className="text-xs text-primary font-sans flex items-center gap-1 hover:underline cursor-pointer"
                >
                  {copiedKey === "premium-project" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKey === "premium-project" ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Account 3: Globus Bank */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-dark">Globus Bank</h3>
                  <p className="text-xs text-gray-500 font-medium">Welfare Account</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">NGN (₦)</span>
              </div>
              <div className="text-xs text-gray-600">Account Name: Beyond Worship Centre</div>
              <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-gray-200 font-mono text-lg font-bold text-dark">
                <span>1000441923</span>
                <button
                  onClick={() => handleCopy("1000441923", "globes-welfare")}
                  className="text-xs text-primary font-sans flex items-center gap-1 hover:underline cursor-pointer"
                >
                  {copiedKey === "globes-welfare" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedKey === "globes-welfare" ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Global / Wire Notice */}
          <div className="mt-12 p-8 rounded-3xl bg-gray-50 border border-dashed border-gray-300 text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/30 text-dark font-bold text-xs uppercase tracking-wider">
              Coming Soon
            </span>
            <h3 className="font-display font-bold text-xl text-dark">International Wire &amp; Domiciliary Accounts</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Global and international wire transfer channels are coming soon. In the meantime, international partners and members can give via our online card giving portal.
            </p>
            <div className="pt-2">
              <button
                onClick={openGiving}
                className="px-6 py-2.5 rounded-full bg-gradient-primary text-white text-xs font-semibold hover:shadow-primary-glow transition-all cursor-pointer"
              >
                Give Online via Card
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
