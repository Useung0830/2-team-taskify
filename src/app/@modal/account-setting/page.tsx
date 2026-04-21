"use client";

import ModalHeader from "@/components/ModalHeader";
import { useRouter } from "next/navigation";

export default function AccountSetting() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return <ModalHeader onClose={handleCloseModal}>비밀번호 변경</ModalHeader>;
}
