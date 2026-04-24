/**
 * feature/TASKIFY2-40/delete-alert-modal|MERGING 해결
 */

"use client";

import Image from "next/image";
import { useState } from "react";

import { DashboardHeader } from "@/feature/dashboard/DashboardHeader";

import colorchip from "./assets/ic-colorchips.svg";
import { ColumnList } from "./components/ColumnList";
import { DUMMY_COLUMNS } from "./mock";

export default function DashboardPage() {
  // 1. 백엔드에서 받아올 데이터 예시 (나중에 API 연결 대상)
  const mockDashboardData = {
    members: [
      { id: 1, nickname: "우기", profileImageUrl: null },
      { id: 2, nickname: "수지", profileImageUrl: null },
      { id: 3, nickname: "예나", profileImageUrl: null },
      { id: 4, nickname: "준혁", profileImageUrl: null },
      { id: 5, nickname: "재민", profileImageUrl: null },
      { id: 6, nickname: "동욱", profileImageUrl: null },
      { id: 7, nickname: "동dl", profileImageUrl: null },
    ],
    totalCount: 7,
  };

  const data = DUMMY_COLUMNS;
  const [activeColumnId, setActiveColumnId] = useState(data[0]?.id);
  const activeColumn = data.find((col) => col.id === activeColumnId);

  const handleTabSwitch = (id: number) => {
    setActiveColumnId(id);
  };

  return (
    <div className="bg-black-900 min-h-screen">
      <DashboardHeader
        members={mockDashboardData.members}
        totalCount={mockDashboardData.totalCount}
      />
      <main className="p-8 px-5 text-gray-100 lg:px-12.5">
        <div className="flex items-center gap-1 pt-6 pb-3.5 md:mx-10 lg:mx-0">
          <Image src={colorchip} alt="color chip" />
          <h1 className="text-2xl font-bold">포트폴리오</h1>
        </div>

        <div className="flex w-full gap-4 py-6 md:mx-10 lg:hidden">
          {data.map((column) => (
            <button
              key={column.id}
              onClick={() => handleTabSwitch(column.id)}
              className={`min-h-8 rounded-4xl border border-gray-600 px-4 transition-colors ${
                activeColumnId === column.id
                  ? "bg-green-500 text-white"
                  : "bg-gray-900"
              }`}
            >
              {column?.title}
            </button>
          ))}
        </div>

        {/* 컬럼 리스트 */}
        <div className="pt-2.5 lg:hidden">
          <ColumnList column={activeColumn!} />
        </div>
        <div className="hidden gap-15 lg:flex">
          {data.map((column) => (
            <ColumnList key={column.id} column={column} />
          ))}
        </div>
      </main>
    </div>
  );
}
