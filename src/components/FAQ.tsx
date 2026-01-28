

import React from "react";
import Button from "./Button";
import SectionContainer from './SectionContainer';

const FAQ = () => (
  <SectionContainer>
    <section className="mb-12 lg:mb-20 bg-primary-100 rounded-2xl shadow-lg py-10 lg:py-16 px-4 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Frequently asked questions
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper leo lorem urna lectus nunc integer duis.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <details className="group bg-white border border-gray-200 rounded-lg">
          <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 text-lg">
            What specific services do you offer to help businesses?
            <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
            </svg>
          </summary>
          <div className="px-6 pb-6 text-gray-600">
            Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus.
          </div>
        </details>
        <details className="group bg-white border border-gray-200 rounded-lg">
          <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 text-lg">
            Do you offer any type of discount or promotion?
            <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
            </svg>
          </summary>
          <div className="px-6 pb-6 text-gray-600">
            Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus.
          </div>
        </details>
        <details className="group bg-white border border-gray-200 rounded-lg">
          <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 text-lg">
            How do they structure fees for services?
            <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
            </svg>
          </summary>
          <div className="px-6 pb-6 text-gray-600">
            Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus.
          </div>
        </details>
        <details className="group bg-white border border-gray-200 rounded-lg">
          <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 text-lg">
            Do you offer financial consulting services?
            <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7 7" />
            </svg>
          </summary>
          <div className="px-6 pb-6 text-gray-600">
            Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus.
          </div>
        </details>
      </div>
      <div className="text-center mt-12">
  <Button
    href="/contact"
    label="Contact us"
    bgColor="bg-primary-500"
    textColor="text-white"
  />
</div>
    </section>
  </SectionContainer>
);

export default FAQ;
