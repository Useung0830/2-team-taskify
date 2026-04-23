"use client";

import { useRouter } from "next/navigation";

import { ModalHeader } from "@/components/ModalHeader";

export default function AccountSetting() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return <ModalHeader onClose={handleCloseModal}>비밀번호 변경</ModalHeader>;
}
