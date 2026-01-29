import bookkeepingImg from '@/assets/bookkeeping.jpg';
import payrollImg from '@/assets/payroll-processing.jpg';
import taxPreparationImg from '@/assets/tax-preparation.jpg';

import SectionContainer from './SectionContainer';
import Button from './Button';
import ServiceCard from './ServiceCard';

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
];

function AllInOneServices() {
  return (
    <SectionContainer>
      <section className="py-12">
        <div className="bg-primary-100 rounded-2xl shadow-lg px-4 md:px-12 py-10 flex flex-col items-start w-full relative overflow-hidden">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-left">All-in-one accounting services</h2>
          {/* Main action buttons */}
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto justify-start mb-6">
            <Button
              label="Contact us"
              href="/contact"
              bgColor="bg-primary-500"
              textColor="text-white"
            />
            <Button
              label="Browse all services"
              href="/services"
              bgColor="bg-white border border-neutral-300"
              textColor="text-neutral-800"
            />
          </div>
          {/* Images column with geometric SVG backgrounds */}
          <div className="relative flex flex-col md:flex-row gap-6 w-full z-10">
            <div className="relative flex flex-col md:flex-row gap-6 w-full z-10 border border-red-500">
              {services.map((service) => (
                <ServiceCard key={service.name} name={service.name} href={service.href} img={service.img} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionContainer>
  );
}

export default AllInOneServices;
