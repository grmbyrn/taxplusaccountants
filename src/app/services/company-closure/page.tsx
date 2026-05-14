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
    title: "Dormant Companies",
    description:
      "A company that has ceased trading but remains on the CRO register still has annual filing obligations. Voluntary strike-off removes those obligations and prevents late filing penalties from accumulating.",
  },
  {
    title: "Retiring Directors",
    description:
      "If you are stepping back from business and no longer need your company, closing it properly — rather than leaving it dormant — protects you from future compliance issues and potential personal liability.",
  },
  {
    title: "Businesses Winding Down",
    description:
      "Where a company is solvent and all debts are cleared, voluntary strike-off under the Companies Act 2014 is a cost-effective route to closure. We manage the full process, from final accounts to CRO removal.",
  },
  {
    title: "Holding Companies No Longer Needed",
    description:
      "Group restructures often leave holding companies with no ongoing purpose. Tax Plus Accountants prepares the final accounts, obtains Revenue clearance, and files the H15 form to remove the entity from the register cleanly.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Review",
    description:
      "We assess the company&apos;s current position — outstanding filings, tax liabilities, bank balances, and any remaining creditors — to confirm voluntary strike-off is the appropriate route.",
  },
  {
    number: "02",
    title: "Clear",
    description:
      "We prepare final accounts and tax returns, settle any outstanding Revenue liabilities, and obtain a Tax Clearance Certificate. All VAT, PAYE, and CT registrations are deregistered with Revenue.",
  },
  {
    number: "03",
    title: "Close",
    description:
      "We file the H15 voluntary strike-off application with the CRO. Once published in the CRO Gazette and the objection period passes, the company is formally dissolved and removed from the register.",
  },
];

export default function CloseACompany() {
  return (
    <main>
      <ServicesHero
        label="Company Closure Specialists"
        heading="Close Your Irish Company Correctly — Without the Compliance Headache"
        para="Tax Plus Accountants manages the complete voluntary strike-off process — final accounts, Revenue clearance, and CRO filing — so your company is dissolved cleanly and your obligations end."
      />

      {/* What is Company Closure */}
      <motion.section {...fadeUp}>
        <section className="border-y border-slate-200 py-12 px-4">
          <div className="max-w-8xl mx-auto py-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
              What is Company Closure?
            </h2>
            <div className="space-y-4">
              <p className="text-lg font-medium leading-relaxed text-slate-800">
                Closing an Irish limited company involves more than simply
                stopping trade. Under the{" "}
                <strong>Companies Act 2014</strong>, a solvent company can be
                removed from the CRO register through{" "}
                <strong>voluntary strike-off</strong>, using the{" "}
                <strong>H15 form</strong>. This is the most common and
                cost-effective route for small companies with no outstanding
                debts. Where a company is insolvent, a formal{" "}
                <strong>liquidation</strong> is required — a more involved
                process overseen by a licensed insolvency practitioner.
              </p>
              <p className="leading-relaxed text-slate-700">
                Tax Plus Accountants handles voluntary strike-off from start to
                finish. We prepare the final set of accounts, file all
                outstanding tax returns, obtain Revenue clearance, deregister
                the company for VAT and PAYE, and submit the H15 application to
                the CRO. Once the strike-off is published in Iris Oifigiúil and
                the statutory objection period passes, your company is formally
                dissolved. We also advise on any final shareholder distributions
                and the Capital Gains Tax implications that may arise on
                liquidation.
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
                Company Closure Services We Provide
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Everything needed to close your company correctly — from the
                final accounts to the CRO dissolution notice.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceInfoCard
                heading="Voluntary Strike-Off"
                paragraph="We manage the full H15 voluntary strike-off application under the Companies Act 2014, including director declarations, CRO submission, and monitoring the Gazette publication and objection period through to formal dissolution."
                icon={""}
              />
              <ServiceInfoCard
                heading="Revenue Clearance"
                paragraph="Before the CRO will accept a strike-off application, all Revenue liabilities must be settled and a Tax Clearance Certificate obtained. We file any outstanding CT1, VAT3, and P35 returns and clear the company&apos;s tax record with Revenue."
                icon={""}
              />
              <ServiceInfoCard
                heading="Final Accounts Preparation"
                paragraph="We prepare the company&apos;s final set of financial statements up to the cessation date, ensuring they accurately reflect the wind-down position and satisfy both Companies Act requirements and Revenue filing obligations."
                icon={""}
              />
              <ServiceInfoCard
                heading="CRO Filing"
                paragraph="All outstanding annual returns and financial statements must be filed with the CRO before a strike-off can proceed. We audit the company&apos;s filing history, bring everything up to date, and submit the H15 form on your behalf."
                icon={""}
              />
              <ServiceInfoCard
                heading="Shareholder Distributions"
                paragraph="Any cash or assets remaining after all liabilities are settled can be distributed to shareholders. We calculate the most tax-efficient method — whether a capital distribution or dividend — and advise on any Capital Gains Tax exposure under Entrepreneur Relief."
                icon={""}
              />
              <ServiceInfoCard
                heading="Company Restoration"
                paragraph="If a company has already been struck off and needs to be restored to the register — to pursue a legal claim, transfer assets, or correct an error — we prepare and file the restoration application with the CRO and manage the High Court process where required."
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
                Voluntary strike-off is suitable for any solvent company that
                has ceased trading and has no outstanding creditors.
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
                A clear three-step process — from reviewing the company&apos;s
                position to formal dissolution on the CRO register.
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
                  From <span className="text-amber-600">€500</span>
                </p>
                <p className="mt-2 text-slate-600">
                  For a standard voluntary strike-off including final accounts
                  and CRO H15 filing. Fees vary depending on the number of
                  outstanding returns — contact us for a fixed-price quote.
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
