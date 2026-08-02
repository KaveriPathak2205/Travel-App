import { useLocalStorage } from "./useLocalStorage";

export function useDayNotes() {
  const [notes, setNotes] = useLocalStorage<Record<string, string>>("trip-day-notes", {});

  const getNote = (day: number) => notes[String(day)] ?? "";
  const setNote = (day: number, value: string) => {
    setNotes((prev) => ({ ...prev, [String(day)]: value }));
  };

  return { getNote, setNote };
}
