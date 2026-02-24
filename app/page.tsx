import Hero from "@/components/Hero";
import SeasonPreview from "@/components/SeasonPreview";
import AboutSection from "@/components/AboutSection";
import ConservatorySection from "@/components/ConservatorySection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SeasonPreview />
      <AboutSection />
      <ConservatorySection />
    </div>
  );
}