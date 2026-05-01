"use server";

import { revalidatePath } from "next/cache";

export async function refreshDashboardData(dashboardId: number) {
  // 특정 경로의 캐시를 서버에서 강제로 무효화합니다.
  revalidatePath(`/dashboard/${dashboardId}/edit`);
}
