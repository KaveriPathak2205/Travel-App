import { useState } from "react";
import { TripMap } from "@/components/map/LazyMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dayPlans } from "@/data/days";
import { mapTypeColors } from "@/data/mapLocations";

export function MapPage() {
  const [selectedDay, setSelectedDay] = useState<number | undefined>(undefined);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Interactive Map</h1>
        <p className="text-muted-foreground mt-1">
          All attractions, restaurants, shopping spots, hotels & transport
        </p>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Filter by Day Route</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDay(undefined)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border ${!selectedDay ? "bg-primary text-primary-foreground" : "bg-card"}`}
            >
              All Days
            </button>
            {dayPlans.map((d) => (
              <button
                key={d.day}
                onClick={() => setSelectedDay(d.day)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border ${selectedDay === d.day ? "bg-primary text-primary-foreground" : "bg-card"}`}
              >
                Day {d.day}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <TripMap selectedDay={selectedDay} showRoute={!!selectedDay} height="500px" />

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {Object.entries(mapTypeColors).map(([type, color]) => (
          <div key={type} className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full shrink-0" style={{ background: color }} />
            <span className="capitalize">{type}</span>
          </div>
        ))}
      </div>

      <Tabs defaultValue="legend">
        <TabsList>
          <TabsTrigger value="legend">Map Legend</TabsTrigger>
          <TabsTrigger value="tips">Map Tips</TabsTrigger>
        </TabsList>
        <TabsContent value="legend">
          <Card>
            <CardContent className="pt-4 text-sm text-muted-foreground space-y-2">
              <p><strong className="text-foreground">Orange markers</strong> — Temples, beaches, landmarks</p>
              <p><strong className="text-foreground">Green markers</strong> — Restaurants & food spots</p>
              <p><strong className="text-foreground">Purple markers</strong> — Shopping markets</p>
              <p><strong className="text-foreground">Blue markers</strong> — Hotels</p>
              <p><strong className="text-foreground">Gray markers</strong> — Airports & ferry jetties</p>
              <p>Dashed orange lines show day routes when a specific day is selected.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tips">
          <Card>
            <CardContent className="pt-4 text-sm text-muted-foreground space-y-2">
              <p>Tap any marker for details and quick links.</p>
              <p>Use Google Maps / Navigate buttons on attraction pages for turn-by-turn directions.</p>
              <p>Download offline maps for Somnath-Dwarka corridor before travel.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
