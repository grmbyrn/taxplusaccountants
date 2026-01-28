"use client";
import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "I’ve used John and Tax Plus Accountants Drogheda since 2012 and as a small sole-trader business I’ve found him and his team to be excellent. Their attention to detail and knowledge is first-class and they really ‘get’ the complexities and growing pains of small businesses.\n\nJohn has always been very quick to reply and respond to my queries and has never failed to help me with any matter causing concern or when I needed some advice. Overall the value I’ve enjoyed has been fantastic. It’s no surprise that John’s business is growing from strength to strength.",
    author: "Paul Clarke / Match-Fit",
  },
  {
    quote:
      "Over the years our business, Impulse Agencies, has enjoyed a great working relationship with John and all the team at Tax Plus Accountants.\n\nWe feel comfortable in the knowledge that we can receive a quick and accurate answer to the smallest of queries that may arise to knowing that we can expect our Year End Accounts and Periodic Management Accounts to arrive on time – every time!\n\nIt has been a huge asset to have such valuable and professional guidance available here locally in Drogheda, and we wish John and all at Tax Plus Accounting every continued success.",
    author: "Tony / Impulse Agencies",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-20 lg:py-28 text-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">Testimonials</h2>
        </div>
        {/* Mobile carousel */}
        <div className="block md:hidden">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${active * 100}%)` }}>
              {testimonials.map((t, idx) => (
                <div key={idx} className="min-w-full px-2">
                  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full border border-gray-100">
                    <p className="text-lg md:text-xl text-gray-800 mb-4 whitespace-pre-line">“{t.quote}”</p>
                    <span className="font-semibold text-blue-700">{t.author}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full ${active === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
                  onClick={() => setActive(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Desktop side by side */}
        <div className="hidden md:flex items-stretch">
          <div className="flex w-full gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex-1 border border-gray-100 flex flex-col">
                <div className="flex-1 flex flex-col">
                  <p className="text-lg lg:text-xl text-gray-800 mb-4 whitespace-pre-line flex-1">“{t.quote}”</p>
                </div>
                <span className="font-semibold text-blue-700">{t.author}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
