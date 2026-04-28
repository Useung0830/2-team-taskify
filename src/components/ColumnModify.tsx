"use client";

import { useState } from "react";

import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { Modal } from "@/components/modal/Modal";
import { ModalHeader } from "@/components/modal/ModalHeader";
import { cn } from "@/lib/cn";

interface ColumnModifyProps {
  currentColumnsNameList?: string[];
  onCancel?: () => void;
  onModify?: (newColumnName: string) => void;
}

export function ColumnModify({
  currentColumnsNameList = [],
  onCancel,
  onModify,
}: ColumnModifyProps) {
  const [newColumnName, setNewColumnName] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  // 취소 핸들러
  const handleCancel = () => {
    onCancel?.();
  };

  // 변경 핸들러
  const handleModify = () => {
    const trimNewColumnName = newColumnName.trim();
    setIsInputDisabled(trimNewColumnName.length === 0);

    if (trimNewColumnName.length === 0) {
      setErrMessage("수정할 칼럼명을 먼저 입력하고 변경 버튼을 누르세요!");
    } else if (currentColumnsNameList.includes(trimNewColumnName)) {
      setErrMessage("기존 칼럼 이름과 동일합니다..!");
    } else {
      setErrMessage("");
      onModify?.(trimNewColumnName);
    }
  };

  // 인풋 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewColumnName(e.target.value);
    if (errMessage) setErrMessage("");
  };

  return (
    <Modal>
      {/* Added for responsive(Desktop | Tablet | Mobile) modal width */}
      <div className="w-full max-w-83.75 min-w-83.75 md:max-w-150 md:min-w-150">
        {/* Modal Title */}
        <ModalHeader>칼럼 관리</ModalHeader>
        <Input errorMessage={errMessage}>
          {/* Input Field to modify(edit) ColumnName */}
          <Label htmlFor="columnmodify-label" className="mt-4 mb-3 md:mt-7">
            이름
          </Label>
          <Input.Wrapper>
            <Input.Field
              id="columnmodify-input"
              placeholder="수정할 칼럼명을 입력해주세요"
              value={newColumnName}
              onChange={handleChange}
            />
          </Input.Wrapper>
          <Input.Error />
        </Input>
        {/* Button Section */}
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
            onClick={handleModify}
            disabled={isInputDisabled}
            className={cn(
              "bg-brand-500 flex h-12.5 flex-1 cursor-pointer items-center justify-center rounded-full px-7.5 py-1.5 text-white md:h-15",
              isInputDisabled
                ? "bg-brand-500 cursor-not-allowed"
                : "bg-brand-500 cursor-pointer"
            )}
          >
            변경
          </button>
        </div>
      </div>
    </Modal>
  );
}
