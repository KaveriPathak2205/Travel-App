import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  gujaratiPhrases,
  localCustoms,
  templeEtiquette,
  safetyTips,
  weatherGuide,
} from "@/data/travelGuide";

export function GuidePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Travel Guide</h1>
        <p className="text-muted-foreground mt-1">Gujarati phrases, customs & temple etiquette</p>
      </div>

      <Tabs defaultValue="phrases">
        <TabsList className="flex-wrap h-auto">
          <TabsTrigger value="phrases">Phrases</TabsTrigger>
          <TabsTrigger value="customs">Customs</TabsTrigger>
          <TabsTrigger value="etiquette">Temple Etiquette</TabsTrigger>
          <TabsTrigger value="safety">Safety</TabsTrigger>
          <TabsTrigger value="weather">Weather</TabsTrigger>
        </TabsList>

        <TabsContent value="phrases" className="mt-4">
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-base">Gujarati Phrases</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {gujaratiPhrases.map((p) => (
                <div key={p.gujarati} className="p-3 rounded-lg border">
                  <p className="text-lg font-medium">{p.gujarati}</p>
                  <p className="text-sm text-primary">{p.transliteration}</p>
                  <p className="text-sm text-muted-foreground">{p.english}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customs" className="mt-4">
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-base">Local Customs</CardTitle></CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                {localCustoms.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="etiquette" className="mt-4">
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-base">Temple Etiquette</CardTitle></CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                {templeEtiquette.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="safety" className="mt-4">
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-base">Safety Tips</CardTitle></CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                {safetyTips.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weather" className="mt-4">
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-base">Weather Guide</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Season:</strong> {weatherGuide.season}</p>
              <p><strong>Temperature:</strong> {weatherGuide.temperature}</p>
              <p><strong>Humidity:</strong> {weatherGuide.humidity}</p>
              <p><strong>Rainfall:</strong> {weatherGuide.rainfall}</p>
              <p><strong>Packing:</strong> {weatherGuide.packing}</p>
              <p className="text-muted-foreground mt-2">{weatherGuide.note}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
