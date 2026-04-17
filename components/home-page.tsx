"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import {
  ArrowUpRight,
  Backpack,
  BarChart3,
  Bot,
  Check,
  Compass,
  Download,
  MapPinned,
  Menu,
  Settings2,
  Sparkles,
  WifiOff,
  X
} from "lucide-react";
import {
  chatMessages,
  destinationLogos,
  footerLinks,
  impactFeatures,
  impactStats,
  navItems,
  realWorldCards,
  travelerCard,
  useCases,
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
          "fixed inset-x-0 top-0 z-50 border-b border-forest/10 bg-[#F4EFE6]/70 transition-transform duration-500",
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
              href="#download"
              className="button-pill hidden rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white lg:inline-flex"
            >
              Download Free
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
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="button-pill mt-1 rounded-full bg-forest px-6 py-3 text-center text-sm font-medium text-white"
            >
              Download Free
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-[88px]">
        {/* HERO */}
        <section className="section-block relative">
          <div className="relative h-[96vh] min-h-[620px] w-full overflow-hidden">
            <img
            src="/images/background/hero-image.png"
              // src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=2000&q=80"
              alt="Cinematic Indian landscape"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
            <div className="relative mx-auto flex h-full max-w-[1400px] flex-col items-center justify-center px-6 pb-28 pt-20 md:pt-40 text-center">
              <h1 className="reveal-element max-w-[900px] font-semibold text-[44px] leading-[1.02] tracking-[-0.03em] text-white md:text-[76px]">
                Intelligence that plans{" "}
                <span className="font-serif italic font-normal">
                  your journeys
                </span>
              </h1>
              <p className="reveal-element mt-6 max-w-xl text-base leading-7 text-white/70 md:text-[17px]">
                Your AI travel companion for India smart packing, nearby
                discovery, trip planning, and real-time chat, all in one calm app.
              </p>
              <a
                href="#download"
                className="reveal-element button-pill mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-forest"
              >
                <Download className="h-4 w-4" />
                Download Free on Android
              </a>
            </div>
            <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-black/18 backdrop-blur-sm">
              <div className="mx-auto grid max-w-[1400px] grid-cols-3 gap-y-3 px-6 py-5 text-sm font-medium uppercase tracking-[0.2em] text-white/70 md:flex md:flex-wrap md:items-center md:justify-between md:gap-y-4">
                {destinationLogos.map((logo) => (
                  <span key={logo} className="opacity-85 text-center md:text-left">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

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
                  href="/features"
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
                  href="#download"
                  className="button-pill inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white"
                >
                  Download Free
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
                  href="#"
                  className="button-pill mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-white"
                >
                  <Download className="h-4 w-4" />
                  Download Free on Android
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
                        ? "/#download"
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
