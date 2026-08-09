# Somnath–Dwarka Trip Planner

A premium spiritual travel web app for your 7-day pilgrimage from Dubai to Somnath and Dwarka, Gujarat.
Open [https://somnath-dwarka-trip.vercel.app/](Your Dubai to Somnath-Dwarka trip guide)

## Features

- **Dashboard** — Trip countdown, weather placeholder, budget summary, daily checklist, emergency contacts
- **7-Day Itinerary** — Hour-by-hour timeline with costs, dress code, tips, and notes
- **25+ Attraction Pages** — History, hours, fees, photography rules, QR codes, embedded maps
- **Interactive Map** — Leaflet + OpenStreetMap with all attractions, restaurants, shopping, hotels & transport markers
- **Food Guide** — Somnath, Dwarka, Porbandar restaurants with ratings and prices
- **Travel Planner** — Flights, airports, taxi fares, ferry timings, aarti schedule
- **Budget Planner** — AED/INR tracking, Recharts breakdown, expense log, currency converter
- **Packing & Shopping Checklists** — Interactive, persisted in localStorage
- **Travel Guide** — Gujarati phrases, customs, temple etiquette, safety tips
- **Photo Spots** — Sunrise/sunset locations with drone restrictions
- **Favorites & Journal** — Bookmark places and write travel notes
- **Dark Mode & PWA** — Installable, works offline after first load

## Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS · shadcn/ui · Leaflet · Framer Motion · Recharts

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build & Deploy

```bash
npm run build
npm run preview
```

Deploy to [Vercel](https://vercel.com) — `vercel.json` included for SPA routing.

## Customize

- Trip start date: editable on Dashboard
- All data: `src/data/` (attractions, days, food, budget, etc.)
- Budget & checklists persist in browser localStorage
