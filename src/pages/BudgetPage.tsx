import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBudget } from "@/hooks/useBudget";
import { useExpenses } from "@/hooks/useExpenses";
import { formatINR, formatAED, aedToInr } from "@/lib/utils";
import type { DisplayCurrency } from "@/types";

export function BudgetPage() {
  const {
    categories,
    actuals,
    displayCurrency,
    setDisplayCurrency,
    updateActual,
    resetToDefaults,
    totals,
  } = useBudget();
  const { expenses, addExpense, removeExpense, totalInr: expenseTotal } = useExpenses();

  const chartData = categories.map((c) => ({
    name: c.label.split(" ")[0],
    min: c.currency === "AED" ? (c.minAed ?? 0) * 22.5 : c.minInr,
    max: c.currency === "AED" ? (c.maxAed ?? 0) * 22.5 : c.maxInr,
    actual: actuals[c.id] ?? 0,
  }));

  const currencies: DisplayCurrency[] = ["INR", "AED", "both"];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Budget Planner</h1>
          <p className="text-muted-foreground mt-1">Track estimated vs actual spending</p>
        </div>
        <div className="flex gap-2">
          {currencies.map((c) => (
            <button
              key={c}
              onClick={() => setDisplayCurrency(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border ${displayCurrency === c ? "bg-primary text-primary-foreground" : "bg-card"}`}
            >
              {c}
            </button>
          ))}
          <Button variant="outline" size="sm" onClick={resetToDefaults}>Reset</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-base">Estimated (INR)</CardTitle></CardHeader>
          <CardContent><p className="text-xl font-bold">{formatINR(totals.minInr)} – {formatINR(totals.maxInr)}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-base">Estimated (AED)</CardTitle></CardHeader>
          <CardContent><p className="text-xl font-bold">{formatAED(totals.minAed)} – {formatAED(totals.maxAed)}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-base">Total Spent</CardTitle></CardHeader>
          <CardContent>
            <p className="text-xl font-bold text-primary">{formatINR(totals.actualInr + expenseTotal)}</p>
            <p className="text-xs text-muted-foreground">Budget actuals + expense log</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base">Budget Breakdown</CardTitle></CardHeader>
        <CardContent className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => formatINR(v)} />
              <Bar dataKey="min" fill="oklch(0.7 0.1 38)" name="Min" radius={[4, 4, 0, 0]} />
              <Bar dataKey="max" fill="oklch(0.55 0.19 38)" name="Max" radius={[4, 4, 0, 0]} />
              <Bar dataKey="actual" fill="oklch(0.4 0.15 145)" name="Actual" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base">Category Actuals</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {categories.map((c) => (
            <div key={c.id} className="flex flex-wrap items-center gap-3 p-3 rounded-lg border">
              <div className="flex-1 min-w-[140px]">
                <p className="font-medium text-sm">{c.label}</p>
                <p className="text-xs text-muted-foreground">
                  {c.currency === "AED"
                    ? `${formatAED(c.minAed ?? 0)} – ${formatAED(c.maxAed ?? 0)}`
                    : `${formatINR(c.minInr)} – ${formatINR(c.maxInr)}`}
                </p>
              </div>
              <Input
                type="number"
                placeholder="Actual spent"
                value={actuals[c.id] ?? ""}
                onChange={(e) => updateActual(c.id, Number(e.target.value) || 0)}
                className="w-32"
              />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base">Expense Tracker</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <form
            className="flex flex-wrap gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              addExpense({
                label: fd.get("label") as string,
                amount: Number(fd.get("amount")),
                currency: fd.get("currency") as "INR" | "AED",
                date: new Date().toISOString().slice(0, 10),
                category: fd.get("category") as string,
              });
              e.currentTarget.reset();
            }}
          >
            <Input name="label" placeholder="Description" required className="flex-1 min-w-[120px]" />
            <Input name="amount" type="number" placeholder="Amount" required className="w-24" />
            <select name="currency" className="rounded-md border border-input bg-background px-2 py-2 text-sm">
              <option value="INR">INR</option>
              <option value="AED">AED</option>
            </select>
            <Input name="category" placeholder="Category" className="w-28" />
            <Button type="submit" size="sm">Add</Button>
          </form>
          {expenses.length === 0 ? (
            <p className="text-sm text-muted-foreground">No expenses logged yet.</p>
          ) : (
            expenses.map((ex) => (
              <div key={ex.id} className="flex justify-between items-center p-2 rounded border text-sm">
                <div>
                  <p className="font-medium">{ex.label}</p>
                  <p className="text-xs text-muted-foreground">{ex.date} · {ex.category}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>{ex.currency === "AED" ? formatAED(ex.amount) : formatINR(ex.amount)}</span>
                  <Button variant="ghost" size="sm" onClick={() => removeExpense(ex.id)}>×</Button>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base">Currency Converter</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">Rate: 1 AED ≈ 22.5 INR</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs">AED → INR</label>
              <Input type="number" placeholder="AED" onChange={(e) => {
                const el = document.getElementById("inr-result");
                if (el) el.textContent = formatINR(aedToInr(Number(e.target.value) || 0));
              }} />
              <p id="inr-result" className="text-sm font-medium mt-1">—</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
