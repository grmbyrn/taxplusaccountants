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
    title: "Small Businesses with Staff",
    description:
      "Managing payroll in-house takes time and carries real compliance risk. Tax Plus Accountants runs your payroll each period, files payroll submissions with Revenue in real time, and keeps you fully up to date with PAYE Modernisation requirements.",
  },
  {
    title: "Startups Hiring Their First Employee",
    description:
      "Taking on your first employee triggers PAYE, PRSI, and USC obligations from day one. We handle the Revenue employer registration, set up your payroll, and ensure your first payslip is issued correctly and on time.",
  },
  {
    title: "Companies Switching Payroll Provider",
    description:
      "Changing payroll provider mid-year can be complex. We manage the migration of employee records, historical payroll data, and outstanding Revenue Payroll Notifications so there is no gap in reporting or employee payments.",
  },
  {
    title: "Seasonal Businesses",
    description:
      "Hospitality, agriculture, and retail businesses often have fluctuating headcounts. We scale your payroll up and down as required, handling temporary staff correctly under Revenue&apos;s real-time reporting rules.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Set Up",
    description:
      "We register you as an employer with Revenue (if not already done), collect employee details and tax credit certificates, retrieve Revenue Payroll Notifications (RPNs), and configure your payroll schedule.",
  },
  {
    number: "02",
    title: "Process",
    description:
      "Each pay period we calculate gross pay, apply the correct tax credits and cut-off points from each employee&apos;s RPN, deduct PAYE, PRSI, and USC, and generate payslips for distribution.",
  },
  {
    number: "03",
    title: "Report",
    description:
      "We submit your Payroll Submission Request (PSR) to Revenue in real time via ROS after every pay run, and provide you with a payroll summary and payment file for your bank to process net wages.",
  },
];

export default function PayrollPreparation() {
  return (
    <main>
      <ServicesHero
        label="Payroll Specialists"
        heading="Payroll Preparation for Irish Small Businesses — Accurate, On Time, Every Time"
        para="Tax Plus Accountants handles your complete payroll from employee set-up to real-time Revenue reporting, keeping you fully compliant with PAYE Modernisation so you can focus on running your business."
      />

      {/* What is Payroll Preparation */}
      <motion.section {...fadeUp}>
        <section className="border-y border-slate-200 py-12 px-4">
          <div className="max-w-8xl mx-auto py-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
              What is Payroll Preparation?
            </h2>
            <div className="space-y-4">
              <p className="text-lg font-medium leading-relaxed text-slate-800">
                Payroll preparation is the process of calculating each
                employee&apos;s gross pay, applying the correct deductions for
                Income Tax (PAYE), Pay Related Social Insurance (PRSI), and the
                Universal Social Charge (USC), and reporting those figures to
                Revenue in real time. Since{" "}
                <strong>PAYE Modernisation</strong> came into force in January
                2019, Irish employers are legally required to submit a{" "}
                <strong>Payroll Submission Request (PSR)</strong> to Revenue on
                or before each pay date — there is no longer any end-of-year
                P35 reconciliation.
              </p>
              <p className="leading-relaxed text-slate-700">
                Tax Plus Accountants manages payroll for small and medium
                businesses across Drogheda and nationwide. We retrieve each
                employee&apos;s Revenue Payroll Notification (RPN) before every
                pay run to ensure the correct tax credits and cut-off points are
                applied, generate professional payslips, advise on Benefit in
                Kind (BIK) treatment for company cars, health insurance, and
                other perquisites, and produce the year-end P60s your employees
                need for their personal tax returns. All submissions are made
                directly through ROS.
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
                Payroll Services We Provide
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                End-to-end payroll management — from first hire to year-end
                employee certificates.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceInfoCard
                heading="Monthly & Weekly Payroll"
                paragraph="We process payroll on your chosen schedule — weekly, fortnightly, or monthly — calculating net pay for every employee after PAYE, PRSI, and USC deductions. All figures are reconciled before payslips are issued and the PSR is submitted to Revenue."
                icon={""}
              />
              <ServiceInfoCard
                heading="Revenue RPN Management"
                paragraph="Before each pay run we retrieve up-to-date Revenue Payroll Notifications (RPNs) for all employees. RPNs contain the tax credits and cut-off points Revenue holds for each individual — using an out-of-date RPN is a common cause of under or over-deduction."
                icon={""}
              />
              <ServiceInfoCard
                heading="Payslip Generation"
                paragraph="Every employee receives a clear, compliant payslip showing gross pay, all deductions (PAYE, Employee PRSI, USC), and net take-home pay. Payslips are distributed digitally or in print and retained on file for the required six-year period."
                icon={""}
              />
              <ServiceInfoCard
                heading="Employer PRSI & USC"
                paragraph="In addition to employee deductions, employers are liable for Employer PRSI — currently 11.15% on most earnings. We calculate this liability each period, include it in your payroll summary, and ensure it is factored into your monthly Revenue payment."
                icon={""}
              />
              <ServiceInfoCard
                heading="Benefit in Kind (BIK)"
                paragraph="Company cars, private health insurance, and other perquisites provided to employees must be valued and taxed as Benefit in Kind through payroll. We calculate BIK correctly under Revenue rules, apply the taxable amount to each payslip, and report it in the PSR."
                icon={""}
              />
              <ServiceInfoCard
                heading="Year-End P60s"
                paragraph="At the end of each tax year we issue P60 certificates to all employees, summarising total pay and deductions for the year. Employees need their P60 to file a personal tax return or claim a PAYE refund — we ensure they are accurate and issued on time."
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
                Any Irish employer with one or more employees needs a compliant
                payroll process — here&apos;s who we typically work with.
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
                A clear three-step cycle that repeats each pay period — set up
                once, then we handle everything from there.
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
                  From <span className="text-amber-600">€75/month</span>
                </p>
                <p className="mt-2 text-slate-600">
                  For a single-employee monthly payroll. Fees scale with
                  employee count and pay frequency — contact us for a
                  fixed-price quote tailored to your business.
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
