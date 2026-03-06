import ServiceInfoCard from "./ServiceInfoCard";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-slate-200">
      <div className="mx-auto max-w-[1400px] px-2.5 sm:px-6 lg:px-12">
        <div className="mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-sm font-medium text-amber-500 uppercase tracking-wider">
            About us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl max-w-xl text-balance">
            Expert local business advice and support, delivered personally.
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="transition-all duration-700 delay-100 opacity-100 translate-y-0">
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                I’m John Byrne, founder of TaxPlus Accountants. After 32 years with a major multinational, building deep expertise across budgeting, payroll, auditing and financial management, I launched TaxPlus in 2015 with one goal: to help small business owners take control of their finances.
              </p>
              <p>
                Too many businesses struggle not from lack of ambition, but lack of clarity around their numbers. Understanding your accounts leads to better decisions — and better decisions build stronger, more profitable businesses.
              </p>
              <p>
                Since launching, we’ve supported hundreds of SMEs and start-ups with bookkeeping, payroll, taxation and management accounts — delivering practical, straightforward support tailored to each business.
              </p>
              <p>
                Our aim is simple: give you confidence in your numbers so you can focus on what you do best. Let’s work together to strengthen your business.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-lg font-bold text-navy flex-shrink-0">
                JB
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  John Byrne
                </div>
                <div className="text-sm text-amber-600">
                  Founder
                </div>
                <div className="text-sm text-slate-500 mt-0.5">
                  Accountant · 32 years in business
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 transition-all duration-700 delay-200 opacity-100 translate-y-0">
            <ServiceInfoCard
              heading="Expertise"
              paragraph="Qualified Chartered Accountants with deep knowledge of Irish tax law and Revenue compliance."
              icon={""}
            />
            <ServiceInfoCard
              heading="Efficiency"
              paragraph="We handle the numbers fast and accurately so you can focus on running your business."
              icon={""}
            />
            <ServiceInfoCard
              heading="Quality"
              paragraph="Every return, report, and submission is reviewed for accuracy before it leaves our desk."
              icon={""}
            />
            <ServiceInfoCard
              heading="Innovation"
              paragraph="We use modern tools and automation to keep your books clean without the overhead."
              icon={""}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
