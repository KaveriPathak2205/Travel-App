export type City = "Somnath" | "Dwarka" | "Porbandar";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Attraction {
  slug: string;
  name: string;
  city: City;
  overview: string;
  history: string;
  openingHours: string;
  entryFee: string;
  bestTime: string;
  visitDuration: string;
  photographyRules: string;
  coordinates: Coordinates;
  nearbyRestaurants: string[];
  nearbyWashrooms: string;
  parking: string;
  dressCode?: string;
  tips?: string[];
  dayNumber?: number;
}

export interface TimelineEntry {
  time: string;
  title: string;
  description?: string;
  attractionSlug?: string;
  travelMinutes?: number;
  cost?: string;
}

export interface DayPlan {
  day: number;
  title: string;
  timeline: TimelineEntry[];
  dressCode: string;
  tips: string[];
  estimatedCost: { min: number; max: number; currency: "INR" | "AED" };
}

export interface BudgetCategory {
  id: string;
  label: string;
  minInr: number;
  maxInr: number;
  minAed?: number;
  maxAed?: number;
  currency: "INR" | "AED" | "both";
}

export interface BudgetState {
  categories: BudgetCategory[];
  actuals: Record<string, number>;
}

export interface Restaurant {
  id: string;
  name: string;
  city: City;
  mealTypes: ("breakfast" | "lunch" | "dinner" | "sweets" | "street" | "fine")[];
  cuisine: string;
  avgPriceInr: number;
  rating: number;
  mustTry: string[];
  address: string;
  pureVeg: boolean;
}

export interface PackingItem {
  id: string;
  label: string;
  section: string;
}

export interface EmergencyContact {
  name: string;
  number: string;
  description?: string;
}

export interface TripInfo {
  title: string;
  subtitle: string;
  origin: string;
  defaultStartDate: string;
  route: string;
  duration: string;
  flights: { leg: string; details: string }[];
  transport: { route: string; duration: string; cost: string }[];
}

export type DisplayCurrency = "INR" | "AED" | "both";

export type MapLocationType = "attraction" | "food" | "shopping" | "hotel" | "transport";

export interface MapLocation {
  id: string;
  name: string;
  type: MapLocationType;
  city: City;
  coordinates: Coordinates;
  description?: string;
  link?: string;
  dayNumber?: number;
}

export interface ShoppingPlace {
  id: string;
  name: string;
  city: City;
  coordinates: Coordinates;
  items: string[];
  bestTime: string;
  tips: string[];
}

export interface PhotoSpot {
  id: string;
  name: string;
  city: City;
  coordinates: Coordinates;
  type: "sunrise" | "sunset" | "landmark";
  droneRestrictions: string;
  tips: string[];
  linkedAttractionSlug?: string;
}

export interface GujaratiPhrase {
  gujarati: string;
  transliteration: string;
  english: string;
}

export interface ExpenseEntry {
  id: string;
  label: string;
  amount: number;
  currency: "INR" | "AED";
  date: string;
  category: string;
}

export interface JournalEntry {
  id: string;
  day: number;
  title: string;
  content: string;
  createdAt: string;
}
