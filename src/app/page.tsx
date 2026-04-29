import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { MainFooter } from "@/components/layout/MainFooter";
import { MainHeader } from "@/components/layout/MainHeader";
import { LandingContent } from "@/components/LandingContent";
// 이미 정의된 대시보드 목록 호출 함수를 가져옵니다.
import { getDashboardList } from "@/api/data";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const isLoggedIn = !!token;

  if (isLoggedIn) {
    try {
      // 1. data 파일에 정의된 getDashboardList 함수 사용
      // Taskify API의 pagination 방식에 맞춰 첫 번째 데이터 1개만 요청합니다.
      const data = await getDashboardList({
        navigationMethod: "pagination",
        page: 1,
        size: 1,
      });

      // 2. 응답받은 대시보드 배열에 데이터가 있다면 첫 번째 ID로 리다이렉트
      if (data && data.dashboards && data.dashboards.length > 0) {
        const firstDashboardId = data.dashboards[0].id;
        redirect(`/dashboard/${firstDashboardId}`);
      }
    } catch (error) {
      // 토큰이 만료되었거나 서버 에러 시 로그만 찍고 랜딩 페이지 노출
      console.error("Dashboard Fetch Error:", error);
    }
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
