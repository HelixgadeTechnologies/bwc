import React from "react";
import { Users, Heart, MapPin, Sparkles } from "lucide-react";

export const metadata = {
  title: "Gist Centres | Beyond Worship Center",
  description: "Connect with our house fellowships and small groups known as Gist Centres.",
};

export default function GistCentresPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-[#212120] text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container-max max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary/20 text-primary-400 font-semibold text-xs tracking-widest uppercase mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Community &amp; Fellowships</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight mb-4">
            Gist Centres
          </h1>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Small group family gatherings where we eat, pray, discuss the Word, and grow together in love and intimacy.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-4xl text-center space-y-8">
          <div className="card-elegant p-10 border border-gray-100 space-y-4">
            <h2 className="text-2xl font-bold font-display text-dark">Find a Gist Centre in Your Neighborhood</h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed">
              Gist Centres meet bi-weekly across various districts in Lagos, Abuja, London, and virtually online.
              Contact our community team to be connected with your closest host family!
            </p>
            <div className="pt-4">
              <a
                href="mailto:hello@bwc.com.ng?subject=Join%20a%20Gist%20Centre"
                className="inline-flex items-center justify-center py-3.5 px-8 rounded-full bg-gradient-primary text-white font-semibold text-sm shadow-md hover:shadow-primary-glow transition-all"
              >
                Join a Gist Centre
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
