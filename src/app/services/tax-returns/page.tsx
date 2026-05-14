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
      "If you earn self-employed income, Revenue requires you to file a Form 11 each year. We handle the full return, including PRSI Class S and USC calculations.",
  },
  {
    title: "Landlords",
    description:
      "Rental income must be declared annually. We ensure your allowable expenses — mortgage interest, repairs, insurance — are correctly offset to reduce your liability.",
  },
  {
    title: "Company Directors",
    description:
      "Directors with a proprietary interest must file a personal Form 11 in addition to the company CT1. We co-ordinate both filings to avoid double-taxation issues.",
  },
  {
    title: "Contractors & Consultants",
    description:
      "Operating through a personal service company or as a sole trader? We ensure you meet the 31 October self-assessment deadline and avail of all relevant deductions.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Gather",
    description:
      "We send you a simple checklist. You share income details, receipts, and any Revenue correspondence — we do the heavy lifting from there.",
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Our team calculates your tax liability, applies all allowable credits and reliefs, and reviews for any Revenue compliance issues before filing.",
  },
  {
    number: "03",
    title: "File",
    description:
      "We submit your return directly to Revenue via ROS, confirm the filing, and provide you with a copy for your records.",
  },
];

export default function TaxReturns() {
  return (
    <main>
      <ServicesHero
        label="Tax Return Specialists"
        heading="Personal & Business Tax Returns — Filed on Time, Every Time"
        para="From self-assessed income tax for sole traders to CT1 corporation tax returns for limited companies, Tax Plus Accountants ensures every return is accurate, compliant, and submitted ahead of Revenue deadlines."
      />

      {/* What are Tax Return Services */}
      <motion.section {...fadeUp}>
        <section className="border-y border-slate-200 py-12 px-4">
          <div className="max-w-8xl mx-auto py-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
              What are Tax Return Services?
            </h2>
            <div className="space-y-4">
              <p className="text-lg font-medium leading-relaxed text-slate-800">
                Tax return services cover the preparation and submission of all
                statutory filings required by Irish Revenue — including Form 11
                and Form 12 for individuals, and Form CT1 for limited companies.
                The self-assessment deadline for most taxpayers is{" "}
                <strong>31 October each year</strong>, with a ROS extension
                typically available to mid-November for online filers.
              </p>
              <p className="leading-relaxed text-slate-700">
                At Tax Plus Accountants, John Byrne and the team manage the
                complete return process for sole traders, landlords, company
                directors, and limited companies across Drogheda and nationwide.
                We work directly within Revenue&apos;s Online Service (ROS),
                calculate your exact liability, apply every eligible credit and
                relief, and keep you informed at every step. Late filing
                surcharges and interest can be avoided with the right support —
                that&apos;s what we&apos;re here for.
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
                Tax Return Services We Provide
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Full-spectrum Revenue compliance for individuals and businesses
                of every size.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceInfoCard
                heading="Self-Assessment Returns"
                paragraph="We prepare and file Form 11 for self-employed individuals and Form 12 for PAYE workers with additional income. Covers all income sources — trading, rental, foreign, and investment — with accurate USC and PRSI calculations."
                icon={""}
              />
              <ServiceInfoCard
                heading="Company Tax Returns (CT1)"
                paragraph="We handle the annual CT1 corporation tax return for Irish limited companies, including computation of taxable profits, R&D credits, and capital allowances. Filed within 9 months of your accounting year-end."
                icon={""}
              />
              <ServiceInfoCard
                heading="VAT Returns"
                paragraph="Preparation and submission of bi-monthly, quarterly, or annual VAT3 returns via ROS. We reconcile your VAT on sales and purchases, handle flat-rate farmer schemes, and flag any cashflow timing issues."
                icon={""}
              />
              <ServiceInfoCard
                heading="PAYE / Payroll Returns"
                paragraph="Monthly or weekly P30 payroll submissions and year-end P35 reconciliations, ensuring your employer PAYE, PRSI, and USC obligations are met on time and penalties are avoided."
                icon={""}
              />
              <ServiceInfoCard
                heading="Capital Gains Tax"
                paragraph="Calculation and filing of CGT returns on the disposal of assets — property, shares, or business interests. We identify available reliefs such as Entrepreneur Relief and Principal Private Residence relief to minimise your exposure."
                icon={""}
              />
              <ServiceInfoCard
                heading="Revenue Audit Support"
                paragraph="If Revenue selects you for a PAYE or self-assessment audit, John Byrne will represent you throughout the process — reviewing correspondence, negotiating settlements, and protecting your interests at every stage."
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
                We work with a wide range of Irish taxpayers — if you earn
                income outside of PAYE, you most likely need to file.
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
                A straightforward three-step process — from document collection
                to confirmed Revenue submission.
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
                  From <span className="text-amber-600">€250</span>
                </p>
                <p className="mt-2 text-slate-600">
                  For a standard self-assessment return. Fees vary based on
                  complexity — contact us for a fixed-price quote.
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
