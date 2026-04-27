"use client";

import React, { useRef } from "react";

import defaultProfile from "@/assets/ic-profile.svg";
import { cn } from "@/lib/cn";

interface ProfileChangeProps {
  currentImageUrl?: string;
  onImageChange?: (file: File) => void;
  onImageDelete?: () => void;
}

export function ProfileChange({
  currentImageUrl,
  onImageChange,
  onImageDelete,
}: ProfileChangeProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    console.warn("사진 변경 버튼 클릭");
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.warn("파일 선택됨 : ", file);
    if (file && onImageChange) {
      onImageChange(file);
    }
  };

  const handleDelete = () => {
    console.warn("사진 삭제 버튼 클릭");
    if (onImageDelete) {
      onImageDelete();
    }
  };

  return (
    <div className="mb-10 flex items-center gap-5">
      <div
        className={cn(
          "h-30 w-30 shrink-0 overflow-hidden rounded-full bg-cover bg-center bg-no-repeat",
          !currentImageUrl && "border-none"
        )}
        style={{
          backgroundImage:
            currentImageUrl && currentImageUrl !== ""
              ? `url('${currentImageUrl}')`
              : `url('${defaultProfile.src}')`,
        }}
      />
      <div className="flex items-center gap-3">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleChange}
          onClick={(e) => ((e.target as HTMLInputElement).value = "")}
        />
        <button
          type="button"
          onClick={handleEdit}
          className="gap font-Pretendard flex h-9 items-center justify-center rounded-full border-none bg-gray-900 px-4 py-1.5 text-base font-semibold text-gray-100"
        >
          사진 변경
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="border-red bordere-red-solid gap font-Pretendard text-red flex h-9 items-center justify-center rounded-full border border-solid fill-gray-900 px-4 py-1.5 text-base font-semibold"
        >
          사진 삭제
        </button>
      </div>
    </div>
  );
}
