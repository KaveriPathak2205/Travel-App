import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { tripInfo } from "@/data/trip";
import { airports, ferryInfo, offlineTips, aartiTimings } from "@/data/travelGuide";
import { emergencyContacts } from "@/data/contacts";
import { MapsButtons } from "@/components/attractions/MapsButtons";

export function TravelPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Travel Planner</h1>
        <p className="text-muted-foreground mt-1">{tripInfo.route}</p>
      </div>

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base">Flights</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {tripInfo.flights.map((f) => (
            <div key={f.leg} className="p-3 rounded-lg border">
              <Badge className="mb-2">{f.leg}</Badge>
              <p className="text-sm">{f.details}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base">Ground Transport</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {tripInfo.transport.map((t) => (
            <div key={t.route} className="flex justify-between items-start p-3 rounded-lg border gap-4">
              <div>
                <p className="font-medium text-sm">{t.route}</p>
                <p className="text-xs text-muted-foreground">{t.duration}</p>
              </div>
              <Badge variant="outline">{t.cost}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base">Airports</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {airports.map((a) => (
            <div key={a.name} className="p-3 rounded-lg border space-y-2">
              <p className="font-medium">{a.name}</p>
              <p className="text-sm text-muted-foreground">{a.role} · {a.distance}</p>
              <MapsButtons coordinates={a.coordinates} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base">Bet Dwarka Ferry</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p><strong>Route:</strong> {ferryInfo.route}</p>
          <p><strong>Duration:</strong> {ferryInfo.duration}</p>
          <p><strong>Cost:</strong> {ferryInfo.cost}</p>
          <p><strong>Timings:</strong> {ferryInfo.timings}</p>
          <ul className="list-disc list-inside text-muted-foreground mt-2">
            {ferryInfo.tips.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <MapsButtons coordinates={ferryInfo.coordinates} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base">Aarti Timings</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {aartiTimings.map((a) => (
            <div key={a.temple} className="flex justify-between items-center p-3 rounded-lg border">
              <p className="font-medium text-sm">{a.temple}</p>
              <div className="flex gap-1 flex-wrap justify-end">
                {a.timings.map((t) => <Badge key={t} variant="outline">{t}</Badge>)}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base">Offline Travel Tips</CardTitle></CardHeader>
        <CardContent>
          <ul className="text-sm space-y-1.5 list-disc list-inside text-muted-foreground">
            {offlineTips.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base">Emergency Numbers</CardTitle></CardHeader>
        <CardContent className="grid gap-2 sm:grid-cols-2">
          {emergencyContacts.map((c) => (
            <a key={c.number} href={`tel:${c.number}`} className="p-3 rounded-lg border hover:bg-accent flex justify-between">
              <span className="text-sm">{c.name}</span>
              <span className="font-bold text-primary">{c.number}</span>
            </a>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
