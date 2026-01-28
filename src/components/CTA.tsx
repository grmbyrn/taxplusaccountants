'use client';
import Button from "./Button";
import SectionContainer from './SectionContainer';

const CTA = () => (
  <SectionContainer>
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-900/90 to-indigo-900/80 py-16 lg:py-24 rounded-2xl text-center mb-12 lg:mb-20"
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
        Take Control of Your Business Finances Today
      </h2>
      <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
        Our team of experts will guide you through tax, audit, and consulting, so you can focus on growing your business with confidence.
      </p>
      <div className="flex flex-row justify-center gap-4">
  <Button
    label="Get Started"
    href="/contact"
    bgColor="bg-primary-500"
    textColor="text-white"
    className=""
  />
  <Button
    label="Learn More"
    href="/services"
    bgColor="bg-white border border-neutral-300"
    textColor="text-neutral-800"
    className=""
  />
</div>
    </section>
  </SectionContainer>
);

export default CTA;