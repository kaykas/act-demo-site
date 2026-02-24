"use client";

import { motion } from "framer-motion";
import ShowCard from "@/components/ShowCard";

const seasonShows = [
  {
    slug: "kims-convenience",
    title: "Kim's Convenience",
    type: "COMEDY",
    description: "The beloved Korean-Canadian family comedy — warm, funny, and deeply human. A Soulpepper production in association with A.C.T.",
    playwright: "Ins Choi",
    dates: "March 15 - April 26, 2026",
    runtime: "2 hours 15 minutes (with intermission)",
    gradient: "show-gradient-amber",
    featured: true,
  },
  {
    slug: "girls-chance-music",
    title: "Girls · Chance · Music",
    subtitle: "(||: Girls :||: Chance :||: Music :||)",
    type: "WORLD PREMIERE",
    description: "A world premiere from celebrated playwright Eisa Davis — music, memory, and the stories women tell themselves. A meditation on time, art, and the spaces between notes.",
    playwright: "Eisa Davis",
    dates: "May 10 - June 28, 2026",
    runtime: "1 hour 50 minutes (no intermission)",
    gradient: "show-gradient-purple",
    featured: true,
  },
  {
    slug: "third-show",
    title: "The Lehman Trilogy",
    type: "DRAMA",
    description: "An epic journey through the American century — one family, three brothers, 160 years. From their arrival as immigrants to the collapse of their financial empire.",
    playwright: "Stefano Massini, adapted by Ben Power",
    dates: "September 15 - November 1, 2025",
    runtime: "3 hours 20 minutes (with two intermissions)",
    gradient: "show-gradient-navy",
    featured: true,
  },
  {
    slug: "holiday-spectacular",
    title: "A Christmas Carol",
    type: "HOLIDAY TRADITION",
    description: "Dickens' timeless tale of redemption, brought to life with stunning visuals and a heartwarming message for the season.",
    playwright: "Charles Dickens, adapted by Carey Perloff",
    dates: "November 28 - December 27, 2025",
    runtime: "2 hours 30 minutes (with intermission)",
    gradient: "show-gradient-amber",
    featured: false,
  },
  {
    slug: "spring-revival",
    title: "Angels in America",
    type: "MASTERPIECE REVIVAL",
    description: "Tony Kushner's Pulitzer Prize-winning epic about life, death, love, and politics in 1980s America.",
    playwright: "Tony Kushner",
    dates: "January 15 - February 28, 2026",
    runtime: "Part One: 3 hours 30 minutes, Part Two: 4 hours",
    gradient: "show-gradient-purple",
    featured: false,
  },
  {
    slug: "new-voices",
    title: "The Coast Starlight",
    type: "NEW PLAY",
    description: "A chance encounter on a train from Los Angeles to Seattle changes two strangers' lives forever.",
    playwright: "Keith Bunin",
    dates: "February 10 - March 15, 2026",
    runtime: "1 hour 45 minutes (no intermission)",
    gradient: "show-gradient-navy",
    featured: false,
  },
];

export default function SeasonPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            2025–26 Season
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A year of groundbreaking theater at A.C.T. From world premieres to beloved classics, 
            our season celebrates the power of storytelling.
          </p>
        </motion.div>

        {/* Season highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">
            Season Highlights
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {seasonShows.filter(show => show.featured).map((show, index) => (
              <ShowCard key={show.slug} show={show} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Full season */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">
            Full Season
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seasonShows.map((show, index) => (
              <ShowCard key={show.slug} show={show} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Season subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-charcoal p-8 rounded-sm text-center"
        >
          <h3 className="font-serif text-3xl font-bold mb-4">
            Season Subscriptions
          </h3>
          <p className="text-xl text-foreground/80 mb-6 max-w-2xl mx-auto">
            Save up to 25% when you subscribe to the full season. 
            Flexible packages available for 3, 4, or 6 shows.
          </p>
          <button className="px-8 py-4 bg-gold text-background font-medium rounded-sm hover:bg-gold/90 transition-colors text-lg">
            Subscribe Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}