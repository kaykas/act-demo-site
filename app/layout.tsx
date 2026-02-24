import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MotionConfig } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "American Conservatory Theater | San Francisco",
  description: "San Francisco's home for theater since 1965. Tony Award-winning theater company and conservatory.",
  keywords: ["theater", "San Francisco", "A.C.T.", "American Conservatory Theater", "plays", "shows", "conservatory"],
  authors: [{ name: "American Conservatory Theater" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://act-sf.org",
    title: "American Conservatory Theater | San Francisco",
    description: "San Francisco's home for theater since 1965",
    siteName: "American Conservatory Theater",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "American Conservatory Theater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "American Conservatory Theater | San Francisco",
    description: "San Francisco's home for theater since 1965",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <MotionConfig reducedMotion="user">
          <Navigation />
          <main className="pt-16">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}