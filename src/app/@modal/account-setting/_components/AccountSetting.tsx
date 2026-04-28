"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { uploadImageAction, updateUserInfoAction } from "@/actions/setting";
import { Button } from "@/components/Button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { ProfileChange } from "@/components/ProfileChange";
import { cn } from "@/lib/cn";
import * as T from "@/types/api";

import { PasswordChange } from "./PasswordChange";

interface Props {
  initialData: T.User;
}

export function AccountSetting({ initialData }: Props) {
  const router = useRouter(); // 2. 라우터 인스턴스 생성
  const [nickname, setNickname] = useState(initialData?.nickname || "");
  const [imageUrl, setImageUrl] = useState<string>(
    initialData.profileImageUrl || ""
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const [view, setView] = useState<"profile" | "password">("profile");

  const handleShowPasswordView = () => setView("password");
  const handleShowProfileView = () => setView("profile");

  const handleImageChange = (file: File) => {
    const previewUrl = URL.createObjectURL(file);
    setImageUrl(previewUrl);
    setSelectedFile(file);
  };

  const handleImageDelete = () => {
    setImageUrl("");
    setSelectedFile(null);
  };

  // 취소 버튼 핸들러
  const handleCancel = () => {
    router.back(); // 이전 페이지로 이동
  };

  const handleName = (value: string) => {
    if (value.length > 10) {
      setError("닉네임은 10자 이하로 작성해주세요.");
    } else {
      setError("");
    }
  };

  const handleUpdate = async () => {
    if (!nickname.trim()) {
      alert("닉네임을 입력해주세요.");
      return;
    }

    setIsPending(true);

    try {
      let finalImageUrl = imageUrl;

      if (selectedFile) {
        const formData = new FormData();
        formData.append("image", selectedFile);

        const uploadResult = await uploadImageAction(formData);

        if (!uploadResult.success) {
          throw new Error(uploadResult.message || "이미지 업로드 실패");
        }
        finalImageUrl = uploadResult.profileImageUrl!;
      }

      const updateData: T.UpdateUserRequest = {
        nickname: nickname,
        profileImageUrl: finalImageUrl === "" ? null : finalImageUrl,
      };

      const updateResult = await updateUserInfoAction(updateData);

      if (updateResult.success) {
        alert("정보가 성공적으로 수정되었습니다.");
        router.back();
      } else {
        throw new Error(updateResult.message || "정보 수정 실패");
      }
    } catch (error) {
      const apiError = error as T.ApiError;
      console.error("수정 프로세스 에러:", apiError);

      const errorMessage =
        apiError.response?.data?.message ||
        (error instanceof Error ? error.message : "오류가 발생했습니다.");

      alert(errorMessage);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="max-md:bg-modal-background -m-7.5 flex h-full flex-col gap-7.5 p-7.5 max-lg:flex-col max-lg:gap-7.5 max-md:fixed max-md:top-0 max-md:left-0 max-md:z-55 max-md:m-0 max-md:mt-12.5 max-md:w-full max-md:gap-6 max-md:p-7.5 max-md:pt-6">
      <ModalHeader
        isPasswordView={view === "password"}
        onBack={handleShowProfileView}
      >
        {view === "profile" ? "내 정보 수정" : "비밀번호 변경"}
      </ModalHeader>
      {view === "profile" ? (
        <div className="flex flex-col gap-7.5 max-md:gap-6">
          <div className="flex flex-col gap-7.5 max-md:gap-6">
            <ProfileChange
              currentImageUrl={imageUrl}
              onImageChange={handleImageChange}
              onImageDelete={handleImageDelete}
            />

            <Input isDisabled className="max-md:gap-2.5">
              <Label htmlFor="email">이메일</Label>
              <Input.Wrapper>
                <Input.Field
                  id="email"
                  type="email"
                  defaultValue={initialData.email}
                />
              </Input.Wrapper>
            </Input>

            <Input errorMessage={error} className="max-md:gap-2.5">
              <Label htmlFor="nickname">닉네임</Label>
              <Input.Wrapper>
                <Input.Field
                  id="nickname"
                  value={nickname}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setNickname(newValue);
                    handleName(newValue);
                  }}
                />
              </Input.Wrapper>
              <Input.Error />
            </Input>
          </div>

          <div className="flex flex-col gap-3 max-md:gap-2.5">
            <span className="text-gray-300">비밀번호</span>

            <Button
              size="sm"
              className="w-29.5 font-semibold text-gray-100"
              colorType="secondary"
              onClick={handleShowPasswordView}
            >
              비밀번호 변경
            </Button>
          </div>

          <div
            className={cn(
              "flex w-135 items-center justify-center gap-5",
              "max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full",
              "max-md:bg-modal-background max-md:gap-3 max-md:px-3.5 max-md:pb-9"
            )}
          >
            <Button
              onClick={handleCancel}
              size="lg"
              className="font-semibold text-gray-100 max-md:h-12.5 max-md:text-base"
              colorType="secondary"
              disabled={isPending}
            >
              취소
            </Button>
            <Button
              onClick={handleUpdate}
              size="lg"
              className="font-semibold text-gray-100 max-md:h-12.5 max-md:text-base"
              colorType="primary"
              disabled={isPending}
            >
              {isPending ? "저장 중..." : "변경"}
            </Button>
          </div>
        </div>
      ) : (
        // 2. 비밀번호 변경 뷰 호출
        <PasswordChange onBack={handleShowProfileView} />
      )}
    </div>
  );
}
