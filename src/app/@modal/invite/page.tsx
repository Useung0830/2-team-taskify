"use client";

import { useRouter } from "next/navigation";

import { ModalHeader } from "@/components/ModalHeader";

export default function Invite() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return <ModalHeader onClose={handleCloseModal}>초대하기</ModalHeader>;
}
