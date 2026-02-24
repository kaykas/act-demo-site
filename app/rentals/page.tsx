"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building, Users, Calendar, Mail, Phone, MapPin } from "lucide-react";

const venues = [
  {
    name: "The Geary Theater",
    description: "A historic 1,040-seat proscenium theater in the heart of San Francisco's Theater District.",
    capacity: "1,040 seats",
    features: [
      "Full proscenium stage with fly system",
      "State-of-the-art sound and lighting",
      "Orchestra pit (accommodates 40 musicians)",
      "Dressing rooms for 40+ performers",
      "Backstage loading dock",
      "Full bar and concession facilities",
    ],
    idealFor: [
      "Broadway-scale productions",
      "Concerts and musical performances",
      "Corporate events and galas",
      "Film screenings and premieres",
    ],
  },
  {
    name: "The Strand Theater",
    description: "A flexible 283-seat black box theater in the Mid-Market arts corridor.",
    capacity: "Up to 283 seats (configurable)",
    features: [
      "Fully flexible seating and staging",
      "Intimate thrust or in-the-round configurations",
      "Digital projection capabilities",
      "Green room and rehearsal space",
      "Street-level accessibility",
      "Adjacent lobby and bar area",
    ],
    idealFor: [
      "Experimental and immersive theater",
      "Panel discussions and conferences",
      "Film festivals and screenings",
      "Rehearsals and workshops",
    ],
  },
];

const eventTypes = [
  "Corporate Event",
  "Fundraiser/Gala",
  "Theater Production",
  "Concert/Performance",
  "Film Screening",
  "Conference",
  "Wedding",
  "Other",
];

export default function RentalsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    eventType: "",
    preferredVenue: "",
    eventDate: "",
    estimatedAttendees: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! Our rentals team will contact you within 2 business days.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      eventType: "",
      preferredVenue: "",
      eventDate: "",
      estimatedAttendees: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Rent Our Theaters
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Host your event in one of San Francisco&apos;s most iconic theatrical spaces. 
            From intimate gatherings to grand productions, our venues offer unparalleled atmosphere and technical capabilities.
          </p>
        </motion.div>

        {/* Venues */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">
            Our Venues
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal p-8 rounded-sm card-hover gold-glow"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Building className="w-8 h-8 text-gold" />
                  <h3 className="font-serif text-3xl font-bold">{venue.name}</h3>
                </div>
                
                <p className="text-foreground/80 mb-6">{venue.description}</p>
                
                <div className="flex items-center space-x-2 mb-6">
                  <Users className="w-5 h-5 text-gold" />
                  <span className="font-medium">Capacity:</span>
                  <span className="text-foreground/80">{venue.capacity}</span>
                </div>

                <div className="mb-6">
                  <h4 className="font-serif text-lg font-bold mb-3">Features</h4>
                  <ul className="space-y-2">
                    {venue.features.map((feature, idx) => (
                      <li key={idx} className="text-foreground/70 flex items-start">
                        <span className="text-gold mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold mb-3">Ideal For</h4>
                  <div className="flex flex-wrap gap-2">
                    {venue.idealFor.map((type, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-sm"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-12 text-center">
              Inquire About Rentals
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-charcoal rounded-sm text-foreground focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-charcoal rounded-sm text-foreground focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-charcoal rounded-sm text-foreground focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-charcoal rounded-sm text-foreground focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-charcoal rounded-sm text-foreground focus:outline-none focus:border-gold"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Venue
                  </label>
                  <select
                    name="preferredVenue"
                    value={formData.preferredVenue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-charcoal rounded-sm text-foreground focus:outline-none focus:border-gold"
                  >
                    <option value="">Select venue</option>
                    <option value="geary">The Geary Theater</option>
                    <option value="strand">The Strand Theater</option>
                    <option value="either">Either venue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-charcoal rounded-sm text-foreground focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Estimated Attendees
                  </label>
                  <input
                    type="number"
                    name="estimatedAttendees"
                    value={formData.estimatedAttendees}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-3 bg-background border border-charcoal rounded-sm text-foreground focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-charcoal rounded-sm text-foreground focus:outline-none focus:border-gold"
                  placeholder="Tell us about your event, including any specific requirements or questions..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gold text-background font-medium rounded-sm hover:bg-gold/90 transition-colors text-lg"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-charcoal p-8 rounded-sm text-center"
        >
          <h3 className="font-serif text-3xl font-bold mb-6">
            Contact Our Rentals Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-gold mb-3" />
              <p className="font-medium">Phone</p>
              <p className="text-foreground/80">415.749.2228</p>
              <p className="text-sm text-foreground/60">Ext. 123</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-gold mb-3" />
              <p className="font-medium">Email</p>
              <p className="text-foreground/80">rentals@act-sf.org</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-gold mb-3" />
              <p className="font-medium">Address</p>
              <p className="text-foreground/80">415 Geary St</p>
              <p className="text-foreground/80">San Francisco, CA 94102</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}