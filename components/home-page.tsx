"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { ArrowLeft, ArrowRight, ChevronDown, CircleArrowUp, Leaf, ShoppingBag, Star } from "lucide-react";
import {
  communityPhotos,
  featureCards,
  footerLinks,
  guideHighlights,
  navItems,
  partnerLogos,
  photoSet,
  quickFeatures,
  services,
  testimonials
} from "@/lib/data";
import { cn } from "@/lib/utils";
import { Draggable, ScrollTrigger, setupGsap } from "@/lib/gsap";

type Testimonial = (typeof testimonials)[number];

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const railViewportRef = useRef<HTMLDivElement | null>(null);
  const railTrackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(1);
  const [navVisible, setNavVisible] = useState(true);

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

  const prev = testimonials[(active - 1 + testimonials.length) % testimonials.length];
  const current = testimonials[active];
  const next = testimonials[(active + 1) % testimonials.length];

  return (
    <div ref={rootRef}>
      <header className={cn("fixed inset-x-0 top-4 z-50 px-4 transition-transform duration-500 md:px-6", navVisible ? "translate-y-0" : "-translate-y-[140%]")}>
        <div className="page-shell">
          <div className="glass-nav mx-auto flex max-w-[1540px] items-center justify-between rounded-[24px] border border-white/70 px-5 py-4 shadow-soft md:px-7">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/branding/logo.png" alt="Nomy" width={38} height={38} className="h-10 w-10 rounded-full" />
              <div className="leading-tight">
                <div className="text-lg font-semibold text-forest">Nomy</div>
                <div className="text-xs uppercase tracking-[0.2em] text-forest/52">Travel Guide</div>
              </div>
            </Link>
            <nav className="hidden items-center gap-8 text-sm text-forest/80 lg:flex">
              {navItems.map((item) => (
                <a key={item} href="#" className="transition hover:text-forest">
                  {item}
                  {item === "Features" ? <ChevronDown className="ml-1 inline h-4 w-4" /> : null}
                </a>
              ))}
            </nav>
            <a href="#" className="button-pill rounded-pill bg-forest px-6 py-3 text-sm font-medium text-white">Get Started</a>
          </div>
        </div>
      </header>
      <main className="overflow-hidden">
        <section className="section-block px-4 pb-12 pt-24 md:px-6 md:pb-16 md:pt-28">
          <div className="page-shell">
            <div className="overflow-hidden rounded-[34px] border border-[#dfe8e4] bg-white shadow-soft">
              <div className="px-5 py-8 md:px-7 md:py-10">
                <div className="grid gap-10 md:grid-cols-[1.35fr_0.65fr]">
                  <div className="reveal-element">
                    <h1 className="max-w-4xl font-[var(--font-heading)] text-[42px] leading-[0.95] tracking-[-0.04em] text-forest md:text-[76px]">
                      Travel Light.<br />Travel Smart.
                    </h1>
                  </div>
                  <div className="reveal-element flex flex-col items-start justify-center">
                    <p className="max-w-sm text-base leading-7 text-ink/66">
                      Plan every move with your AI travel guide, from destination ideas and trip budgets to smarter packing and on-the-go support.
                    </p>
                    <a href="#" className="button-pill mt-8 rounded-pill bg-mint px-8 py-4 text-sm font-medium text-forest">Discover More</a>
                  </div>
                </div>
                
                <div className="reveal-element mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4 border-t border-[#edf2ef] pt-10">
                  {quickFeatures.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex flex-row items-center justify-center gap-3 rounded-[24px] bg-white border border-[#edf2ef] p-6 text-forest shadow-soft hover:shadow-md hover:-translate-y-1 transition duration-300">
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
                    <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=400&q=80" alt="Traveler portrait" className="h-24 w-24 rounded-[16px] object-cover" />
                    <div>
                      <p className="text-sm leading-6 text-white/80">80K+ trips have been planned with Nomy across every season.</p>
                      <div className="mt-3 flex items-end gap-2">
                        <span className="font-[var(--font-heading)] text-5xl leading-none">80K+</span>
                        <span className="pb-1 text-sm text-white/75">Trips</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block px-4 py-12 md:px-6 md:py-[150px]">
          <div className="page-shell">
            <div className="reveal-element text-center text-[15px] leading-6 text-forest/78">Our commitment to smarter travel planning and calmer journeys with Nomy.</div>
            <div className="mt-8 grid border-y border-[#edf2ef] py-6 md:grid-cols-6">
              {partnerLogos.map((item) => (
                <div key={item} className="reveal-element flex items-center justify-center gap-2 py-3 text-lg font-medium text-forest/88"><Leaf className="h-4 w-4" />{item}</div>
              ))}
            </div>
            <div className="mt-20 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="reveal-element text-sm text-forest/54">// About us</p>
                <h2 className="reveal-element mt-3 max-w-xl font-[var(--font-heading)] text-[42px] leading-[1.02] tracking-[-0.04em] text-forest md:text-[64px]">
                  Our Main Goal is to Simplify The Travel Journey.
                </h2>
                <div className="mt-10 grid gap-6 md:grid-cols-[210px_1fr]">
                  <div className="reveal-element rounded-[24px] border border-[#edf2ef] bg-white p-4 shadow-soft">
                    <div className="text-center text-sm font-medium pb-2 text-forest/68">Projects</div>
                    <div className="rounded-[16px] bg-mint p-3"><img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=500&q=80" alt="Travel card" className="h-28 w-full rounded-[14px] object-cover" /></div>
                    <div className="mt-5 font-[var(--font-heading)] text-6xl leading-none text-forest">440+</div>
                    <p className="mt-3 text-sm leading-6 text-ink/60">Worldwide completed travel plans and packing flows.</p>
                  </div>
                  <div className="reveal-element flex flex-col justify-center">
                    <p className="max-w-md text-base leading-8 text-ink/68">
                      We believe travel planning is more than booking stops. It is about clarity, confidence, and building a journey that feels lighter from the very first decision.
                    </p>
                    <a href="#" className="button-pill mt-8 inline-flex w-fit rounded-pill bg-forest px-7 py-3 text-sm font-medium text-white">More About Us</a>
                  </div>
                </div>
              </div>
              <div className="reveal-element relative">
                <div className="absolute left-[-14px] top-[-14px] h-full w-full rounded-[30px] border border-mint/80" />
                <div className="relative overflow-hidden rounded-[30px]"><img src={photoSet.mission} alt="Traveler checking phone" className="h-[540px] w-full object-cover" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block bg-[#f7f9f8] px-4 py-12 md:px-6 md:py-[150px]">
          <div className="page-shell">
            <div className="grid gap-8 border-b border-[#edf2ef] pb-12 md:grid-cols-[1fr_0.6fr]">
              <div>
                <p className="reveal-element text-sm text-forest/54">// Services</p>
                <h2 className="reveal-element mt-3 max-w-3xl font-[var(--font-heading)] text-[42px] leading-[1.02] tracking-[-0.04em] text-forest md:text-[64px]">
                  From Planning to Packing:
                  <br />
                  We&apos;ve Got You Covered.
                </h2>
              </div>
              <div className="reveal-element flex flex-col items-start justify-center md:items-end">
                <p className="max-w-sm text-base leading-7 text-ink/64">We believe that travel is more than just planning steps; it&apos;s about nurturing confidence before takeoff.</p>
                <a href="#" className="button-pill mt-7 rounded-pill bg-forest px-7 py-3 text-sm font-medium text-white">Explore All Services</a>
              </div>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-[340px_1fr_340px] md:items-start">
              <div className="reveal-element overflow-hidden rounded-[22px] md:mt-8"><img src={photoSet.servicesLeft} alt="Travel photo left" className="h-[260px] w-full object-cover md:h-[360px]" /></div>
              <div className="space-y-7 pt-2 text-center">
                {services.map((item) => (
                  <div key={item.title} className={cn("reveal-element mx-auto max-w-[560px]", item.featured ? "relative rounded-[22px] bg-forest px-8 py-7 text-white shadow-soft" : "")}>
                    <h3 className={cn("text-[28px] font-medium leading-tight", item.featured ? "text-[#c9ffd8]" : "text-forest")}>{item.title}</h3>
                    <p className={cn("mx-auto mt-2 max-w-md text-base leading-7", item.featured ? "text-white/76" : "text-ink/60")}>{item.description}</p>
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
              <p className="reveal-element text-sm text-forest/54">// Why Choose Us</p>
              <h2 className="reveal-element mx-auto mt-3 max-w-4xl font-[var(--font-heading)] text-[40px] leading-[1.06] tracking-[-0.04em] text-forest md:text-[62px]">
                Rooted in Smart Tools, Driven by Calm Design:<br />The Story of Our Travel Experience.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-[0.55fr_1fr_0.35fr] md:items-start">
              <div className="space-y-8">
                <div className="reveal-element">
                  <p className="max-w-[260px] text-base leading-8 text-ink/62">We&apos;re more than just another travel resource. We&apos;re your planning partner in motion, built for better journeys from the first idea to the final stop.</p>
                  <a href="#" className="button-pill mt-8 inline-flex rounded-pill bg-forest px-7 py-3 text-sm font-medium text-white">More About Us</a>
                </div>
                <div className="reveal-element rounded-[24px] border border-[#edf2ef] bg-white p-7 shadow-soft">
                  {[
                    ["440+", "Completed Projects"],
                    ["02M+", "Happy Customers"],
                    ["2015", "10 Years of Experience"]
                  ].map(([value, label], index) => (
                    <div key={value} className={cn("pb-5", index !== 2 && "mb-5 border-b border-[#edf2ef]")}>
                      <div className="font-[var(--font-heading)] text-6xl leading-none text-forest">{value}</div>
                      <p className="mt-2 text-base text-ink/58">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal-element overflow-hidden rounded-[28px]">
                <div className="relative">
                  <img src={photoSet.storyMain} alt="Road trip landscape" className="h-[680px] w-full object-cover md:h-[780px]" />
                  <div className="absolute inset-x-5 bottom-5 rounded-[24px] bg-white p-5 shadow-soft">
                    <div className="grid items-center gap-4 md:grid-cols-[54px_1fr_32px]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mint text-forest"><ShoppingBag className="h-6 w-6" /></div>
                      <div>
                        <h3 className="text-2xl font-medium text-forest">AI Travel Guide</h3>
                        <p className="mt-1 text-sm leading-6 text-ink/60">This block now uses feature cards instead of screenshots, to match the reference composition more closely.</p>
                      </div>
                      <div className="space-y-2"><div className="ml-auto h-2 w-2 rounded-full bg-forest" /><div className="ml-auto h-2 w-2 rounded-full bg-mint" /></div>
                    </div>
                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                      {guideHighlights.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.title} className="rounded-[18px] bg-[#f7f9f8] p-4">
                            <Icon className="h-5 w-5 text-forest" />
                            <h4 className="mt-3 text-base font-medium text-forest">{item.title}</h4>
                            <p className="mt-2 text-sm leading-6 text-ink/60">{item.text}</p>
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
              <p className="reveal-element text-sm text-forest/54">// Recent Features</p>
              <h2 className="reveal-element mx-auto mt-3 max-w-3xl font-[var(--font-heading)] text-[40px] leading-[1.06] tracking-[-0.04em] text-forest md:text-[62px]">
                Our Travel Features:<br />Tools That Inspire.
              </h2>
              <p className="reveal-element mx-auto mt-4 max-w-xl text-base leading-7 text-ink/60">Instead of using screenshots here, this section now follows the reference more closely with dark feature cards.</p>
            </div>

            <div ref={railViewportRef} className="reveal-element overflow-hidden">
              <div ref={railTrackRef} className="flex cursor-grab gap-6">
                {featureCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article key={card.title} className="min-w-[420px] rounded-[28px] bg-forest p-7 text-white md:min-w-[760px]">
                      <div className="flex items-start justify-between gap-8">
                        <div>
                          <p className="text-sm text-[#9df8d6]">{card.index}</p>
                          <h3 className="mt-3 max-w-[420px] font-[var(--font-heading)] text-[38px] leading-[1.02] tracking-[-0.04em] md:text-[54px]">{card.title}</h3>
                        </div>
                        <div className="glass-chip w-[210px] rounded-[22px] p-3 text-white">
                          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="Destination preview" className="h-28 w-full rounded-[14px] object-cover" />
                          <div className="mt-3 rounded-[14px] bg-white/12 p-3 backdrop-blur-md">
                            <div className="text-sm uppercase tracking-[0.18em] text-white/72">Featured Place</div>
                            <div className="mt-2 text-xl font-medium">Bali, Indonesia</div>
                            <div className="mt-2 text-sm text-white/72">Coastal escape</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#123d4a] text-[#9df8d6]"><Icon className="h-8 w-8" /></div>
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
            <div className="reveal-element mt-8 flex justify-center"><a href="#" className="button-pill rounded-pill bg-mint px-7 py-3 text-sm font-medium text-forest">Explore All Features</a></div>
          </div>
        </section>

        <section className="section-block bg-[#f7f9f8] px-4 py-12 md:px-6 md:py-[150px]">
          <div className="page-shell">
            <div className="grid gap-4 md:grid-cols-3">
              {communityPhotos.slice(0, 4).map((src) => <PhotoTile key={src} src={src} />)}
              <div className="reveal-element flex min-h-[280px] flex-col items-center justify-center rounded-[18px] bg-white px-6 text-center">
                <h2 className="font-[var(--font-heading)] text-[48px] leading-[1.02] tracking-[-0.04em] text-forest">Trips shaped<br />by real travelers.</h2>
                <a href="#" className="button-pill mt-8 rounded-pill bg-forest px-7 py-3 text-sm font-medium text-white">Explore All Members</a>
              </div>
              {communityPhotos.slice(4).map((src) => <PhotoTile key={src} src={src} />)}
            </div>
          </div>
        </section>

        <section className="section-block px-4 py-12 md:px-6 md:py-[150px]">
          <div className="page-shell">
            <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-start">
              <div>
                <p className="reveal-element text-sm text-forest/54">// Customers Review</p>
                <h2 className="reveal-element mt-3 max-w-3xl font-[var(--font-heading)] text-[42px] leading-[1.02] tracking-[-0.04em] text-forest md:text-[64px]">
                  From Happy Customers
                  <br />
                  to Thriving Journeys.
                </h2>
              </div>
              <p className="reveal-element max-w-md text-base leading-8 text-ink/62">From first-time city breaks to long destination trips, we take pride in helping travelers move with less friction and more confidence.</p>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-4">
              <ReviewImageCard className="reveal-element" image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80" />
              <ReviewTextCard
                className="reveal-element"
                title="Sleep Tracking"
                text="Unlock deep insights into your sleep patterns, optimize rest, and wake up revitalized every morning."
              />
              <ReviewImageCard className="reveal-element" image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80" />
              <ReviewTextCard
                className="reveal-element"
                title="Activity Tracking"
                text="Seamlessly monitor your activity, set goals, and achieve new heights with personalized tracking and insights."
                dark
              />
              <ReviewTextCard
                className="reveal-element"
                title="Mindfulness Training"
                text="Elevate your mind with guided meditation sessions, fostering tranquility and focus for a balanced life."
                muted
              />
              <ReviewImageCard className="reveal-element" image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80" />
              <ReviewTextCard
                className="reveal-element"
                title="Health Benefits"
                text="Explore personalized nights, tips, and trends, unlocking the path to holistic well-being and optimal health."
              />
              <ReviewImageCard className="reveal-element" image="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80" />
            </div>
          </div>
        </section>

        <section className="section-block px-4 py-12 md:px-6 md:py-[150px]">
          <div className="page-shell">
            <div className="reveal-element relative overflow-hidden rounded-[28px]">
              <img src={photoSet.cta} alt="Travel destination aerial" className="h-[680px] w-full object-cover md:h-[780px]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,61,46,0.68),rgba(0,61,46,0.12))]" />
              <div className="absolute left-6 top-6 right-6 grid gap-8 md:left-10 md:top-10 md:grid-cols-[1fr_320px]">
                <div className="text-white">
                  <p className="text-sm text-white/78">// Get Started Now</p>
                  <h2 className="mt-4 max-w-3xl font-[var(--font-heading)] text-[42px] leading-[1.02] tracking-[-0.04em] md:text-[64px]">Bring Your Dream Journey<br />To Life. Contact Us Now.</h2>
                  <p className="mt-16 max-w-lg text-[28px] leading-10 md:mt-36 md:text-[34px]">Your perfect trip awaits. Join our growing community and get everything you need to travel smarter.</p>
                  <a href="#" className="button-pill mt-10 inline-flex rounded-pill bg-mint px-8 py-4 text-sm font-medium text-forest">Get A Quote Now</a>
                </div>
                <div className="h-fit justify-self-start rounded-[22px] bg-white p-5 shadow-soft md:justify-self-end">
                  <div className="rounded-[18px] bg-mint p-3"><img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=500&q=80" alt="Travel feature card" className="h-52 w-full rounded-[14px] object-cover" /></div>
                  <div className="mt-5 font-[var(--font-heading)] text-6xl leading-none text-forest">440+</div>
                  <p className="mt-3 max-w-[220px] text-sm leading-6 text-ink/60">Trips and guides created for travelers worldwide.</p>
                </div>
              </div>
            </div>

            <div className="mt-24 grid gap-12 md:grid-cols-[0.62fr_1fr] md:items-center">
              <div>
                <p className="reveal-element text-sm text-forest/54">// Our Insights</p>
                <h2 className="reveal-element mt-3 max-w-lg font-[var(--font-heading)] text-[42px] leading-[1.02] tracking-[-0.04em] text-forest md:text-[64px]">Read Our Articles<br />Written By Professionals.</h2>
                <p className="reveal-element mt-5 max-w-md text-base leading-8 text-ink/62">We believe travel is more than booking. It is about clarity, preparation, and stories worth sharing.</p>
                <a href="#" className="button-pill reveal-element mt-8 inline-flex rounded-pill bg-forest px-7 py-3 text-sm font-medium text-white">Explore All Blogs</a>
              </div>
              <div className="reveal-element relative mx-auto w-full max-w-[640px]">
                <div className="absolute left-8 top-[-10px] h-full w-full rotate-[-6deg] rounded-[22px] border border-mint bg-[#82bfa2]" />
                <div className="absolute left-4 top-[-4px] h-full w-full rotate-[-3deg] rounded-[22px] border border-mint/70 bg-[#beebd4]" />
                <div className="relative rounded-[22px] bg-white p-4 shadow-soft">
                  <img src={photoSet.article} alt="Travel article cover" className="h-[360px] w-full rounded-[18px] object-cover" />
                  <div className="mt-4 flex items-center gap-3 text-sm"><span className="rounded-pill bg-mint px-3 py-1 text-forest">Travel Care</span><span className="text-ink/54">Sep 05, 2024</span></div>
                  <h3 className="mt-4 max-w-lg font-[var(--font-heading)] text-[34px] leading-[1.04] tracking-[-0.03em] text-forest">How to Build a Trip That Feels Lighter Before It Even Starts</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-forest px-4 py-14 md:px-6 md:pt-24">
        <div className="page-shell text-white">
          <div className="grid gap-14 md:grid-cols-[1.25fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <p className="text-[30px] font-medium">Newsletter</p>
              <div className="mt-7 flex max-w-[420px] items-center rounded-pill bg-white p-2">
                <input type="email" placeholder="Enter your email..." className="w-full border-0 bg-transparent px-4 py-3 text-base text-ink outline-none" />
                <button type="button" className="button-pill flex h-14 w-14 items-center justify-center rounded-full bg-forest text-mint"><CircleArrowUp className="h-6 w-6" /></button>
              </div>
              <p className="mt-6 max-w-sm text-lg leading-8 text-white/72">Stay tuned and subscribe to our newsletter.</p>
            </div>
            {Object.entries(footerLinks).map(([label, links]) => (
              <div key={label}>
                <p className="text-[30px] font-medium">{label}</p>
                <div className="mt-7 space-y-4">{links.map((link) => <a key={link} href="#" className="block text-lg text-white/78 transition hover:text-white">{link}</a>)}</div>
              </div>
            ))}
          </div>
          <div className="mt-24 grid gap-8 border-b border-white/10 pb-12 text-lg md:grid-cols-3">
            <div><p className="text-white/52">Email Us</p><p className="mt-3 text-[22px]">hello@nomy.ai</p></div>
            <div><p className="text-white/52">Location</p><p className="mt-3 text-[22px]">174 Street Charleston, New York</p></div>
            <div><p className="text-white/52">Call Us Now</p><p className="mt-3 text-[22px]">(+880) 89993 88750</p></div>
          </div>
          <div className="mt-4 rounded-[18px] bg-mint px-5 py-6 text-forest md:px-6 md:py-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-3"><Image src="/images/branding/logo-g.png" alt="Nomy" width={38} height={38} className="h-10 w-10 rounded-full" /><div><div className="text-lg font-semibold">Nomy</div><div className="text-xs uppercase tracking-[0.2em] text-forest/62">Travel Guide</div></div></div>
                <div className="mt-6 flex flex-wrap gap-3">{["Facebook", "Instagram", "LinkedIn", "Medium"].map((item) => <a key={item} href="#" className="button-pill rounded-pill bg-white px-5 py-3 text-base">{item}</a>)}</div>
              </div>
              <p className="max-w-xl text-left text-base leading-7 md:text-right">© Copyright - Nomy | Designed for premium travel experiences.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PhotoTile({ src }: { src: string }) {
  return (
    <div className="community-tile reveal-element overflow-hidden rounded-[18px] bg-white p-2">
      <div className="overflow-hidden rounded-[14px]"><img src={src} alt="Travel community" className="h-[250px] w-full object-cover md:h-[280px]" /></div>
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
    <div className={cn("overflow-hidden rounded-[24px] bg-white shadow-soft", className)}>
      <img src={image} alt={title} className="h-[300px] w-full object-cover" />
      <div className="p-6">
        <h3 className="text-[22px] leading-tight text-forest">{title}</h3>
        <p className="mt-8 text-sm leading-7 text-ink/58">{text}</p>
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
  className
}: {
  title: string;
  text: string;
  dark?: boolean;
  muted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[24px] p-6 shadow-soft",
        dark ? "bg-[#1b2234] text-white" : muted ? "bg-[#7f96a4] text-white" : "bg-white text-forest",
        className
      )}
    >
      <h3 className="text-[22px] leading-tight">{title}</h3>
      <p className={cn("mt-16 text-sm leading-7", dark || muted ? "text-white/70" : "text-ink/58")}>{text}</p>
      <a href="#" className={cn("mt-7 inline-block text-sm font-medium underline underline-offset-4", dark || muted ? "text-white" : "text-forest")}>More Information</a>
    </div>
  );
}

function ReviewImageCard({ image, className }: { image: string; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[24px] bg-white shadow-soft", className)}>
      <img src={image} alt="Customer review visual" className="h-full min-h-[300px] w-full object-cover" />
    </div>
  );
}

function SideCard({ person }: { person: Testimonial }) {
  return (
    <div className="reveal-element hidden rounded-[24px] bg-white p-6 shadow-soft md:flex md:flex-col md:items-center md:justify-center">
      <img src={person.avatar} alt={person.name} className="h-32 w-32 rounded-full object-cover" />
    </div>
  );
}


