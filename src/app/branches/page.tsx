import { Metadata } from "next";
import { BranchesClient } from "./branches-client";

export const metadata: Metadata = {
  title: "Branches & Campuses | Beyond Worship Centre",
  description:
    "Find a Beyond Worship Centre campus near you. Campuses in Port Harcourt (HQ), Lagos, Abuja, London, Houston, and worldwide.",
  openGraph: {
    title: "Branches & Campuses | Beyond Worship Centre",
    description: "Find a Beyond Worship Centre campus near you.",
    url: "https://beyondworshipcenter.org/branches",
    siteName: "Beyond Worship Centre",
    type: "website",
  },
};

export default function BranchesPage() {
  return <BranchesClient />;
}
