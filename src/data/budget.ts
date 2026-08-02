import type { BudgetCategory } from "@/types";

export const defaultBudgetCategories: BudgetCategory[] = [
  {
    id: "flights",
    label: "Flights",
    minInr: 0,
    maxInr: 0,
    minAed: 900,
    maxAed: 1500,
    currency: "AED",
  },
  {
    id: "hotels",
    label: "Hotels (6 Nights)",
    minInr: 18000,
    maxInr: 35000,
    currency: "INR",
  },
  {
    id: "transport",
    label: "Taxi & Local Transport",
    minInr: 10000,
    maxInr: 15000,
    currency: "INR",
  },
  {
    id: "food",
    label: "Food",
    minInr: 4000,
    maxInr: 7000,
    currency: "INR",
  },
  {
    id: "shopping",
    label: "Shopping",
    minInr: 2000,
    maxInr: 5000,
    currency: "INR",
  },
  {
    id: "donations",
    label: "Temple Donations",
    minInr: 0,
    maxInr: 5000,
    currency: "INR",
  },
];
