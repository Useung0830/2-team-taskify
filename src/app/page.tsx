import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { MainFooter } from "@/components/layout/MainFooter";
import { LandingContent } from "@/components/LandingContent";
import { getDashboardList } from "@/api/data";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const isLoggedIn = !!token;

  let firstDashboardId = null;

  // 임시 데이터 (Header 테스트용)
  const MOCK_MEMBERS = [
    { id: 1, nickname: "김철수", profileImageUrl: null },
    { id: 2, nickname: "이지원", profileImageUrl: null },
    { id: 3, nickname: "박영희", profileImageUrl: null },
    { id: 4, nickname: "James", profileImageUrl: null },
    { id: 5, nickname: "최민수", profileImageUrl: null },
    { id: 6, nickname: "홍길동", profileImageUrl: null },
    { id: 7, nickname: "나보너", profileImageUrl: null },
  ];
  const MOCK_TOTAL_COUNT = 15;

  if (isLoggedIn) {
    try {
      const data = await getDashboardList({
        navigationMethod: "pagination",
        page: 1,
        size: 1,
      });

      if (data?.dashboards?.length > 0) {
        firstDashboardId = data.dashboards[0].id;
      }
    } catch (error) {
      console.error("Dashboard Fetch Error:", error);
    }
  }

  // 로그인 상태고 대시보드가 있다면 해당 대시보드로 이동
  if (firstDashboardId) {
    redirect(`/dashboard/${firstDashboardId}`);
  }

  return (
    <div className="bg-background flex min-h-screen flex-col">
      {/* 1. 대시보드 헤더 테스트 (임시 데이터 주입) */}
      <DashboardHeader members={MOCK_MEMBERS} totalCount={MOCK_TOTAL_COUNT} />

      {/* 2. 헤더가 fixed이므로 상단 여백 확보 (헤더 높이에 맞춰 pt 조절) */}
      <main className="flex-1 pt-12.5 md:pt-15">
        <LandingContent />
      </main>

      <MainFooter />
    </div>
  );
}
