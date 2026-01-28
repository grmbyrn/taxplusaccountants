
import React from "react";
import Button from "./Button";

const ImpactfulNumbers = () => (
  <section className="bg-blue-600 py-20 lg:py-28 relative overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            We have impactful numbers
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper.
          </p>
          <Button className="bg-white text-primary-600 px-8 py-3.5 rounded-md font-semibold">
            Contact us
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="text-white">
            <div className="text-5xl font-bold mb-2">10K</div>
            <div className="text-blue-100">Happy clients</div>
          </div>
          <div className="text-white">
            <div className="text-5xl font-bold mb-2">50+</div>
            <div className="text-blue-100">Team members</div>
          </div>
          <div className="text-white col-span-2">
            <div className="text-5xl font-bold mb-2">97%</div>
            <div className="text-blue-100">Customer satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ImpactfulNumbers;
