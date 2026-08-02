import { defaultBudgetCategories } from "@/data/budget";
import type { BudgetCategory, DisplayCurrency } from "@/types";
import { useLocalStorage } from "./useLocalStorage";

export function useBudget() {
  const [categories, setCategories] = useLocalStorage<BudgetCategory[]>(
    "trip-budget-categories",
    defaultBudgetCategories
  );
  const [actuals, setActuals] = useLocalStorage<Record<string, number>>("trip-budget-actuals", {});
  const [displayCurrency, setDisplayCurrency] = useLocalStorage<DisplayCurrency>(
    "trip-budget-currency",
    "both"
  );

  const updateCategory = (id: string, updates: Partial<BudgetCategory>) => {
    setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, ...updates } : c)));
  };

  const updateActual = (id: string, value: number) => {
    setActuals((prev) => ({ ...prev, [id]: value }));
  };

  const resetToDefaults = () => {
    setCategories(defaultBudgetCategories);
    setActuals({});
  };

  const totals = categories.reduce(
    (acc, cat) => {
      acc.minInr += cat.minInr;
      acc.maxInr += cat.maxInr;
      acc.minAed += cat.minAed ?? 0;
      acc.maxAed += cat.maxAed ?? 0;
      acc.actualInr += actuals[cat.id] ?? 0;
      return acc;
    },
    { minInr: 0, maxInr: 0, minAed: 0, maxAed: 0, actualInr: 0 }
  );

  return {
    categories,
    actuals,
    displayCurrency,
    setDisplayCurrency,
    updateCategory,
    updateActual,
    resetToDefaults,
    totals,
  };
}
