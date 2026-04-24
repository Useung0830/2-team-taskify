"use client";

import { useState, useRef, ChangeEvent, MouseEvent } from "react";
import Image from "next/image";
import iconX from "@/assets/ic-x-circle.svg";
import imageIcon from "@/assets/ic-image.svg";

export function ImageUpload({ onImageChange, initialImageUrl }: ImageUploaderProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(initialImageUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    
    if (!previewUrl) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (previewUrl && !initialImageUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      onImageChange?.(file);
    }
  };

  const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // 중요: 어떤 기본 동작도 막음
    e.stopPropagation(); // 중요: 부모 div의 클릭 이벤트가 실행되지 않게 함
    
    if (previewUrl && !initialImageUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; 
    }
    onImageChange?.(null);
  };

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <span className="text-[18px] font-medium text-white">이미지</span>
      
      <div
        onClick={handleClick}
        className={`
          relative flex items-center justify-center transition-all
          w-full h-[180px] md:h-[220px] rounded-[12px]
          ${previewUrl 
            ? "cursor-default overflow-visible" 
            : "bg-black-800 border-2 border-dashed border-gray-600 hover:bg-black-700 cursor-pointer overflow-hidden"
          }
        `}
      >
        {previewUrl ? (
          <div className="relative w-full h-full p-[14px]">
            <button
              type="button"
              onClick={handleReset}
              className="absolute -top-[28px] -right-[28px] z-30 w-[32px] h-[32px] transition-transform hover:scale-110"
            >
              <Image src={iconX} alt="초기화" fill className="drop-shadow-lg" />
            </button>

            <div className="relative w-full h-full rounded-[4px] overflow-hidden">
              <Image
                src={previewUrl}
                alt="업로드 이미지"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-[10px]">
            <Image src={imageIcon} alt="이미지아이콘" width={24} height={24} />
            <span className="text-[14px] text-gray-400 font-semibold">
              + image upload
            </span>
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          onClick={(e) => e.stopPropagation()} // input 클릭 시 이벤트 전파 방지
        />
      </div>
    </div>
  );
}