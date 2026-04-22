"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import icMore from "@/assets/ic-more.svg";
import { PopDoverMenu } from "@/components/PopDoverMenu";

export function KebabButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
    >
      <button
        onClick={handleDropdown}
        className="h-6 w-6 transition-transform hover:scale-110 active:opacity-70"
      >
        <Image src={icMore} alt="더보기 아이콘" />
      </button>
      {isOpen && <PopDoverMenu />}
    </div>
  );
}
