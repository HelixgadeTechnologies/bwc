import { Metadata } from "next";
import { ExpressionsClient } from "./expressions-client";

export const metadata: Metadata = {
  title: "Our Expressions & Departments | Beyond Worship Center",
  description:
    "Discover the ministry departments and service expressions of Beyond Worship Center: Living Stones, Souled Out, Attendants, Heirs, Gleamers, Hospitality, Parking Wheels, The Scrybe, and Medical Team. Find your place to serve and grow.",
  keywords: [
    "Beyond Worship Center expressions",
    "BWC departments",
    "church workforce Port Harcourt",
    "Living Stones choir",
    "Souled Out worship",
    "Heirs children church",
    "Gleamers sanctuary care",
    "church protocol Port Harcourt",
    "volunteer church departments",
  ],
  openGraph: {
    title: "Our Expressions & Departments | Beyond Worship Center",
    description:
      "Discover the ministry departments and service expressions of Beyond Worship Center. Find your place to serve, grow in grace, and impact lives.",
    url: "https://beyondworshipcenter.org/expressions",
    siteName: "Beyond Worship Center",
    type: "website",
  },
};

export default function ExpressionsPage() {
  return <ExpressionsClient />;
}
