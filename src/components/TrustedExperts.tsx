import React from "react";

const TrustedExperts = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-[4/3]"></div>
        </div>
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted experts in accountancy services
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper leo lorem urna lectus nodoaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullasint occaecat cupidatat non proident.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TrustedExperts;
