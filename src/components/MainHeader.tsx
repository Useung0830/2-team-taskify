"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.svg";

interface MainHeaderProps {
    isLoggedIn?: boolean;
    firstDashboardId?: number;
}

export default function MainHeader({
  isLoggedIn = false,
  firstDashboardId = 1,
}: MainHeaderProps) {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push(`/dashboard/${firstDashboardId}`);
    }
  }, [isLoggedIn, firstDashboardId, router]);

  if (isLoggedIn) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-[67px] w-full items-center justify-between border-b-2 border-black-700 bg-background px-[14px] py-5 font-pretendard opacity-100 md:h-24 md:px-[30px] md:py-6 lg:px-30">
      <Link href="/" className="flex items-center transition hover:opacity-80">
        <div className="relative h-[36.25px] w-35 md:h-12 md:w-[186px]">
          <Image
            src={logoImg}
            alt="Taskify로고"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      <nav className="flex items-center h-[39px]">
        <div className="flex gap-3 md:gap-[14px]">
          <Link
            href="/login"
            className="text-gray-300 hover:text-white transition text-base px-[9px] py-[9px]"
          >
            로그인
          </Link>
          <Link
            href="/signup"
            className="text-gray-300 hover:text-white transition text-base px-[9px] py-[9px]"
          >
            회원가입
          </Link>
        </div>
      </nav>
    </header>
  );
}