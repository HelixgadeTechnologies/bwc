"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle,
} from "lucide-react";

const ENQUIRY_TYPES = [
  "General Enquiry",
  "Prayer Request",
  "Pastoral Care",
  "New Here / First Visit",
  "Volunteering / Serving",
  "Trainings & Classes",
  "Partnership / Giving",
  "Media & Press",
];

const SERVICE_TIMES = [
  {
    emoji: "🙏",
    title: "Sunday Service",
    time: "Sunday 10:00 AM",
    location: "BWC Headquarters, Port Harcourt",
  },
  {
    emoji: "📖",
    title: "Midweek Service",
    time: "Wednesday 6:00 PM",
    location: "BWC Headquarters, Port Harcourt",
  },
];

const FAQS = [
  {
    q: "What should I expect on my first visit?",
    a: "Expect a warm, Spirit-filled atmosphere centred on Jesus. Services include heartfelt worship, practical Bible teaching, and a loving community ready to welcome you.",
  },
  {
    q: "How long are your services?",
    a: "Sunday services last approximately two hours with vibrant praise, a powerful message, and time to connect with the family afterwards.",
  },
  {
    q: "Do you have programmes for children and teenagers?",
    a: "Yes! Our Children's Department ministers to kids during the service, while our youth arm ensures teenagers receive age-appropriate, engaging teaching.",
  },
  {
    q: "What does BWC stand for?",
    a: "BWC stands for Beyond Worship Centre. Our mission is encapsulated in three words: Relate, Restore, Reign — building Christ-centred relationships and raising believers through the Gospel.",
  },
  {
    q: "How can I get connected?",
    a: "Join an Expression (department), attend our Foundation Class, or simply speak with one of our team members after service. We'd love to walk the journey with you.",
  },
  {
    q: "Is there follow-up after my first visit?",
    a: "Absolutely. Our Pastoral Care team reaches out to pray with you, answer questions, and help you settle into the BWC family.",
  },
  {
    q: "Do you stream your services online?",
    a: "Yes. Our services are streamed online so you can worship and receive the Word from anywhere in the world.",
  },
  {
    q: "How do I become a member of BWC?",
    a: "Start by attending services, then enrol in our BWC Foundation Class to understand who we are, our mission, and our values as a church.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer group"
      >
        <span className="text-base sm:text-lg font-semibold text-dark group-hover:text-primary transition-colors">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <p className="pb-5 text-gray-600 leading-relaxed text-sm sm:text-base">
          {a}
        </p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact.jpg"
            alt="Beyond Worship Centre — Contact Us"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#212120]/90 via-[#212120]/60 to-[#212120]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#212120]/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-primary/10" />
        </div>

        {/* Ambient glows */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div
            className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-sm font-semibold rounded-full border border-white/20 tracking-wide">
              📞 Get In Touch
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold mb-8 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700">
            <span className="block">Contact</span>
            <span className="block text-secondary">Us</span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            We&apos;d love to hear from you and answer any questions you may have
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white z-20 flex flex-col items-center space-y-3">
          <span className="text-sm font-medium tracking-widest uppercase opacity-80">Discover More</span>
          <div className="w-6 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-4 bg-white/80 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. Contact Info + Form */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Contact Details */}
            <div>
              <h2 className="text-3xl font-bold font-display text-dark mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Address</h3>
                    <p className="text-gray-600">
                      112 Eliozu Airport Road Bypass,
                    </p>
                    <p className="text-gray-600">
                      opposite Harritex Services, Eligbolo,
                    </p>
                    <p className="text-gray-600">Port Harcourt, Nigeria</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Phone</h3>
                    <a
                      href="tel:+2348096682229"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      +234 809 668 2229
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Email</h3>
                    <a
                      href="mailto:hello@bwc.com.ng"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      hello@bwc.com.ng
                    </a>
                  </div>
                </div>

                {/* Service Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">
                      Service Hours
                    </h3>
                    <p className="text-gray-600">Sunday: 10:00 AM</p>
                    <p className="text-gray-600">Wednesday: 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="mt-10">
                <h3 className="font-semibold text-dark mb-4">Find Us</h3>
                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5316!2d7.0134!3d4.8396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTAnMjIuNiJOIDfCsDAwJzQ4LjIiRQ!5e0!3m2!1sen!2sng!4v1695000000000!5m2!1sen!2sng"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Beyond Worship Centre Location"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=112+Eliozu+Airport+Road+Bypass+Eligbolo+Port+Harcourt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-display text-dark mb-8">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-dark">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 max-w-sm mx-auto">
                    Thank you for reaching out to Beyond Worship Centre. A
                    member of our community team will respond to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        enquiryType: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-2 text-sm text-primary font-semibold hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-dark"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-dark"
                      />
                    </div>
                  </div>

                  {/* Phone + Enquiry type row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-dark"
                      />
                    </div>

                    {/* Custom dropdown */}
                    <div className="space-y-2 relative">
                      <label className="block text-sm font-medium text-gray-700">
                        I&apos;m contacting you about{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent flex items-center justify-between cursor-pointer transition-colors"
                      >
                        <span
                          className={
                            formData.enquiryType
                              ? "text-dark"
                              : "text-gray-400"
                          }
                        >
                          {formData.enquiryType || "Select enquiry type"}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {dropdownOpen && (
                        <div className="absolute z-10 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl py-2 max-h-52 overflow-y-auto">
                          {ENQUIRY_TYPES.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  enquiryType: type,
                                });
                                setDropdownOpen(false);
                              }}
                              className="w-full text-left px-4 py-2.5 text-sm text-dark hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-dark"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={6}
                      required
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none text-dark"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-gradient-primary text-white font-display font-semibold px-8 py-4 rounded-xl text-lg shadow-md hover:shadow-primary-glow transition-all hover:scale-[1.02] active:scale-95 cursor-pointer w-full md:w-auto justify-center"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service Times */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-dark mb-4">
              Service Times
            </h2>
            <p className="text-lg text-gray-600">
              Join us for worship and fellowship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {SERVICE_TIMES.map((s) => (
              <div
                key={s.title}
                className="bg-white p-8 rounded-2xl shadow-md text-center border border-gray-100 hover:shadow-primary-glow/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {s.emoji}
                </div>
                <h3 className="text-xl font-semibold font-display text-dark mb-2">
                  {s.title}
                </h3>
                <p className="text-primary font-semibold mb-1">{s.time}</p>
                <p className="text-gray-500 text-sm">{s.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Answers to common questions from visitors and new members
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200 border border-gray-200 rounded-2xl px-6 sm:px-8 shadow-sm">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
