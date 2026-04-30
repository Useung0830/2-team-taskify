import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getDashboardList } from "@/api/data";
import { LandingContent } from "@/components/LandingContent";
import { MainFooter } from "@/components/layout/MainFooter";
import { MainHeader } from "@/components/layout/MainHeader";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const isLoggedIn = !!token;

  let firstDashboardId = null;

  if (isLoggedIn) {
    try {
      const data = await getDashboardList({
        navigationMethod: "pagination",
        page: 1,
        size: 1,
      });

      if (data && data.dashboards && data.dashboards.length > 0) {
        firstDashboardId = data.dashboards[0].id;
      }
    } catch (error) {
      console.error("Dashboard Fetch Error:", error);
    }
  }

  if (firstDashboardId) {
    redirect(`/dashboard/${firstDashboardId}`);
  }

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <MainHeader isLoggedIn={isLoggedIn} />
      <main className="flex-1 pt-16.75 md:pt-24">
        <LandingContent />
      </main>
      <MainFooter />
    </div>
  );
}
