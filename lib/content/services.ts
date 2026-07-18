export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceContent = {
  slug: string;
  shortTitle: string;
  pageTitle: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  symptomsHeading: string;
  symptoms: string[];
  overviewHeading: string;
  overviewParagraphs: string[];
  processHeading: string;
  processSteps: ServiceProcessStep[];
  featuresHeading: string;
  features: string[];
  vehicles: string[];
  faqs: ServiceFAQ[];
  relatedServiceSlugs: string[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  calendlyUrl: string;
};

export type ServiceRoute = {
  slug: string;
  shortTitle: string;
  homepageCardTitle?: string;
  content?: ServiceContent;
};

const calendlyUrl = "https://calendly.com/asapautoelectrics/auto-electrical-repair";

export const services = [
  {
    slug: "auto-electrical-diagnostics",
    shortTitle: "Auto Electrical Diagnostics",
    homepageCardTitle: "Diagnostics & Fault Finding",
    content: {
      slug: "auto-electrical-diagnostics",
      shortTitle: "Auto Electrical Diagnostics",
      pageTitle: "Auto Electrical Diagnostics in Ringwood",
      seoTitle: "Auto Electrical Diagnostics Ringwood | ASAP Auto Electrics",
      metaDescription:
        "Professional auto electrical diagnostics and fault finding at our Ringwood workshop for warning lights, no-start faults and complex electrical issues.",
      eyebrow: "Auto Electrical Diagnostics",
      heroDescription:
        "Professional fault finding for warning lights, intermittent electrical problems, no-start conditions, charging faults and complex vehicle electrical issues.",
      // TODO: Replace this approved workshop placeholder with a real diagnostics photograph.
      heroImage: "/reference/images/light-workshop-placeholder.png",
      heroImageAlt:
        "ASAP Auto Electrics Ringwood workshop used for vehicle electrical diagnostics and fault finding",
      symptomsHeading: "Is your vehicle showing any of these symptoms?",
      symptoms: [
        "Vehicle will not start",
        "Battery keeps going flat",
        "Battery or charging warning light",
        "Intermittent electrical faults",
        "Warning lights appearing on the dash",
        "Electrical accessories not operating",
        "Blown fuses or wiring faults",
        "Communication or CAN bus faults",
        "Fault returns after parts have already been replaced"
      ],
      overviewHeading: "Find the cause before replacing parts",
      overviewParagraphs: [
        "Electrical symptoms can have several possible causes. A flat battery, warning light or no-start condition does not always mean the most obvious component has failed.",
        "Accurate testing can help avoid unnecessary replacement of batteries, alternators, starter motors, switches, control modules and wiring components. We inspect and test the affected system, then explain what we find and recommend an appropriate repair path.",
        "Diagnosis is performed at our fully equipped Ringwood workshop. The time required depends on the vehicle, the system involved and whether the fault is present or intermittent."
      ],
      processHeading: "Our diagnostic process",
      processSteps: [
        { title: "Discuss the symptoms", description: "We ask when the problem occurs and what you have noticed." },
        { title: "Inspect the vehicle", description: "We check the vehicle and affected electrical system for relevant signs." },
        { title: "Test the affected system", description: "We use suitable diagnostic and electrical tests for the reported issue." },
        { title: "Isolate the fault", description: "We narrow down the circuit, component or condition contributing to the problem." },
        { title: "Explain the findings", description: "We give you a clear summary of the test results." },
        { title: "Recommend the repair", description: "We outline the appropriate next step based on the evidence available." },
        { title: "Repair and confirm operation when approved", description: "With approval, we complete the repair and recheck system operation." }
      ],
      featuresHeading: "Professional workshop fault finding",
      features: [
        "Scan-tool diagnosis",
        "Charging-system testing",
        "Voltage-drop testing",
        "Circuit and wiring checks",
        "Battery and starting-system analysis",
        "Intermittent fault investigation",
        "Accessory and installation fault diagnosis",
        "Clear repair recommendations"
      ],
      vehicles: [
        "Passenger vehicles",
        "4WDs",
        "Light commercial vehicles",
        "Trailers",
        "Caravans",
        "Touring and accessory-equipped vehicles"
      ],
      faqs: [
        { question: "How much does auto electrical diagnosis cost?", answer: "Diagnostic cost depends on the vehicle, the system involved and how long it takes to reproduce and isolate the fault. Contact us with the vehicle details and symptoms so we can explain the likely booking approach. We will not invent a fixed repair price before the fault has been assessed." },
        { question: "How long does diagnosis take?", answer: "Some faults can be identified quickly, while intermittent or complex wiring and communication faults may require more time. We cannot guarantee a turnaround before inspecting the vehicle, but we will explain our findings and next steps as the diagnosis progresses." },
        { question: "Can you diagnose intermittent electrical faults?", answer: "Yes, we investigate intermittent faults. They can take longer to isolate because the problem may need to be present during testing. Details about when it occurs, weather conditions, recent work and any pattern you have noticed can be very helpful." },
        { question: "Do you offer mobile auto electrical service?", answer: "No. ASAP Auto Electrics is workshop-based and does not provide mobile service. Please bring your vehicle to our fully equipped workshop at Unit 3/3 Oban Rd, Ringwood." },
        { question: "Should I replace the battery before booking?", answer: "Not unless it has already been properly tested and confirmed faulty. A battery that keeps going flat may be caused by a charging fault, excessive key-off current draw, wiring issue or another condition. Testing first can help avoid replacing the wrong part." },
        { question: "Can you diagnose warning lights?", answer: "We can assess many warning-light and electrical fault concerns using scan-tool information together with electrical and system testing. Capability depends on the vehicle and the system involved, so provide the make, model, year and warning shown when booking." },
        { question: "What information should I bring to the booking?", answer: "Bring the vehicle details, keys and any relevant previous invoices or diagnostic reports. Tell us exactly what happens, when it started, how often it occurs, any warning messages displayed and whether parts or accessories were recently fitted or replaced." }
      ],
      relatedServiceSlugs: [
        "alternator-repairs",
        "starter-motor-repairs",
        "battery-charging-system",
        "electric-window-repairs",
        "lighting-repairs"
      ],
      primaryCtaLabel: "Book Electrical Diagnosis",
      secondaryCtaLabel: "Call 03 9870 2722",
      calendlyUrl
    }
  },
  { slug: "alternator-repairs", shortTitle: "Alternator Repairs" },
  { slug: "starter-motor-repairs", shortTitle: "Starter Motor Repairs" },
  { slug: "electric-window-repairs", shortTitle: "Electric Window Repairs", homepageCardTitle: "Electric Windows" },
  { slug: "brake-controllers", shortTitle: "Brake Controllers", homepageCardTitle: "Accessories & Towing" },
  { slug: "anderson-plugs", shortTitle: "Anderson Plugs" },
  { slug: "lighting-repairs", shortTitle: "Lighting Repairs" },
  { slug: "battery-charging-system", shortTitle: "Battery & Charging System", homepageCardTitle: "Starting & Charging" },
  { slug: "trailer-wiring", shortTitle: "Trailer Wiring" },
  { slug: "caravan-auto-electrics", shortTitle: "Caravan Auto Electrics" }
] satisfies ServiceRoute[];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceContent(slug: string) {
  return getServiceBySlug(slug)?.content;
}

export function getServicePath(slug: string) {
  return `/services/${slug}`;
}
