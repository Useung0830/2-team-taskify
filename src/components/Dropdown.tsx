import { useState } from "react";

export function Dropdown({ options, label }: { options: string[], label: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="relative w-full">
      <label className="block text-[16px] font-medium mb-2">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 bg-[#171717] border border-[#333333] rounded-lg text-left"
      >
        <span className={selected ? "text-white" : "text-gray-400"}>
          {selected || `${label} 선택`}
        </span>
        {/* <svg/> */}
      </button>

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