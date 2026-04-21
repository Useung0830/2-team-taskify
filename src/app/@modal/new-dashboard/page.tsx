"use client";

import ModalHeader from "@/components/modal/ModalHeader";
import { useRouter } from "next/navigation";

export default function NewDashboard() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return <ModalHeader onClose={handleCloseModal}>새 대시보드 생성</ModalHeader>;
}
