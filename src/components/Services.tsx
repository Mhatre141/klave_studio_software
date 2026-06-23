"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Brain,
  Code,
  Smartphone,
  Layers,
  Cloud,
  Users,
  Settings,
} from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function TiltCard({ icon, title, desc }: ServiceItem) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse x within card
    const y = e.clientY - rect.top;  // mouse y within card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angle (max 10 degrees tilt)
    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Add dynamic shine position
    const shine = card.querySelector(".card-shine") as HTMLElement;
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 60%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    
    const shine = card.querySelector(".card-shine") as HTMLElement;
    if (shine) {
      shine.style.background = "transparent";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="liquid-card p-5 rounded-2xl border border-white/5 relative overflow-hidden transition-all duration-300 ease-out cursor-pointer select-none group h-full flex flex-col justify-between"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* 3D Reflection Shine overlay */}
      <div className="card-shine absolute inset-0 pointer-events-none transition-opacity duration-300" />

      {/* Decorative gradient border outline */}
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-brand-amber/25 transition-all duration-500" />

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        <div className="mb-4 p-2.5 bg-white/5 border border-white/10 rounded-xl w-fit group-hover:bg-brand-amber/15 group-hover:border-brand-amber/35 group-hover:text-brand-amber transition-all duration-500 text-gray-300">
          {icon}
        </div>
        <h3 className="text-base font-heading font-semibold text-white mb-2 group-hover:text-brand-amber transition-colors duration-300">
          {title}
        </h3>
        <p className="font-sans text-[13px] text-gray-400 font-light leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Custom Software Development",
      desc: "Tailored, highly architectural web & backend core frameworks built using robust designs, designed to scale with extreme traffic demands.",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI Solutions",
      desc: "Custom large language model fine-tuning, retrieval-augmented generation (RAG) pipelines, and autonomous agent systems matching modern operations.",
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Web Development",
      desc: "Immaculate, highly custom Next.js frontend builds delivering top-tier performance speeds, accessibility conformance, and SEO excellence.",
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Mobile App Development",
      desc: "High-performance React Native & Flutter builds matching desktop feature parity, rendering custom native gestures and layouts.",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "UI/UX Design",
      desc: "Exquisite visual systems, functional design tokens, interactive wireframes, and luxury interface dynamics backed by thorough user research.",
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Cloud Solutions",
      desc: "Scalable AWS serverless deployments, Terraform infrastructure-as-code scripts, cloud architecture optimization, and zero-downtime CI/CD setup.",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Website Maintenance",
      desc: "24/7 client portal health diagnostics, automated vulnerability patching, cloud backup scripts, and performance iteration packages.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "CRM Software",
      desc: "Sophisticated pipelines monitoring lead status, tracking automated mail notifications, storing client profile timelines, and sales graphs.",
    },
  ];

  return (
    <section id="services" className="relative pt-4 md:pt-6 pb-12 md:pb-16 bg-brand-bg/85 backdrop-blur-md z-20 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-amber/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-brand-amber font-sans font-semibold inline-block mb-4"
          >
            Bespoke Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gradient-silver tracking-tight"
          >
            Digital Ecosystems We Craft
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 font-sans text-gray-400 font-light leading-relaxed"
          >
            Explore our handcrafted technical capabilities. We design interfaces that flow like liquid and construct systems that perform with absolute stability.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (index % 4) * 0.08 }}
              className="h-full"
            >
              <TiltCard icon={item.icon} title={item.title} desc={item.desc} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
