import {
  Backpack,
  BadgeDollarSign,
  Compass,
  Leaf,
  MapPinned,
  ShieldCheck,
  Sparkles,
  TimerReset
} from "lucide-react";

export const navItems = ["Home", "About Us", "Features", "Stories", "Blogs"];

export const quickFeatures = [
  { label: "Smart Packing", icon: Backpack },
  { label: "AI Itineraries", icon: Sparkles },
  { label: "Budget Clarity", icon: BadgeDollarSign },
  { label: "Live Assistance", icon: TimerReset }
];

export const partnerLogos = [
  "Trail Note",
  "Marketly",
  "Codefly",
  "Natural",
  "Doctorly",
  "Architech"
];

export const services = [
  {
    title: "Smart Packing",
    description: "Pack lighter with weather, destination, and trip-length aware suggestions."
  },
  {
    title: "AI Travel Guide",
    description: "Get destination context, food ideas, and real-time trip help in one place.",
    featured: true
  },
  {
    title: "Seasonal Tips",
    description: "Travel timing, crowd awareness, and climate notes before you book."
  },
  {
    title: "Offline Maps",
    description: "Keep routes, saved places, and key details ready even when signal drops."
  }
];

export const featureCards = [
  {
    index: "[01]",
    title: "AI Travel Guide: Context for every stop",
    text: "Destination summaries, food spots, and quick answers without opening five other apps.",
    meta: ["Mode", "Guide"],
    icon: Sparkles
  },
  {
    index: "[02]",
    title: "Trip Planner: Build a calmer timeline",
    text: "Move from arrival to daily flow with clear, card-based trip structure and reminders.",
    meta: ["Mode", "Planner"],
    icon: Compass
  },
  {
    index: "[03]",
    title: "Packing Flow: Travel lighter by default",
    text: "Lists adapt to destination, weather, and duration so you stop overpacking the basics.",
    meta: ["Mode", "Packing"],
    icon: Backpack
  }
];

export const communityPhotos = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
];

export const testimonials = [
  {
    quote:
      "Nomy helped me simplify an entire two-week trip into one calm travel flow. The packing guidance alone saved me from carrying way too much.",
    name: "Esther Howard",
    handle: "@esther",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  {
    quote:
      "It feels less like a generic travel app and more like a smart co-pilot that understands what I need next.",
    name: "Nina George",
    handle: "@nina",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  },
  {
    quote:
      "The itinerary and nearby recommendations feel premium and surprisingly clear. It actually reduces planning friction.",
    name: "Dev Patel",
    handle: "@dev",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  },
  {
    quote:
      "I finally had one place for packing, maps, and ideas. That made the trip smoother from day one to landing back home.",
    name: "Aarav Mehta",
    handle: "@aarav",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80"
  }
];

export const footerLinks = {
  "Main Pages": ["Home", "About Us", "Contact", "Features", "Blog"],
  Company: ["AI Guide", "Trip Planner", "Pricing", "Stories", "Project Single"],
  Template: ["404 Not Found", "Password Protected", "Changelog", "License", "Style Guide"]
};

export const photoSet = {
  hero: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  mission: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
  servicesLeft: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=900&q=80",
  servicesRight: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=900&q=80",
  storyMain: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=80",
  storySide: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=900&q=80",
  cta: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=80",
  article: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
};

export const guideHighlights = [
  {
    title: "Context-aware suggestions",
    text: "Nearby food, landmarks, and timing advice when you actually need them.",
    icon: Compass
  },
  {
    title: "Privacy-friendly organization",
    text: "Save what matters and keep key travel decisions easy to revisit.",
    icon: ShieldCheck
  },
  {
    title: "Travel flows that adapt",
    text: "Trip details change fast, so your plan surfaces the next best move.",
    icon: Leaf
  },
  {
    title: "Offline confidence",
    text: "Routes, plans, and saved places remain useful when your network does not.",
    icon: MapPinned
  }
];
