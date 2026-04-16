import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Nomy",
  description: "Terms and conditions for using the Nomy travel app.",
};

const sections = [
  {
    title: "1. Acceptance",
    body: "By downloading or using Nomy, you agree to these Terms of Service. If you do not agree, please do not use the app. These terms apply to all users, including guests and registered accounts.",
  },
  {
    title: "2. What Nomy Is",
    body: "Nomy is an AI-powered travel planning assistant built for Indian travelers. It provides smart packing lists, nearby place discovery, AI travel chat, trip itineraries, and travel tools. Nomy is not a booking platform — it does not book flights, hotels, buses, or tickets on your behalf.",
  },
  {
    title: "3. AI Responses",
    body: "The AI assistant provides general travel advice. Responses may not always be accurate, current, or complete. Always verify important details — prices, timings, permit requirements, and safety — from official sources before traveling. We are not liable for any travel decisions based on AI-generated advice.",
  },
  {
    title: "4. Your Account",
    body: "You are responsible for keeping your account secure. You may not share your account or use Nomy for any unlawful purpose. Guest accounts have limited features and data persistence is not guaranteed.",
  },
  {
    title: "5. Free & Premium Access",
    body: "Nomy offers a free tier with access to core features. Some features may have usage limits on the free tier. Premium plans, when available, will offer expanded access. We reserve the right to adjust feature availability as the service evolves.",
  },
  {
    title: "6. Privacy",
    body: "We handle your data as described in our Privacy Policy. By using Nomy, you also agree to our Privacy Policy.",
    link: { text: "Privacy Policy", href: "/privacy" },
  },
  {
    title: "7. Intellectual Property",
    body: "All app design, code, branding, and content are owned by the developer. You may not copy, modify, or distribute any part of Nomy without written permission. Your trips, notes, and packing lists remain yours.",
  },
  {
    title: "8. Disclaimer",
    body: 'Nomy is provided "as is" without warranty of any kind. We do not guarantee uninterrupted service, error-free operation, or that the app will meet your specific requirements.',
  },
  {
    title: "9. Limitation of Liability",
    body: "To the maximum extent permitted by law, Nomy and its developer are not liable for any indirect, incidental, or consequential damages — including travel losses or reliance on AI-generated information.",
  },
  {
    title: "10. Changes",
    body: "We may update these terms as the service evolves. The effective date at the top of this page will reflect any changes. Continued use after changes constitutes acceptance.",
  },
  {
    title: "11. Contact",
    body: "For questions about these terms:",
    link: { text: "Contact us here", href: "/contact" },
  },
];

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-4 text-base text-white/50">Effective date: April 16, 2026</p>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
            By using Nomy, you agree to these terms. We&apos;ve kept them plain and readable.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl space-y-4">
          {sections.map((s) => (
            <div
              key={s.title}
              className="rounded-[20px] border border-[#D6C9B6] bg-[#FBF7F0] p-6 shadow-soft md:p-7"
            >
              <h2 className="text-[18px] font-semibold text-forest">{s.title}</h2>
              <p className="mt-3 text-base leading-8 text-ink/70">
                {s.body}{" "}
                {s.link && (
                  <Link href={s.link.href} className="font-medium text-forest underline underline-offset-2">
                    {s.link.text}
                  </Link>
                )}
              </p>
            </div>
          ))}
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
