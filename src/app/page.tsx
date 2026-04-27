"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { MainFooter } from "@/components/layout/MainFooter";
import { MainHeader } from "@/components/layout/MainHeader";
import { LandingContent } from "@/components/LandingContent"; // 새로 만들 컴포넌트

export default function Home() {
  const router = useRouter();
  /**
   * 1. isLoggedIn = false : 랜딩 페이지와 로그인/회원가입 버튼
   * 2. isLoggedIn = true  : /dashboard/1로 이동
   */
  const isLoggedIn = false;
  const firstDashboardId = 1;

  useEffect(() => {
    if (isLoggedIn) {
      router.push(`/dashboard/${firstDashboardId}`);
    }
  }, [isLoggedIn, router, firstDashboardId]);

  if (isLoggedIn) return null;

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <MainHeader isLoggedIn={isLoggedIn} />

      <main className="flex-1 pt-16.75 md:pt-24">
        {/* <LandingContent /> */}
      </main>

      <MainFooter />
    </div>
  );
}
