"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Snappier, high-performance scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Update GSAP ScrollTrigger on Lenis scroll events
    lenis.on("scroll", ScrollTrigger.update);

    // Bind Lenis updates directly to GSAP's global animation loop ticker
    const updateRaf = (time: number) => {
      lenis.raf(time * 1000); // GSAP ticker uses seconds, Lenis raf expects ms
    };
    
    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0); // Prevents frame drops on heavy layouts

    // Expose lenis globally for script access
    (window as any).lenisInstance = lenis;

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
      (window as any).lenisInstance = null;
    };
  }, []);

  return <>{children}</>;
}
