import type { ExpenseEntry } from "@/types";
import { useLocalStorage } from "./useLocalStorage";

export function useExpenses() {
  const [expenses, setExpenses] = useLocalStorage<ExpenseEntry[]>("trip-expenses", []);

  const addExpense = (entry: Omit<ExpenseEntry, "id">) => {
    setExpenses((prev) => [...prev, { ...entry, id: crypto.randomUUID() }]);
  };

  const removeExpense = (id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const totalInr = expenses.reduce(
    (sum, e) => sum + (e.currency === "AED" ? e.amount * 22.5 : e.amount),
    0
  );

  return { expenses, addExpense, removeExpense, totalInr };
}
