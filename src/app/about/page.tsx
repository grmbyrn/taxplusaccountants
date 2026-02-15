"use client";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Text content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 text-left">
            About <span className="text-amber-500">TaxPlus Accountants</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-slate-700 mb-8 text-left">
            We offer expert business advice and support, delivered by friendly
            local teams as part of a dynamic national network. We can do more
            for you.
          </p>
          {/* Optional: Add a call-to-action or arrow here if needed */}
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <Image
            width={908}
            height={648}
            className="rounded-2xl w-full h-auto max-w-[500px] md:min-w-[380px] md:max-w-[420px] shadow-lg"
            alt="About Us"
            src="https://taxassistassets.ams3.cdn.digitaloceanspaces.com/client/2020/PageMenuDefault.jpg"
            priority
          />
        </div>
      </div>
      <div className="max-w-4xl md:max-w-5xl mx-auto py-8 px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
          Who We Are
        </h2>
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          I’m John Byrne, founder of TaxPlus Accountants. After 32 years working
          with a major multinational company, gaining extensive experience in
          budgeting, management accounts, payroll, auditing and financial
          management, I established TaxPlus in 2015 with one clear goal: to help
          small business owners take control of their finances.
        </p>
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          Over the years, I’ve seen how many businesses struggle not because
          they lack ambition, but because they don’t have clarity around their
          numbers. When you truly understand your accounts, you make better
          decisions. Better decisions lead to stronger, more profitable
          businesses.
        </p>
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          Since launching TaxPlus Accountants, we have supported hundreds of
          SMEs and start-ups in organising their finances, improving their
          financial visibility, and building sustainable growth.
        </p>
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          Together with my team, we provide practical, straightforward
          accounting support tailored to your business. Whether you need
          assistance with bookkeeping, payroll, taxation, or management accounts
          — or you want us to manage your entire accounting function — we’re
          here to help.
        </p>
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          Our aim is simple: to give you confidence in your numbers so you can
          focus on running and growing your business.
        </p>
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          Let’s work together to maximise your accounts and strengthen your
          business.
        </p>
      </div>
    </section>
  );
};

export default About;
