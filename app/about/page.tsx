import Link from "next/link";
import {
  ArrowUpRight,
  Backpack,
  Compass,
  Download,
  MapPinned,
  Sparkles
} from "lucide-react";
import type { Metadata } from "next";
import PageNav from "@/components/page-nav";
import PageFooter from "@/components/page-footer";
import SmoothScroll from "@/components/smooth-scroll";
import { APP_VERSION, APK_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Nomy",
  description:
    "The story behind Nomy — why one developer built a smarter travel app for India."
};

const values = [
  {
    icon: Backpack,
    title: "Built for how India actually travels",
    text:
      "Train cancellations, monsoon timing, permit zones Indian travel has its own rhythm. Nomy is built for that rhythm, not against it."
  },
  {
    icon: Sparkles,
    title: "AI that understands your context",
    text:
      "Not a generic chatbot. Nomy's AI knows your trip, GPS area, time of day, and season advice that's relevant right now."
  },
  {
    icon: Compass,
    title: "Calm by design",
    text:
      "Travel planning is stressful enough. Nomy is intentionally minimal no ads, no dark patterns, no engagement loops."
  },
  {
    icon: MapPinned,
    title: "Free for the basics, always",
    text:
      "Smart packing, trip planning, and nearby discovery stay free. Premium is reserved for power users who want unlimited AI."
  }
];

const timeline = [
  {
    label: "The Idea",
    text: "Started as a packing list generator a simple tool to stop overpacking for India trips.",
    done: true
  },
  {
    label: "Stage 1–2",
    text: "Built the design system, auth, and packing engine. First real build on Android.",
    done: true
  },
  {
    label: "Stage 3",
    text: "Added Google Maps, place discovery, and curated destinations across India.",
    done: true
  },
  {
    label: "Stage 4",
    text: "Integrated AI for chat and itinerary generation with editable daily plans.",
    done: true
  },
  {
    label: "Stage 5–6",
    text: "Polish, performance, budget tracker, checklist, notes, AI context v2 with GPS and season awareness.",
    done: true
  },
  {
    label: "Now",
    text: "Preparing for Play Store launch. Billing setup in progress, then publish.",
    done: false
  }
];

export default function AboutPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#F4EFE6] text-forest">
        <PageNav />

        {/* HERO */}
        <section className="reveal-section px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // About Nomy
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h1 className="reveal-element font-semibold text-[44px] leading-[1.02] tracking-[-0.03em] text-forest md:text-[76px]">
                Built by one developer,
                <br />
                <span className="font-serif italic font-normal">
                  for every Indian traveler
                </span>
              </h1>
              <div className="reveal-element">
                <p className="max-w-lg text-[15px] leading-7 text-forest/74">
                  Nomy started as a personal frustration. Planning a trip in
                  India means switching between five apps, maintaining a Notes
                  doc, and still forgetting something. There had to be a calmer
                  way so I built one.
                </p>
                <a
                  href={APK_URL}
                  className="button-pill mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white"
                >
                  <Download className="h-4 w-4" />
                  Download Free — {APP_VERSION}
                </a>
              </div>
            </div>

            <div className="reveal-element mt-14 grid grid-cols-2 gap-4 border-t border-forest/15 pt-10 md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]">
              {[
                ["Platform", "Android"],
                ["Team size", "1 developer"],
                ["Built with", "Flutter · AI"],
                ["Status", "Pre-launch"],
                ["Price", "Free"],
                ["Core", "Always free"]
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[12px] text-forest/55">{label}</p>
                  <p className="mt-2 text-[14px] font-medium text-forest">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="reveal-section px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // The problem
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
                Planning a trip in
                <br />
                <span className="font-serif italic font-normal">
                  India is messy
                </span>
              </h2>
              <div className="reveal-element">
                <p className="max-w-lg text-[15px] leading-7 text-forest/74">
                  There&apos;s a reason people joke about India travel planning
                  it requires a level of juggling that no generic app has
                  truly solved.
                </p>
                <Link
                  href="/features"
                  className="button-pill mt-6 inline-flex items-center gap-2 rounded-full border border-forest/18 bg-white px-5 py-2.5 text-sm font-medium text-forest"
                >
                  See all features
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Packing list in Notes",
                  text:
                    "Rewritten every trip. Never quite right for the destination or the season. The rain jacket you forgot last time? Still missing."
                },
                {
                  title: "Itinerary in Google Docs",
                  text:
                    "Shared with the group. Outdated by day two. Nobody knows which version is current, and half the links no longer work."
                },
                {
                  title: "Recommendations in WhatsApp",
                  text:
                    "Buried in a thread from three weeks ago. You screenshot it. You lose the screenshot. You ask the friend again."
                },
                {
                  title: "Forgot it was monsoon",
                  text:
                    "Because the weather app doesn't talk to your packing list, and neither of them talks to your trip. Travel planning is fragmented."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="reveal-element min-h-[220px] rounded-[24px] border border-forest/10 bg-white p-8 shadow-soft md:p-10"
                >
                  <p className="text-[20px] font-semibold leading-tight text-forest md:text-[22px]">
                    {item.title}
                  </p>
                  <p className="mt-4 text-[15px] leading-7 text-forest/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="reveal-section bg-[#F0E9D9] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // What we believe
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
                Principles behind
                <br />
                <span className="font-serif italic font-normal">
                  every decision
                </span>
              </h2>
              <p className="reveal-element max-w-lg text-[15px] leading-7 text-forest/74">
                Four core beliefs guide what Nomy does and just as
                importantly, what it refuses to do.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="reveal-element min-h-[260px] rounded-[24px] border border-forest/10 bg-[#F9F4EA] p-8 shadow-soft md:p-10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-forest">
                      <Icon className="h-[22px] w-[22px]" />
                    </div>
                    <h3 className="mt-6 text-[22px] font-semibold leading-tight text-forest">
                      {v.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-forest/70">
                      {v.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="reveal-section px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // Build journey
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
                From idea
                <br />
                <span className="font-serif italic font-normal">to launch</span>
              </h2>
              <p className="reveal-element max-w-lg text-[15px] leading-7 text-forest/74">
                Built stage by stage no big team, no outside funding. Just
                consistent progress toward a product worth launching.
              </p>
            </div>

            <div className="mt-14 border-t border-forest/15">
              {timeline.map((item, idx) => (
                <div
                  key={item.label}
                  className="reveal-element flex flex-col gap-3 border-b border-forest/15 py-6 md:flex-row md:items-start md:justify-between md:gap-10"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-xs font-medium tracking-[0.15em] text-forest/45 md:pt-1">
                      0{idx + 1}
                    </span>
                    <div>
                      <p className="text-[16px] font-semibold text-forest">
                        {item.label}
                      </p>
                      <p className="mt-2 max-w-md text-[13px] leading-6 text-forest/68">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  <span
                    className={
                      item.done
                        ? "inline-flex h-fit items-center gap-1.5 rounded-full bg-forest/8 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-forest/72"
                        : "inline-flex h-fit items-center gap-1.5 rounded-full bg-mint/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-forest"
                    }
                  >
                    <span
                      className={
                        item.done
                          ? "h-1.5 w-1.5 rounded-full bg-forest/60"
                          : "h-1.5 w-1.5 rounded-full bg-forest animate-pulse"
                      }
                    />
                    {item.done ? "Complete" : "In progress"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="reveal-section px-6 pb-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element relative overflow-hidden rounded-[24px] bg-[#F0E9D9]">
              <div className="px-6 py-24 text-center md:py-32">
                <h2 className="mx-auto max-w-[760px] font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[60px]">
                  Curious what we{" "}
                  <span className="font-serif italic font-normal">actually built?</span>
                </h2>
                <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-forest/62">
                  From smart packing to AI travel chat — see every feature that makes Nomy the one app Indian travelers actually keep.
                </p>
                <a
                  href="/features"
                  className="button-pill mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-white"
                >
                  See all features
                  <ArrowUpRight className="h-4 w-4" />
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
