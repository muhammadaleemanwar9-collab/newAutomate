import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
