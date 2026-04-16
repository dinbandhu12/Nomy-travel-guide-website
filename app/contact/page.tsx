"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send, ArrowRight } from "lucide-react";
import PageNav from "@/components/page-nav";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen">
      <PageNav />

      {/* Hero */}
      <section className="bg-forest px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <span className="inline-block rounded-full border border-[#3DDBC8]/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#3DDBC8]">
                Contact
              </span>
              <h1 className="mt-5 font-extrabold text-[44px] leading-[1.0] tracking-[-0.04em] text-white md:text-[72px]">
                We&apos;d love to<br />hear from you.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
                Questions, feedback, or just want to say hi — reach out.
                We reply fast, especially on WhatsApp.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { n: "24h", label: "Email reply" },
                { n: "Fast", label: "WhatsApp" },
                { n: "India", label: "Based in" },
                { n: "Free", label: "Support" },
              ].map((s) => (
                <div key={s.label} className="rounded-[20px] border border-white/10 bg-white/8 p-5 text-center backdrop-blur-sm">
                  <div className="font-extrabold text-[32px] leading-none text-[#3DDBC8]">{s.n}</div>
                  <p className="mt-2 text-xs text-white/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-8 md:grid-cols-[1fr_1.5fr] md:items-start">

            {/* Left — contact methods */}
            <div className="space-y-5">
              <div>
                <span className="text-sm font-medium text-forest/50">// Get in Touch</span>
                <h2 className="mt-4 font-extrabold text-[28px] leading-[1.04] tracking-[-0.04em] text-forest md:text-[36px]">
                  Three ways to reach us.
                </h2>
                <p className="mt-3 text-sm leading-7 text-ink/60">
                  Pick whatever&apos;s easiest. We&apos;re a small team — your message goes straight to the person who built this.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#D6C9B6] bg-[#FBF7F0] p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest/8 text-forest">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Email Us</p>
                    <a href="mailto:hello@nomy.app" className="mt-1 block text-sm text-forest/70 transition hover:text-forest">
                      hello@nomy.app
                    </a>
                    <p className="mt-1 text-xs text-forest/40">We reply within 24 hours</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/message/NOMY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-[24px] border border-[#D6C9B6] bg-[#FBF7F0] p-6 shadow-soft transition hover:border-[#25D366]/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-forest">WhatsApp</p>
                  <p className="mt-1 text-sm text-forest/70">Chat directly with the team</p>
                  <p className="mt-1 text-xs text-forest/40">Fastest for India users</p>
                </div>
              </a>

              <div className="rounded-[24px] border border-[#D6C9B6] bg-[#FBF7F0] p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest/8 text-forest">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Based In</p>
                    <p className="mt-1 text-sm text-forest/70">India</p>
                    <p className="mt-1 text-xs text-forest/40">Built for Indian travelers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="rounded-[28px] border border-[#D6C9B6] bg-[#FBF7F0] p-8 shadow-soft">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-[#3DDBC8]">
                    <Send className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 font-extrabold text-[28px] text-forest">Message sent!</h2>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-ink/60">
                    Thanks for reaching out. We&apos;ll get back to you at hello@nomy.app within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full border border-[#D6C9B6] px-6 py-3 text-sm text-forest/70 transition hover:text-forest"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <span className="text-sm font-medium text-forest/50">// Send a Message</span>
                    <h3 className="mt-3 font-extrabold text-[22px] text-forest">Drop us a line</h3>
                    <p className="mt-2 text-sm leading-6 text-ink/55">Fill in the form and we&apos;ll reply within 24 hours.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-forest">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-[14px] border border-[#D6C9B6] bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-forest/30 focus:ring-0"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-forest">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="hello@example.com"
                        className="w-full rounded-[14px] border border-[#D6C9B6] bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-forest/30 focus:ring-0"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium text-forest">
                        Subject
                      </label>
                      <select
                        id="subject"
                        className="w-full rounded-[14px] border border-[#D6C9B6] bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-forest/30"
                      >
                        <option value="">Select a topic</option>
                        <option value="feedback">App feedback</option>
                        <option value="bug">Bug report</option>
                        <option value="feature">Feature request</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-forest">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="What's on your mind?"
                        className="w-full resize-none rounded-[14px] border border-[#D6C9B6] bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-forest/30 focus:ring-0"
                      />
                    </div>
                    <button
                      type="submit"
                      className="button-pill inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest py-4 text-sm font-medium text-white"
                    >
                      Send Message <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="text-center text-xs text-forest/40">
                      Or email directly at{" "}
                      <a href="mailto:hello@nomy.app" className="text-forest/60 underline underline-offset-2">
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

      {/* FAQ strip */}
      <section className="bg-forest px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-8xl">
          <span className="text-sm font-medium text-[#3DDBC8]">// FAQ</span>
          <h2 className="mt-4 font-extrabold text-[32px] leading-[1.04] tracking-[-0.04em] text-white md:text-[48px]">
            Quick answers.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                q: "Is Nomy free to download?",
                a: "Yes — Nomy is free on Android. Core features like smart packing, itineraries, and place discovery are always free.",
              },
              {
                q: "When will Nomy launch on iOS?",
                a: "Android first. iOS is planned for a later stage once the Android version is stable and published.",
              },
              {
                q: "How accurate is the AI travel assistant?",
                a: "The AI is India-aware and context-driven — it knows your location, the season, and your trip. Always verify critical info from official sources.",
              },
              {
                q: "Can I use Nomy offline?",
                a: "Packing lists and saved trips work offline via local storage. Maps, nearby search, and AI chat require internet.",
              },
              {
                q: "Is my data safe?",
                a: "Yes. We use Firebase with standard security rules. We do not sell or share personal data. See our Privacy Policy for details.",
              },
              {
                q: "How do I report a bug?",
                a: "Use the contact form above, WhatsApp us, or email hello@nomy.app. Bug reports are taken seriously and usually fixed fast.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-[24px] border border-white/10 bg-white/8 p-6 backdrop-blur-sm">
                <p className="font-semibold text-white">{item.q}</p>
                <p className="mt-3 text-sm leading-7 text-white/55">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-8xl">
          <div className="rounded-[28px] bg-forest px-8 py-14 text-center md:py-20">
            <span className="text-sm font-medium text-[#3DDBC8]">// Ready to Travel Smarter?</span>
            <h2 className="mt-4 font-extrabold text-[32px] leading-[1.04] tracking-[-0.04em] text-white md:text-[48px]">
              Try Nomy free.<br />No account needed to start.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-7 text-white/60">
              Download on Android and see why travelers across India are switching to one calm app.
            </p>
            <a href="/#download" className="button-pill mt-8 inline-flex items-center gap-2 rounded-full bg-[#3DDBC8] px-8 py-4 text-sm font-medium text-forest">
              Download Free on Android <ArrowRight className="h-4 w-4" />
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
