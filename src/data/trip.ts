import type { TripInfo } from "@/types";

export const tripInfo: TripInfo = {
  title: "Somnath & Dwarka",
  subtitle: "7 Days / 6 Nights · Spiritual & Leisure",
  origin: "Dubai",
  defaultStartDate: "2026-09-15",
  route: "Dubai → Ahmedabad → Somnath → Dwarka → Jamnagar/Porbandar → Dubai",
  duration: "7 Days / 6 Nights",
  flights: [
    {
      leg: "Outbound",
      details: "Dubai → Ahmedabad (Morning flight, ~4.5 hrs). Emirates, Air India, IndiGo, Air India Express. Book 2–3 months early.",
    },
    {
      leg: "Return",
      details: "Jamnagar or Porbandar → Mumbai/Ahmedabad → Dubai. Jamnagar Airport ~110 km from Dwarka; Porbandar ~95 km.",
    },
  ],
  transport: [
    {
      route: "Ahmedabad → Somnath",
      duration: "7–8 hours by private cab",
      cost: "₹7,000–9,000",
    },
    {
      route: "Somnath → Dwarka",
      duration: "~5 hours via NH51 (235 km)",
      cost: "₹4,000–6,000",
    },
    {
      route: "Dwarka → Jamnagar Airport",
      duration: "~2 hours (110 km)",
      cost: "₹2,500–3,500",
    },
    {
      route: "Bet Dwarka Ferry (Okha Jetty)",
      duration: "15–20 min each way",
      cost: "₹20–50 per person",
    },
  ],
};

export const hotels = {
  somnath: {
    luxury: ["The Fern Residency", "Lords Inn Somnath"],
    midRange: ["Hotel Somnath Sagar", "Hotel Ambar"],
    budget: ["Hotel Sun Plaza"],
  },
  dwarka: {
    luxury: ["Hawthorn Suites by Wyndham Dwarka", "Lemon Tree Premier"],
    midRange: ["Hotel Roma Kristo", "Hotel Guruprerna"],
    budget: ["Hotel Shree Darshan"],
  },
};
