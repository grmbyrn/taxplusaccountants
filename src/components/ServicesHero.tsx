"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServicesHeroProps {
    label: string;
    heading: string;
    para: string;
}

export default function ServicesHero({label, heading, para}: ServicesHeroProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=""
        >
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="max-w-[1400px] mx-auto px-4">
            <div className="max-w-3xl">
                <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-600 text-sm font-medium mb-6">
                {label}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                {heading}
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 mb-8">
                {para}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                <button
                    data-slot="button"
                    className="inline-flex items-center justify-center gap-2 font-medium transition-colors bg-amber-500 hover:bg-amber-600 text-navy rounded-full px-8 py-3 text-lg shadow"
                    type="button"
                >
                    Get a Free Quote
                    <ArrowRight />
                </button>
                <Link
                    data-slot="button"
                    className="inline-flex items-center justify-center gap-2 font-medium transition-colors border bg-background hover:bg-accent hover:text-accent-foreground rounded-full px-8 py-3 text-lg shadow"
                    href="/#services"
                >
                    View Services
                </Link>
                </div>
            </div>
            </div>
        </section>
        </motion.section>
    )
}