# 06 - Component Library

Core components: 

Hero
ServiceCard
TrustBar
ReviewBlock
CTASection
FAQAccordion
SuburbServiceBlock
CalendlyBookApp
BookingForm
StickyMobileCTA
GoogleMapBlock
ShopCrossSell

Reusable contact form architecture:

- `components/forms/ContactForm.tsx` provides the shared client-side contact form for the homepage and future service pages.
- `app/api/contact/route.ts` handles server-side validation, spam checks and SMTP email delivery.
- Service pages can reuse the form with optional `sourcePage`, `serviceName`, `heading`, `submitLabel` and `className` props.
- Contact form fields are name, phone, email address, optional vehicle registration, and vehicle or issue.
- Workshop notifications are sent to the `EMAIL_TO` environment variable.
- Customer acknowledgement emails are sent after the workshop notification succeeds.
- Required SMTP environment variables are documented in `.env.example`.

Every page must have:
H1
Clear service promise
Phone button
Book/request quote button
Trust proof
Local suburb mention
FAQ section
Internal links
Schema markup

Service page architecture:

- `lib/content/services.ts` is the single source of service routes and authored service content.
- `components/services/ServicePage.tsx` composes the reusable service-page sections.
- Reusable sections cover the hero, symptoms, overview, process, features and vehicles, FAQ, related services, and contact CTA.
- The existing `ContactForm`, `SiteHeader` and `SiteFooter` are reused.
- Incomplete approved routes continue to use `ServicePlaceholder` and remain noindex.
- `RelatedServices` uses a tinted section background with white elevated cards and visible hover and keyboard-focus states.
- `ServiceCTA` wraps its booking copy, CTA buttons and shared contact form in one white elevated conversion panel.
- These reusable styles apply automatically to every completed service page.
