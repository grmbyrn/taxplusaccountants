
import bookkeepingImg from '@/assets/bookkeeping.jpg';
import payrollImg from '@/assets/payroll-processing.jpg';
import taxPreparationImg from '@/assets/tax-preparation.jpg';
import SectionContainer from './SectionContainer';
import Button from './Button';
import Link from 'next/link';

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
            <div className="relative flex flex-col md:flex-row gap-6 w-full z-10">
              {services.map((service) => (
                <Link
                  key={service.name + '-img'}
                  href={service.href}
                  className="flex flex-col group w-full md:w-1/3"
                >
                  <img
                    src={service.img.src}
                    alt={service.name}
                    className="w-full rounded-xl shadow-md mb-2"
                  />
                  <div className="flex flex-row items-center w-full">
                    <span className="text-xl md:text-2xl font-semibold text-neutral-800 group-hover:text-primary-700 transition-colors text-left flex-1">
                      {service.name}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-7 h-7 text-primary-500 ml-2 group-hover:text-primary-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    >
                      <path d="M6 18L18 6" />
                      <path d="M7 6h11v11" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionContainer>
  );
}

export default AllInOneServices;
