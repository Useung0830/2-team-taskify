"use client";

import Image from "next/image";
import { useState } from "react";

import { ColumnList } from "./_components/ColumnList";
import colorChip from "./assets/dashboard/ic-colorchips.svg";
import { DUMMY_COLUMNS } from "./mock";

export default function Dashboard() {
  const data = DUMMY_COLUMNS;
  const [activeColumnId, setActiveColumnId] = useState(data[0]?.id);
  const activeColumn = data.find((col) => col.id === activeColumnId);

  const handleTabSwitch = (id: number) => {
    setActiveColumnId(id);
  };

  return (
    <div className="px-5 text-gray-100 lg:px-12.5">
      <div className="flex items-center gap-1 pt-6 pb-3.5 md:mx-10 lg:mx-0">
        {/* colorChip도 데이터에 맞게 변동 필요 */}
        <Image src={colorChip} alt="color chip" />
        <h1 className="text-2xl font-bold">포트폴리오</h1>
      </div>

      {/* 모바일과 태블릿 환경 전용 UI */}
      <div className="flex w-full gap-4 py-6 md:mx-10 lg:hidden">
        {data.map((column) => (
          <button
            key={column.id}
            value={column.title}
            onClick={() => handleTabSwitch(column.id)}
            className={`min-h-8 rounded-4xl border border-gray-600 px-4 whitespace-nowrap transition-colors ${
              activeColumnId === column.id
                ? "bg-green-500 text-white"
                : "bg-gray-900"
            }`}
          >
            {column?.title}
          </button>
        ))}
      </div>
      <div className="pt-2.5 lg:hidden">
        <div className="flex w-full justify-center gap-1.5">
          <ColumnList column={activeColumn!} />
        </div>
      </div>

      {/* 데스크탑 전용 화면 */}
      <div className="hidden gap-15 lg:flex">
        {data.map((column) => (
          <ColumnList key={column.id} column={column} />
        ))}
      </div>
    </div>
  );
}
