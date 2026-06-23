"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export function useMagnetic(range = 60, strength = 0.35) {
  const ref = useRef<any>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance between mouse and element center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < range) {
        // Apply magnetic pull
        gsap.to(el, {
          x: distanceX * strength,
          y: distanceY * strength,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        // Return to center
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1.1, 0.4)",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [range, strength]);

  return ref;
}
