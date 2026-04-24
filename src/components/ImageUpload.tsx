"use client";

import { useState, useRef, ChangeEvent, MouseEvent, useEffect } from "react";
import Image from "next/image";
import iconX from "@/assets/ic-x-circle.svg"; 
import imageIcon from "@/assets/ic-image.svg";

interface ImageUploaderProps {
  onImageChange?: (file: File | null) => void;
  initialImageUrl?: string;
}

export function ImageUpload({ onImageChange, initialImageUrl }: ImageUploaderProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(initialImageUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (!previewUrl) fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (previewUrl && !initialImageUrl) URL.revokeObjectURL(previewUrl);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      onImageChange?.(file);
    }
  };

  const handleReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (previewUrl && !initialImageUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    onImageChange?.(null);
  };

  useEffect(() => {
    return () => {
      if (previewUrl && !initialImageUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl, initialImageUrl]);

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <span className="text-[18px] font-medium text-white">이미지</span>

      <div
        onClick={handleClick}
        className={`
          relative flex transition-all
          w-[335px] h-[147px] md:w-[540px] md:h-[171px]
          rounded-[12px]
          ${previewUrl 
            ? "items-start justify-start p-2"
            : "items-center justify-center bg-black-800 border-2 border-dashed border-gray-600 hover:bg-black-700 cursor-pointer overflow-hidden"
          }
        `}
      >
        {previewUrl ? (
          <div 
            className="relative border-[#4B5563]" 
            style={{
              width: '231px',
              height: '140px',
              borderRadius: '14px',
              borderWidth: '1.5px',
              borderStyle: 'solid',
              marginLeft: '4px', 
            }}
          >
            <div className="w-full h-full overflow-hidden rounded-[12px]">
              <Image
                src={previewUrl}
                alt="업로드 이미지"
                fill
                className="object-cover"
              />
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="absolute z-50 transition-transform hover:scale-110"
              style={{
                top: '-12px',
                right: '-12px',
                width: '28px',
                height: '28px'
              }}
            >
              <Image src={iconX} alt="초기화" fill className="drop-shadow-lg" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-[10px] md:gap-[12px]">
            <Image src={imageIcon} alt="이미지아이콘" width={24} height={24} />
            <span className="text-[14px] text-gray-400 font-semibold">+ image upload</span>
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}