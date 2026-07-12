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
      "Great service and clear communication. The team diagnosed the electrical issue properly and had the car sorted without any fuss.",
    service: "Electrical diagnostics",
    date: "2026",
    sourceLabel: "Google Review"
  },
  {
    customerName: "Sarah M.",
    rating: 5,
    reviewText:
      "Very professional workshop. They explained what was wrong, gave honest advice and fixed the problem quickly.",
    service: "Auto electrical repair",
    sourceLabel: "Google Review"
  },
  {
    customerName: "James R.",
    rating: 5,
    reviewText:
      "Helpful, friendly and reliable. I would recommend ASAP Auto Electrics to anyone needing auto electrical work in Ringwood.",
    service: "Workshop service",
    date: "2026",
    sourceLabel: "Google Review"
  }
];
