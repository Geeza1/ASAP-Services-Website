const contactEmail = "info@asapauto.com.au";
const phoneDisplay = "03 9870 2722";
const phoneHref = "tel:0398702722";
const workshopAddress = "Unit 3/3 Oban Rd, Ringwood VIC 3134";
const encodedWorkshopAddress = encodeURIComponent(workshopAddress);
const workshopDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedWorkshopAddress}`;
const footerHeadingClass =
  "font-['Myriad_Pro_Condensed','Arial_Narrow',Arial,sans-serif] text-[18px] font-bold not-italic tracking-[0.04em] text-white";

const footerServices = [
  "Auto Electrical Diagnostics",
  "Alternator & Starter Repairs",
  "Electric Window Repairs",
  "Brake Controllers",
  "Anderson Plugs",
  "Trailer Wiring",
  "Battery & Charging",
  "Lighting Repairs",
  "General Auto Electrical Repairs"
];

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-asap-red bg-asap-purple px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className={footerHeadingClass}>ASAP Auto Electrics</h2>
            <p className="reading-text mt-5 text-slate-200">
              Professional auto electrical diagnostics, repairs and installations from our fully equipped Ringwood workshop, proudly servicing Melbourne&apos;s eastern suburbs.
            </p>
          </div>

          <div>
            <h2 className={footerHeadingClass}>Contact</h2>
            <dl className="mt-5 grid gap-5">
              <div>
                <dt className="text-sm font-black uppercase text-white">Phone</dt>
                <dd className="reading-text mt-1 text-slate-200">
                  <a className="transition hover:text-asap-cyan" href={phoneHref}>
                    {phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-black uppercase text-white">Email</dt>
                <dd className="reading-text mt-1 text-slate-200">
                  <a className="transition hover:text-asap-cyan" href={`mailto:${contactEmail}`}>
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
            <dl className="mt-5 grid gap-5">
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
            <ul className="reading-text mt-5 grid gap-2 text-slate-200">
              {footerServices.map((service) => (
                <li key={service}>{service}</li>
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
