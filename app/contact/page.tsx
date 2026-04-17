"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Clock,
  Download,
  Mail,
  MapPin,
  Send,
  Sparkles
} from "lucide-react";
import PageNav from "@/components/page-nav";
import PageFooter from "@/components/page-footer";
import SmoothScroll from "@/components/smooth-scroll";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#F4EFE6] text-forest">
        <PageNav />

        {/* HERO */}
        <section className="reveal-section px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // Contact
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h1 className="reveal-element font-semibold text-[44px] leading-[1.02] tracking-[-0.03em] text-forest md:text-[76px]">
                We&apos;d love to
                <br />
                <span className="font-serif italic font-normal">
                  hear from you
                </span>
              </h1>
              <div className="reveal-element">
                <p className="max-w-lg text-[15px] leading-7 text-forest/74">
                  Questions, feedback, or just want to say hi reach out.
                  You&apos;ll talk directly to the person building Nomy, and
                  we reply fast.
                </p>
              </div>
            </div>

            <div className="reveal-element mt-14 grid grid-cols-2 gap-4 border-t border-forest/15 pt-10 md:grid-cols-4">
              {[
                { n: "24h", label: "Email reply time" },
                { n: "1:1", label: "Direct to founder" },
                { n: "India", label: "Based in" },
                { n: "Free", label: "Support always" }
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-semibold text-[32px] leading-none tracking-tight text-forest">
                    {s.n}
                  </div>
                  <p className="mt-3 text-[13px] text-forest/62">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT METHODS + FORM */}
        <section className="reveal-section px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-4 md:grid-cols-[1fr_1.3fr]">
              {/* LEFT: visual + info card */}
              <div className="reveal-element relative overflow-hidden rounded-[22px]">
                <img
                  src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=80"
                  alt="India travel landscape"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ filter: "saturate(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-forest/55 via-forest/25 to-mint/20" />

                {/* decorative pattern dots */}
                <div className="absolute inset-0 opacity-[0.18]" style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "18px 18px"
                }} />

                <div className="relative flex min-h-[520px] flex-col justify-between p-8 md:min-h-[620px] md:p-10">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                      Say hello
                    </span>
                    <h3 className="mt-6 max-w-sm font-semibold text-[32px] leading-[1.1] tracking-tight text-white md:text-[38px]">
                      A real human,
                      <br />
                      <span className="font-serif italic font-normal">
                        on the other side
                      </span>
                    </h3>
                  </div>

                  {/* centered blur info card */}
                  <div className="mt-8 rounded-[18px] border border-white/30 bg-white/18 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/25 text-white backdrop-blur">
                          <Mail className="h-[18px] w-[18px]" />
                        </div>
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/75">
                            Email
                          </p>
                          <a
                            href="mailto:hello@nomy.app"
                            className="mt-1 block text-[15px] font-semibold text-white underline-offset-4 hover:underline"
                          >
                            hello@nomy.app
                          </a>
                        </div>
                      </div>

                      <div className="h-px bg-white/20" />

                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/25 text-white backdrop-blur">
                          <Clock className="h-[18px] w-[18px]" />
                        </div>
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/75">
                            Reply time
                          </p>
                          <p className="mt-1 text-[15px] font-semibold text-white">
                            Within 48 hours
                          </p>
                        </div>
                      </div>

                      <div className="h-px bg-white/20" />

                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/25 text-white backdrop-blur">
                          <MapPin className="h-[18px] w-[18px]" />
                        </div>
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/75">
                            Based in
                          </p>
                          <p className="mt-1 text-[15px] font-semibold text-white">
                            India · Built for Indian travelers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: form */}
              <div className="reveal-element rounded-[22px] border border-forest/10 bg-white p-8 shadow-soft md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-mint">
                      <Send className="h-6 w-6" />
                    </div>
                    <h2 className="mt-6 font-semibold text-[28px] tracking-tight text-forest">
                      Message sent
                    </h2>
                    <p className="mt-3 max-w-sm text-[14px] leading-6 text-forest/68">
                      Thanks for reaching out. We&apos;ll get back to you at
                      hello@nomy.app within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="button-pill mt-8 rounded-full border border-forest/18 bg-white px-5 py-2.5 text-sm font-medium text-forest"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
                      // Send a message
                    </div>
                    <h3 className="mt-3 font-semibold text-[28px] leading-tight tracking-tight text-forest">
                      Drop us a line
                    </h3>
                    <p className="mt-3 text-[14px] leading-6 text-forest/66">
                      Fill in the form and we&apos;ll reply within 24 hours.
                    </p>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-[13px] font-medium text-forest/78"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Your full name"
                          className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-[14px] text-forest placeholder:text-forest/45 outline-none transition focus:border-forest/40"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-[13px] font-medium text-forest/78"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="hello@example.com"
                          className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-[14px] text-forest placeholder:text-forest/45 outline-none transition focus:border-forest/40"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="mb-2 block text-[13px] font-medium text-forest/78"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-[14px] text-forest outline-none transition focus:border-forest/40"
                        >
                          <option value="">Select a topic</option>
                          <option value="feedback">App feedback</option>
                          <option value="bug">Bug report</option>
                          <option value="feature">Feature request</option>
                          <option value="other">Something else</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-[13px] font-medium text-forest/78"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          placeholder="What's on your mind?"
                          className="w-full resize-none rounded-xl border border-forest/15 bg-white px-4 py-3 text-[14px] text-forest placeholder:text-forest/45 outline-none transition focus:border-forest/40"
                        />
                      </div>
                      <button
                        type="submit"
                        className="button-pill inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest py-3.5 text-sm font-medium text-white"
                      >
                        Send Message
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                      <p className="text-center text-[12px] text-forest/55">
                        Or email directly at{" "}
                        <a
                          href="mailto:hello@nomy.app"
                          className="font-medium text-forest underline underline-offset-2"
                        >
                          hello@nomy.app
                        </a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="reveal-section bg-[#F0E9D9] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // FAQ
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h2 className="reveal-element font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[56px]">
                Quick
                <br />
                <span className="font-serif italic font-normal">answers</span>
              </h2>
              <p className="reveal-element max-w-lg text-[15px] leading-7 text-forest/74">
                The questions we hear most often. Can&apos;t find what you
                need? Reach out above we reply fast.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  q: "Is Nomy free to download?",
                  a:
                    "Yes — Nomy is free on Android. Smart packing, itineraries, and place discovery stay free forever. No hidden fees, no surprise paywalls."
                },
                {
                  q: "When will Nomy launch on iOS?",
                  a:
                    "Android first for the first 6 months. iOS is planned once the Android version is stable, published, and the core experience is solid."
                },
                {
                  q: "How accurate is the AI travel assistant?",
                  a:
                    "The AI is India-aware and context-driven it knows your location, the season, and your trip. Always verify critical info from official sources."
                },
                {
                  q: "Can I use Nomy offline?",
                  a:
                    "Packing lists and saved trips work offline via local storage. Maps, nearby search, and AI chat require internet as expected."
                },
                {
                  q: "Is my data safe?",
                  a:
                    "Yes. Nomy uses Firebase with standard security rules. We don't sell or share personal data. See the Privacy Policy for the full details."
                },
                {
                  q: "How do I report a bug?",
                  a:
                    "Use the contact form or email hello@nomy.app. Bug reports are taken seriously and usually fixed within a few days."
                }
              ].map((item) => (
                <div
                  key={item.q}
                  className="reveal-element min-h-[220px] rounded-[24px] border border-forest/10 bg-[#F9F4EA] p-8 shadow-soft md:p-10"
                >
                  <p className="text-[20px] font-semibold leading-tight text-forest md:text-[22px]">
                    {item.q}
                  </p>
                  <p className="mt-4 text-[15px] leading-7 text-forest/70">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="reveal-section px-6 pb-24 pt-24 md:pt-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element relative overflow-hidden rounded-[24px] bg-[#F0E9D9]">
              <div className="px-6 py-24 text-center md:py-32">
                <h2 className="mx-auto max-w-[760px] font-semibold text-[40px] leading-[1.05] tracking-[-0.03em] text-forest md:text-[60px]">
                  Try Nomy free. No account{" "}
                  <span className="font-serif italic font-normal">
                    needed to start
                  </span>
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
