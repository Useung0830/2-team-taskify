import { MainHeader } from "@/components/layout/MainHeader";
import { MainFooter } from "@/components/layout/MainFooter";
import { ImageUpload } from "@/components/ImageUpload"
import { Dropdown } from "@/components/Dropdown";

export default function Home() {
  /**
   * 1. isLoggedIn = false : 랜딩 페이지와 로그인/회원가입 버튼
   * 2. isLoggedIn = true  : /dashboard/1로 이동
   */
  const isLoggedIn = false;
  const firstDashboardId = 1;
const categoryOptions = ["개발", "디자인", "기획", "마케팅"];
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <MainHeader
        isLoggedIn={isLoggedIn}
        firstDashboardId={firstDashboardId}
      />
      <main className="flex-1"></main>
      <ImageUpload />
      <Dropdown label="카테고리" 
          options={categoryOptions}/>
      <MainFooter />
    </div>
  );
}

