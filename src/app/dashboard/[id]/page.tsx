"use client";

import { DashboardHeader } from "@/components/layout/DashboardHeader";

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

  return (
    <div className="bg-black-900 min-h-screen">
      <DashboardHeader
        members={mockDashboardData.members}
        totalCount={mockDashboardData.totalCount}
      />

      <main className="p-8"></main>
    </div>
  );
}
