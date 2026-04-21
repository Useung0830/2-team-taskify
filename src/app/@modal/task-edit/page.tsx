"use client";

import ModalHeader from "@/components/modal/ModalHeader";
import { useRouter } from "next/navigation";

export default function TaskEdit() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return <ModalHeader onClose={handleCloseModal}>할 일 수정</ModalHeader>;
}
