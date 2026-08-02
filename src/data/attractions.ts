import type { Attraction, City } from "@/types";

function a(
  slug: string,
  name: string,
  city: City,
  coords: { lat: number; lng: number },
  overview: string,
  history: string,
  extra: Partial<Attraction> = {}
): Attraction {
  return {
    slug,
    name,
    city,
    coordinates: coords,
    overview,
    history,
    openingHours: extra.openingHours ?? "6:00 AM – 9:00 PM (verify locally)",
    entryFee: extra.entryFee ?? "Free (donations welcome)",
    bestTime: extra.bestTime ?? "Early morning or evening aarti",
    visitDuration: extra.visitDuration ?? "45–90 minutes",
    photographyRules:
      extra.photographyRules ??
      "Photography may be restricted inside sanctum. Follow temple signage.",
    nearbyRestaurants: extra.nearbyRestaurants ?? ["Local Gujarati restaurants nearby"],
    nearbyWashrooms: extra.nearbyWashrooms ?? "Available at temple premises",
    parking: extra.parking ?? "Paid parking available near temple",
    dressCode: extra.dressCode ?? "Traditional modest clothing. No shorts or sleeveless tops.",
    tips: extra.tips ?? ["Remove footwear before entering", "Carry water bottle"],
    dayNumber: extra.dayNumber,
  };
}

export const attractions: Attraction[] = [
  a(
    "somnath-temple",
    "Somnath Temple",
    "Somnath",
    { lat: 20.888, lng: 70.401 },
    "Somnath Temple is one of the twelve Jyotirlingas of Lord Shiva, located on the western coast of Gujarat in Prabhas Patan. It is one of India's most revered pilgrimage sites, drawing millions of devotees annually.",
    "The temple has been destroyed and rebuilt several times throughout history. The present structure was completed in 1951 under the guidance of Sardar Vallabhbhai Patel. The temple stands as a symbol of resilience and faith, overlooking the Arabian Sea.",
    {
      dayNumber: 1,
      openingHours: "6:00 AM – 10:00 PM. Aarti: 7 AM, 12 PM, 7 PM",
      visitDuration: "1–2 hours",
      photographyRules: "No photography inside main sanctum. Allowed in outer premises.",
      nearbyRestaurants: ["Hotel Aditya Restaurant", "Sea View Restaurant"],
      tips: ["Attend evening light & sound show", "Evening aarti is spectacular", "Book darshan during festivals early"],
    }
  ),
  a(
    "old-somnath-temple",
    "Old Somnath Temple",
    "Somnath",
    { lat: 20.886, lng: 70.4 },
    "The Old Somnath Temple ruins sit adjacent to the current temple, preserving the memory of earlier structures destroyed by invaders. It offers a poignant glimpse into the temple's turbulent history.",
    "Historical records indicate the original Somnath temple was looted and destroyed multiple times between the 11th and 18th centuries. The ruins serve as a memorial to those lost structures.",
    { dayNumber: 2, visitDuration: "20–30 minutes", entryFee: "Free" }
  ),
  a(
    "lakshmi-narayan-mandir",
    "Lakshmi Narayan Mandir",
    "Somnath",
    { lat: 20.89, lng: 70.403 },
    "A beautiful temple dedicated to Lord Vishnu and Goddess Lakshmi, located near the Somnath temple complex.",
    "Built in modern times to complement the Somnath pilgrimage circuit, this temple features intricate carvings and peaceful surroundings.",
    { dayNumber: 2, visitDuration: "30 minutes" }
  ),
  a(
    "bhidbhanjan-mahadev",
    "Bhidbhanjan Mahadev",
    "Somnath",
    { lat: 20.892, lng: 70.398 },
    "A sacred Shiva temple associated with legends of divine intervention and protection.",
    "Local tradition holds that Lord Shiva appeared here to protect devotees. The temple is part of the extended Somnath pilgrimage trail.",
    { dayNumber: 2, visitDuration: "20–30 minutes" }
  ),
  a(
    "banganga",
    "Banganga",
    "Somnath",
    { lat: 20.884, lng: 70.395 },
    "Banganga is a sacred water tank believed to have been created by the Pandavas during their exile. Pilgrims take ritual baths here before visiting Somnath.",
    "According to Mahabharata legend, the Pandavas needed water and Bhima struck the ground with his mace, creating this spring. The name derives from 'Ban' (arrow) and 'Ganga'.",
    { dayNumber: 2, visitDuration: "30 minutes", bestTime: "Morning" }
  ),
  a(
    "bhalka-tirth",
    "Bhalka Tirth",
    "Somnath",
    { lat: 20.881, lng: 70.392 },
    "Bhalka Tirth marks the spot where Lord Krishna is believed to have left his mortal body. A peepal tree and small temple commemorate this sacred event.",
    "This is one of the most significant sites in Krishna lore. After being struck by a hunter's arrow, Krishna rested under a tree here before departing for his heavenly abode.",
    { dayNumber: 2, visitDuration: "30–45 minutes", bestTime: "Morning or evening" }
  ),
  a(
    "golokdham",
    "Golokdham",
    "Somnath",
    { lat: 20.883, lng: 70.39 },
    "Golokdham and the adjacent Shri Ram Mandir are serene temples near Bhalka Tirth, dedicated to Lord Krishna and Lord Rama respectively.",
    "These temples were established to mark the final leela (divine play) of Lord Krishna and provide a complete spiritual circuit around Prabhas Patan.",
    { dayNumber: 2, visitDuration: "30 minutes" }
  ),
  a(
    "shri-ram-mandir",
    "Shri Ram Mandir",
    "Somnath",
    { lat: 20.883, lng: 70.389 },
    "A temple dedicated to Lord Rama, located near Golokdham in the Somnath pilgrimage circuit.",
    "Part of the cluster of temples around Bhalka Tirth, this mandir complements the Krishna-centric sites with Rama worship traditions.",
    { dayNumber: 2, visitDuration: "20 minutes" }
  ),
  a(
    "triveni-sangam",
    "Triveni Sangam",
    "Somnath",
    { lat: 20.879, lng: 70.405 },
    "The confluence of three rivers — Hiran, Kapila, and Saraswati — near Somnath. Considered highly auspicious for ritual baths and prayers.",
    "Triveni Sangams hold special significance in Hindu tradition. Bathing here before Somnath darshan is considered meritorious.",
    { dayNumber: 2, visitDuration: "30–45 minutes", bestTime: "Morning" }
  ),
  a(
    "surya-mandir",
    "Surya Mandir",
    "Somnath",
    { lat: 20.877, lng: 70.408 },
    "An ancient sun temple near Somnath, reflecting the region's historical worship of Surya (Sun God).",
    "Built in traditional Hindu temple architecture, the Surya Mandir predates or parallels the Somnath temple traditions of sun worship in Gujarat.",
    { dayNumber: 2, visitDuration: "30 minutes", bestTime: "Sunrise" }
  ),
  a(
    "pandav-gufa",
    "Pandav Gufa",
    "Somnath",
    { lat: 20.875, lng: 70.41 },
    "A cave temple associated with the Pandavas from the Mahabharata, located in the Somnath area.",
    "Legend says the Pandavas meditated in these caves during their exile. The site attracts devotees interested in Mahabharata-linked pilgrimage.",
    { dayNumber: 2, visitDuration: "20–30 minutes" }
  ),
  a(
    "veneshwar-mahadev",
    "Veneshwar Mahadev",
    "Somnath",
    { lat: 20.891, lng: 70.406 },
    "A Shiva temple in the Somnath circuit, named after the sage Veni who is associated with local legends.",
    "Part of the extended temple trail around Somnath, Veneshwar Mahadev is visited by pilgrims completing the full parikrama.",
    { dayNumber: 2, visitDuration: "20 minutes" }
  ),
  a(
    "kamnath-mahadev",
    "Kamnath Mahadev",
    "Somnath",
    { lat: 20.89, lng: 70.407 },
    "Another revered Shiva temple near Somnath, part of the cluster of Mahadev shrines in Prabhas Patan.",
    "Kamnath Mahadev temple has been a local worship site for centuries, complementing the main Somnath Jyotirlinga pilgrimage.",
    { dayNumber: 2, visitDuration: "20 minutes" }
  ),
  a(
    "brahma-kumaris-mahadev",
    "Brahma Kumaris Mahadev Temple",
    "Somnath",
    { lat: 20.887, lng: 70.404 },
    "A peaceful Shiva temple maintained in the Somnath area, offering a quieter darshan experience.",
    "This temple serves local devotees and pilgrims seeking a less crowded spiritual experience near the main Somnath complex.",
    { dayNumber: 2, visitDuration: "20 minutes" }
  ),
  a(
    "somnath-beach",
    "Somnath Beach",
    "Somnath",
    { lat: 20.885, lng: 70.402 },
    "A serene beach adjacent to the Somnath Temple, perfect for evening walks and watching the sunset over the Arabian Sea.",
    "The beach has been a place of contemplation for pilgrims visiting Somnath for centuries. The temple spires visible from the shore create a memorable vista.",
    {
      dayNumber: 1,
      visitDuration: "1–2 hours",
      bestTime: "Sunset (6:30–7:30 PM)",
      dressCode: "Modest beach wear. Cover up when near temple area.",
      photographyRules: "Photography freely allowed on the beach.",
      entryFee: "Free",
      parking: "Available along beach road",
    }
  ),
  a(
    "kirti-mandir",
    "Kirti Mandir",
    "Porbandar",
    { lat: 21.641, lng: 69.629 },
    "Kirti Mandir is the memorial temple built in honor of Mahatma Gandhi and Kasturba Gandhi in their birthplace, Porbandar.",
    "Built in 1947, the temple houses photos and exhibits from Gandhi's life. The adjacent house is Gandhi's actual birthplace, now a museum.",
    {
      dayNumber: 3,
      openingHours: "9:00 AM – 12:00 PM, 3:00 PM – 6:00 PM",
      visitDuration: "45–60 minutes",
      entryFee: "Free",
      nearbyRestaurants: ["Porbandar Local Restaurants"],
    }
  ),
  a(
    "sudama-temple",
    "Sudama Temple",
    "Porbandar",
    { lat: 21.639, lng: 69.631 },
    "The only temple in India dedicated to Sudama, the childhood friend of Lord Krishna. Located in Porbandar, it celebrates their eternal friendship.",
    "Built in the early 1900s, this unique temple honors Sudama's devotion and humility. Porbandar is believed to be Sudama's birthplace.",
    { dayNumber: 3, visitDuration: "30 minutes" }
  ),
  a(
    "dwarkadhish-temple",
    "Dwarkadhish Temple",
    "Dwarka",
    { lat: 22.239, lng: 68.968 },
    "The Dwarkadhish Temple is one of the four Char Dham pilgrimage sites, dedicated to Lord Krishna as King of Dwarka. Its five-storied structure is an architectural marvel.",
    "Believed to have been originally built by Krishna's grandson Vajranabha over 2,500 years ago, the current structure dates largely to the 16th century. The temple flag is changed five times daily.",
    {
      dayNumber: 3,
      openingHours: "6:30 AM – 1:00 PM, 5:00 PM – 9:30 PM",
      visitDuration: "1–2 hours",
      photographyRules: "No photography inside temple. Mobile phones often not allowed in inner sanctum.",
      nearbyRestaurants: ["Govinda Multi Cuisine", "Rajbhog Restaurant"],
      tips: ["Attend mangla aarti at dawn", "Flag changing ceremony is unique", "Visit Gomti Ghat after darshan"],
    }
  ),
  a(
    "gomti-ghat",
    "Gomti Ghat",
    "Dwarka",
    { lat: 22.237, lng: 68.966 },
    "Gomti Ghat is the sacred bathing ghat on the Gomti River near Dwarkadhish Temple. Pilgrims bathe here before temple darshan.",
    "The Gomti River is believed to have descended from heaven at Krishna's request. The ghat is lined with small shrines and is central to Dwarka pilgrimage rituals.",
    {
      dayNumber: 3,
      visitDuration: "45–60 minutes",
      bestTime: "Evening",
      entryFee: "Free",
    }
  ),
  a(
    "sudarshan-setu",
    "Sudarshan Setu",
    "Dwarka",
    { lat: 22.235, lng: 68.963 },
    "Sudarshan Setu is India's longest cable-stayed bridge connecting Dwarka mainland to Okha. It offers stunning views of the Arabian Sea.",
    "Inaugurated in 2024, the bridge is named after Krishna's Sudarshan Chakra. It has significantly improved connectivity to Bet Dwarka and Okha.",
    {
      dayNumber: 4,
      visitDuration: "30–45 minutes",
      bestTime: "Morning or sunset",
      entryFee: "Free (toll for vehicles)",
      photographyRules: "Photography allowed on bridge walkway.",
    }
  ),
  a(
    "rukmini-devi-temple",
    "Rukmini Devi Temple",
    "Dwarka",
    { lat: 22.252, lng: 69.012 },
    "Dedicated to Rukmini, Lord Krishna's chief queen, this 12th-century temple is located about 2 km from Dwarkadhish Temple.",
    "Legend says Rukmini was cursed by sage Durvasa to be separated from Krishna, hence the temple stands apart from the main Dwarkadhish temple.",
    { dayNumber: 4, visitDuration: "30–45 minutes", bestTime: "Morning" }
  ),
  a(
    "geeta-mandir",
    "Geeta Mandir",
    "Dwarka",
    { lat: 22.241, lng: 68.972 },
    "Geeta Mandir houses the entire Bhagavad Gita inscribed on marble walls. Built by the Birla family, it is both a temple and a monument to the Gita.",
    "Constructed in the 1970s, the temple features 18 chapters of the Gita in Sanskrit and Hindi, making it a unique cultural and spiritual landmark.",
    { dayNumber: 4, visitDuration: "30 minutes", entryFee: "Free" }
  ),
  a(
    "gayatri-shaktipeeth",
    "Gayatri Shaktipeeth",
    "Dwarka",
    { lat: 22.244, lng: 68.975 },
    "A Shaktipeeth temple in Dwarka dedicated to Goddess Gayatri, part of the extended pilgrimage circuit.",
    "Shaktipeeths are revered sites where body parts of Goddess Sati are believed to have fallen. This temple adds to Dwarka's spiritual diversity.",
    { dayNumber: 4, visitDuration: "30 minutes" }
  ),
  a(
    "bhadkeshwar-mahadev",
    "Bhadkeshwar Mahadev Mandir",
    "Dwarka",
    { lat: 22.233, lng: 68.958 },
    "A Shiva temple situated on a small hillock surrounded by the sea on three sides, offering panoramic ocean views.",
    "During high tide, the temple appears to float on water. It is especially beautiful during monsoon and full moon nights.",
    {
      dayNumber: 4,
      visitDuration: "45 minutes",
      bestTime: "Sunset",
      tips: ["Visit during high tide for dramatic views", "Wear non-slip footwear on rocky path"],
    }
  ),
  a(
    "shivrajpur-beach",
    "Shivrajpur Beach",
    "Dwarka",
    { lat: 22.315, lng: 68.945 },
    "A Blue Flag certified clean beach near Dwarka, known for clear waters, coral reefs, and water sports activities.",
    "Shivrajpur was awarded Blue Flag certification for environmental and safety standards. It is one of Gujarat's premier beach destinations.",
    {
      dayNumber: 4,
      visitDuration: "2–3 hours",
      bestTime: "Sunset (4:30–6:30 PM)",
      entryFee: "Free (water sports extra)",
      dressCode: "Beach wear acceptable. Modest cover-up when leaving.",
      photographyRules: "Photography allowed. Drone may need permission.",
      parking: "Ample parking available",
    }
  ),
  a(
    "nageshwar-jyotirling",
    "Nageshwar Jyotirling",
    "Dwarka",
    { lat: 22.336, lng: 69.093 },
    "One of the twelve Jyotirlingas, Nageshwar Temple features a massive 25-meter Shiva statue visible from afar.",
    "The temple is associated with the legend of Shiva protecting his devotee Supriya from the demon Daruka. The current temple was renovated in recent decades.",
    {
      dayNumber: 5,
      openingHours: "6:00 AM – 9:00 PM",
      visitDuration: "45–60 minutes",
      tips: ["Visit early to avoid crowds", "Large Shiva statue is iconic photo spot outside"],
    }
  ),
  a(
    "gopi-talav",
    "Gopi Talav",
    "Dwarka",
    { lat: 22.328, lng: 69.085 },
    "A sacred pond associated with the gopis (milkmaids) of Krishna lore, located near Nageshwar on the route to Okha.",
    "Legend says Krishna performed raas leela with the gopis here. The pond is considered holy and pilgrims often collect its water.",
    { dayNumber: 5, visitDuration: "20–30 minutes" }
  ),
  a(
    "bet-dwarka",
    "Bet Dwarka",
    "Dwarka",
    { lat: 22.252, lng: 68.967 },
    "Bet Dwarka is an island off Okha coast, believed to be Krishna's original residence. The island temple is reached by ferry.",
    "Archaeological findings suggest ancient Dwarka may have been located here. The island has temples, beaches, and a serene spiritual atmosphere.",
    {
      dayNumber: 5,
      visitDuration: "2–3 hours",
      bestTime: "Morning (first ferry)",
      tips: ["Ferry from Okha Jetty (15–20 min)", "Carry cash for ferry", "Temple bhojan available for lunch"],
      parking: "Parking at Okha Jetty",
    }
  ),
  a(
    "hanuman-dandi",
    "Hanuman Dandi",
    "Dwarka",
    { lat: 22.254, lng: 68.969 },
    "A unique Hanuman temple on Bet Dwarka island where Hanuman is depicted with his son Makardhwaj.",
    "This is one of the few temples showing Hanuman as a father. It is a short walk from the main Bet Dwarka temple.",
    { dayNumber: 5, visitDuration: "20 minutes" }
  ),
];

export function getAttraction(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}

export function getAttractionsByCity(city: City): Attraction[] {
  return attractions.filter((a) => a.city === city);
}

export const cities: City[] = ["Somnath", "Dwarka", "Porbandar"];
