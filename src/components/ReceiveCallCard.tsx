"use client";
import React, { useState } from "react";

const ReceiveCallCard = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Receive call form submitted", form);
    setSubmitted(true);
  };

  return (
    <div
      className="
        relative mx-auto w-[90%] max-w-md
        -mt-16                       /* mobile: overlap visually below ServiceCard */
        lg:mt-0 lg:mx-0 lg:w-72
        bg-white rounded-2xl shadow-lg p-6 z-20
        lg:sticky lg:top-24          /* optional: keep visible while scrolling */
      "
    >
      <div className="border-l-4 border-primary pl-4">
        <h3 className="text-lg font-bold text-foreground">
          Receive a call from our accountants
        </h3>
      </div>

      <p className="text-sm text-muted-foreground mt-3 mb-4">
        Volutpat lacus amet non at orci velit massa tellus suspendisse ut
        ultrices.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <label className="block text-sm">
          <span className="sr-only">Full name</span>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            required
            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>

        <label className="block text-sm">
          <span className="sr-only">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>

        <label className="block text-sm">
          <span className="sr-only">Phone</span>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone number"
            required
            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-2 rounded-xl disabled:opacity-60"
          disabled={submitted}
        >
          {submitted ? "Submitted" : "Contact Us"}
        </button>

        {submitted && (
          <p className="text-sm text-green-600 mt-2">
            Thanks — we will contact you soon.
          </p>
        )}
      </form>
    </div>
  );
};

export default ReceiveCallCard;
