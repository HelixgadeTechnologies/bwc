"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Radio, Heart } from "lucide-react";
import { useAudioPlayer } from "@/context/audio-context";
import { BrandLogo } from "@/components/brand-logo";

interface NavDropdownItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  submenu?: NavDropdownItem[];
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  {
    name: "Trainings",
    href: "/trainings",
    submenu: [
      { name: "BWC Foundation Class", href: "/trainings/lfc" },
      { name: "BWC Discipleship Class", href: "/trainings/ldc" },
      { name: "BWC Minister's Training", href: "/trainings/lmt" },
    ],
  },
  { name: "Expressions", href: "/expressions" },
  { name: "Sermons", href: "/sermons" },
  { name: "BWC Lounge", href: "/bwc-lounge" },
  { name: "Blog", href: "/blog" },
];

export function Navbar({ onOpenGiveModal }: { onOpenGiveModal?: () => void }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const { isPlaying, togglePlay } = useAudioPlayer();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileAccordion = (name: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#212120]/95 backdrop-blur-md shadow-xl py-3 border-b border-white/10"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group focus:outline-none">
            <BrandLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/expressions" && (pathname === "/branches" || pathname.startsWith("/expressions")));
              const hasSubmenu = Boolean(item.submenu);

              if (hasSubmenu) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`relative px-3.5 py-2 text-sm font-display font-semibold transition-all duration-300 tracking-wide flex items-center gap-1.5 rounded-md cursor-pointer ${
                        activeDropdown === item.name
                          ? "text-white bg-white/20"
                          : "text-white/85 hover:text-white hover:bg-white/10"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.name}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Submenu Dropdown */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-[#212120]/95 backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.submenu?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm font-medium text-white/85 hover:text-white hover:bg-primary/20 hover:border-l-4 hover:border-primary transition-all duration-150"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={`relative px-3.5 py-2 text-sm font-display font-semibold transition-all duration-300 tracking-wide rounded-md ${
                      isActive
                        ? "text-white bg-white/20 shadow-sm"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Header Action Buttons (Radio & Give) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={togglePlay}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                isPlaying
                  ? "bg-emerald-600 text-white shadow-lg animate-pulse"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
              }`}
              title="Listen to BWC Radio Live"
            >
              <Radio className="w-3.5 h-3.5" />
              <span>{isPlaying ? "Radio Live" : "Listen Live"}</span>
            </button>

            <button
              onClick={onOpenGiveModal}
              className="bg-secondary text-dark hover:shadow-secondary-glow font-display font-bold text-xs tracking-wider uppercase px-4 py-2 rounded-full flex items-center gap-1.5 transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              Give
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={togglePlay}
              className={`p-2 rounded-full text-white cursor-pointer ${
                isPlaying ? "bg-emerald-600 animate-pulse" : "bg-white/10"
              }`}
              aria-label="Toggle radio broadcast"
            >
              <Radio className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-[#212120]/98 backdrop-blur-2xl z-40 lg:hidden overflow-y-auto border-t border-white/10 px-6 py-8 flex flex-col justify-between">
          <div className="space-y-3">
            {navItems.map((item) => {
              const hasSubmenu = Boolean(item.submenu);
              const isExpanded = mobileExpanded[item.name];

              if (hasSubmenu) {
                return (
                  <div key={item.name} className="border-b border-white/10 pb-2">
                    <button
                      onClick={() => toggleMobileAccordion(item.name)}
                      className="w-full flex items-center justify-between py-2 text-lg font-display font-semibold text-white/90 hover:text-white cursor-pointer"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/40">
                        {item.submenu?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-sm text-white/70 hover:text-white"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={item.name} className="border-b border-white/10 pb-2">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-lg font-display font-semibold text-white/90 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mobile Bottom Actions */}
          <div className="pt-8 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGiveModal?.();
              }}
              className="w-full py-3.5 bg-secondary text-dark font-display font-bold rounded-xl text-center shadow-secondary-glow flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-current" />
              Give to Beyond Worship Center
            </button>
            <button
              onClick={() => {
                togglePlay();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3.5 bg-white/10 border border-white/20 text-white font-display font-semibold rounded-xl text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Radio className="w-4 h-4" />
              {isPlaying ? "Pause BWC Radio" : "Listen to BWC Radio Live"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
