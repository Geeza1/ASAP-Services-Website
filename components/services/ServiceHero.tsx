import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, CheckCircle2, Phone } from "lucide-react";
import type { ServiceContent } from "../../lib/content/services";

export function ServiceHero({ service }: { service: ServiceContent }) {
  return <section className="relative overflow-hidden bg-slate-50">
    <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#ED2E38,#00A6D6,#2905A1)]" />
    <div className="mx-auto max-w-7xl px-4 pb-12 pt-7 sm:px-6 lg:px-8 lg:pb-16 lg:pt-8">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm font-bold text-slate-600"><ol className="flex flex-wrap gap-2"><li><Link href="/">Home</Link></li><li aria-hidden>/</li><li><Link href="/#services">Services</Link></li><li aria-hidden>/</li><li aria-current="page" className="text-slate-950">{service.shortTitle}</li></ol></nav>
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div><p className="text-sm font-black uppercase tracking-wide text-asap-red">{service.eyebrow}</p><h1 className="mt-3 font-display text-5xl font-black leading-[0.98] text-slate-950 sm:text-6xl">{service.pageTitle}</h1><p className="reading-text mt-5 max-w-2xl">{service.heroDescription}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href={service.calendlyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-asap-cyan px-6 font-black text-slate-950 transition hover:bg-asap-purple hover:text-white"><CalendarCheck size={20} aria-hidden />{service.primaryCtaLabel}</a><a href="tel:0398702722" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-asap-purple px-6 font-black text-asap-purple transition hover:bg-asap-purple hover:text-white"><Phone size={20} aria-hidden />{service.secondaryCtaLabel}</a></div>
          <p className="mt-6 flex gap-2 text-sm font-bold leading-6 text-asap-purple"><CheckCircle2 className="mt-0.5 shrink-0 text-asap-cyan" size={18} aria-hidden />Workshop-based diagnosis in Ringwood for customers across Melbourne&apos;s eastern and outer-eastern suburbs.</p>
        </div>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl"><Image src={service.heroImage} alt={service.heroImageAlt} width={1200} height={760} priority className="aspect-[4/3] w-full object-cover" /></div>
      </div>
    </div>
  </section>;
}
