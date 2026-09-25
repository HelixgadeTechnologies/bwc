import React from "react";
import type { Metadata } from "next";
import { SermonsClient } from "./sermons-client";

export const metadata: Metadata = {
  title: "Sermons | Beyond Worship Centre",
  description:
    "Listen to powerful, life-transforming sermons by Pastor Udochukwu Nwanma, Pastor Chika UD Nwanma, and ministers from Beyond Worship Centre. Explore our latest sermon series, individual messages, and discover the Word of God that brings life and hope.",
  keywords: [
    "sermons",
    "Beyond Worship Centre sermons",
    "BWC sermons",
    "Pastor Udochukwu Nwanma sermons",
    "Pastor Chika UD Nwanma messages",
    "Christian sermons Port Harcourt",
    "Bible teaching",
    "sermon series",
    "audio sermons",
    "online sermons",
    "Word of God",
    "spiritual growth",
    "faith messages",
  ],
  openGraph: {
    title: "Sermons | Beyond Worship Centre",
    description:
      "Listen to powerful, life-transforming sermons by Pastor Udochukwu Nwanma, Pastor Chika UD Nwanma, and ministers from Beyond Worship Centre. Explore our latest sermon series and discover the Word of God.",
    url: "https://beyondworshipcenter.org/sermons",
    siteName: "Beyond Worship Centre",
    images: [
      {
        url: "/images/word-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Beyond Worship Centre Sermons",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sermons | Beyond Worship Centre",
    description:
      "Listen to powerful, life-transforming sermons by Pastor Udochukwu Nwanma and ministers from Beyond Worship Centre.",
    images: ["/images/word-cover.jpg"],
  },
};

export default function SermonsPage() {
  return (
    <main className="min-h-screen">
      <SermonsClient />
    </main>
  );
}
