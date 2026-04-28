import Image from "next/image";
import { APK_URL, footerLinks } from "@/lib/data";

export default function PageFooter() {
  return (
    <footer className="bg-[#F4EFE6] px-6 pb-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 border-t border-forest/15 pt-12 md:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-1">
              <Image
                src="/images/branding/logo.png"
                alt="Nomy"
                width={32}
                height={32}
                className="h-12 w-12 rounded-full"
              />
              <span className="text-[22px] font-semibold tracking-tight text-forest">
                nomy
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-6 text-forest/62">
              Your AI travel companion for India. <br /> Travel light. Travel smart.
            </p>
          </div>
          {Object.entries(footerLinks).map(([label, links]) => (
            <div key={label}>
              <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-forest/58">
                {label}
              </p>
              <div className="mt-5 space-y-3">
                {links.map((link) => {
                  const href =
                    link === "Privacy Policy"
                      ? "/privacy"
                      : link === "Terms of Service"
                      ? "/terms"
                      : link === "Contact"
                      ? "/contact"
                      : link === "Features"
                      ? "/features"
                      : link === "Destinations"
                      ? "/destinations"
                      : link === "About Us"
                      ? "/about"
                      : link === "Download"
                      ? APK_URL
                      : "#";
                  return (
                    <a
                      key={link}
                      href={href}
                      className="block text-[13px] text-forest/72 transition hover:text-forest"
                    >
                      {link}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-forest/15 pt-6 text-[12px] text-forest/55 md:flex-row md:items-center">
          <span>© 2026 Nomy — Travel Light. Travel Smart.</span>
          <span>Made with ♥ in India · Available free on Android</span>
        </div>
      </div>
    </footer>
  );
}
