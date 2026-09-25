import React from "react";
import type { Metadata } from "next";
import { SermonsClient } from "../sermons-client";

export const metadata: Metadata = {
  title: "Sermon Series | Beyond Worship Centre",
  description: "Browse all teaching series and expository studies from Beyond Worship Centre.",
};

export default function SeriesIndexPage() {
  return (
    <main className="min-h-screen">
      <SermonsClient />
    </main>
  );
}
