import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Heart, CheckCircle2 } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "relate-restore-reign" || slug === "love-life-impact") {
    return {
      title: "RELATE. RESTORE. REIGN. | Beyond Worship Centre Blog",
      description: "How God's Grace Empowers Us to Relate in Love, Walk in Restoration, and Reign in Kingdom Dominion by Pastor Udochukwu Nwanma.",
    };
  }
  return {
    title: "Article | Beyond Worship Centre Blog",
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug !== "relate-restore-reign" && slug !== "love-life-impact") {
    // For other slugs return a nice standard view or notFound
    return (
      <div className="pt-32 pb-20 container-max px-4 text-center">
        <h1 className="text-3xl font-bold font-display text-dark">Article Coming Soon</h1>
        <p className="text-gray-600 mt-2">This teaching is currently being transcribed for the web.</p>
        <Link href="/blog" className="inline-flex items-center gap-2 mt-6 text-primary font-semibold">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-24 pb-20 bg-white">
      {/* Article Header */}
      <section className="bg-gradient-to-br from-[#212120] to-[#121211] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-max max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary-400 hover:text-white uppercase tracking-widest mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
              Identity
            </span>
            <span className="text-gray-400 text-xs">• 6 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4 leading-tight">
            RELATE. RESTORE. REIGN.
          </h1>

          <p className="text-xl text-gray-300 font-light leading-relaxed mb-6">
            How God&apos;s Grace Empowers Us to Relate in Love, Walk in Restoration, and Reign in Kingdom Dominion
          </p>

          <div className="flex items-center space-x-4 text-sm text-gray-400 border-t border-white/10 pt-4">
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              <span>July 1, 2025</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <User className="w-4 h-4 text-primary" />
              <span className="text-white font-medium">Pastor Udochukwu Nwanma</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      <div className="container-max max-w-4xl mx-auto px-4 -mt-8 relative z-20">
        <div className="relative h-72 sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-dark">
          <Image
            src="/images/love_life_impact.png"
            alt="RELATE. RESTORE. REIGN. - Pastor Udochukwu Nwanma"
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Body Content (Exact Extracted Content) */}
      <div className="container-max max-w-3xl mx-auto px-4 sm:px-6 py-12 prose prose-lg prose-red">
        <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-light mb-8">
          As believers, we were saved by God&apos;s love—a love so deep and sacrificial that He gave His Son
          to die for us and completely take away our sins. This divine truth is not just the foundation of our salvation;
          it is also the force that sustains our Christian walk, shapes how we relate with God and others, brings total restoration
          to our souls, and empowers us to reign in kingdom authority. Let&apos;s explore this journey of{" "}
          <strong className="text-primary font-bold">Relate</strong>,{" "}
          <strong className="text-primary font-bold">Restore</strong>, and{" "}
          <strong className="text-primary font-bold">Reign</strong>.
        </p>

        {/* Section 1: RELATE */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-dark border-l-4 border-primary pl-4">
            RELATE — Walking in Authentic Fellowship with God and Others
          </h2>

          <blockquote className="p-4 rounded-2xl bg-primary/5 border-l-4 border-primary text-gray-800 italic">
            &ldquo;But God put his love on the line for us by offering his Son in sacrificial death while we were of no use whatever to him.&rdquo;
            <span className="block mt-1 font-semibold not-italic text-sm text-primary">— Romans 5:8 (MSG)</span>
          </blockquote>

          <p className="text-gray-700 leading-relaxed">
            Whatever we are born from, we are sustained by. Just as a fish thrives in water, our spiritual lives are
            nourished and sustained by relating deeply with God. His profound and unrelenting love is the foundation of our
            salvation and the force that propels us forward in our walk with Him.
          </p>

          <p className="text-gray-700 leading-relaxed">
            It&apos;s not our love for God that sustains the relationship—it is His love for us. Our efforts and performance
            cannot hold us steady; it is His unwavering affection that anchors us. When we understand this truth, our desire
            to live a disciplined, holy life is no longer driven by fear but by love. The more we expose ourselves to His Word,
            the more our hearts naturally respond by putting off old habits—not to earn love, but because we have been loved deeply.
          </p>

          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
            <h4 className="font-bold text-sm text-dark uppercase tracking-wider">Declarations of Faith</h4>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>I am the Righteousness of God in Christ Jesus.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>I am passionately loved by God.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>I am the Beloved of Abba.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>All my sins are forgiven!</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: RESTORE */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-dark border-l-4 border-primary pl-4">
            RESTORE — The Transforming Work of Christ Bringing Wholeness
          </h2>

          <blockquote className="p-4 rounded-2xl bg-primary/5 border-l-4 border-primary text-gray-800 italic">
            &ldquo;When anyone belongs to Christ, they become a new person. Their old way of life has gone. Their new life has begun!&rdquo;
            <span className="block mt-1 font-semibold not-italic text-sm text-primary">— 2 Corinthians 5:17 (EASY)</span>
          </blockquote>

          <p className="text-gray-700 leading-relaxed">
            God&apos;s grace doesn&apos;t just save us—it restores us completely. That supernatural restoration is the life of Christ in us,
            healing broken hearts, renewing minds, severing all ties to past shame, and birthing wholeness. We are no longer defined by our past,
            but restored by Christ who lives in us.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This restoration in Christ empowers us to go through trials and not be crushed by them—and even more, to be a fountain
            of comfort, restoration, and strength for others. Whether you&apos;re feeling anxious about your next step or helping someone
            through grief, the restoring power of God within enables us to rise with boldness and hope.
          </p>
        </div>

        {/* Section 3: REIGN */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-dark border-l-4 border-primary pl-4">
            REIGN — Rising in Kingdom Authority, Dominion, and Purpose
          </h2>

          <blockquote className="p-4 rounded-2xl bg-primary/5 border-l-4 border-primary text-gray-800 italic">
            &ldquo;The Gentiles shall come to your light, And kings to the brightness of your rising.&rdquo;
            <span className="block mt-1 font-semibold not-italic text-sm text-primary">— Isaiah 60:3 (NKJV)</span>
          </blockquote>

          <p className="text-gray-700 leading-relaxed">
            We relate with God in intimacy, and walk in His supernatural restoration. Now we are called to reign!
            Romans 5:17 tells us that those who receive the abundance of grace and the gift of righteousness shall reign in life through Christ Jesus.
            Sometimes, we think reigning requires a worldly throne or a political spotlight.
            Consider Esther, Daniel, and Joseph. You carry the Holy Spirit inside of you, positioned to reign with humility and divine authority in your career, business, and community!
          </p>

          <div className="p-6 rounded-2xl bg-dark text-white space-y-3">
            <h4 className="font-bold text-sm text-primary-400 uppercase tracking-widest">
              Daily Apostolic Declarations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
              <p>• I am the righteousness of God in Christ Jesus.</p>
              <p>• I am powerfully helped by God.</p>
              <p>• Nothing dies in my hands.</p>
              <p>• I am irrevocably blessed.</p>
              <p>• The supernatural is natural to me.</p>
              <p>• Grace is working for me!!</p>
            </div>
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="mt-14 p-6 rounded-3xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-primary text-white flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-primary-glow">
            UN
          </div>
          <div>
            <h3 className="font-bold text-dark text-lg font-display">Pastor Udochukwu Nwanma</h3>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">
              Lead Pastor, Beyond Worship Centre
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Pastor Udochukwu Nwanma is the Lead Pastor of Beyond Worship Centre, dedicated to unveiling Jesus and teaching the uncompromised
              word of God with tangible signs, wonders, and life transformations.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
