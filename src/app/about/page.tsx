import React from "react";
import type { Metadata } from "next";
import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "About Us | Beyond Worship Center",
  description:
    "Learn about Beyond Worship Center's story, mission, vision, and leadership team. Discover our journey to becoming a thriving community of faith in Port Harcourt, Nigeria and across the world.",
  keywords: [
    "About Beyond Worship Center",
    "BWC history",
    "Beyond Worship Center mission",
    "Pastor Udochukwu Nwanma",
    "Chika UD Nwanma",
    "church leadership Port Harcourt",
    "Christian community Port Harcourt",
    "Word-based church",
    "grace church Port Harcourt",
  ],
  openGraph: {
    title: "About Beyond Worship Center | Our Story & Mission",
    description:
      "Learn about Beyond Worship Center's story, mission, vision, and leadership team. Discover our journey to becoming a thriving community of faith.",
    url: "https://beyondworshipcenter.org/about",
    siteName: "Beyond Worship Center",
    images: [
      {
        url: "/images/about.png",
        width: 1200,
        height: 630,
        alt: "About Beyond Worship Center",
      },
    ],
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutClient />
    </main>
  );
}
