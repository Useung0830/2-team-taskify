"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/Button";

export default function MemberDelete() {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  return (
    /* 최상단 div에 w-full 추가 */
    <div className="flex w-full flex-col items-center gap-10">
      <div className="flex w-full flex-col items-center gap-2 md:gap-3">
        <h2 className="text-lg font-semibold text-gray-200 lg:text-xl">
          맴버를 삭제하시겠습니까?
        </h2>
      </div>

      {/* 버튼 컨테이너: max-w를 브라우저가 인식할 수 있는 대괄호 문법으로 작성 */}
      <div className="flex w-135 gap-5 max-md:w-73.75 max-md:gap-3">
        <Button colorType="secondary" className="flex-1" onClick={handleClose}>
          취소
        </Button>
        <Button className="bg-red flex-1 text-white hover:bg-red-900">
          삭제
        </Button>
      </div>
    </div>
  );
}
