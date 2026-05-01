"use client";

import { useMemo, useState } from "react";

import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { Modal } from "@/components/modal/Modal";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { cn } from "@/lib/cn";

interface ColumnAddProps {
  currentColumnTitle?: string[];
  onCancel?: () => void;
  onCreate?: (columnName: string) => void;
  maxColumns?: number;
}

export function ColumnAddModal({
  currentColumnTitle = [],
  onCancel,
  onCreate,
  maxColumns = 10,
}: ColumnAddProps) {
  const [columnName, setColumnName] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const trimcolumnName = columnName.trim();

  const nomarlcolumnName = useMemo(
    () =>
      currentColumnTitle.map((columnName) => columnName.trim().toLowerCase()),
    [currentColumnTitle]
  );

  // input 입력값에 따른 비활성화
  const isCreateDisabled = trimcolumnName.length === 0;

  const handleCancel = () => {
    onCancel?.();
  };

  // 칼럼 최대 10개 에러문구
  const handleCreate = () => {
    if (currentColumnTitle.length >= maxColumns) {
      setErrMessage(`칼럼은 최대 ${maxColumns}개까지 생성할 수 있습니다!`);
      return;
    }

    // 중복된 칼럼명 에러문구
    if (nomarlcolumnName.includes(trimcolumnName.toLowerCase())) {
      setErrMessage("중복된 칼럼명입니다.");
      return;
    }

    setErrMessage("");
    onCreate?.(trimcolumnName);
    setColumnName("");
  };

  // 에러문구 초기화
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnName(e.target.value);
    if (errMessage) setErrMessage("");
  };

  return (
    <Modal>
      <ModalHeader>새 칼럼 생성</ModalHeader>
      <Input errorMessage={errMessage}>
        <Label htmlFor="columnname" className="mt-4 mb-3 md:mt-7">
          이름
        </Label>
        <Input.Wrapper>
          <Input.Field
            id="columnname"
            placeholder="칼럼명을 입력해주세요"
            value={columnName}
            onChange={handleChange}
          />
        </Input.Wrapper>
        <Input.Error />
      </Input>

      <div
        className={cn(
          "mt-4 flex items-center justify-center gap-3 text-center md:mt-7.5 md:gap-5"
        )}
      >
        <button
          type="button"
          onClick={handleCancel}
          className={cn(
            "flex h-12.5 flex-1 cursor-pointer items-center justify-center rounded-full bg-gray-900 px-7.5 py-1.5 text-gray-100 md:h-15"
          )}
        >
          취소
        </button>
        <button
          type="button"
          onClick={handleCreate}
          disabled={isCreateDisabled}
          className={cn(
            "bg-brand-500 flex h-12.5 flex-1 cursor-pointer items-center justify-center rounded-full px-7.5 py-1.5 text-white md:h-15",
            isCreateDisabled
              ? "bg-brand-500 cursor-not-allowed"
              : "bg-brand-500 cursor-pointer"
          )}
        >
          생성
        </button>
      </div>
    </Modal>
  );
}
