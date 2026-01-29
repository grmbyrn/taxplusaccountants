import React from "react";
import Button from "./Button";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
  return (
    <form
      className={`bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 w-full max-w-md ${className}`}
      autoComplete="off"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Receive a call from our accountants</h3>
      <input
        type="text"
        name="fullName"
        placeholder="Enter full name"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-200"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-200"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Enter phone number"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-200"
        required
      />
      <button
        type="submit"
        className="mt-2 px-8 py-3.5 rounded-md font-semibold text-lg inline-flex items-center justify-center bg-primary-500 text-white hover:bg-primary-600 transition-colors"
      >
        Contact us
      </button>
    </form>
  );
};

export default ContactForm;
