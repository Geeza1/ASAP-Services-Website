"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useRef, useState } from "react";

const primaryPhone = "03 9870 2722";

const serviceLinks = [
  { label: "Auto Electrical Diagnostics", href: "/services/auto-electrical-diagnostics" },
  { label: "Alternator Repairs", href: "/services/alternator-repairs" },
  { label: "Starter Motor Repairs", href: "/services/starter-motor-repairs" },
  { label: "Electric Window Repairs", href: "/services/electric-window-repairs" },
  { label: "Brake Controller Installation", href: "/services/brake-controllers" },
  { label: "Anderson Plug Installation", href: "/services/anderson-plugs" },
  { label: "Vehicle Lighting Repairs", href: "/services/lighting-repairs" },
  { label: "Battery & Charging Systems", href: "/services/battery-charging-system" },
  { label: "Trailer Wiring", href: "/services/trailer-wiring" }
];

const desktopLinkClass =
  "rounded-sm transition hover:text-asap-purple focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-asap-cyan/35";

export function SiteHeader() {
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const desktopServicesButtonRef = useRef<HTMLButtonElement>(null);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }

  function handleDesktopServicesKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      setDesktopServicesOpen(false);
      desktopServicesButtonRef.current?.focus();
    }
  }

  return (
  <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/94 backdrop-blur">
  <div className="mx-auto flex min-h-[92px] max-w-7xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
    <Link
      href="/"
      className="relative block h-[48px] w-[250px] shrink-0 sm:h-[58px] sm:w-[400px] lg:h-[62px] lg:w-[430px]"
      aria-label="ASAP Auto Electrics home"
    >
      <Image
        src="/reference/logos/asap-logo-header.png"
        alt="ASAP Auto Electrics"
        fill
        priority
        sizes="(max-width: 639px) 250px, (max-width: 1023px) 400px, 430px"
        className="object-contain object-left"
      />
    </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 text-[15px] font-bold text-slate-600 lg:flex lg:gap-10 lg:text-base"
        >
          <Link href="/" className={desktopLinkClass}>
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
            onFocus={() => setDesktopServicesOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setDesktopServicesOpen(false);
            }}
            onKeyDown={handleDesktopServicesKeyDown}
          >
            <button
              ref={desktopServicesButtonRef}
              type="button"
              className={`${desktopLinkClass} inline-flex items-center gap-1.5`}
              aria-expanded={desktopServicesOpen}
              aria-controls="desktop-services-menu"
              onClick={() => setDesktopServicesOpen((open) => !open)}
            >
              Services
              <ChevronDown
                aria-hidden
                size={16}
                className={`transition-transform ${desktopServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {desktopServicesOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-[30px]">
                <ul
                  id="desktop-services-menu"
                  className="rounded-lg border border-slate-200 bg-white p-2 shadow-xl"
                >
                  {serviceLinks.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="block rounded-md px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:text-asap-purple focus-visible:bg-slate-50 focus-visible:text-asap-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-asap-cyan"
                        onClick={() => setDesktopServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link href="/#about" className={desktopLinkClass}>
            About
          </Link>
          <Link href="/#contact" className={desktopLinkClass}>
            Contact
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="inline-flex size-[46px] items-center justify-center rounded-full text-asap-purple transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-asap-cyan/35 lg:hidden"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X aria-hidden size={24} /> : <Menu aria-hidden size={24} />}
          </button>
          <a
            href="tel:0398702722"
            className="inline-flex h-[46px] shrink-0 items-center gap-2 rounded-full bg-asap-purple px-4 text-sm font-black text-white shadow-sm transition hover:bg-asap-cyan hover:text-slate-950 md:px-6"
            aria-label={`Call ASAP Auto Electrics on ${primaryPhone}`}
          >
            <Phone aria-hidden size={18} />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 shadow-lg lg:hidden"
        >
          <div className="mx-auto max-w-7xl">
            <Link
              href="/"
              className="block min-h-12 rounded-md px-3 py-3 font-bold text-slate-700 hover:bg-slate-50 hover:text-asap-purple focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-asap-cyan/35"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <button
              type="button"
              className="flex min-h-12 w-full items-center justify-between rounded-md px-3 py-3 text-left font-bold text-slate-700 hover:bg-slate-50 hover:text-asap-purple focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-asap-cyan/35"
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services-menu"
              onClick={() => setMobileServicesOpen((open) => !open)}
            >
              Services
              <ChevronDown
                aria-hidden
                size={18}
                className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <ul id="mobile-services-menu" className="ml-4 border-l-2 border-slate-100 pl-3">
                {serviceLinks.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="block min-h-12 rounded-md px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-asap-purple focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-asap-cyan/35"
                      onClick={closeMobileMenu}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <Link
              href="/#about"
              className="block min-h-12 rounded-md px-3 py-3 font-bold text-slate-700 hover:bg-slate-50 hover:text-asap-purple focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-asap-cyan/35"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="block min-h-12 rounded-md px-3 py-3 font-bold text-slate-700 hover:bg-slate-50 hover:text-asap-purple focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-asap-cyan/35"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
