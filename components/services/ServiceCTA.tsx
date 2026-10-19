import { CalendarCheck, CheckCircle2, MapPin, Phone, ScanLine, ShieldCheck } from "lucide-react";
import { ContactForm } from "../forms/ContactForm";
import type { ServiceContent } from "../../lib/content/services";

const trustItems = [
  { label: "Experienced Auto Electricians", icon: ShieldCheck },
  { label: "Modern Diagnostic Equipment", icon: ScanLine },
  { label: "Honest Diagnosis and Repairs", icon: CheckCircle2 },
  { label: "Ringwood Workshop Serving Eastern Suburbs", icon: MapPin }
];

export function ServiceCTA({ service }: { service: ServiceContent }) {
  const displayedTrustItems = trustItems.map((item) => service.slug === "auto-electrical-diagnostics" && item.label === "Honest Diagnosis Before Repairs" ? { ...item, label: "Professional Electrical Testing" } : item);
  const credentialItem = (service.slug === "car-aircon-regas" || service.slug === "car-air-conditioning")
    ? [{ label: "ARCtick Refrigerant Trading Authorisation No. AU47263", icon: ShieldCheck }, ...displayedTrustItems]
    : displayedTrustItems;
  const isAirconDiagnosisPage = service.slug === "car-air-conditioning";
  const heading = service.ctaHeading ?? "Book an electrical diagnosis";
  const description = service.ctaDescription ?? "Tell us about the vehicle and the symptoms. All diagnosis is completed at our Ringwood workshop; we do not provide mobile service.";
  const formHeading = isAirconDiagnosisPage ? "Tell Us About Your Aircon Problem" : service.slug === "car-aircon-regas" ? "Enquire About Aircon Service" : "Tell us about the fault";
  const formSubmitLabel = isAirconDiagnosisPage || service.slug === "car-aircon-regas" ? "Send Aircon Enquiry" : "Send Diagnosis Enquiry";
  const formIssueLabel = isAirconDiagnosisPage ? "Vehicle Details or A/C Problem" : service.slug === "car-aircon-regas" ? "Vehicle Details or Enquiry" : "Vehicle or Issue";
  const formIssuePlaceholder = isAirconDiagnosisPage ? "Tell us what your air conditioning is doing, including any cooling problems..." : service.slug === "car-aircon-regas" ? "Vehicle make, model, year and any air conditioning concerns..." : "Battery light on, vehicle will not start, alternator problem...";

  return <section id="contact" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl rounded-lg border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10"><div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="text-sm font-black uppercase text-asap-red">Ringwood workshop</p><h2 className="mt-3 text-4xl font-black">{heading}</h2><p className="reading-text mt-5">{description}</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href={service.calendlyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-asap-cyan px-6 font-black"><CalendarCheck size={20} aria-hidden />{service.primaryCtaLabel}</a><a href="tel:0398702722" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-asap-purple px-6 font-black text-white"><Phone size={20} aria-hidden />Call 03 9870 2722</a></div><ul className={`mt-6 grid gap-x-5 gap-y-3 ${service.slug === "car-aircon-regas" || isAirconDiagnosisPage ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0"}`}>{credentialItem.map(({ label, icon: Icon }) => <li key={label} className={`flex min-w-0 items-start gap-2 border-t border-slate-200 pt-3 text-sm font-bold leading-5 text-slate-700 lg:border-l lg:border-t-0 lg:px-3 lg:pt-0 lg:first:border-l-0 lg:first:pl-0 ${((service.slug === "car-aircon-regas" || isAirconDiagnosisPage) && label.startsWith("ARCtick")) ? "sm:col-span-2 lg:col-span-2" : ""}`}><Icon aria-hidden size={18} className="mt-0.5 shrink-0 text-asap-cyan" /><span className="min-w-0 leading-snug">{label}</span></li>)}</ul></div><ContactForm sourcePage={`/services/${service.slug}`} serviceName={service.shortTitle} heading={formHeading} submitLabel={formSubmitLabel} issueLabel={formIssueLabel} issuePlaceholder={formIssuePlaceholder} /></div></div></section>;
}
