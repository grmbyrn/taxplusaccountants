import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/f/xvzbdkbd"
      method="POST"
      className="space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
          <Input
            id="name"
            name="name"
            required
            className="border-amber-300 focus:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500"
            placeholder="Your full name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            className="border-amber-300 focus:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            className="border-amber-300 focus:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">Company Name</label>
          <Input
            id="company"
            name="company"
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
          required
          rows={5}
          className="border-amber-300 focus:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-500 resize-none w-full"
          placeholder="Tell us about your needs and how we can help..."
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg text-lg py-6"
      >
        <Send className="w-5 h-5 mr-2" />
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
