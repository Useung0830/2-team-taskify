/**
 * DeleteAlertModal 코멘트 모두 resolve conversation 해서 올리는 2차 PR
 */

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
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <Modal>
      <div
        className={cn(
          "mx-auto flex flex-col items-center justify-center text-center",
          "max-w-150 min-w-83.75",
          "h-auto",
          "gap-6 py-2 pt-2 md:gap-8 md:pt-4"
        )}
      >
        <div className="flex w-full flex-col items-center gap-2 text-center md:gap-3">
          <h2 className="text-lg font-semibold whitespace-nowrap text-gray-200 md:text-2xl">
            칼럼을 삭제하시겠습니까?
          </h2>
          <p className="text-base whitespace-nowrap text-gray-400 md:text-xl">
            칼럼 내 모든 카드도 함께 삭제됩니다.
          </p>
        </div>

        <div className="flex w-full gap-3 md:gap-5">
          <Button
            colortype="secondary"
            className="h-12.5 flex-1 items-center justify-center text-base text-gray-100 md:h-15 md:text-lg"
            onClick={handleClose}
          >
            취소
          </Button>
          <Button
            className="bg-red! h-12.5 flex-1 items-center justify-center text-base text-white md:h-15 md:text-lg"
            onClick={handleDelete}
          >
            삭제
          </Button>
        </div>
      </div>
    </Modal>
  );
}
