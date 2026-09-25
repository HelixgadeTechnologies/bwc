import React from "react";
import type { Metadata } from "next";
import { SermonsClient } from "../sermons-client";

export const metadata: Metadata = {
  title: "All Sermons | Beyond Worship Centre",
  description: "Browse and stream all sermons from Beyond Worship Centre.",
};

export default function AllSermonsRoutePage() {
  return (
    <main className="min-h-screen">
      <SermonsClient />
    </main>
  );
}
