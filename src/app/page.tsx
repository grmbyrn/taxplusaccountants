"use client";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
    </main>
  );
}
