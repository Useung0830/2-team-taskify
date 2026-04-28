import { redirect } from "next/navigation";
import { MainFooter } from "@/components/layout/MainFooter";
import { MainHeader } from "@/components/layout/MainHeader";
import { LandingContent } from "@/components/LandingContent";

export default function Home() {
  const isLoggedIn = false;
  const firstDashboardId = 1;

  if (isLoggedIn) {
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
