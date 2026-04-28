"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { ProfileChange } from "@/components/ProfileChange";

export default function AccountSetting() {
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImageChange = (file: File) => {
    const previewUrl = URL.createObjectURL(file);
    setImageUrl(previewUrl);
    console.warn("서버로 보낼 파일:", previewUrl);
  };

  const handleImageDelete = () => {
    if (confirm("정말 사진을 삭제하시겠습니까?")) {
      setImageUrl("");
    }
  };

  return (
    <div className="flex flex-col gap-7.5">
      <ModalHeader>비밀번호 변경</ModalHeader>
      <div className="flex flex-col gap-7.5">
        <ProfileChange
          currentImageUrl={imageUrl}
          onImageChange={handleImageChange}
          onImageDelete={handleImageDelete}
        />
        <Input isDisabled>
          <Label htmlFor="email">이메일</Label>
          <Input.Wrapper>
            <Input.Field id="email" type="email" required />
          </Input.Wrapper>
        </Input>
        <Input>
          <Label htmlFor="name">닉네임</Label>
          <Input.Wrapper>
            <Input.Field id="email" type="name" required />
          </Input.Wrapper>
        </Input>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-gray-300">비밀번호</span>
        <Button
          size="sm"
          className="w-29.5 font-semibold text-gray-100"
          colorType="secondary"
        >
          비밀번호 변경
        </Button>
      </div>
      <div className="flex w-135 items-center justify-center gap-5">
        <Button
          size="lg"
          className="font-semibold text-gray-100"
          colorType="secondary"
        >
          취소
        </Button>
        <Button
          size="lg"
          className="font-semibold text-gray-100"
          colorType="primary"
        >
          변경
        </Button>
      </div>
    </div>
  );
}
