"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ScrollTrigger, setupGsap } from "@/lib/gsap";

export default function SmoothScroll({
  children
}: {
  children: React.ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);

    const gsap = setupGsap();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        const targets = section.querySelectorAll(".reveal-element");
        if (targets.length === 0) return;
        gsap.from(targets, {
          y: 40,
          opacity: 0,
          duration: 0.95,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: { trigger: section, start: "top 85%" }
        });
      });
    }, rootRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
