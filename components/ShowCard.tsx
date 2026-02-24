"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ShowCardProps {
  show: {
    slug: string;
    title: string;
    type: string;
    description: string;
    playwright: string;
    dates: string;
    runtime?: string;
    gradient: string;
    subtitle?: string;
  };
  index: number;
}

export default function ShowCard({ show, index }: ShowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
            <p className="text-foreground/80 mb-4 line-clamp-3">
              {show.description}
            </p>

            {/* Details */}
            <div className="space-y-2 mb-6">
              <p className="text-sm text-foreground/70">
                <span className="font-medium">Playwright:</span> {show.playwright}
              </p>
              <p className="text-sm text-gold font-medium">
                {show.dates}
              </p>
              {show.runtime && (
                <p className="text-sm text-foreground/70">
                  <span className="font-medium">Runtime:</span> {show.runtime}
                </p>
              )}
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
  );
}