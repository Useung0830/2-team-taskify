"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { deleteInvitation } from "@/api/data";
import { Button } from "@/components/Button";
import { refreshDashboardData } from "@/util/dashboard"; // revalidatePath 서버액션

export default function InviteCancel() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  // URL에서 ID 추출
  const dashboardId = Number(params.id);
  const invitationId = Number(searchParams.get("invitationId"));

  const handleClose = () => {
    router.back();
  };

  const handleCancelInvite = async () => {
    if (!dashboardId || !invitationId) {
      alert("잘못된 접근입니다.");
      return;
    }

    try {
      setIsLoading(true);

      // 1. 초대 취소 API 호출
      await deleteInvitation(dashboardId, invitationId);

      // 2. 서버 캐시 무효화 (revalidatePath)
      await refreshDashboardData(dashboardId);

      alert("초대가 취소되었습니다.");

      // 3. 모달 닫기 및 부모 컴포넌트 useEffect 트리거를 위한 쿼리 파라미터 이동
      router.back();
      setTimeout(() => {
        router.replace(`/dashboard/${dashboardId}/edit?refetch=${Date.now()}`);
        router.refresh();
      }, 100);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div className="flex w-full flex-col items-center gap-2 md:gap-3">
        <h2 className="text-lg font-semibold text-gray-200 lg:text-xl">
          초대를 취소하시겠습니까?
        </h2>
      </div>

      <div className="flex w-135 gap-5 max-md:w-73.75 max-md:gap-3">
        <Button
          colorType="secondary"
          className="flex-1"
          onClick={handleClose}
          disabled={isLoading}
        >
          취소
        </Button>
        <Button
          className="flex-1 bg-red-500 text-white hover:bg-red-700"
          onClick={handleCancelInvite}
          disabled={isLoading}
        >
          {isLoading ? "처리 중..." : "초대 취소"}
        </Button>
      </div>
    </div>
  );
}
