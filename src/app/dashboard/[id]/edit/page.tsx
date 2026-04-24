import Image from "next/image";

import icX from "@/assets/ic-x.svg";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";

export default function Edit() {
  return (
    <div className="grid h-screen grid-cols-[minmax(250px,540px)_1fr]">
      {/* 구역 1: 왼쪽 사이드바 (전체 높이 차지) */}
      <aside className="bg-black-900 flex justify-end px-6 pt-22.5">
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

      {/* 오른쪽 섹션: 위아래로 헤더와 메인 콘텐츠를 나눔 */}
      <div className="flex flex-col">
        {/* 구역 2: 상단 헤더 (높이 고정) */}
        <header className="border-black-700 flex h-18 border-b-2" />

        {/* 구역 3: 메인 콘텐츠 (남은 공간 전체 차지) */}
        <main className="flex-1">
          <div className="px-12.5 text-zinc-400">
            <h1 className="mt-7.5 mb-3.5 text-3xl font-bold text-gray-100">
              대시보드 편집
            </h1>
          </div>
        </main>
      </div>
    </div>
  );
}
