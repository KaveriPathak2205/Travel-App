import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { DashboardPage } from "@/pages/DashboardPage";
import { ItineraryPage } from "@/pages/ItineraryPage";
import { DayDetailPage } from "@/pages/DayDetailPage";
import { AttractionsPage } from "@/pages/AttractionsPage";
import { AttractionDetailPage } from "@/pages/AttractionDetailPage";
import { MapPage } from "@/pages/MapPage";
import { FoodPage } from "@/pages/FoodPage";
import { TravelPage } from "@/pages/TravelPage";
import { BudgetPage } from "@/pages/BudgetPage";
import { PackingPage } from "@/pages/PackingPage";
import { GuidePage } from "@/pages/GuidePage";
import { PhotoSpotsPage } from "@/pages/PhotoSpotsPage";
import { FavoritesPage } from "@/pages/FavoritesPage";
import { JournalPage } from "@/pages/JournalPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<DashboardPage />} />
          <Route path="itinerary" element={<ItineraryPage />} />
          <Route path="itinerary/:day" element={<DayDetailPage />} />
          <Route path="attractions" element={<AttractionsPage />} />
          <Route path="attractions/:slug" element={<AttractionDetailPage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="food" element={<FoodPage />} />
          <Route path="travel" element={<TravelPage />} />
          <Route path="budget" element={<BudgetPage />} />
          <Route path="packing" element={<PackingPage />} />
          <Route path="guide" element={<GuidePage />} />
          <Route path="photo-spots" element={<PhotoSpotsPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="journal" element={<JournalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
