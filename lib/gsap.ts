"use client";

import gsap from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

let registered = false;

export function setupGsap() {
  if (registered || typeof window === "undefined") {
    return gsap;
  }

  gsap.registerPlugin(ScrollTrigger, Draggable);
  registered = true;
  return gsap;
}

export { Draggable, ScrollTrigger };
