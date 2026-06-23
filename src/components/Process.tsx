"use client";

import { motion } from "framer-motion";
import { Search, Compass, Palette, Code, CheckSquare, Rocket, HeartHandshake } from "lucide-react";

export default function Process() {
  const steps = [
    {
      no: "01",
      icon: <Search className="w-5 h-5" />,
      title: "Discovery",
      desc: "Deep research. We analyze your core business objectives, competitor landscape, current technical debt, and system workflows to lay a robust project foundation.",
    },
    {
      no: "02",
      icon: <Compass className="w-5 h-5" />,
      title: "Strategy",
      desc: "Project scoping. We define the database schemas, technical stack (Next.js, Python, AWS), product milestones, user flow charts, and strict timeline estimates.",
    },
    {
      no: "03",
      icon: <Palette className="w-5 h-5" />,
      title: "Design",
      desc: "High-fidelity layouts. We design premium, interactive liquid-morphism visual prototypes, typography grids, dynamic wireframes, and design tokens.",
    },
    {
      no: "04",
      icon: <Code className="w-5 h-5" />,
      title: "Development",
      desc: "Production-grade code. Our senior engineering team develops modular, linted components, clean database structures, custom animations, and cloud setups.",
    },
    {
      no: "05",
      icon: <CheckSquare className="w-5 h-5" />,
      title: "Testing",
      desc: "Rigorous verification. We execute unit tests, integration validation, load testing, cross-browser compatibility diagnostics, and Lighthouse speed audits.",
    },
    {
      no: "06",
      icon: <Rocket className="w-5 h-5" />,
      title: "Deployment",
      desc: "Zero-downtime release. We configure domain redirects, edge CDN routing, secure SSL certificates, serverless autoscaling, and launch the platform.",
    },
    {
      no: "07",
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Maintenance",
      desc: "Continuous iteration. 24/7 client diagnostics, monthly dependency upgrades, security patches, SEO tracking, and incremental design updates.",
    },
  ];

  return (
    <section id="process" className="relative py-12 md:py-16 bg-brand-bg/85 backdrop-blur-md z-20 overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-white/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-brand-amber font-sans font-semibold block mb-4"
          >
            The Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gradient-silver tracking-tight"
          >
            Our Handcrafted Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 font-sans text-gray-400 font-light leading-relaxed"
          >
            We adhere to a rigorous engineering pipeline designed to transform ambitious visual designs into robust, high-performance web products.
          </motion.p>
        </div>

        {/* Process Roadmap List */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-16">
          
          {/* Animated Connecting Vertical Line */}
          <div className="absolute left-[29px] sm:left-[67px] top-4 bottom-4 w-[2px] bg-white/10">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px 0px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-brand-amber origin-top"
            />
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 items-start group"
              >
                
                {/* Node Symbol */}
                <div className="absolute -left-[37px] sm:-left-[79px] top-1.5 w-[24px] h-[24px] rounded-full bg-black border-2 border-white/20 group-hover:border-brand-amber flex items-center justify-center z-10 transition-colors duration-300">
                  <div className="w-1.5 h-1.5 bg-white/40 group-hover:bg-brand-amber rounded-full transition-colors duration-300" />
                </div>

                {/* Step Number Badge */}
                <div className="font-heading text-sm font-semibold tracking-wider text-gray-500 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl shrink-0 group-hover:border-brand-amber/35 group-hover:text-brand-amber transition-all duration-300 select-none">
                  {step.no}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3.5 mb-3">
                    <span className="text-brand-amber p-2 bg-white/5 border border-white/10 rounded-xl group-hover:bg-brand-amber/15 group-hover:border-brand-amber/35 transition-all duration-300">
                      {step.icon}
                    </span>
                    <h3 className="text-xl font-heading font-semibold text-white group-hover:text-brand-amber transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
