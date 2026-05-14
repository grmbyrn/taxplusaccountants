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
    title: "Sole Traders",
    description:
      "If you trade under any name other than your own legal name, you are required by law to register that business name with the CRO. We handle the full RBN1 submission so you can trade with confidence.",
  },
  {
    title: "Freelancers & Consultants",
    description:
      "Operating under a trading name gives your freelance practice a more professional presence. We register your chosen name and advise on Revenue obligations that come with self-employment.",
  },
  {
    title: "Tradespeople",
    description:
      "From plumbers to electricians, tradespeople commonly use a business name distinct from their own. We ensure your name is registered, your certificate is in order, and your renewals never lapse.",
  },
  {
    title: "Small Partnerships",
    description:
      "Partnerships trading under a business name must register using the RBN1B form. Tax Plus Accountants prepares the correct form for your partnership structure and keeps all partner details up to date with the CRO.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Check",
    description:
      "We search the CRO register to confirm your preferred business name is available and does not conflict with an existing registered name or trade mark.",
  },
  {
    number: "02",
    title: "Register",
    description:
      "We prepare and submit your RBN1 (or RBN1B for partnerships) to the CRO. Registration is typically confirmed within 3–5 working days and your certificate is issued by post.",
  },
  {
    number: "03",
    title: "Trade",
    description:
      "With your Certificate of Registration in hand, you can open a business bank account, invoice clients, and trade legally. We also register you with Revenue for income tax and VAT if required.",
  },
];

export default function RegisterBusinessName() {
  return (
    <main>
      <ServicesHero
        label="Business Name Registration"
        heading="Register Your Business Name in Ireland — Quickly and Correctly"
        para="Tax Plus Accountants handles your CRO business name registration from start to finish — name availability check, RBN1 preparation, and Revenue set-up — so you can start trading without delay."
      />

      {/* What is Business Name Registration */}
      <motion.section {...fadeUp}>
        <section className="border-y border-slate-200 py-12 px-4">
          <div className="max-w-8xl mx-auto py-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
              What is Business Name Registration?
            </h2>
            <div className="space-y-4">
              <p className="text-lg font-medium leading-relaxed text-slate-800">
                Under Irish law, any sole trader or partnership that trades
                under a name other than the owner&apos;s own legal name must
                register that business name with the Companies Registration
                Office (CRO). Registration is completed using the{" "}
                <strong>RBN1 form</strong> (sole traders) or{" "}
                <strong>RBN1B form</strong> (partnerships). Once registered,
                the business name must be renewed with the CRO{" "}
                <strong>every year</strong> to remain active and in good
                standing.
              </p>
              <p className="leading-relaxed text-slate-700">
                Tax Plus Accountants manages the complete registration process
                — from checking name availability on the CRO register to
                preparing and filing the correct form on your behalf. Once your
                Certificate of Registration is issued, we also advise on and
                handle your Revenue registration for income tax, VAT, and PAYE
                as your business grows. We keep track of your annual renewal
                date so your registration never lapses without warning.
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
                Business Name Services We Provide
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Everything covered from the initial name search to your ongoing
                annual renewal.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceInfoCard
                heading="CRO Name Registration"
                paragraph="We prepare and submit your business name application to the Companies Registration Office, ensuring all required details — proprietor name, address, and nature of business — are correctly recorded on the public register."
                icon={""}
              />
              <ServiceInfoCard
                heading="Name Availability Check"
                paragraph="Before filing, we search the CRO register to confirm your chosen name is available. We also flag potential conflicts with similar existing names or registered trade marks that could create issues down the line."
                icon={""}
              />
              <ServiceInfoCard
                heading="RBN1 Form Preparation"
                paragraph="The RBN1 (sole trader) and RBN1B (partnership) forms must be completed accurately to avoid CRO rejection. We handle the paperwork in full and submit on your behalf, keeping a copy of all filings for your records."
                icon={""}
              />
              <ServiceInfoCard
                heading="Revenue Registration"
                paragraph="Registering your business name does not automatically register you with Revenue. We handle income tax self-assessment registration for sole traders and, where applicable, VAT and Employer PAYE registrations as your business expands."
                icon={""}
              />
              <ServiceInfoCard
                heading="Certificate of Registration"
                paragraph="Your CRO Certificate of Registration is the legal proof that your business name is registered. We ensure it reaches you promptly and advise on the display obligations — the registered name must appear on business stationery and your premises."
                icon={""}
              />
              <ServiceInfoCard
                heading="Annual Renewal Reminder"
                paragraph="Business name registrations must be renewed with the CRO every year. We track your renewal date and notify you in advance, preparing and submitting the renewal form so your registration stays current and your trading name remains protected."
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
                Business name registration is a legal requirement for anyone
                trading under a name that is not their own — here&apos;s who
                we typically help.
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
                A straightforward three-step process — from checking your name
                to trading legally, typically completed within one week.
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
                  From <span className="text-amber-600">€150</span>
                </p>
                <p className="mt-2 text-slate-600">
                  For a standard sole trader business name registration
                  including CRO filing. Contact us for a fixed-price quote
                  covering registration and Revenue set-up.
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
