"use client";

import ModalHeader from "@/components/ModalHeader";
import { useRouter } from "next/navigation";

export default function NewDashboard() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return (
    <div className="border-gray-stroke flex flex-col gap-5 rounded-[24px]">
      <ModalHeader onClose={handleCloseModal}>새 대시보드 생성</ModalHeader>
      <input
        className="bg-black-800 h-13.5 rounded-[14px] border border-gray-700 px-5 py-1.5 text-gray-400"
        placeholder="새로운 대시보드"
      />
      <div></div>
      <div className="flex gap-5">
        <button>취소</button>
        <button>생성</button>
      </div>
    </div>
  );
}
