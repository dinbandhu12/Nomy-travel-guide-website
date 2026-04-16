# Nomy Website — Update Content (Tomorrow's Work)

> This file tracks everything that needs to be added, fixed, or improved on the Nomy website.
> Work through these in order — high impact items first.

---

## 1. Reframe the Website as an App Showcase

The website is the face of our app — every section should answer: "What does Nomy give me?"
Right now some sections feel like a generic travel agency. Fix this.

### What to change:
- [ ] Hero section — add a real phone mockup or app screenshot as the hero visual (replace the landscape photo)
- [ ] Every CTA button should lead to the Play Store link (or a waitlist form until launch)
- [ ] Hero subheadline — make it India-specific: *"Built for Goa, Rajasthan, Kerala, and every trip in between."*
- [ ] Add an "Available Free on Android" badge under the main CTA button
- [ ] The "About Us" section talks about "we believe travel is more than booking" — reframe it around the app: what Nomy does, not what we believe
- [ ] Remove or repurpose the "// Our Insights" blog article card — blog doesn't exist yet, don't promise it

---

## 2. Replace Images with India-Relevant Photos

Every image on the site should feel like India travel — not generic international stock.

### Sections to update (Unsplash search terms to use):
- [ ] **Hero background** — search: `india travel`, `rajasthan landscape`, `kerala backwaters`, `goa beach`
- [ ] **About/Mission section** (traveler checking phone) — search: `indian traveler`, `backpacker india`
- [ ] **Services Left photo** — search: `india mountain trek`, `himachal pradesh`
- [ ] **Services Right photo** — search: `india street market`, `jaipur street`
- [ ] **Story main photo** (road trip landscape) — search: `india road trip`, `leh ladakh road`
- [ ] **Story side photo** — search: `india travel bag`, `travel planning phone`
- [ ] **Feature cards preview** (already changed to Goa) — keep, but use a real Goa beach photo
- [ ] **Community tiles** — replace with India-themed travel photos (mountains, temples, beaches, cities)
- [ ] **Review section images** — use packing, map-reading, hiking photos from India context
- [ ] **Article cover** — search: `packing luggage minimal`, `travel checklist`
- [ ] **CTA background** — search: `india aerial view`, `india travel adventure`

> **Tip:** Use `?ixlib=rb-4.0.3` Unsplash params and always add `&q=80&w=1600` for quality.

---

## 3. Add Missing Pages

Currently only `/` (home) exists. Need these before any public launch.

### Pages to build:
- [ ] **`/contact`** ← Priority — include this on main nav
  - Simple form: Name, Email, Message
  - WhatsApp link (faster response for India users)
  - Email: hello@nomy.app
  - No fancy layout — just clean, minimal, on-brand
- [ ] **`/privacy`** ← Required for Play Store
  - Data collected, how it's used, Firebase Auth info, no third-party selling
  - Can use a standard template — just brand it properly
- [ ] **`/terms`** ← Required for Play Store
  - Usage terms, AI-generated content disclaimer, free/premium split
- [ ] **`/features`** ← Optional but useful for SEO
  - Deep dive into Smart Packing, Explore Nearby, AI Chat, Offline mode
- [ ] **`/404`** ← Custom "lost?" page with the Nomy brand

### Nav update needed:
- [ ] Add "Contact" to the nav (replace "How It Works" or add it)
- [ ] Footer links already list Privacy Policy and Terms — wire them to real pages

---

## 4. Fix Footer Spacing

Footer is functional but spacing feels off — especially on mobile.

### Issues to fix:
- [ ] The four-column footer grid (`grid-cols-[1.25fr_0.8fr_0.8fr_0.8fr]`) on mobile stacks into one column with no breathing room — add `gap-10` between stacked columns on mobile
- [ ] Newsletter section: the input + button feels too tight on mobile — add `flex-col sm:flex-row` so button doesn't overflow on small screens
- [ ] The three contact info blocks (`Email Us`, `Based In`, `Available On`) need more vertical spacing on mobile — increase `gap-8` to `gap-10 md:gap-8`
- [ ] The mint bottom bar (`bg-mint`) — social links wrap awkwardly on small phones — make them wrap cleanly with `flex-wrap gap-2`
- [ ] Footer section headings use `text-[30px]` — reduce to `text-2xl` on mobile so it doesn't look oversized
- [ ] The entire footer needs `px-5 md:px-6` consistent padding — currently `px-4` on root and `md:px-6` but the inner shell has no padding reset

---

## 5. Content Improvements — Vista's Notes

> **Vista says:** *"The content structure is solid but it's not doing enough selling. Right now the site describes Nomy — it should be making the user feel like they're missing out. Here's what to fix:"*

### Add these content sections / fix existing ones:

- [ ] **"How It Works" visual steps** — The current section just shows tech logos. Replace with a 3-step flow:
  - Step 1: *"Tell Nomy where you're going"*
  - Step 2: *"Get a smart packing list + nearby gems"*
  - Step 3: *"Chat with your AI guide anytime"*
  - Use numbered cards with icons, not just text

- [ ] **Real app screenshots carousel** — The single biggest missing thing. Users want to see the actual app before downloading. Add a horizontal scroll or stacked mockup section with 3–4 key screens:
  - Home screen
  - Packing list screen
  - AI chat screen
  - Explore/maps screen

- [ ] **Testimonials section** — The testimonial data exists in `data.ts` but isn't rendered on the page. Wire it up. Show 2–3 testimonials in a clean card layout. Don't use carousel on mobile — just stack them.

- [ ] **Stats that feel real** — Replace the vague stats with things that actually build trust:
  - *"Built for Android — optimized for Indian networks"*
  - *"Packing lists in under 30 seconds"*
  - *"Works offline — no signal required"*
  - These are feature stats, not vanity metrics. More honest, more compelling.

- [ ] **"Why India needs this" hook** — Add a short paragraph near the top that calls out the real problem:
  > *"Planning a trip in India means juggling 6 apps, 4 browser tabs, and a WhatsApp group with your friends. Nomy puts it all in one calm place."*
  This is the moment users go "yes, that's exactly my problem."

- [ ] **Free vs Premium clarity** — Even if premium is Stage 5, mention it: *"Core features free forever. Premium unlocks unlimited AI chat."* Users want to know upfront.

---

## 6. Vista's Bigger Suggestions — What to Add Next

> **Vista says:** *"Here's what's missing that would actually move the needle — ranked by impact:"*

### High Impact (do these first):
- [ ] **Play Store link** — Even if the app isn't live, set up an "Early Access" form so users can register. Use a Google Form or Typeform. Every visitor who bounces without leaving an email is a missed user.
- [ ] **App screenshots / phone mockup** — Use a free tool like [Previewed.app](https://previewed.app) or [Mockuphone](https://mockuphone.com) to wrap your app screenshots in a phone frame. This is the #1 conversion element for app landing pages.
- [ ] **Hindi language toggle** — Even a basic `EN | हिंदी` switch in the nav builds massive trust with Indian users. You don't need full localization — just the hero text and CTA in Hindi is enough.
- [ ] **WhatsApp CTA** — Add a floating WhatsApp button for early users to reach you directly. India-first product = WhatsApp-first support.

### Medium Impact (plan these):
- [ ] **FAQ section** — Answer the 5 questions every new user has:
  - Is it free?
  - Does it work without internet?
  - Which cities are supported?
  - How does the AI know about my destination?
  - Is my data safe?
- [ ] **SEO meta tags** — Add proper `og:image`, `og:description`, Twitter card meta. Right now if someone shares the site on WhatsApp, it shows no preview.
- [ ] **Performance** — Most `<img>` tags should be Next.js `<Image>` components for automatic optimization and lazy loading. Raw `<img>` hurts Core Web Vitals.
- [ ] **Analytics** — Add Google Analytics 4 or Microsoft Clarity (free heatmaps). You need to know where users drop off before you can fix it.

### Good to Have (later):
- [ ] **Dark mode toggle** — The app is dark-first. The website is light-only. A dark mode toggle would create a satisfying brand connection between site and app.
- [ ] **Blog/Travel Tips page** — Even 3 articles like "What to Pack for Goa in December" would drive organic search traffic from India. Do this after launch.
- [ ] **Social proof ticker** — A small animated strip: "Used by travelers in Goa · Jaipur · Manali · Kerala · Leh ·" — creates FOMO and feels alive.

---

## Priority Order for Tomorrow

| # | Task | Time Est. | Impact |
|---|------|-----------|--------|
| 1 | Add Contact page (with WhatsApp + form) | 1–2 hrs | High |
| 2 | Replace all images with India-relevant photos | 1 hr | High |
| 3 | Add "How It Works" 3-step section | 1 hr | High |
| 4 | Wire testimonials to the page | 30 min | Medium |
| 5 | Add app screenshots section (with phone mockups) | 2 hrs | High |
| 6 | Fix footer spacing on mobile | 30 min | Medium |
| 7 | Add Privacy Policy + Terms pages | 1 hr | High (Play Store) |
| 8 | Add OG meta tags for WhatsApp/social sharing | 20 min | Medium |
| 9 | Replace `<img>` with Next.js `<Image>` components | 1 hr | Medium |
| 10 | Add "Join Waitlist" form until Play Store is live | 30 min | High |

---

*Last updated: 2026-04-08*
