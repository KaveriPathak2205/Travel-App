import type { GujaratiPhrase } from "@/types";

export const gujaratiPhrases: GujaratiPhrase[] = [
  { gujarati: "નમસ્તે", transliteration: "Namaste", english: "Hello / Greetings" },
  { gujarati: "આભાર", transliteration: "Aabhar", english: "Thank you" },
  { gujarati: "કેમ છો?", transliteration: "Kem cho?", english: "How are you?" },
  { gujarati: "બહુ સારું", transliteration: "Bahu saru", english: "Very good" },
  { gujarati: "કેટલું?", transliteration: "Ketlu?", english: "How much?" },
  { gujarati: "પાણી", transliteration: "Paani", english: "Water" },
  { gujarati: "ખાવું", transliteration: "Khaavu", english: "Food / to eat" },
  { gujarati: "મંદિર", transliteration: "Mandir", english: "Temple" },
  { gujarati: "મદદ", transliteration: "Madad", english: "Help" },
  { gujarati: "હા / ના", transliteration: "Ha / Na", english: "Yes / No" },
  { gujarati: "કયાં છે?", transliteration: "Kyaan chhe?", english: "Where is it?" },
  { gujarati: "ટેક્સી", transliteration: "Taxi", english: "Taxi" },
];

export const localCustoms = [
  "Gujarat is a dry state — alcohol is prohibited.",
  "Most restaurants are pure vegetarian, especially near temples.",
  "Remove footwear before entering temples and some homes.",
  "Use right hand when giving or receiving items.",
  "Greeting with 'Namaste' with folded hands is appreciated.",
  "Bargaining is common in markets but not in restaurants.",
  "Dress modestly — shoulders and knees covered in temples.",
];

export const templeEtiquette = [
  "Remove shoes before entering temple premises.",
  "No leather items inside many temples.",
  "Mobile phones and photography often restricted in inner sanctum.",
  "Follow queue discipline during darshan.",
  "Women may need to cover head with dupatta/scarf in some temples.",
  "Avoid pointing feet toward deities.",
  "Maintain silence or speak softly inside temple halls.",
  "Donations are voluntary — use official temple counters.",
];

export const safetyTips = [
  "Carry photocopies of passport and visa separately from originals.",
  "Stay hydrated — Gujarat can be hot and humid (28–38°C in summer).",
  "Use registered taxis or pre-booked cabs for inter-city travel.",
  "Keep emergency numbers saved offline.",
  "Avoid swimming at unmarked beaches; Shivrajpur has lifeguards.",
  "Watch belongings in crowded temple queues and markets.",
  "Carry cash — smaller vendors may not accept cards.",
  "Bet Dwarka ferry: wear life jacket, avoid monsoon rough seas.",
];

export const weatherGuide = {
  season: "September (post-monsoon)",
  temperature: "28–35°C",
  humidity: "Moderate to high",
  rainfall: "Occasional showers possible",
  packing: "Light cotton clothes, umbrella, sunscreen, hat",
  note: "Evenings are pleasant near the coast. Temple visits best early morning or after 5 PM.",
};

export const offlineTips = [
  "Download offline Google Maps for Somnath, Dwarka, Porbandar areas.",
  "Save this app to home screen for quick access (PWA).",
  "Screenshot hotel addresses and taxi driver contact.",
  "Carry printed copies of flight tickets and hotel bookings.",
  "Note ferry timings at Okha Jetty — last return before sunset.",
  "Keep ₹500–1000 in small notes for temples and street food.",
  "Airtel/Jio have good coverage along NH51 coastal route.",
];

export const aartiTimings = [
  { temple: "Somnath Temple", timings: ["7:00 AM", "12:00 PM", "7:00 PM"] },
  { temple: "Dwarkadhish Temple", timings: ["6:30 AM Mangla", "7:00 PM Sandhya"] },
  { temple: "Nageshwar Jyotirling", timings: ["6:00 AM", "12:00 PM", "7:00 PM"] },
];

export const ferryInfo = {
  route: "Okha Jetty → Bet Dwarka",
  duration: "15–20 minutes each way",
  cost: "₹20–50 per person",
  timings: "Approx 7:00 AM – 6:00 PM (verify locally; last return before sunset)",
  tips: [
    "Arrive early morning to avoid queues",
    "Life jackets provided on boats",
    "Carry cash for ferry tickets",
    "Avoid during rough monsoon seas",
  ],
  coordinates: { lat: 22.468, lng: 69.073 },
};

export const airports = [
  {
    name: "Ahmedabad (AMD)",
    role: "International arrival from Dubai",
    distance: "N/A — starting point",
    coordinates: { lat: 23.077, lng: 72.634 },
  },
  {
    name: "Jamnagar (JGA)",
    role: "Nearest to Dwarka for return",
    distance: "110 km from Dwarka (~2 hrs)",
    coordinates: { lat: 22.465, lng: 70.013 },
  },
  {
    name: "Porbandar (PBD)",
    role: "Alternative return airport",
    distance: "95 km from Dwarka (~2 hrs)",
    coordinates: { lat: 21.649, lng: 69.657 },
  },
];
