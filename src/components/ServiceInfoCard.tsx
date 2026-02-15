import React from "react";

interface ServiceInfoCardProps {
  heading: string;
  paragraph: string;
  icon: React.ReactNode;
}

const ServiceInfoCard = ({
  heading,
  paragraph,
  icon,
}: ServiceInfoCardProps) => (
  <div className="p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all">
    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-2">{heading}</h3>
    <p className="text-slate-600">{paragraph}</p>
  </div>
);

export default ServiceInfoCard;
