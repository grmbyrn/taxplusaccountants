"use client";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import ServiceInfoCard from "@/components/ServiceInfoCard";
import ServicesHero from "@/components/ServicesHero";

export default function TaxReturns() {
  return (
    <main>
      <ServicesHero
        label='Small Business Specialists'
        heading='Expert Bookkeeping Services for Small Business'
        para='Focus on growing your business while we handle the numbers. Professional bookkeeping services designed specifically for Irish small businesses.'
      />
      <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=""
      >
      <section className="border-y border-slate-200 py-12 px-4">
        <div className="max-w-8xl mx-auto py-8">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
            What are Bookkeeping Services?
          </h2>
          <div className="space-y-4">
            <p className="text-lg font-medium leading-relaxed text-slate-800">
              Bookkeeping services involve recording, organizing, and
              maintaining your business&apos;s financial transactions, including
              sales, purchases, receipts, and payments. Professional bookkeepers
              ensure your accounts are accurate, compliant with Irish Revenue
              requirements, and ready for tax returns. Services include bank
              reconciliation, expense tracking, VAT returns, payroll processing,
              and financial reporting starting from €150/month.
            </p>
            <p className="leading-relaxed text-slate-700">
              Good Company Group provides comprehensive bookkeeping for sole
              traders, partnerships, and limited companies across Ireland. We
              use cloud accounting software (Xero, QuickBooks, Sage) for
              real-time financial visibility, handle all Revenue compliance
              including VAT and PAYE submissions, and provide monthly management
              reports to help you make informed business decisions.
            </p>
          </div>
        </div>
      </section>
      </motion.section>
      <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=""
      >
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Bookkeeping Services Tailored for Small Business
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive bookkeeping solutions to keep your financesorganised
              and compliant.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceInfoCard
              heading="Transaction Recording"
              paragraph="Accurate recording of all business income and expenses, categorised for easy reporting."
              icon={""}
            />
            <ServiceInfoCard
              heading="Transaction Recording"
              paragraph="Accurate recording of all business income and expenses, categorised for easy reporting."
              icon={""}
            />
            <ServiceInfoCard
              heading="Transaction Recording"
              paragraph="Accurate recording of all business income and expenses, categorised for easy reporting."
              icon={""}
            />
            <ServiceInfoCard
              heading="Transaction Recording"
              paragraph="Accurate recording of all business income and expenses, categorised for easy reporting."
              icon={""}
            />
            <ServiceInfoCard
              heading="Transaction Recording"
              paragraph="Accurate recording of all business income and expenses, categorised for easy reporting."
              icon={""}
            />
            <ServiceInfoCard
              heading="Transaction Recording"
              paragraph="Accurate recording of all business income and expenses, categorised for easy reporting."
              icon={""}
            />
          </div>
        </div>
      </section>
      </motion.section>
      <Contact />
    </main>
  );
}
