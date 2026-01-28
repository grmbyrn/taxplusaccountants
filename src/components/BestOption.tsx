import React from "react";

const BestOption = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            We&apos;re the best option for your finances
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="bg-blue-50 w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated accounting team</h3>
                <p className="text-gray-600">Excepteur sint occaecat cupidatat non proiden offici.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-50 w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Filing and compliance</h3>
                <p className="text-gray-600">Duis aute irure dolor amet reprehenderit in voluptate.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-50 w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unlimited bookkeeping</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl aspect-[4/3]"></div>
        </div>
      </div>
    </div>
  </section>
);

export default BestOption;
