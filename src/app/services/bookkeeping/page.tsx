import React from "react";
import SectionContainer from '@/components/SectionContainer';
import ContactForm from '@/components/ContactForm';


export default function BookkeepingPage() {
  return (
    <div className="bg-primary-100 min-h-screen pb-0">
      {/* Hero Section */}
      <SectionContainer>
        <section className="pt-16 pb-8 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Bookkeeping</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Accurate, reliable bookkeeping services to keep your business finances organized and compliant. Let us handle the numbers so you can focus on growth.
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
            <div className="font-semibold text-lg text-gray-900 mb-1">Accurate Records</div>
            <div className="text-gray-600 text-sm">Every transaction tracked and reconciled</div>
          </div>
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 flex-1 min-w-[220px] max-w-xs">
            <img src="/icons/check-green.svg" alt="Check" className="w-8 h-8 mb-2" />
            <div className="font-semibold text-lg text-gray-900 mb-1">Compliance Assurance</div>
            <div className="text-gray-600 text-sm">Stay up-to-date with all regulations</div>
          </div>
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 flex-1 min-w-[220px] max-w-xs">
            <img src="/icons/check-green.svg" alt="Check" className="w-8 h-8 mb-2" />
            <div className="font-semibold text-lg text-gray-900 mb-1">Time Savings</div>
            <div className="text-gray-600 text-sm">Focus on your business, not paperwork</div>
          </div>
        </section>
      </SectionContainer>
      {/* About Section */}
      <SectionContainer>
        <section className="py-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">About the service</h2>
          <p className="text-gray-700 mb-4">Our bookkeeping service ensures your business records are always accurate, up-to-date, and ready for tax time. We use the latest cloud-based tools and best practices to keep your finances organized and accessible.</p>
          <p className="text-gray-700 mb-4">From daily transaction entry to monthly reconciliations and reporting, our team handles it all. We help you understand your numbers so you can make informed decisions and grow with confidence.</p>
        </section>
      </SectionContainer>
      {/* CTA Section */}
      <SectionContainer>
        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your financial future is just a click away. Know us!</h2>
        </section>
      </SectionContainer>
    </div>
  );
}
