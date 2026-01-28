import Button from "./Button";
import Link from "next/link";

const services = [
  {
    name: "Tax Planning",
    href: "/tax-planning",
    img: "https://images.unsplash.com/photo-1769011091803-31d2f550d86a?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Audit Services",
    href: "/audit-services",
    img: "https://images.unsplash.com/photo-1769011091803-31d2f550d86a?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Financial Consulting",
    href: "/financial-consulting",
    img: "https://images.unsplash.com/photo-1769011091803-31d2f550d86a?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const AllInOneServices = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-primary-100 rounded-2xl shadow-lg px-4 md:px-12 py-10 flex flex-col items-start w-full border border-primary-200">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-left">All-in-one accounting services</h2>
        {/* Main action buttons */}
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto justify-start mb-6">
          <Button href="/contact" className="w-full md:w-auto bg-primary-500 text-white">
            Contact us
          </Button>
          <Button href="/services" className="w-full md:w-auto bg-white text-neutral-800 border border-neutral-300">
            Browse all services
          </Button>
        </div>
        {/* Images column */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {services.map((service) => (
            <Link
              key={service.name + '-img'}
              href={service.href}
              className="flex flex-col group w-full md:w-1/3"
            >
              <img
                src={service.img}
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
  );
};

export default AllInOneServices;
