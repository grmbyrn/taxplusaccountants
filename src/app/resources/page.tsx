import ResourcesCard from "@/components/ResourcesCard";
import CroLogo from "@/assets/cro-logo.png";
import RevenueLogo from "@/assets/revenue-logo.png";
import Contact from "@/components/Contact";

export default function Resources() {
  return (
    <main>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Resources
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Essential resources and expert advice for your business success.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-12 sm:py-16">
        <ResourcesCard
          heading="Companies Registration Office"
          paragraph="Looking to start up a limited company? Here is where you go. From here you can register a company name, set up a limited company, file an annual return, and much more"
          href="https://cro.ie/"
          img={CroLogo}
        />
        <ResourcesCard
          heading="Corporation Tax"
          paragraph="Here you will find information relating to all aspects of corporation tax for companies."
          href="https://www.revenue.ie/en/companies-and-charities/corporation-tax-for-companies/index.aspx"
          img={RevenueLogo}
        />
        <ResourcesCard
          heading="Hiring an Employee"
          paragraph="The Revenue has a comprehensive list of resources that you can avail of when hiring an employee."
          href="https://www.revenue.ie/en/employing-people/index.aspx"
          img={RevenueLogo}
        />
        <ResourcesCard
          heading="Employment Wage Subsidy Scheme"
          paragraph="EWSS is an economy-wide enterprise support that focuses primarily on business eligibility. The scheme provides a flat-rate subsidy to qualifying employers based on the numbers of eligible employees on the employer’s payroll and gross pay to employees."
          href="https://www.revenue.ie/en/companies-and-charities/corporation-tax-for-companies/index.aspx"
          img={RevenueLogo}
        />
        <ResourcesCard
          heading="Income Tax"
          paragraph="Income tax has to be paid on all incomes, but is reduced through tax credits. Find out how much income tax you have to pay and how it’s calculated."
          href="https://www.revenue.ie/en/jobs-and-pensions/calculating-your-income-tax/how-your-income-tax-is-calculated.aspx"
          img={RevenueLogo}
        />
        <ResourcesCard
          heading="Income Tax"
          paragraph="Income tax has to be paid on all incomes, but is reduced through tax credits. Find out how much income tax you have to pay and how it’s calculated."
          href="https://www.revenue.ie/en/jobs-and-pensions/calculating-your-income-tax/how-your-income-tax-is-calculated.aspx"
          img={RevenueLogo}
        />
        <ResourcesCard
          heading="Income Tax"
          paragraph="Income tax has to be paid on all incomes, but is reduced through tax credits. Find out how much income tax you have to pay and how it’s calculated."
          href="https://www.revenue.ie/en/jobs-and-pensions/calculating-your-income-tax/how-your_income_tax_is_calculated.aspx"
          img={RevenueLogo}
        />
        <ResourcesCard
          heading="Income Tax"
          paragraph="Income tax has to be paid on all incomes, but is reduced through tax credits. Find out how much income tax you have to pay and how it’s calculated."
          href="https://www.revenue.ie/en/jobs-and-pensions/calculating-your-income-tax/how-your_income_tax_is_calculated.aspx"
          img={RevenueLogo}
        />
        <ResourcesCard
          heading="Income Tax"
          paragraph="Income tax has to be paid on all incomes, but is reduced through tax credits. Find out how much income tax you have to pay and how it’s calculated."
          href="https://www.revenue.ie/en/jobs-and-pensions/calculating-your_income-tax/how-your_income_tax_is_calculated.aspx"
          img={RevenueLogo}
        />
        <ResourcesCard
          heading="Income Tax"
          paragraph="Income tax has to be paid on all incomes, but is reduced through tax credits. Find out how much income tax you have to pay and how it’s calculated."
          href="https://www.revenue.ie/en/jobs-and-pensions/calculating-your_income-tax/how-your_income_tax_is_calculated.aspx"
          img={RevenueLogo}
        />
      </div>
      <Contact />
    </main>
  );
}
