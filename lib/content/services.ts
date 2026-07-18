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

type ServiceContentInput = Omit<ServiceContent, "heroImage" | "vehicles" | "primaryCtaLabel" | "secondaryCtaLabel" | "calendlyUrl">;

function createServiceContent(input: ServiceContentInput): ServiceContent {
  return {
    ...input,
    // TODO: Replace the approved workshop placeholder with a real photograph of this specific service.
    heroImage: "/reference/images/light-workshop-placeholder.png",
    vehicles: ["Passenger vehicles", "4WDs", "Light commercial vehicles", "Trailers", "Caravans", "Touring and accessory-equipped vehicles"],
    primaryCtaLabel: "Book Online",
    secondaryCtaLabel: "Call 03 9870 2722",
    calendlyUrl
  };
}

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
  {
    slug: "alternator-repairs",
    shortTitle: "Alternator Repairs",
    content: createServiceContent({
      slug: "alternator-repairs", shortTitle: "Alternator Repairs", pageTitle: "Alternator Repairs in Ringwood",
      seoTitle: "Alternator Repairs & Testing Ringwood | ASAP Auto Electrics",
      metaDescription: "Alternator testing, charging-system diagnosis and repair advice at our Ringwood workshop for battery lights, flat batteries and charging faults.",
      eyebrow: "Alternator Repairs", heroDescription: "Testing and repair for battery warning lights, low charging voltage, flat batteries, noisy alternators and charging-system faults.",
      heroImageAlt: "ASAP Auto Electrics Ringwood workshop for alternator testing and charging-system repairs",
      symptomsHeading: "Signs your alternator or charging system needs testing",
      symptoms: ["Battery warning light is on", "Battery repeatedly goes flat", "Vehicle loses electrical power", "Lights dim or flicker", "Slow cranking after driving", "Burning smell near the alternator", "Belt or bearing noise", "Charging voltage is too high or too low", "Vehicle stalls after the battery loses charge"],
      overviewHeading: "Test the charging system before replacing the alternator",
      overviewParagraphs: ["A battery warning light or flat battery does not automatically mean the alternator needs replacing. Battery condition, drive belts, cables, terminals and control wiring can produce similar symptoms.", "We test the battery and charging system together, checking alternator output and the electrical path between the alternator, battery and vehicle systems. This provides evidence for a suitable repair recommendation.", "All testing is completed at our Ringwood workshop. Repair options depend on the alternator design, parts availability and the condition found during inspection."],
      processHeading: "Our alternator testing process",
      processSteps: [
        { title: "Discuss the symptoms", description: "We review warning lights, starting behaviour and when the battery loses charge." },
        { title: "Test battery condition", description: "We check battery state and condition before judging charging performance." },
        { title: "Test charging voltage", description: "We measure system voltage under relevant operating conditions." },
        { title: "Check output and ripple", description: "We assess alternator output and AC ripple where applicable." },
        { title: "Inspect wiring and voltage drop", description: "We check cables, terminals and losses in the charging circuit." },
        { title: "Identify the likely cause", description: "We distinguish between alternator, battery, belt and wiring concerns." },
        { title: "Explain repair options", description: "We outline appropriate repair or replacement choices for approval." },
        { title: "Retest approved work", description: "After approved work, we confirm charging-system operation." }
      ],
      featuresHeading: "Professional alternator and charging checks",
      features: ["Alternator output testing", "Charging-system diagnosis", "Voltage-drop testing", "Battery condition testing", "Belt and pulley inspection", "Charging wiring checks", "Regulator fault diagnosis", "Replacement or repair advice"],
      faqs: [
        { question: "How do I know if the alternator is faulty?", answer: "Common signs include a battery warning light, low charging voltage, repeated flat batteries, dim lights or loss of electrical power. Testing is needed because battery, belt and wiring faults can create similar symptoms." },
        { question: "Can a bad battery cause alternator symptoms?", answer: "Yes. A weak or internally faulty battery can affect charging readings and starting performance. We assess battery condition as part of charging-system diagnosis." },
        { question: "Can you test the alternator without replacing it?", answer: "Yes. Alternator output, charging voltage, ripple and circuit voltage drop can be checked before replacement is recommended." },
        { question: "Why does the battery light come on?", answer: "The light usually indicates that charging-system operation is outside the vehicle's expected range. The cause may involve the alternator, belt, wiring, battery or system control." },
        { question: "Can I keep driving with an alternator fault?", answer: "Continuing can leave the vehicle without enough electrical power and may cause it to stop. Arrange an inspection promptly and avoid driving if warning lights, overheating smells or power loss occur." },
        { question: "How long does alternator diagnosis take?", answer: "Testing time depends on the vehicle, accessibility and whether the fault is constant or intermittent. We cannot promise a turnaround before inspecting the vehicle." },
        { question: "Do you repair or replace alternators?", answer: "The recommendation depends on alternator type, condition and parts availability. We explain suitable repair or replacement options after testing." }
      ],
      relatedServiceSlugs: ["battery-charging-system", "starter-motor-repairs", "auto-electrical-diagnostics", "lighting-repairs", "trailer-wiring"]
    })
  },
  {
    slug: "starter-motor-repairs",
    shortTitle: "Starter Motor Repairs",
    content: createServiceContent({
      slug: "starter-motor-repairs", shortTitle: "Starter Motor Repairs", pageTitle: "Starter Motor Repairs in Ringwood",
      seoTitle: "Starter Motor Repairs & Testing Ringwood | ASAP Auto Electrics",
      metaDescription: "Starter motor and starting-system diagnosis at our Ringwood workshop for clicking, slow cranking, intermittent starting and no-crank faults.",
      eyebrow: "Starter Motor Repairs", heroDescription: "Diagnosis and repair for clicking, slow cranking, intermittent starting and no-crank faults.",
      heroImageAlt: "ASAP Auto Electrics Ringwood workshop for starter motor and starting-system diagnosis",
      symptomsHeading: "Is your vehicle showing a starting-system fault?",
      symptoms: ["Clicking when the key or start button is used", "Engine does not crank", "Starter operates intermittently", "Slow or laboured cranking", "Starter continues running", "Grinding noise during starting", "Vehicle starts after repeated attempts", "Dash lights operate but engine will not crank", "Hot-start or cold-start problems"],
      overviewHeading: "Confirm whether the fault is the starter, battery or control circuit",
      overviewParagraphs: ["A vehicle that clicks or will not crank may have a starter motor problem, but weak batteries, poor cable connections, relays and control circuits can cause the same complaint.", "We test the battery supply, voltage drop, starter operation and command circuit before recommending parts. Intermittent faults may require additional time or testing while the symptom is present.", "Diagnosis takes place at our Ringwood workshop, and repair options depend on the vehicle, access and the condition confirmed during testing."],
      processHeading: "Our starting-system testing process",
      processSteps: [
        { title: "Discuss starting symptoms", description: "We ask whether the fault changes when the vehicle is hot, cold or repeatedly attempted." },
        { title: "Test battery and voltage", description: "We check the available battery supply and voltage during cranking." },
        { title: "Check starter current and voltage drop", description: "We assess starter demand and losses through main cables." },
        { title: "Test relay and control circuits", description: "We check the relay and electrical command reaching the starter." },
        { title: "Check the start command", description: "We assess relevant ignition or start-button signals where applicable." },
        { title: "Inspect wiring and terminals", description: "We look for loose, damaged or high-resistance connections." },
        { title: "Explain repair options", description: "We recommend repair or replacement based on the results." },
        { title: "Confirm operation", description: "We retest starting operation after approved work." }
      ],
      featuresHeading: "Professional starter motor fault finding",
      features: ["Starter motor testing", "Starting-system diagnosis", "Current draw testing", "Voltage-drop testing", "Relay and control-circuit checks", "Battery cable inspection", "Solenoid fault diagnosis", "Replacement or repair recommendations"],
      faqs: [
        { question: "Why does the starter only click?", answer: "Clicking can result from low battery voltage, poor cable connections, a relay or solenoid issue, or a starter motor fault. Testing identifies which part of the circuit is responsible." },
        { question: "Can a weak battery look like a starter fault?", answer: "Yes. A weak battery may still power dash lights but fail to supply the current needed to crank the engine." },
        { question: "Why does the car start sometimes but not others?", answer: "Intermittent starting can involve worn starter components, relays, switches, wiring, terminals or vehicle control signals. Details about when it happens help guide testing." },
        { question: "Can you test the starter motor before replacing it?", answer: "Yes. We can check supply voltage, voltage drop, current behaviour and the control circuit before recommending replacement." },
        { question: "What causes slow cranking?", answer: "Possible causes include a weak battery, resistance in cables or terminals, excessive starter current, mechanical load or a starter motor fault." },
        { question: "Can I drive with a failing starter motor?", answer: "The vehicle may continue running once started, but it may not restart after being switched off. Arrange testing before the fault leaves you stranded." },
        { question: "Do you repair starter motors or replace them?", answer: "That depends on starter design, condition and parts availability. We explain suitable options after the starting system has been tested." }
      ],
      relatedServiceSlugs: ["battery-charging-system", "alternator-repairs", "auto-electrical-diagnostics", "electric-window-repairs", "lighting-repairs"]
    })
  },
  {
    slug: "electric-window-repairs",
    shortTitle: "Electric Window Repairs",
    homepageCardTitle: "Electric Windows",
    content: createServiceContent({
      slug: "electric-window-repairs", shortTitle: "Electric Window Repairs", pageTitle: "Electric Window Repairs in Ringwood",
      seoTitle: "Electric Window Repairs Ringwood | ASAP Auto Electrics",
      metaDescription: "Electric window diagnosis and repairs at our Ringwood workshop for windows that are stuck, slow, noisy, uneven or not responding.",
      eyebrow: "Electric Window Repairs", heroDescription: "Diagnosis and repair for windows that are slow, stuck, noisy, uneven or not responding to the switch.",
      heroImageAlt: "ASAP Auto Electrics Ringwood workshop for electric window motor, regulator and wiring repairs",
      symptomsHeading: "Common electric window problems",
      symptoms: ["Window will not move", "Window is stuck open or closed", "Window moves slowly", "Clicking or grinding inside the door", "Window drops into the door", "Window moves unevenly", "One switch works but another does not", "Window operates intermittently", "Auto-up or auto-down function is not working"],
      overviewHeading: "Find out whether the fault is the switch, motor, regulator or wiring",
      overviewParagraphs: ["An electric window fault can be electrical, mechanical or a combination of both. Replacing a switch or motor without checking the regulator, guides and door wiring can miss the actual cause.", "We confirm the affected controls, test power and earth, and inspect mechanical movement inside the door where required. This helps identify whether the switch, motor, regulator, wiring or window mechanism needs attention.", "Work is completed at our Ringwood workshop. Access and repair scope depend on the vehicle and door construction."],
      processHeading: "Our electric window repair process",
      processSteps: [
        { title: "Confirm the affected window", description: "We check which controls and directions are affected." },
        { title: "Inspect switch operation", description: "We assess the driver and door switches as applicable." },
        { title: "Test power and earth", description: "We confirm the electrical supply and return path at the circuit." },
        { title: "Inspect regulator and guides", description: "We check mechanical support and movement inside the door." },
        { title: "Test motor operation", description: "We assess motor current and operation where accessible." },
        { title: "Check door-hinge wiring", description: "We inspect flexible wiring where repeated door movement can cause faults." },
        { title: "Explain the repair", description: "We outline the parts or wiring work required for approval." },
        { title: "Test full operation", description: "After approved repair, we check travel and relevant automatic functions." }
      ],
      featuresHeading: "Electric window diagnosis and repair",
      features: ["Window motor testing", "Regulator inspection", "Switch diagnosis", "Wiring checks", "Door-harness fault finding", "Auto-window reset or relearn where applicable", "Mechanical guide inspection", "Clear repair recommendations"],
      faqs: [
        { question: "Why is my electric window stuck?", answer: "The cause may be a failed switch, motor, regulator, damaged wiring or a mechanical jam. Testing and inspection are needed before selecting parts." },
        { question: "Can you repair the regulator without replacing the motor?", answer: "Sometimes the regulator and motor are separate; on other vehicles they are supplied as an assembly. The practical option depends on the design and damage found." },
        { question: "Why does the window move slowly?", answer: "Slow movement can result from binding guides, regulator wear, low voltage, wiring resistance or a tired motor." },
        { question: "Can a window switch cause intermittent operation?", answer: "Yes. Switch contacts can wear, although flexible door wiring, connectors and motor faults can also be intermittent." },
        { question: "Why does the window drop inside the door?", answer: "A damaged regulator, cable, guide or glass attachment can allow the glass to lose support. Avoid operating it until inspected." },
        { question: "Can you repair only one window?", answer: "Yes. We can assess an individual affected window without replacing components in windows that operate correctly." },
        { question: "Do you need to remove the door trim?", answer: "Many motor and regulator checks require careful door-trim removal. We first confirm the symptoms and perform accessible electrical checks." }
      ],
      relatedServiceSlugs: ["auto-electrical-diagnostics", "lighting-repairs", "starter-motor-repairs", "battery-charging-system", "brake-controllers"]
    })
  },
  {
    slug: "brake-controllers", shortTitle: "Brake Controllers", homepageCardTitle: "Accessories & Towing",
    content: createServiceContent({
      slug: "brake-controllers", shortTitle: "Brake Controllers", pageTitle: "Brake Controller Installation in Ringwood",
      seoTitle: "Brake Controller Installation Ringwood | ASAP Auto Electrics",
      metaDescription: "Electric trailer brake controller installation and fault diagnosis at our Ringwood workshop for towing vehicles, caravans and trailers.",
      eyebrow: "Brake Controller Installation", heroDescription: "Professional installation and diagnosis of electric trailer brake controllers for towing vehicles.",
      heroImageAlt: "ASAP Auto Electrics Ringwood workshop for electric trailer brake controller installation",
      symptomsHeading: "Brake controller installation and fault-finding needs",
      symptoms: ["New brake controller required", "Trailer brakes are weak or inconsistent", "Controller displays a fault", "Brakes lock unexpectedly", "No trailer brake output", "Existing installation is untidy or unreliable", "Vehicle requires towing wiring upgrades", "Trailer recognition is intermittent", "Controller needs to suit a new trailer or caravan"],
      overviewHeading: "Install the controller correctly and test the full towing circuit",
      overviewParagraphs: ["A brake controller relies on suitable power, earth, trigger and brake-output circuits as well as a sound connection to the trailer. A controller alone cannot compensate for poor wiring or trailer-side brake faults.", "We consider the towing combination, inspect the vehicle installation and test the relevant circuits. New installations use appropriately protected wiring and practical mounting suited to the vehicle and controller.", "Installation and diagnosis are workshop-based in Ringwood. Vehicle compatibility, controller requirements and trailer condition must be confirmed before outcomes or timing can be known."],
      processHeading: "Our brake controller installation process",
      processSteps: [
        { title: "Discuss towing requirements", description: "We review the trailer or caravan and intended towing use." },
        { title: "Inspect vehicle suitability", description: "We check access, existing towing equipment and relevant vehicle requirements." },
        { title: "Confirm controller type", description: "We confirm a suitable controller and installation approach." },
        { title: "Inspect supply and earth", description: "We check the power source, protection and earth path." },
        { title: "Run protected wiring", description: "We route and secure appropriately protected wiring." },
        { title: "Connect output and trigger", description: "We connect the brake-output and required control circuits." },
        { title: "Test trailer-brake operation", description: "We test controller response and available brake output." },
        { title: "Explain adjustment", description: "We show how controller adjustment and manual operation work." }
      ],
      featuresHeading: "Professional towing brake electrical work",
      features: ["Brake controller installation", "Wiring diagnosis", "Protected power supply", "Trailer socket checks", "Brake-output testing", "Neat mounting", "Setup guidance", "Fault diagnosis for existing systems"],
      faqs: [
        { question: "Which brake controller is best for my vehicle?", answer: "The choice depends on the vehicle, trailer brakes, towing use and compatibility requirements. Contact us with both vehicle and trailer details so we can discuss suitable options." },
        { question: "Do electric trailer brakes need a controller?", answer: "Electric trailer brakes require a compatible means of controlling brake output. Legal and towing requirements depend on the trailer and jurisdiction, so confirm the requirements for your combination." },
        { question: "Can you install a controller I already own?", answer: "Potentially, provided it is suitable, complete and compatible with the vehicle and trailer. We need to inspect the equipment and installation requirements first." },
        { question: "Why does the controller show no trailer?", answer: "Possible causes include plug or socket faults, poor earths, damaged brake-output wiring, trailer brake issues or controller setup. Both sides of the connection may require testing." },
        { question: "Can you diagnose weak trailer brakes?", answer: "We can test vehicle-side controller output and accessible wiring. Trailer mechanical brake condition may require a trailer brake specialist." },
        { question: "How should a brake controller be adjusted?", answer: "Adjustment depends on trailer load, brake condition and controller design. Follow the controller instructions and set it so braking is balanced without locking." },
        { question: "Do you install controllers for caravans and trailers?", answer: "Yes, for suitable towing vehicles and compatible electric-brake systems. Provide the tow vehicle and trailer or caravan details before booking." }
      ],
      relatedServiceSlugs: ["trailer-wiring", "anderson-plugs", "caravan-auto-electrics", "auto-electrical-diagnostics", "battery-charging-system"]
    })
  },
  {
    slug: "anderson-plugs", shortTitle: "Anderson Plugs",
    content: createServiceContent({
      slug: "anderson-plugs", shortTitle: "Anderson Plugs", pageTitle: "Anderson Plug Installation in Ringwood",
      seoTitle: "Anderson Plug Installation Ringwood | ASAP Auto Electrics",
      metaDescription: "Anderson plug installation and wiring diagnosis at our Ringwood workshop for caravans, trailers, charging circuits and high-current accessories.",
      eyebrow: "Anderson Plug Installation", heroDescription: "Professional Anderson plug wiring for caravans, trailers, battery charging and high-current accessories.",
      heroImageAlt: "ASAP Auto Electrics Ringwood workshop for Anderson plug and high-current towing wiring",
      symptomsHeading: "Anderson plug installation and wiring needs",
      symptoms: ["Anderson plug required for a caravan", "Trailer battery is not charging", "Existing plug becomes hot", "Voltage at the trailer is too low", "Wiring is undersized", "Plug is damaged or loose", "Auxiliary battery connection required", "Fridge or accessory circuit needs power", "Existing installation needs inspection"],
      overviewHeading: "Use the correct cable, protection and connection method",
      overviewParagraphs: ["High-current circuits need cable sized for the load and cable length, suitable connection methods, and correctly positioned fuse or circuit-breaker protection. Undersized or poorly terminated wiring can cause voltage loss and heat.", "We confirm what the circuit must power, inspect the vehicle and trailer arrangement, and plan a protected route. Testing at completion checks available voltage and basic operation under relevant conditions.", "All installations are completed at our Ringwood workshop. Charging performance also depends on the vehicle charging strategy, caravan equipment and battery-management system."],
      processHeading: "Our Anderson plug installation process",
      processSteps: [
        { title: "Confirm use and current demand", description: "We identify the intended load, charging purpose and connection arrangement." },
        { title: "Inspect the setup", description: "We check the tow vehicle, trailer connection and existing equipment." },
        { title: "Determine cable size", description: "We select cable based on current, length and acceptable voltage drop." },
        { title: "Plan circuit protection", description: "We determine suitable fuse or circuit-breaker positioning." },
        { title: "Route and secure wiring", description: "We protect the cable from movement, heat and abrasion." },
        { title: "Install connections", description: "We fit the plug and terminate the high-current circuit." },
        { title: "Test voltage and operation", description: "We check polarity, available voltage and circuit operation." },
        { title: "Explain safe use", description: "We outline the circuit purpose and any operating limitations." }
      ],
      featuresHeading: "High-current accessory and towing wiring",
      features: ["High-current cable installation", "Anderson plug fitting", "Fuse and circuit protection", "Voltage-drop testing", "Caravan charging circuits", "Auxiliary battery connections", "Trailer power wiring", "Diagnosis of existing installations"],
      faqs: [
        { question: "What size Anderson plug do I need?", answer: "Plug and cable size depend on the continuous current, cable length and equipment being supplied. Bigger is not automatically better if the rest of the circuit is mismatched." },
        { question: "Can an Anderson plug charge a caravan battery?", answer: "It can form part of a charging circuit, but correct charging also depends on vehicle output, cable size, voltage drop and the caravan's charger or battery-management equipment." },
        { question: "Why is my Anderson plug getting hot?", answer: "Heat can indicate loose or contaminated contacts, poor termination, excessive current or undersized cable. Stop using a hot connection and have it inspected." },
        { question: "Do I need a fuse or circuit breaker?", answer: "High-current positive cables generally require correctly rated protection close to power sources. The exact arrangement depends on the circuit." },
        { question: "Can you install an Anderson plug at the rear of the vehicle?", answer: "Yes, where the vehicle and intended circuit are suitable. We route and protect the cable to a practical rear connection point." },
        { question: "Can you inspect an existing installation?", answer: "Yes. We can inspect accessible cable, protection, terminations, polarity and voltage performance at our workshop." },
        { question: "What causes low voltage at the caravan?", answer: "Common causes include long or undersized cable, poor connections, inadequate earths, charging-system behaviour and load on the circuit." }
      ],
      relatedServiceSlugs: ["brake-controllers", "trailer-wiring", "caravan-auto-electrics", "battery-charging-system", "lighting-repairs"]
    })
  },
  {
    slug: "lighting-repairs", shortTitle: "Lighting Repairs",
    content: createServiceContent({
      slug: "lighting-repairs", shortTitle: "Lighting Repairs", pageTitle: "Vehicle Lighting Repairs in Ringwood",
      seoTitle: "Vehicle Lighting Repairs Ringwood | ASAP Auto Electrics",
      metaDescription: "Vehicle lighting diagnosis and repairs at our Ringwood workshop for headlights, indicators, brake lights, tail lights and driving-light faults.",
      eyebrow: "Vehicle Lighting Repairs", heroDescription: "Diagnosis and repair for headlights, indicators, brake lights, tail lights, driving lights and lighting wiring faults.",
      heroImageAlt: "ASAP Auto Electrics Ringwood workshop for headlight, indicator and vehicle lighting repairs",
      symptomsHeading: "Common vehicle lighting faults",
      symptoms: ["Headlight not working", "Lights flicker or dim", "Indicator flashes too quickly", "Brake lights stay on or do not work", "Tail lights operate incorrectly", "Fuse repeatedly blows", "Water enters a lamp", "Driving lights do not operate", "Warning appears after fitting LED globes"],
      overviewHeading: "Diagnose the circuit instead of repeatedly replacing globes",
      overviewParagraphs: ["A failed globe may be straightforward, but repeated failures, dim lamps or several incorrect lights can point to poor earths, damaged connectors, wiring faults, switches or electronic control issues.", "We confirm the affected functions, inspect the lamps and test power, earth and relevant control circuits. LED conversions and modern monitored lighting systems may also require compatibility checks.", "Diagnosis and repair are completed at our Ringwood workshop. Lamp sealing, module faults and parts availability can affect the appropriate repair path."],
      processHeading: "Our lighting fault-finding process",
      processSteps: [
        { title: "Confirm affected lights", description: "We check which functions fail and under what conditions." },
        { title: "Inspect lamps and globes", description: "We inspect visible condition, fitment, connectors and moisture." },
        { title: "Test power and earth", description: "We measure supply and earth integrity at the affected circuit." },
        { title: "Inspect fuses and relays", description: "We check protection and switching components where applicable." },
        { title: "Check controls", description: "We assess switches and relevant control-module commands." },
        { title: "Inspect wiring and connectors", description: "We trace accessible wiring for damage, heat or corrosion." },
        { title: "Explain the repair", description: "We outline the evidence and recommended work." },
        { title: "Confirm operation", description: "We retest relevant lighting functions after approved work." }
      ],
      featuresHeading: "Vehicle lighting diagnosis and repair",
      features: ["Headlight diagnosis", "Indicator fault finding", "Brake and tail-light repairs", "Relay and fuse testing", "Earth-circuit checks", "Wiring repairs", "Driving-light diagnosis", "LED compatibility checks where applicable"],
      faqs: [
        { question: "Why does a light keep blowing globes?", answer: "Repeated failures can involve vibration, moisture, poor connections, incorrect globes or abnormal system voltage. The lamp and circuit should be inspected." },
        { question: "Why do my indicators flash quickly?", answer: "Fast flashing commonly indicates the vehicle detects an incorrect indicator load, often from a failed globe, wiring fault or incompatible LED conversion." },
        { question: "Can a bad earth cause multiple lighting faults?", answer: "Yes. A poor shared earth can make several lights dim, back-feed or operate together incorrectly." },
        { question: "Why do LED globes cause warning lights?", answer: "Some vehicles monitor globe current. An LED may draw differently from the expected globe and trigger warnings or irregular operation." },
        { question: "Can you repair trailer-lighting faults?", answer: "Yes. We can test vehicle sockets and accessible trailer lighting wiring. Bring both vehicle and trailer where possible." },
        { question: "Why are my headlights dim?", answer: "Possible causes include aged lamps, voltage drop, poor earths, damaged reflectors, charging voltage or lens condition." },
        { question: "Can you diagnose intermittent lighting faults?", answer: "Yes, although faults that are not present during inspection may require additional time. Note when vibration, weather or other controls affect the symptom." }
      ],
      relatedServiceSlugs: ["auto-electrical-diagnostics", "trailer-wiring", "battery-charging-system", "alternator-repairs", "anderson-plugs"]
    })
  },
  {
    slug: "battery-charging-system", shortTitle: "Battery & Charging System", homepageCardTitle: "Starting & Charging",
    content: createServiceContent({
      slug: "battery-charging-system", shortTitle: "Battery & Charging System", pageTitle: "Battery and Charging System Testing in Ringwood",
      seoTitle: "Battery & Charging System Testing Ringwood | ASAP Auto Electrics",
      metaDescription: "Battery, starting and charging-system testing at our Ringwood workshop for flat batteries, slow cranking, warning lights and repeated battery failure.",
      eyebrow: "Battery & Charging System", heroDescription: "Testing for flat batteries, slow cranking, battery warning lights, charging faults and repeated battery failure.",
      heroImageAlt: "ASAP Auto Electrics Ringwood workshop for battery and charging-system testing",
      symptomsHeading: "Does your battery or charging system show these signs?",
      symptoms: ["Battery repeatedly goes flat", "Slow starting", "Battery warning light", "Vehicle needs frequent jump starts", "New battery also goes flat", "Electrical systems reset", "Charging voltage is incorrect", "Battery drains while parked", "Vehicle loses power while driving"],
      overviewHeading: "Test the complete system before fitting another battery",
      overviewParagraphs: ["A flat battery may be discharged, worn out or affected by a separate starting, charging or key-off drain problem. Installing another battery without identifying the cause can lead to the same failure returning.", "We assess battery condition, starting voltage, alternator output, terminals and cables. Where symptoms indicate a drain while parked, parasitic-current investigation may be recommended and can require additional diagnostic time.", "Testing is completed at our Ringwood workshop. Battery life and charging behaviour vary with vehicle use, battery type, electrical load and charging strategy."],
      processHeading: "Our battery and charging test process",
      processSteps: [
        { title: "Discuss history and symptoms", description: "We review battery age, driving pattern, jump starts and when the fault occurs." },
        { title: "Test battery condition", description: "We assess state of charge and available battery performance." },
        { title: "Test starting voltage", description: "We check supply behaviour while the engine cranks." },
        { title: "Test alternator output", description: "We assess charging voltage and output under relevant conditions." },
        { title: "Check parasitic current", description: "Where required, we investigate excessive current while the vehicle is parked." },
        { title: "Inspect terminals and cables", description: "We check connections for looseness, corrosion and voltage drop." },
        { title: "Explain cause and options", description: "We explain the findings and suitable next steps." },
        { title: "Retest approved repair", description: "We confirm system operation after approved work." }
      ],
      featuresHeading: "Complete battery and charging checks",
      features: ["Battery condition testing", "Charging-system testing", "Starting-system checks", "Parasitic drain investigation", "Voltage-drop testing", "Terminal and cable inspection", "Alternator output testing", "Battery replacement advice"],
      faqs: [
        { question: "Why does my battery keep going flat?", answer: "Possible causes include an aged battery, charging fault, excessive current draw while parked, poor connections or driving patterns that do not replenish charge." },
        { question: "Can a new battery still go flat?", answer: "Yes. A new battery can discharge if the charging system is faulty, a circuit remains active while parked or the vehicle is not driven enough to restore charge." },
        { question: "How do you test for a parasitic drain?", answer: "We measure key-off current after the vehicle systems have settled, then isolate circuits where practical. Modern vehicles may require time and staged testing." },
        { question: "Does a battery warning light always mean the battery is faulty?", answer: "No. It more commonly indicates a charging-system concern involving alternator output, belt drive, wiring or system control." },
        { question: "Can short trips flatten a battery?", answer: "Frequent short trips may use more energy for starting than the charging system restores, particularly with high accessory use or a battery already below full charge." },
        { question: "How long should a car battery last?", answer: "Battery life varies with type, heat, vehicle use, charging conditions and electrical load. Condition testing is more useful than relying on age alone." },
        { question: "Should I replace the battery before testing the alternator?", answer: "Testing the battery and charging system together is preferable unless the battery has already been conclusively assessed as unsafe or failed." }
      ],
      relatedServiceSlugs: ["alternator-repairs", "starter-motor-repairs", "auto-electrical-diagnostics", "lighting-repairs", "caravan-auto-electrics"]
    })
  },
  {
    slug: "trailer-wiring", shortTitle: "Trailer Wiring",
    content: createServiceContent({
      slug: "trailer-wiring", shortTitle: "Trailer Wiring", pageTitle: "Trailer Wiring Repairs and Installation in Ringwood",
      seoTitle: "Trailer Wiring Repairs & Installation Ringwood | ASAP Auto Electrics",
      metaDescription: "Trailer plug, towing wiring, lighting and electric-brake circuit installation and repairs at our Ringwood auto electrical workshop.",
      eyebrow: "Trailer Wiring", heroDescription: "Diagnosis, repair and installation of trailer plugs, towing wiring, lighting circuits and electric-brake wiring.",
      heroImageAlt: "ASAP Auto Electrics Ringwood workshop for trailer plug and towing wiring repairs",
      symptomsHeading: "Trailer wiring problems and installation needs",
      symptoms: ["Trailer lights not working", "Indicators operate incorrectly", "Brake lights fail when trailer is connected", "Trailer plug is damaged", "Wiring has corrosion or poor connections", "New towbar requires wiring", "Electric-brake circuit needs repair", "Trailer intermittently disconnects", "Vehicle shows bulb or trailer warnings"],
      overviewHeading: "Test both the vehicle and trailer connection",
      overviewParagraphs: ["Trailer lighting and brake faults can originate in the tow vehicle, plug, socket, trailer wiring or earth circuit. Testing only one side can leave the actual problem unresolved.", "We inspect accessible plugs and sockets, test vehicle outputs and check relevant trailer circuits when both are supplied. Modern vehicles may also use towing modules or monitored lighting that requires a compatible installation.", "Work is carried out at our Ringwood workshop. Bring the vehicle and trailer together where practical so the complete connection can be tested."],
      processHeading: "Our trailer wiring process",
      processSteps: [
        { title: "Discuss the setup", description: "We confirm the vehicle, trailer, connector and reported symptoms." },
        { title: "Inspect plugs and sockets", description: "We check accessible pins, housings and terminations for damage or corrosion." },
        { title: "Test vehicle outputs", description: "We verify lighting and relevant brake signals at the vehicle connection." },
        { title: "Inspect earth circuits", description: "We test the return path that is shared by trailer functions." },
        { title: "Check trailer wiring", description: "With the trailer present, we inspect accessible wiring and outputs." },
        { title: "Repair connections", description: "We repair approved damaged wiring, plugs or sockets." },
        { title: "Test lighting and brakes", description: "We confirm available lighting and electric-brake circuits." },
        { title: "Explain remaining faults", description: "We identify any trailer-side work outside the agreed scope." }
      ],
      featuresHeading: "Trailer plug and towing circuit services",
      features: ["Trailer plug installation", "Socket repairs", "Lighting-circuit diagnosis", "Earth repairs", "Brake-output wiring", "Towing-module checks", "Corrosion repairs", "Wiring upgrades"],
      faqs: [
        { question: "Why do trailer lights stop working?", answer: "Common causes include poor earths, corroded pins, damaged cables, failed lamps, vehicle socket faults or incorrect wiring." },
        { question: "Can a poor earth cause several trailer-light faults?", answer: "Yes. A shared earth fault can cause dim lights, back-feeding and several functions operating incorrectly together." },
        { question: "Which trailer plug should I use?", answer: "The connector depends on required circuits, trailer type and existing equipment. We can discuss a suitable common format after reviewing the setup." },
        { question: "Can you wire a new towbar?", answer: "We can provide suitable vehicle-side towing wiring where vehicle requirements, towbar setup and compatible parts allow. Contact us with vehicle details first." },
        { question: "Why does the vehicle show a trailer fault?", answer: "The vehicle may detect an unexpected electrical load, open circuit, short circuit or towing-module issue. Trailer and vehicle wiring may both need testing." },
        { question: "Do you repair electric-brake wiring?", answer: "Yes, we diagnose and repair accessible vehicle-side brake-output wiring and connections. Trailer mechanical brake faults may need a specialist." },
        { question: "Can you test both the car and trailer?", answer: "Yes, when both are brought to the Ringwood workshop and the relevant circuits are accessible." }
      ],
      relatedServiceSlugs: ["brake-controllers", "anderson-plugs", "caravan-auto-electrics", "lighting-repairs", "auto-electrical-diagnostics"]
    })
  },
  {
    slug: "caravan-auto-electrics", shortTitle: "Caravan Auto Electrics",
    content: createServiceContent({
      slug: "caravan-auto-electrics", shortTitle: "Caravan Auto Electrics", pageTitle: "Caravan Auto Electrics in Ringwood",
      seoTitle: "Caravan Auto Electrics Ringwood | ASAP Auto Electrics",
      metaDescription: "Vehicle-side and accessible caravan electrical work at our Ringwood workshop, including charging circuits, Anderson plugs and towing wiring.",
      eyebrow: "Caravan Auto Electrics", heroDescription: "Vehicle-side and accessible caravan electrical diagnosis, towing wiring, charging circuits, Anderson plugs and brake-controller systems.",
      heroImageAlt: "ASAP Auto Electrics Ringwood workshop for accessible caravan and tow-vehicle electrical work",
      symptomsHeading: "Caravan and tow-vehicle electrical needs",
      symptoms: ["Caravan battery is not charging while driving", "Anderson plug has no power", "Fridge circuit is not operating", "Electric brakes are inconsistent", "Trailer lights are faulty", "Charging voltage is low", "Existing wiring needs inspection", "Tow vehicle needs upgrades", "Caravan connection is intermittent"],
      overviewHeading: "Check the towing vehicle, connection and charging circuit",
      overviewParagraphs: ["A caravan charging or connection fault can involve the tow vehicle, cable sizing, plugs, voltage drop, brake controller, trailer wiring or caravan battery-management equipment. The complete arrangement needs to be understood before parts are recommended.", "We work on vehicle-side and accessible caravan electrical systems at our Ringwood workshop. Capability depends on the caravan system, physical access and type of repair, so contact us before booking substantial caravan work.", "Where work involves internal 240-volt systems, appliances, inaccessible caravan construction or specialist equipment, we may recommend an appropriately qualified caravan specialist."],
      processHeading: "Our caravan electrical assessment process",
      processSteps: [
        { title: "Discuss the complete setup", description: "We review the caravan, tow vehicle, batteries, charging equipment and symptoms." },
        { title: "Confirm accessible systems", description: "We establish which vehicle and caravan circuits are within workshop scope." },
        { title: "Inspect vehicle-side wiring", description: "We check accessible supply, protection, cable and earth arrangements." },
        { title: "Inspect plugs and sockets", description: "We assess towing connectors for damage, heat and poor contacts." },
        { title: "Test charging voltage", description: "We measure available voltage through the relevant connection." },
        { title: "Test brake and lighting circuits", description: "We check controller output and towing-light functions where applicable." },
        { title: "Explain repair scope", description: "We separate accessible workshop work from specialist caravan work." },
        { title: "Complete and retest approved work", description: "We perform approved accessible repairs and confirm operation." }
      ],
      featuresHeading: "Tow-vehicle and accessible caravan electrical work",
      features: ["Anderson plug diagnosis", "Vehicle charging circuits", "Brake-controller systems", "Trailer plug and lighting repairs", "Voltage-drop testing", "Auxiliary power circuits", "Towing wiring inspection", "Advice on further specialist caravan work where required"],
      faqs: [
        { question: "Do you work on all caravan electrical systems?", answer: "No. We handle vehicle-side and accessible caravan auto electrical circuits. Capability depends on the system, access and repair type; contact us before substantial caravan work." },
        { question: "Can you diagnose why the caravan battery is not charging?", answer: "We can test accessible vehicle supply, plugs, cable voltage drop and relevant charging connections. Internal charger or battery-management faults may require a caravan specialist." },
        { question: "Can you repair Anderson plug wiring?", answer: "Yes, we can inspect and repair suitable accessible Anderson plug circuits, cable protection and connections." },
        { question: "Do you install brake controllers for caravans?", answer: "Yes, for suitable tow vehicles and compatible electric-brake systems. Vehicle and caravan details are needed before booking." },
        { question: "Can you repair caravan lighting connections?", answer: "We can diagnose and repair accessible towing plugs, sockets and lighting connections. Internal or inaccessible caravan wiring may be outside scope." },
        { question: "Should I bring both the caravan and tow vehicle?", answer: "Usually yes. Having both allows the connection and interaction between the two to be tested. Confirm access and workshop arrangements with us first." },
        { question: "When should I use a caravan specialist instead?", answer: "Use an appropriately qualified specialist for internal 240-volt work, appliances, structural access or caravan systems outside automotive electrical scope. We will explain when referral is appropriate." }
      ],
      relatedServiceSlugs: ["anderson-plugs", "brake-controllers", "trailer-wiring", "battery-charging-system", "auto-electrical-diagnostics"]
    })
  }
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
