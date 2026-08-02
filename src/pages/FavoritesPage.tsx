import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useFavorites } from "@/hooks/useFavorites";
import { attractions } from "@/data/attractions";
import { restaurants } from "@/data/food";

export function FavoritesPage() {
  const { favorites } = useFavorites();

  const favAttractions = attractions.filter((a) => favorites.includes(a.slug));
  const favRestaurants = restaurants.filter((r) => favorites.includes(`food-${r.id}`));

  if (favorites.length === 0) {
    return (
      <div className="text-center py-16 space-y-3">
        <Heart className="h-12 w-12 mx-auto text-muted-foreground" />
        <h1 className="text-xl font-bold">No Favorites Yet</h1>
        <p className="text-muted-foreground">Tap the heart icon on attractions or restaurants to save them here.</p>
        <Link to="/attractions" className="text-primary hover:underline text-sm">Browse attractions</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Favorites</h1>
        <p className="text-muted-foreground mt-1">{favorites.length} saved items</p>
      </div>

      {favAttractions.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Attractions</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {favAttractions.map((a) => (
              <Link key={a.slug} to={`/attractions/${a.slug}`}>
                <Card className="hover:bg-accent/50 transition-colors">
                  <CardContent className="p-4">
                    <p className="font-medium">{a.name}</p>
                    <p className="text-sm text-muted-foreground">{a.city}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {favRestaurants.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Restaurants</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {favRestaurants.map((r) => (
              <Link key={r.id} to="/food">
                <Card className="hover:bg-accent/50 transition-colors">
                  <CardContent className="p-4">
                    <p className="font-medium">{r.name}</p>
                    <p className="text-sm text-muted-foreground">{r.cuisine} · {r.city}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
