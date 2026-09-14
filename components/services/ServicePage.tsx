import type { ServiceContent } from "../../lib/content/services";
import { SiteFooter } from "../layout/SiteFooter";
import { SiteHeader } from "../layout/SiteHeader";
import { RelatedServices } from "./RelatedServices";
import { ServiceCTA } from "./ServiceCTA";
import { ServiceHero } from "./ServiceHero";
import { ServiceFAQ, ServiceFeatures, ServiceOverview, ServiceProcess, ServiceSymptoms } from "./ServiceSections";

export function ServicePage({ service }: { service: ServiceContent }) {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: service.pageTitle, description: service.metaDescription, url: `https://asapauto.com.au/services/${service.slug}`, provider: { "@type": "AutoRepair", name: "ASAP Auto Electrics", telephone: "+61398702722", address: { "@type": "PostalAddress", streetAddress: "Unit 3/3 Oban Rd", addressLocality: "Ringwood", addressRegion: "VIC", postalCode: "3134", addressCountry: "AU" } }, areaServed: "Melbourne eastern and outer-eastern suburbs" };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://asapauto.com.au/" }, { "@type": "ListItem", position: 2, name: "Services", item: "https://asapauto.com.au/#services" }, { "@type": "ListItem", position: 3, name: service.shortTitle, item: `https://asapauto.com.au/services/${service.slug}` }] };
  return <main className="min-h-screen bg-white text-slate-950"><SiteHeader /><ServiceHero service={service} /><ServiceSymptoms service={service} /><ServiceOverview service={service} /><ServiceProcess service={service} /><ServiceFeatures service={service} /><ServiceFAQ service={service} /><RelatedServices service={service} /><ServiceCTA service={service} /><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} /></main>;
}
