import { Metadata } from "next";
import { BranchesClient } from "./branches-client";

export const metadata: Metadata = {
  title: "Branches & Campuses | Beyond Worship Center",
  description:
    "Find a Beyond Worship Center campus near you. Campuses in Port Harcourt (HQ), Lagos, Abuja, London, Houston, and worldwide.",
  openGraph: {
    title: "Branches & Campuses | Beyond Worship Center",
    description: "Find a Beyond Worship Center campus near you.",
    url: "https://beyondworshipcenter.org/branches",
    siteName: "Beyond Worship Center",
    type: "website",
  },
};

export default function BranchesPage() {
  return <BranchesClient />;
}
