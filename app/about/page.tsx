import Link from "next/link";
import { Backpack, Compass, Sparkles, MapPinned, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import PageNav from "@/components/page-nav";

export const metadata: Metadata = {
  title: "About — Nomy",
  description: "The story behind Nomy — why one developer built a smarter travel app for India.",
};

const values = [
  {
    icon: Backpack,
    title: "Built for how India travel actually works",
    text: "Train cancellations, last-minute permit requirements, asking locals for directions in three languages — Indian travel is unique. Generic travel apps aren't built for this. Nomy is.",
    dark: false,
  },
  {
    icon: Sparkles,
    title: "AI that knows your context",
    text: "Not just a chatbot. Nomy's AI knows your trip, your GPS location at area level, the time of day, and the season. Advice that's relevant to right now.",
    dark: true,
  },
  {
    icon: Compass,
    title: "Calm by design",
    text: "Travel planning is already stressful. Nomy is intentionally minimal — no ads, no noise, no dark patterns. Just the tools you need, when you need them.",
    dark: false,
  },
  {
    icon: MapPinned,
    title: "Free for the basics, always",
    text: "Smart packing, trip planning, and exploring nearby places are free. Core features stay free forever. Premium is for power users who want unlimited AI.",
    dark: true,
  },
];

const timeline = [
  { label: "The Idea", text: "Started as a packing list generator — a simple tool to stop overpacking for India trips.", done: true },
  { label: "Stage 1–2", text: "Built the design system, authentication, and packing engine. First real build on Android.", done: true },
  { label: "Stage 3", text: "Added Google Maps, place discovery, and curated destinations across India.", done: true },
  { label: "Stage 4", text: "Integrated AI for chat and itinerary generation. Trip planning and editable itineraries.", done: true },
  { label: "Stage 5–6", text: "Polish, performance, budget tracker, checklist, notes, AI context v2 with GPS and season.", done: true },
  { label: "Now", text: "Preparing for Play Store launch. Billing setup in progress, then publish.", done: false },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageNav />

      {/* Hero */}
      <section className="bg-forest px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <span className="inline-block rounded-full border border-[#3DDBC8]/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#3DDBC8]">
                About Nomy
              </span>
              <h1 className="mt-5 font-extrabold text-[44px] leading-[1.0] tracking-[-0.04em] text-white md:text-[68px]">
                Built by one<br />developer.<br />
                <span className="text-[#3DDBC8]">For every</span><br />Indian traveler.
              </h1>
              <p className="mt-7 max-w-lg text-base leading-8 text-white/65">
                Nomy started as a personal frustration. Planning a trip to India means switching between
                five apps, maintaining a Notes doc, and still forgetting something. There had to be a calmer way — so I built one.
              </p>
              <a href="/#download" className="button-pill mt-8 inline-flex items-center gap-2 rounded-full bg-[#3DDBC8] px-7 py-3.5 text-sm font-medium text-forest">
                Download Free on Android <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/6 p-7 backdrop-blur-sm">
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-white/40">App at a glance</p>
              <div className="space-y-0">
                {[
                  ["Platform", "Android (iOS coming)"],
                  ["Team size", "1 developer"],
                  ["Built with", "Flutter · Firebase · AI"],
                  ["Status", "Pre-launch"],
                  ["Price", "Free to download"],
                  ["Core features", "Always free"],
                ].map(([label, value], i, arr) => (
                  <div key={label} className={`flex items-center justify-between py-4 ${i !== arr.length - 1 ? "border-b border-white/10" : ""}`}>
                    <span className="text-sm text-white/45">{label}</span>
                    <span className="text-sm font-medium text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-[#D6C9B6] bg-[#FBF7F0] px-5 py-10 md:px-6">
        <div className="mx-auto max-w-8xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "1", label: "Developer" },
              { value: "6", label: "Build stages" },
              { value: "30s", label: "Packing list" },
              { value: "Free", label: "Always" },
            ].map((s) => (
              <div key={s.label} className="rounded-[20px] border border-[#D6C9B6] bg-[#FBF7F0] px-6 py-7 text-center shadow-soft">
                <div className="font-extrabold text-[38px] leading-none text-forest md:text-[48px]">{s.value}</div>
                <p className="mt-2 text-sm text-forest/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <span className="text-sm font-medium text-forest/50">// The Problem</span>
              <h2 className="mt-4 font-extrabold text-[34px] leading-[1.04] tracking-[-0.04em] text-forest md:text-[52px]">
                Planning a trip<br />in India is messy.
              </h2>
              <p className="mt-6 text-base leading-8 text-ink/60">
                There&apos;s a reason people joke about India travel planning — it requires a level of juggling that no app has ever truly solved.
              </p>
              <p className="mt-4 text-base leading-8 text-ink/60">
                Nomy puts all of it in one place. Smart packing that knows the season. AI that knows where you are.
                Trip tools that actually stay organized.
              </p>
              <Link href="/features" className="button-pill mt-8 inline-flex items-center gap-2 rounded-full border border-forest/20 bg-[#FBF7F0] px-6 py-3 text-sm font-medium text-forest transition hover:bg-forest hover:text-white">
                See all features <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { emoji: "📋", title: "Packing list on Notes", text: "Rewritten before every trip. Never quite right for the destination or season." },
                { emoji: "📄", title: "Itinerary on Google Docs", text: "Shared with the group. Outdated by day two. Nobody knows which version is current." },
                { emoji: "💬", title: "Recommendations on WhatsApp", text: "Buried in a thread from three weeks ago. You screenshot it and then can't find the screenshot." },
                { emoji: "🌧️", title: "Forgot it was monsoon season", text: "Because the weather app doesn't talk to your packing list." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-[20px] border border-[#D6C9B6] bg-[#FBF7F0] p-5 shadow-soft">
                  <span className="mt-0.5 text-2xl">{item.emoji}</span>
                  <div>
                    <p className="font-semibold text-forest">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-ink/60">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-forest px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-8xl">
          <span className="text-sm font-medium text-[#3DDBC8]">// What We Believe</span>
          <h2 className="mt-4 font-extrabold text-[34px] leading-[1.04] tracking-[-0.04em] text-white md:text-[52px]">
            The principles behind<br />every decision.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className={`rounded-[24px] p-7 ${v.dark ? "border border-white/10 bg-white/8" : "bg-[#FBF7F0]"}`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${v.dark ? "bg-white/10 text-[#3DDBC8]" : "bg-forest/8 text-forest"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className={`mt-5 text-[18px] font-semibold leading-tight ${v.dark ? "text-white" : "text-forest"}`}>{v.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${v.dark ? "text-white/60" : "text-ink/62"}`}>{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Build Timeline */}
      <section className="px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <span className="text-sm font-medium text-forest/50">// Build Journey</span>
              <h2 className="mt-4 font-extrabold text-[34px] leading-[1.04] tracking-[-0.04em] text-forest md:text-[52px]">
                From idea<br />to launch.
              </h2>
              <p className="mt-5 text-base leading-8 text-ink/60">
                Built stage by stage — no big team, no outside funding. Just consistent progress toward a product worth launching.
              </p>
              <div className="mt-8 rounded-[20px] bg-forest p-6">
                <p className="text-sm font-medium text-[#3DDBC8]">Current status</p>
                <p className="mt-2 text-xl font-semibold text-white">Pre-launch · Play Store soon</p>
                <p className="mt-2 text-sm text-white/55">All core stages complete. Billing setup in progress, then publish.</p>
              </div>
            </div>
            <div className="rounded-[28px] border border-[#D6C9B6] bg-[#FBF7F0] p-7 shadow-soft">
              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <div key={item.label} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-2 ${item.done ? "border-forest bg-forest" : "border-[#3DDBC8] bg-[#3DDBC8]"}`} />
                      {i < timeline.length - 1 && <div className="my-1 w-0.5 flex-1 bg-[#D6C9B6]" />}
                    </div>
                    <div className={`${i < timeline.length - 1 ? "pb-6" : "pb-0"}`}>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-forest/40">{item.label}</p>
                      <p className="mt-1 text-sm leading-7 text-ink/68">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="text-sm font-medium text-[#3DDBC8]">// Join Us</span>
              <h2 className="mt-4 font-extrabold text-[32px] leading-[1.04] tracking-[-0.04em] text-white md:text-[46px]">
                Be among the first<br />to travel with Nomy.
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-white/60">
                Launching soon on Android. Free to download. Your next trip will be lighter.
              </p>
            </div>
            <a href="/#download" className="button-pill shrink-0 inline-flex items-center gap-2 rounded-full bg-[#3DDBC8] px-8 py-4 text-sm font-medium text-forest">
              Download Free <ArrowRight className="h-4 w-4" />
            </a>
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
