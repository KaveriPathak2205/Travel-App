import { defaultPackingItems } from "@/data/packing";
import { useLocalStorage } from "./useLocalStorage";

export function usePackingChecklist() {
  const [checked, setChecked] = useLocalStorage<Record<string, boolean>>("trip-packing", {});

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const setSection = (ids: string[], value: boolean) => {
    setChecked((prev) => {
      const next = { ...prev };
      ids.forEach((id) => {
        next[id] = value;
      });
      return next;
    });
  };

  const total = defaultPackingItems.length;
  const done = defaultPackingItems.filter((item) => checked[item.id]).length;
  const progress = total === 0 ? 0 : Math.round((done / total) * 100);

  const checkSection = (section: string) => {
    const ids = defaultPackingItems.filter((i) => i.section === section).map((i) => i.id);
    setSection(ids, true);
  };

  const clearSection = (section: string) => {
    const ids = defaultPackingItems.filter((i) => i.section === section).map((i) => i.id);
    setSection(ids, false);
  };

  return { checked, toggle, setSection, checkSection, clearSection, total, done, progress, items: defaultPackingItems };
}
