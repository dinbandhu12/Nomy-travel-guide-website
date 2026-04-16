"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { CircleArrowUp, CheckCircle, Leaf, Menu, ShoppingBag, X } from "lucide-react";
import {
  communityPhotos,
  featureCards,
  footerLinks,
  guideHighlights,
  navItems,
  photoSet,
  quickFeatures,
  services,
  testimonials
} from "@/lib/data";
import { cn } from "@/lib/utils";
import { Draggable, ScrollTrigger, setupGsap } from "@/lib/gsap";

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const railViewportRef = useRef<HTMLDivElement | null>(null);
  const railTrackRef = useRef<HTMLDivElement | null>(null);
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
          y: 48,
          opacity: 0,
          duration: 1.05,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: { trigger: section, start: "top 82%" }
        });
      });

      gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((element) => {
        gsap.to(element, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: element, scrub: true }
        });
      });

      const viewport = railViewportRef.current;
      const track = railTrackRef.current;
      if (viewport && track) {
        const maxX = () => Math.min(0, viewport.clientWidth - track.scrollWidth);
        Draggable.create(track, {
          type: "x",
          bounds: { minX: maxX(), maxX: 0 },
          edgeResistance: 0.88,
          inertia: false,
          onPress: () => track.classList.add("cursor-grabbing"),
          onRelease: () => track.classList.remove("cursor-grabbing")
        });
      }
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
      if (currentY < 80) {
        setNavVisible(true);
      } else if (currentY > lastY) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={rootRef}>
      <header className={cn("fixed inset-x-0 top-4 z-50 px-4 transition-transform duration-500 md:px-6", navVisible ? "translate-y-0" : "-translate-y-[140%]")}>
        <div className="page-shell">
          <div className="glass-nav mx-auto rounded-[24px] border border-[#D6C9B6]/60 shadow-soft md:px-7">
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
                  <a key={item} href={item === "Contact" ? "/contact" : item === "About" ? "/about" : item === "Features" ? "/features" : `#${item.toLowerCase().replace(/\s+/g, "-")}`} className="transition hover:text-forest">
                    {item}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <a href="#download" className="button-pill hidden rounded-full bg-forest px-6 py-3 text-sm font-medium text-white lg:inline-flex">Download App</a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((o) => !o)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/8 text-forest lg:hidden"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
            {mobileMenuOpen && (
              <div className="border-t border-forest/10 px-5 pb-5 pt-4 lg:hidden">
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={item === "Contact" ? "/contact" : item === "About" ? "/about" : `#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-[14px] px-4 py-3 text-sm font-medium text-forest/80 transition hover:bg-forest/5 hover:text-forest"
                    >
                      {item}
                    </a>
                  ))}
                  <a href="#download" onClick={() => setMobileMenuOpen(false)} className="button-pill mt-2 rounded-full bg-forest px-6 py-3 text-center text-sm font-medium text-white">
                    Download on Android
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="overflow-hidden">
        <section id="home" className="section-block px-4 pb-12 pt-24 md:px-6 md:pb-16 md:pt-28">
          <div className="page-shell">
            <div className="overflow-hidden rounded-[34px] border border-[#D6C9B6] bg-[#FBF7F0] shadow-soft">
              <div className="px-5 py-8 md:px-7 md:py-10">
                <div className="grid gap-10 md:grid-cols-[1.35fr_0.65fr]">
                  <div className="reveal-element">
                    <h1 className="max-w-4xl font-extrabold text-[42px] leading-[0.95] tracking-[-0.04em] text-forest/90 md:text-[76px]">
                      Travel Light.<br />Travel Smart.
                    </h1>
                  </div>
                  <div className="reveal-element flex flex-col items-start justify-center">
                    <p className="max-w-sm text-base leading-7 text-ink/82">
                      Planning a trip in India means juggling 6 apps, 4 browser tabs, and a WhatsApp group. Nomy puts it all in one calm place.
                    </p>
                    <p className="mt-3 text-sm font-medium text-forest/60">Built for Goa, Rajasthan, Kerala, and every trip in between.</p>
                    <a href="#download" className="button-pill mt-8 rounded-pill bg-mint px-8 py-4 text-sm font-medium text-forest">Download Free on Android</a>
                    <p className="mt-3 flex items-center gap-1.5 text-xs text-forest/70"><CheckCircle className="h-3.5 w-3.5" />Available Free on Android · Core features always free</p>
                  </div>
                </div>
                
                <div className="reveal-element mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4 border-t border-[#D6C9B6] pt-10">
                  {quickFeatures.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex flex-row items-center justify-center gap-3 rounded-[24px] bg-[#FBF7F0] border border-[#D6C9B6] p-6 text-forest shadow-soft hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest/5 text-forest">
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="text-[15px] font-semibold text-center">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
 
              <div className="reveal-element relative m-1 overflow-hidden rounded-[28px]">
                <div className="parallax-wrap relative h-[520px] md:h-[860px]">
                  <img src={photoSet.hero} alt="Travel landscape" className="parallax-img h-[120%] w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-forest/35 via-transparent to-transparent" />
                </div>

                <div className="glass-chip absolute bottom-4 left-4 z-10 rounded-[22px] p-4 text-white shadow-soft md:bottom-8 md:left-8 md:w-[360px]">
                  <div className="grid grid-cols-[96px_1fr] gap-4">
                    <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80" alt="Jaipur, India" className="h-24 w-24 rounded-[16px] object-cover" />
                    <div>
                      <p className="text-sm leading-6 text-white/80">Your AI travel companion — built for India, designed to travel light.</p>
                      <div className="mt-3 flex items-end gap-2">
                        <span className="font-extrabold text-3xl leading-none">Free</span>
                        <span className="pb-1 text-sm text-white/75">on Android</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section-block bg-forest px-4 py-12 md:px-6 md:py-[150px]">
          <div className="page-shell">
            <div className="text-center">
              <p className="reveal-element text-sm text-[#3DDBC8]">// How It Works</p>
              <h2 className="reveal-element mt-3 font-extrabold text-[40px] leading-[1.06] tracking-[-0.04em] text-white md:text-[60px]">Three Steps to a Calmer Trip.</h2>
              <p className="reveal-element mx-auto mt-4 max-w-xl text-base leading-7 text-white/60">No more switching between apps. Nomy handles the whole journey in one place.</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { step: "01", title: "Tell Nomy where you're going", text: "Enter your destination and travel dates. Nomy instantly understands your trip context — destination, season, duration." },
                { step: "02", title: "Get a smart packing list + nearby gems", text: "An AI-curated packing list, local food spots, landmarks, and hidden gems — all tailored to your trip in seconds." },
                { step: "03", title: "Chat with your AI guide anytime", text: "Ask anything about your destination mid-trip. Get real, contextual answers without switching between five different apps." }
              ].map((item) => (
                <div key={item.step} className="reveal-element rounded-[28px] bg-[#FBF7F0] p-8 shadow-card">
                  <div className="font-extrabold text-[64px] leading-none text-forest">{item.step}</div>
                  <h3 className="mt-4 text-[22px] font-medium leading-tight text-forest">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-ink/82">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-20 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="reveal-element text-sm text-[#3DDBC8]">// About us</p>
                <h2 className="reveal-element mt-3 max-w-xl font-extrabold text-[42px] leading-[1.02] tracking-[-0.04em] text-white md:text-[64px]">
                  Our Main Goal is to Simplify The Travel Journey.
                </h2>
                <div className="mt-10 grid gap-6 md:grid-cols-[210px_1fr]">
                  <div className="reveal-element rounded-[24px] bg-[#FBF7F0] p-4 shadow-card">
                    <div className="text-center text-sm font-medium pb-2 text-forest">Early Access</div>
                    <div className="rounded-[16px] bg-mint p-3"><img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=500&q=80" alt="Travel card" className="h-28 w-full rounded-[14px] object-cover" /></div>
                    <div className="mt-5 font-extrabold text-6xl leading-none text-forest">Free</div>
                    <p className="mt-3 text-sm leading-6 text-ink/82">Download free on Android and be among our first users.</p>
                  </div>
                  <div className="reveal-element flex flex-col justify-center md:pr-8 md:pl-8">
                    <p className="max-w-md text-base leading-8 text-white/80">
                      Nomy is your AI-powered travel companion for India. Smart packing lists in under 30 seconds, AI chat for any destination question, offline maps, and a trip planner built for how India travel actually works.
                    </p>
                    <p className="mt-3 text-sm text-[#3DDBC8] font-medium">Core features free forever. Premium unlocks unlimited AI chat.</p>
                    <a href="#download" className="mt-8 inline-flex w-fit rounded-pill bg-mint px-7 py-3 text-sm font-medium text-forest">Download Free</a>
                  </div>
                </div>
              </div>
              <div className="reveal-element relative">
                <div className="absolute md:left-[-14px] top-[-14px] h-full w-full rounded-[30px] border border-mint/80" />
                <div className="relative overflow-hidden rounded-[30px]"><img src={photoSet.mission} alt="Traveler checking phone" className="h-[540px] w-full object-cover" /></div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section-block px-4 py-12 md:px-6 md:py-[150px]">
          <div className="page-shell">
            <div className="grid gap-8 border-b border-[#D6C9B6] pb-12 md:grid-cols-[1fr_0.6fr]">
              <div>
                <p className="reveal-element text-sm text-forest/54">// Features</p>
                <h2 className="reveal-element mt-3 max-w-3xl font-extrabold text-[42px] leading-[1.02] tracking-[-0.04em] text-forest/90 md:text-[64px]">
                  From Planning to Packing:
                  <br />
                  We&apos;ve Got You Covered.
                </h2>
              </div>
              <div className="reveal-element flex flex-col items-start justify-center md:items-end">
                <p className="max-w-sm text-base leading-7 text-ink/82">Nomy is more than a travel app — it is a calmer way to plan, pack, and explore India.</p>
                <a href="#download" className="button-pill mt-7 rounded-pill bg-forest px-7 py-3 text-sm font-medium text-white">Download on Android</a>
              </div>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-[340px_1fr_340px] md:items-start">
              <div className="reveal-element overflow-hidden rounded-[22px] md:mt-8"><img src={photoSet.servicesLeft} alt="Travel photo left" className="h-[260px] w-full object-cover md:h-[360px]" /></div>
              <div className="space-y-7 pt-2 text-center">
                {services.map((item) => (
                  <div key={item.title} className={cn("reveal-element mx-auto max-w-[560px]", item.featured ? "relative rounded-[22px] bg-forest px-8 py-7 text-white shadow-soft" : "")}>
                    <h3 className={cn("text-[28px] font-medium leading-tight", item.featured ? "text-[#3DDBC8]" : "text-forest")}>{item.title}</h3>
                    <p className={cn("mx-auto mt-2 max-w-md text-base leading-7", item.featured ? "text-white/76" : "text-ink/82")}>{item.description}</p>
                    {item.featured ? <div className="absolute left-0 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-mint text-forest"><Leaf className="h-6 w-6" /></div> : null}
                  </div>
                ))}
              </div>
              <div className="reveal-element overflow-hidden rounded-[22px] md:mt-[180px]"><img src={photoSet.servicesRight} alt="Travel photo right" className="h-[260px] w-full object-cover md:h-[360px]" /></div>
            </div>
          </div>
        </section>

        <section className="section-block px-4 py-12 md:px-6 md:py-[150px]">
          <div className="page-shell">
            <div className="mb-20 text-center">
              <p className="reveal-element text-sm text-forest/54">// Why Choose Nomy</p>
              <h2 className="reveal-element mx-auto mt-3 max-w-4xl font-extrabold text-[40px] leading-[1.06] tracking-[-0.04em] text-forest/90 md:text-[62px]">
                Built for India. Designed to Make Every Trip Feel Lighter.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-[0.55fr_1fr_0.35fr] md:items-start">
              <div className="space-y-8">
                <div className="reveal-element">
                  <p className="max-w-[260px] text-base leading-8 text-ink/82">We built Nomy because travel planning in India is messy — too many apps, too much friction. Nomy brings it all into one calm, intelligent flow.</p>
                  <a href="#download" className="button-pill mt-8 inline-flex rounded-pill bg-forest px-7 py-3 text-sm font-medium text-white">Download Free</a>
                </div>
                <div className="reveal-element rounded-[24px] bg-forest p-7 shadow-card">
                  {[
                    ["30s", "Packing list in under 30 seconds"],
                    ["Offline", "Works without internet signal"],
                    ["Free", "Core features, free on Android"]
                  ].map(([value, label], index) => (
                    <div key={value} className={cn("pb-5", index !== 2 && "mb-5 border-b border-white/12")}>
                      <div className="font-extrabold text-6xl leading-none text-mint">{value}</div>
                      <p className="mt-2 text-base text-white/75">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal-element overflow-hidden rounded-[28px]">
                <div className="relative">
                  <img src={photoSet.storyMain} alt="Road trip landscape" className="h-[680px] w-full object-cover md:h-[700px]" />
                  <div className="absolute inset-x-5 bottom-5 rounded-[24px] bg-[#FBF7F0] p-5 shadow-soft">
                    <div className="grid items-center gap-4 md:grid-cols-[54px_1fr_32px]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mint text-forest"><ShoppingBag className="h-6 w-6" /></div>
                      <div>
                        <h3 className="text-2xl font-medium text-forest">AI Travel Guide</h3>
                        <p className="mt-1 text-sm leading-6 text-ink/82">Destination context, food spots, and real-time travel help — all in one place.</p>
                      </div>
                      <div className="space-y-2"><div className="ml-auto h-2 w-2 rounded-full bg-forest" /><div className="ml-auto h-2 w-2 rounded-full bg-mint" /></div>
                    </div>
                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                      {guideHighlights.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.title} className="rounded-[18px] bg-[#FBF7F0] p-4">
                            <Icon className="h-5 w-5 text-forest" />
                            <h4 className="mt-3 text-base font-medium text-forest">{item.title}</h4>
                            <p className="mt-2 text-sm leading-6 text-ink/82">{item.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="reveal-element overflow-hidden rounded-[24px]"><img src={photoSet.storySide} alt="Travel companion detail" className="h-[240px] w-full object-cover md:h-[310px]" /></div>
            </div>
          </div>
        </section>

        <section className="section-block px-4 py-6 md:px-6 md:pb-[150px]">
          <div className="page-shell">
            <div className="mb-20 text-center">
              <p className="reveal-element text-sm text-forest/54">// Core Features</p>
              <h2 className="reveal-element mx-auto mt-3 max-w-3xl font-extrabold text-[40px] leading-[1.06] tracking-[-0.04em] text-forest/90 md:text-[62px]">
                Your Travel Toolkit:<br />Everything in One App.
              </h2>
              <p className="reveal-element mx-auto mt-4 max-w-xl text-base leading-7 text-ink/82">Packing, planning, discovery, and AI travel chat — built to make your journey feel lighter from day one.</p>
            </div>

            <div ref={railViewportRef} className="reveal-element overflow-hidden">
              <div ref={railTrackRef} className="flex cursor-grab gap-6">
                {featureCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article key={card.title} className="min-w-[82vw] rounded-[28px] bg-forest p-6 text-white sm:min-w-[420px] md:min-w-[760px] md:p-7">
                      <div className="flex items-start justify-between gap-4 md:gap-8">
                        <div className="min-w-0">
                          <p className="text-sm text-[#3DDBC8]">{card.index}</p>
                          <h3 className="mt-3 max-w-[420px] font-extrabold text-[32px] leading-[1.02] tracking-[-0.04em] md:text-[54px]">{card.title}</h3>
                        </div>
                        <div className="glass-chip hidden w-[210px] shrink-0 rounded-[22px] p-3 text-white sm:block">
                          <img src={card.place.image} alt={card.place.name} className="h-28 w-full rounded-[14px] object-cover" />
                          <div className="mt-3 rounded-[14px] bg-white/12 p-3 backdrop-blur-md">
                            <div className="text-sm uppercase tracking-[0.18em] text-white/72">Featured Place</div>
                            <div className="mt-2 text-xl font-medium">{card.place.name}</div>
                            <div className="mt-2 text-sm text-white/72">{card.place.subtitle}</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#0D3349] text-[#3DDBC8]"><Icon className="h-8 w-8" /></div>
                      <p className="mt-8 max-w-[560px] text-lg leading-9 text-white/74">{card.text}</p>
                      <div className="mt-10 grid grid-cols-3 gap-8 border-t border-white/12 pt-5 text-sm">
                        <div><p className="text-white/44">{card.meta[0]}</p><p className="mt-2 text-xl text-white">{card.meta[1]}</p></div>
                        <div><p className="text-white/44">Availability</p><p className="mt-2 text-xl text-white">24/7</p></div>
                        <div><p className="text-white/44">Experience</p><p className="mt-2 text-xl text-white">Premium</p></div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="reveal-element mt-8 flex justify-center"><a href="#download" className="button-pill rounded-pill bg-mint px-7 py-3 text-md font-medium text-forest">Download on Android</a></div>
          </div>
        </section>

        <section className="section-block px-4 py-12 md:px-6 md:py-[150px]">
          <div className="page-shell">
            <div className="grid gap-4 md:grid-cols-3">
              {communityPhotos.slice(0, 4).map((src) => <PhotoTile key={src} src={src} />)}
              <div className="reveal-element flex min-h-[280px] flex-col items-center justify-center rounded-[18px] bg-[#FBF7F0] px-6 text-center">
                <h2 className="font-extrabold text-[48px] leading-[1.02] tracking-[-0.04em] text-forest/90">Trips shaped<br />by real travelers.</h2>
                <a href="#download" className="button-pill mt-8 rounded-pill bg-forest px-7 py-3 text-sm font-medium text-white">Download Nomy Free</a>
              </div>
              {communityPhotos.slice(4).map((src) => <PhotoTile key={src} src={src} />)}
            </div>
          </div>
        </section>

        <section className="section-block bg-forest px-4 py-12 md:px-6 md:py-[150px]">
          <div className="page-shell">
            <div className="text-center mb-12">
              <p className="reveal-element text-sm text-[#3DDBC8]">// What Travelers Say</p>
              <h2 className="reveal-element mt-3 font-extrabold text-[40px] leading-[1.06] tracking-[-0.04em] text-white md:text-[60px]">Real Travelers. Real Trips.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {testimonials.map((t) => (
                <div key={t.handle} className="reveal-element flex flex-col rounded-[24px] bg-[#FBF7F0] p-6 shadow-soft border border-[#D6C9B6]">
                  <p className="text-base leading-8 text-ink/82 flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-medium text-forest">{t.name}</p>
                      <p className="text-xs text-forest/70">{t.handle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section-block bg-[#EDE8DF] px-4 py-12 md:px-6 md:py-[150px]">
          <div className="page-shell">
            <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-start">
              <div>
                <p className="reveal-element text-sm text-forest/54">// What Travelers Get</p>
                <h2 className="reveal-element mt-3 max-w-3xl font-extrabold text-[42px] leading-[1.02] tracking-[-0.04em] text-forest/90 md:text-[64px]">
                  Every Feature Built
                  <br />
                  for Smarter Travel.
                </h2>
              </div>
              <p className="reveal-element max-w-md text-base leading-8 text-ink/82">From packing smart to discovering hidden gems, Nomy covers every step of your journey — before, during, and after.</p>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-4">
              <ReviewImageCard className="reveal-element" image="https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=800&q=80" />
              <ReviewTextCard
                className="reveal-element"
                title="Smart Packing"
                text="AI-curated packing lists that adapt to your destination, trip length, and weather. Stop overpacking for good."
              />
              <ReviewImageCard className="reveal-element" image="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80" />
              <ReviewTextCard
                className="reveal-element"
                title="Explore Nearby"
                text="Discover places worth visiting close to you — restaurants, landmarks, and hidden spots that locals actually recommend."
                dark
              />
              <ReviewTextCard
                className="reveal-element"
                title="AI Travel Chat"
                text="Ask anything about your destination and get real, contextual answers. No more switching between five different apps."
                muted
              />
              <ReviewImageCard className="reveal-element" image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80" />
              <ReviewTextCard
                className="reveal-element"
                title="Works Offline"
                text="Packing lists and saved trips stay accessible even when your network drops mid-journey. Built for real India travel."
                bg="bg-[#6846b4]"
              />
              <ReviewImageCard className="reveal-element" image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" />
            </div>
          </div>
        </section>

        <section id="download" className="section-block px-4 py-12 md:px-6 md:py-[150px]">
          <div className="page-shell">
            <div className="reveal-element relative overflow-hidden rounded-[28px]">
              <div className="absolute inset-0">
                <img src={photoSet.cta} alt="Travel destination aerial" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,61,46,0.78),rgba(0,61,46,0.18))]" />
              </div>
              <div className="relative grid gap-8 px-6 py-16 md:grid-cols-[1fr_300px] md:items-start md:px-10 md:py-24">
                <div className="text-white">
                  <p className="text-sm text-white/78">// Download Now</p>
                  <h2 className="mt-4 max-w-3xl font-extrabold text-[38px] leading-[1.02] tracking-[-0.04em] md:text-[60px]">Nomy is on Android.<br />Start Your Journey Free.</h2>
                  <p className="mt-8 max-w-lg text-[22px] leading-9 md:mt-16 md:text-[28px]">Pack lighter. Explore smarter. Your AI travel companion is ready — available free on Android.</p>
                  <a href="#" className="button-pill mt-10 inline-flex rounded-pill bg-mint px-8 py-4 text-sm font-medium text-forest">Download on Android</a>
                </div>
                <div className="h-fit rounded-[22px] bg-[#FBF7F0] p-5 shadow-soft">
                  <div className="rounded-[18px] bg-mint p-3"><img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=500&q=80" alt="Nomy app preview" className="h-44 w-full rounded-[14px] object-cover" /></div>
                  <div className="mt-5 font-extrabold text-5xl leading-none text-forest">Free</div>
                  <p className="mt-3 max-w-[220px] text-sm leading-6 text-ink/82">Download free on Android. Smart packing, AI chat, and trip planning — all in one app.</p>
                </div>
              </div>
            </div>

            <div className="mt-24 reveal-element rounded-[28px] border border-[#D6C9B6] bg-[#FBF7F0] p-8 shadow-soft md:p-12">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-sm text-forest/54">// Early Access</p>
                  <h2 className="mt-3 max-w-lg font-extrabold text-[38px] leading-[1.04] tracking-[-0.04em] text-forest md:text-[52px]">Be the First to<br />Travel with Nomy.</h2>
                  <p className="mt-4 max-w-md text-base leading-7 text-ink/82">Join the waitlist and get early access when Nomy launches on the Play Store. Free forever for early users.</p>
                  <div className="mt-8 flex max-w-[420px] flex-col gap-3 sm:flex-row">
                    <input type="email" placeholder="Enter your email..." className="flex-1 rounded-pill border border-border bg-[#FBF7F0] px-5 py-3.5 text-md placeholder:text-ink/60 outline-none focus:border-forest/30" />
                    <button type="button" className="button-pill rounded-pill bg-forest px-6 py-3.5 text-md font-medium text-white whitespace-nowrap">Join Waitlist</button>
                  </div>
                  <p className="mt-3 text-xs text-forest/65">No spam. Just your launch notification.</p>
                </div>
                <div className="hidden md:block text-right">
                  <div className="inline-flex flex-col items-center gap-2 rounded-[22px] bg-[#FBF7F0] p-6 border border-[#D6C9B6]">
                    <div className="font-extrabold text-[64px] leading-none text-forest">Free</div>
                    <p className="text-sm text-forest/70">Available on Android</p>
                    <div className="mt-2 rounded-pill bg-mint px-4 py-2 text-xs font-medium text-forest">Early Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-forest px-5 py-14 md:px-6 md:pt-24">
        <div className="page-shell text-white">
          <div className="grid gap-10 md:grid-cols-[1.25fr_0.8fr_0.8fr_0.8fr] md:gap-14">
            <div>
              <p className="text-2xl font-medium md:text-[30px]">Newsletter</p>
              <div className="mt-7 flex max-w-[420px] flex-col gap-3 sm:flex-row sm:items-center sm:rounded-pill sm:bg-white sm:p-2 sm:gap-0">
                <input type="email" placeholder="Enter your email..." className="w-full rounded-pill border border-white/20 bg-white/10 px-4 py-3 text-base text-white outline-none placeholder:text-white/50 sm:rounded-none sm:border-0 sm:bg-transparent sm:text-ink sm:placeholder:text-ink/60" />
                <button type="button" className="button-pill flex h-14 w-14 shrink-0 items-center justify-center self-start rounded-full bg-forest text-mint sm:self-auto"><CircleArrowUp className="h-6 w-6" /></button>
              </div>
              <p className="mt-6 max-w-sm text-base leading-8 text-white/72">Get travel tips, packing guides, and Nomy updates in your inbox.</p>
            </div>
            {Object.entries(footerLinks).map(([label, links]) => (
              <div key={label}>
                <p className="text-2xl font-medium md:text-[30px]">{label}</p>
                <div className="mt-7 space-y-4">{links.map((link) => {
                  const href =
                    link === "Privacy Policy" ? "/privacy" :
                    link === "Terms of Service" ? "/terms" :
                    link === "Contact" ? "/contact" :
                    link === "Features" ? "/features" :
                    link === "About Us" ? "/about" :
                    link === "How It Works" ? "/#how-it-works" :
                    link === "Download" ? "/#download" :
                    "#";
                  return <a key={link} href={href} className="block text-base text-white/78 transition hover:text-white md:text-lg">{link}</a>;
                })}</div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid gap-10 border-b border-white/10 pb-12 text-lg md:mt-24 md:grid-cols-3 md:gap-8">
            <div><p className="text-white/52">Email Us</p><p className="mt-3 text-[22px]">hello@nomy.app</p></div>
            <div><p className="text-white/52">Based In</p><p className="mt-3 text-[22px]">India — Built for Indian Travelers</p></div>
            <div><p className="text-white/52">Available On</p><p className="mt-3 text-[22px]">Android (iOS coming soon)</p></div>
          </div>
          <div className="mt-4 rounded-[18px] bg-[#FBF7F0] px-5 py-6 text-forest md:px-6 md:py-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-3"><Image src="/images/branding/logo-g.png" alt="Nomy" width={38} height={38} className="h-10 w-10 rounded-full" /><div><div className="text-lg font-semibold">Nomy</div><div className="text-xs uppercase tracking-[0.2em] text-forest/62">Travel Guide</div></div></div>
                <div className="mt-6 flex flex-wrap gap-2">{["Facebook", "Instagram", "LinkedIn", "Medium"].map((item) => <a key={item} href="#" className="button-pill rounded-pill bg-white px-5 py-3 text-base">{item}</a>)}</div>
              </div>
              <p className="max-w-xl text-left text-base leading-7 md:text-right">© 2026 Nomy — Travel Light. Travel Smart. Made with ♥ in India.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PhotoTile({ src }: { src: string }) {
  return (
    <div className="community-tile reveal-element overflow-hidden rounded-[18px]">
      <img src={src} alt="Travel community" className="h-[250px] w-full object-cover md:h-[300px]" />
    </div>
  );
}

function ReviewMediaCard({
  title,
  text,
  image,
  className
}: {
  title: string;
  text: string;
  image: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-[24px] bg-[#FBF7F0] shadow-soft", className)}>
      <img src={image} alt={title} className="h-[300px] w-full object-cover" />
      <div className="p-6">
        <h3 className="text-[22px] leading-tight text-forest">{title}</h3>
        <p className="mt-8 text-sm leading-7 text-ink/82">{text}</p>
        <a href="#" className="mt-7 inline-block text-sm font-medium text-forest underline underline-offset-4">More Information</a>
      </div>
    </div>
  );
}

function ReviewHybridCard({
  title,
  text,
  image,
  dark,
  muted,
  className
}: {
  title: string;
  text: string;
  image?: string;
  dark?: boolean;
  muted?: boolean;
  className?: string;
}) {
  if (image) {
    return <ReviewMediaCard title={title} text={text} image={image} className={className} />;
  }

  return <ReviewTextCard title={title} text={text} dark={dark} muted={muted} className={className} />;
}

function ReviewTextCard({
  title,
  text,
  dark,
  muted,
  bg,
  className
}: {
  title: string;
  text: string;
  dark?: boolean;
  muted?: boolean;
  bg?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-[260px] flex-col justify-between rounded-[24px] p-6 shadow-soft text-white md:h-[300px]",
        dark ? "bg-[#0D3349]" : muted ? "bg-[#B55E3E]" : bg ? bg : "bg-[#1c9593]",
        className
      )}
    >
      <h3 className="text-[28px] leading-tight">{title}</h3>
      <p className={cn("text-md leading-7", dark || muted ? "text-white/70" : "text-white/85")}>{text}</p>
    </div>
  );
}

function ReviewImageCard({ image, className }: { image: string; className?: string }) {
  return (
    <div className={cn("h-[260px] overflow-hidden rounded-[24px] shadow-soft md:h-[300px]", className)}>
      <img src={image} alt="Customer review visual" className="h-full w-full object-cover" />
    </div>
  );
}


