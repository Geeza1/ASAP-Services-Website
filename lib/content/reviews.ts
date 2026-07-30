export type GoogleReview = {
  customerName: string;
  rating: 5;
  reviewText: string;
  service?: string;
  date?: string;
  sourceLabel: "Google Review";
};

export const homepageGoogleReviews: GoogleReview[] = [
  {
    customerName: "Mark D.",
    rating: 5,
    reviewText:
      "The ASAP Auto Electrics Team did a get job of installing my new Bluetti Charger 1 on my GWM Tank 300.  Great customer service and support, and reasonably priced!  Very happy to recommend them for any auto electrical work requirements around the Ringwood area.",
    service: "Electrical diagnostics",
    date: "2026",
    sourceLabel: "Google Review"
  },
  {
    customerName: "Teagy W.",
    rating: 5,
    reviewText:
      "Would definitely recommend! Very prompt and considerate with explaining and sharing knowledge on how he installed the front and rear dash cam. Job was done fast and efficiently with few visible wires and ensuring all wires don't impact air bags and driving vision.",
    service: "Auto electrical repair",
    sourceLabel: "Google Review"
  },
  {
    customerName: "Errol F.",
    rating: 5,
    reviewText:
      "Absolutely fantastic customer service, they went above and beyond to help me out and their prices are very competitive... Highly recommend and will be using them again.",
    service: "Workshop service",
    date: "2026",
    sourceLabel: "Google Review"
  }
];
