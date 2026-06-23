"use client";

import { motion } from "framer-motion";
import { Compass, Eye, ShieldCheck } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Eye className="w-6 h-6 text-brand-amber" />,
      title: "Our Vision",
      desc: "To be the premier global studio where engineering meets pure artistry, establishing new standards for intelligent, luxury digital environments.",
    },
    {
      icon: <Compass className="w-6 h-6 text-brand-amber" />,
      title: "Our Mission",
      desc: "To sculpt bespoke, high-performance web, AI, and mobile solutions that accelerate enterprise growth and deliver distinct competitive advantages.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-amber" />,
      title: "Our Philosophy",
      desc: "We believe software should feel weightless, elegant, and organic. We write clean code, design fluid interfaces, and treat performance as a core value.",
    },
  ];



  return (
    <section id="about" className="relative py-12 md:py-16 bg-brand-bg/85 backdrop-blur-md z-20 overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-amber/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-brand-amber font-sans font-semibold block mb-4"
          >
            The Story of Klave Studio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gradient-silver tracking-tight leading-tight"
          >
            We don&apos;t just build software. We craft digital legacies.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 font-sans text-gray-400 font-light leading-relaxed text-base sm:text-lg"
          >
            Klave Studio was born out of a rebellion against the generic, automated web. 
            We partner with visionary enterprises to deliver tailored technical solutions that marry 
            immaculate layout design with enterprise-grade engineering.
          </motion.p>
        </div>

        {/* Vision / Mission / Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="liquid-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:-translate-y-1"
            >
              <div className="mb-6 p-3 bg-white/5 border border-white/10 rounded-xl w-fit group-hover:bg-brand-amber/10 group-hover:border-brand-amber/20 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}
