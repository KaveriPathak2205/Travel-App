import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/useFavorites";

export function FavoriteButton({ id, className }: { id: string; className?: string }) {
  const { toggle, isFavorite } = useFavorites();
  const fav = isFavorite(id);

  return (
    <button
      onClick={() => toggle(id)}
      className={cn(
        "p-2 rounded-lg hover:bg-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center",
        className
      )}
      aria-label={fav ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart className={cn("h-5 w-5", fav ? "fill-red-500 text-red-500" : "text-muted-foreground")} />
    </button>
  );
}
