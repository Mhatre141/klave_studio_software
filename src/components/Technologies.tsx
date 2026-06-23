"use client";

import { motion } from "framer-motion";

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

export default function Technologies() {
  const techs: TechItem[] = [
    {
      name: "Next.js",
      category: "Frontend",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="90" r="85" stroke="currentColor" strokeWidth="6" fill="none"/>
          <path d="M135 140 L80 60 H70 V120 H80 V80 L125 142 A85 85 0 0 0 135 140 Z" />
          <rect x="105" y="60" width="10" height="60" />
        </svg>
      ),
    },
    {
      name: "React",
      category: "Frontend",
      icon: (
        <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <ellipse rx="11" ry="4.2" transform="rotate(0)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          <circle r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Python",
      category: "AI & Backend",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.902 0c-2.616 0-4.57 2.164-4.57 4.747h4.636v.678H4.633C2.079 5.425 0 7.382 0 10.02c0 2.639 2.079 4.492 4.633 4.492h1.615v-2.296c0-2.583 2.05-4.633 4.633-4.633h4.636V4.747C15.517 2.164 13.916 0 11.902 0zM17.367 9.488v2.296c0 2.583-2.05 4.633-4.633 4.633H8.098v2.836c0 2.583 1.601 4.747 3.615 4.747 2.616 0 4.57-2.164 4.57-4.747h-4.636v-.678h7.333C21.521 18.575 24 16.618 24 13.98c0-2.639-2.479-4.492-5.033-4.492h-1.6z"/>
        </svg>
      ),
    },
    {
      name: "Java",
      category: "Backend Core",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 18.3c0-.1.2-.2.3-.3.8-.4 1.7-.6 2.5-.7 1.3-.2 2.6-.4 3.9-.4 2 .1 4.1.5 6 1 .7.2 1.4.3 2.1.4.8.1 1.7.1 2.5-.1.8-.2 1.5-.6 2-1.3-.2.8-.7 1.4-1.4 1.8-.8.4-1.6.6-2.5.7-1.4.2-2.7.2-4.1.2-1.9-.1-3.8-.4-5.7-.7-.8-.1-1.6-.3-2.4-.5-.9-.2-1.7-.5-2.5-.9-.4-.3-.7-.6-.7-1.2zm6.2-3.3c.7-.1 1.4-.2 2.1-.2 1.6-.1 3.2.1 4.8.4.8.2 1.6.4 2.4.7.7.3 1.4.6 2 1-.2-.6-.7-1.1-1.3-1.4-.7-.4-1.4-.6-2.2-.8-1.5-.4-3.1-.6-4.7-.6-1.1 0-2.2.1-3.3.3-.8.1-1.6.3-2.3.6.8-.5 1.7-.8 2.5-1zm3-3.6c2.4-.1 4.7.5 6.9 1.4.5.2 1 .4 1.4.7-.2-.5-.6-.9-1.1-1.1-.6-.3-1.2-.5-1.9-.7-1.7-.4-3.5-.6-5.3-.5-1.2 0-2.3.2-3.5.5.7-.3 1.4-.5 2.1-.6.5-.1 1-.1 1.4-.2zm-.9-2.2c-.3 0-.6.1-.8.2.1-.2.3-.4.5-.5.1 0 .2-.1.3-.1V9.2zm11.7.5c.3-.5.4-1.1.4-1.7 0-1-.3-1.9-.9-2.6-.5-.6-1.3-.9-2.1-1-.4 0-.8.1-1.1.3-.3.2-.5.5-.6.9l-.1.4c-.1.6 0 1.2.2 1.7.2.5.5.9.9 1.2.5.3 1 .5 1.6.5.6 0 1.2-.2 1.7-.5zM12.1 0c.2 1.4-.1 2.8-.9 4-.4.6-.9 1.1-1.4 1.6l-.3.3c.7-.1 1.4-.3 2.1-.6.7-.3 1.3-.8 1.8-1.4.8-1 1.2-2.3 1-3.6 0-.1-.1-.2-.1-.3h-2.2z"/>
        </svg>
      ),
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L3.46 4.93v9.86L12 19.72l8.54-4.93V4.93L12 0zm7.34 13.91l-7.34 4.24-7.34-4.24V5.62l7.34-4.24 7.34 4.24v8.29zm-7.34-2.88L6.47 7.79v5.24l5.53 3.19v-5.19zm0-1.17l5.53-3.19-5.53-3.19-5.53 3.19 5.53 3.19z"/>
        </svg>
      ),
    },
    {
      name: "Flutter",
      category: "Mobile",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.314 0L2.3 12l3.6 3.6 12.015-12.016L14.314 0zm3.599 7.2L5.9 19.2l3.6 3.6 12.016-12.016-3.603-3.584z"/>
        </svg>
      ),
    },
    {
      name: "SQL Databases",
      category: "Databases",
      icon: (
        <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      category: "Databases",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C7.29 0 5.48 4.26 5.48 7.37c0 5.47 5.09 9.87 6.09 13.9.1.41.31.54.43.54.12 0 .32-.13.42-.54 1-4.03 6.09-8.43 6.09-13.9C18.52 4.26 16.71 0 12 0zm.66 18.25h-1.32c-.37-2.6-2.58-5.36-2.58-8.2 0-3.66 1.66-6.66 3.9-6.66 2.24 0 3.9 3 3.9 6.66 0 2.84-2.21 5.6-2.9 8.2z"/>
        </svg>
      ),
    },
    {
      name: "AWS Cloud",
      category: "DevOps",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.184 16.634c-1.365 1.056-3.237 1.488-4.992 1.488-2.616 0-5.016-1-6.528-2.568-.288-.3-.072-.648.288-.432 1.8.96 4.08 1.44 6.288 1.44 1.56 0 3.312-.336 4.608-1.128.36-.216.624.12.336.384v.216zm.72-1.92c-.12-.192-.384-.24-.576-.12-1.104.672-2.664 1.056-4.248 1.056-2.112 0-4.08-.672-5.544-1.896-.24-.192-.552.072-.36.336 1.344 1.512 3.528 2.256 5.928 2.256 1.848 0 3.624-.48 4.92-1.296.264-.144.312-.48.144-.696v-.084zm-.312-2.736c-.84-1.032-2.112-1.68-3.48-1.68-2.064 0-3.816 1.416-4.152 3.408-.048.24-.264.408-.504.36l-1.008-.192c-.24-.048-.408-.264-.36-.504.504-2.856 2.976-4.92 5.952-4.92 1.992 0 3.84.96 5.04 2.496.144.192.096.48-.12.6l-.912.672c-.144.12-.36.048-.456-.24z"/>
        </svg>
      ),
    },
    {
      name: "Docker",
      category: "DevOps",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.983 8.878h-2.73v2.73h2.73zm3.137-3.105h-2.73v2.73h2.73zm-3.137 0h-2.73v2.73h2.73zm-3.138 0H8.117v2.73h2.73zM6.23 8.878H3.5v2.73h2.73zm3.138 0H6.637v2.73h2.73zm-3.138-3.105H3.5v2.73h2.73zM21.114 9.27c-.182-.465-.6-.827-1.113-.827h-2.88v2.73h2.88c.513 0 .93-.362 1.113-.827.13-.332.13-.744 0-1.076zm-7.131-3.498h-2.73v2.73h2.73zm-3.138 0H8.117v2.73h2.73zm5.792 5.86h-2.73v2.73h2.73zm-8.93 0H4.977v2.73h2.73zm3.138 0H8.117v2.73h2.73zm-3.138-3.105H4.977v2.73h2.73zM24 12.568c0 4.103-3.327 7.432-7.432 7.432H3.58A3.58 3.58 0 0 1 0 16.42V7.486c0-.512.417-.93.93-.93h5.792c.512 0 .93.418.93.93V8.81h2.73V6.082h2.73v2.728h2.73v-2.73c0-.512.417-.93.93-.93h2.88c.512 0 .93.418.93.93v6.488h3.84c.512 0 .93-.418.93-.93V9.263c0-.18-.046-.353-.13-.503A7.432 7.432 0 0 0 24 12.568z"/>
        </svg>
      ),
    },
    {
      name: "TensorFlow",
      category: "AI & ML",
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.25 4.75L12 0l10.75 4.75v14.5L12 24 1.25 19.25V4.75zm1.5 13.5L12 22.38l9.25-4.13V5.88L12 1.62 2.75 5.88v12.37zM11.25 7v10h1.5V7h-1.5z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-24 bg-black z-20 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-amber font-sans font-semibold inline-block mb-3">
            Our Arsenal
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gradient-silver tracking-tight">
            Premium Modern Tech Stack
          </h2>
          <p className="mt-3 font-sans text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
            We build with durable, industry-standard languages. Engineered for longevity, speed, and clean code architecture.
          </p>
        </div>

        {/* Tech Stack Horizontal Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-brand-amber/20 hover:bg-white/[0.02] flex flex-col items-center text-center group cursor-default transition-all duration-300"
            >
              <div className="mb-4 text-gray-500 group-hover:text-brand-amber transition-colors duration-300 transform group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-sm font-heading font-medium text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-gray-600 mt-1 font-sans">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
