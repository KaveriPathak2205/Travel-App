import { Link } from "react-router-dom";
import { Camera, Sunrise, Sunset } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { photoSpots } from "@/data/photoSpots";

const typeIcons = {
  sunrise: Sunrise,
  sunset: Sunset,
  landmark: Camera,
};

export function PhotoSpotsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Photo Spots</h1>
        <p className="text-muted-foreground mt-1">Best sunrise, sunset & landmark viewpoints</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {photoSpots.map((spot) => {
          const Icon = typeIcons[spot.type];
          return (
            <Card key={spot.id}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{spot.name}</h3>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="outline">{spot.city}</Badge>
                      <Badge variant="outline" className="capitalize">{spot.type}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      <strong>Drone:</strong> {spot.droneRestrictions}
                    </p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
                      {spot.tips.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                    {spot.linkedAttractionSlug && (
                      <Link
                        to={`/attractions/${spot.linkedAttractionSlug}`}
                        className="text-xs text-primary hover:underline mt-2 inline-block"
                      >
                        View attraction →
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
