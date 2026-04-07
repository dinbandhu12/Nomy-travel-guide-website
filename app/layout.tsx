import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const heading = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading"
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Nomy Travel",
  description: "Travel Light. Travel Smart. Nomy is your AI travel assistant."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-[var(--font-body)] text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
