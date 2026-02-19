"use client";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="max-w-8xl mx-auto px-4 py-20">
      <PageHero
        heading="About TaxPlus Accountants"
        para="We offer expert business advice and support, delivered by friendly local teams as part of a dynamic national network. We can do more for you."
        img="https://taxassistassets.ams3.cdn.digitaloceanspaces.com/client/2020/PageMenuDefault.jpg" />
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className=""
      >
        <div className="max-w-8xl mx-auto py-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4 text-left">
            Who We Are
          </h2>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            I’m John Byrne, founder of TaxPlus Accountants. After 32 years working
            with a major multinational company, gaining extensive experience in
            budgeting, management accounts, payroll, auditing and financial
            management, I established TaxPlus in 2015 with one clear goal: to help
            small business owners take control of their finances.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Over the years, I’ve seen how many businesses struggle not because
            they lack ambition, but because they don’t have clarity around their
            numbers. When you truly understand your accounts, you make better
            decisions. Better decisions lead to stronger, more profitable
            businesses.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Since launching TaxPlus Accountants, we have supported hundreds of
            SMEs and start-ups in organising their finances, improving their
            financial visibility, and building sustainable growth.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Together with my team, we provide practical, straightforward
            accounting support tailored to your business. Whether you need
            assistance with bookkeeping, payroll, taxation, or management accounts
            — or you want us to manage your entire accounting function — we’re
            here to help.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Our aim is simple: to give you confidence in your numbers so you can
            focus on running and growing your business.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Let’s work together to maximise your accounts and strengthen your
            business.
          </p>
        </div>
      </motion.section>
      <Contact />
    </section>
  );
};

export default About;
