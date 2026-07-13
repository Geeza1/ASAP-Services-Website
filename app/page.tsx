import Image from "next/image";
import {
  BatteryCharging,
  CalendarCheck,
  Car,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
  Zap
} from "lucide-react";
import { GoogleReviews } from "../components/home/GoogleReviews";
import { ContactForm } from "../components/forms/ContactForm";
import { SiteFooter } from "../components/layout/SiteFooter";

const primaryPhone = "03 9870 2722";

const problemList = [
  "Battery Light On",
  "Vehicle won't start",
  "Starter motor faults",
  "Alternator problems",
  "Electric windows repairs",
  "Brake controllers fitted",
  "Trailer wiring",
  "Anderson plugs",
  "Lightbars",
  "Driving lights",
  "Electrical diagnosed properly",
  "Car air conditioning repairs"
];

const services = [
  {
    title: "Diagnostics & Fault Finding",
    description:
      "Electrical issues diagnosed properly before repairs begin, from warning lights through to intermittent no-start faults.",
    icon: Zap
  },
  {
    title: "Starting & Charging",
    description:
      "Battery light, alternator, starter motor and charging system faults tested and repaired in our Ringwood workshop.",
    icon: BatteryCharging
  },
  {
    title: "Accessories & Towing",
    description:
      "Brake controllers, trailer wiring, Anderson plugs, lightbars and driving lights fitted correctly and safely.",
    icon: Wrench
  },
  {
    title: "Electric Windows",
    description:
      "Electric window faults, window switches, window regulators and window motors repairs handled by experienced auto electrical technicians.",
    icon: Zap
  }
];
const workshopAddress = "Unit 3/3 Oban Rd, Ringwood VIC 3134";
const encodedWorkshopAddress = encodeURIComponent(workshopAddress);

const workshopMapUrl =
  `https://www.google.com/maps?q=${encodedWorkshopAddress}&output=embed`;

const workshopDirectionsUrl =
  `https://www.google.com/maps/dir/?api=1&destination=${encodedWorkshopAddress}`;

const suburbs = [
  "Ringwood",
  "Croydon",
  "Bayswater",
  "Donvale",
  "Warrandyte",
  "Mooroolbark",
  "Lilydale",
  "Mitcham",
  "Kilsyth"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/94 backdrop-blur">
  <div className="mx-auto flex min-h-[84px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
    <a
      href="#"
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
    </a>

    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-9 text-[15px] font-bold text-slate-600 md:flex lg:gap-10 lg:text-base"
    >
      <a href="#services" className="transition hover:text-asap-purple">
        Services
      </a>
      <a href="#areas" className="transition hover:text-asap-purple">
        Areas
      </a>
      <a href="#reviews" className="transition hover:text-asap-purple">
        Reviews
      </a>
      <a href="#about" className="transition hover:text-asap-purple">
        About
      </a>
      <a href="#contact" className="transition hover:text-asap-purple">
        Contact
      </a>
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

      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#ED2E38,#00A6D6,#2905A1)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:min-h-[78vh] lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-asap-cyan/35 bg-white px-4 py-2 text-sm font-black text-asap-purple shadow-sm">
              <CheckCircle2 aria-hidden size={16} className="text-asap-cyan" />
              Ringwood auto electrical workshop
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-black leading-[0.96] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
              Auto Electric Problems?
              <span className="block text-asap-purple">Get the Fault Diagnosed Properly</span>
            </h1>
            <p className="reading-text mt-6 max-w-2xl">
              Professional auto electrical diagnostics, repairs and installations from ASAP Auto Electrics in Ringwood, servicing Melbourne&apos;s Eastern Suburbs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-asap-cyan px-6 font-black text-slate-950 shadow-sm transition hover:bg-asap-purple hover:text-white">
                <CalendarCheck aria-hidden size={20} />
                Book Electrical Diagnosis
              </a>
              <a href="tel:0398702722" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-asap-purple px-6 font-black text-asap-purple transition hover:bg-asap-purple hover:text-white">
                <Phone aria-hidden size={20} />
                {primaryPhone}
              </a>
            </div>
            <div className="mt-9 grid gap-2 sm:grid-cols-2">
              {problemList.map((problem) => (
                <div key={problem} className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200">
                  <CheckCircle2 aria-hidden size={17} className="shrink-0 text-asap-cyan" />
                  {problem}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-asap-cyan/18" />
            <div className="absolute -bottom-4 -left-4 h-36 w-36 rounded-full bg-asap-purple/10" />
            <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl">
              <Image
                src="/reference/images/light-workshop-placeholder.png"
                alt="Placeholder workshop image for ASAP Auto Electrics diagnostics and repairs"
                width={1200}
                height={760}
                priority
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="grid gap-3 p-5 sm:grid-cols-3">
                {[
                  ["Ringwood", "Workshop Based"],
                  ["Established", "Local Business"],
                  ["Guaranteed", "Professional Diagnosis"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-md border border-slate-200 bg-slate-50 p-4">
                    <p className="text-2xl font-black text-asap-purple">{label}</p>
                    <p className="mt-1 text-sm font-bold text-slate-600">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-asap-red">Services</p>
              <h2 className="mt-3 text-4xl font-black tracking-normal text-slate-950">Auto electrical service that starts with proper diagnosis</h2>
            </div>
            <p className="reading-text">
              Whether the car will not start, a warning light is on, or accessories need fitting, the goal is simple: find the fault properly and give you a clear repair path.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-asap-cyan/12 text-asap-purple">
                    <Icon aria-hidden size={26} />
                  </div>
                  <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                  <p className="reading-text mt-3">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

     <section
  id="areas"
  className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-14"
>
  <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:p-8">
    <div className="flex h-full flex-col">
      <div>
        <MapPin aria-hidden className="text-asap-red" size={32} />

        <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-normal text-slate-950">
          Ringwood Workshop Serving Melbourne&apos;s Eastern Suburbs
        </h2>

        <p className="reading-text mt-4 max-w-2xl">
          Our fully equipped workshop is located in Ringwood. Customers bring
          their vehicles to us from across Melbourne&apos;s eastern and
          outer-eastern suburbs for professional auto electrical diagnosis,
          repairs and installations.
        </p>

        <p className="mt-4 text-[15px] font-semibold leading-6 text-asap-purple">
          Workshop service only — customers bring their vehicles to our
          Ringwood workshop.
        </p>
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {suburbs.map((suburb) => (
            <a
              key={suburb}
              href="#contact"
              className="inline-flex min-h-9 items-center rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-800 transition hover:border-asap-cyan hover:bg-asap-cyan/10 sm:text-sm"
            >
              {suburb}
            </a>
          ))}
        </div>

        <p className="mt-4 text-sm font-semibold leading-6 text-slate-600">
          We also serve customers from surrounding eastern and outer-eastern
          Melbourne suburbs.
        </p>
      </div>
    </div>

    <div className="flex h-full flex-col">
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
        <iframe
          src={workshopMapUrl}
          title="Google Map showing the ASAP Auto Electrics Ringwood workshop location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[260px] w-full border-0 sm:h-[290px] lg:h-[310px]"
          allowFullScreen
        />
      </div>

      <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm font-semibold leading-6 text-slate-700">
          Bring your vehicle to our Ringwood workshop at {workshopAddress}.
        </p>

        <a
          href={workshopDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-asap-purple px-5 text-sm font-bold text-white transition hover:bg-asap-cyan hover:text-slate-950"
        >
          <MapPin aria-hidden size={18} />
          Get Directions to Our Ringwood Workshop
        </a>
      </div>
    </div>
  </div>
</section>
      <GoogleReviews />

      <section id="about" className="bg-asap-purple px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            [ShieldCheck, "Experienced diagnosis", "We focus on finding the real electrical fault, not guessing and replacing parts."],
            [Wrench, "Workshop equipped", "This workshop is equipped with the latest tools and equipment for auto electrical faults." ],
            [Car,  "Service focused","Customers bring vehicles to our Ringwood workshop for accessory fitting. and repair."]
          ].map(([Icon, title, copy]) => {
            const TypedIcon = Icon as typeof ShieldCheck;
            return (
              <div key={title as string} className="rounded-lg border border-white/20 bg-white/10 p-6">
                <TypedIcon aria-hidden size={30} className="text-asap-cyan" />
                <h3 className="mt-4 text-xl font-black">{title as string}</h3>
                <p className="reading-text mt-3 text-white/80">{copy as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase text-asap-red">Contact</p>
            <h2 className="mt-3 text-4xl font-black text-slate-950">Book an auto electrical diagnosis</h2>
            <p className="reading-text mt-5">
              Tell us what is happening with the vehicle and we will guide you toward the right workshop booking.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="tel:0398702722" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-asap-purple px-6 font-black text-white">
                <Phone aria-hidden size={20} />
                Call {primaryPhone}
              </a>
              <a
                href="https://calendly.com/asapautoelectrics/auto-electrical-repair"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book an auto electrical repair with ASAP Auto Electrics"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-asap-purple px-6 font-black text-asap-purple"
              >
                <CalendarCheck aria-hidden size={20} />
                Book Online
              </a>
            </div>
          </div>
          <ContactForm sourcePage="Homepage contact section" serviceName="Auto electrical enquiry" />
        </div>
      </section>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-slate-200 bg-white/96 p-3 shadow-[0_-8px_28px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
        <a href="tel:0398702722" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-asap-purple font-black text-white">
          <Phone aria-hidden size={18} />
          Call Now
        </a>
        <a href="#contact" className="ml-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-asap-cyan font-black text-slate-950">
          <CalendarCheck aria-hidden size={18} />
          Book
        </a>
      </div>
    </main>
  );
}
