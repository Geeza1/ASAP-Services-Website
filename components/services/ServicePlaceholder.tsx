import Link from "next/link";
import { CalendarCheck, Home } from "lucide-react";
import { SiteFooter } from "../layout/SiteFooter";
import { SiteHeader } from "../layout/SiteHeader";

type ServicePlaceholderProps = {
  title: string;
};

export function ServicePlaceholder({ title }: ServicePlaceholderProps) {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm font-bold text-slate-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition hover:text-asap-purple">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-slate-400">
                /
              </li>
              <li>
                <Link href="/#services" className="transition hover:text-asap-purple">
                  Services
                </Link>
              </li>
              <li aria-hidden className="text-slate-400">
                /
              </li>
              <li className="text-slate-950" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>

          <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-black uppercase text-asap-red">Service page</p>
            <h1 className="mt-3 text-4xl font-black tracking-normal text-slate-950 sm:text-5xl">{title}</h1>
            <p className="reading-text mt-5">This service page is currently being developed.</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-asap-purple px-6 font-black text-asap-purple transition hover:bg-asap-purple hover:text-white"
              >
                <Home aria-hidden size={20} />
                Back to Homepage
              </Link>
              <a
                href="https://calendly.com/asapautoelectrics/auto-electrical-repair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-asap-cyan px-6 font-black text-slate-950 shadow-sm transition hover:bg-asap-purple hover:text-white"
              >
                <CalendarCheck aria-hidden size={20} />
                Book Online
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
