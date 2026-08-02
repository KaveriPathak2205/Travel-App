import { Link } from "react-router-dom";
import { ExternalLink, Navigation } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { mapsNavigateUrl, mapsSearchUrl } from "@/lib/utils";
import type { Coordinates } from "@/types";
import { cn } from "@/lib/utils";

export function MapsButtons({ coordinates }: { coordinates: Coordinates; name?: string }) {
  const { lat, lng } = coordinates;
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={mapsSearchUrl(lat, lng)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: "default" }))}
      >
        <ExternalLink className="h-4 w-4" />
        Open in Maps
      </a>
      <a
        href={mapsNavigateUrl(lat, lng)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        <Navigation className="h-4 w-4" />
        Navigate
      </a>
    </div>
  );
}

export function AttractionLink({ slug, children }: { slug: string; children: React.ReactNode }) {
  return (
    <Link to={`/attractions/${slug}`} className="text-primary hover:underline font-medium">
      {children}
    </Link>
  );
}
