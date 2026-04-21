"use client";

import ModalHeader from "@/components/ModalHeader";
import { useRouter } from "next/navigation";

export default function ColumnAdd() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return <ModalHeader onClose={handleCloseModal}>칼럼 관리</ModalHeader>;
}
