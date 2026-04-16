import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Nomy",
  description: "How Nomy collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#f0eeeb" }}>
      {/* Header */}
      <header className="border-b border-[#D6C9B6] bg-[#FBF7F0]/90 px-5 py-5 backdrop-blur-md md:px-6">
        <div className="mx-auto flex max-w-8xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/branding/logo.png" alt="Nomy" width={38} height={38} className="h-10 w-10 rounded-full" />
            <div className="leading-tight">
              <div className="text-lg font-semibold text-forest">Nomy</div>
              <div className="text-xs uppercase tracking-[0.2em] text-forest/52">Travel Guide</div>
            </div>
          </Link>
          <Link href="/" className="rounded-full border border-[#D6C9B6] bg-[#FBF7F0] px-5 py-2.5 text-sm text-forest/70 transition hover:text-forest">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-forest px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-[#3DDBC8]">// Legal</p>
          <h1 className="mt-3 font-extrabold text-[42px] leading-[1.02] tracking-[-0.04em] text-white md:text-[58px]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-white/50">Effective date: April 16, 2026</p>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
            Your privacy matters to us. This page explains what data Nomy collects, why we collect it,
            and how we keep it safe. We will never sell your data or use it for advertising.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl space-y-6">

          <div className="rounded-[24px] border border-[#D6C9B6] bg-[#FBF7F0] p-7 shadow-soft md:p-9">
            <h2 className="text-[20px] font-semibold text-forest">Information We Collect</h2>
            <p className="mt-4 text-base leading-8 text-ink/70">
              We collect only what is necessary to provide the Nomy experience:
            </p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-ink/70">
              {[
                "Basic profile information (name, profile photo) when you sign in with Google.",
                "Your trip data — destinations, packing lists, notes, and itineraries you create inside the app.",
                "Your approximate location, only when you use map or nearby features. We do not store your location history.",
                "Anonymous usage data to help us understand how the app is used and improve it.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3DDBC8]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-[#D6C9B6] bg-[#FBF7F0] p-7 shadow-soft md:p-9">
            <h2 className="text-[20px] font-semibold text-forest">How We Use Your Information</h2>
            <p className="mt-4 text-base leading-8 text-ink/70">
              All data collected is used solely to operate and improve Nomy. Specifically:
            </p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-ink/70">
              {[
                "To sync your trips and packing lists across devices.",
                "To provide AI travel assistance relevant to your destination and context.",
                "To show nearby places and recommendations based on your location.",
                "To keep the app stable and fix issues as they arise.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3DDBC8]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-[#D6C9B6] bg-[#FBF7F0] p-7 shadow-soft md:p-9">
            <h2 className="text-[20px] font-semibold text-forest">What We Don&apos;t Do</h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-ink/70">
              {[
                "We do not sell your personal data to any third party.",
                "We do not use your data for advertising or tracking.",
                "We do not store your raw GPS location or location history.",
                "We do not share your trip content with other users.",
                "We do not collect payment information — Nomy is free.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3DDBC8]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-[#D6C9B6] bg-[#FBF7F0] p-7 shadow-soft md:p-9">
            <h2 className="text-[20px] font-semibold text-forest">Third-Party Services</h2>
            <p className="mt-4 text-base leading-8 text-ink/70">
              Nomy uses trusted third-party services to power core features — including authentication,
              cloud storage, maps, and AI responses. Each service operates under its own privacy policy
              and is selected for reliability and data safety. We do not grant any third party access
              to your personal data beyond what is needed to deliver the feature.
            </p>
          </div>

          <div className="rounded-[24px] border border-[#D6C9B6] bg-[#FBF7F0] p-7 shadow-soft md:p-9">
            <h2 className="text-[20px] font-semibold text-forest">Data Retention &amp; Deletion</h2>
            <p className="mt-4 text-base leading-8 text-ink/70">
              Your data is kept only while your account is active. You can delete your account and all
              associated data at any time from the Settings screen inside the app. Once deleted,
              your data is permanently removed from our systems.
            </p>
          </div>

          <div className="rounded-[24px] border border-[#D6C9B6] bg-[#FBF7F0] p-7 shadow-soft md:p-9">
            <h2 className="text-[20px] font-semibold text-forest">Children</h2>
            <p className="mt-4 text-base leading-8 text-ink/70">
              Nomy is not intended for children under 13. We do not knowingly collect data from children.
              If you believe a child has provided personal information, please contact us and we will
              remove it promptly.
            </p>
          </div>

          <div className="rounded-[24px] border border-[#D6C9B6] bg-[#FBF7F0] p-7 shadow-soft md:p-9">
            <h2 className="text-[20px] font-semibold text-forest">Updates &amp; Contact</h2>
            <p className="mt-4 text-base leading-8 text-ink/70">
              We may update this policy as the app evolves. The effective date at the top will always
              reflect the latest version.
            </p>
            <p className="mt-3 text-base leading-8 text-ink/70">
              Questions or deletion requests?{" "}
              <Link href="/contact" className="font-medium text-forest underline underline-offset-2">
                Contact us here.
              </Link>
            </p>
          </div>

        </div>
      </main>

      <footer className="bg-forest px-5 py-8 md:px-6">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-4 text-sm text-white/50 sm:flex-row">
          <p>© 2026 Nomy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
