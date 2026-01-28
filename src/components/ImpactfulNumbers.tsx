
import React from "react";
import Button from "./Button";


const ImpactfulNumbers = () => (
  <section className="py-20 lg:py-28 relative overflow-visible">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="bg-[#1A2A4A] rounded-2xl px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center lg:items-stretch relative overflow-visible">
        <div className="flex-1 flex flex-col justify-center lg:pr-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            We have impactful numbers
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-xl">
            Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper.
          </p>
          <div className="flex justify-start w-full">
            <Button className="bg-primary-500 text-white px-8 py-3.5 rounded-md font-semibold">
              Contact us
            </Button>
          </div>
          <div className="relative flex flex-col items-center justify-center mt-10 min-h-[120px]">
            <div className="flex flex-col lg:flex-row gap-8 w-full items-start">
              <div className="flex flex-col items-start text-left flex-1 min-w-[140px]">
                <div className="text-5xl font-bold text-primary-500 mb-2">10K</div>
                <div className="text-blue-100">Happy clients</div>
              </div>
              <div className="flex flex-col items-start text-left flex-1 min-w-[140px]">
                <div className="text-5xl font-bold text-primary-500 mb-2">50+</div>
                <div className="text-blue-100">Team members</div>
              </div>
              <div className="flex flex-col items-start text-left flex-1 min-w-[140px]">
                <div className="text-5xl font-bold text-primary-500 mb-2">97%</div>
                <div className="text-blue-100">Customer satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ImpactfulNumbers;
