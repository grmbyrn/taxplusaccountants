// import { Button } from './ui/button';
// import heroImage from '@/assets/hero-accounting.jpg';
// import Image from 'next/image';
import { StarsIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-12 pb-12">
      <div className="container mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/80 backdrop-blur-sm px-4 py-1.5 text-sm text-amber-600 mb-8 transition-all duration-700 opacity-100 translate-y-0">
          <StarsIcon />
          Business &amp; Accounting Consultancy
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] transition-all duration-700 delay-100 opacity-100 translate-y-0">
          Better Accounts
          <br />
          <span className="text-amber-500">Start Here</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 opacity-100 translate-y-0">
          Better accounts, better decisions, better growth. TaxPlus Accountants
          provide tailored accounting, payroll, and tax solutions to help your
          business thrive.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-300 opacity-100 translate-y-0">
          <button
            data-slot="dialog-trigger"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 has-[&gt;svg]:px-4 bg-amber-500 hover:bg-amber-600 text-navy font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-amber-500/20"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-_r_3b_"
            data-state="closed"
          >
            Get Started Free
            <ArrowRight />
          </button>
          <a
            href="#services"
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 has-[&gt;svg]:px-4 rounded-full px-8 py-6 text-base border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-black"
          >
            Explore Services
          </a>
        </div>
      </div>
      <dl className="mt-16 flex items-center justify-center gap-12 sm:gap-16 transition-all duration-700 delay-500 opacity-100 translate-y-0">
        <div className="text-center">
          <dd className="text-3xl sm:text-4xl font-bold text-slate-900">
            500+
          </dd>
          <dt className="mt-1 text-sm text-slate-500">Businesses Served</dt>
        </div>
        <div className="text-center">
          <dd className="text-3xl sm:text-4xl font-bold text-slate-900">15+</dd>
          <dt className="mt-1 text-sm text-slate-500">Years Experience</dt>
        </div>
        <div className="text-center">
          <dd className="text-3xl sm:text-4xl font-bold text-slate-900">
            100%
          </dd>
          <dt className="mt-1 text-sm text-slate-500">Revenue Compliant</dt>
        </div>
      </dl>
    </section>
  );
};

export default Hero;
