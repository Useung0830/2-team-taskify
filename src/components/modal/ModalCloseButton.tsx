"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import icX from "@/assets/common/ic-x.svg";

export function ModalCloseButton() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };
  return (
    <button
      onClick={handleCloseModal}
      className="relative h-6 w-6 transition-transform hover:scale-110 active:opacity-70"
    >
      <Image src={icX} height={24} width={24} alt="닫기 버튼" />
    </button>
  );
}
