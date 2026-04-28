"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { uploadImageAction, updateUserInfoAction } from "@/actions/setting";
import { Button } from "@/components/Button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { ProfileChange } from "@/components/ProfileChange";
import * as T from "@/types/api";

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
    <div className="flex flex-col gap-7.5 max-md:gap-6">
      <ModalHeader>내 정보 수정</ModalHeader>
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

      <div className="flex w-full items-center justify-center gap-5 max-md:gap-3">
        <Button
          onClick={handleCancel} // 4. 취소 버튼에 핸들러 연결
          size="lg"
          className="font-semibold text-gray-100"
          colorType="secondary"
          disabled={isPending}
        >
          취소
        </Button>
        <Button
          onClick={handleUpdate}
          size="lg"
          className="font-semibold text-gray-100"
          colorType="primary"
          disabled={isPending}
        >
          {isPending ? "저장 중..." : "변경"}
        </Button>
      </div>
    </div>
  );
}
