"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import icPlus from "@/assets/common/ic-plus.svg";

export function DashboardAddButton() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/new-dashboard")}
      className="flex cursor-pointer items-center justify-between rounded-xl px-3.5 pt-3 pb-2.5"
    >
      <span className="text-base font-bold text-gray-400">대시보드 추가</span>
      <Image src={icPlus} alt="대시보드 추가 아이콘" />
    </div>
  );
}
