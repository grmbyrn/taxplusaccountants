import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";


import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Full Name is required";
    if (!form.email.trim()) newErrors.email = "Email Address is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    // Optionally: send form data to Formspree or other endpoint
    e.currentTarget.submit();
  };

  return (
    <form
      action="https://formspree.io/f/xvzbdkbd"
      method="POST"
      className="space-y-6"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border-amber-300 focus:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500"
            placeholder="Your full name"
            type="text"
            aria-invalid={!!errors.name}
            required
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
          <Input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border-amber-300 focus:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500"
            placeholder="your@email.com"
            aria-invalid={!!errors.email}
            required
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="border-amber-300 focus:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">Company Name</label>
          <Input
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="border-amber-300 focus:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500"
            placeholder="Your company"
            type="text"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">Service Needed</label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full p-3 border border-amber-300 rounded-md focus:border-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 bg-background"
        >
          <option value="">Select a service</option>
          <option value="tax">Tax Preparation & Planning</option>
          <option value="accounting">Accounting Services</option>
          <option value="bookkeeping">Bookkeeping</option>
          <option value="financial-planning">Financial Planning</option>
          <option value="consultation">General Consultation</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message *</label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="border-amber-300 focus:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500 resize-none w-full"
          placeholder="Tell us about your needs and how we can help..."
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg text-lg py-6"
        disabled={submitted}
      >
        <Send className="w-5 h-5 mr-2" />
        {submitted ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
