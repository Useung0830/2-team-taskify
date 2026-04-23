"use client";

import Image from "next/image";
import { useState } from "react";

import colorchip from "./assets/ic-colorchips.svg";
import { ColumnList } from "./components/ColumnList";
import { DUMMY_COLUMNS } from "./mock";

export default function Dashboard() {
  const data = DUMMY_COLUMNS;
  const [activeColumnId, setActiveColumnId] = useState(data[0]?.id);
  const activeColumn = data.find((col) => col.id === activeColumnId);

  const handleTabSwitch = (id: number) => {
    setActiveColumnId(id);
  };
  return (
    <div className="px-5 text-gray-100">
      <div className="items-centergap-1 flex pt-3.5 pb-2.5">
        <Image src={colorchip} alt="color chip" />
        <h1 className="text-2xl font-bold">포트폴리오</h1>
      </div>
      <div className="flex w-full gap-4 py-6">
        {data.map((column) => (
          <button
            key={column.id}
            value={column.title}
            onClick={() => handleTabSwitch(column.id)}
            className={`min-h-8 rounded-4xl border border-gray-600 px-4 whitespace-nowrap transition-colors lg:hidden ${
              activeColumnId === column.id
                ? "bg-violet-600 text-white"
                : "bg-gray-900"
            }`}
          >
            {column?.title}
          </button>
        ))}
      </div>
      <div className="pt-2.5">
        <div className="flex w-full justify-center gap-1.5">
          <ColumnList column={activeColumn} />
        </div>
      </div>
    </div>
  );
}
