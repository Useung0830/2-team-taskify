"use client";

import { useRouter } from "next/navigation";

import { ModalHeader } from "@/components/ModalHeader";

export default function NewDashboard() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return <ModalHeader onClose={handleCloseModal}>새 대시보드 생성</ModalHeader>;
}
