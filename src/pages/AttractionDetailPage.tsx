import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Camera, Clock, Info, MapPin, Shirt } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapsButtons } from "@/components/attractions/MapsButtons";
import { AttractionMiniMap } from "@/components/map/LazyMap";
import { AttractionQR } from "@/components/shared/AttractionQR";
import { FavoriteButton } from "@/components/shared/FavoriteButton";
import { getAttraction } from "@/data/attractions";

export function AttractionDetailPage() {
  const { slug } = useParams();
  const attraction = slug ? getAttraction(slug) : undefined;

  if (!attraction) {
    return (
      <div className="text-center py-12">
        <p>Attraction not found.</p>
        <Link to="/attractions" className="text-primary hover:underline">Back to attractions</Link>
      </div>
    );
  }

  const { lat, lng } = attraction.coordinates;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link to="/attractions" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-2">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <h1 className="text-2xl font-bold">{attraction.name}</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge>{attraction.city}</Badge>
            {attraction.dayNumber && <Badge variant="outline">Day {attraction.dayNumber}</Badge>}
          </div>
        </div>
        <FavoriteButton id={attraction.slug} />
      </div>

      <MapsButtons coordinates={attraction.coordinates} name={attraction.name} />

      <AttractionMiniMap lat={lat} lng={lng} name={attraction.name} />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-base">Overview</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">{attraction.overview}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-base">History</CardTitle></CardHeader>
          <CardContent><p className="text-sm text-muted-foreground">{attraction.history}</p></CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Info className="h-4 w-4" /> Practical Info</CardTitle></CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2 text-sm">
          <div><span className="text-muted-foreground">Opening Hours</span><p className="font-medium">{attraction.openingHours}</p></div>
          <div><span className="text-muted-foreground">Entry Fee</span><p className="font-medium">{attraction.entryFee}</p></div>
          <div><span className="text-muted-foreground">Best Time</span><p className="font-medium">{attraction.bestTime}</p></div>
          <div><span className="text-muted-foreground">Visit Duration</span><p className="font-medium flex items-center gap-1"><Clock className="h-3 w-3" />{attraction.visitDuration}</p></div>
          <div className="sm:col-span-2"><span className="text-muted-foreground">Parking</span><p className="font-medium">{attraction.parking}</p></div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Camera className="h-4 w-4" /> Photography Rules</CardTitle></CardHeader>
        <CardContent><p className="text-sm">{attraction.photographyRules}</p></CardContent>
      </Card>

      {attraction.dressCode && (
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Shirt className="h-4 w-4" /> Dress Code</CardTitle></CardHeader>
          <CardContent><p className="text-sm">{attraction.dressCode}</p></CardContent>
        </Card>
      )}

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><MapPin className="h-4 w-4" /> Nearby</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <p className="text-muted-foreground mb-1">Restaurants</p>
            <ul className="list-disc list-inside">{attraction.nearbyRestaurants.map((r) => <li key={r}>{r}</li>)}</ul>
          </div>
          <Separator />
          <div><p className="text-muted-foreground">Washrooms</p><p>{attraction.nearbyWashrooms}</p></div>
        </CardContent>
      </Card>

      {attraction.tips && (
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-base">Tips</CardTitle></CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
              {attraction.tips.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </CardContent>
        </Card>
      )}

      <AttractionQR lat={lat} lng={lng} name={attraction.name} />

      <p className="text-xs text-muted-foreground text-center">
        Verify timings and fees locally before visiting.
      </p>
    </div>
  );
}
