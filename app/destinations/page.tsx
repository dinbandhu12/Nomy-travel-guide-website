import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Download,
  MapPinned,
  Mountain,
  Palmtree,
  Snowflake,
  Sun,
  Waves
} from "lucide-react";
import type { Metadata } from "next";
import PageNav from "@/components/page-nav";
import PageFooter from "@/components/page-footer";
import SmoothScroll from "@/components/smooth-scroll";
import { APP_VERSION, APK_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Destinations — Nomy",
  description:
    "Curated Indian destinations — beaches, mountains, deserts, cities — with AI-powered packing, plans, and local tips."
};

const featured = [
  {
    label: "GOA",
    title: "Beaches, sunsets, and calm monsoon escapes",
    tag: "Beach",
    temp: "32°C",
    bestTime: "Nov — Mar",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=80"
  },
  {
    label: "RAJASTHAN",
    title: "Desert forts, camel safaris, royal palaces",
    tag: "Desert",
    temp: "28°C",
    bestTime: "Oct — Mar",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=80"
  },
  {
    label: "KERALA",
    title: "Backwaters, food trails, Western Ghats",
    tag: "Tropical",
    temp: "29°C",
    bestTime: "Sep — Mar",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=80"
  },
  {
    label: "HIMACHAL",
    title: "Pine forests, trekking trails, hill stations",
    tag: "Mountain",
    temp: "18°C",
    bestTime: "Mar — Jun",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=80"
  },
  {
    label: "LADAKH",
    title: "High-altitude lakes, monasteries, motorbike roads",
    tag: "Adventure",
    temp: "12°C",
    bestTime: "Jun — Sep",
    image:
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1400&q=80"
  },
  {
    label: "MUMBAI",
    title: "Urban rhythm, street food, coastal drives",
    tag: "City",
    temp: "31°C",
    bestTime: "Oct — Feb",
    image:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1400&q=80"
  }
];

const categories = [
  {
    icon: Waves,
    title: "Beaches",
    count: "8 destinations",
    text: "Goa, Gokarna, Varkala, Pondicherry — coastal escapes with AI-tuned packing for humidity and sun."
  },
  {
    icon: Mountain,
    title: "Mountains",
    count: "12 destinations",
    text: "Himachal, Uttarakhand, Sikkim, Meghalaya — altitude-aware lists, layered clothing, trek-ready prep."
  },
  {
    icon: Sun,
    title: "Deserts",
    count: "4 destinations",
    text: "Jaisalmer, Jodhpur, Kutch — built for dry heat, cold nights, and dust-aware essentials."
  },
  {
    icon: Palmtree,
    title: "Tropical",
    count: "6 destinations",
    text: "Kerala, Andamans, Lakshadweep — monsoon-aware, rain-ready, humidity-friendly packing."
  },
  {
    icon: Snowflake,
    title: "Snow",
    count: "5 destinations",
    text: "Gulmarg, Auli, Tawang, Manali — sub-zero gear suggestions, layered AI guidance, offline trail maps."
  },
  {
    icon: Compass,
    title: "Cities",
    count: "10 destinations",
    text: "Mumbai, Delhi, Bengaluru, Kolkata, Chennai — urban essentials plus curated local food trails."
  }
];

const flow = [
  {
    n: "01",
    title: "Pick a destination",
    text: "Tap any of 30+ curated Indian destinations. Nomy auto-fills weather, season, and trip context."
  },
  {
    n: "02",
    title: "Get a smart packing list",
    text: "Generated in 30 seconds — tuned to trip duration, climate, and traveler style."
  },
  {
    n: "03",
    title: "Explore nearby places",
    text: "Google Places + curated recommendations — food spots, stays, landmarks, hidden gems."
  },
  {
    n: "04",
    title: "Ask the AI anything",
    text: "Permit rules, best sunset spots, safe taxis, vegetarian options — context-aware answers in seconds."
  }
];

export default function DestinationsPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#F4EFE6] text-forest">
        <PageNav />

        {/* HERO */}
        <section className="reveal-section px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // Destinations
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h1 className="reveal-element font-semibold text-[44px] leading-[1.02] tracking-[-0.03em] text-forest md:text-[76px]">
                Every corner of
                <br />
                <span className="font-serif italic font-normal">
                  incredible India
                </span>
              </h1>
              <div className="reveal-element">
                <p className="max-w-lg text-[15px] leading-7 text-forest/74">
                  From Goan beaches to Ladakhi passes Nomy covers 30+ curated
                  Indian destinations with AI-tuned packing, plans, and local
                  tips for every climate and rhythm.
                </p>
                {/* <div className="mt-6 flex flex-wrap gap-3"> */}
                <div className="mt-6">
                  {/* <a
                    href={APK_URL}
                    className="button-pill inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white"
                  >
                    <Download className="h-4 w-4" />
                    Download Free — {APP_VERSION}
                  </a> */}
                  <Link
                    href="/features"
                    className="button-pill inline-flex items-center gap-2 rounded-full border border-forest/18 bg-white px-5 py-2.5 text-sm font-medium text-forest"
                  >
                    See features
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="reveal-element mt-14 grid grid-cols-2 gap-10 border-t border-forest/15 pt-10 md:grid-cols-4">
              {[
                { n: "30+", label: "Curated places" },
                { n: "6", label: "Trip categories" },
                { n: "28", label: "Indian states" },
                { n: "All", label: "Seasons covered" }
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

        {/* FEATURED DESTINATIONS */}
        <section className="reveal-section px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // Featured destinations
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
                Six journeys
                <br />
                <span className="font-serif italic font-normal">
                  worth taking
                </span>
              </h2>
              <p className="reveal-element max-w-lg text-[15px] leading-7 text-forest/74">
                These are the destinations travelers come back to each one
                tuned for Nomy&apos;s context-aware packing, discovery, and AI
                chat.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((d) => (
                <article
                  key={d.label}
                  className="reveal-element group relative h-[460px] overflow-hidden rounded-[24px]"
                >
                  <img
                    src={d.image}
                    alt={d.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute left-6 top-6 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/16 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                      {d.label}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-black/30 px-3 py-1 text-[11px] text-white/85 backdrop-blur">
                      {d.tag}
                    </span>
                  </div>
                  <div className="absolute inset-x-6 bottom-6">
                    <h3 className="max-w-sm font-semibold text-[24px] leading-tight tracking-tight text-white md:text-[26px]">
                      {d.title}
                    </h3>
                    <div className="mt-5 flex items-center gap-4 border-t border-white/25 pt-4 text-[12px] text-white/78">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-white/55">
                          Avg temp
                        </p>
                        <p className="mt-1 font-medium text-white">{d.temp}</p>
                      </div>
                      <div className="h-8 w-px bg-white/20" />
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-white/55">
                          Best time
                        </p>
                        <p className="mt-1 font-medium text-white">
                          {d.bestTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="reveal-section bg-[#F0E9D9] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // Travel categories
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
                Every Indian
                <br />
                <span className="font-serif italic font-normal">
                  travel style
                </span>
              </h2>
              <p className="reveal-element max-w-lg text-[15px] leading-7 text-forest/74">
                Beach, mountain, desert, tropical, snow, or city Nomy builds
                around the climate and rhythm of each region, so packing and
                plans stay relevant.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="reveal-element min-h-[240px] rounded-[24px] border border-forest/10 bg-[#F9F4EA] p-8 shadow-soft md:p-10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-forest">
                        <Icon className="h-[22px] w-[22px]" />
                      </div>
                      <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-forest/55">
                        {c.count}
                      </span>
                    </div>
                    <h3 className="mt-6 text-[22px] font-semibold leading-tight text-forest">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-7 text-forest/70">
                      {c.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW THE FLOW WORKS */}
        <section className="reveal-section px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // Pick · Pack · Explore
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
                From destination
                <br />
                <span className="font-serif italic font-normal">
                  to doorstep
                </span>
              </h2>
              <p className="reveal-element max-w-lg text-[15px] leading-7 text-forest/74">
                One calm flow from picking a destination to walking out the
                door. Four steps each powered by AI context.
              </p>
            </div>

            <div className="mt-14 border-t border-forest/15">
              {flow.map((step) => (
                <div
                  key={step.n}
                  className="reveal-element grid gap-6 border-b border-forest/15 py-8 md:grid-cols-[120px_1fr_2fr] md:gap-10 md:py-10"
                >
                  <span className="text-[28px] font-semibold tracking-tight text-forest/35 md:text-[36px]">
                    {step.n}
                  </span>
                  <h3 className="text-[20px] font-semibold leading-tight text-forest md:text-[22px]">
                    {step.title}
                  </h3>
                  <p className="max-w-lg text-[14px] leading-7 text-forest/70">
                    {step.text}
                  </p>
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
                  Questions? We&apos;d love to{" "}
                  <span className="font-serif italic font-normal">hear from you</span>
                </h2>
                <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-forest/62">
                  Feedback, feature ideas, or just want to say hi — you&apos;ll reach the person building Nomy directly.
                </p>
                <a
                  href="/contact"
                  className="button-pill mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-white"
                >
                  Get in touch
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
