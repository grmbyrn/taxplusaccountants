import React from "react";
import SectionContainer from '@/components/SectionContainer';
import ContactForm from '@/components/ContactForm';

export default function TaxPreparationPage() {
  return (
    <div className="bg-primary-100 min-h-screen pb-0">
      {/* Hero Section */}
      <SectionContainer>
        <section className="pt-16 pb-8 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Tax Preparation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Professional tax preparation services for individuals and businesses. We ensure your returns are accurate, compliant, and submitted on time.
          </p>
            <div className="block md:hidden">
              <ContactForm />
            </div>
          </div>
          <div className="hidden md:block md:w-[380px] lg:w-[420px] flex-shrink-0">
            <ContactForm />
          </div>
        </section>
      </SectionContainer>
      {/* Benefits Section */}
      <SectionContainer>
        <section className="flex flex-col md:flex-row gap-6 justify-center items-center py-8">
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 flex-1 min-w-[220px] max-w-xs">
            <img src="/icons/check-green.svg" alt="Check" className="w-8 h-8 mb-2" />
            <div className="font-semibold text-lg text-gray-900 mb-1">Accurate Returns</div>
            <div className="text-gray-600 text-sm">Every detail checked and submitted</div>
          </div>
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 flex-1 min-w-[220px] max-w-xs">
            <img src="/icons/check-green.svg" alt="Check" className="w-8 h-8 mb-2" />
            <div className="font-semibold text-lg text-gray-900 mb-1">Compliance Assurance</div>
            <div className="text-gray-600 text-sm">Stay up-to-date with all tax regulations</div>
          </div>
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 flex-1 min-w-[220px] max-w-xs">
            <img src="/icons/check-green.svg" alt="Check" className="w-8 h-8 mb-2" />
            <div className="font-semibold text-lg text-gray-900 mb-1">Maximized Deductions</div>
            <div className="text-gray-600 text-sm">We help you claim every eligible credit</div>
          </div>
        </section>
      </SectionContainer>
      {/* About Section */}
      <SectionContainer>
        <section className="py-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">About the service</h2>
          <p className="text-gray-700 mb-4">Our tax preparation service ensures your returns are accurate, compliant, and submitted on time. We handle all the paperwork and keep you informed every step of the way.</p>
          <p className="text-gray-700 mb-4">From personal to business taxes, our experienced team helps you minimize liability and maximize your refund. We stay up-to-date with the latest regulations so you don’t have to.</p>
        </section>
      </SectionContainer>
    </div>
  );
}
