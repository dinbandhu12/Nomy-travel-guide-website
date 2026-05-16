"use client";

import { ArrowLeft, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-forest flex flex-col items-center justify-center px-6 text-center">
      <p className="mt-6 max-w-md text-[10px] mb-2 leading-8 text-forest">
        PAGE NOT FOUND
      </p>
      <div className="inline-flex items-center gap-2 rounded-full bg-forest/8 px-4 text-[18px] font-semibold uppercase tracking-[0.18em] text-forest/60">
        <MapPin className="h-3.5 w-3.5" />
        404 — Off the map
      </div>

      <h1 className="mt-8 font-semibold text-[56px] leading-[1.04] tracking-[-0.03em] text-forest md:text-[80px]">
        You&apos;re lost.
        <br />
        <span className="font-serif italic font-normal">
          that&apos;s okay.
        </span>
      </h1>

      <p className="mt-6 max-w-md text-[18px] leading-8 text-forest/65">
        Even the best travelers take a wrong turn. This page doesn&apos;t
        exist — but your next India trip does.
      </p>


      <button
        onClick={() => router.back()}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-white transition hover:bg-forest/90"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>
    </div>
  );
}
