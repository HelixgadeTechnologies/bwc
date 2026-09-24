import React from "react";

export const metadata = {
  title: "Terms of Use | Beyond Worship Center",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 container-max max-w-4xl px-4 sm:px-6">
      <div className="py-12 border-b border-gray-100">
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-dark">Terms of Use</h1>
        <p className="text-gray-500 text-sm mt-2">Last updated: {new Date().getFullYear()}</p>
      </div>

      <div className="py-8 space-y-6 text-sm text-gray-700 leading-relaxed">
        <p>
          Welcome to the official digital platform of Beyond Worship Center.
          By accessing this website, mobile services, and media streams, you agree to comply with the terms set forth herein.
        </p>

        <h2 className="text-xl font-bold font-display text-dark">Intellectual Property</h2>
        <p>
          All sermon audio recordings, video broadcasts, text articles, graphics, and music produced by Beyond Worship Center
          are protected under international copyright conventions and are provided for personal edification and non-commercial ministry distribution.
        </p>
      </div>
    </div>
  );
}
