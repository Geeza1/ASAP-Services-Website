const contactEmail = "info@asapauto.com.au";
const phoneDisplay = "03 9870 2722";
const phoneHref = "tel:0398702722";
const workshopAddress = "Unit 3/3 Oban Rd, Ringwood VIC 3134";

const footerServices = [
  "Auto Electrical Diagnostics",
  "Alternator & Starter Repairs",
  "Electric Window Repairs",
  "Brake Controllers",
  "Anderson Plugs",
  "Trailer Wiring",
  "Battery & Charging Systems",
  "Lighting Repairs",
  "General Auto Electrical Repairs"
];

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-asap-red bg-asap-purple px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xl font-black text-white">ASAP Auto Electrics</h2>
            <p className="reading-text mt-4 text-slate-200">
              Professional auto electrical diagnostics, repairs and installations from our Ringwood workshop.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-white">Contact</h2>
            <dl className="mt-4 grid gap-3">
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
                <dd className="reading-text mt-1 text-slate-200">{workshopAddress}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-xl font-black text-white">Opening Hours</h2>
            <dl className="mt-4 grid gap-3">
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
            <h2 className="text-xl font-black text-white">Services</h2>
            <ul className="reading-text mt-4 grid gap-2 text-slate-200">
              {footerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6">
          <p className="reading-text text-slate-200">&copy; 2026 ASAP Auto Electrics. All rights reserved.</p>
          <p className="reading-text mt-2 text-slate-300">Professional Auto Electrical Workshop &bull; Ringwood VIC</p>
        </div>
      </div>
    </footer>
  );
}
