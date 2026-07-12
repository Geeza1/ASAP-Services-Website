# 07 - Coding Standards

 
Next.js App Router
TypeScript strict mode
Tailwind CSS
Vercel
Server Components by default.
Google Tag Manager
Google Analytics 4
Google Ads conversion tracking
Google Search Console

Contact form standards

Use the shared `components/forms/ContactForm.tsx` component for homepage and service-page enquiries.
Use the `app/api/contact/route.ts` API route for server-side validation and email delivery.
SMTP credentials must only be stored in environment variables and must never be committed.
Validate name, phone, email address, and vehicle or issue on both client and server.
Send workshop notifications to `EMAIL_TO` and set `replyTo` to the customer's submitted email address.
Send a separate customer acknowledgement email only after the workshop notification succeeds.
Required variables:

SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASS
EMAIL_FROM
EMAIL_TO
