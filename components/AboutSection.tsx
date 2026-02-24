"use client";

import { motion } from "framer-motion";
import { Award, Users, Calendar } from "lucide-react";

const stats = [
  { icon: Award, label: "Tony Award-winning", value: "1" },
  { icon: Calendar, label: "Years in San Francisco", value: "58" },
  { icon: Users, label: "Bay Area residents served annually", value: "200,000+" },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              About A.C.T.
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              American Conservatory Theater is an essential gathering place that brings artists and communities together to inspire and provoke.
            </p>
            <div className="space-y-4">
              <p className="text-foreground/80">
                <span className="font-medium">Artistic Director:</span> Pam MacKinnon (Tony Award-winning) — stepping down end of 2025-26 season
              </p>
              <p className="text-foreground/80">
                <span className="font-medium">Interim Executive Director:</span> David Schmitz
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background/50 p-6 rounded-sm text-center"
                >
                  <div className="flex flex-col items-center">
                    <stat.icon className="w-8 h-8 text-gold mb-3" />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-foreground/70">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission statement */}
            <div className="bg-background/30 p-6 rounded-sm border-l-4 border-gold">
              <p className="text-foreground/80 italic">
                &ldquo;We believe theater is a vital, living art that has the power to change lives. 
                Through our productions and training programs, we cultivate the next generation of 
                theater artists and audiences.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}