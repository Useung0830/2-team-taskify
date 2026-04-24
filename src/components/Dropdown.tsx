"use client";

import { useState } from "react";
import Image from "next/image";
import iconChevronDown from "@/assets/ic-chevron-down.svg";

export function Dropdown({ options, label }: { options: string[], label: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="relative w-full">
      <label className="block text-[16px] font-medium mb-2 text-white">{label}</label>
      
      <div className="w-full flex justify-between items-center px-4 py-3 bg-[#171717] border border-[#333333] rounded-lg text-left">
        <span className={selected ? "text-white" : "text-gray-400"}>
          {selected || `${label} 선택`}
        </span>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`transition-transform duration-200 p-1 rounded-md hover:bg-[#333333] ${isOpen ? "rotate-180" : ""}`}
        >
          <Image 
            src={iconChevronDown} 
            alt="열기" 
            width={24} 
            height={24} 
          />
        </button>
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-[#171717] border border-[#333333] rounded-lg shadow-lg overflow-hidden">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="px-4 py-3 hover:bg-[#333333] cursor-pointer text-white"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}