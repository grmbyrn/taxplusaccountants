import Link from "next/link";
import Contact from "@/components/Contact";
import ServiceInfoCard from "@/components/ServiceInfoCard";

export default function CloseACompany() {
  return (
    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-600 text-sm font-medium mb-6">
              Small Business Specialists
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Expert Bookkeeping Services for Small Business
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8">
              Focus on growing your business while we handle the numbers.
              Professional bookkeeping services designed specifically for Irish
              small businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 has-[&gt;svg]:px-3 bg-amber-500 hover:bg-amber-600 text-navy rounded-full px-8 py-6 text-lg"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-_r_b_"
                data-state="closed"
              >
                Get a Free Quote{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="ml-2 h-5 w-5"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                </svg>
              </button>
              <Link
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 has-[&gt;svg]:px-3 rounded-full px-8 py-6 text-lg"
                href="/#services"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-slate-200 py-12">
        <div className="container mx-auto max-w-4xl px-4">
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
      <Contact />
    </main>
  );
}
