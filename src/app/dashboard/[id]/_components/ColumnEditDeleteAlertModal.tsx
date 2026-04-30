"use client";

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
    console.warn("칼럼 취소 클릭");
    onCancel?.();
  };

  /** 삭제(예) 버튼 핸들러 */
  const handleDelete = () => {
    try {
      console.warn("칼럼 삭제 클릭");
      onDelete?.();
      window.location.reload();
    } catch (error) {
      console.error("칼럼 삭제 실패 : ", error);
    }
  };

  return (
    <Modal>
      <div className="w-full max-w-83.75 min-w-83.75 md:max-w-150 md:min-w-150">
        <div className="flex w-full flex-col items-center gap-2 md:gap-3">
          <h2 className="text-lg font-semibold text-gray-200 lg:text-xl">
            칼럼을 삭제하시겠습니까?
          </h2>
          <p className="text-base font-semibold whitespace-nowrap text-gray-400 lg:text-lg">
            칼럼 내 모든 카드도 함께 삭제됩니다.
          </p>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3 md:gap-5">
          <Button
            colorType="secondary"
            className="h-12.5 flex-1 text-base text-gray-200 lg:h-14 lg:text-lg"
            onClick={() => handleCancel()}
          >
            No
          </Button>
          <Button
            className="bg-profile-rose h-12.5 flex-1 text-base text-white hover:bg-red-800 active:bg-red-900 lg:h-14 lg:text-lg"
            onClick={() => handleDelete()}
          >
            Yes
          </Button>
        </div>
      </div>
    </Modal>
  );
}
