import React from "react";
import SectionContainer from '@/components/SectionContainer';

export default function TaxPlanningPage() {
  return (
    <SectionContainer>
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Tax Planning</h1>
          <p className="text-lg text-gray-600 mb-6">
            Strategic tax planning to minimize liabilities and maximize your business growth. Our experts ensure you stay compliant and take advantage of every opportunity.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto text-left">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">What is Tax Planning?</h2>
          <p className="text-gray-700 mb-6">
            Tax planning is the process of analyzing your financial situation and developing strategies to minimize your tax liability. Our team works with you to ensure you are compliant with all regulations while optimizing your tax position.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Our Tax Planning Services Include:</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Personal and business tax strategy</li>
            <li>Year-round tax advice</li>
            <li>Tax-efficient investments</li>
            <li>Retirement and estate planning</li>
            <li>Compliance and reporting</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Why Choose Us?</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Experienced tax professionals</li>
            <li>Personalized, proactive advice</li>
            <li>Transparent pricing</li>
            <li>Dedicated support</li>
          </ul>
        </div>
      </section>
    </SectionContainer>
  );
}
