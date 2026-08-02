import { attractions } from "./attractions";
import { restaurants } from "./food";
import { shoppingPlaces } from "./shopping";
import { hotels } from "./trip";
import { airports, ferryInfo } from "./travelGuide";
import type { MapLocation } from "@/types";

const hotelLocations: MapLocation[] = [
  ...hotels.somnath.luxury.map((name, i) => ({
    id: `hotel-somnath-lux-${i}`,
    name,
    type: "hotel" as const,
    city: "Somnath" as const,
    coordinates: { lat: 20.893 - i * 0.001, lng: 70.404 },
    description: "Luxury · Somnath (2 nights)",
    dayNumber: 1,
  })),
  ...hotels.somnath.midRange.map((name, i) => ({
    id: `hotel-somnath-mid-${i}`,
    name,
    type: "hotel" as const,
    city: "Somnath" as const,
    coordinates: { lat: 20.889 - i * 0.001, lng: 70.4 },
    description: "Mid-range · Somnath",
    dayNumber: 1,
  })),
  ...hotels.somnath.budget.map((name, i) => ({
    id: `hotel-somnath-bud-${i}`,
    name,
    type: "hotel" as const,
    city: "Somnath" as const,
    coordinates: { lat: 20.887 - i * 0.001, lng: 70.398 },
    description: "Budget · Somnath",
    dayNumber: 1,
  })),
  ...hotels.dwarka.luxury.map((name, i) => ({
    id: `hotel-dwarka-lux-${i}`,
    name,
    type: "hotel" as const,
    city: "Dwarka" as const,
    coordinates: { lat: 22.24 + i * 0.001, lng: 68.97 },
    description: "Luxury · Dwarka (4 nights)",
    dayNumber: 3,
  })),
  ...hotels.dwarka.midRange.map((name, i) => ({
    id: `hotel-dwarka-mid-${i}`,
    name,
    type: "hotel" as const,
    city: "Dwarka" as const,
    coordinates: { lat: 22.238 + i * 0.001, lng: 68.969 },
    description: "Mid-range · Dwarka",
    dayNumber: 3,
  })),
  ...hotels.dwarka.budget.map((name, i) => ({
    id: `hotel-dwarka-bud-${i}`,
    name,
    type: "hotel" as const,
    city: "Dwarka" as const,
    coordinates: { lat: 22.236 + i * 0.001, lng: 68.968 },
    description: "Budget · Dwarka",
    dayNumber: 3,
  })),
];

const foodCoords: Record<string, { lat: number; lng: number }> = {
  "gordhan-thal": { lat: 23.022, lng: 72.571 },
  agashiye: { lat: 23.03, lng: 72.58 },
  "hotel-aditya": { lat: 20.889, lng: 70.4 },
  "sea-view": { lat: 20.886, lng: 70.403 },
  "sugar-n-spice": { lat: 20.887, lng: 70.399 },
  "porbandar-local": { lat: 21.642, lng: 69.629 },
  govinda: { lat: 22.238, lng: 68.967 },
  rajbhog: { lat: 22.239, lng: 68.969 },
  amrutras: { lat: 22.24, lng: 68.972 },
  charmi: { lat: 22.241, lng: 68.974 },
  "dwarka-street": { lat: 22.238, lng: 68.966 },
  "bet-dwarka-bhojan": { lat: 22.252, lng: 68.967 },
};

export const mapLocations: MapLocation[] = [
  ...attractions.map((a) => ({
    id: a.slug,
    name: a.name,
    type: "attraction" as const,
    city: a.city,
    coordinates: a.coordinates,
    description: a.overview.slice(0, 120) + "...",
    link: `/attractions/${a.slug}`,
    dayNumber: a.dayNumber,
  })),
  ...restaurants.map((r) => ({
    id: r.id,
    name: r.name,
    type: "food" as const,
    city: r.city,
    coordinates: foodCoords[r.id] ?? { lat: 22.24, lng: 68.97 },
    description: `${r.cuisine} · ₹${r.avgPriceInr} avg · ★${r.rating}`,
    link: "/food",
  })),
  ...shoppingPlaces.map((s) => ({
    id: s.id,
    name: s.name,
    type: "shopping" as const,
    city: s.city,
    coordinates: s.coordinates,
    description: s.items.slice(0, 3).join(", "),
  })),
  ...hotelLocations,
  ...airports.map((a) => ({
    id: `airport-${a.name}`,
    name: a.name,
    type: "transport" as const,
    city: "Somnath" as const,
    coordinates: a.coordinates,
    description: a.role,
  })),
  {
    id: "okha-jetty",
    name: "Okha Jetty (Bet Dwarka Ferry)",
    type: "transport" as const,
    city: "Dwarka",
    coordinates: ferryInfo.coordinates,
    description: ferryInfo.route,
    dayNumber: 5,
  },
];

export const mapCenter = { lat: 21.8, lng: 69.5 };

export const mapTypeColors: Record<string, string> = {
  attraction: "#ea580c",
  food: "#16a34a",
  shopping: "#9333ea",
  hotel: "#2563eb",
  transport: "#64748b",
};

export function getLocationsByType(type: string) {
  return mapLocations.filter((l) => l.type === type);
}

export function getDayRoute(dayNumber: number) {
  return attractions
    .filter((a) => a.dayNumber === dayNumber)
    .map((a) => [a.coordinates.lat, a.coordinates.lng] as [number, number]);
}
