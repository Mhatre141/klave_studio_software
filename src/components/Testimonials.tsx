"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The performance jump was staggering. Moving our core portal to Next.js with Klave Studio reduced our load latencies by 74% and completely transformed our user retention. A phenomenal build.",
      author: "Marcus Vane",
      role: "CTO, Voltaic Energy",
      floatClass: "animate-float-slow",
    },
    {
      quote: "Klave Studio represents the absolute peak of visual design combined with deep backend proficiency. They don't compromise on anything. Our cryptographic custody interface feels like a luxury digital product.",
      author: "Helena Frost",
      role: "Founder, Aether Custody",
      floatClass: "animate-float-medium",
    },
    {
      quote: "Outstanding execution. They managed our custom AI neural engine models and created a weightless control interface that fits our luxury enterprise brand. Truly world-class engineering.",
      author: "Christian Thorne",
      role: "VP of Product, Scribe AI",
      floatClass: "animate-float-slow",
    },
  ];

  return (
    <section id="testimonials" className="relative py-12 md:py-16 bg-brand-bg/85 backdrop-blur-md z-20 overflow-hidden border-t border-white/5">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-brand-amber/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-amber font-sans font-semibold inline-block mb-3">
            Client Impressions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gradient-silver tracking-tight">
            Trusted by Industry Pioneers
          </h2>
          <p className="mt-3 font-sans text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
            Don&apos;t take our word for it. Here is what leading enterprise teams say about their experience collaborating with our studio.
          </p>
        </div>

        {/* Testimonials Grid with floating animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`liquid-card rounded-2xl p-8 border border-white/5 flex flex-col justify-between hover:border-brand-amber/15 relative overflow-hidden group hover:scale-[1.01] ${t.floatClass}`}
            >
              {/* Subtle top decoration */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-brand-amber/20 transition-all duration-500" />

              {/* Quote marks */}
              <span className="text-4xl font-heading font-bold text-brand-amber/20 select-none block mb-4">
                &ldquo;
              </span>

              {/* Quote text */}
              <p className="font-sans text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-8 flex-1 italic">
                {t.quote}
              </p>

              {/* Author info */}
              <div className="pt-6 border-t border-white/5">
                <h4 className="text-sm font-heading font-semibold text-white">
                  {t.author}
                </h4>
                <p className="text-xs font-sans text-gray-500 mt-1">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
