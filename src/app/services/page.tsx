import bookkeepingImg from '@/assets/bookkeeping.jpg';
import payrollImg from '@/assets/payroll-processing.jpg';
import taxPreparationImg from '@/assets/tax-preparation.jpg';
import auditImg from '@/assets/audit-services.jpg';
import financialConsultingImg from '@/assets/financial-consulting.jpg';
import taxPlanningImg from '@/assets/tax-planning.jpg';
import SectionContainer from '@/components/SectionContainer';
import Button from '@/components/Button';
import CTA from '@/components/CTA';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    name: "Bookkeeping",
    href: "/services/bookkeeping",
    img: bookkeepingImg,
  },
  {
    name: "Payroll",
    href: "/services/payroll",
    img: payrollImg,
  },
  {
    name: "Tax Preparation",
    href: "/services/tax-preparation",
    img: taxPreparationImg,
  },
  {
    name: "Tax Planning",
    href: "/services/tax-planning",
    img: taxPlanningImg,
  },
  {
    name: "Financial Consulting",
    href: "/services/financial-consulting",
    img: financialConsultingImg,
  },
  {
    name: "Audit Services",
    href: "/services/audit-services",
    img: auditImg,
  },
];

export default function Services() {
  return (
    <SectionContainer>
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl px-4 lg:px-8 text-center pt-8 lg:pt-16 pb-20 lg:pb-32">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our full range of professional accounting services designed to help your business thrive.
          </p>
        </div>
      </section>

  
      {/* Services Grid */}
      <section className="py-12 -mt-32 md:-mt-40 lg:-mt-48">
        <div className="bg-primary-100 rounded-2xl shadow-lg px-4 md:px-12 py-10 flex flex-col items-start w-full max-w-4xl mx-auto relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </SectionContainer>
  );
}
