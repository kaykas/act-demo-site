"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Season", href: "/season" },
  { name: "Shows", href: "/shows" },
  { name: "Conservatory", href: "/conservatory" },
  { name: "Rentals", href: "/rentals" },
  { name: "About", href: "/about" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-background font-serif font-bold text-lg">A</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-serif text-xl font-semibold">A.C.T.</span>
                <span className="text-sm text-foreground/70 ml-2">San Francisco</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors hover:text-gold ${
                    pathname === item.href ? "text-gold" : "text-foreground/80"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                    />
                  )}
                </Link>
              ))}
              <button className="px-4 py-2 bg-gold text-background text-sm font-medium rounded-sm hover:bg-gold/90 transition-colors">
                Get Tickets
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-foreground/80 hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-charcoal border-b border-charcoal md:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium py-2 transition-colors ${
                      pathname === item.href
                        ? "text-gold border-l-4 border-gold pl-4"
                        : "text-foreground/80 hover:text-gold pl-4"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="mt-4 px-6 py-3 bg-gold text-background text-lg font-medium rounded-sm hover:bg-gold/90 transition-colors">
                  Get Tickets
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}