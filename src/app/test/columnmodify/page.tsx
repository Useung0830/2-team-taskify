"use client";

import { useState } from "react";

import { ColumnModify } from "@/components/ColumnModify";
import { cn } from "@/lib/cn";

export default function TestColumnModifyPage() {
  const [isColumnModifyModalOpen, setIsColumnModifyModalOpen] = useState(false);
  const [newColumnNames, setNewColumnNames] = useState<string[]>([]);

  const handleColumnModifyModalOpen = () => {
    setIsColumnModifyModalOpen(true);
  };

  const handleClickCancel = () => {
    setIsColumnModifyModalOpen(false);
  };

  const handleClickModify = (newname: string) => {
    if (newColumnNames.includes(newname)) return;

    setNewColumnNames([...newColumnNames, newname]);
    setIsColumnModifyModalOpen(false);
  };

  return (
    <div>
      <button
        className={cn(
          "font-Pretendard text-base font-semibold text-gray-300 underline md:text-lg"
        )}
        onClick={handleColumnModifyModalOpen}
      >
        삭제하기
      </button>

      {isColumnModifyModalOpen && (
        <ColumnModify
          currentColumnsNameList={newColumnNames}
          onCancel={handleClickCancel}
          onModify={handleClickModify}
        />
      )}
    </div>
  );
}
