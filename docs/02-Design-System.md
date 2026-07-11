# 02 - Design System

## Brand

Primary: #2905a1
Red accent: #ed2e38
Blue accent: #00a6d6
Headings: Calcite Pro style
Body: Franklin Gothic / Myriad-style
Tone: confident, friendly, local, expert

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