import React from "react";

const BestOption = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8 relative">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
        We&apos;re the best option for your finances
      </h2>
      <div className="relative flex flex-col lg:flex-row items-end lg:items-start justify-between">
        {/* Cards Row */}
        <div
          className="flex flex-col gap-6 max-w-xs mx-auto lg:mx-0 lg:flex-row lg:absolute lg:bottom-0 lg:left-0 lg:translate-y-1/4 lg:z-20"
        >
          <div className="border border-neutral-200 rounded-xl p-6 flex flex-col items-start text-left bg-white shadow-lg min-w-[220px] max-w-xs">
            <div className="mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated accounting team</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="border border-neutral-200 rounded-xl p-6 flex flex-col items-start text-left bg-white shadow-lg min-w-[220px] max-w-xs">
            <div className="mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Filing and compliance</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="border border-neutral-200 rounded-xl p-6 flex flex-col items-start text-left bg-white shadow-lg min-w-[220px] max-w-xs">
            <div className="mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Unlimited bookkeeping</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        {/* Image on the right */}
        <div className="flex-1 flex justify-end relative z-10">
          <img
            src="https://images.unsplash.com/photo-1758876022836-70b89d3e6944?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Financial planning illustration"
            className="rounded-2xl shadow-lg w-full max-w-xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default BestOption;
