import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FavoriteButton } from "@/components/shared/FavoriteButton";
import { restaurants, mealTabs, cityTabs } from "@/data/food";
import { formatINR } from "@/lib/utils";
import type { City } from "@/types";

export function FoodPage() {
  const [city, setCity] = useState<City>("Somnath");
  const [meal, setMeal] = useState("breakfast");
  const [vegOnly, setVegOnly] = useState(false);

  const filtered = restaurants.filter((r) => {
    const matchCity = r.city === city;
    const matchMeal = r.mealTypes.includes(meal as typeof r.mealTypes[number]);
    const matchVeg = !vegOnly || r.pureVeg;
    return matchCity && matchMeal && matchVeg;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Food Guide</h1>
        <p className="text-muted-foreground mt-1">Gujarati & Kathiawadi cuisine across your route</p>
      </div>

      <Tabs value={city} onValueChange={(v) => setCity(v as City)}>
        <TabsList className="w-full justify-start overflow-x-auto">
          {cityTabs.map((c) => (
            <TabsTrigger key={c.id} value={c.id}>{c.label}</TabsTrigger>
          ))}
        </TabsList>
        {cityTabs.map((c) => (
          <TabsContent key={c.id} value={c.id} className="space-y-4 mt-4">
            <div className="flex flex-wrap gap-2 items-center">
              {mealTabs.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMeal(m.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border ${meal === m.id ? "bg-primary text-primary-foreground" : "bg-card"}`}
                >
                  {m.label}
                </button>
              ))}
              <label className="flex items-center gap-2 text-sm ml-auto cursor-pointer">
                <input type="checkbox" checked={vegOnly} onChange={(e) => setVegOnly(e.target.checked)} />
                Pure Veg only
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {filtered.length === 0 ? (
                <p className="text-muted-foreground col-span-2">No restaurants for this filter. Try another meal type.</p>
              ) : (
                filtered.map((r) => (
                  <Card key={r.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{r.name}</h3>
                          <p className="text-sm text-muted-foreground">{r.cuisine}</p>
                        </div>
                        <FavoriteButton id={`food-${r.id}`} />
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="flex items-center text-amber-500 text-sm">
                          <Star className="h-3.5 w-3.5 fill-current mr-0.5" />
                          {r.rating}
                        </span>
                        <span className="text-sm text-muted-foreground">{formatINR(r.avgPriceInr)} avg</span>
                        {r.pureVeg && <Badge variant="outline" className="text-xs">Pure Veg</Badge>}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{r.address}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {r.mustTry.map((d) => (
                          <Badge key={d} className="text-xs bg-secondary text-secondary-foreground border-0">{d}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
