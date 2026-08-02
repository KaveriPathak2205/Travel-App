import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import { mapLocations, mapCenter, mapTypeColors, getDayRoute } from "@/data/mapLocations";
import type { MapLocationType } from "@/types";
import { cn } from "@/lib/utils";

const iconCache: Record<string, L.DivIcon> = {};

function createIcon(type: string, color: string) {
  if (!iconCache[type]) {
    iconCache[type] = L.divIcon({
      className: "custom-marker",
      html: `<div style="background:${color};width:14px;height:14px;border-radius:50%;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,.4)"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });
  }
  return iconCache[type];
}

function FitBounds({ points }: { points: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (points.length > 0) {
      map.fitBounds(L.latLngBounds(points), { padding: [40, 40], maxZoom: 12 });
    }
  }, [map, points]);
  return null;
}

const filters: { type: MapLocationType | "all"; label: string }[] = [
  { type: "all", label: "All" },
  { type: "attraction", label: "Attractions" },
  { type: "food", label: "Food" },
  { type: "shopping", label: "Shopping" },
  { type: "hotel", label: "Hotels" },
  { type: "transport", label: "Transport" },
];

interface TripMapProps {
  selectedDay?: number;
  highlightId?: string;
  className?: string;
  showRoute?: boolean;
  height?: string;
}

export function TripMap({
  selectedDay,
  highlightId,
  className,
  showRoute = false,
  height = "400px",
}: TripMapProps) {
  const [activeFilter, setActiveFilter] = useState<MapLocationType | "all">("all");

  const filtered = useMemo(() => {
    let locs = mapLocations;
    if (activeFilter !== "all") locs = locs.filter((l) => l.type === activeFilter);
    if (selectedDay) locs = locs.filter((l) => !l.dayNumber || l.dayNumber === selectedDay);
    return locs;
  }, [activeFilter, selectedDay]);

  const routePoints = selectedDay && showRoute ? getDayRoute(selectedDay) : [];
  const boundsPoints = filtered.map(
    (l) => [l.coordinates.lat, l.coordinates.lng] as [number, number]
  );

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex flex-wrap gap-2">
        {filters.map(({ type, label }) => (
          <button
            key={type}
            onClick={() => setActiveFilter(type)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors min-h-[36px]",
              activeFilter === type
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:bg-accent"
            )}
          >
            {type !== "all" && (
              <span
                className="inline-block w-2 h-2 rounded-full mr-1.5"
                style={{ background: mapTypeColors[type] }}
              />
            )}
            {label}
          </button>
        ))}
      </div>
      <div
        className="rounded-xl overflow-hidden border shadow-sm z-0"
        style={{ height }}
      >
        <MapContainer
          center={[mapCenter.lat, mapCenter.lng]}
          zoom={8}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitBounds points={boundsPoints.length ? boundsPoints : [[mapCenter.lat, mapCenter.lng]]} />
          {routePoints.length > 1 && (
            <Polyline
              positions={routePoints}
              pathOptions={{ color: "#ea580c", weight: 3, dashArray: "8 8" }}
            />
          )}
          {filtered.map((loc) => (
            <Marker
              key={loc.id}
              position={[loc.coordinates.lat, loc.coordinates.lng]}
              icon={createIcon(loc.type, mapTypeColors[loc.type])}
              opacity={highlightId && highlightId !== loc.id ? 0.5 : 1}
            >
              <Popup>
                <div className="text-sm space-y-1 min-w-[160px]">
                  <p className="font-semibold">{loc.name}</p>
                  <p className="text-xs text-gray-600 capitalize">{loc.type} · {loc.city}</p>
                  {loc.description && <p className="text-xs">{loc.description}</p>}
                  {loc.link && (
                    <Link to={loc.link} className="text-xs text-orange-600 hover:underline block mt-1">
                      View details →
                    </Link>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <p className="text-xs text-muted-foreground">
        {filtered.length} locations shown
        {selectedDay ? ` · Day ${selectedDay} route` : ""}
      </p>
    </div>
  );
}

export function AttractionMiniMap({
  lat,
  lng,
  name,
}: {
  lat: number;
  lng: number;
  name: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden border h-[220px]">
      <MapContainer center={[lat, lng]} zoom={15} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
