import { useLocalStorage } from "./useLocalStorage";

export function useDayProgress() {
  const [progress, setProgress] = useLocalStorage<Record<string, Record<string, boolean>>>(
    "trip-day-progress",
    {}
  );

  const toggle = (day: number, itemKey: string) => {
    const dayKey = String(day);
    setProgress((prev) => ({
      ...prev,
      [dayKey]: {
        ...prev[dayKey],
        [itemKey]: !prev[dayKey]?.[itemKey],
      },
    }));
  };

  const isChecked = (day: number, itemKey: string) => !!progress[String(day)]?.[itemKey];

  const getDayProgress = (day: number, totalItems: number) => {
    const dayProgress = progress[String(day)] ?? {};
    const done = Object.values(dayProgress).filter(Boolean).length;
    return totalItems === 0 ? 0 : Math.round((done / totalItems) * 100);
  };

  return { toggle, isChecked, getDayProgress, progress };
}
