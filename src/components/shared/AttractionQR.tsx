import { QRCodeSVG } from "qrcode.react";
import { mapsNavigateUrl } from "@/lib/utils";

export function AttractionQR({ lat, lng, name }: { lat: number; lng: number; name: string }) {
  const url = mapsNavigateUrl(lat, lng);
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-lg border bg-card">
      <QRCodeSVG value={url} size={100} level="M" />
      <p className="text-xs text-muted-foreground text-center">Scan to navigate to {name}</p>
    </div>
  );
}
