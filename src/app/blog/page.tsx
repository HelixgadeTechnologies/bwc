import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog | Beyond Worship Center",
  description:
    "Jesus Revealed. Grace Explained. Faith Strengthened. Read inspiring articles from Pastor Udochukwu Nwanma and the Beyond Worship Center pastoral team.",
};

const blogPosts = [
  {
    id: "relate-restore-reign",
    slug: "relate-restore-reign",
    title: "RELATE. RESTORE. REIGN.",
    subtitle: "How God's Grace Empowers Us to Relate in Love, Walk in Restoration, and Reign in Kingdom Purpose",
    excerpt:
      "As believers, we were saved and empowered by God's grace. This divine truth is not just the foundation of our salvation; it is the force that enables us to relate with God and others, experience supernatural restoration, and reign in kingdom dominion.",
    author: "Pastor Udochukwu Nwanma",
    role: "Lead Pastor",
    date: "July 1, 2025",
    readTime: "6 min read",
    category: "Identity",
    image: "/images/love_life_impact.png",
  },
  {
    id: "living-in-righteousness",
    slug: "living-in-righteousness",
    title: "The Righteousness of Faith: Cease from Struggling",
    subtitle: "Understanding that Righteousness is a Gift Received, Never a Wage Earned",
    excerpt:
      "Religious systems teach that you must earn your way into God's presence. But the finished work of Jesus established a new covenant: we stand before the Father complete, justified, and without condemnation.",
    author: "Pastor Udochukwu Nwanma",
    role: "Lead Pastor",
    date: "June 20, 2025",
    readTime: "5 min read",
    category: "Grace",
  },
  {
    id: "the-multipliers-anointing",
    slug: "the-multipliers-anointing",
    title: "Nothing Dies in My Hands: Operating in Multiplication",
    subtitle: "Activating the Divine Advantage in Your Career, Business, and Family",
    excerpt:
      "When the presence of God resides within you, scarcity is swallowed up by divine supply. Discover how to stir the multiplier's anointing in everyday situations.",
    author: "BWC Media",
    role: "Editorial Team",
    date: "May 12, 2025",
    readTime: "4 min read",
    category: "Supernatural",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-[#212120] text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container-max max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary/20 text-primary-400 font-semibold text-xs tracking-widest uppercase mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles &amp; Revelations</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight mb-4">
            Beyond Worship Blog
          </h1>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Jesus Revealed. Grace Explained. Faith Strengthened.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="card-elegant overflow-hidden flex flex-col justify-between group border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  {post.image ? (
                    <div className="relative h-56 bg-dark overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-md">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="h-44 bg-gradient-to-tr from-dark to-primary-900 p-6 flex items-end">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-md">
                        {post.category}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-3.5 h-3.5 text-gray-400" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-1 text-sm leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:text-primary-700 transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
