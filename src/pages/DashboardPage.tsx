import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Cloud,
  DollarSign,
  Landmark,
  Map,
  Phone,
  Plane,
  UtensilsCrossed,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { tripInfo } from "@/data/trip";
import { emergencyContacts } from "@/data/contacts";
import { dayPlans } from "@/data/days";
import { useTripDate } from "@/hooks/useTripDate";
import { useBudget } from "@/hooks/useBudget";
import { useDayProgress } from "@/hooks/useDayProgress";
import { getCountdown, getTripDayNumber, formatINR, formatAED } from "@/lib/utils";

const quickNav = [
  { to: "/itinerary", icon: CalendarDays, label: "Itinerary", color: "text-orange-600" },
  { to: "/attractions", icon: Landmark, label: "Attractions", color: "text-amber-600" },
  { to: "/map", icon: Map, label: "Map", color: "text-blue-600" },
  { to: "/food", icon: UtensilsCrossed, label: "Food Guide", color: "text-green-600" },
  { to: "/travel", icon: Plane, label: "Travel", color: "text-purple-600" },
  { to: "/budget", icon: DollarSign, label: "Budget", color: "text-emerald-600" },
];

export function DashboardPage() {
  const { startDate, setStartDate } = useTripDate();
  const countdown = getCountdown(startDate);
  const currentDay = getTripDayNumber(startDate);
  const { totals, displayCurrency } = useBudget();
  const { toggle, isChecked, getDayProgress } = useDayProgress();

  const todayPlan = currentDay ? dayPlans.find((d) => d.day === currentDay) : null;
  const todayProgress = currentDay
    ? getDayProgress(currentDay, todayPlan?.timeline.length ?? 0)
    : 0;

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl md:text-3xl font-bold">{tripInfo.title}</h1>
        <p className="text-muted-foreground mt-1">{tripInfo.subtitle} · From {tripInfo.origin}</p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Trip Countdown</CardTitle>
          </CardHeader>
          <CardContent>
            {countdown.isPast ? (
              <p className="text-2xl font-bold text-primary">Trip in progress or completed!</p>
            ) : (
              <div className="flex gap-4">
                {[
                  { v: countdown.days, l: "Days" },
                  { v: countdown.hours, l: "Hours" },
                  { v: countdown.minutes, l: "Min" },
                ].map(({ v, l }) => (
                  <div key={l} className="text-center">
                    <p className="text-3xl font-bold text-primary">{v}</p>
                    <p className="text-xs text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>
            )}
            <label className="block mt-4 text-xs text-muted-foreground">
              Trip start date
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1 w-full rounded-md border border-input bg-background px-2 py-1.5 text-sm"
              />
            </label>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Cloud className="h-4 w-4" /> Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium">Gujarat Coast · September</p>
            <p className="text-2xl font-bold mt-1">28–35°C</p>
            <p className="text-xs text-muted-foreground mt-2">
              Humid, occasional showers. Live API integration coming soon.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Budget Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Estimated total</p>
            <p className="text-xl font-bold">
              {displayCurrency !== "AED" && (
                <span>{formatINR(totals.minInr)} – {formatINR(totals.maxInr)}</span>
              )}
              {displayCurrency === "both" && " · "}
              {displayCurrency !== "INR" && (
                <span>{formatAED(totals.minAed)} – {formatAED(totals.maxAed)}</span>
              )}
            </p>
            {totals.actualInr > 0 && (
              <p className="text-sm text-primary mt-1">Spent: {formatINR(totals.actualInr)}</p>
            )}
            <Link to="/budget" className="text-xs text-primary hover:underline mt-2 inline-block">
              Open budget planner →
            </Link>
          </CardContent>
        </Card>
      </div>

      {todayPlan && (
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Day {currentDay} Checklist</CardTitle>
              <span className="text-sm text-muted-foreground">{todayProgress}%</span>
            </div>
            <Progress value={todayProgress} className="mt-2" />
          </CardHeader>
          <CardContent className="space-y-2 max-h-64 overflow-y-auto">
            {todayPlan.timeline.map((item) => {
              const key = `${item.time}-${item.title}`;
              return (
                <label key={key} className="flex items-start gap-3 py-1.5 cursor-pointer">
                  <Checkbox
                    checked={isChecked(currentDay!, key)}
                    onChange={() => toggle(currentDay!, key)}
                    className="mt-0.5"
                  />
                  <div>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </label>
              );
            })}
          </CardContent>
        </Card>
      )}

      <div>
        <h2 className="text-lg font-semibold mb-3">Quick Navigation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {quickNav.map(({ to, icon: Icon, label, color }) => (
            <Link key={to} to={to}>
              <Card className="hover:bg-accent transition-colors h-full">
                <CardContent className="flex items-center gap-3 p-4">
                  <Icon className={`h-6 w-6 ${color}`} />
                  <span className="font-medium text-sm">{label}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Phone className="h-4 w-4" /> Emergency Contacts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-2">
            {emergencyContacts.map((c) => (
              <a
                key={c.number}
                href={`tel:${c.number}`}
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors"
              >
                <div>
                  <p className="font-medium text-sm">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.description}</p>
                </div>
                <span className="text-primary font-bold">{c.number}</span>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
