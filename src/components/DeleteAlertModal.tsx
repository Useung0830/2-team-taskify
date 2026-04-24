"use client";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/cn";

import { Button } from "./Button";
interface DeleteAlertModaLProps {
  onCancel?: () => void;
  onDelete?: () => void;
}

export function DeleteAlertModal({
  onCancel,
  onDelete,
}: DeleteAlertModaLProps) {
  const router = useRouter();

  // 취소 클릭 시
  const handleCancel = () => {
    console.warn("칼럼 취소 클릭");
    onCancel?.();
  };

  // 삭제 클릭 시
  const handleDelete = () => {
    try {
      console.warn("칼럼 삭제 클릭");
      onDelete?.();
      router.refresh();
    } catch (error) {
      console.error("칼럼 삭제 실패 : ", error);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        "w-full gap-8 md:gap-10"
      )}
    >
      <div className="flex w-full flex-col items-center gap-2 md:gap-3">
        <h2 className="text-lg font-semibold text-gray-200 lg:text-xl">
          칼럼을 삭제하시겠습니까?
        </h2>
        <p className="text-base font-semibold text-gray-400 lg:text-lg">
          칼럼 내 모든 카드도 함께 삭제됩니다.
        </p>
      </div>

      <div className="flex w-full items-center justify-center gap-3 md:gap-5">
        <Button
          colortype="secondary"
          className="h-15 flex-1 text-base text-gray-100 lg:h-12.5 lg:text-lg"
          onClick={() => handleCancel()}
        >
          취소
        </Button>
        <Button
          className="bg-profile-rose h-15 flex-1 text-base text-white hover:bg-red-800 active:bg-red-900 lg:h-12.5 lg:text-lg"
          onClick={() => handleDelete()}
        >
          삭제
        </Button>
      </div>
    </div>
  );
}
