"use client";

import { useRouter } from "next/navigation";

import { DashboardColorChoiceList } from "@/components/DashboardColorChoiceList";
import { ModalHeader } from "@/components/ModalHeader";

export default function NewDashboard() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return (
    <div className="border-gray-stroke flex flex-col gap-4 rounded-3xl lg:gap-5">
      <ModalHeader onClose={handleCloseModal}>새 대시보드 생성</ModalHeader>
      <input
        className="bg-black-800 h-13.5 rounded-[14px] border border-gray-700 px-5 py-1.5 text-gray-400"
        placeholder="새로운 대시보드"
      />
      <DashboardColorChoiceList
        size={"sm"}
        responsiveSize="md:w-[540px] md:h-[60px]"
      />
      <div className="flex gap-5">
        <button className="h-9.5 w-full rounded-[100px] bg-gray-900 px-7.5 py-1.5 md:h-12">
          취소
        </button>
        <button className="h-9.5 w-full rounded-[100px] bg-green-500 px-7.5 py-1.5 md:h-12">
          생성
        </button>
      </div>
    </div>
  );
}
