"use client";

import { useMagnetic } from "@/hooks/useMagnetic";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollUpRef = useMagnetic(40, 0.35);

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: "#" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#" },
    { icon: <Twitter className="w-4 h-4" />, href: "#" },
  ];

  return (
    <footer className="relative bg-brand-bg/90 backdrop-blur-md z-20 border-t border-white/5 pt-12 pb-10 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16">

          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <span className="text-lg font-heading font-bold text-gradient-silver">
              Klave<span className="text-brand-amber font-light">.</span>Studio
            </span>
            <p className="font-sans text-xs sm:text-sm text-gray-500 font-light max-w-sm leading-relaxed">
              Transforming Ideas Into Intelligent Digital Solutions. Handcrafted design and senior cloud-edge software engineering.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2.5 bg-white/5 border border-white/5 rounded-xl hover:border-brand-amber/20 hover:bg-white/[0.08] text-gray-400 hover:text-brand-amber transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-heading font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#services" className="font-sans text-xs text-gray-500 hover:text-white transition-colors">Services</a>
              <a href="#about" className="font-sans text-xs text-gray-500 hover:text-white transition-colors">About Us</a>
              <a href="#process" className="font-sans text-xs text-gray-500 hover:text-white transition-colors">Our Process</a>
              <a href="#portfolio" className="font-sans text-xs text-gray-500 hover:text-white transition-colors">Portfolio</a>
              <a href="#testimonials" className="font-sans text-xs text-gray-500 hover:text-white transition-colors">Testimonials</a>
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-heading font-semibold text-white uppercase tracking-wider">
              Core Capabilities
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              <span className="font-sans text-xs text-gray-500">Custom Systems</span>
              <span className="font-sans text-xs text-gray-500">Next.js Frontends</span>
              <span className="font-sans text-xs text-gray-500">AI Fine-tuning</span>
              <span className="font-sans text-xs text-gray-500">AWS Cloud DevOps</span>
              <span className="font-sans text-xs text-gray-500">Mobile Applications</span>
              <span className="font-sans text-xs text-gray-500">UI/UX Prototypes</span>
              <span className="font-sans text-xs text-gray-500">CRM & ERP Systems</span>
              <span className="font-sans text-xs text-gray-500">Core Optimization</span>
            </div>
          </div>

        </div>

        {/* Footer Sub-bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">

          <div className="font-sans text-xs text-gray-600 flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <span>&copy; {new Date().getFullYear()} Klave Studio. All rights reserved.</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          {/* Scroll to Top */}
          <button
            ref={scrollUpRef}
            onClick={handleScrollTop}
            className="flex items-center justify-center p-3 bg-white/5 border border-white/5 rounded-full hover:border-brand-amber/20 hover:bg-white/[0.08] text-gray-400 hover:text-brand-amber transition-all duration-300"
            aria-label="Scroll to top"
            suppressHydrationWarning
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </footer>
  );
}
