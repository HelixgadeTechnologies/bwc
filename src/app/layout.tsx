import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beyond Worship Centre | Living Beyond The Veil",
  description:
    "Beyond Worship Centre (BWC) is a Word-based, Worshipping, Empowering, and Supernatural family rooted in grace and truth. Experience authentic community, sound teaching, vibrant worship, and global impact in Port Harcourt, Nigeria.",
  keywords: [
    "Beyond Worship Centre",
    "BWC",
    "BWC Port Harcourt",
    "Beyond Worship",
    "Word of His Grace",
    "Grace Church Port Harcourt",
    "Worship Church Nigeria",
    "Christian Community Port Harcourt",
    "Bible Teaching",
    "Spirit-filled Church",
    "Church in Port Harcourt",
    "Supernatural Church",
  ],
  authors: [{ name: "Beyond Worship Centre" }],
  creator: "Beyond Worship Centre",
  publisher: "Beyond Worship Centre",
  icons: {
    icon: [
      { url: "/bwc.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/bwc.png",
    apple: "/bwc.png",
  },
  openGraph: {
    title: "Beyond Worship Centre | Living Beyond The Veil",
    description:
      "A family of faith built on grace, worship, leadership, and supernatural living. Discover purpose, grow spiritually, and walk in victory at Beyond Worship Centre in Port Harcourt, Nigeria.",
    url: "https://beyondworshipcenter.org",
    siteName: "Beyond Worship Centre",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} font-sans antialiased scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#212120]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
