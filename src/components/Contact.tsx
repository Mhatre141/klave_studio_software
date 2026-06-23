"use client";

import React, { useRef, useState } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Calendar, Send, Check } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web Development",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const waRef = useMagnetic(40, 0.25);
  const mailRef = useMagnetic(40, 0.25);
  const scheduleRef = useMagnetic(40, 0.25);
  const submitRef = useMagnetic(40, 0.2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        company: "",
        service: "Web Development",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const servicesList = [
    "Custom Software Development",
    "AI Solutions",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Solutions & DevOps",
    "ERP / CRM Software",
  ];

  return (
    <section id="contact" className="relative py-12 md:py-16 bg-brand-bg/85 backdrop-blur-md z-20 overflow-hidden border-t border-white/5">
      
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-amber/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Info & Actions */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-amber font-sans font-semibold block mb-4">
              Connect With Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gradient-silver tracking-tight mb-6">
              Let&apos;s Build Something Singular.
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-10">
              Ready to accelerate your technical growth? Drop us a message, or schedule an engineering consultation with our core team. We respond to all text inquiries within 2 hours.
            </p>

            {/* Quick Actions List */}
            <div className="flex flex-col gap-4">
              
              {/* WhatsApp */}
              <a
                ref={waRef}
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-brand-amber/25 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="p-3 bg-brand-amber/10 border border-brand-amber/20 text-brand-amber rounded-xl group-hover:scale-105 transition-transform duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-heading font-semibold text-white">Chat on WhatsApp</h4>
                    <p className="text-xs text-gray-500 font-sans mt-0.5">Instant messaging assistance</p>
                  </div>
                </div>
                <span className="text-xs font-sans text-brand-amber uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Open Chat
                </span>
              </a>

              {/* Email */}
              <a
                ref={mailRef}
                href="mailto:studio@klave.studio"
                className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-brand-amber/25 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="p-3 bg-white/5 border border-white/10 text-white/70 rounded-xl group-hover:scale-105 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-heading font-semibold text-white">Send an Email</h4>
                    <p className="text-xs text-gray-500 font-sans mt-0.5">hello@klave.studio</p>
                  </div>
                </div>
                <span className="text-xs font-sans text-brand-amber uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Compose
                </span>
              </a>

              {/* Consultation Scheduler */}
              <a
                ref={scheduleRef}
                href="#"
                className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-brand-amber/25 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="p-3 bg-white/5 border border-white/10 text-white/70 rounded-xl group-hover:scale-105 transition-transform duration-300">
                    <Calendar className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-heading font-semibold text-white">Schedule Call</h4>
                    <p className="text-xs text-gray-500 font-sans mt-0.5">Book a 30-min discovery call</p>
                  </div>
                </div>
                <span className="text-xs font-sans text-brand-amber uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Book Slot
                </span>
              </a>

            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="liquid-morphism border border-white/10 p-8 sm:p-10 rounded-3xl relative overflow-hidden"
            >
              
              {isSubmitted ? (
                <div className="text-center py-16 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-brand-amber/15 border border-brand-amber/35 text-brand-amber rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">Inquiry Dispatched</h3>
                  <p className="font-sans text-sm text-gray-400 font-light max-w-sm leading-relaxed">
                    Thank you for connecting with Klave Studio. A senior engineer will review your project requirements and follow up within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-wider text-gray-400 font-sans font-semibold">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/5 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-brand-amber/40 focus:bg-white/[0.08] transition-all duration-300"
                        placeholder="e.g. Ayush Mhatre"
                        suppressHydrationWarning
                      />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-gray-400 font-sans font-semibold">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/5 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-brand-amber/40 focus:bg-white/[0.08] transition-all duration-300"
                        placeholder="e.g. name@company.com"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-[10px] uppercase tracking-wider text-gray-400 font-sans font-semibold">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/5 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-brand-amber/40 focus:bg-white/[0.08] transition-all duration-300"
                        placeholder="e.g. Klave Studio"
                        suppressHydrationWarning
                      />
                    </div>
                    {/* Service selection */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="text-[10px] uppercase tracking-wider text-gray-400 font-sans font-semibold">Required Service</label>
                      <select
                        name="service"
                        id="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/5 rounded-xl font-sans text-sm text-gray-300 focus:outline-none focus:border-brand-amber/40 focus:bg-white/[0.08] transition-all duration-300 cursor-pointer"
                        suppressHydrationWarning
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc} className="bg-black text-white">
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] uppercase tracking-wider text-gray-400 font-sans font-semibold">Project Brief</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/5 rounded-xl font-sans text-sm text-white focus:outline-none focus:border-brand-amber/40 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                      placeholder="Outline your project scope, core design goals, integrations or technical challenges..."
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    ref={submitRef}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-brand-amber hover:bg-white text-black font-semibold rounded-xl text-center transition-all duration-300 font-sans text-sm active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed select-none"
                    suppressHydrationWarning
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
