import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, MapPin, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FavoriteButton } from "@/components/shared/FavoriteButton";
import { attractions, cities } from "@/data/attractions";
import type { City } from "@/types";

export function AttractionsPage() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState<City | "all">("all");

  const filtered = attractions.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase());
    const matchCity = city === "all" || a.city === city;
    return matchSearch && matchCity;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Attractions</h1>
        <p className="text-muted-foreground mt-1">{attractions.length} sacred sites & landmarks</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search attractions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCity("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border ${city === "all" ? "bg-primary text-primary-foreground" : "bg-card"}`}
          >
            All
          </button>
          {cities.map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border ${city === c ? "bg-primary text-primary-foreground" : "bg-card"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((a, i) => (
          <motion.div key={a.slug} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
            <Card className="h-full hover:bg-accent/30 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <Link to={`/attractions/${a.slug}`} className="flex-1">
                    <div className="h-2 w-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 mb-3" />
                    <h3 className="font-semibold">{a.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline">{a.city}</Badge>
                      {a.dayNumber && <Badge variant="outline">Day {a.dayNumber}</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{a.overview}</p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{a.visitDuration}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{a.entryFee}</span>
                    </div>
                  </Link>
                  <FavoriteButton id={a.slug} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
