import type { ShoppingPlace } from "@/types";

export const shoppingPlaces: ShoppingPlace[] = [
  {
    id: "temple-market-dwarka",
    name: "Dwarka Temple Market",
    city: "Dwarka",
    coordinates: { lat: 22.238, lng: 68.967 },
    items: ["Gomti Chakra", "Rudraksha mala", "Brass idols", "Incense", "Temple souvenirs"],
    bestTime: "After evening darshan (6–8 PM)",
    tips: ["Bargain politely", "Verify Rudraksha authenticity", "Gomti Chakra from Gomti Ghat vendors"],
  },
  {
    id: "somnath-market",
    name: "Somnath Main Market",
    city: "Somnath",
    coordinates: { lat: 20.887, lng: 70.399 },
    items: ["Religious books", "Prasad boxes", "Local handicrafts", "Shell crafts"],
    bestTime: "Morning or evening",
    tips: ["Shop near temple for religious items", "Check packaging for travel"],
  },
  {
    id: "dwarka-city-market",
    name: "Dwarka City Market",
    city: "Dwarka",
    coordinates: { lat: 22.241, lng: 68.973 },
    items: ["Dry fruit sweets", "Bandhani fabric", "Spices", "Local snacks"],
    bestTime: "Afternoon",
    tips: ["Try AmrutRas for sweets before buying bulk"],
  },
  {
    id: "porbandar-souvenirs",
    name: "Porbandar Souvenir Shops",
    city: "Porbandar",
    coordinates: { lat: 21.64, lng: 69.63 },
    items: ["Gandhi memorabilia", "Local crafts", "Photos"],
    bestTime: "During Day 3 stop",
    tips: ["Near Kirti Mandir", "Small keepsakes only — travel light"],
  },
];
