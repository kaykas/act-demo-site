"use client";

import { motion } from "framer-motion";
import { Award, History, Users, Globe, Heart, Star } from "lucide-react";

const milestones = [
  { year: "1965", event: "A.C.T. founded by William Ball" },
  { year: "1967", event: "First season in San Francisco" },
  { year: "1979", event: "Wins Tony Award for Outstanding Regional Theater" },
  { year: "1992", event: "The Geary Theater severely damaged in earthquake" },
  { year: "1996", event: "The Geary Theater reopens after $30M restoration" },
  { year: "2007", event: "The Strand Theater opens in Mid-Market" },
  { year: "2023", event: "Celebrates 58th anniversary season" },
];

const leadership = [
  {
    name: "Pam MacKinnon",
    role: "Artistic Director",
    tenure: "2018-2026",
    bio: "Tony Award-winning director who has led A.C.T. through a period of artistic innovation and community engagement.",
  },
  {
    name: "David Schmitz",
    role: "Interim Executive Director",
    tenure: "2025-Present",
    bio: "Seasoned arts administrator with extensive experience in theater management and fundraising.",
  },
  {
    name: "Carey Perloff",
    role: "Former Artistic Director",
    tenure: "1992-2018",
    bio: "Led A.C.T. for 25 years, overseeing the restoration of The Geary Theater and establishment of The Strand.",
  },
];

const values = [
  {
    icon: Star,
    title: "Artistic Excellence",
    description: "We produce work of the highest quality, from classic plays to groundbreaking new works.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Theater is a communal art form that brings people together to share stories and experiences.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "We embrace new forms, new voices, and new ways of making theater relevant to contemporary audiences.",
  },
  {
    icon: Heart,
    title: "Accessibility",
    description: "We believe theater should be accessible to all, regardless of background or economic means.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
            About A.C.T.
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            American Conservatory Theater is an essential gathering place that brings artists and communities together to inspire and provoke.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-8">
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-gold" />
              <span className="text-foreground/70">Tony Award-winning</span>
            </div>
            <div className="flex items-center space-x-2">
              <History className="w-6 h-6 text-gold" />
              <span className="text-foreground/70">58 years in San Francisco</span>
            </div>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-charcoal p-8 rounded-sm">
            <h2 className="font-serif text-3xl font-bold mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-xl text-foreground/80 text-center max-w-4xl mx-auto leading-relaxed">
              To engage, inspire, and provoke through theater of the highest artistic standards. 
              We believe in the power of live performance to transform individuals and communities, 
              and we are committed to nurturing the next generation of theater artists and audiences.
            </p>
          </div>
        </motion.div>

        {/* History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">
            Our History
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold/30" />
              
              {/* Milestones */}
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="bg-charcoal p-6 rounded-sm">
                      <div className="text-gold font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-foreground/80">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center relative z-10 mx-4">
                    <div className="w-3 h-3 bg-background rounded-full" />
                  </div>
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal p-6 rounded-sm text-center"
              >
                <value.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/80">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal p-6 rounded-sm text-center"
              >
                <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-serif font-bold text-gold">
                    {leader.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">
                  {leader.name}
                </h3>
                <p className="text-gold font-medium mb-2">
                  {leader.role}
                </p>
                <p className="text-foreground/70 text-sm mb-3">
                  {leader.tenure}
                </p>
                <p className="text-foreground/80">
                  {leader.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-charcoal p-8 rounded-sm text-center"
        >
          <h3 className="font-serif text-3xl font-bold mb-6">
            Our Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">200,000+</div>
              <p className="text-foreground/80">Bay Area residents served annually</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">1,000+</div>
              <p className="text-foreground/80">Productions since 1965</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">10,000+</div>
              <p className="text-foreground/80">Students trained in our conservatory</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}