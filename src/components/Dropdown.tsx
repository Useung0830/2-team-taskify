"use client";

import Image from "next/image";
// 1. useRef, useEffect 추가
import { useState, useRef, useEffect } from "react";
import iconChevronDown from "@/assets/common/ic-chevron-down.svg";

interface DropdownProps {
  options: string[];
  label: string;
  onSelect?: (value: string) => void;
}

export function Dropdown({ options, label, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  // 2. 드롭다운 전체 영역을 참조할 Ref 생성
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 3. 외부 클릭 감지 로직 추가
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 클릭된 요소가 dropdownRef(최상위 div) 내부에 포함되어 있지 않다면 닫기
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // 전역 문서에 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);

    // 컴포넌트가 사라질 때 리스너 제거 (메모리 관리)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    // 4. 최상위 div에 ref 연결
    <div className="relative w-full" ref={dropdownRef}>
      <label className="font-pretendard mb-2 block text-[16px] font-semibold text-gray-100">
        {label}
      </label>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black-800 flex h-13.5 w-full cursor-pointer items-center justify-between rounded-[14px] border border-solid border-gray-700 px-5 py-1.5 transition-all"
      >
        <span
          className={`font-pretendard truncate text-[16px] ${selected ? "text-gray-100" : "text-gray-400"}`}
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
        <ul className="bg-black-800 absolute z-10 mt-2 max-h-50 w-full overflow-y-auto rounded-lg border border-gray-700 shadow-lg [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:bg-transparent">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
                if (onSelect) onSelect(option);
              }}
              className="hover:bg-black-700 cursor-pointer px-4 py-3 text-[16px] text-gray-100 transition-colors"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
