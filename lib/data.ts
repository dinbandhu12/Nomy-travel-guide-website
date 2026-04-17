import {
  Backpack,
  Brain,
  CheckCircle2,
  Clock,
  Compass,
  Database,
  Download,
  Globe2,
  Layers,
  LineChart,
  MapPinned,
  MessageSquare,
  Mountain,
  ShieldCheck,
  Sparkles,
  Sun,
  Umbrella,
  Waves,
  WifiOff
} from "lucide-react";

export const navItems = ["About", "Features", "Destinations", "Contact"];

export const destinationLogos = [
  "Goa",
  "Rajasthan",
  "Kerala",
  "Himachal",
  "Ladakh",
  "Mumbai"
];

export const workflowFeatures = [
  {
    title: "AI packing reasoning that adapts to destination and trip length"
  },
  {
    title: "Deterministic logic for curated lists that follow real travel rules"
  },
  {
    title: "Native tools for Maps, Places, Chat, and planning in one flow"
  }
];

export const useCases = [
  {
    title: "Smart Packing",
    description:
      "Auto-curated lists built around destination, trip type, weather, and duration — no manual entries.",
    stat: "30s to a complete packing list",
    icon: Backpack
  },
  {
    title: "Nearby Discovery",
    description:
      "Real-time food spots, stays, and landmarks powered by Google Places — always close to you.",
    stat: "100+ curated destinations",
    icon: Compass
  },
  {
    title: "AI Travel Chat",
    description:
      "Ask culture, safety, food, or timing questions — get real contextual answers, not generic search.",
    stat: "GPT-4o powered answers",
    icon: Sparkles
  },
  {
    title: "Trip Planner",
    description:
      "Active, upcoming, and future trips in one calm view. Stays, dates, and daily structure in sync.",
    stat: "3 trip slots built-in",
    icon: MapPinned
  },
  {
    title: "Offline Ready",
    description:
      "Packing lists and saved trips stay accessible when network drops — built for real India travel.",
    stat: "100% offline packing",
    icon: WifiOff
  }
];

export const realWorldCards = [
  {
    label: "GOA",
    title: "Beach trips, simplified with AI-driven prep",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "RAJASTHAN",
    title: "Desert itineraries without the planning chaos",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "KERALA",
    title: "Backwaters, food trails, and offline maps ready",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
  },
  {
    label: "HIMALAYAS",
    title: "High altitude trips packed smart and light",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80"
  }
];

export const impactFeatures = [
  {
    title: "AI workers plan autonomously",
    text: "Nomy reasons over destination, season, and trip type to deliver ready-to-use packing and plans."
  },
  {
    title: "Every trip builds context",
    text: "Saved places, past chats, and curated destinations reinforce smarter future recommendations."
  },
  {
    title: "Plans that flex with travel",
    text: "Real-time changes, offline fallback, and adaptive suggestions keep the day moving calmly."
  }
];

export const impactStats = [
  {
    name: "Speed",
    text: "Generate a complete packing list in under 30 seconds — no manual entry, no friction."
  },
  {
    name: "Coverage",
    text: "Built for every Indian travel style — beach, mountain, city, religious, adventure, business."
  },
  {
    name: "Free",
    text: "Core features always free on Android. Premium unlocks unlimited AI chat and advanced tools."
  }
];

export const chatMessages = [
  {
    side: "left",
    text: "Planning a 5-day trip to Goa with my family. What should I pack for early April?"
  },
  {
    side: "right",
    text: "Light cottons, sunscreen SPF 50+, rain jacket (pre-monsoon showers), and power bank — Goa is 32°C with humid evenings."
  },
  {
    side: "left",
    text: "Any quiet beaches near Palolem that locals recommend?"
  },
  {
    side: "right",
    text: "Agonda and Patnem — both 15 minutes away, calmer crowds, great for sunset. Want me to save them to your trip?"
  }
];

export const travelerCard = {
  name: "Priya Nair",
  role: "Traveler",
  company: "Nomy User",
  location: "Bengaluru → Goa",
  trip: "April 14 — April 19",
  summary:
    "Priya is planning a family beach trip. Nomy reads destination, dates, and weather to build a 30-second packing list and suggests nearby food spots throughout her stay."
};

export const footerLinks = {
  Overview: ["Features", "Destinations", "How It Works", "Download"],
  Company: ["About Us", "Contact", "Careers"],
  "News & Policies": ["Privacy Policy", "Terms of Service"],
  Social: ["Instagram", "Facebook", "LinkedIn", "Twitter"]
};

export const iconMap = {
  Brain,
  Layers,
  Globe2,
  Sun,
  Umbrella,
  Waves,
  Mountain,
  MessageSquare,
  LineChart,
  Database,
  Clock,
  CheckCircle2,
  Download,
  ShieldCheck,
  Sparkles,
  Compass,
  Backpack,
  MapPinned,
  WifiOff
};
