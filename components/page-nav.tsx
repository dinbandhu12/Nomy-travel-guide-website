"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { APP_VERSION, APK_URL, navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function PageNav() {
  const [open, setOpen] = useState(false);

  const href = (item: string) =>
    item === "Contact"
      ? "/contact"
      : item === "About"
      ? "/about"
      : item === "Features"
      ? "/features"
      : item === "Destinations"
      ? "/destinations"
      : `/#${item.toLowerCase()}`;

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-[#F4EFE6]/88 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/branding/logo-g.png"
            alt="Nomy"
            width={32}
            height={32}
            className="h-12 w-12 rounded-full"
          />
          <span className="text-[22px] font-semibold tracking-tight text-forest">
            nomy
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-forest/78 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={href(item)}
              className="transition hover:text-forest hover:font-bold"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={APK_URL}
            className="button-pill hidden rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white lg:inline-flex"
          >
            Download Free — {APP_VERSION}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <div
        className={cn(
          "overflow-hidden border-t border-forest/10 transition-all duration-300 lg:hidden",
          open ? "max-h-[480px]" : "max-h-0"
        )}
      >
        <nav className="mx-4 flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={href(item)}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-forest/80 transition hover:bg-forest/5"
            >
              {item}
            </a>
          ))}
          <a
            href={APK_URL}
            onClick={() => setOpen(false)}
            className="button-pill mt-1 rounded-full bg-forest px-6 py-3 text-center text-sm font-medium text-white"
          >
            Download Free — {APP_VERSION}
          </a>
        </nav>
      </div>
    </header>
  );
}
