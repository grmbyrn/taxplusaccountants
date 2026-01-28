'use client';

import Button from './Button';
import SectionContainer from './SectionContainer';

const Hero = () => (
  <SectionContainer>
    <section className="py-10 lg:py-16">
      <div
        className="relative min-h-[60vh] flex items-center justify-start bg-cover bg-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1713947504870-681a2af15a1a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-indigo-900/40 z-0 rounded-2xl" />
        <div className="relative z-10 flex flex-col items-start justify-center min-h-[60vh] px-6 sm:px-8 py-10 animate-fadein">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl">
            Empowering Your Business with Expert Accounting
          </h1>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
            Personalized tax, audit, and consulting services for ambitious businesses. Grow with confidenceet us handle the numbers while you focus on success.
          </p>
          <div className="flex flex-row gap-4">
  <Button
    href="/contact"
    label="Contact us"
    bgColor="bg-primary-500"
    textColor="text-white"
  />
  <Button
    href="/services"
    label="Browse all services"
    bgColor="bg-white"
    textColor="text-neutral-800"
    className="border border-neutral-300"
  />
</div>
        </div>
      </div>
    </section>
  </SectionContainer>
);

export default Hero;
