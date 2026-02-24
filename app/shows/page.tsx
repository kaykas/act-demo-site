"use client";

import { motion } from "framer-motion";
import ShowCard from "@/components/ShowCard";

const allShows = [
  {
    slug: "kims-convenience",
    title: "Kim's Convenience",
    type: "COMEDY",
    description: "The beloved Korean-Canadian family comedy — warm, funny, and deeply human. A Soulpepper production in association with A.C.T.",
    playwright: "Ins Choi",
    dates: "March 15 - April 26, 2026",
    runtime: "2 hours 15 minutes (with intermission)",
    gradient: "show-gradient-amber",
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
  },
];

export default function ShowsPage() {
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
            All Shows
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Explore our current and upcoming productions. From world premieres to beloved classics, 
            each show offers a unique theatrical experience.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button className="px-6 py-2 bg-gold text-background font-medium rounded-sm hover:bg-gold/90 transition-colors">
            All Shows
          </button>
          <button className="px-6 py-2 bg-charcoal text-foreground font-medium rounded-sm hover:bg-charcoal/80 transition-colors">
            Current
          </button>
          <button className="px-6 py-2 bg-charcoal text-foreground font-medium rounded-sm hover:bg-charcoal/80 transition-colors">
            Upcoming
          </button>
          <button className="px-6 py-2 bg-charcoal text-foreground font-medium rounded-sm hover:bg-charcoal/80 transition-colors">
            Past Seasons
          </button>
        </motion.div>

        {/* Shows grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allShows.map((show, index) => (
            <ShowCard key={show.slug} show={show} index={index} />
          ))}
        </motion.div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-charcoal p-8 rounded-sm text-center"
        >
          <h3 className="font-serif text-3xl font-bold mb-4">
            Stay Updated
          </h3>
          <p className="text-xl text-foreground/80 mb-6 max-w-2xl mx-auto">
            Get early access to tickets, behind-the-scenes content, and special offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-3 bg-background border border-charcoal rounded-sm text-foreground focus:outline-none focus:border-gold"
            />
            <button className="px-6 py-3 bg-gold text-background font-medium rounded-sm hover:bg-gold/90 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}