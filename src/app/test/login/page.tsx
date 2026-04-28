"use client";

import { useState } from "react";

import { postLogin } from "@/api/data"; // postLogin 파일 경로에 맞게 수정하세요

export default function TestLogin() {
  // 1. 입력값 상태 관리
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // 2. 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. 제출 핸들러
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await postLogin(formData);
      console.log("로그인 성공:", response);
      alert("로그인 성공!");
      // 로그인 성공 후 메인 페이지로 이동하는 로직을 여기에 추가하세요 (예: router.push('/'))
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col gap-4 rounded-lg bg-white p-8 shadow-md"
      >
        <h1 className="text-2xl font-bold text-gray-800">로그인</h1>

        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={formData.email}
          onChange={handleChange}
          required
          className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={handleChange}
          required
          className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />

        <button
          type="submit"
          className="rounded-md bg-blue-600 py-2 text-white transition-colors hover:bg-blue-700"
        >
          로그인하기
        </button>
      </form>
    </div>
  );
}
