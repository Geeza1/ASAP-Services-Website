# 09 - Template Research

Date: 2026-07-09
Project: ASAP Auto Electrics Services Website
Status: Recommendation

## Documentation Referenced

- OneDrive README: read docs in numerical order before changes.
- 01-Master-Plan.md: service website, not ecommerce; Next.js 15, TypeScript, Vercel; focus on Google Ads conversion, local SEO, workshop bookings, and ecommerce separation.
- 02-Design-System.md: ASAP colours only, clean premium style, mobile-first, reusable components, Server Components by default.
- 03-SEO-Playbook.md: one primary intent per page, helpful service explanations, suburb pages must say customers travel to Ringwood workshop.
- 04-Google-Ads-Playbook.md: one landing page per ad group, one CTA, no ecommerce clutter, phone above fold, reviews near top.
- 05-Content-Guide.md: Australian English, expert and local tone, clear CTA above fold, no product mixing on service pages.
- 06-Component-Library.md: Hero, ServiceCard, TrustBar, ReviewBlock, CTASection, FAQAccordion, SuburbServiceBlock, BookingForm, StickyMobileCTA, GoogleMapBlock, ShopCrossSell.
- 07-Coding-Standards.md: Next.js App Router, TypeScript strict mode, Tailwind CSS, Vercel, analytics/tracking.
- 08-Roadmap.md: foundation, homepage, service template, service pages, area pages, blog, landing pages, analytics.

## External Research Summary

- Zarla's mechanic template set repeatedly highlights fast paths from trust messaging to booking CTAs, mobile-ready booking options, phone/contact visibility, clear service sections, pricing/trust sections, and strong action imagery. Source: https://www.zarla.com/website-templates/mechanic
- ThemeForest's auto repair category shows a mature template market with 640 auto repair results. Top examples include Car Service - Mechanic & Auto Repair WordPress Theme, with 4.1K sales, and an HTML version with 1.6K sales. Common features include service pages, auto repair positioning, workshop cost calculators, contact forms, and repair-shop layouts. Source: https://themeforest.net/search/auto%20repair
- Webflow's auto repair search results include service-business templates such as Repair, Gearz, Heavens Auto, Carfix, PrimeFix, Autocar X, and related electrician/HVAC templates. This confirms that the strongest pattern is a local service template, not ecommerce. Source: https://webflow.com/templates/search?query=auto%20repair
- Google Business Profile guidance says local ranking is primarily based on relevance, distance, and prominence, and recommends complete business info, accurate hours, review replies, and photos/videos. Source: https://support.google.com/business/answer/7091
- Google Search Central recommends helping search engines understand content while helping users decide whether to visit, and provides LocalBusiness structured data guidance for business details, hours, departments, and related search features. Sources: https://developers.google.com/search/docs/fundamentals/seo-starter-guide and https://developers.google.com/search/docs/appearance/structured-data/local-business

## Recommended Template Direction

Build a custom Next.js service template inspired by high-performing auto repair patterns, rather than buying and adapting a WordPress/Webflow template.

Reasoning:

- The project documentation already specifies Next.js 15, TypeScript, Tailwind CSS, Vercel, Server Components, reusable components, and data-driven page templates.
- Marketplace templates validate the layout pattern, but many are WordPress, Elementor, Webflow, Shopify, or ecommerce-adjacent. Those add platform mismatch and clutter risk.
- ASAP needs separate service and shop experiences. A custom template can make ecommerce cross-sell optional and clearly subordinate to service enquiries.
- Google Ads landing pages need tighter intent matching than most multipurpose templates provide.

## Template Archetypes To Use

### 1. Service Landing Page Template

Use for paid Google Ads and priority services such as alternator repairs, starter motors, diagnostics, brake controllers, Anderson plugs, driving lights, electric windows, lighting, and air conditioning.

Above the fold:

- H1 matched to keyword and ad group.
- Short service promise with Ringwood workshop clarity.
- Phone CTA and booking/quote CTA.
- Review rating/trust proof.
- Real workshop or service photo.

Core sections:

- Symptoms.
- Diagnosis process.
- Repair or installation process.
- Why ASAP.
- Reviews near the top half of the page.
- FAQ.
- Related services.
- Contact/map block.
- Service schema, FAQ schema, BreadcrumbList schema.

### 2. Local Area Page Template

Use for Ringwood, Croydon, Bayswater, Donvale, Warrandyte, Mooroolbark, Lilydale, Mitcham, and Kilsyth.

Required wording:

> Our fully equipped workshop is located in Ringwood and proudly services customers from Melbourne's Eastern Suburbs.

The page must never imply a mobile service.

Core sections:

- Area-specific H1.
- Workshop travel clarity.
- Relevant service list.
- Local proof/reviews.
- Directions/map block.
- FAQs about booking and workshop visits.
- Internal links to priority service pages.

### 3. Homepage Template

Use as the trust and routing hub, not as a generic ad landing page.

Core sections:

- Premium workshop hero with phone and booking CTA.
- Service category grid.
- Trust bar.
- Review proof.
- Common problems customers search for.
- Ringwood workshop location.
- Areas serviced.
- Blog/help links.
- Shop link only as a clearly separate secondary pathway to shop.asapauto.com.au.

### 4. Contact / Booking Template

Use for quote requests and workshop bookings.

Core sections:

- Phone-first contact options.
- Booking form with minimal required fields.
- Workshop location and hours.
- Map/directions.
- What happens after submission.
- No product catalogue or ecommerce pathways.

## Template Scoring Criteria

Use this to judge any candidate visual template before implementation:

- Above-fold phone CTA: must be visible on mobile and desktop.
- One primary action per landing page: pass/fail.
- Ecommerce separation: pass/fail.
- Real photography support: must support workshop, technicians, vehicles, equipment, and installed products.
- Local SEO support: service + suburb content, internal links, Google Map, schema, reviews.
- Google Ads relevance: H1, title, meta, CTA, and page intent can match one ad group.
- Performance: no heavy page builders, no unnecessary sliders, no required third-party scripts in the critical path.
- Accessibility: semantic layout, keyboard support, visible focus states, contrast.
- Design fit: ASAP palette, clean premium feel, no generic stock mechanic look.

## Initial Questions For Approval

1. Should we proceed with a custom Next.js/Tailwind template system, using marketplace templates only as layout references?
2. Do you already have real workshop/staff/customer photos, or should the first build reserve strong image slots with placeholders until photography is ready?
3. What is the preferred primary booking action for the first release: phone call, quote form, Calendly-style booking, or all three with one dominant CTA per page?

## Recommendation

Proceed with a custom conversion-led service website template system:

- Service landing template first.
- Homepage second.
- Area page template third.
- Contact/booking template fourth.

This best matches the documented goals: maximise Google Ads conversion rate, dominate local SEO, generate workshop bookings, project professionalism, and keep ecommerce separate.
