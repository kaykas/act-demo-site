"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Users, Calendar, Star } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "MFA Program",
    description: "A three-year professional actor training program that combines rigorous studio work with performance opportunities.",
    duration: "3 years",
  },
  {
    icon: Users,
    title: "Young Conservatory",
    description: "Training for ages 8-19 in acting, voice, movement, and theater-making. Summer and school-year programs.",
    duration: "Ages 8-19",
  },
  {
    icon: Calendar,
    title: "Summer Training Congress",
    description: "Intensive summer program for theater professionals and advanced students from around the world.",
    duration: "Summer",
  },
  {
    icon: Star,
    title: "Studio A.C.T.",
    description: "Adult classes and workshops for all levels, from beginners to working professionals.",
    duration: "Year-round",
  },
];

export default function ConservatorySection() {
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
            The Conservatory
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Training the next generation of theater artists since 1965. 
            Our programs combine classical training with contemporary practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-charcoal p-6 rounded-sm card-hover gold-glow"
            >
              <div className="flex flex-col h-full">
                <program.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">
                  {program.title}
                </h3>
                <p className="text-foreground/80 mb-4 flex-grow">
                  {program.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-sm">
                    {program.duration}
                  </span>
                </div>
              </div>
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
            href="/conservatory"
            className="inline-flex items-center px-8 py-4 bg-gold text-background font-medium rounded-sm hover:bg-gold/90 transition-colors text-lg"
          >
            Explore Programs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}