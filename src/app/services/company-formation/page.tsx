"use client";
import { motion, Transition } from "framer-motion";
import Contact from "@/components/Contact";
import ServiceInfoCard from "@/components/ServiceInfoCard";
import ServicesHero from "@/components/ServicesHero";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: ({ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } as unknown) as Transition,
  viewport: { once: true, amount: 0.3 },
};

const WHO_FOR = [
  {
    title: "Startups & New Ventures",
    description:
      "Incorporating from day one limits your personal liability and projects a professional image to clients and investors. We handle the full CRO registration so you can focus on building your business.",
  },
  {
    title: "Contractors Going Limited",
    description:
      "Moving from sole trader to limited company can reduce your overall tax burden. We advise on the optimal share structure and handle the transition end-to-end, including Revenue registration.",
  },
  {
    title: "Foreign Companies Entering Ireland",
    description:
      "Setting up an Irish subsidiary or branch requires CRO registration and compliance with the Companies Act 2014. Tax Plus Accountants manages the process and acts as your local registered office.",
  },
  {
    title: "Sole Traders Incorporating",
    description:
      "Transferring an existing trade into a limited company involves more than CRO paperwork — there are tax implications to plan around. We guide you through incorporation reliefs to protect the value you&apos;ve built.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Consult",
    description:
      "We discuss your goals, advise on the right company type (typically a private limited company — LTD), agree the share structure, and confirm director and secretary appointments.",
  },
  {
    number: "02",
    title: "Register",
    description:
      "We draft your Constitution, prepare all CRO forms (A1), and submit your application. Most incorporations are approved within 3–5 working days of CRO receipt.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Once your Certificate of Incorporation arrives, we register the company for Corporation Tax, VAT, and PAYE with Revenue, and ensure your statutory books are in order.",
  },
];

export default function CompanyFormation() {
  return (
    <main>
      <ServicesHero
        label="Company Formation Specialists"
        heading="Incorporate in Ireland — Fast, Correct, and Fully Compliant"
        para="Tax Plus Accountants handles the complete company formation process — from CRO registration and Constitution drafting to Revenue set-up — so your new limited company is ready to trade without delay."
      />

      {/* What is Company Formation */}
      <motion.section {...fadeUp}>
        <section className="border-y border-slate-200 py-12 px-4">
          <div className="max-w-8xl mx-auto py-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
              What is Company Formation?
            </h2>
            <div className="space-y-4">
              <p className="text-lg font-medium leading-relaxed text-slate-800">
                Company formation is the legal process of registering a new
                business entity with the Companies Registration Office (CRO)
                under the{" "}
                <strong>Companies Act 2014</strong>. The most common structure
                for Irish SMEs is the private limited company (LTD), which
                provides limited liability protection, separates personal and
                business finances, and offers significant tax planning
                opportunities over sole trader status.
              </p>
              <p className="leading-relaxed text-slate-700">
                At Tax Plus Accountants, we manage every step of the process —
                drafting your company Constitution, filing the A1 incorporation
                form with the CRO, advising on share structure and director
                appointments, and registering the new entity with Revenue for
                Corporation Tax, VAT, and PAYE. We also provide a registered
                office address service so your statutory correspondence is
                handled professionally from day one.
              </p>
            </div>
          </div>
        </section>
      </motion.section>

      {/* Feature Cards */}
      <motion.section {...fadeUp}>
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Company Formation Services We Provide
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Everything you need to go from idea to incorporated — handled
                by our experienced team.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceInfoCard
                heading="CRO Registration"
                paragraph="We prepare and file your A1 incorporation form with the Companies Registration Office, selecting the correct company type and ensuring all director, secretary, and registered office details are accurate from the outset."
                icon={""}
              />
              <ServiceInfoCard
                heading="Constitution & Memorandum"
                paragraph="Under the Companies Act 2014, every LTD company requires a Constitution. We draft a bespoke document that covers your objects, member rights, and governance rules — avoiding the one-size-fits-all template pitfalls."
                icon={""}
              />
              <ServiceInfoCard
                heading="Share Structure"
                paragraph="Getting your share structure right at incorporation protects future flexibility. We advise on ordinary vs. preference shares, appropriate authorised capital, and how to allocate shares between founders or family members tax-efficiently."
                icon={""}
              />
              <ServiceInfoCard
                heading="Registered Office Address"
                paragraph="Every Irish company must have a registered office address in the state. Tax Plus Accountants provides this service, ensuring all CRO and Revenue statutory correspondence is received, logged, and forwarded to you promptly."
                icon={""}
              />
              <ServiceInfoCard
                heading="Revenue Registration (VAT & PAYE)"
                paragraph="Incorporation alone doesn't register you with Revenue. We handle Corporation Tax, VAT, and Employer PAYE registrations so your company is fully compliant and ready to invoice from day one — with no gaps in your obligations."
                icon={""}
              />
              <ServiceInfoCard
                heading="Company Secretary"
                paragraph="Irish law requires every company to have a secretary. We can act as company secretary on your behalf, maintaining your statutory registers, filing annual returns (B1) with the CRO on time, and keeping your company in good standing."
                icon={""}
              />
            </div>
          </div>
        </section>
      </motion.section>

      {/* Who this is for */}
      <motion.section {...fadeUp}>
        <section className="border-y border-slate-200 py-16 px-4">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Who This Is For
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We work with founders, contractors, and established businesses
                at every stage of the incorporation journey.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {WHO_FOR.map(({ title, description }) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.section>

      {/* 3-Step Process */}
      <motion.section {...fadeUp}>
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                From initial consultation to a fully operational limited company
                — typically completed within one week.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {STEPS.map(({ number, title, description }) => (
                <div key={number} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 text-amber-700 text-xl font-bold mb-4">
                    {number}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            {/* Pricing indicator */}
            <div className="mt-14 text-center">
              <div className="inline-block rounded-2xl border border-amber-300 bg-amber-50 px-8 py-6">
                <p className="text-sm font-medium uppercase tracking-widest text-amber-700 mb-1">
                  Pricing
                </p>
                <p className="text-4xl font-bold text-slate-900">
                  From <span className="text-amber-600">€350</span>
                </p>
                <p className="mt-2 text-slate-600">
                  For a standard private limited company formation including CRO
                  filing and Constitution. Contact us for a fixed-price quote
                  tailored to your requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.section>

      <Contact />
    </main>
  );
}
