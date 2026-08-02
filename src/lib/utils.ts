import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const AED_TO_INR = 22.5;

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatAED(amount: number): string {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function inrToAed(inr: number): number {
  return Math.round(inr / AED_TO_INR);
}

export function aedToInr(aed: number): number {
  return Math.round(aed * AED_TO_INR);
}

export function mapsSearchUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

export function mapsNavigateUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

export function parseTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function getTripDayNumber(startDate: string, today = new Date()): number | null {
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);
  const now = new Date(today);
  now.setHours(0, 0, 0, 0);
  const diff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  if (diff < 1 || diff > 7) return null;
  return diff;
}

export function getCountdown(targetDate: string) {
  const target = new Date(targetDate);
  target.setHours(0, 0, 0, 0);
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, isPast: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return { days, hours, minutes, isPast: false };
}

export function renderStars(rating: number): string {
  return "★".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "½" : "") + "☆".repeat(5 - Math.ceil(rating));
}
