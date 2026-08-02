import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { dayPlans } from "@/data/days";
import { useDayProgress } from "@/hooks/useDayProgress";
import { formatINR } from "@/lib/utils";

export function ItineraryPage() {
  const { getDayProgress } = useDayProgress();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">7-Day Itinerary</h1>
        <p className="text-muted-foreground mt-1">Dubai → Somnath → Dwarka → Dubai</p>
      </div>

      <div className="space-y-4">
        {dayPlans.map((day, i) => {
          const progress = getDayProgress(day.day, day.timeline.length);
          return (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/itinerary/${day.day}`}>
                <Card className="hover:bg-accent/50 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <Badge variant="outline" className="mb-2">Day {day.day}</Badge>
                        <CardTitle className="text-lg">{day.title}</CardTitle>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-2">
                      <Progress value={progress} className="flex-1" />
                      <span className="text-xs text-muted-foreground w-8">{progress}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {day.timeline.length} activities · Est. {formatINR(day.estimatedCost.min)}–{formatINR(day.estimatedCost.max)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
