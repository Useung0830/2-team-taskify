"use client";

import ModalHeader from "@/components/ModalHeader";
import { useRouter } from "next/navigation";

export default function TaskDetail() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return <ModalHeader onClose={handleCloseModal}>테스크 디테일</ModalHeader>;
}
