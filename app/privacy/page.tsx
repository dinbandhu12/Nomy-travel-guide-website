import Link from "next/link";
import type { Metadata } from "next";
import PageNav from "@/components/page-nav";
import PageFooter from "@/components/page-footer";
import SmoothScroll from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Privacy Policy — Nomy",
  description: "How Nomy collects, uses, and protects your data."
};

const sections = [
  {
    title: "Information we collect",
    body:
      "We collect only what is necessary to operate Nomy — basic profile information (name, photo) from Google Sign-in, trip data you create (destinations, packing lists, notes, itineraries), approximate location when you use map or nearby features, and anonymous usage data to improve the app.",
    list: [
      "Google profile basics (name, avatar) when you sign in",
      "Trip data — destinations, packing lists, notes, itineraries",
      "Approximate location only when maps or nearby are used",
      "Anonymous usage data to improve reliability and UX"
    ]
  },
  {
    title: "How we use your information",
    body:
      "All data is used solely to operate and improve Nomy — syncing trips across devices, providing context-aware AI answers, showing nearby recommendations, and keeping the app stable.",
    list: [
      "Sync trips and packing lists across your devices",
      "Provide AI travel assistance relevant to your destination",
      "Show nearby places and recommendations based on your location",
      "Keep the app stable and fix issues as they arise"
    ]
  },
  {
    title: "What we don't do",
    body:
      "We avoid everything most travel apps don't — no advertising, no data sales, no dark patterns, no opaque tracking.",
    list: [
      "We do not sell your personal data to any third party",
      "We do not use your data for advertising or tracking",
      "We do not store your raw GPS location or history",
      "We do not share your trip content with other users",
      "We do not collect payment information — core features are free"
    ]
  },
  {
    title: "Third-party services",
    body:
      "Nomy uses trusted third-party services to power core features — authentication, cloud storage, maps, and AI responses. Each operates under its own privacy policy and is selected for reliability and data safety. No third party is granted access beyond what's required to deliver the feature."
  },
  {
    title: "Data retention & deletion",
    body:
      "Your data is kept only while your account is active. You can delete your account and all associated data at any time from the Settings screen inside the app. Once deleted, your data is permanently removed from our systems."
  },
  {
    title: "Children",
    body:
      "Nomy is not intended for children under 13. We do not knowingly collect data from children. If you believe a child has provided personal information, contact us and we will remove it promptly."
  },
  {
    title: "Updates & contact",
    body:
      "We may update this policy as the app evolves. The effective date at the top always reflects the latest version. Questions or deletion requests — reach out through the contact page."
  }
];

export default function PrivacyPage() {
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
                Privacy
                <br />
                <span className="font-serif italic font-normal">policy</span>
              </h1>
              <div className="reveal-element">
                <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-forest/55">
                  Effective date · April 17, 2026
                </p>
                <p className="mt-5 max-w-lg text-[15px] leading-7 text-forest/74">
                  Your privacy matters to us. This page explains what data Nomy
                  collects, why we collect it, and how we keep it safe. We will
                  never sell your data or use it for advertising.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="reveal-section px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-[1400px]">
            <div className="border-t border-forest/15">
              {sections.map((section, idx) => (
                <div
                  key={section.title}
                  className="reveal-element grid gap-6 border-b border-forest/15 py-10 md:grid-cols-[1fr_2fr] md:gap-16 md:py-12"
                >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-medium tracking-[0.15em] text-forest/45 md:pt-1">
                    0{idx + 1}
                  </span>
                  <h2 className="font-semibold text-[22px] leading-tight tracking-tight text-forest">
                    {section.title}
                  </h2>
                </div>
                <div>
                  <p className="text-[14px] leading-7 text-forest/72">
                    {section.body}
                  </p>
                  {section.list && (
                    <ul className="mt-5 space-y-3">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[13px] leading-6 text-forest/72"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-element mt-10 rounded-[22px] border border-forest/10 bg-[#F9F4EA] p-8 md:p-10">
            <p className="text-[14px] leading-7 text-forest/72">
              Questions or any requests?{" "}
              <Link
                href="/contact"
                className="font-medium text-forest underline underline-offset-4"
              >
                Contact us here
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

        <PageFooter />
      </div>
    </SmoothScroll>
  );
}
