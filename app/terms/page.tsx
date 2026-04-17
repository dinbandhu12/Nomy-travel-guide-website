import Link from "next/link";
import type { Metadata } from "next";
import PageNav from "@/components/page-nav";
import PageFooter from "@/components/page-footer";
import SmoothScroll from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Terms of Service — Nomy",
  description: "Terms and conditions for using the Nomy travel app."
};

const sections = [
  {
    title: "Acceptance",
    body:
      "By downloading or using Nomy, you agree to these Terms of Service. If you do not agree, please do not use the app. These terms apply to all users, including guests and registered accounts."
  },
  {
    title: "What Nomy is",
    body:
      "Nomy is an AI-powered travel planning assistant built for Indian travelers. It provides smart packing lists, nearby place discovery, AI travel chat, trip itineraries, and travel tools. Nomy is not a booking platform it does not book flights, hotels, buses, or tickets on your behalf."
  },
  {
    title: "AI responses",
    body:
      "The AI assistant provides general travel advice. Responses may not always be accurate, current, or complete. Always verify important details prices, timings, permit requirements, and safety from official sources before traveling. We are not liable for any travel decisions based on AI-generated advice."
  },
  {
    title: "Your account",
    body:
      "You are responsible for keeping your account secure. You may not share your account or use Nomy for any unlawful purpose. Guest accounts have limited features and data persistence is not guaranteed."
  },
  {
    title: "Free & premium access",
    body:
      "Nomy offers a free tier with access to core features. Some features may have usage limits on the free tier. Premium plans, when available, will offer expanded access. We reserve the right to adjust feature availability as the service evolves."
  },
  {
    title: "Privacy",
    body:
      "We handle your data as described in our Privacy Policy. By using Nomy, you also agree to our Privacy Policy.",
    link: { text: "Privacy Policy", href: "/privacy" }
  },
  {
    title: "Intellectual property",
    body:
      "All app design, code, branding, and content are owned by the developer. You may not copy, modify, or distribute any part of Nomy without written permission. Your trips, notes, and packing lists remain yours."
  },
  {
    title: "Disclaimer",
    body:
      'Nomy is provided "as is" without warranty of any kind. We do not guarantee uninterrupted service, error-free operation, or that the app will meet your specific requirements.'
  },
  {
    title: "Limitation of liability",
    body:
      "To the maximum extent permitted by law, Nomy and its developer are not liable for any indirect, incidental, or consequential damages including travel losses or reliance on AI-generated information."
  },
  {
    title: "Changes",
    body:
      "We may update these terms as the service evolves. The effective date at the top of this page will reflect any changes. Continued use after changes constitutes acceptance."
  },
  {
    title: "Contact",
    body: "For questions about these terms, reach out through the contact page.",
    link: { text: "Contact us here", href: "/contact" }
  }
];

export default function TermsPage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#F4EFE6] text-forest">
        <PageNav />

        {/* HERO */}
        <section className="reveal-section px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-element text-[11px] font-medium uppercase tracking-[0.2em] text-forest/58">
              // Legal
            </div>
            <div className="mt-5 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
              <h1 className="reveal-element font-semibold text-[44px] leading-[1.02] tracking-[-0.03em] text-forest md:text-[76px]">
                Terms of
                <br />
                <span className="font-serif italic font-normal">service</span>
              </h1>
              <div className="reveal-element">
                <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-forest/55">
                  Effective date · April 17, 2026
                </p>
                <p className="mt-5 max-w-lg text-[15px] leading-7 text-forest/74">
                  By using Nomy, you agree to these terms. We&apos;ve kept them
                  plain, short, and readable no surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="reveal-section px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="border-t border-forest/15">
              {sections.map((s, idx) => (
                <div
                  key={s.title}
                  className="reveal-element grid gap-6 border-b border-forest/15 py-10 md:grid-cols-[1fr_2fr] md:gap-16 md:py-12"
                >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-medium tracking-[0.15em] text-forest/45 md:pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-semibold text-[22px] leading-tight tracking-tight text-forest">
                    {s.title}
                  </h2>
                </div>
                <div>
                  <p className="text-[14px] leading-7 text-forest/72">
                    {s.body}{" "}
                    {s.link && (
                      <Link
                        href={s.link.href}
                        className="font-medium text-forest underline underline-offset-4"
                      >
                        {s.link.text}
                      </Link>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        <PageFooter />
      </div>
    </SmoothScroll>
  );
}
