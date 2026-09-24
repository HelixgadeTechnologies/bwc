import React from "react";
import type { Metadata } from "next";
import { SermonsClient } from "../sermons-client";

export const metadata: Metadata = {
  title: "Sermon Series | Beyond Worship Center",
  description: "Browse all teaching series and expository studies from Beyond Worship Center.",
};

export default function SeriesIndexPage() {
  return (
    <main className="min-h-screen">
      <SermonsClient />
    </main>
  );
}
