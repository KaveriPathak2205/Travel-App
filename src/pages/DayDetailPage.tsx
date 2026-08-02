import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, IndianRupee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { TimelineItem } from "@/components/itinerary/TimelineItem";
import { TripMap } from "@/components/map/LazyMap";
import { getDayPlan } from "@/data/days";
import { useDayNotes } from "@/hooks/useDayNotes";
import { formatINR } from "@/lib/utils";

export function DayDetailPage() {
  const { day } = useParams();
  const dayNum = Number(day);
  const plan = getDayPlan(dayNum);
  const { getNote, setNote } = useDayNotes();
  const notes = getNote(dayNum);

  if (!plan) {
    return (
      <div className="text-center py-12">
        <p>Day not found.</p>
        <Link to="/itinerary" className="text-primary hover:underline">Back to itinerary</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/itinerary" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to itinerary
      </Link>

      <div>
        <Badge variant="outline">Day {plan.day}</Badge>
        <h1 className="text-2xl font-bold mt-2">{plan.title}</h1>
        <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
          <IndianRupee className="h-3 w-3" />
          Est. {formatINR(plan.estimatedCost.min)} – {formatINR(plan.estimatedCost.max)}
        </p>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Clock className="h-4 w-4" /> Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-0">
            {plan.timeline.map((entry, i) => (
              <TimelineItem key={`${entry.time}-${entry.title}`} entry={entry} day={dayNum} isLast={i === plan.timeline.length - 1} />
            ))}
          </div>
        </CardContent>
      </Card>

      <TripMap selectedDay={dayNum} showRoute height="350px" />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Dress Code</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{plan.dressCode}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1.5 list-disc list-inside text-muted-foreground">
              {plan.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Add your notes for this day..."
            value={notes}
            onChange={(e) => setNote(dayNum, e.target.value)}
            rows={4}
          />
        </CardContent>
      </Card>
    </div>
  );
}
