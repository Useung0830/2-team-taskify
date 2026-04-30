"use client";

import Image from "next/image";

import icX from "@/assets/common/ic-x.svg";
import { Button } from "@/components/Button";
import { Modal } from "@/components/modal/Modal";

interface ColumnEditDeleteAlertModalProps {
  onCancel?: () => void;
  onDelete?: () => void;
}

export function ColumnEditDeleteAlertModal({
  onCancel,
  onDelete,
}: ColumnEditDeleteAlertModalProps) {
  /** 취소 버튼 핸들러 */
  const handleCancel = () => {
    console.warn("칼럼 삭제하기 취소 클릭");
    onCancel?.();
  };

  /** 삭제 버튼 핸들러 */
  const handleDelete = () => {
    try {
      onDelete?.();
      console.warn("칼럼 삭제하기 성공");
    } catch (error) {
      console.error("칼럼 삭제하기 실패 : ", error);
    }
  };

  return (
    <Modal>
      <div className="w-full max-w-83.75 min-w-83.75 pt-0 pr-5 pb-6 pl-5 md:max-w-150 md:min-w-150 md:pt-4 md:pr-7.5 md:pl-7.5">
        <div className="relative flex w-full flex-col items-center gap-2">
          <h2 className="text-2xl font-semibold text-gray-300 md:text-[28px]">
            칼럼을 삭제하시겠습니까?
          </h2>
          <p className="text-base font-semibold whitespace-nowrap text-gray-400 md:text-lg">
            칼럼 내 모든 카드도 함께 삭제됩니다.
          </p>
          <button
            type="button"
            onClick={handleCancel}
            className="absolute -top-6 -right-6 p-4 transition-transform hover:scale-110 active:opacity-70"
          >
            <Image src={icX} height={24} width={24} alt="닫기 버튼" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 md:gap-5">
          <Button
            colorType="secondary"
            className="h-12.5 flex-1 text-lg text-gray-200 md:h-14"
            onClick={handleCancel}
          >
            No
          </Button>
          <Button
            className="bg-profile-rose h-12.5 flex-1 text-lg text-white hover:bg-red-800 active:bg-red-900 md:h-14"
            onClick={handleDelete}
          >
            Yes
          </Button>
        </div>
      </div>
    </Modal>
  );
}
