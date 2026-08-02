import { motion } from "framer-motion";
import { Clock, IndianRupee, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AttractionLink } from "@/components/attractions/MapsButtons";
import type { TimelineEntry } from "@/types";

export function TimelineItem({
  entry,
  index = 0,
  isLast = false,
}: {
  entry: TimelineEntry;
  index?: number;
  day?: number;
  isLast?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="relative flex gap-4 pb-8 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
          {entry.time}
        </div>
        {!isLast && <div className="w-px flex-1 bg-border mt-2" />}
      </div>
      <div className="flex-1 pt-1 min-w-0">
        <h4 className="font-semibold text-base">
          {entry.attractionSlug ? (
            <AttractionLink slug={entry.attractionSlug}>{entry.title}</AttractionLink>
          ) : (
            entry.title
          )}
        </h4>
        {entry.description && (
          <p className="text-sm text-muted-foreground mt-1">{entry.description}</p>
        )}
        <div className="flex flex-wrap gap-2 mt-2">
          {entry.travelMinutes && (
            <Badge className="bg-secondary text-secondary-foreground border-0">
              <Clock className="h-3 w-3 mr-1" />
              {entry.travelMinutes} min travel
            </Badge>
          )}
          {entry.cost && (
            <Badge className="bg-secondary text-secondary-foreground border-0">
              <IndianRupee className="h-3 w-3 mr-1" />
              {entry.cost}
            </Badge>
          )}
          {entry.attractionSlug && (
            <Badge className="bg-secondary text-secondary-foreground border-0">
              <MapPin className="h-3 w-3 mr-1" />
              Attraction
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  );
}
