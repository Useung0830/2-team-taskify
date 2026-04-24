"use client";

import Image from "next/image";
import { useState } from "react";

import iconChevronDown from "@/assets/ic-chevron-down.svg";

export function Dropdown({
  options,
  label,
}: {
  options: string[];
  label: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="relative w-full">
      <label className="font-pretendard mb-2 block text-[16px] font-semibold text-white">
        {label}
      </label>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black-800 flex h-[54px] w-[157.5px] cursor-pointer items-center justify-between rounded-[14px] border-[1px] border-solid border-gray-700 px-[20px] py-[6px] transition-all md:w-[260px]"
      >
        <span
          className={`font-pretendard truncate text-[16px] ${selected ? "text-white" : "text-gray-400"}`}
        >
          {selected || `선택`}
        </span>

        <button
          type="button"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <Image src={iconChevronDown} alt="열기" width={24} height={24} />
        </button>
      </div>

      {isOpen && (
        <ul className="bg-black-800 /* 스크롤바 설정: 최대 높이 지정 및 스크롤 허용 */ /* 파일 내부 커스텀 스크롤바 스타일 */ absolute z-10 mt-2 max-h-[200px] w-[157.5px] overflow-y-auto rounded-lg border border-gray-700 shadow-lg md:w-[260px] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:bg-transparent">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="font-pretendard hover:bg-black-700 cursor-pointer px-4 py-3 text-[16px] text-white transition-colors"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
