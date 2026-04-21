"use client";

import Image from "next/image";
import icX from "@/assets/ic-x.svg";
import { useRouter } from "next/navigation";

function ModalCloseButton() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };
  return (
    <button
      onClick={handleCloseModal}
      className="relative h-6 w-6 transition-transform hover:scale-110 active:opacity-70"
    >
      <Image src={icX} alt="닫기 버튼" fill className="object-contain" />
    </button>
  );
}
export default ModalCloseButton;
