import StepTwoIcon from "@/assets/icons/StepTwoIcon";
import StepOneIcon from "../assets/icons/StepOneIcon";
import StepThreeIcon from "@/assets/icons/StepThreeIcon";

export default function HowItWorks() {
  return (
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
        <div className="grid md:grid-cols-3 gap-8 lg:gap-8">
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
                Free Consultation
              </h3>
              <p className="text-slate-600">
                We meet to understand your business, discuss your needs, and
                explain how we can help. No obligation, no jargon.
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
                Seamless Setup
              </h3>
              <p className="text-slate-600">
                We set up your accounts, connect to your accounting software,
                and register as your Revenue agent if needed.
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
                Ongoing Support
              </h3>
              <p className="text-slate-600">
                Regular reporting, proactive advice, and always available when
                you need us. Your dedicated accountant is just a call away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
