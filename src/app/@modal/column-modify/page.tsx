"use client";

import { useRouter } from "next/navigation";

import { ModalHeader } from "@/components/ModalHeader";

export default function ColumnAdd() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return <ModalHeader onClose={handleCloseModal}>칼럼 관리</ModalHeader>;
}
