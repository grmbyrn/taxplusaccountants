"use client";
import ResourcesCard from "@/components/ResourcesCard";
import CroLogo from "@/assets/cro-logo.png";
import RevenueLogo from "@/assets/revenue-logo.png";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";

export default function Resources() {
  return (
    <section className="max-w-8xl mx-auto px-4 py-20">
      <PageHero
        heading='Resources'
        para='Essential resources and expert advice for your business success.'
        img='https://taxassistassets.ams3.cdn.digitaloceanspaces.com/client/2020/PageMenuDefault.jpg'
      />
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className=""
      >
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
      </motion.section>
      <Contact />
    </section>
  );
}
