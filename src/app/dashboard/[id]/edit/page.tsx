"use client";
import Image from "next/image";
import { useState } from "react";

import icSideMenu from "@/assets/ic-sidemenu.svg";
import icX from "@/assets/ic-x.svg";
import { DashboardColorChoiceList } from "@/components/DashboardColorChoiceList";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";

export default function Edit() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // md 이상에서는 기존 그리드 유지, md 미만에서는 단일 컬럼
    <div className="grid h-screen md:grid-cols-[minmax(250px,540px)_1fr]">
      {/* 2. 구역 1: 왼쪽 사이드바 */}
      <aside
        className={`bg-black-900 flex px-6 pt-22.5 max-md:fixed max-md:top-0 max-md:left-0 max-md:z-50 max-md:h-full max-md:w-62.5 max-md:justify-start ${isSidebarOpen ? "max-md:block" : "max-md:hidden"} md:relative md:flex md:justify-end`}
      >
        {/* 모바일에서 닫기 버튼 (선택 사항: icX 재활용) */}

        <div className="flex w-full max-w-69 min-w-37.75 flex-col text-lg text-white">
          <div className="group relative overflow-hidden rounded-2xl px-3.5 py-4">
            <span className="relative z-10">대시보드 편집</span>
            <div className="absolute inset-0 z-0 m-auto h-0 w-0 bg-[#2C2B30] opacity-0 transition-all duration-500 ease-out group-hover:h-[300%] group-hover:w-[300%] group-hover:opacity-100" />
          </div>
          <div className="group relative overflow-hidden rounded-2xl px-3.5 py-4">
            <span className="relative z-10">맴버 관리</span>
            <div className="absolute inset-0 z-0 m-auto h-0 w-0 bg-[#2C2B30] opacity-0 transition-all duration-500 ease-out group-hover:h-[300%] group-hover:w-[300%] group-hover:opacity-100" />
          </div>
          <div className="bg-modal-background mx-4 h-px" />
          <div className="group relative flex items-center justify-between overflow-hidden rounded-2xl px-3.5 py-4 hover:bg-[#2C2B30]">
            <span className="text-red relative z-10">대시보드 삭제하기</span>
            <Image
              src={icX}
              height={24}
              width={24}
              alt="삭제 아이콘"
              className="z-10"
            />
            <div className="absolute inset-0 z-0 m-auto h-0 w-0 bg-[#2C2B30] opacity-0 transition-all duration-500 ease-out group-hover:h-[300%] group-hover:w-[300%] group-hover:opacity-100" />
          </div>
        </div>
      </aside>

      {/* 오른쪽 섹션 */}
      <div className="flex flex-col">
        {/* 구역 2: 상단 헤더 */}
        <header className="border-black-700 flex h-18 items-center border-b-2 pl-5">
          {/* 3. 사이드 메뉴 토글 버튼 */}
          <button onClick={() => setIsSidebarOpen(true)} className="md:hidden">
            <Image src={icSideMenu} alt="사이드 메뉴" height={20} width={20} />
          </button>
        </header>

        {/* 구역 3: 메인 콘텐츠 */}
        <main className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-7.5 px-12.5 text-zinc-400">
            <h1 className="mt-7.5 mb-3.5 text-3xl font-bold text-gray-100">
              대시보드 편집
            </h1>
            <Input>
              <Label htmlFor="name">이름</Label>
              <Input.Wrapper>
                <Input.Field id="name" placeholder="이름을 입력해주세요" />
              </Input.Wrapper>
            </Input>
            <div className="min-w-83.75">
              <DashboardColorChoiceList size={"edit"} />
            </div>
          </div>
        </main>
      </div>

      {/* 4. 배경 오버레이 (모바일에서 메뉴 열렸을 때만 보임) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
