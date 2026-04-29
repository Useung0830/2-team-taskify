"use server";

import { fetchInstance } from "@/api/fetch";

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export async function getMemberListAction({
  dashboardId,
  page = 1,
  size = 6,
}: {
  dashboardId: number;
  page?: number;
  size?: number;
}) {
  // 1. 유효성 검사 (서버 액션은 보안상 인자 검사가 필수입니다)
  if (!dashboardId) {
    return { success: false, error: "대시보드 ID가 필요합니다." };
  }

  try {
    // 2. 기존 API가 /members?dashboardId=... 형태였다면:
    const query = new URLSearchParams({
      dashboardId: String(dashboardId),
      page: String(page),
      size: String(size),
    });

    const response = await fetchInstance(`/members?${query.toString()}`, {
      method: "GET",
      cache: "no-store", // 실시간 멤버 현황을 위해 캐시 방지 권장
    });

    // fetchInstance에서 이미 response.json()을 리턴하므로 바로 data에 할당
    return { success: true, data: response };
  } catch (error) {
    // ApiError 타입 캐스팅 및 에러 처리
    const err = error as ApiError;
    console.error("멤버 로딩 에러:", err);
    return { success: false, error: err };
  }
}

// 초대 내역 가져오기 액션
export async function getInvitationListAction({
  dashboardId,
  page = 1,
  size = 6,
}: {
  dashboardId: number;
  page?: number;
  size?: number;
}) {
  try {
    const response = await fetchInstance(
      `/dashboards/${dashboardId}/invitations?page=${page}&size=${size}`,
      { method: "GET", cache: "no-store" } // 최신 상태 유지를 위해 캐시 방지 권장
    );
    return { success: true, data: response };
  } catch (error) {
    const err = error as ApiError;
    return { success: false, error: err };
  }
}
