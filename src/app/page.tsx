import { MainHeader } from "@/components/MainHeader";


export default function Home() {
  /**
   * 1. isLoggedIn = false : 랜딩 페이지와 로그인/회원가입 버튼
   * 2. isLoggedIn = true  : /dashboard/1로 이동
   */
  const isLoggedIn = false;
  const firstDashboardId = 1;

  return (
    <div className="bg-background min-h-screen">
      <MainHeader isLoggedIn={isLoggedIn} firstDashboardId={firstDashboardId} />
      <main></main>
    </div>
  );
}

