"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Live Canvas animation for the Neural Engine card
function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth || 500);
    let height = (canvas.height = canvas.offsetHeight || 300);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
    }> = [];

    // Initialize 45 neural nodes
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const draw = () => {
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);

      // Connect nodes within proximity
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce off bounds
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw node node dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245, 158, 11, 0.4)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 75) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(226, 232, 240, ${0.12 * (1 - dist / 75)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full object-cover rounded-xl" />;
}

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  desc: string;
  tags: string[];
}

function ProjectCard({ title, category, image, desc, tags }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="liquid-card rounded-2xl p-6 border border-white/5 relative overflow-hidden transition-all duration-300 ease-out cursor-pointer group flex flex-col justify-between"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div style={{ transform: "translateZ(30px)" }}>
        {/* Media Frame wrapper */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black border border-white/5 mb-6 group-hover:border-brand-amber/20 transition-all duration-500">
          
          {image === "canvas" ? (
            <NeuralCanvas />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
          )}

          {/* Action icon overlay */}
          <div className="absolute top-4 right-4 p-2.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-4 h-4 text-brand-amber" />
          </div>
        </div>

        {/* Project Meta */}
        <span className="text-[10px] uppercase tracking-widest font-sans font-semibold text-brand-amber block mb-2">
          {category}
        </span>
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3 group-hover:text-brand-amber transition-colors duration-300">
          {title}
        </h3>
        <p className="font-sans text-sm text-gray-400 font-light leading-relaxed mb-6">
          {desc}
        </p>
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5" style={{ transform: "translateZ(10px)" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-sans text-gray-400 bg-white/5 border border-white/5 px-3 py-1 rounded-full group-hover:border-white/10 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const projects = [
    {
      title: "Voltaic Energy Node",
      category: "AI & IoT Grid Control",
      image: "/project_dashboard.png",
      desc: "A smart-grid analytics engine processing 10k telemetry points per second. Outfitted with customized predictive loaders and a custom low-gravity dashboard.",
      tags: ["Next.js", "Python", "AWS Serverless"],
    },
    {
      title: "Aether Crypt Custody",
      category: "Web3 Custody Portal",
      image: "/project_mobile.png",
      desc: "An enterprise crypto custody platform built to manage institutional funds. High-performance graphs, instant cryptographic validations, and secure biometric integrations.",
      tags: ["React Native", "TypeScript", "Rust Edge Nodes"],
    },
    {
      title: "Scribe Neural Engine",
      category: "Autonomous Agent Core",
      image: "canvas",
      desc: "An advanced LLM agentic pipeline managing automated company emails, calendar coordination, database monitoring, and developer tasks autonomously.",
      tags: ["TensorFlow", "Node.js", "Next.js"],
    },
  ];

  return (
    <section id="portfolio" className="relative py-12 md:py-16 bg-brand-bg/85 backdrop-blur-md z-20 overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-amber/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-amber font-sans font-semibold block mb-4">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gradient-silver tracking-tight">
            Cinematic Case Studies
          </h2>
          <p className="mt-4 font-sans text-gray-400 font-light leading-relaxed">
            Explore our curated projects. Each build represents a deep integration of meticulous visual designs, robust code architectures, and smooth interactive physics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                image={project.image}
                desc={project.desc}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
