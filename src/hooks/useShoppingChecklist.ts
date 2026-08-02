import { useLocalStorage } from "./useLocalStorage";

export function useShoppingChecklist() {
  const [checked, setChecked] = useLocalStorage<Record<string, boolean>>(
    "trip-shopping-checklist",
    {}
  );

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const items = [
    { id: "gomti-chakra", label: "Gomti Chakra" },
    { id: "rudraksha", label: "Rudraksha mala" },
    { id: "brass-idol", label: "Brass idol" },
    { id: "prasad-box", label: "Prasad boxes" },
    { id: "dry-fruits", label: "Dry fruit sweets" },
    { id: "bandhani", label: "Bandhani fabric" },
    { id: "books", label: "Religious books" },
    { id: "souvenirs", label: "Temple souvenirs" },
  ];

  const done = items.filter((i) => checked[i.id]).length;

  return { items, checked, toggle, done, total: items.length };
}
