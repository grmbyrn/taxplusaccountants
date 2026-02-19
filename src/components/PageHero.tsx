"use client"
import Image from "next/image"
import { motion } from "framer-motion";

interface PageHeroProps {
    heading: string
    para: string
    img: string
}

export default function PageHero({heading, para, img}: PageHeroProps){
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=""
        >
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
                {/* Text content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1">
                  <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 text-left">
                    {heading}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-slate-700 mb-8 text-left">
                    {para}
                  </p>
                  {/* Optional: Add a call-to-action or arrow here if needed */}
                </div>
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-end order-1 md:order-2 mb-8 md:mb-0">
                  <Image
                    width={1008}
                    height={648}
                    className="rounded-2xl w-full h-auto max-w-full md:max-w-[600px] shadow-lg"
                    alt="About Us"
                    src={img}
                    priority
                  />
                </div>
              </div>
        </motion.section>
    )
}