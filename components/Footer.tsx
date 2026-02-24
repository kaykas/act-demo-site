import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const footerLinks = {
  Season: ["2025-26 Season", "Current Shows", "Upcoming Shows", "Past Seasons"],
  Conservatory: ["MFA Program", "Young Conservatory", "Summer Training", "Studio A.C.T."],
  About: ["Our Story", "Leadership", "Press", "Careers"],
  Rentals: ["The Geary Theater", "The Strand Theater", "Event Planning", "Contact"],
  Support: ["Donate", "Membership", "Corporate Partners", "Volunteer"],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter/X" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-charcoal mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-background font-serif font-bold text-2xl">A</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">A.C.T.</h3>
                <p className="text-sm text-foreground/70">American Conservatory Theater</p>
              </div>
            </div>
            <p className="text-foreground/80 text-sm mb-6">
              San Francisco&apos;s Home for Theater Since 1965
            </p>
            
            {/* Contact info */}
            <div className="space-y-2">
              <p className="text-foreground/70 text-sm">
                <span className="font-medium">Box Office:</span> 415.749.2228
              </p>
              <p className="text-foreground/70 text-sm">
                415 Geary St, San Francisco, CA 94102
              </p>
              <p className="text-foreground/70 text-sm">
                <span className="font-medium">Website:</span> act-sf.org
              </p>
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-serif text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-foreground/70 hover:text-gold text-sm transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social and copyright */}
        <div className="mt-12 pt-8 border-t border-charcoal">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-foreground/70 hover:text-gold transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-foreground/60 text-sm">
              <p>© {new Date().getFullYear()} American Conservatory Theater. All rights reserved.</p>
              <p className="mt-1">Tony Award-winning theater company and conservatory.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}