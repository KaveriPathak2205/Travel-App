import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useJournal } from "@/hooks/useJournal";

export function JournalPage() {
  const { entries, addEntry, removeEntry } = useJournal();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Travel Journal</h1>
        <p className="text-muted-foreground mt-1">Notes and memories from your pilgrimage</p>
      </div>

      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base">New Entry</CardTitle></CardHeader>
        <CardContent>
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              addEntry(
                Number(fd.get("day")),
                fd.get("title") as string,
                fd.get("content") as string
              );
              e.currentTarget.reset();
            }}
          >
            <div className="flex gap-3">
              <Input name="day" type="number" min={1} max={7} placeholder="Day" required className="w-20" />
              <Input name="title" placeholder="Title" required className="flex-1" />
            </div>
            <Textarea name="content" placeholder="Write your thoughts..." rows={4} required />
            <Button type="submit" size="sm">Save Entry</Button>
          </form>
        </CardContent>
      </Card>

      {entries.length === 0 ? (
        <p className="text-center text-muted-foreground py-8">No journal entries yet. Start writing!</p>
      ) : (
        entries.map((entry) => (
          <Card key={entry.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <p className="text-xs text-muted-foreground">Day {entry.day} · {new Date(entry.createdAt).toLocaleDateString()}</p>
                  <h3 className="font-semibold mt-1">{entry.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 whitespace-pre-wrap">{entry.content}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => removeEntry(entry.id)}>×</Button>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
