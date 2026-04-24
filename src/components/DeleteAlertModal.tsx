"use client";

import { useRouter } from "next/navigation";

import ModalLayout from "@/app/@modal/layout";
import { cn } from "@/lib/cn";

import { Button } from "./Button";
export function DeleteAlertModal() {
  const router = useRouter();

  // 취소 버튼 클릭 시 router.back해서 url이동으로 모달을 닫음
  const handleClose = () => router.back();

  // 삭제 버튼 클릭 시 router.back해서 url이동으로 모달을 닫고, 데이터 갱신
  const handleDelete = async () => {
    try {
      console.warn("삭제 API 호출");
      router.back();
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalLayout>
      <div
        className={cn(
          "flex flex-col items-center justify-center text-center",
          "w-full gap-8 md:gap-10" // 상자 안에서의 여백만 설정
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
            onClick={handleClose}
          >
            취소
          </Button>
          <Button
            className="bg-profile-rose h-15 flex-1 text-base text-white hover:bg-red-800 active:bg-red-900 lg:h-12.5 lg:text-lg"
            onClick={handleDelete}
          >
            삭제
          </Button>
        </div>
      </div>
    </ModalLayout>
  );
}
