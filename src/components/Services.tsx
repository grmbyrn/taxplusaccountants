import ServiceCard from "./ServiceCard";

import CompanyFormationIcon from "../assets/icons/CompanyFormationIcon";
import BookkeepingAndAccountingIcon from "../assets/icons/BookkeepingAndAccountingIcon";
import BusinessNameRegistrationIcon from "../assets/icons/BusinessNameRegistrationIcon";
import CloseACompanyIcon from "../assets/icons/CloseACompanyIcon";
import TaxReturnsIcon from "../assets/icons/TaxReturnsIcon";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className=""
    >
      <section id="services" className="py-24 border-t border-slate-200 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-2.5 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 transition-all duration-700 opacity-100 translate-y-0">
            <span className="text-sm font-medium text-amber-500 uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Everything you need to start and grow your business
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              From formation to ongoing accounting, we provide comprehensive
              support at every stage of your business journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <ServiceCard
              heading="Company Formation"
              paragraph="Launch your business with end-to-end support — CRO registration, constitution, tax setup, and full compliance."
              href="/services/company-formation"
              icon={<CompanyFormationIcon />}
            />
            {/* Card 2 */}
            <ServiceCard
              heading="Company Closure"
              paragraph="VAT returns, payroll, management accounts — your day-to-day finances handled by professionals."
              href="/services/bookkeeping-and-accounts"
              icon={<CloseACompanyIcon />}
            />
            {/* Card 3 */}
            <ServiceCard
              heading="Business Names"
              paragraph="Personal and business tax returns filed accurately and on time. Stay compliant with Revenue."
              href="/services/tax-returns"
              icon={<BusinessNameRegistrationIcon />}
            />
            {/* Card 4 */}
            <ServiceCard
              heading="Bookkeeping & Accounts"
              paragraph="Company strike-off, voluntary liquidation, and winding-up services handled professionally."
              href="/services/close-a-company"
              icon={<BookkeepingAndAccountingIcon />}
            />
            {/* Card 5 */}
            <ServiceCard
              heading="Tax Returns"
              paragraph="Company strike-off, voluntary liquidation, and winding-up services handled professionally."
              href="/services/close-a-company"
              icon={<TaxReturnsIcon />}
            />
            {/* Card 6 */}
            <ServiceCard
              heading="Payroll/Wages Preparation"
              paragraph="Company strike-off, voluntary liquidation, and winding-up services handled professionally."
              href="/services/close-a-company"
              icon={<BookkeepingAndAccountingIcon />}
            />
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Services;
