import React from "react";
import SectionContainer from '@/components/SectionContainer';
import ContactForm from '@/components/ContactForm';


export default function PayrollPage() {
  return (
    <div className="bg-primary-100 min-h-screen pb-0">
      {/* Hero Section */}
      <SectionContainer>
        <section className="pt-16 pb-8 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Payroll</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Hassle-free payroll services to ensure your team is paid accurately and on time, every time. We handle compliance, reporting, and all payroll needs for your business.
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
            <div className="font-semibold text-lg text-gray-900 mb-1">Accurate Payroll</div>
            <div className="text-gray-600 text-sm">Every payslip calculated and delivered</div>
          </div>
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 flex-1 min-w-[220px] max-w-xs">
            <img src="/icons/check-green.svg" alt="Check" className="w-8 h-8 mb-2" />
            <div className="font-semibold text-lg text-gray-900 mb-1">Compliance Assurance</div>
            <div className="text-gray-600 text-sm">Stay up-to-date with all payroll regulations</div>
          </div>
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 flex-1 min-w-[220px] max-w-xs">
            <img src="/icons/check-green.svg" alt="Check" className="w-8 h-8 mb-2" />
            <div className="font-semibold text-lg text-gray-900 mb-1">Employee Satisfaction</div>
            <div className="text-gray-600 text-sm">Your team paid on time, every time</div>
          </div>
        </section>
      </SectionContainer>
      {/* About Section */}
      <SectionContainer>
        <section className="py-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">About the service</h2>
          <p className="text-gray-700 mb-4">Our payroll service takes the stress out of paying your team. We manage all calculations, submissions, and compliance so you can focus on running your business.</p>
          <p className="text-gray-700 mb-4">From payslip generation to year-end reporting, our experts ensure accuracy and confidentiality at every step. We keep you compliant and your employees happy.</p>
        </section>
      </SectionContainer>
    </div>
  );
}
