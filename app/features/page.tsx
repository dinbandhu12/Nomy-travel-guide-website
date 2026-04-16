import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Backpack, Compass, MapPinned, Sparkles, Wallet, CheckSquare, StickyNote, Clock } from "lucide-react";
import type { Metadata } from "next";
import PageNav from "@/components/page-nav";

export const metadata: Metadata = {
  title: "Features — Nomy",
  description: "Smart packing, AI travel chat, nearby gems, trip tools — everything Nomy does for your India trips.",
};

const coreFeatures = [
  {
    tag: "Smart Packing",
    title: "Your perfect packing list in 30 seconds.",
    text: "Enter your destination and trip length — Nomy builds a weather-aware packing list instantly. No more forgotten rain jackets.",
    stat: "30s",
    statLabel: "to generate",
    icon: Backpack,
    photo: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1000&q=80",
    photoLabel: "Jaipur, Rajasthan",
    wide: true,
  },
  {
    tag: "AI Travel Assistant",
    title: "An AI that actually knows India.",
    text: "Chat with an India-aware AI that understands your trip, your GPS area, and the season. Real answers, not generic copy.",
    stat: "24/7",
    statLabel: "always on",
    icon: Sparkles,
    photo: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
    photoLabel: "Kerala Backwaters",
    wide: false,
  },
  {
    tag: "Explore Nearby",
    title: "Hidden gems locals actually go to.",
    text: "Discover restaurants, stays, and off-beat spots across 30+ curated Indian destinations.",
    stat: "30+",
    statLabel: "destinations",
    icon: Compass,
    photo: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1000&q=80",
    photoLabel: "Ladakh",
    wide: false,
  },
  {
    tag: "AI Itineraries",
    title: "Full day-by-day plans. One tap.",
    text: "Get a complete itinerary for any Indian destination in seconds. Drag to reorder, check off spots, edit anytime.",
    stat: "1 tap",
    statLabel: "full trip plan",
    icon: MapPinned,
    photo: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
    photoLabel: "Goa",
    wide: true,
  },
];

const toolFeatures = [
  {
    icon: Wallet,
    title: "Budget Tracker",
    text: "Log spend by category — Food, Transport, Stay, Shopping. Per-category breakdown, no spreadsheet needed.",
    photo: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Agra, India",
  },
  {
    icon: CheckSquare,
    title: "Pre-Trip Checklist",
    text: "AI-generated checklist — book stays, notify your bank, download offline maps. Add your own items.",
    photo: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Kerala, India",
  },
  {
    icon: StickyNote,
    title: "Trip Notes",
    text: "A quick scratchpad per trip. Hotel check-in times, taxi numbers, tips from locals. Synced to your account.",
    photo: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Ladakh, India",
  },
  {
    icon: Clock,
    title: "Time & Location Aware",
    text: "The AI knows the season, time, and your area. Ask 'what should I do tonight?' and get a real answer.",
    photo: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Goa, India",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <PageNav />

      {/* ── HERO — split layout ──────────────────────────── */}
      <section className="bg-forest px-5 pb-0 pt-12 md:px-6 md:pt-16">
        <div className="mx-auto max-w-8xl">

          {/* top split: text left, photos right */}
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT — headline + ctas + stats */}
            <div className="pb-12 md:pb-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3DDBC8]/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#3DDBC8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3DDBC8]" />
                All Features
              </span>

              <h1 className="mt-6 font-extrabold text-[46px] leading-[1.0] tracking-[-0.04em] text-white md:text-[60px] lg:text-[72px]">
                Everything<br />you need to<br />
                <span className="text-[#3DDBC8]">travel smarter.</span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-8 text-white/55">
                From packing your bag to exploring the city — Nomy handles the whole journey. One app. No switching. No stress.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#download" className="button-pill inline-flex items-center gap-2 rounded-full bg-[#3DDBC8] px-7 py-3.5 text-sm font-semibold text-forest">
                  Download Free <ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/about" className="button-pill inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/75 transition hover:border-white/40 hover:text-white">
                  About Nomy
                </Link>
              </div>

              {/* stats row */}
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { n: "8", label: "Features" },
                  { n: "30s", label: "Packing list" },
                  { n: "30+", label: "Destinations" },
                  { n: "Free", label: "Core features" },
                ].map((s) => (
                  <div key={s.label} className="border-l border-white/15 pl-4">
                    <div className="font-extrabold text-[28px] leading-none text-[#3DDBC8]">{s.n}</div>
                    <p className="mt-1.5 text-xs text-white/40">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — single outer card containing all photos */}
            <div className="relative hidden pb-12 md:block md:pb-20">
              <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-sm">

                {/* main top photo */}
                <div className="relative h-[280px] overflow-hidden rounded-[18px]">
                  <Image
                    src="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=900&q=85"
                    alt="Jaipur, Rajasthan"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-sm font-medium text-white/85">Jaipur, Rajasthan</span>
                </div>

                {/* two smaller photos inside the same card */}
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="relative h-[150px] overflow-hidden rounded-[14px]">
                    <Image
                      src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80"
                      alt="Kerala"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-medium text-white/80">Kerala</span>
                  </div>
                  <div className="relative h-[150px] overflow-hidden rounded-[14px]">
                    <Image
                      src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=600&q=80"
                      alt="Ladakh"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-medium text-white/80">Ladakh</span>
                  </div>
                </div>
              </div>

              {/* floating badge — overlaps the outer card */}
              <div className="absolute -left-4 top-6 flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white shadow-xl backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-[#3DDBC8]" />
                India focused
              </div>
            </div>
          </div>

          {/* bottom: 8 feature pills — full width strip */}
          <div className="border-t border-white/10 py-10">
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Backpack, label: "Smart Packing" },
                { icon: Sparkles, label: "AI Travel Chat" },
                { icon: Compass, label: "Explore Nearby" },
                { icon: MapPinned, label: "AI Itineraries" },
                { icon: Wallet, label: "Budget Tracker" },
                { icon: CheckSquare, label: "Trip Checklist" },
                { icon: StickyNote, label: "Trip Notes" },
                { icon: Clock, label: "Time Aware AI" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-medium text-white/60">
                  <Icon className="h-3.5 w-3.5 text-[#3DDBC8]" />
                  {label}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────── */}
      <section className="border-b border-[#D6C9B6] bg-[#FBF7F0] px-5 py-10 md:px-6">
        <div className="mx-auto max-w-8xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "8", label: "Total features" },
              { value: "30s", label: "Packing list" },
              { value: "30+", label: "Destinations" },
              { value: "Free", label: "Core features" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-extrabold text-[42px] leading-none text-forest md:text-[52px]">{s.value}</div>
                <p className="mt-2 text-sm text-forest/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE FEATURES — magazine bento grid ─────────── */}
      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-8xl">
          <div className="mb-12">
            <span className="text-sm font-medium text-forest/50">// Core Features</span>
            <h2 className="mt-4 font-extrabold text-[32px] leading-[1.04] tracking-[-0.04em] text-forest md:text-[48px]">
              The four pillars<br />of every trip.
            </h2>
          </div>

          {/* Row 1: wide + narrow */}
          <div className="grid gap-4 md:grid-cols-[1.6fr_1fr]">
            {/* Smart Packing — wide */}
            {(() => {
              const f = coreFeatures[0];
              const Icon = f.icon;
              return (
                <div className="group relative h-[520px] overflow-hidden rounded-[28px]">
                  <Image src={f.photo} alt={f.photoLabel} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                        <Icon className="h-3.5 w-3.5 text-[#3DDBC8]" /> {f.tag}
                      </span>
                      <span className="rounded-full bg-black/30 px-3 py-1 text-xs text-white/50 backdrop-blur-sm">{f.photoLabel}</span>
                    </div>
                    <div>
                      <div className="mb-4 flex items-end gap-3">
                        <span className="font-extrabold text-[52px] leading-none text-[#3DDBC8]">{f.stat}</span>
                        <span className="mb-2 text-sm text-white/50">{f.statLabel}</span>
                      </div>
                      <h3 className="font-extrabold text-[26px] leading-[1.1] text-white md:text-[30px]">{f.title}</h3>
                      <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">{f.text}</p>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* AI Assistant — narrow */}
            {(() => {
              const f = coreFeatures[1];
              const Icon = f.icon;
              return (
                <div className="group relative h-[520px] overflow-hidden rounded-[28px]">
                  <Image src={f.photo} alt={f.photoLabel} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                        <Icon className="h-3.5 w-3.5 text-[#3DDBC8]" /> {f.tag}
                      </span>
                      <span className="rounded-full bg-black/30 px-3 py-1 text-xs text-white/50 backdrop-blur-sm">{f.photoLabel}</span>
                    </div>
                    <div>
                      <div className="mb-4 flex items-end gap-3">
                        <span className="font-extrabold text-[52px] leading-none text-[#3DDBC8]">{f.stat}</span>
                        <span className="mb-2 text-sm text-white/50">{f.statLabel}</span>
                      </div>
                      <h3 className="font-extrabold text-[22px] leading-[1.1] text-white">{f.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/60">{f.text}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Row 2: narrow + wide (flipped) */}
          <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1.6fr]">
            {/* Explore Nearby */}
            {(() => {
              const f = coreFeatures[2];
              const Icon = f.icon;
              return (
                <div className="group relative h-[520px] overflow-hidden rounded-[28px]">
                  <Image src={f.photo} alt={f.photoLabel} fill className="object-cover object-center transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                        <Icon className="h-3.5 w-3.5 text-[#3DDBC8]" /> {f.tag}
                      </span>
                      <span className="rounded-full bg-black/30 px-3 py-1 text-xs text-white/50 backdrop-blur-sm">{f.photoLabel}</span>
                    </div>
                    <div>
                      <div className="mb-4 flex items-end gap-3">
                        <span className="font-extrabold text-[52px] leading-none text-[#3DDBC8]">{f.stat}</span>
                        <span className="mb-2 text-sm text-white/50">{f.statLabel}</span>
                      </div>
                      <h3 className="font-extrabold text-[22px] leading-[1.1] text-white">{f.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/60">{f.text}</p>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Itineraries — wide */}
            {(() => {
              const f = coreFeatures[3];
              const Icon = f.icon;
              return (
                <div className="group relative h-[520px] overflow-hidden rounded-[28px]">
                  <Image src={f.photo} alt={f.photoLabel} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                        <Icon className="h-3.5 w-3.5 text-[#3DDBC8]" /> {f.tag}
                      </span>
                      <span className="rounded-full bg-black/30 px-3 py-1 text-xs text-white/50 backdrop-blur-sm">{f.photoLabel}</span>
                    </div>
                    <div>
                      <div className="mb-4 flex items-end gap-3">
                        <span className="font-extrabold text-[52px] leading-none text-[#3DDBC8]">{f.stat}</span>
                        <span className="mb-2 text-sm text-white/50">{f.statLabel}</span>
                      </div>
                      <h3 className="font-extrabold text-[26px] leading-[1.1] text-white md:text-[30px]">{f.title}</h3>
                      <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">{f.text}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* ── TRIP TOOLS — photo bento ─────────────────────── */}
      <section className="bg-forest px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-8xl">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-medium text-[#3DDBC8]">// Trip Tools</span>
              <h2 className="mt-4 font-extrabold text-[32px] leading-[1.04] tracking-[-0.04em] text-white md:text-[48px]">
                More tools.<br />Less friction.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/55">
              On top of the core features, Nomy ships a full toolkit for the small things that trip you up mid-journey.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {toolFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group relative h-[340px] overflow-hidden rounded-[24px]">
                  <Image src={f.photo} alt={f.photoAlt} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/4" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3DDBC8]/20 text-[#3DDBC8] backdrop-blur-sm">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="mt-3 text-[18px] font-semibold text-white">{f.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">{f.text}</p>
                    <div className="mt-3 text-xs text-white/40">{f.photoAlt}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THE DIFFERENCE — two tall photo cards ────────── */}
      <section className="px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium text-forest/50">// The Difference</span>
            <h2 className="mt-4 font-extrabold text-[32px] leading-[1.04] tracking-[-0.04em] text-forest md:text-[52px]">
              One app replaces five.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-ink/55">
              Every Indian traveler knows this pain. Nomy finally solves it.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* BEFORE — busy India tourist scene */}
            <div className="group relative min-h-[560px] overflow-hidden rounded-[32px]">
              <Image
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80"
                alt="India travel chaos"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              {/* heavy warm dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a00]/95 via-[#1a0a00]/60 to-[#1a0a00]/20" />
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                <div>
                  <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-white/70 backdrop-blur-sm">
                    Before Nomy
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-[28px] leading-[1.1] text-white md:text-[34px]">
                    5 apps, 3 docs,<br />1 forgotten jacket.
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Notes app — rewriting packing list every trip",
                      "Google Docs — itinerary no one keeps updated",
                      "WhatsApp — recommendations buried in thread",
                      "Maps — no integration with your plan",
                      "Weather — doesn't talk to your packing list",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/25 text-[10px] font-bold text-red-400">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* AFTER — calm India landscape */}
            <div className="group relative min-h-[560px] overflow-hidden rounded-[32px]">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80"
                alt="Calm travel with Nomy"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              {/* forest dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B1E]/95 via-[#0D2B1E]/60 to-[#0D2B1E]/15" />
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                <div>
                  <span className="inline-block rounded-full border border-[#3DDBC8]/30 bg-[#3DDBC8]/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-[#3DDBC8] backdrop-blur-sm">
                    With Nomy
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-[28px] leading-[1.1] text-white md:text-[34px]">
                    One app.<br />Everything in place.
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {[
                      "AI packing list built for your destination",
                      "Day-by-day itinerary generated in one tap",
                      "AI chat for any travel question, anytime",
                      "Nearby gems — real local recommendations",
                      "Season & weather aware — no surprises",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3DDBC8]/25 text-[10px] font-bold text-[#3DDBC8]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="/#download" className="button-pill mt-8 inline-flex items-center gap-2 rounded-full bg-[#3DDBC8] px-6 py-3 text-sm font-semibold text-forest">
                    Try Nomy Free <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1800&q=80"
          alt="India travel"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        <div className="relative px-5 py-24 md:px-6 md:py-48">
          <div className="mx-auto max-w-8xl">
            <div className="max-w-xl flex gap-5 flex-col">
              <span className="text-sm font-medium text-[#3DDBC8]">// Ready to Travel Smarter?</span>
              <div className="flex gap-0 flex-col">
              <h2 className="mt-4 font-extrabold text-[36px] leading-[1.04] tracking-[-0.04em] text-white md:text-[58px]">
                All of this.<br />Free on Android.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/60">
                Smart packing, AI travel chat, nearby gems, and trip tools in one calm app. No account needed to start.
              </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#download" className="button-pill inline-flex items-center gap-2 rounded-full bg-[#3DDBC8] px-8 py-4 text-sm font-semibold text-forest">
                  Download Free on Android <ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/about" className="button-pill inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-medium text-white/80 backdrop-blur-sm transition hover:text-white">
                  Learn about Nomy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-forest/90 px-5 py-8 md:px-6">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-4 text-sm text-white/50 sm:flex-row">
          <p>© 2026 Nomy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
