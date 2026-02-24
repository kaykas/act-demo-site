"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Calendar, Star, Award, BookOpen } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "MFA Program",
    description: "A three-year professional actor training program that combines rigorous studio work with performance opportunities.",
    duration: "3 years",
    details: [
      "Small class sizes with individualized attention",
      "Training in classical and contemporary techniques",
      "Performance opportunities in A.C.T. productions",
      "Professional development and career guidance",
      "International study opportunities",
    ],
    applyLink: "#",
  },
  {
    icon: Users,
    title: "Young Conservatory",
    description: "Training for ages 8-19 in acting, voice, movement, and theater-making. Summer and school-year programs.",
    duration: "Ages 8-19",
    details: [
      "Age-appropriate curriculum for each developmental stage",
      "Classes in acting, voice, movement, and improvisation",
      "Performance opportunities throughout the year",
      "Summer intensive programs",
      "College preparation and audition coaching",
    ],
    applyLink: "#",
  },
  {
    icon: Calendar,
    title: "Summer Training Congress",
    description: "Intensive summer program for theater professionals and advanced students from around the world.",
    duration: "Summer",
    details: [
      "4-6 week intensive training program",
      "Master classes with A.C.T. faculty and guest artists",
      "Focus on specific techniques or playwrights",
      "International participant community",
      "Performance showcase at conclusion",
    ],
    applyLink: "#",
  },
  {
    icon: Star,
    title: "Studio A.C.T.",
    description: "Adult classes and workshops for all levels, from beginners to working professionals.",
    duration: "Year-round",
    details: [
      "Evening and weekend classes for working adults",
      "Beginner to advanced levels",
      "Specific focus areas: Shakespeare, audition technique, playwriting",
      "One-day workshops with guest artists",
      "Flexible scheduling options",
    ],
    applyLink: "#",
  },
];

const faculty = [
  {
    name: "Pam MacKinnon",
    role: "Artistic Director",
    bio: "Tony Award-winning director and longtime A.C.T. artistic leader.",
  },
  {
    name: "David Schmitz",
    role: "Interim Executive Director",
    bio: "Seasoned arts administrator with decades of experience in theater management.",
  },
  {
    name: "Carey Perloff",
    role: "Former Artistic Director",
    bio: "Led A.C.T. for 25 years and continues to teach and direct in the conservatory.",
  },
  {
    name: "Stephen Buescher",
    role: "Head of Movement",
    bio: "Physical theater specialist with international training and performance experience.",
  },
];

export default function ConservatoryPage() {
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
            The Conservatory
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Training the next generation of theater artists since 1965. 
            Our programs combine classical training with contemporary practice.
          </p>
          <div className="flex items-center justify-center space-x-4 text-foreground/70">
            <Award className="w-6 h-6" />
            <span>Tony Award-winning training</span>
            <BookOpen className="w-6 h-6" />
            <span>58 years of excellence</span>
          </div>
        </motion.div>

        {/* Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">
            Programs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal p-8 rounded-sm card-hover gold-glow"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <program.icon className="w-10 h-10 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      {program.title}
                    </h3>
                    <p className="text-foreground/80 mb-3">
                      {program.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-sm">
                      {program.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {program.details.map((detail, idx) => (
                    <li key={idx} className="text-foreground/70 flex items-start">
                      <span className="text-gold mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <button className="px-6 py-3 border border-gold text-gold font-medium rounded-sm hover:bg-gold/10 transition-colors w-full">
                  Learn More & Apply
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Faculty */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">
            Faculty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal p-6 rounded-sm text-center"
              >
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-gold">
                    {person.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">
                  {person.name}
                </h3>
                <p className="text-gold text-sm font-medium mb-3">
                  {person.role}
                </p>
                <p className="text-foreground/70 text-sm">
                  {person.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-charcoal p-8 rounded-sm text-center"
        >
          <h3 className="font-serif text-3xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-xl text-foreground/80 mb-6 max-w-2xl mx-auto">
            Join a community of passionate artists and receive training from some of the best in the industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gold text-background font-medium rounded-sm hover:bg-gold/90 transition-colors">
              Request Information
            </button>
            <button className="px-8 py-4 border border-gold text-gold font-medium rounded-sm hover:bg-gold/10 transition-colors">
              Schedule a Tour
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}