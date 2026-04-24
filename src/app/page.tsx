import { Dropdown } from "@/components/Dropdown";
import { ImageUpload } from "@/components/ImageUpload";
import { MainFooter } from "@/components/layout/MainFooter";
import { MainHeader } from "@/components/layout/MainHeader";

export default function Home() {
  /**
   * 1. isLoggedIn = false : 랜딩 페이지와 로그인/회원가입 버튼
   * 2. isLoggedIn = true  : /dashboard/1로 이동
   */
  const isLoggedIn = false;
  const firstDashboardId = 1;

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <MainHeader isLoggedIn={isLoggedIn} firstDashboardId={firstDashboardId} />
      <main className="flex-1 px-4 pt-[70px] md:pt-[100px]"></main>
      <MainFooter />
    </div>
  );
}
