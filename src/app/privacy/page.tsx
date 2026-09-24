import React from "react";

export const metadata = {
  title: "Privacy Policy | Beyond Worship Center",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 container-max max-w-4xl px-4 sm:px-6">
      <div className="py-12 border-b border-gray-100">
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-dark">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mt-2">Last updated: {new Date().getFullYear()}</p>
      </div>

      <div className="py-8 space-y-6 text-sm text-gray-700 leading-relaxed">
        <p>
          Beyond Worship Center is committed to protecting the privacy of members, visitors, and partners.
          This policy explains how we collect, store, and manage your information when you interact with our
          online services, media apps, and church events.
        </p>

        <h2 className="text-xl font-bold font-display text-dark">Information We Collect</h2>
        <p>
          We may collect personal identification details such as your name, email address, phone number, and
          prayer requests when you register for services, enroll in classes, or contact our pastoral team.
        </p>

        <h2 className="text-xl font-bold font-display text-dark">How We Use Your Information</h2>
        <p>
          Your information is used solely to facilitate your church experience, send requested devotionals or
          event notifications, and provide pastoral assistance. We do not sell or rent personal information to
          third-party entities.
        </p>
      </div>
    </div>
  );
}
