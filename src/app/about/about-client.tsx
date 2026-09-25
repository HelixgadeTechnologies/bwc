"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Target, Sparkles, ChevronDown, ChevronUp, ArrowRight, Calendar, Users, MapPin, Heart, BookOpen } from "lucide-react";
import { PlanVisitModal } from "@/components/plan-visit-modal";
import { BrandLogo } from "@/components/brand-logo";

export function AboutClient() {
  const [storyExpanded, setStoryExpanded] = useState(false);
  const [pastorUdoExpanded, setPastorUdoExpanded] = useState(false);
  const [pastorChikaExpanded, setPastorChikaExpanded] = useState(false);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);

  const scrollToStory = () => {
    const el = document.getElementById("our-story");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Hero Section (Full-Height Immersive) */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Multi-layer Gradients */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about.jpg"
            alt="Aerial view and gathering of Beyond Worship Center in Port Harcourt, Nigeria"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#212120]/95 via-[#212120]/75 to-[#212120]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#212120] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-black/40" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary/20 backdrop-blur-md text-secondary text-xs sm:text-sm font-bold border border-secondary/40 tracking-widest uppercase shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Our Mantra: Relate • Restore • Reign</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 tracking-tight leading-tight"
          >
            <span className="block">About Beyond Worship</span>
            <span className="text-gradient block">Center</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light mb-8"
          >
            We are a Christ Centred community with a passion to build and restore relationships, raising them as believers through the gospel of Christ.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onClick={scrollToStory}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20 cursor-pointer group flex flex-col items-center space-y-3"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
            Discover More
          </span>
          <div className="w-6 h-11 border-2 border-white/40 rounded-full flex justify-center p-1 group-hover:border-white transition-colors">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. Our Story Section */}
      <section id="our-story" className="section-padding bg-white scroll-mt-20">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Story Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-wider uppercase mb-4">
                <span>Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-dark mb-4">
                Our Mandate &amp; Story
              </h2>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/15 mb-6">
                <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-1">
                  Who We Are
                </span>
                <p className="text-lg sm:text-xl font-display font-bold text-dark leading-relaxed">
                  We are a Christ Centred community with a passion to build and restore relationships, raising them as believers through the gospel of Christ.
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-gray-1 leading-relaxed">
                <p>
                  <strong>Beyond Worship Center</strong> stands as a beacon of God&apos;s love in Christ Jesus,
                  here in Port Harcourt, Nigeria, and to the world at large. We are a place of love, peace, and joy for all who join us.
                </p>
                <p>
                  Our community is richly diverse, with people of different ages and backgrounds coming together to
                  worship and hear the message of the gospel of God&apos;s grace. We welcome all individuals seeking
                  God&apos;s love, and our doors are open to every soul desiring to welcome Jesus into their heart and live
                  out their in-Christ realities.
                </p>

                <AnimatePresence>
                  {storyExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4 pt-2 overflow-hidden text-gray-700"
                    >
                      <p>
                        Founded under apostolic grace, Beyond Worship Center began with a burning mandate:
                        to unveil the person of Jesus Christ, explain the unconditional gospel of His grace, and empower
                        believers to live supernatural lives as a daily reality.
                      </p>
                      <p>
                        What started with a committed few has rapidly expanded across Port Harcourt, multiple states in Nigeria,
                        the United Kingdom, and an international digital campus uniting believers worldwide. Today, we are
                        home to dynamic worship, life-giving fellowships (Gist Centres), supernatural healing school, and
                        leadership academies that transform professionals, creatives, and entrepreneurs.
                      </p>
                      <p>
                        At Beyond Worship Center, you will never encounter condemnation. You will encounter the radical,
                        transforming love of Jesus that restores dignity, releases purpose, and equips you to thrive beyond limitations.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => setStoryExpanded(!storyExpanded)}
                className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-700 transition-colors text-base cursor-pointer"
              >
                <span>{storyExpanded ? "Read Less" : "Read More"}</span>
                {storyExpanded ? <ChevronUp className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>

            {/* Story Visual */}
            <div className="relative">
              <div className="relative h-[420px] sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-dark/10 group">
                <Image
                  src="/images/ourstory.jpg"
                  alt="Beyond Worship Center — Our Story"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-widest font-semibold text-primary-400 mb-1">
                      Our Sanctuary
                    </p>
                    <p className="text-lg sm:text-xl font-bold font-display leading-snug">
                      112 Eliozu Airport Road Bypass, Eligbolo, Port Harcourt, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Stat Pill */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary text-white flex items-center justify-center font-bold shadow-primary-glow">
                  <Heart className="w-6 h-6 fill-secondary text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-dark">One Global Family</div>
                  <div className="text-xs text-gray-500">Rooted in Grace &amp; Truth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Mantra, Mission, Vision & Purpose Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          {/* Our Mantra Banner (Relate, Restore, Reign) */}
          <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-[#212120] to-[#121211] text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl mb-16">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-xs font-bold tracking-widest uppercase mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Core Theme</span>
                </span>
                <h3 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                  Our Mantra
                </h3>
                <p className="text-2xl sm:text-4xl font-display font-extrabold text-secondary mt-2 tracking-wide">
                  Relate • Restore • Reign
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary-300 font-display font-black text-lg flex items-center justify-center mb-3">
                    01
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">Relate</h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    Cultivating an ever-growing, intimate relationship with Christ and authentic, familial fellowship among believers.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary font-display font-black text-lg flex items-center justify-center mb-3">
                    02
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">Restore</h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    Experiencing the unconditional love and grace of God that restores wholeness, dignity, and divine identity.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 font-display font-black text-lg flex items-center justify-center mb-3">
                    03
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">Reign</h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    Stepping into spiritual maturity, ruling with kingdom authority, and staying relevant and impactful in every pursuit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision & Purpose Section Header */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-3">
              Foundation &amp; Direction
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-dark mb-4">
              Mission, Vision &amp; Purpose
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              The spiritual mandate, heartbeat, and compass driving everything we do at Beyond Worship Center.
            </p>
          </div>

          {/* 3-Card Grid: Mission, Vision, Purpose */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission Statement */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-md border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-1">
                  Our Assignment
                </span>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">
                  Mission Statement
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  To establish a formidable connection of the church, the community and Christ through the teaching of the word, prayer and the empowerment by the Holy Spirit.
                </p>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-md border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 text-secondary-dark flex items-center justify-center mb-6">
                  <Compass className="w-7 h-7 text-dark" />
                </div>
                <span className="text-xs font-bold text-dark tracking-widest uppercase block mb-1">
                  Our Outlook
                </span>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">
                  Vision Statement
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Leading people into a life changing, ever growing relationship with Christ, Bringing sons into maturity through the appropriation of God&apos;s word.
                </p>
              </div>
            </div>

            {/* Our Purpose */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-md border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-1">
                  Our Heartbeat
                </span>
                <h3 className="text-2xl font-display font-bold text-dark mb-4">
                  Our Purpose
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  To lead people to faith in Christ, incorporate them into the fellowship of believers, groom them to become disciples and equip them to stay relevant in their various pursuits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Statistics Strip */}
      <section className="section-padding py-16 bg-gradient-primary text-white shadow-xl relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-secondary">1,000+</div>
              <div className="text-white/85 text-sm sm:text-base font-medium">Active Members</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-secondary">4+</div>
              <div className="text-white/85 text-sm sm:text-base font-medium">Years Serving</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-secondary">1</div>
              <div className="text-white/85 text-sm sm:text-base font-medium">Branch</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-secondary">2,000+</div>
              <div className="text-white/85 text-sm sm:text-base font-medium">Lives Touched</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Leadership Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-3">
              Shepherds &amp; Stewards
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-dark mb-4">
              Our Leadership Team
            </h2>
            <p className="text-base sm:text-lg text-gray-1">
              Meet the dedicated leaders who guide our church community with spiritual insight, wisdom, and pastoral warmth.
            </p>
          </div>

          <div className="space-y-24">
            {/* Leader 1: Pastor Udochukwu Nwanma */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Photo */}
              <div className="relative w-full max-w-[540px] mx-auto">
                <div className="relative h-[540px] sm:h-[660px] lg:h-[750px] rounded-3xl overflow-hidden shadow-elegant bg-[#212120]/5 flex items-center justify-center">
                  <Image
                    src="/images/pastUD.jpg"
                    alt="Pastor Udochukwu Nwanma, Lead Pastor of Beyond Worship Center"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                {/* Brand Badge */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-gray-100">
                  <BrandLogo light={false} className="scale-75" />
                </div>
              </div>

              {/* Bio Details */}
              <div className="space-y-5">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-dark mb-2">
                    Pastor Udochukwu Nwanma
                  </h3>
                  <p className="text-lg sm:text-xl text-primary font-display font-semibold">
                    Lead Pastor, Beyond Worship Center
                  </p>
                </div>

                <div className="space-y-4 text-base sm:text-lg text-gray-1 leading-relaxed">
                  <p>
                    <strong>Pastor Udochukwu Nwanma</strong> is the Lead Pastor of Beyond Worship Center,
                    headquartered in Port Harcourt, Nigeria, and ministering to a thriving global fellowship of believers.
                    An anointed teacher of the Word and visionary shepherd, he carries an apostolic mandate to unveil the
                    unconditional love of God, the gospel of His grace, and the transformative power of authentic worship.
                  </p>
                  <p>
                    With deep spiritual insight, wisdom, and compassionate pastoral leadership, Pastor Udochukwu is dedicated
                    to equipping believers to live victorious, purpose-filled lives in Christ Jesus. His ministry demystifies faith,
                    fostering spiritual depth and inspiring individuals to step boldly into their divine callings.
                  </p>
                  <p>
                    Under his leadership, Beyond Worship Center has grown into a dynamic sanctuary of hope, healing, and supernatural
                    empowerment where worship transcends routines and ushers believers into life-transforming intimacy with the Father.
                  </p>

                  <AnimatePresence>
                    {pastorUdoExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-4 pt-2 overflow-hidden text-gray-700"
                      >
                        <p>
                          A passionate advocate for mentorship, discipleship, and kingdom excellence, Pastor Udochukwu trains
                          leaders who impact the church, marketplace, and society at large. His heart beats for raising a generation
                          grounded in biblical truth and walking in the fullness of their identity as children of God.
                        </p>
                        <p>
                          Happily married to Pastor Chika UD Nwanma, they co-labor as Lead Pastors of Beyond Worship Center,
                          exemplifying kingdom family values and inspiring the body of Christ with their tireless devotion to the Gospel.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => setPastorUdoExpanded(!pastorUdoExpanded)}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-700 transition-colors text-base cursor-pointer"
                >
                  <span>{pastorUdoExpanded ? "Read Less" : "Read More"}</span>
                  {pastorUdoExpanded ? <ChevronUp className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Leader 2: Pastor Chika UD Nwanma (Alternating) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:grid-flow-col-dense">
              {/* Photo on Right */}
              <div className="relative lg:col-start-2 w-full max-w-[540px] mx-auto">
                <div className="relative h-[540px] sm:h-[660px] lg:h-[750px] rounded-3xl overflow-hidden shadow-elegant bg-[#212120]/5 flex items-center justify-center">
                  <Image
                    src="/images/chika.jpg"
                    alt="Pastor Chika UD Nwanma, Lead Pastor at Beyond Worship Center"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                {/* Brand Badge */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-gray-100">
                  <BrandLogo light={false} className="scale-75" />
                </div>
              </div>

              {/* Bio Details on Left */}
              <div className="space-y-5 lg:col-start-1">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-dark mb-2">
                    Pastor Chika UD Nwanma
                  </h3>
                  <p className="text-lg sm:text-xl text-primary font-display font-semibold">
                    Lead Pastor, Beyond Worship Center
                  </p>
                </div>

                <div className="space-y-4 text-base sm:text-lg text-gray-1 leading-relaxed">
                  <p>
                    <strong>Pastor Chika UD Nwanma</strong> serves as Lead Pastor at Beyond Worship Center alongside her husband,
                    Pastor Udochukwu Nwanma. A woman of prayer, profound grace, and spiritual discernment, she ministers with
                    warmth, wisdom, and an unwavering commitment to the spiritual and emotional wholeness of the flock.
                  </p>
                  <p>
                    Pastor Chika plays a central role in guiding church life, pastoral care, and discipleship across Beyond Worship Center.
                    Her heart is deeply rooted in empowering believers, building strong Christian families, and championing women
                    to discover their divine identity and purpose in God.
                  </p>
                  <p>
                    Known for her compassionate leadership and dedication to kingdom excellence, she brings clarity, poise, and
                    practical spiritual insight to ministry operations, outreach initiatives, and leadership development.
                  </p>

                  <AnimatePresence>
                    {pastorChikaExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-4 pt-2 overflow-hidden text-gray-700"
                      >
                        <p>
                          Through her ministry, Pastor Chika nurtures community cohorts, prayer gatherings, and mentorship platforms
                          that inspire believers to flourish in their marriages, careers, and spiritual walk with God.
                        </p>
                        <p>
                          Together with Pastor Udochukwu, she continues to steer Beyond Worship Center with integrity, boundless love,
                          and vision, cultivating a thriving spiritual family that impacts Port Harcourt and communities worldwide.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => setPastorChikaExpanded(!pastorChikaExpanded)}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-700 transition-colors text-base cursor-pointer"
                >
                  <span>{pastorChikaExpanded ? "Read Less" : "Read More"}</span>
                  {pastorChikaExpanded ? <ChevronUp className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Want to Learn More? / CTA Section */}
      <section className="section-padding bg-gray-50 text-center">
        <div className="container-max max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-dark mb-4">
            Want to Learn More?
          </h2>
          <p className="text-base sm:text-lg text-gray-1 mb-8 max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to connect with you and answer any questions you might have about our church community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-white font-semibold rounded-full text-base sm:text-lg shadow-lg hover:shadow-primary-glow transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setIsVisitModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-primary text-primary hover:text-white border-2 border-primary font-semibold rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Visit This Sunday
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Plan Visit Modal */}
      <PlanVisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />
    </>
  );
}
