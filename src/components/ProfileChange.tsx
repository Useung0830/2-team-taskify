"use client";

import React, { useRef } from "react";

import imageIcon from "@/assets/common/ic-image.svg";
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
    <div className="flex items-center gap-5">
      <div
        className={cn(
          "h-30 w-30 shrink-0 overflow-hidden rounded-full bg-cover bg-center bg-no-repeat max-md:max-h-27.5 max-md:max-w-27.5",
          !currentImageUrl && "border-none"
        )}
        style={{
          backgroundImage:
            currentImageUrl && currentImageUrl !== ""
              ? `url('${currentImageUrl}')`
              : `url('${imageIcon.src}')`,
        }}
      />
      <div className="flex items-center gap-3">
        <input
          type="file"
          name=""
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleChange}
          onClick={(e) => ((e.target as HTMLInputElement).value = "")}
        />
        <button
          type="button"
          onClick={handleEdit}
          className="gap font-Pretendard flex h-9 w-full items-center justify-center overflow-hidden rounded-full border-none bg-gray-900 px-4 py-1.5 text-sm font-semibold whitespace-nowrap text-gray-100 max-md:px-3 max-md:text-base md:min-w-22.75"
        >
          사진 변경
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="border-red bordere-red-solid gap font-Pretendard text-red flex h-9 w-full items-center justify-center overflow-hidden rounded-full border border-solid fill-gray-900 px-3 py-1.5 text-sm font-semibold whitespace-nowrap md:min-w-22.75 md:px-4 md:py-1.5 md:text-base"
        >
          사진 삭제
        </button>
      </div>
    </div>
  );
}
