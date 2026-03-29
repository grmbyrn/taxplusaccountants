import StepTwoIcon from "@/assets/icons/StepTwoIcon";
import StepOneIcon from "../assets/icons/StepOneIcon";
import StepThreeIcon from "@/assets/icons/StepThreeIcon";
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className=""
    >
    <section className="py-24 border-t border-slate-200 overflow-hidden bg-background">
      <div className="mx-auto max-w-[1400px] px-2.5 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 transition-all duration-700 opacity-100 translate-y-0 blur-0">
          <span className="text-sm font-medium text-amber-500 uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl text-balance">
            Getting started is simple
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Step 1 */}
          <div className="relative transition-all duration-700 ease-out opacity-100 translate-y-0 scale-100">
            <div className="hidden md:block absolute top-10 left-[60%] h-px bg-gradient-to-r from-amber-400 to-transparent transition-all duration-1000 ease-out origin-left w-[80%] opacity-100"></div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center transition-all duration-500">
                  {/* Icon for Step 1 */}
                  <StepOneIcon />
                </div>
                <span className="text-5xl font-bold transition-all duration-500 text-amber-200">
                  01
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                First Consultation
              </h3>
              <p className="text-slate-600">
                We charge a fee of €150 plus Vat for an initial consultation. However, TaxPlus Accountants are appointed as your accountant and tax agent the initial fee is reduced against year 1 fees.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="relative transition-all duration-700 ease-out opacity-100 translate-y-0 scale-100">
            <div className="hidden md:block absolute top-10 left-[60%] h-px bg-gradient-to-r from-amber-400 to-transparent transition-all duration-1000 ease-out origin-left w-[80%] opacity-100"></div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center transition-all duration-500">
                  {/* Icon for Step 2 */}
                  <StepTwoIcon />
                </div>
                <span className="text-5xl font-bold transition-all duration-500 text-amber-200">
                  02
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Getting to Know You
              </h3>
              <p className="text-slate-600">
                The first consultation is important as it allows us time to get to know you and to understand your business and requirements. At then end of the consultation, which is not time based, we will be able to give you a competitive and fair fee quotation for year 1 services
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="relative transition-all duration-700 ease-out opacity-100 translate-y-0 scale-100">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center transition-all duration-500">
                  {/* Icon for Step 3 */}
                  <StepThreeIcon />
                </div>
                <span className="text-5xl font-bold transition-all duration-500 text-amber-200">
                  03
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Seamless Setup
              </h3>
              <p className="text-slate-600">
                Whether you are setting up in business for the first time, or you are transitioning from a current accountant we can guarantee a seamless transition to our practice. We take care of the necessary set-up in the case of a new business e.g. ensure you are registered for correct tax heads, set up with correct software systems for bookkeeping etc., and guide you on the necessary record keeping practices. For an existing business we ensure a seamless transition to make sure that nothing will fall between the cracks in the handover from the existing accountants.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="relative transition-all duration-700 ease-out opacity-100 translate-y-0 scale-100">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center transition-all duration-500">
                  {/* Icon for Step 4 */}
                  <StepThreeIcon />
                </div>
                <span className="text-5xl font-bold transition-all duration-500 text-amber-200">
                  04
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Ongoing Support
              </h3>
              <p className="text-slate-600">
                At TaxPlus Accountants we pride ourselves on customer support with regular reporting, pro-active advice and always available when you need to speak with us. We have longer opening hours than many accounting practices - 8.00am to 6.00pm weekdays and available to meet with you on weekends by appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </motion.section>
  );
}
