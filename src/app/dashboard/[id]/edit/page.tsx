"use client";
import Image from "next/image";
import { useState } from "react";

import icSideMenu from "@/assets/ic-sidemenu.svg";
import icTrash from "@/assets/ic-trash.svg";

import { DashboardEdit } from "../_components/DashboardEdit";
import { DashboardEditHeader } from "../_components/DashboardEditHeader";
import { EditSideButton } from "../_components/EditSideButton";
import { MemberManagement } from "../_components/MemberManagement";

type Section = "edit" | "members" | "invites";

export default function Edit() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("edit");

  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
    setIsSidebarOpen(false);
  };

  return (
    // md 이상에서는 기존 그리드 유지, md 미만에서는 단일 컬럼
    <div className="grid h-screen md:grid-cols-[minmax(250px,540px)_1fr]">
      {/* 2. 구역 1: 왼쪽 사이드바 */}
      <aside
        className={`bg-black-900 flex px-6 pt-22.5 max-md:fixed max-md:top-0 max-md:left-0 max-md:z-50 max-md:h-full max-md:w-62.5 max-md:justify-start ${isSidebarOpen ? "max-md:block" : "max-md:hidden"} md:relative md:flex md:justify-end`}
      >
        {/* 모바일에서 닫기 버튼 (선택 사항: icX 재활용) */}

        <div className="flex w-full max-w-69 min-w-37.75 flex-col gap-2 text-lg text-white">
          <EditSideButton
            isActive={activeSection === "edit"}
            handleClick={() => handleSectionClick("edit")}
          >
            대시보드 편집
          </EditSideButton>

          <EditSideButton
            isActive={activeSection === "members"}
            handleClick={() => handleSectionClick("members")}
          >
            멤버 관리
          </EditSideButton>

          <div className="bg-modal-background mx-4 my-1 h-px" />

          {/* 삭제 버튼: icon과 isDelete 속성 추가 */}
          <EditSideButton isDelete icon={icTrash}>
            대시보드 삭제하기
          </EditSideButton>
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
          <div className="flex max-w-185 flex-col gap-7.5 px-12.5 text-zinc-400 max-md:px-5">
            <DashboardEditHeader
              title={activeSection === "edit" ? "대시보드 편집" : "멤버 관리"}
            />
            {activeSection === "edit" ? (
              <DashboardEdit />
            ) : (
              <MemberManagement />
            )}
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
