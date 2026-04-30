import Image from "next/image";

import icBack from "@/assets/ic-back.svg";

import { ModalCloseButton } from "./ModalCloseButton";

interface ModalHeaderProps {
  children: string;
}

interface ModalHeaderProps {
  children: string;
  isPasswordView?: boolean; // 불린형 프롭 추가 (선택사항)
  onBack?: () => void; // 뒤로가기 클릭 시 실행할 함수
}

export function ModalHeader({
  children,
  isPasswordView,
  onBack: handleBack,
}: ModalHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* 비밀번호 변경 뷰일 때만 왼쪽 아이콘 표시 */}
        {isPasswordView && (
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center justify-center transition-opacity hover:opacity-70"
          >
            <Image src={icBack} alt="뒤로가기" width={24} height={24} />
          </button>
        )}
        <h1 className="text-2xl font-bold text-gray-300 max-md:text-xl md:text-2xl">
          {children}
        </h1>
      </div>
      <ModalCloseButton />
    </div>
  );
}
