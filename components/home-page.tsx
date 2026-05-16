"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import {
  Anchor,
  ArrowUpRight,
  Backpack,
  BarChart3,
  Bot,
  Check,
  Compass,
  Download,
  Globe,
  Landmark,
  MapPin,
  MapPinned,
  Menu,
  Mountain,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Sun,
  WifiOff,
  X,
  Zap
} from "lucide-react";
import {
  APP_VERSION,
  APK_URL,
  footerLinks,
  impactFeatures,
  impactStats,
  navItems,
  realWorldCards,
  travelerCard,
  useCases,
  whatsNew,
  workflowFeatures
} from "@/lib/data";
import { cn } from "@/lib/utils";
import { ScrollTrigger, setupGsap } from "@/lib/gsap";

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [navVisible, setNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      gsap.utils.toArray<HTMLElement>(".section-block").forEach((section) => {
        gsap.from(section.querySelectorAll(".reveal-element"), {
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

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) setNavVisible(true);
      else if (currentY > lastY) setNavVisible(false);
      else setNavVisible(true);
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={rootRef} className="bg-[#F4EFE6] text-forest">
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-forest/10 bg-[#F4EFE6]/[0.84] lg:bg-[#F4EFE6]/70 transition-transform duration-500",
          navVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
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
                href={
                  item === "Contact"
                    ? "/contact"
                    : item === "About"
                    ? "/about"
                    : item === "Features"
                    ? "/features"
                    : item === "Destinations"
                    ? "/destinations"
                    : `#${item.toLowerCase()}`
                }
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
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <div
          className={cn(
            "overflow-hidden border-t border-forest/10 transition-all duration-300 lg:hidden",
            mobileMenuOpen ? "max-h-[480px]" : "max-h-0"
          )}
        >
          <nav className="mx-4 flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={
                  item === "Contact"
                    ? "/contact"
                    : item === "About"
                    ? "/about"
                    : item === "Features"
                    ? "/features"
                    : item === "Destinations"
                    ? "/destinations"
                    : `#${item.toLowerCase()}`
                }
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-forest/80 transition hover:bg-forest/5"
              >
                {item}
              </a>
            ))}
            <a
              href={APK_URL}
              onClick={() => setMobileMenuOpen(false)}
              className="button-pill mt-1 rounded-full bg-forest px-6 py-3 text-center text-sm font-medium text-white"
            >
              Download Free — {APP_VERSION}
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-[88px]">
        {/* HERO */}
        <HeroSection />

        {/* SECTION 1 — WORKFLOW BUILDER */}
        <section className="section-block px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // Nomy App
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <div className="reveal-element">
                <h2 className="font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
                  Smart travel tools for
                  <br />
                  <span className="font-serif italic font-normal">
                    complexity and calm
                  </span>
                </h2>
                <a
                  href="/features"
                  className="button-pill mt-8 inline-flex items-center gap-2 rounded-full border border-forest/18 bg-white px-5 py-2.5 text-sm font-medium text-forest"
                >
                  Learn more about what Nomy can do
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="reveal-element">
                <p className="max-w-lg text-[15px] leading-7 text-forest/74">
                  Travelers across India use Nomy to plan trips, pack smart,
                  reason over destinations, and discover the places that
                  actually matter in a single calm flow.
                </p>
                <div className="mt-10 space-y-0 border-t border-forest/15">
                  {workflowFeatures.map((item, idx) => (
                    <div
                      key={item.title}
                      className={cn(
                        "flex items-center justify-between gap-6 border-b border-forest/15 py-5"
                      )}
                    >
                      <p className="max-w-sm text-[15px] leading-6 text-forest/82">
                        {item.title}
                      </p>
                      <span className="text-xs font-medium tracking-[0.15em] text-forest/45">
                        0{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — COMMON USE CASES */}
        <section className="section-block px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // Common use cases across every trip
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-5">
              {useCases.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="reveal-element flex flex-col rounded-[20px] border border-forest/10 bg-[#F9F4EA] p-6 shadow-[0_1px_0_rgba(0,61,46,0.04)]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest/8 text-forest">
                      <Icon className="h-[18px] w-[18px]" />
                    </div>
                    <h3 className="mt-5 text-[17px] font-semibold text-forest">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-5 text-forest/66">
                      {item.description}
                    </p>
                    <div className="mt-auto pt-8">
                      <p className="text-[12px] font-medium text-forest/82">
                        {item.stat}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3 — CONTINUOUSLY TEST (ANALYTICS PREVIEW) */}
        <section id="features" className="section-block px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // Continuous learning
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
                Continuously refine
                <br />
                <span className="font-serif italic font-normal">
                  every trip
                </span>
              </h2>
              <div className="reveal-element">
                <p className="max-w-lg text-[15px] leading-7 text-forest/74">
                  Nomy learns from every trip you plan destinations saved,
                  packing choices, and chat history all shape smarter
                  recommendations for your next journey.
                </p>
                <a
                  href="/features"
                  className="button-pill mt-6 inline-flex items-center gap-2 rounded-full border border-forest/18 bg-white px-5 py-2.5 text-sm font-medium text-forest"
                >
                  Learn more about trip intelligence
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="reveal-element mt-16 overflow-hidden rounded-[28px]">
              <div className="relative h-[560px] w-full md:h-[640px]">
                <img
                  src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=2000&q=80"
                  alt="Dreamy travel landscape"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ filter: "blur(1px) saturate(1.1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-forest/30 via-forest/10 to-mint/25" />
                <div className="absolute left-1/2 top-1/2 w-[90%] max-w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-white/30 bg-white/65 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] backdrop-blur-md md:p-8">
                  <div className="flex items-center justify-between border-b border-forest/10 pb-3 text-[13px]">
                    <div className="flex items-center gap-2 font-medium text-forest">
                      <span className="h-2 w-2 rounded-full bg-mint" />
                      Nomy · Trip Intelligence
                    </div>
                    <span className="text-forest/60">April 2026</span>
                  </div>
                  <div className="mt-5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-forest/58">
                      Trip Insights
                    </p>
                    <p className="mt-2 text-[22px] font-semibold tracking-tight text-forest">
                      Packing accuracy: 94%
                    </p>
                    <p className="mt-1 text-[13px] font-medium text-forest/70">
                      +12% vs. manual lists
                    </p>
                  </div>
                  <div className="mt-6 h-32 w-full">
                    <MiniChart />
                  </div>
                  <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#F4EFE6] p-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-forest text-mint">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-forest">
                        Tip
                      </p>
                      <p className="mt-1 text-[12.5px] leading-5 text-forest/72">
                        For Goa in April, travelers add 2 more items on average
                        Nomy now suggests them by default.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — BUILT FOR REAL WORLD (2x2 grid) */}
        <section className="section-block px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // Real trips across India
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
                Built for the
                <br />
                <span className="font-serif italic font-normal">
                  real world
                </span>
              </h2>
              <p className="reveal-element max-w-lg text-[15px] leading-7 text-forest/74">
                From coastal getaways to high-altitude expeditions, Nomy adapts
                to the rhythm of Indian travel weather, terrain, culture, and
                logistics are all understood before your trip begins.
              </p>
            </div>

            <div className="reveal-element mt-14 grid gap-4 md:grid-cols-2">
              {realWorldCards.map((card) => (
                <div
                  key={card.label}
                  className="group relative h-[340px] overflow-hidden rounded-[22px] md:h-[420px]"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute left-6 top-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/16 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                      {card.label}
                    </span>
                  </div>
                  <div className="absolute inset-x-6 bottom-6">
                    <h3 className="max-w-md font-semibold text-[24px] leading-tight tracking-tight text-white md:text-[28px]">
                      {card.title}
                    </h3>
                    <a
                      href="#download"
                      className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-white/90 transition hover:text-white"
                    >
                      Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — FUEL DECISION INTELLIGENCE (chat + profile) */}
        <section className="section-block px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // Contextual travel intelligence
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
                Fuel trip decisions
                <br />
                <span className="font-serif italic font-normal">
                  with rich context
                </span>
              </h2>
              <div className="reveal-element">
                <p className="max-w-lg text-[15px] leading-7 text-forest/74">
                  Nomy combines destination context, past trips, weather, and
                  saved places to give you answers that feel personal not
                  generic search results.
                </p>
                <a
                  href="/features#nomy-ai"
                  className="button-pill mt-6 inline-flex items-center gap-2 rounded-full border border-forest/18 bg-white px-5 py-2.5 text-sm font-medium text-forest"
                >
                  See how Nomy thinks
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="reveal-element relative mt-16 overflow-hidden rounded-[28px]">
              <div
                className="relative w-full"
                style={{
                  background:
                    "linear-gradient(-120deg, #4a6ab9 0%, #9b6cb0 35%, #d9905f 75%, #e9b478 100%)"
                }}
              >
                <div className="grid items-center gap-8 px-8 py-10 md:grid-cols-2 md:gap-12 md:px-12 md:py-12">
                  {/* Left — traveller profile card */}
                  <div className="relative z-10 w-full">
                    <div className="rounded-[22px] bg-white/96 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)] backdrop-blur-md md:p-7">
                      <div className="flex items-center gap-4 border-b border-forest/10 pb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white">
                          <span className="text-sm font-semibold">PN</span>
                        </div>
                        <div>
                          <p className="text-[16px] font-semibold text-forest">
                            {travelerCard.name}
                          </p>
                          <p className="text-[12px] text-forest/60">
                            {travelerCard.role}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5">
                        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-forest/55">
                          Trip Information
                        </p>
                        <div className="mt-3 grid grid-cols-3 gap-4 text-[13px]">
                          <div>
                            <p className="text-forest/55">Status</p>
                            <p className="mt-1 font-medium text-forest">Active</p>
                          </div>
                          <div>
                            <p className="text-forest/55">Route</p>
                            <p className="mt-1 font-medium text-forest">
                              {travelerCard.location}
                            </p>
                          </div>
                          <div>
                            <p className="text-forest/55">Dates</p>
                            <p className="mt-1 font-medium text-forest">
                              {travelerCard.trip}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 rounded-xl bg-[#F4EFE6] p-4">
                        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-forest/55">
                          Summary
                        </p>
                        <p className="mt-2 text-[13px] leading-6 text-forest/82">
                          {travelerCard.summary}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right — real chat screenshot */}
                  <div className="relative z-10 flex justify-center">
                    <Image
                      src="/images/mockups/nomy-chat.png"
                      alt="Nomy AI chat interface"
                      width={300}
                      height={480}
                      className="h-auto w-full max-w-[300px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — PROACTIVE OPERATIONS (left features, right illustration) */}
        <section className="section-block bg-[#F0E9D9] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // The new travel model
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:items-end md:gap-16">
              <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
                Proactive,
                <br />
                <span className="font-serif italic font-normal">
                  intelligent travel
                </span>
              </h2>
              <p className="reveal-element max-w-lg text-[15px] leading-7 text-forest/74">
                One intelligent travel system that delivers consistently useful
                outcomes plans, packing, discovery, and real-time answers all
                working together.
              </p>
            </div>

            <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-center">
              <div className="reveal-element">
                <a
                  href="/features"
                  className="button-pill inline-flex items-center gap-2 rounded-full border border-forest/18 bg-white px-5 py-2.5 text-sm font-medium text-forest"
                >
                  Learn More
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <div className="mt-10 space-y-0 border-t border-forest/15">
                  {impactFeatures.map((item, idx) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-2 border-b border-forest/15 py-6 md:flex-row md:items-start md:justify-between md:gap-10"
                    >
                      <div>
                        <p className="text-[16px] font-semibold text-forest">
                          {item.title}
                        </p>
                        <p className="mt-2 max-w-md text-[13px] leading-6 text-forest/68">
                          {item.text}
                        </p>
                      </div>
                      <span className="text-xs font-medium tracking-[0.15em] text-forest/45 md:pt-1">
                        0{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal-element flex items-center justify-center">
                <TripFlow />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — DESIGNED FOR SCALE */}
        <section className="section-block px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // Reliable infrastructure
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
                Designed for
                <br />
                <span className="font-serif italic font-normal">
                  every traveler
                </span>
              </h2>
              <p className="reveal-element max-w-lg text-[15px] leading-7 text-forest/74">
                Nomy is built on top of a resilient infrastructure Firebase
                sync, offline caching, Google Places, and OpenAI to deliver
                consistently fast, personalized trips.
              </p>
            </div>

            <div className="reveal-element mt-14 grid gap-4 md:grid-cols-2">
              <div className="flex min-h-[540px] flex-col rounded-[24px] border border-forest/10 bg-white p-8 shadow-soft md:p-10">
                <div className="flex items-center justify-between border-b border-forest/10 pb-5">
                  <div className="flex items-center gap-2.5 text-[14px] font-medium text-forest">
                    <BarChart3 className="h-[18px] w-[18px]" />
                    Packing Performance
                  </div>
                  <span className="text-[12px] text-forest/50">
                    Last 7 trips
                  </span>
                </div>
                <div className="mt-8 flex flex-1 items-end justify-between gap-3 pb-2">
                  {[42, 72, 58, 94, 85, 63, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex flex-1 flex-col items-center gap-2"
                    >
                      <div
                        className="w-full rounded-md bg-gradient-to-t from-forest to-mint"
                        style={{ height: `${h * 2.2}px` }}
                      />
                      <span className="text-[11px] text-forest/55">
                        T{i + 1}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-forest/10 pt-5 text-[13px] text-forest/68">
                  <span>Goa</span>
                  <span>Accuracy avg</span>
                  <span className="text-[15px] font-semibold text-forest">
                    94%
                  </span>
                </div>
              </div>

              <div className="flex min-h-[540px] flex-col rounded-[24px] border border-forest/10 bg-white p-8 shadow-soft md:p-10">
                <div className="flex items-center justify-between border-b border-forest/10 pb-5">
                  <div className="flex items-center gap-2.5 text-[14px] font-medium text-forest">
                    <Settings2 className="h-[18px] w-[18px]" />
                    Trip Preferences
                  </div>
                  <span className="text-[12px] text-forest/50">Live</span>
                </div>
                <div className="mt-6 flex-1 space-y-3">
                  {[
                    { label: "Trip type", value: "Beach · Family" },
                    { label: "Duration", value: "5 days" },
                    { label: "Weather", value: "32°C · Humid" },
                    { label: "Offline mode", value: "Enabled" }
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-xl bg-[#F4EFE6] px-4 py-3.5 text-[13.5px]"
                    >
                      <span className="text-forest/62">{row.label}</span>
                      <span className="font-medium text-forest">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 rounded-xl border border-forest/10 px-4 py-3.5 text-[13px]">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-mint/40 text-forest">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-forest/78">
                    Synced across your devices
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — OPTIMIZED FOR IMPACT */}
        <section className="section-block px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // Traveler success
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
                Optimized
                <br />
                <span className="font-serif italic font-normal">
                  for impact
                </span>
              </h2>
              <p className="reveal-element max-w-lg text-[15px] leading-7 text-forest/74">
                Our travel-first approach combines real traveler workflows
                with AI reasoning built to deliver calm, useful, repeatable
                trip outcomes.
              </p>
            </div>

            <div className="reveal-element mt-14 grid gap-10 border-t border-forest/15 pt-10 md:grid-cols-3">
              {impactStats.map((stat) => (
                <div key={stat.name}>
                  <p className="text-[18px] font-semibold text-forest">
                    {stat.name}
                  </p>
                  <p className="mt-3 max-w-xs text-[13px] leading-6 text-forest/68">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — REPEAT HERO */}
        <section id="download" className="section-block px-6 pb-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element relative overflow-hidden rounded-[24px] bg-[#F0E9D9]">
              <div className="px-6 py-24 text-center md:py-32">
                <h2 className="mx-auto max-w-[760px] font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[60px]">
                  Intelligence that plans{" "}
                  <span className="font-serif italic font-normal">
                    your journeys
                  </span>
                </h2>
                <a
                  href="https://github.com/dinbandhu12/nomy-app-releases/releases/download/v1.2.0/nomy.apk"
                  className="button-pill mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-white"
                >
                  <Download className="h-4 w-4" />
                  Download Free on Android — {APP_VERSION}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#F4EFE6] px-6 pb-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 border-t border-forest/15 pt-12 md:grid-cols-[1.2fr_repeat(4,1fr)]">
            <div>
              <div className="flex items-center gap-1">
                <Image
                  src="/images/branding/logo.png"
                  alt="Nomy"
                  width={32}
                  height={32}
                  className="h-12 w-12 rounded-full"
                />
                <span className="text-[22px] font-semibold tracking-tight text-forest">
                  nomy
                </span>
              </div>
              <p className="mt-4 max-w-xs text-[13px] leading-6 text-forest/62">
                Your AI travel companion for India. <br /> Travel light. Travel smart.
              </p>
            </div>
            {Object.entries(footerLinks).map(([label, links]) => (
              <div key={label}>
                <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-forest/58">
                  {label}
                </p>
                <div className="mt-5 space-y-3">
                  {links.map((link) => {
                    const href =
                      link === "Privacy Policy"
                        ? "/privacy"
                        : link === "Terms of Service"
                        ? "/terms"
                        : link === "Contact"
                        ? "/contact"
                        : link === "Features"
                        ? "/features"
                        : link === "Destinations"
                        ? "/destinations"
                        : link === "About Us"
                        ? "/about"
                        : link === "Download"
                        ? APK_URL
                        : "#";
                    return (
                      <a
                        key={link}
                        href={href}
                        className="block text-[13px] text-forest/72 transition hover:text-forest"
                      >
                        {link}
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-forest/15 pt-6 text-[12px] text-forest/55 md:flex-row md:items-center">
            <span>© 2026 Nomy — Travel Light. Travel Smart.</span>
            <span>Made with ♥ in India · Available free on Android</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

type HeroDestination = {
  location: string;
  image: string;
  tagTitle: string;
  tagSub: string;
  tagIcon: typeof Sun;
  tagAccent: "white" | "mint" | "amber" | "violet";
  rotate: string;
  position: string;
  tagPosition: string;
};

const heroDestinations: HeroDestination[] = [
  {
    location: "Jaipur, Rajasthan",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=80",
    tagTitle: "Best time to visit",
    tagSub: "Oct – Mar",
    tagIcon: Sun,
    tagAccent: "white",
    rotate: "-rotate-[3deg]",
    position: "left-[1.5%] top-[40px] xl:left-[3%]",
    tagPosition: "-right-6 -bottom-6"
  },
  {
    location: "Alleppey, Kerala",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=80",
    tagTitle: "Backwater escape",
    tagSub: "Relax & unwind",
    tagIcon: Anchor,
    tagAccent: "mint",
    rotate: "rotate-[2deg]",
    position: "left-[1%] top-[400px] xl:left-[2.5%]",
    tagPosition: "-right-4 -bottom-6"
  },
  {
    location: "Varanasi, Uttar Pradesh",
    image: "/images/destinations/varanasi.jpg",
    tagTitle: "Spiritual journey",
    tagSub: "3 days plan",
    tagIcon: Landmark,
    tagAccent: "amber",
    rotate: "rotate-[3deg]",
    position: "right-[1.5%] top-[40px] xl:right-[3%]",
    tagPosition: "-left-4 -bottom-6"
  },
  {
    location: "Leh, Ladakh",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=700&q=80",
    tagTitle: "Adventure awaits",
    tagSub: "5 days plan",
    tagIcon: Mountain,
    tagAccent: "violet",
    rotate: "-rotate-[2deg]",
    position: "right-[1%] top-[400px] xl:right-[2.5%]",
    tagPosition: "-left-4 -bottom-6"
  }
];

const tagAccentMap: Record<HeroDestination["tagAccent"], string> = {
  white: "bg-white text-forest",
  mint: "bg-[#DDEFE3] text-forest",
  amber: "bg-[#FBE7C2] text-[#7A4F0F]",
  violet: "bg-[#E5DEF7] text-[#4A398E]"
};

const brandLogos = [
  { name: "MakeMyTrip", src: "/images/branding/makemytrip.png" },
  { name: "Yatra", src: "/images/branding/yatra.png" },
  { name: "EaseMyTrip", src: "/images/branding/easymytrip.png" },
  { name: "ixigo", src: "/images/branding/ixigo.png" },
  { name: "Cleartrip", src: "/images/branding/cleartrip.png" }
];

const heroStats = [
  {
    icon: Sparkles,
    title: "Personalized",
    sub: "for you",
    bg: "bg-[#D8EDD9]",
    iconColor: "text-[#1F8253]"
  },
  {
    icon: Zap,
    title: "Real-time",
    sub: "optimization",
    bg: "bg-[#FBE7B5]",
    iconColor: "text-[#B8770D]"
  },
  {
    icon: Globe,
    title: "Works",
    sub: "everywhere",
    bg: "bg-[#E0DBF5]",
    iconColor: "text-[#5746B5]"
  },
  {
    icon: ShieldCheck,
    title: "Smart &",
    sub: "secure",
    bg: "bg-[#FBD9D5]",
    iconColor: "text-[#C0392B]"
  }
];

function HeroSection() {
  return (
    <section className="section-block relative overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-10 pb-16 md:pt-16 md:pb-20">
        <HeroDecor />

        {/* Floating destination cards (desktop only) */}
        <div className="pointer-events-none hidden lg:block">
          {heroDestinations.map((d) => (
            <div
              key={d.location}
              className={cn(
                "pointer-events-auto absolute z-10 w-[280px] xl:w-[300px]",
                d.position,
                d.rotate
              )}
            >
              <DestinationCard data={d} />
            </div>
          ))}
        </div>

        {/* Center column */}
        <div className="relative z-20 mx-auto flex max-w-[820px] flex-col items-center text-center">
          <span className="reveal-element inline-flex items-center gap-1.5 rounded-full bg-mint/25 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest">
            <Sparkles className="h-3.5 w-3.5" />
            Nomy · AI Trip Planner
          </span>

          <h1 className="reveal-element mt-7 font-semibold text-[42px] leading-[1.04] tracking-[-0.03em] text-forest sm:text-[56px] md:text-[72px]">
            Intelligence that{" "}
            <br className="hidden md:inline" />
            plans{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="font-serif italic font-normal">your journeys</span>
              <svg
                aria-hidden
                viewBox="0 0 400 18"
                preserveAspectRatio="none"
                className="absolute inset-x-0 -bottom-2 h-[12px] w-full"
              >
                <path
                  d="M3 11 C 90 3, 200 3, 397 8"
                  stroke="#F5C147"
                  strokeWidth="7"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <svg
                aria-hidden
                viewBox="0 0 32 32"
                className="absolute -right-8 -top-2 h-7 w-7 text-[#F5C147] md:-right-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M16 4 v6" />
                <path d="M16 22 v6" />
                <path d="M4 16 h6" />
                <path d="M22 16 h6" />
                <path d="M7 7 l4 4" />
                <path d="M21 21 l4 4" />
                <path d="M25 7 l-4 4" />
                <path d="M11 21 l-4 4" />
              </svg>
            </span>
          </h1>

          <p className="reveal-element mt-8 max-w-[560px] text-[15px] leading-7 text-forest/70 md:text-[17px]">
            From weekend getaways to epic adventures, Nomy crafts personalized
            trips across India in seconds.
          </p>

          <p className="reveal-element mt-7 text-[13px] font-medium tracking-tight text-forest">
            + Plan your next trip +
          </p>

          <a
            href={APK_URL}
            className="reveal-element button-pill mt-3 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-white"
          >
            <Download className="h-4 w-4" />
            Download Free on Android — {APP_VERSION}
          </a>

          <a
            href="#download"
            className="reveal-element button-pill mt-5 inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/80 px-4 py-2 text-[12.5px] font-medium text-forest shadow-[0_8px_24px_-12px_rgba(0,61,46,0.25)] backdrop-blur-sm"
          >
            <PlayStoreIcon className="h-4 w-4" />
            Beta on Play Store — try it out
          </a>

          <div className="reveal-element mt-12 w-full flex justify-center">
            <a
              href="/features#whats-new"
              className="group inline-flex items-center gap-2 text-[12.5px] font-medium text-forest/80 hover:text-forest transition-colors"
            >
              <span className="text-[#F5C147]">✦</span>
              <span>New app version {APP_VERSION} is released! Check what new! </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Stats row */}
          <div className="reveal-element mt-14 grid w-full max-w-[820px] grid-cols-2 gap-3 rounded-[22px] border border-forest/10 bg-white/70 p-3 shadow-[0_18px_50px_-30px_rgba(0,61,46,0.18)] backdrop-blur-sm md:mt-[180px] md:grid-cols-4 md:gap-2 md:p-3">
            {heroStats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="flex items-center gap-3 rounded-[16px] px-3 py-2.5 text-left"
                >
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                      s.bg
                    )}
                  >
                    <Icon className={cn("h-[16px] w-[16px]", s.iconColor)} />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[13px] font-semibold text-forest">
                      {s.title}
                    </p>
                    <p className="text-[12px] text-forest/60">{s.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trusted by */}
          {/* <div className="reveal-element mt-8 w-full max-w-[920px] rounded-[22px] border border-forest/10 bg-white/65 px-6 py-6 shadow-[0_18px_50px_-30px_rgba(0,61,46,0.18)] backdrop-blur-sm">
            <p className="text-center text-[10.5px] font-semibold uppercase tracking-[0.22em] text-forest/55">
              Trusted by travelers in India
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-14">
              {brandLogos.map((b) => (
                <Image
                  key={b.name}
                  src={b.src}
                  alt={b.name}
                  width={120}
                  height={32}
                  className="h-7 w-auto object-contain opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-8"
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ data }: { data: HeroDestination }) {
  const Icon = data.tagIcon;
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_30px_60px_-25px_rgba(0,61,46,0.35)]">
        <div className="relative h-[200px] w-full">
          <img
            src={data.image}
            alt={data.location}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-medium text-forest shadow-sm">
            <MapPin className="h-3.5 w-3.5 text-[#1F8253]" />
            {data.location}
          </span>
        </div>
      </div>
      <div
        className={cn(
          "absolute z-10 flex items-center gap-2 rounded-[14px] px-3 py-2.5 shadow-[0_16px_30px_-16px_rgba(0,0,0,0.35)]",
          tagAccentMap[data.tagAccent],
          data.tagPosition
        )}
      >
        <Icon className="h-4 w-4 shrink-0" />
        <div className="leading-tight">
          <p className="text-[12px] font-semibold">{data.tagTitle}</p>
          <p className="text-[11px] opacity-80">{data.tagSub}</p>
        </div>
      </div>
    </div>
  );
}

function HeroDecor() {
  return (
    <>
      {/* Dotted curve - left, between cards */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-[260px] hidden h-[180px] w-[140px] text-forest/35 lg:block"
        viewBox="0 0 140 180"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 6"
      >
        <path d="M120 5 C 60 50, 20 100, 80 175" />
      </svg>
      {/* Dotted curve - right, between cards */}
      <svg
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[260px] hidden h-[180px] w-[140px] text-forest/35 lg:block"
        viewBox="0 0 140 180"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 6"
      >
        <path d="M20 5 C 80 50, 120 100, 60 175" />
      </svg>
      {/* Sparkle - far left top */}
      <Sparkles
        aria-hidden
        className="pointer-events-none absolute left-[5%] top-[260px] hidden h-5 w-5 rotate-12 text-mint/70 lg:block"
        strokeWidth={2}
      />
      {/* Sparkle - mid-right */}
      <svg
        aria-hidden
        className="pointer-events-none absolute right-[24%] top-[120px] hidden h-6 w-6 text-forest/40 xl:block"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2 L13.5 9 L20 11 L13.5 13 L12 20 L10.5 13 L4 11 L10.5 9 Z" />
      </svg>
      {/* Sparkle - mid-left */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-[24%] top-[140px] hidden h-5 w-5 text-forest/35 xl:block"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2 L13.5 9 L20 11 L13.5 13 L12 20 L10.5 13 L4 11 L10.5 9 Z" />
      </svg>
      {/* Paper plane - top right of right cards */}
      <Send
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-[24px] hidden h-5 w-5 -rotate-12 text-forest/45 lg:block"
        strokeWidth={1.8}
      />
      {/* Map pin - bottom left */}
      <MapPin
        aria-hidden
        className="pointer-events-none absolute left-[20%] top-[600px] hidden h-5 w-5 text-forest/40 lg:block"
        strokeWidth={1.8}
      />
      {/* Dotted vertical curve - bottom right */}
      <svg
        aria-hidden
        className="pointer-events-none absolute right-[16%] top-[580px] hidden h-[80px] w-[80px] text-forest/30 xl:block"
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 6"
      >
        <path d="M10 70 C 40 40, 50 30, 75 8" />
      </svg>
    </>
  );
}

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="ps-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00A2FF" />
          <stop offset="1" stopColor="#0061FF" />
        </linearGradient>
        <linearGradient id="ps-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FF3A44" />
          <stop offset="1" stopColor="#C31162" />
        </linearGradient>
        <linearGradient id="ps-c" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFE000" />
          <stop offset="1" stopColor="#FFBD00" />
        </linearGradient>
        <linearGradient id="ps-d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00C170" />
          <stop offset="1" stopColor="#008E3C" />
        </linearGradient>
      </defs>
      <path
        d="M3.6 2.3c-.4.3-.6.8-.6 1.4v16.6c0 .6.2 1.1.6 1.4L13 12 3.6 2.3z"
        fill="url(#ps-a)"
      />
      <path
        d="M16.7 8.7L13 12l3.7 3.3 4.4-2.5c1.2-.7 1.2-2.5 0-3.2l-4.4-2.9z"
        fill="url(#ps-c)"
      />
      <path
        d="M3.6 2.3L13 12l3.7-3.3L5.2 1.9c-.6-.3-1.2-.1-1.6.4z"
        fill="url(#ps-d)"
      />
      <path
        d="M3.6 21.7c.4.5 1 .7 1.6.4l11.5-6.8L13 12l-9.4 9.7z"
        fill="url(#ps-b)"
      />
    </svg>
  );
}

function MiniChart() {
  return (
    <svg viewBox="0 0 400 120" className="h-full w-full">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3DDBC8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3DDBC8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M 0,80 L 50,70 L 100,74 L 150,50 L 200,56 L 250,40 L 300,30 L 350,24 L 400,18 L 400,120 L 0,120 Z"
        fill="url(#chartGrad)"
      />
      <path
        d="M 0,80 L 50,70 L 100,74 L 150,50 L 200,56 L 250,40 L 300,30 L 350,24 L 400,18"
        fill="none"
        stroke="#003D2E"
        strokeWidth="2"
      />
      <path
        d="M 0,95 L 50,88 L 100,92 L 150,78 L 200,82 L 250,68 L 300,64 L 350,56 L 400,50"
        fill="none"
        stroke="#3DDBC8"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      {[0, 50, 100, 150, 200, 250, 300, 350].map((x) => (
        <circle key={x} cx={x} cy={80 - x * 0.15} r="3" fill="#003D2E" />
      ))}
    </svg>
  );
}

function TripFlow() {
  const steps = [
    {
      icon: MapPinned,
      label: "Destination Context",
      detail: "Goa · April · Coastal · Humid",
      badge: "Auto-detected",
      badgeColor: "bg-blue-50 text-blue-700"
    },
    {
      icon: Backpack,
      label: "Smart Packing",
      detail: "23 items generated in 30s",
      badge: "✓ Ready",
      badgeColor: "bg-mint/20 text-forest"
    },
    {
      icon: Bot,
      label: "AI Travel Chat",
      detail: "Context-aware answers, live",
      badge: "● Online",
      badgeColor: "bg-forest/8 text-forest"
    },
    {
      icon: Compass,
      label: "Nearby Discovery",
      detail: "Food · Stays · Landmarks",
      badge: "12 places",
      badgeColor: "bg-amber-50 text-amber-700"
    },
    {
      icon: WifiOff,
      label: "Offline Ready",
      detail: "Packing list cached locally",
      badge: "✓ Synced",
      badgeColor: "bg-mint/20 text-forest"
    }
  ];

  return (
    <div className="w-full max-w-[440px]">
      <div className="overflow-hidden rounded-[22px] border border-forest/10 bg-white shadow-[0_20px_60px_-20px_rgba(0,61,46,0.18)]">
        <div className="flex items-center justify-between border-b border-forest/10 bg-[#F9F4EA] px-5 py-4">
          <div>
            <p className="text-[13px] font-semibold text-forest">Goa · Family Trip</p>
            <p className="text-[11px] text-forest/55">Apr 14 — Apr 19 · 5 days</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-mint/25 px-3 py-1 text-[11px] font-medium text-forest">
            <span className="h-1.5 w-1.5 rounded-full bg-forest animate-pulse" />
            Active
          </span>
        </div>
        <div className="divide-y divide-forest/8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-center gap-4 px-5 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest/6 text-forest">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-forest">{step.label}</p>
                  <p className="mt-0.5 truncate text-[11.5px] text-forest/55">{step.detail}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10.5px] font-medium ${step.badgeColor}`}>
                  {step.badge}
                </span>
              </div>
            );
          })}
        </div>
        <div className="border-t border-forest/10 bg-[#F9F4EA] px-5 py-3.5">
          <div className="flex items-center justify-between text-[12px]">
            <span className="text-forest/55">Trip readiness</span>
            <span className="font-semibold text-forest">100%</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-forest/10">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-forest to-mint" />
          </div>
        </div>
      </div>
    </div>
  );
}
