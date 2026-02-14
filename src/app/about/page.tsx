'use client';
import Image from 'next/image';
import accountantsImage from '@/assets/accountants.jpg'; // Adjust path if needed
import TeamSection from '@/components/TeamSection';
import AboutOurCompany from '@/components/AboutOurCompany';
import Carousel from '@/components/Carousel';

const carouselItems = [
  {
    title: "Limited Companies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, a facilisis enim leo nec urna.dfsfd"
  },
  {
    title: "Partnerships",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur cursus, nisl erat aliquam erat, eu facilisis enim leo nec urna."
  },
  {
    title: "Sole Traders",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt cursus, nisi nisl aliquam erat, eu facilisis enim leo nec urna."
  },
  {
    title: "Start Ups",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, urna eu tincidunt cursus, nisi nisl aliquam erat, eu facilisis enim leo nec urna."
  }
];

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-20">
      {/* Heading and intro */}
      <AboutOurCompany />
      {/* Mission section */}
      <div className="mt-8 grid md:grid-cols-2 gap-0 items-stretch">
        {/* Image on left (desktop), below text (mobile) */}
        <div className="order-2 md:order-1 flex items-center justify-center rounded-b-2xl md:rounded-l-2xl md:rounded-bl-none overflow-hidden">
          <Image
            src={accountantsImage}
            alt="Accountants team"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full h-full"
            priority
          />
        </div>
        {/* Text on right (desktop), above image (mobile) */}
        <div className="order-1 md:order-2 flex flex-col justify-center py-10">
          <div className="border-l-4 border-primary pl-6 mb-4">
            <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
              Our mission
            </h3>
          </div>
          <p className="text-lg text-muted-foreground">
            We believe that every business deserves professional financial guidance, regardless of size. From sole proprietors to growing corporations, we provide personalized solutions that drive growth and ensure compliance.
          </p>
        </div>
      </div>
      {/* Section above carousel */}
      <div className="mt-16 mb-8">
        <div className="border-l-4 border-primary pl-6 mb-4">
          <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
            Types of businesses we help
          </h3>
        </div>
        <p className="text-lg text-muted-foreground">
          TaxPlus Accountants helps SMEs, including small Limited Companies, sole traders and partnerships, that provide a service or trade to maximise their accounts.
        </p>
      </div>
      {/* Carousel section */}
      <Carousel items={carouselItems} />
      {/* Team section */}
      <TeamSection />
    </section>
  );
};

export default About;