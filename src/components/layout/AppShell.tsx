import { Outlet } from "react-router-dom";
import { BottomNav, MobileHeader, Sidebar } from "./AppLayout";
import { PageTransition } from "./PageTransition";

export function AppShell() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileHeader />
      <main className="md:pl-64 pb-20 md:pb-8">
        <div className="max-w-5xl mx-auto px-4 py-6 md:py-8">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
