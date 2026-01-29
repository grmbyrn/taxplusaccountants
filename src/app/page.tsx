import Hero from "@/components/Hero";
import TrustedExperts from "@/components/TrustedExperts";
import AllInOneServices from "@/components/AllInOneServices";
import BestOption from "@/components/BestOption";
import ImpactfulNumbers from "@/components/ImpactfulNumbers";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrustedExperts />
      <AllInOneServices />
      <BestOption />
      <ImpactfulNumbers />
      <Testimonials />
      <FAQ />
      {/* <Blog /> */}
      <CTA />
    </div>
  );
}
