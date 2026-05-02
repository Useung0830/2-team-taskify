"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { putColumnUpdate } from "@/api/data"; // 칼럼 삭제, 칼럼 수정 API 함수 임포트
import icX from "@/assets/common/ic-x.svg";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { Modal } from "@/components/modal/Modal";
import { cn } from "@/lib/cn";

interface ColumnEditModalProps {
  columnId: number;
  originTitle: string;
  columnList?: string[];
  onCancel?: () => void;
  onEdit?: () => Promise<void> | void;
  notifyToast?: (message: string) => void;
}

export function ColumnEditModal({
  columnId,
  originTitle,
  columnList = [],
  onCancel,
  onEdit,
  notifyToast,
}: ColumnEditModalProps) {
  const [editedTitle, setEditedTitle] = useState(originTitle);
  const [errorMsg, setErrorMsg] = useState("");
  const [isEditSubmitted, setIsEditSubmitted] = useState(false);

  const formattedColumnsTitle = useMemo(
    () => columnList.map((t) => t.trim().toLowerCase()),
    [columnList]
  );

  // isInputEmpty : 아무것도 입력되지 않은 상태
  const isInputEmpty = editedTitle.trim().length === 0;

  // isInputSameOrigin : 입력값과 기존 칼럼명이 일치하는 상태
  const isInputSameOrigin = editedTitle.trim() === originTitle.trim();

  // isInputDuplicated : 입력한 칼럼명이 칼럼 리스트에 존재하는 상태 (중복)
  const isInputDuplicated = formattedColumnsTitle
    .filter((t) => t !== originTitle.trim().toLowerCase())
    .includes(editedTitle.trim().toLowerCase());

  /** 칼럼 취소 핸들러 */
  const handleCancelColumnEdit = () => {
    onCancel?.();
  };

  /** 칼럼 변경/수정 핸들러 */
  const handleColumnEdit = async () => {
    if (isInputEmpty)
      return setErrorMsg(
        "수정할 칼럼명을 먼저 입력한 다음, 변경 버튼을 클릭해 주세요!"
      );

    if (isInputSameOrigin) {
      setErrorMsg("앗, 기존 칼럼명과 일치합니다! 다른 이름을 입력해 주세요😇");
      return;
    }

    if (isInputDuplicated) {
      setErrorMsg(
        "동일한 이름의 칼럼이 이미 존재합니다. 칼럼 리스트를 확인해 주세요😇"
      );
      return;
    }

    // API 함수 putColumnUpdate 실행
    try {
      setIsEditSubmitted(true);
      await putColumnUpdate(columnId, { title: editedTitle.trim() });
      onEdit?.();
    } catch (error) {
      notifyToast?.(
        error instanceof Error
          ? `${error.message}로 칼럼 추가에 실패하였습니다.`
          : "알 수 없는 오류로 칼럼 추가에 실패하였습니다."
      );
    } finally {
      setIsEditSubmitted(false);
    }
  };

  return (
    <Modal>
      {/* Added for responsive (Desktop | Tablet | Mobile) */}
      <div className="w-full max-w-83.75 min-w-83.75 md:max-w-150 md:min-w-150">
        {/* ModalHeader: Title, Xbutton */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-300">칼럼 수정</h2>
          <button
            type="button"
            onClick={handleCancelColumnEdit}
            className="relative h-6 w-6 transition-transform hover:scale-110 active:opacity-70"
          >
            <Image src={icX} height={24} width={24} alt="닫기 버튼" />
          </button>
        </div>

        {/* Input Section */}
        <Input errorMessage={errorMsg}>
          {/* Input Field to modify(edit) ColumnName */}
          <Label
            htmlFor="columnmodify-label"
            className={cn("mt-4 mb-1 text-base md:mt-5 md:text-lg")}
          >
            이름
          </Label>
          <Input.Wrapper>
            <Input.Field
              id="columnmodify-input"
              placeholder="수정할 칼럼명을 입력해주세요"
              value={editedTitle}
              onChange={(e) => {
                setEditedTitle(e.target.value);
                setErrorMsg("");
              }}
            />
          </Input.Wrapper>
          <Input.Error className="min-w-max text-sm whitespace-nowrap md:text-base" />
        </Input>

        {/* Button Section */}
        <div
          className={cn(
            "mt-6 flex items-center justify-between gap-10 text-center md:mt-7.5 md:gap-15"
          )}
        >
          <div className={cn("flex flex-1 justify-between gap-3 md:gap-5")}>
            <button
              type="button"
              onClick={handleCancelColumnEdit}
              className={cn(
                "bg-stroke text-background flex h-12.5 flex-1 cursor-pointer items-center justify-center rounded-full px-7.5 py-1.5 text-lg font-semibold md:h-15 md:text-xl"
              )}
            >
              취소
            </button>
            <button
              type="button"
              onClick={handleColumnEdit}
              disabled={isEditSubmitted}
              className={cn(
                "flex h-12.5 flex-1 cursor-pointer items-center justify-center rounded-full bg-blue-700 px-7.5 py-1.5 text-lg font-semibold text-blue-100 md:h-15 md:text-xl"
              )}
            >
              변경
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
