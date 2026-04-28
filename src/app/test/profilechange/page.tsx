"use client";

import { useState } from "react";

import { ProfileChange } from "@/components/ProfileChange";

export default function ProfilePage() {
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
    <main className="pt-24 pl-10">
      <h1 className="mb-6 text-2xl font-bold text-white">프로필 설정</h1>
      <ProfileChange
        currentImageUrl={imageUrl}
        onImageChange={handleImageChange}
        onImageDelete={handleImageDelete}
      />
    </main>
  );
}
