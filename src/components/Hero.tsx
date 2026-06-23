"use client";

import { useEffect, useRef, useState } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  
  const startRef = useMagnetic(50, 0.3);
  const workRef = useMagnetic(50, 0.3);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFrame, setActiveFrame] = useState(0);

  const totalFrames = 100;
  const imageRefs = useRef<HTMLImageElement[]>([]);

  // 1. Preload sequence frames
  useEffect(() => {
    let loadedCount = 0;
    const tempImages: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameStr = i.toString().padStart(3, "0");
      img.src = `/hero-animation/ezgif-frame-${frameStr}.png`;
      
      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) {
          imageRefs.current = tempImages;
          setIsLoaded(true);
        }
      };
      
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          imageRefs.current = tempImages;
          setIsLoaded(true);
        }
      };
      
      tempImages.push(img);
    }
  }, []);

  // 2. Draw canvas frames
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = imageRefs.current[index];
    if (!ctx || !img) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Scale to fit: cover/contain math
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let x = 0;
    let y = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image aspect ratio
      drawWidth = canvas.height * imgRatio;
      x = (canvas.width - drawWidth) / 2;
    } else {
      // Canvas is taller than image aspect ratio
      drawHeight = canvas.width / imgRatio;
      y = (canvas.height - drawHeight) / 2;
    }

    ctx.drawImage(img, x, y, drawWidth, drawHeight);
  };

  // 3. Initialize GSAP trigger and canvas resizing
  useEffect(() => {
    if (!isLoaded || imageRefs.current.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      renderFrame(activeFrame);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    const scrollObj = { frame: 0 };

    const tl = gsap.to(scrollObj, {
      frame: totalFrames - 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.25,
        onUpdate: (self) => {
          const frameIndex = Math.floor(scrollObj.frame);
          setActiveFrame(frameIndex);
          renderFrame(frameIndex);

          // Parallax and fades for text layers
          const progress = self.progress;

          if (textGroupRef.current) {
            // Fade out main heading as scroll progresses
            textGroupRef.current.style.opacity = String(Math.max(0, 1 - progress * 2.5));
            textGroupRef.current.style.transform = `translateY(${-progress * 80}px)`;
          }

          if (ctasRef.current) {
            // Fade in CTAs at the final scroll phase
            if (progress > 0.5) {
              const alpha = Math.min(1, (progress - 0.5) * 3);
              ctasRef.current.style.opacity = String(alpha);
              ctasRef.current.style.transform = `translateY(${(1 - progress) * 40}px)`;
              ctasRef.current.style.pointerEvents = "auto";
            } else {
              ctasRef.current.style.opacity = "0";
              ctasRef.current.style.transform = "translateY(40px)";
              ctasRef.current.style.pointerEvents = "none";
            }
          }
        },
      },
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [isLoaded]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-[#0a0a0c]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Loading Overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#0a0a0c]/90">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="3"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - loadingProgress / 100)}`}
                  strokeLinecap="round"
                  fill="none"
                  className="transition-all duration-300"
                />
              </svg>
              <span className="absolute text-sm font-heading font-semibold text-white/95">
                {loadingProgress}%
              </span>
            </div>
            <p className="mt-6 text-xs text-gray-500 font-sans tracking-widest uppercase">
              Preloading Experience
            </p>
          </div>
        )}

        {/* Canvas Engine */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-85 z-10"
          style={{
            maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)"
          }}
        />

        {/* Edge blending gradients */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent pointer-events-none z-15" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent pointer-events-none z-15" />

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,#0a0a0c_85%)] z-15" />

        {/* Scrolling Overlay Content */}
        <div ref={contentRef} className="relative z-20 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center text-center">
          
          {/* Phase 1: Intro Heading */}
          <div
            ref={textGroupRef}
            className="flex flex-col items-center select-none"
            style={{ transition: "opacity 0.1s ease-out, transform 0.1s ease-out" }}
          >
            <span className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.25em] text-brand-amber font-sans font-semibold">
              Klave Studio • Low Gravity OS
            </span>
            <h1 className="max-w-4xl font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gradient-silver leading-[1.08] mb-6">
              Building Software That Moves Businesses Forward.
            </h1>
            <p className="max-w-2xl font-sans text-base sm:text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              Web, AI, Mobile and Custom Software Solutions Designed for Growth.
            </p>
          </div>

          {/* Phase 2: Action CTAs */}
          <div
            ref={ctasRef}
            className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center opacity-0 pointer-events-none select-none"
            style={{ transition: "opacity 0.1s ease-out, transform 0.1s ease-out" }}
          >
            <h2 className="max-w-3xl font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient-amber mb-8 leading-[1.2]">
              Ready to sculpt your next digital masterpiece?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                ref={startRef}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-amber text-black text-sm font-semibold rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 font-sans tracking-wide group"
              >
                Start Your Project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                ref={workRef}
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/15 text-white text-sm font-semibold rounded-full hover:bg-white/5 hover:border-white hover:scale-105 active:scale-95 transition-all duration-300 font-sans tracking-wide"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 select-none opacity-60">
          <div className="w-5 h-8 border border-white/20 rounded-full p-1.5 flex justify-center">
            <div className="w-1.5 h-1.5 bg-brand-amber rounded-full scroll-dot" />
          </div>
          <span className="text-[9px] uppercase tracking-[0.3em] font-sans font-medium text-gray-400">
            Scroll to Navigate
          </span>
        </div>
      </div>
    </div>
  );
}
