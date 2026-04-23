"use client";
import { cn } from "@/lib/cn";

import { Button } from "./Button";
import { Modal } from "./Modal";

interface DeleteAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export function DeleteAlertModal({
  isOpen,
  onClose,
  onDelete,
}: DeleteAlertModalProps) {
  const handleClose = () => onClose();
  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} handleClose={() => handleClose}>
      <div
        className={cn(
          "mx-auto flex flex-col items-center justify-center",
          "min-h-43 w-[calc(100vw-32px)] max-w-83.75 gap-5 p-[30px_20px_24px_20px]",
          "md:h-fit md:w-150 md:max-w-none md:gap-7.5 md:p-[40px_30px_30px_30px]"
        )}
      >
        <div className="flex w-full flex-col items-center gap-2 text-center md:gap-3">
          <h2 className="text-[18px] font-semibold whitespace-nowrap text-gray-200 md:text-[24px]">
            칼럼을 삭제하시겠습니까?
          </h2>
          <p className="text-[16px] whitespace-nowrap text-gray-400 md:text-[20px]">
            칼럼 내 모든 카드도 함께 삭제됩니다.
          </p>
        </div>

        <div className="flex w-full gap-3 md:gap-5">
          <Button
            colortype="secondary"
            className="h-12.5 flex-1 items-center justify-center text-[16px] text-gray-100 md:h-15 md:text-[18px]"
            onClick={handleClose}
          >
            취소
          </Button>
          <Button
            className="bg-red! h-12.5 flex-1 items-center justify-center text-[16px] text-white md:h-15 md:text-[18px]"
            onClick={handleDelete}
          >
            삭제
          </Button>
        </div>
      </div>
    </Modal>
  );
}
