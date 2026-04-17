import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Backpack,
  CheckSquare,
  Clock,
  Compass,
  Download,
  MapPin,
  MapPinned,
  MessageSquare,
  Settings2,
  Sparkles,
  StickyNote,
  Wallet,
  WifiOff
} from "lucide-react";
import type { Metadata } from "next";
import PageNav from "@/components/page-nav";
import PageFooter from "@/components/page-footer";
import SmoothScroll from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Features — Nomy",
  description:
    "Smart packing, AI travel chat, nearby gems, trip tools — everything Nomy does for your India trips."
};

const coreFeatures = [
  {
    label: "SMART PACKING",
    title: "A weather-aware packing list in 30 seconds.",
    description:
      "Enter destination and dates. Nomy reasons over season, trip type, and duration to build a list that's actually yours.",
    stat: "30s",
    statLabel: "average generation time",
    icon: Backpack,
    image:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "AI TRAVEL CHAT",
    title: "Ask any trip question. Get real answers.",
    description:
      "GPT-4o-mini grounded in destination context, weather, and your saved places. Not a generic chatbot.",
    stat: "GPT-4o",
    statLabel: "context-aware model",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "NEARBY DISCOVERY",
    title: "Hidden gems locals actually visit.",
    description:
      "Google Places powered discovery restaurants, stays, landmarks filtered by where you are and what you need.",
    stat: "30+",
    statLabel: "curated destinations",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "AI ITINERARIES",
    title: "Full day-by-day plans in one tap.",
    description:
      "Complete schedules for any Indian destination. Drag to reorder, check off stops, edit anytime.",
    stat: "1 tap",
    statLabel: "full trip plan",
    icon: MapPinned,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
  }
];

const howItWorks = [
  {
    step: "01",
    icon: MapPin,
    title: "Tell Nomy where you're headed",
    text:
      "Pick a destination and dates. Nomy instantly reads climate, season, and region context no lengthy forms, no manual setup."
  },
  {
    step: "02",
    icon: Backpack,
    title: "Generate a smart packing list",
    text:
      "In 30 seconds you get a weather-aware list tuned to trip duration, style, and destination. Edit freely Nomy remembers your preferences."
  },
  {
    step: "03",
    icon: MessageSquare,
    title: "Chat with your AI travel guide",
    text:
      "Ask anything permit rules, hidden sunset spots, vegetarian cafés, safe taxis. Context-aware answers grounded in your trip."
  },
  {
    step: "04",
    icon: Compass,
    title: "Explore nearby, arrive prepared",
    text:
      "Nearby discovery, saved places, offline trips Nomy stays useful at the airport, on the train, and out in the field."
  }
];

const toolFeatures = [
  {
    icon: Wallet,
    title: "Budget Tracker",
    text: "Log spend by category food, transport, stay, shopping. Per-category breakdowns, no spreadsheet."
  },
  {
    icon: CheckSquare,
    title: "Pre-Trip Checklist",
    text: "AI-generated checklist book stays, notify bank, download offline maps. Add your own items anytime."
  },
  {
    icon: StickyNote,
    title: "Trip Notes",
    text: "A quick scratchpad per trip. Check-in codes, taxi numbers, local tips synced to your account."
  },
  {
    icon: Clock,
    title: "Time & Location Aware",
    text: "The AI knows season, time, and your area. Ask 'what should I do tonight?' and get an actual answer."
  },
  {
    icon: WifiOff,
    title: "Offline Ready",
    text: "Packing lists and saved trips work without network. Built for real India travel trains, hills, remote zones."
  },
  {
    icon: Settings2,
    title: "Adaptive Preferences",
    text: "Nomy remembers your preferences food, trip style, packing rules and applies them to every new trip."
  }
];

export default function FeaturesPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#F4EFE6] text-forest">
        <PageNav />

        {/* HERO */}
        <section className="reveal-section px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
            // Features
          </div>
          <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
            <h1 className="reveal-element font-semibold text-[44px] leading-[1.02] tracking-[-0.03em] text-forest md:text-[76px]">
              Everything you need
              <br />
              <span className="font-serif italic font-normal">
                to travel smarter
              </span>
            </h1>
            <div className="reveal-element">
              <p className="max-w-lg text-[15px] leading-7 text-forest/74">
                From packing to discovery to real-time travel answers Nomy
                ships a full toolkit for Indian travelers, in a single calm
                flow.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/#download"
                  className="button-pill inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white"
                >
                  <Download className="h-4 w-4" />
                  Download Free
                </a>
                <Link
                  href="/about"
                  className="button-pill inline-flex items-center gap-2 rounded-full border border-forest/18 bg-white px-5 py-2.5 text-sm font-medium text-forest"
                >
                  About Nomy
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="reveal-element mt-14 grid grid-cols-2 gap-10 border-t border-forest/15 pt-10 md:grid-cols-4">
            {[
              { n: "10", label: "Core features" },
              { n: "30s", label: "Packing list" },
              { n: "30+", label: "Destinations" },
              { n: "Free", label: "Core always" }
            ].map((s) => (
              <div key={s.label}>
                <div className="font-semibold text-[36px] leading-none tracking-tight text-forest">
                  {s.n}
                </div>
                <p className="mt-3 text-[13px] text-forest/62">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="reveal-section px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
            // Core pillars of every trip
          </div>
          <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
            <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
              Four pillars, one
              <br />
              <span className="font-serif italic font-normal">calm flow</span>
            </h2>
            <p className="reveal-element max-w-lg text-[15px] leading-7 text-forest/74">
              The core of Nomy packing, discovery, AI chat, and itineraries works together so every action feeds the next.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {coreFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <article
                  key={f.title}
                  className="reveal-element group relative h-[520px] overflow-hidden rounded-[24px]"
                >
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/16 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur">
                        <Icon className="h-3.5 w-3.5 text-mint" />
                        {f.label}
                      </span>
                      <span className="rounded-full bg-black/30 px-3 py-1 text-[11px] text-white/80 backdrop-blur-sm">
                        {f.stat}
                      </span>
                    </div>
                    <div>
                      <h3 className="max-w-md font-semibold text-[28px] leading-[1.05] tracking-tight text-white md:text-[32px]">
                        {f.title}
                      </h3>
                      <p className="mt-4 max-w-md text-[14px] leading-7 text-white/70">
                        {f.description}
                      </p>
                      <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.15em] text-mint">
                        {f.statLabel}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="reveal-section px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
            // How it works
          </div>
          <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
            <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
              Four steps,
              <br />
              <span className="font-serif italic font-normal">
                one calm flow
              </span>
            </h2>
            <p className="reveal-element max-w-lg text-[15px] leading-7 text-forest/74">
              From picking a destination to walking out the door every step
              is shaped by AI context, so planning stays calm and packing stays
              smart.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="reveal-element relative flex min-h-[320px] flex-col rounded-[24px] border border-forest/10 bg-white p-8 shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-forest">
                      <Icon className="h-[22px] w-[22px]" />
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-forest/45">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[20px] font-semibold leading-tight text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-forest/70">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRIP TOOLS */}
      <section className="reveal-section bg-[#F0E9D9] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
            // Trip tools
          </div>
          <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
            <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
              More tools,
              <br />
              <span className="font-serif italic font-normal">
                less friction
              </span>
            </h2>
            <p className="reveal-element max-w-lg text-[15px] leading-7 text-forest/74">
              On top of the core features, Nomy ships a full toolkit for the
              small things that trip you up mid-journey budgets, notes,
              checklists, and offline safety.
            </p>
          </div>

          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {toolFeatures.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.title}
                  className="reveal-element rounded-[20px] border border-forest/10 bg-[#F9F4EA] p-7"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest/8 text-forest">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold text-forest">
                    {tool.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-forest/66">
                    {tool.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="reveal-section px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
            // The difference
          </div>
          <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
            <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
              One app replaces
              <br />
              <span className="font-serif italic font-normal">five</span>
            </h2>
            <p className="reveal-element max-w-lg text-[15px] leading-7 text-forest/74">
              Every Indian traveler knows this pain Notes, Docs, WhatsApp,
              Weather, Maps. Nomy brings all of it into a single flow.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <div className="reveal-element rounded-[22px] border border-forest/10 bg-white p-8 shadow-soft md:p-9">
              <span className="inline-block rounded-full bg-forest/8 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-forest/72">
                Before Nomy
              </span>
              <h3 className="mt-5 font-semibold text-[24px] leading-tight text-forest">
                5 apps, 3 docs, 1 forgotten jacket
              </h3>
              <ul className="mt-6 space-y-3 text-[13px] leading-6 text-forest/72">
                {[
                  "Notes — rewriting packing list every trip",
                  "Google Docs — outdated itinerary no one updates",
                  "WhatsApp — recommendations buried in a 3-week thread",
                  "Maps — no integration with your plan",
                  "Weather — doesn't talk to your packing list"
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal-element rounded-[22px] border border-forest/15 bg-forest p-8 text-white shadow-soft md:p-9">
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-mint">
                With Nomy
              </span>
              <h3 className="mt-5 font-semibold text-[24px] leading-tight">
                One app. Everything in place.
              </h3>
              <ul className="mt-6 space-y-3 text-[13px] leading-6 text-white/78">
                {[
                  "AI packing list built for your destination",
                  "Day-by-day itinerary in a single tap",
                  "AI chat for any travel question, anytime",
                  "Nearby gems — real local recommendations",
                  "Season & weather aware — no surprises"
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/#download"
                className="button-pill mt-7 inline-flex items-center gap-2 rounded-full bg-mint px-5 py-2.5 text-sm font-medium text-forest"
              >
                Try Nomy Free
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal-section px-6 pb-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal-element relative overflow-hidden rounded-[24px] bg-[#F0E9D9]">
            <div className="px-6 py-24 text-center md:py-32">
              <h2 className="mx-auto max-w-[760px] font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[60px]">
                All of this, free on{" "}
                <span className="font-serif italic font-normal">Android</span>
              </h2>
              <a
                href="/#download"
                className="button-pill mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-white"
              >
                <Download className="h-4 w-4" />
                Download Free on Android
              </a>
            </div>
          </div>
        </div>
      </section>

        <PageFooter />
      </div>
    </SmoothScroll>
  );
}
