
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedExperts from "@/components/TrustedExperts";
import AllInOneServices from "@/components/AllInOneServices";
import BestOption from "@/components/BestOption";
import ImpactfulNumbers from "@/components/ImpactfulNumbers";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustedExperts />
      <AllInOneServices />
      <BestOption />
      <ImpactfulNumbers />
      <CaseStudies />
      <FAQ />
      {/* <Blog /> */}
      <CTA />
      <Footer />
    </div>
  );
}
