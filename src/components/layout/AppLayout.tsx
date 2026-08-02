import {
  Backpack,
  BookOpen,
  CalendarDays,
  Camera,
  DollarSign,
  Heart,
  Home,
  Landmark,
  Map,
  Moon,
  NotebookPen,
  Plane,
  Sun,
  UtensilsCrossed,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { tripInfo } from "@/data/trip";

const navItems = [
  { to: "/", icon: Home, label: "Dashboard" },
  { to: "/itinerary", icon: CalendarDays, label: "Itinerary" },
  { to: "/attractions", icon: Landmark, label: "Attractions" },
  { to: "/map", icon: Map, label: "Map" },
  { to: "/food", icon: UtensilsCrossed, label: "Food" },
  { to: "/travel", icon: Plane, label: "Travel" },
  { to: "/budget", icon: DollarSign, label: "Budget" },
  { to: "/packing", icon: Backpack, label: "Packing" },
  { to: "/guide", icon: BookOpen, label: "Guide" },
  { to: "/photo-spots", icon: Camera, label: "Photo Spots" },
  { to: "/favorites", icon: Heart, label: "Favorites" },
  { to: "/journal", icon: NotebookPen, label: "Journal" },
];

const bottomNavItems = navItems.slice(0, 5);

function NavItem({ to, icon: Icon, label }: { to: string; icon: typeof Home; label: string }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors min-h-[44px]",
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        )
      }
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </NavLink>
  );
}

export function Sidebar() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border-r bg-card z-40">
      <div className="flex flex-col flex-1 gap-1 p-4 overflow-y-auto">
        <div className="mb-4 px-3">
          <h1 className="text-lg font-bold text-primary">{tripInfo.title}</h1>
          <p className="text-xs text-muted-foreground mt-1">{tripInfo.subtitle}</p>
        </div>
        <nav className="flex flex-col gap-0.5 flex-1">
          {navItems.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground min-h-[44px] mt-4 shrink-0"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </aside>
  );
}

export function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="flex items-center justify-around px-1 py-1">
        {bottomNavItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-0.5 px-1.5 py-2 rounded-lg min-w-[52px] min-h-[44px] justify-center text-[10px] font-medium transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )
            }
          >
            <Icon className="h-5 w-5" />
            <span>{label.split(" ")[0]}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export function MobileHeader() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <header className="md:hidden sticky top-0 z-40 border-b bg-background/95 backdrop-blur px-4 py-3 flex items-center justify-between">
      <div>
        <h1 className="text-base font-bold text-primary">{tripInfo.title}</h1>
        <p className="text-xs text-muted-foreground">{tripInfo.origin} → Gujarat</p>
      </div>
      <div className="flex items-center gap-1">
        <NavLink to="/map" className="p-2 rounded-lg hover:bg-accent min-h-[44px] min-w-[44px] flex items-center justify-center">
          <Map className="h-5 w-5" />
        </NavLink>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-accent min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}
