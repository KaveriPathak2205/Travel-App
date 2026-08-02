import type { PackingItem } from "@/types";

export const defaultPackingItems: PackingItem[] = [
  { id: "p1", label: "Traditional Indian wear (kurta/saree)", section: "Clothing" },
  { id: "p2", label: "Comfortable walking shoes", section: "Clothing" },
  { id: "p3", label: "Light cotton clothes", section: "Clothing" },
  { id: "p4", label: "Modest temple attire (no shorts/sleeveless)", section: "Clothing" },
  { id: "p5", label: "Light shawl or dupatta", section: "Clothing" },
  { id: "p6", label: "Small towel", section: "Temple Essentials" },
  { id: "p7", label: "Water bottle", section: "Temple Essentials" },
  { id: "p8", label: "Sunglasses", section: "Temple Essentials" },
  { id: "p9", label: "Sun hat / cap", section: "Temple Essentials" },
  { id: "p10", label: "Small bag for temple visits", section: "Temple Essentials" },
  { id: "p11", label: "Personal medicines", section: "Medicines" },
  { id: "p12", label: "First aid kit", section: "Medicines" },
  { id: "p13", label: "Motion sickness tablets", section: "Medicines" },
  { id: "p14", label: "Phone charger", section: "Electronics" },
  { id: "p15", label: "Power bank", section: "Electronics" },
  { id: "p16", label: "Travel adapter (India Type D/M)", section: "Electronics" },
  { id: "p17", label: "Passport", section: "Documents" },
  { id: "p18", label: "Flight tickets (print/digital)", section: "Documents" },
  { id: "p19", label: "Hotel confirmations", section: "Documents" },
  { id: "p20", label: "Travel insurance", section: "Documents" },
  { id: "p21", label: "Indian Rupees (cash)", section: "Cash" },
  { id: "p22", label: "Some AED for airport", section: "Cash" },
  { id: "p23", label: "Camera / phone for photos", section: "Camera" },
  { id: "p24", label: "Memory cards / cloud backup", section: "Camera" },
];

export const packingSections = [
  "Clothing",
  "Temple Essentials",
  "Medicines",
  "Electronics",
  "Documents",
  "Cash",
  "Camera",
];
