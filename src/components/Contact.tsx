"use client";
import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import Modal from "@/components/ui/modal";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className=""
    >
      <section
        id="contact"
        className="py-24 border-t border-slate-200 overflow-hidden"
      >
        <div className="mx-auto max-w-[1400px] px-2.5 sm:px-6 lg:px-12">
          <div
            className="relative rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-slate-50 p-8 lg:p-16 text-center overflow-hidden transition-all duration-1000 ease-out opacity-100 scale-100"
            style={{
              boxShadow:
                "0 0 80px -20px var(--color-amber-200); transitionProperty: opacity, transform, boxShadow",
            }}
          >
            <div
              className="absolute inset-0 transition-opacity duration-1000 delay-500 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radialGradient(var(--color-amber-500) 1px, transparent 1px); backgroundSize: 32px 32px",
              }}
            ></div>
            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-6 transition-all duration-700 opacity-100 translate-y-0 scale-100"
                style={{ transitionDelay: "300ms" }}
              >
                <Phone />
                <span className="text-sm font-medium text-amber-600">
                  Free 30-minute consultation
                </span>
              </div>
              <h2
                className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 text-balance transition-all duration-700 opacity-100 translate-y-0 blur-0"
                style={{ transitionDelay: "400ms" }}
              >
                Ready to simplify your finances?
              </h2>
              <p
                className="text-lg text-slate-600 max-w-xl mx-auto mb-8 transition-all duration-700 opacity-100 translate-y-0"
                style={{ transitionDelay: "500ms" }}
              >
                Join hundreds of Irish businesses who trust Taxplus Accountants
                with their bookkeeping and accounts.
              </p>
              <div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 opacity-100"
                style={{ transitionDelay: "600ms" }}
              >
                <button
                  data-slot="dialog-trigger"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:not([class*='size-']):size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive has-[>svg]:px-4 bg-amber-500 text-navy hover:bg-amber-600 rounded-full h-12 px-8 font-semibold transition-all duration-500 hover:shadow-lg translate-x-0"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded={open}
                  aria-controls="contact-modal"
                  data-state={open ? "open" : "closed"}
                  style={{ transitionDelay: "700ms" }}
                  onClick={() => setOpen(true)}
                >
                  Get Your Free Quote
                  <ArrowRight />
                </button>
                <a
                  href="tel:+353894491693"
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:not([class*='size-']):size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 has-[>svg]:px-4 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full h-12 px-8 transition-all duration-500 translate-x-0"
                  style={{ transitionDelay: "700ms" }}
                >
                  <Phone />
                  089 449 1693
                </a>
              </div>
              <p
                className="mt-6 text-sm text-slate-500 transition-all duration-700 opacity-100"
                style={{ transitionDelay: "800ms" }}
              >
                No commitment required · Response within 24 hours · Dublin, Cork
                & Galway offices
              </p>
            </div>
          </div>
        </div>
      </section>
      </motion.section>
      <Modal open={open} onClose={() => setOpen(false)}>
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=""
          >
        <ContactForm />
        </motion.section>
      </Modal>
    </>
  );
}
