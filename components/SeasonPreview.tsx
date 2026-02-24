"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const shows = [
  {
    slug: "kims-convenience",
    title: "Kim's Convenience",
    type: "COMEDY",
    description: "The beloved Korean-Canadian family comedy — warm, funny, and deeply human.",
    playwright: "A Soulpepper production in association with A.C.T.",
    dates: "Coming Spring 2026",
    gradient: "show-gradient-amber",
  },
  {
    slug: "girls-chance-music",
    title: "Girls · Chance · Music",
    subtitle: "(||: Girls :||: Chance :||: Music :||)",
    type: "WORLD PREMIERE",
    description: "A world premiere from celebrated playwright Eisa Davis — music, memory, and the stories women tell themselves.",
    playwright: "By Eisa Davis",
    dates: "Final production of the 2025-26 season",
    gradient: "show-gradient-purple",
  },
  {
    slug: "third-show",
    title: "The Lehman Trilogy",
    type: "DRAMA",
    description: "An epic journey through the American century — one family, three brothers, 160 years.",
    playwright: "By Stefano Massini, adapted by Ben Power",
    dates: "Fall 2025",
    gradient: "show-gradient-navy",
  },
];

export default function SeasonPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            2025–26 Season
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            A season of laughter, discovery, and epic storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {shows.map((show, index) => (
            <motion.div
              key={show.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link href={`/shows/${show.slug}`}>
                <div className="bg-charcoal rounded-sm overflow-hidden card-hover gold-glow h-full">
                  {/* Show image/gradient */}
                  <div className={`h-48 ${show.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="font-serif text-3xl font-bold text-white text-center px-4">
                        {show.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-6">
                    {/* Type badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold tracking-wider uppercase rounded-sm">
                        {show.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      {show.title}
                    </h3>
                    {show.subtitle && (
                      <p className="text-foreground/70 text-sm mb-3">
                        {show.subtitle}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-foreground/80 mb-4">
                      {show.description}
                    </p>

                    {/* Playwright and dates */}
                    <div className="space-y-2 mb-6">
                      <p className="text-sm text-foreground/70">
                        <span className="font-medium">Playwright:</span> {show.playwright}
                      </p>
                      <p className="text-sm text-gold font-medium">
                        {show.dates}
                      </p>
                    </div>

                    {/* Learn More link */}
                    <div className="flex items-center text-gold group-hover:text-gold/80 transition-colors">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/season"
            className="inline-flex items-center px-8 py-4 border-2 border-gold text-gold font-medium rounded-sm hover:bg-gold/10 transition-colors text-lg"
          >
            View Full Season
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}