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
  if (!dashboardId) {
    return { success: false, error: "대시보드 ID가 필요합니다." };
  }

  try {
    const query = new URLSearchParams({
      dashboardId: String(dashboardId),
      page: String(page),
      size: String(size),
    });

    const response = await fetchInstance(`/members?${query.toString()}`, {
      method: "GET",
      cache: "no-store",
    });

    return { success: true, data: response };
  } catch (error) {
    const err = error as ApiError;
    console.error("멤버 로딩 에러:", err);
    return { success: false, error: err };
  }
}

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
