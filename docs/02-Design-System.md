# 02 - Design System

## Brand

Primary: #2905a1
Red accent: #ed2e38
Blue accent: #00a6d6
Headings: Calcite Pro style
Navigation, buttons and UI labels: Franklin Gothic / Myriad-style
Body copy and long-form reading: Inter
Tone: confident, friendly, local, expert

## Typography Utilities

Use `.reading-text` for long-form body copy, descriptive paragraphs, service descriptions, FAQ answers, contact descriptions, footer text, list descriptions, form helper text and other reading content.

`.reading-text` uses Inter and sets comfortable reading typography: approximately 16px text, 1.55 line-height, regular weight, normal letter spacing and slate-700 text colour.

Do not use `.reading-text` for H1-H6 headings, hero headings, section headings, card headings, navigation, buttons, logos, labels or badges.

## Service Page Conversion Sections

- Related Services uses a subtle tinted background with white, softly elevated service cards.
- The final enquiry section uses a unified white conversion panel with a slate border, rounded corners and a stronger soft shadow.
- This background and elevation hierarchy is the standard for all service pages.

Always follow these principles.

Architecture
Follow the project folder structure.
Use reusable components wherever possible.
Keep pages data-driven.
Avoid duplicated layouts.
Use Server Components by default.
Only use Client Components when necessary.
Design
Follow the Design System exactly.
Do not introduce new colours or typography.
Maintain a clean, modern, premium appearance.
Mobile-first design is mandatory.
SEO
Every page must target a single primary search intent.
Never create duplicate or doorway pages.
Every page must include complete metadata.
Follow the SEO Playbook.
Google Ads
Landing pages should closely match campaign keywords and ad copy.
Every landing page should have one clear conversion goal.
Remove unnecessary distractions from paid landing pages.
Content
Use Australian English.
Write for customers first.
Build trust through expertise.
Never use keyword stuffing.
Be technically accurate.
Coding Standards
TypeScript Strict Mode.
Tailwind CSS only.
No inline styling.
Small reusable components.
Consistent naming conventions.
Clean folder structure.
Approval Rules

Do not make architectural decisions without approval.

Examples include:

Routing changes
Folder structure changes
Branding changes
Navigation redesign
Technology changes
New third-party packages
Database changes
Authentication changes

Instead, propose the change and wait for approval.

Development Workflow

Each task should complete only the requested milestone.

Typical workflow:

Read the documentation.
Review the current codebase.
Explain the implementation plan.
Build the requested milestone.
Verify responsiveness.
Verify accessibility.
Verify SEO requirements.
Verify performance.
Summarise completed work.
Stop and await approval before beginning the next milestone.
Quality Checklist

Every completed page must satisfy the following before it is considered finished:

Responsive on desktop, tablet and mobile
Accessible
Fast loading
Lighthouse score target achieved
Metadata complete
Schema complete
Internal links complete
Images optimised
Calls-to-action visible
Tracking implemented where required

Component rules:

Hero
ServiceCard
TrustBar
ReviewBlock
CTASection
FAQAccordion
SuburbServiceBlock
BookingForm
StickyMobileCTA
GoogleMapBlock
ShopCrossSell

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
