import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter"
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: "Nomy — AI Travel Companion for India",
  description: "Smart packing lists, AI travel chat, and trip planning built for India. Free on Android. Built for Goa, Rajasthan, Kerala, and every trip in between.",
  openGraph: {
    title: "Nomy — AI Travel Companion for India",
    description: "Planning a trip in India means juggling 6 apps, 4 browser tabs, and a WhatsApp group. Nomy puts it all in one calm place. Free on Android.",
    type: "website",
    locale: "en_IN",
    siteName: "Nomy"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomy — AI Travel Companion for India",
    description: "Smart packing, AI travel chat, and offline maps. Built for Indian travelers. Free on Android."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="font-[var(--font-inter)] text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
