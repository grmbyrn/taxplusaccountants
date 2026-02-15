import React from "react";

interface ServiceCardProps {
  heading: string;
  paragraph: string;
  href: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ heading, paragraph, href, icon }: ServiceCardProps) => (
  <a
    className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-500 opacity-100 translate-y-0"
    href={href}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center transition-colors">
        {icon}
      </div>
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-amber-500 transition-colors">
      {heading}
    </h3>
    <p className="text-sm text-slate-500 mb-6 leading-relaxed">{paragraph}</p>
    <span className="inline-flex items-center text-sm font-medium text-amber-500 gap-1.5 group-hover:gap-2.5 transition-all ">
      Learn more
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="w-4 h-4"
      >
        <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
      </svg>
    </span>
  </a>
);

export default ServiceCard;
