"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function PageNav() {
  const [open, setOpen] = useState(false);

  const href = (item: string) =>
    item === "Contact" ? "/contact"
    : item === "About" ? "/about"
    : `/#${item.toLowerCase()}`;

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 pb-2 md:px-6">
      <div className="mx-auto max-w-8xl">
        <div className="glass-nav rounded-[24px] border border-[#D6C9B6]/60 shadow-soft md:px-7">
          <div className="flex items-center justify-between px-5 py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/branding/logo.png" alt="Nomy" width={38} height={38} className="h-10 w-10 rounded-full" />
              <div className="leading-tight">
                <div className="text-lg font-semibold text-forest">Nomy</div>
                <div className="text-xs uppercase tracking-[0.2em] text-forest/52">Travel Guide</div>
              </div>
            </Link>
            <nav className="hidden items-center gap-8 text-sm text-forest/80 lg:flex">
              {navItems.map((item) => (
                <a key={item} href={href(item)} className="transition hover:text-forest">
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href="/#download" className="button-pill hidden rounded-full bg-forest px-6 py-3 text-sm font-medium text-white lg:inline-flex">
                Download App
              </a>
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="relative flex h-11 w-11 items-center justify-center rounded-full bg-forest/8 text-forest lg:hidden"
                aria-label="Toggle menu"
              >
                <span className={cn("absolute transition-all duration-200 ease-in-out", open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100")}>
                  <Menu className="h-5 w-5" />
                </span>
                <span className={cn("absolute transition-all duration-200 ease-in-out", open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75")}>
                  <X className="h-5 w-5" />
                </span>
              </button>
            </div>
          </div>
          <div className={cn(
            "overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
            open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
          )}>
            <div className="border-t border-forest/10 px-5 pb-5 pt-4">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={href(item)}
                    onClick={() => setOpen(false)}
                    className="rounded-[14px] px-4 py-3 text-sm font-medium text-forest/80 transition hover:bg-forest/5 hover:text-forest"
                  >
                    {item}
                  </a>
                ))}
                <a href="/#download" onClick={() => setOpen(false)} className="button-pill mt-2 rounded-full bg-forest px-6 py-3 text-center text-sm font-medium text-white">
                  Download on Android
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
