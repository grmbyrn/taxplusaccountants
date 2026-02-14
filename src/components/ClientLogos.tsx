import React from 'react';
// import Image from 'next/image';

const ClientLogos = () => {
  // const logos = [
  //   { src: '/images/logo-placeholder-1.png', alt: 'Client Logo 1' },
  //   { src: '/images/logo-placeholder-2.png', alt: 'Client Logo 2' },
  //   { src: '/images/logo-placeholder-3.png', alt: 'Client Logo 3' },
  //   { src: '/images/logo-placeholder-4.png', alt: 'Client Logo 4' },
  //   { src: '/images/logo-placeholder-5.png', alt: 'Client Logo 5' },
  //   { src: '/images/logo-placeholder-6.png', alt: 'Client Logo 6' },
  // ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stripe-dark">
          Trusted by Leading Businesses
        </h2>
        {/* <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="p-4">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={75}
                objectFit="contain"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ClientLogos;
