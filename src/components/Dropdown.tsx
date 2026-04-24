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
      <label className="mb-2 block text-[16px] font-medium text-white">
        {label}
      </label>

      <div
        className={`/* 공통 스타일 */ /* 모바일 스타일 (기본) */ /* 데스크톱 스타일 (md 이상) */ flex h-[75px] w-[157.5px] items-center gap-[10px] rounded-[14px] border-[1px] border-solid border-[#333333] bg-[#171717] px-[20px] py-[6px] opacity-100 transition-all md:h-[54px] md:w-[260px] md:justify-between`}
      >
        <span
          className={`truncate ${selected ? "text-white" : "text-gray-400"}`}
        >
          {selected || `${label} 선택`}
        </span>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-md p-1 transition-transform duration-200 hover:bg-[#333333] ${isOpen ? "rotate-180" : ""}`}
        >
          <Image src={iconChevronDown} alt="열기" width={24} height={24} />
        </button>
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-[157.5px] overflow-hidden rounded-lg border border-[#333333] bg-[#171717] shadow-lg md:w-[260px]">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="cursor-pointer px-4 py-3 text-sm text-white hover:bg-[#333333] md:text-base"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
