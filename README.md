# AURA — Medspa & Skin Clinic Framework

A **premium, "expensive-looking"** medical-aesthetics template: three.js silk-flow hero, scroll reveals, 3D tilt cards, an interactive **treatment finder** (pick a concern → see matching treatments → pre-fill the consult form), honest pricing cards, team profiles, and memberships. Pure HTML/CSS/JS — no build step, hosts free on GitHub Pages or Netlify.

Warm near-black + champagne aesthetic with Prata didone display type (Google Fonts). Works for medspas, aesthetics clinics, laser clinics, cosmetic nurse injectors, and high-end day spas.

> Third framework built on the **PowerStudio premium playbook** —
> `PowerStudio/Playbooks/Expensive-Website-Playbook.md`. The reusable `fx.js`
> effects library is copied verbatim from the playbook; the hero adds a new
> scene recipe: **silk-flow lines** (calm/luxury verticals).

## Features

- **three.js hero** — layered champagne lines undulating like silk, with cursor parallax (`three-scene.js`, CDN-loaded). All motion is a pure function of time, so promo-video capture is deterministic. Falls back to a static gradient on reduced-motion or if WebGL/CDN is unavailable.
- **fx.js effects library** — scroll reveals with stagger, animated stat counters, 3D tilt cards with glare, magnetic buttons, parallax spa strip, marquee, header scroll state.
- **Treatment finder (signature feature)** — six concern chips (`CONCERNS` array); picking one filters the `TREATMENTS` array into match cards, and "Ask about this at my consult" pre-fills and scrolls to the form. Turns browsers into leads.
- **Treatments grid** — nine cards with category tags, honest from-pricing, duration, and downtime (`TREATMENTS` array drives both the grid and the finder).
- **Team** — medical director, nurse injector, aesthetician profile cards (`TEAM` array).
- **Memberships** — three recurring tiers in glass cards (`MEMBERSHIPS` array) — recurring revenue for the client, and a natural care-plan conversation.
- **Consult form** — concern, treatment interest, and timing selects (auto-populated from the arrays), wired to Web3Forms (`✨ NEW CONSULT`), honeypot, mailto fallback.
- **Visit section** — hours, location, contact, Google Map with styled address fallback.
- **HealthAndBeautyBusiness JSON-LD**, mobile responsive, ARIA-labelled, keyboard friendly.

## Personalising for a client

1. **Brand & colours** — edit `:root` tokens in `styles.css` (`--brand` champagne can become blush, sage, or ice; keep the near-black base).
2. **Business info** — name, hours, address, phone, JSON-LD, and map `q=` address in `index.html`.
3. **Treatments & prices** — the `TREATMENTS` array in `app.js` is the whole menu: names, from-prices, durations, downtime, and which concerns each treats. The finder updates automatically.
4. **Concerns** — rename or re-slice the `CONCERNS` chips to match what the clinic actually gets asked.
5. **Team / Memberships / Reviews** — each is one array in `app.js`. Real staff portraits sell this site — a natural PowerStudio photography upsell.
6. **Fonts** — Prata from Google Fonts; swap the `<link>` and `--font-head` token to re-voice the brand.

## Local preview

```bash
python3 -m http.server 5630   # then open http://localhost:5630
```

## Lead delivery

1. Get a FREE key at [web3forms.com](https://web3forms.com) using the **client's email**.
2. Paste it into `CONFIG.web3formsKey` in `app.js`.
3. Set `CONFIG.ownerEmail`, `CONFIG.businessName`, and `CONFIG.phone`.
4. Test from the live site and confirm the `✨ NEW CONSULT` email arrives.

Free tier = 250 submissions/month per key. **Fallback:** with no key set, the form opens the visitor's email app (mailto) so no lead is lost.

## Performance notes

- three.js (~600 KB) loads as a deferred ES module from jsdelivr — the page renders fully before it arrives.
- The scene pauses off-screen/hidden-tab, drops line count on small screens, caps DPR at 2, and honours `prefers-reduced-motion`.

## Hosting

1. Push to GitHub (free demo).
2. Deploy to **Netlify** or **Cloudflare Pages** (both free, custom domain support).
3. Point custom domain nameservers to Netlify/Cloudflare.

## Selling this template

Premium-tier demo — position against $5–10k agency builds. Medspas charge $200+ per visit and live or die on consult bookings, yet most local clinic sites are a phone number and a price list PDF. The finder gives them a "which treatment is right for me?" answer machine, the memberships section sells recurring revenue, and the free-consult form lands every lead in their inbox. Disclaimer to keep: prices are "from" prices confirmed at consult.
