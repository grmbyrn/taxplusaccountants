
import React from "react";
import Button from "./Button";

const CTA = () => (
  <section id="contact" className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
        Your financial future is just a click away. Know us!
      </h2>
      <Button className="bg-white text-primary-600 px-8 py-3.5 rounded-md font-semibold text-lg">
        Contact us
      </Button>
    </div>
  </section>
);

export default CTA;
