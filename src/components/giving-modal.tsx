"use client";

import React, { useState } from "react";
import { X, Heart, Copy, Check, CreditCard, Building2, Globe, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface GivingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GivingModal({ isOpen, onClose }: GivingModalProps) {
  const [activeTab, setActiveTab] = useState<"card" | "transfer" | "intl">("transfer");
  const [currency, setCurrency] = useState("NGN");
  const [givingType, setGivingType] = useState("Offering");
  const [amount, setAmount] = useState("10000");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#077BAE", "#FFCC2B", "#10B981", "#212120"],
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleReset = () => {
    setSuccess(false);
    onClose();
  };

  const quickAmounts = ["5000", "10000", "25000", "50000", "100000"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-primary text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 fill-current text-secondary" />
            <span className="text-xs uppercase tracking-widest text-secondary font-bold">Offerings and Commitments</span>
          </div>
          <h3 className="text-2xl font-display font-bold mt-1 text-white">Give to Beyond Worship Centre</h3>
          <p className="text-white/90 text-sm mt-1">
            &ldquo;Each of you should give what you have decided in your heart to give... for God loves a cheerful giver.&rdquo;
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-gray-100 text-xs sm:text-sm font-semibold text-gray-600 bg-gray-50/60">
          <button
            onClick={() => setActiveTab("transfer")}
            className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 border-b-2 transition-all cursor-pointer ${
              activeTab === "transfer"
                ? "border-primary text-primary bg-white"
                : "border-transparent hover:text-dark"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Bank Transfer</span>
          </button>
          <button
            onClick={() => setActiveTab("card")}
            className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 border-b-2 transition-all cursor-pointer ${
              activeTab === "card"
                ? "border-primary text-primary bg-white"
                : "border-transparent hover:text-dark"
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Card / Online</span>
            <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
              Coming Soon
            </span>
          </button>
          <button
            onClick={() => setActiveTab("intl")}
            className={`flex-1 py-3 px-2 flex items-center justify-center gap-1.5 border-b-2 transition-all cursor-pointer ${
              activeTab === "intl"
                ? "border-primary text-primary bg-white"
                : "border-transparent hover:text-dark"
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Global / Wire</span>
            <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
              Coming Soon
            </span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto">
          {success ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-display text-dark">Thank You for Your Generosity!</h4>
              <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                Your partnership empowers Beyond Worship Centre to take the gospel of grace and the love of God
                to communities across the world. May God multiply your seed sown!
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-8 py-3 bg-gradient-primary text-white font-semibold rounded-xl text-sm shadow-md hover:shadow-primary-glow transition-all cursor-pointer"
              >
                Close &amp; Return
              </button>
            </div>
          ) : (
            <>
              {/* TAB 1: BANK TRANSFER (NIGERIA) */}
              {activeTab === "transfer" && (
                <div className="space-y-4 text-sm">
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Make a direct bank deposit or electronic funds transfer to Beyond Worship Centre church accounts:
                  </p>

                  {/* Account 1: Zenith Bank */}
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-dark text-sm">Zenith Bank</span>
                      <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded">
                        Tithe / Offering
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">Account Name: Beyond Worship Centre</div>
                    <div className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-gray-200 font-mono text-base font-bold text-dark">
                      <span>1219464157</span>
                      <button
                        type="button"
                        onClick={() => handleCopy("1219464157", "zenith-tithe")}
                        className="text-xs text-primary font-sans flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        {copiedKey === "zenith-tithe" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedKey === "zenith-tithe" ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Account 2: Premium Trust */}
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-dark text-sm">Premium Trust</span>
                      <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded">
                        Project Account
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">Account Name: BWC project</div>
                    <div className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-gray-200 font-mono text-base font-bold text-dark">
                      <span>0040085128</span>
                      <button
                        type="button"
                        onClick={() => handleCopy("0040085128", "premium-project")}
                        className="text-xs text-primary font-sans flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        {copiedKey === "premium-project" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedKey === "premium-project" ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Account 3: Globus Bank */}
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-dark text-sm">Globus Bank</span>
                      <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded">
                        Welfare Account
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">Account Name: Beyond Worship Centre</div>
                    <div className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-gray-200 font-mono text-base font-bold text-dark">
                      <span>1000441923</span>
                      <button
                        type="button"
                        onClick={() => handleCopy("1000441923", "globes-welfare")}
                        className="text-xs text-primary font-sans flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        {copiedKey === "globes-welfare" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedKey === "globes-welfare" ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-500 italic text-center pt-2">
                    Please use your name and giving type (e.g. &ldquo;John Doe - Tithe&rdquo;) as the payment narrative.
                  </p>
                </div>
              )}

              {/* TAB 2: CARD / ONLINE */}
              {activeTab === "card" && (
                <form onSubmit={handlePay} className="space-y-4 text-sm">
                  {/* Coming Soon Notification Banner */}
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700 shrink-0 mt-0.5">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div className="text-xs space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-amber-900 text-sm">Card / Online Giving Coming Soon</span>
                        <span className="text-[10px] bg-amber-200/80 text-amber-900 font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                          Notice
                        </span>
                      </div>
                      <p className="text-amber-800 leading-relaxed text-xs">
                        Our online card payment processor is currently being integrated and will be live shortly. For immediate donations and commitments, kindly use the{" "}
                        <button
                          type="button"
                          onClick={() => setActiveTab("transfer")}
                          className="font-bold text-primary underline hover:text-primary-700 cursor-pointer"
                        >
                          Bank Transfer
                        </button>{" "}
                        option.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Currency
                      </label>
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white text-dark font-medium"
                      >
                        <option value="NGN">NGN (₦)</option>
                        <option value="USD">USD ($)</option>
                        <option value="GBP">GBP (£)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="CAD">CAD ($)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Purpose
                      </label>
                      <select
                        value={givingType}
                        onChange={(e) => setGivingType(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white text-dark font-medium"
                      >
                        <option value="Tithe">Tithe</option>
                        <option value="Offering">Offering</option>
                        <option value="Building">Building &amp; Expansion</option>
                        <option value="Partnership">Global Partnership</option>
                        <option value="Special">Special Seed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Amount ({currency})
                    </label>
                    <input
                      type="number"
                      required
                      min="100"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-lg font-bold text-dark focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    />

                    {/* Quick Amount Pills */}
                    {currency === "NGN" && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {quickAmounts.map((q) => (
                          <button
                            type="button"
                            key={q}
                            onClick={() => setAmount(q)}
                            className={`px-2.5 py-1 text-xs rounded-lg border font-medium transition-all cursor-pointer ${
                              amount === q
                                ? "bg-primary text-white border-primary"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200"
                            }`}
                          >
                            ₦{Number(q).toLocaleString()}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samuel Ade"
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-dark text-sm focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Email for Receipt
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 text-dark text-sm focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-secondary text-dark font-display font-bold rounded-xl text-base shadow-lg hover:shadow-secondary-glow transition-all duration-300 cursor-pointer hover:scale-[1.01] active:scale-95"
                    >
                      Proceed to Give {currency === "NGN" ? "₦" : currency} {Number(amount).toLocaleString()}
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 3: INTERNATIONAL WIRE */}
              {activeTab === "intl" && (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary/30 text-dark font-bold text-xs uppercase tracking-wider">
                    Coming Soon
                  </div>
                  <h4 className="text-xl font-bold font-display text-dark">
                    Global / Wire Transfers
                  </h4>
                  <p className="text-gray-600 text-sm max-w-sm mx-auto leading-relaxed">
                    Our international domiciliary and global wire transfer channels are coming soon.
                    In the meantime, kindly give using our local <strong>Bank Transfer</strong> accounts.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab("transfer")}
                      className="px-6 py-2.5 rounded-full bg-gradient-primary text-white text-xs font-semibold hover:shadow-primary-glow transition-all cursor-pointer"
                    >
                      Give via Bank Transfer
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
