"use client";

import { Check, X, Shield, DollarSign, Zap, GitFork, Headset, Layers } from "lucide-react";
import { motion as motionFramer } from "framer-motion";

export default function WhyChooseUs() {
  const comparison = [
    {
      feature: "Architecture & Codebase",
      template: "Generic pre-built templates, heavy bloated plugins",
      klave: "Bespoke handcrafted architecture, optimized tree-shaking",
      check: true,
    },
    {
      feature: "Performance & Speeds",
      template: "50-70 Lighthouse score, sluggish mobile layouts",
      klave: "95+ Lighthouse score, sub-100ms server response speeds",
      check: true,
    },
    {
      feature: "Scalability Options",
      template: "Monolithic limits, crashes under traffic spikes",
      klave: "Edge deployments, CDN caching, serverless autoscaling",
      check: true,
    },
    {
      feature: "User Interface Dynamics",
      template: "Generic layouts, basic hover states, rigid elements",
      klave: "Custom physics animations, 3D low-gravity visual assets",
      check: true,
    },
    {
      feature: "Support & Maintenance",
      template: "Outsourced service queues, slow responses",
      klave: "Dedicated senior engineers, proactive threat monitoring",
      check: true,
    },
  ];

  const pillars = [
    {
      icon: <Shield className="w-5 h-5 text-brand-amber" />,
      title: "Bespoke Solutions",
      desc: "Zero templates. Every line of code is custom-written to reflect your operational needs, branding, and technical goals.",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-brand-amber" />,
      title: "Transparent Value",
      desc: "Accurate milestone billing, clear scoping, and competitive margins for top-tier senior software engineers.",
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-amber" />,
      title: "Engineered Speed",
      desc: "Fast delivery through decoupled systems, agile development sprints, and optimized continuous integration setups.",
    },
    {
      icon: <GitFork className="w-5 h-5 text-brand-amber" />,
      title: "Scalable Core",
      desc: "Built to expand seamlessly. Modular code designs allow you to append new features, databases, or AI integrations without rewriting.",
    },
    {
      icon: <Headset className="w-5 h-5 text-brand-amber" />,
      title: "Dedicated Support",
      desc: "Direct access to our senior engineering squad, regular security audits, and real-time app performance monitoring.",
    },
    {
      icon: <Layers className="w-5 h-5 text-brand-amber" />,
      title: "Modern Tech-stack",
      desc: "We build on modern core languages (Next.js, Python, AWS, R3F) ensuring fast load times and longevity for your product.",
    },
  ];

  return (
    <section id="why-us" className="relative py-24 md:py-36 bg-black z-20 overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-brand-amber/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-white/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motionFramer.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-brand-amber font-sans font-semibold block mb-4"
          >
            Engineering Prowess
          </motionFramer.span>
          <motionFramer.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gradient-silver tracking-tight"
          >
            WhyVisionary Companies Choose Us
          </motionFramer.h2>
          <motionFramer.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 font-sans text-gray-400 font-light leading-relaxed"
          >
            We bridges the gap between creative visual designs and industrial-grade software engineering. Here is how we redefine digital development:
          </motionFramer.p>
        </div>

        {/* Elegant Comparison Layout */}
        <motionFramer.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="liquid-card rounded-2xl border border-white/5 overflow-hidden mb-24"
        >
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-6 font-heading font-semibold text-sm text-gray-400">Differentiator</th>
                  <th className="p-6 font-heading font-semibold text-sm text-red-400/80">Standard Agencies / Templates</th>
                  <th className="p-6 font-heading font-semibold text-sm text-brand-amber">Klave Studio Handcrafted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparison.map((row, index) => (
                  <tr key={row.feature} className="hover:bg-white/[0.01] transition-colors duration-150">
                    <td className="p-6 font-heading text-sm text-white font-medium">{row.feature}</td>
                    <td className="p-6 font-sans text-xs text-gray-500 flex items-center gap-2.5">
                      <X className="w-4 h-4 text-red-500/60 shrink-0" />
                      {row.template}
                    </td>
                    <td className="p-6 font-sans text-xs text-gray-300">
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-brand-amber shrink-0" />
                        {row.klave}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motionFramer.div>

        {/* Six Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motionFramer.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 group"
            >
              <div className="mb-5 p-3 bg-white/5 border border-white/10 rounded-xl w-fit group-hover:bg-brand-amber/10 group-hover:border-brand-amber/20 transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-heading font-semibold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </motionFramer.div>
          ))}
        </div>

      </div>
    </section>
  );
}
