"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, MapPin } from "lucide-react";

const shows = {
  "kims-convenience": {
    title: "Kim's Convenience",
    subtitle: "",
    type: "COMEDY",
    description: "The beloved Korean-Canadian family comedy — warm, funny, and deeply human. A Soulpepper production in association with A.C.T.",
    longDescription: `Mr. and Mrs. Kim run a convenience store in Toronto's Regent Park neighborhood. Their son Jung works as a manager at a car rental agency, while their daughter Janet is a photographer. The play explores the generational and cultural gaps between immigrant parents and their Canadian-born children with humor, heart, and authenticity.

Based on Ins Choi's own experiences growing up in a Korean-Canadian family, Kim's Convenience became an instant classic and spawned a hit television series. This production marks its West Coast premiere at A.C.T.`,
    playwright: "Ins Choi",
    director: "Wei Wong",
    dates: "March 15 - April 26, 2026",
    runtime: "2 hours 15 minutes (with intermission)",
    venue: "The Geary Theater",
    gradient: "show-gradient-amber",
    cast: ["John Kim as Appa", "Sarah Lee as Umma", "Michael Park as Jung", "Jessica Chen as Janet"],
    creativeTeam: ["Director: Wei Wong", "Set Design: Mina Lee", "Costume Design: Chen Wang", "Lighting Design: Alex Torres"],
    ticketPrices: ["Preview: $35-75", "Weekday: $45-95", "Weekend: $55-125"],
  },
  "girls-chance-music": {
    title: "Girls · Chance · Music",
    subtitle: "(||: Girls :||: Chance :||: Music :||)",
    type: "WORLD PREMIERE",
    description: "A world premiere from celebrated playwright Eisa Davis — music, memory, and the stories women tell themselves.",
    longDescription: `Three women—a composer, a pianist, and a singer—navigate the spaces between notes, memories, and identities. As they prepare for a performance, their personal histories intertwine with the music they create, revealing how art both conceals and reveals truth.

Eisa Davis's lyrical new play explores the ways women compose their lives, taking chances with music as their guide. This world premiere production features original music composed for the play.`,
    playwright: "Eisa Davis",
    director: "Eisa Davis",
    dates: "May 10 - June 28, 2026",
    runtime: "1 hour 50 minutes (no intermission)",
    venue: "The Strand Theater",
    gradient: "show-gradient-purple",
    cast: ["Maya James as The Composer", "Lena Chen as The Pianist", "Isabella Rossi as The Singer"],
    creativeTeam: ["Playwright/Director: Eisa Davis", "Music Composition: Eisa Davis", "Set Design: Rafael Mendoza", "Sound Design: Marcus Lee"],
    ticketPrices: ["Preview: $40-80", "Weekday: $50-100", "Weekend: $60-130"],
  },
  "third-show": {
    title: "The Lehman Trilogy",
    subtitle: "",
    type: "DRAMA",
    description: "An epic journey through the American century — one family, three brothers, 160 years.",
    longDescription: `In 1844, a young man from Bavaria arrives in New York City dreaming of a new life. He carries a single suitcase and a prayer shawl. Over the next 160 years, his family builds a financial empire that will come to symbolize both the American dream and its potential for catastrophe.

Spanning three generations and featuring just three actors playing all the roles, The Lehman Trilogy is a theatrical masterpiece that traces the rise and fall of the Lehman Brothers firm, from a small dry-goods store in Alabama to the global financial crisis of 2008.`,
    playwright: "Stefano Massini, adapted by Ben Power",
    director: "Sam Mendes",
    dates: "September 15 - November 1, 2025",
    runtime: "3 hours 20 minutes (with two intermissions)",
    venue: "The Geary Theater",
    gradient: "show-gradient-navy",
    cast: ["Simon Russell Beale as Henry Lehman", "Adam Godley as Mayer Lehman", "Ben Miles as Emanuel Lehman"],
    creativeTeam: ["Director: Sam Mendes", "Set Design: Es Devlin", "Video Design: Luke Halls", "Lighting Design: Jon Clark"],
    ticketPrices: ["Preview: $45-90", "Weekday: $55-110", "Weekend: $65-150"],
  },
};

interface ShowPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ShowPage({ params }: ShowPageProps) {
  const { slug } = await params;
  const show = shows[slug as keyof typeof shows];

  if (!show) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className={`${show.gradient} rounded-sm overflow-hidden mb-12`}>
          <div className="p-8 sm:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-background/20 backdrop-blur-sm text-white text-sm font-semibold tracking-wider uppercase rounded-sm">
                  {show.type}
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                {show.title}
              </h1>
              {show.subtitle && (
                <p className="text-xl text-white/80 mb-6">
                  {show.subtitle}
                </p>
              )}
              <p className="text-xl text-white/90 max-w-3xl">
                {show.description}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">About the Show</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {show.longDescription}
                  </p>
                </div>
              </div>

              {/* Cast */}
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4">Cast</h3>
                <ul className="space-y-2">
                  {show.cast.map((member, index) => (
                    <li key={index} className="text-foreground/80">
                      {member}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Creative Team */}
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4">Creative Team</h3>
                <ul className="space-y-2">
                  {show.creativeTeam.map((member, index) => (
                    <li key={index} className="text-foreground/80">
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-charcoal p-6 rounded-sm sticky top-24"
            >
              <h3 className="font-serif text-2xl font-bold mb-6">Show Details</h3>
              
              <div className="space-y-6">
                {/* Details */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Dates</p>
                      <p className="text-foreground/80">{show.dates}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Runtime</p>
                      <p className="text-foreground/80">{show.runtime}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Playwright</p>
                      <p className="text-foreground/80">{show.playwright}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Venue</p>
                      <p className="text-foreground/80">{show.venue}</p>
                    </div>
                  </div>
                </div>

                {/* Ticket prices */}
                <div>
                  <h4 className="font-serif text-lg font-bold mb-3">Ticket Prices</h4>
                  <ul className="space-y-2">
                    {show.ticketPrices.map((price, index) => (
                      <li key={index} className="text-foreground/80">
                        {price}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA buttons */}
                <div className="space-y-3 pt-4">
                  <button className="w-full px-6 py-3 bg-gold text-background font-medium rounded-sm hover:bg-gold/90 transition-colors">
                    Buy Tickets
                  </button>
                  <button className="w-full px-6 py-3 border border-gold text-gold font-medium rounded-sm hover:bg-gold/10 transition-colors">
                    Add to Calendar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}