import type { JournalEntry } from "@/types";
import { useLocalStorage } from "./useLocalStorage";

export function useJournal() {
  const [entries, setEntries] = useLocalStorage<JournalEntry[]>("trip-journal", []);

  const addEntry = (day: number, title: string, content: string) => {
    setEntries((prev) => [
      {
        id: crypto.randomUUID(),
        day,
        title,
        content,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  const removeEntry = (id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  };

  return { entries, addEntry, removeEntry };
}
