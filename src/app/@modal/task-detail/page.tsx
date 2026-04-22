"use client";

import { useRouter } from "next/navigation";

import { ModalHeader } from "@/components/ModalHeader";

export default function TaskDetail() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return <ModalHeader onClose={handleCloseModal}>테스크 디테일</ModalHeader>;
}
