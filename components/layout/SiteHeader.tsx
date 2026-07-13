import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const primaryPhone = "03 9870 2722";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/94 backdrop-blur">
      <div className="mx-auto flex min-h-[84px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative block h-10 w-[220px] shrink-0 sm:h-12 sm:w-[340px] lg:w-[410px]"
          aria-label="ASAP Auto Electrics home"
        >
          <Image
            src="/reference/logos/asap-logo-header-blue.png"
            alt="ASAP Auto Electrics"
            fill
            priority
            sizes="(max-width: 639px) 220px, (max-width: 1023px) 340px, 410px"
            className="object-contain object-left"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 text-[15px] font-bold text-slate-600 md:flex lg:gap-10 lg:text-base"
        >
          <Link href="/#services" className="transition hover:text-asap-purple">
            Services
          </Link>
          <Link href="/#areas" className="transition hover:text-asap-purple">
            Areas
          </Link>
          <Link href="/#reviews" className="transition hover:text-asap-purple">
            Reviews
          </Link>
          <Link href="/#about" className="transition hover:text-asap-purple">
            About
          </Link>
          <Link href="/#contact" className="transition hover:text-asap-purple">
            Contact
          </Link>
        </nav>

        <a
          href="tel:0398702722"
          className="inline-flex h-[46px] shrink-0 items-center gap-2 rounded-full bg-asap-purple px-4 text-sm font-black text-white shadow-sm transition hover:bg-asap-cyan hover:text-slate-950 md:px-6"
          aria-label={`Call ASAP Auto Electrics on ${primaryPhone}`}
        >
          <Phone aria-hidden size={18} />
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </header>
  );
}
