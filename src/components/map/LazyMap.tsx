import { lazy, Suspense, type ComponentProps } from "react";

const TripMapInner = lazy(() =>
  import("./TripMap").then((m) => ({ default: m.TripMap }))
);

const AttractionMiniMapInner = lazy(() =>
  import("./TripMap").then((m) => ({ default: m.AttractionMiniMap }))
);

function MapSkeleton({ height = "400px" }: { height?: string }) {
  return (
    <div
      className="rounded-xl border bg-muted animate-pulse flex items-center justify-center text-muted-foreground text-sm"
      style={{ height }}
    >
      Loading map...
    </div>
  );
}

export function TripMap(props: ComponentProps<typeof TripMapInner>) {
  return (
    <Suspense fallback={<MapSkeleton height={props.height} />}>
      <TripMapInner {...props} />
    </Suspense>
  );
}

export function AttractionMiniMap(props: ComponentProps<typeof AttractionMiniMapInner>) {
  return (
    <Suspense fallback={<MapSkeleton height="220px" />}>
      <AttractionMiniMapInner {...props} />
    </Suspense>
  );
}
