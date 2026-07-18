import Image from "next/image";
import Link from "next/link";
import { footerServiceLinks, getServicePath } from "../../lib/content/serviceRoutes";

const contactEmail = "info@asapauto.com.au";
const phoneDisplay = "03 9870 2722";
const phoneHref = "tel:0398702722";
const workshopAddress = "Unit 3/3 Oban Rd, Ringwood VIC 3134";
const encodedWorkshopAddress = encodeURIComponent(workshopAddress);
const workshopDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedWorkshopAddress}`;
const footerHeadingClass =
  "font-sans text-[18px] font-bold not-italic tracking-[0.04em] text-white";

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-asap-red bg-asap-purple px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="max-w-[300px] rounded-md bg-white px-3 py-2">
              <Image
                src="/reference/logos/asap-logo-header-blue.png"
                alt="ASAP Auto Electrics"
                width={2048}
                height={187}
                sizes="(max-width: 639px) 280px, 300px"
                className="h-auto w-full"
              />
            </div>
            <h2 className={`${footerHeadingClass} mt-6`}>ASAP Auto Electrics</h2>
            <p className="reading-text mt-6 text-slate-200">
              Professional auto electrical diagnostics, repairs and installations from our fully equipped Ringwood workshop, proudly servicing Melbourne&apos;s eastern suburbs.
            </p>
          </div>

          <div>
            <h2 className={footerHeadingClass}>Contact</h2>
            <dl className="mt-6 grid gap-5">
              <div>
                <dt className="text-sm font-black uppercase text-white">Phone</dt>
                <dd className="reading-text mt-1 text-slate-200">
                  <a className="text-[17px] font-semibold text-white transition hover:text-asap-cyan" href={phoneHref}>
                    {phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-black uppercase text-white">Email</dt>
                <dd className="reading-text mt-1 text-slate-200">
                  <a className="text-[17px] font-semibold text-white transition hover:text-asap-cyan" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-black uppercase text-white">Workshop address</dt>
                <dd className="reading-text mt-1 text-slate-200">
                  <a
                    className="transition hover:text-asap-cyan"
                    href={workshopDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {workshopAddress}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className={footerHeadingClass}>Opening Hours</h2>
            <dl className="mt-6 grid gap-5">
              <div>
                <dt className="text-sm font-black uppercase text-white">Monday&ndash;Friday</dt>
                <dd className="reading-text mt-1 text-slate-200">8:00am&ndash;5:00pm</dd>
              </div>
              <div>
                <dt className="text-sm font-black uppercase text-white">Saturday</dt>
                <dd className="reading-text mt-1 text-slate-200">Closed</dd>
              </div>
              <div>
                <dt className="text-sm font-black uppercase text-white">Sunday</dt>
                <dd className="reading-text mt-1 text-slate-200">Closed</dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className={footerHeadingClass}>Services</h2>
            <ul className="reading-text mt-6 grid gap-2 text-slate-200">
              {footerServiceLinks.map((service) => (
                <li key={service.title}>
                  <Link
                    href={getServicePath(service.slug)}
                    className="transition hover:text-asap-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-asap-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-asap-purple"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/20 pt-6">
          <p className="text-[13px] leading-5 text-white/80">&copy; 2026 ASAP Auto Electrics. All rights reserved.</p>
          <p className="mt-2 text-[13px] leading-5 text-white/75">Professional Auto Electrical Workshop &bull; Ringwood VIC</p>
        </div>
      </div>
    </footer>
  );
}
