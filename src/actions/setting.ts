// app/settings/actions.ts
"use server";

import { revalidatePath } from "next/cache";

import {
  putMyInfoUpdate,
  postProfileImage,
  putPasswordUpdate,
} from "@/api/data";
import * as T from "@/types/api";

export async function updateUserInfoAction(data: T.UpdateUserRequest) {
  try {
    await putMyInfoUpdate(data);
    // 수정 후 데이터 갱신을 위해 캐시 무효화
    revalidatePath("/settings");
    return { success: true };
  } catch (error) {
    const apiError = error as T.ApiError;
    console.error("수정 프로세스 에러:", apiError);

    const errorMessage =
      apiError.response?.data?.message || "오류가 발생했습니다.";
    return { success: false, message: errorMessage };
  }
}

export async function uploadImageAction(formData: FormData) {
  try {
    const file = formData.get("image") as File;

    if (!file) {
      return { success: false, message: "파일이 존재하지 않습니다." };
    }

    const response = await postProfileImage(file);

    return { success: true, profileImageUrl: response.profileImageUrl };
  } catch (error) {
    const apiError = error as T.ApiError;
    console.error("수정 프로세스 에러:", apiError);

    const errorMessage =
      apiError.response?.data?.message || "오류가 발생했습니다.";
    console.error("이미지 업로드 서버 액션 에러:", errorMessage);
    return {
      success: false,
      message: errorMessage || "이미지 업로드 중 오류 발생",
    };
  }
}

export async function updatePasswordAction(data: T.PasswordUpdateRequest) {
  try {
    await putPasswordUpdate(data);
    return { success: true };
  } catch (error) {
    const apiError = error as T.ApiError;
    console.error("수정 프로세스 에러:", apiError);
    return {
      success: false,
      message: apiError || "비밀번호 변경 중 오류가 발생했습니다.",
    };
  }
}
