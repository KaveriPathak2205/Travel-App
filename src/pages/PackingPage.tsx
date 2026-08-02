import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { usePackingChecklist } from "@/hooks/usePackingChecklist";
import { useShoppingChecklist } from "@/hooks/useShoppingChecklist";
import { packingSections } from "@/data/packing";

export function PackingPage() {
  const { items, toggle, checked, progress, clearSection, checkSection } = usePackingChecklist();
  const shopping = useShoppingChecklist();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Packing Checklist</h1>
        <p className="text-muted-foreground mt-1">Everything you need for temple visits & travel</p>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-base">Packing Progress</CardTitle>
            <span className="text-sm font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="mt-2" />
        </CardHeader>
      </Card>

      {packingSections.map((sectionName) => {
        const sectionItems = items.filter((i) => i.section === sectionName);
        const done = sectionItems.filter((i) => checked[i.id]).length;
        return (
          <Card key={sectionName}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base">{sectionName}</CardTitle>
                <span className="text-xs text-muted-foreground">{done}/{sectionItems.length}</span>
              </div>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" onClick={() => checkSection(sectionName)}>All</Button>
                <Button variant="outline" size="sm" onClick={() => clearSection(sectionName)}>Clear</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {sectionItems.map((item) => (
                <label key={item.id} className="flex items-center gap-3 py-1.5 cursor-pointer">
                  <Checkbox checked={!!checked[item.id]} onChange={() => toggle(item.id)} />
                  <span className="text-sm">{item.label}</span>
                </label>
              ))}
            </CardContent>
          </Card>
        );
      })}

      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-base">Shopping Checklist</CardTitle>
            <span className="text-xs text-muted-foreground">{shopping.done}/{shopping.total}</span>
          </div>
          <Progress value={(shopping.done / shopping.total) * 100} className="mt-2" />
        </CardHeader>
        <CardContent className="space-y-2">
          {shopping.items.map((item) => (
            <label key={item.id} className="flex items-center gap-3 py-1.5 cursor-pointer">
              <Checkbox checked={!!shopping.checked[item.id]} onChange={() => shopping.toggle(item.id)} />
              <span className="text-sm">{item.label}</span>
            </label>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
