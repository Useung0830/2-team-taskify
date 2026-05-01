"use client";

import Image from "next/image";
import { useState } from "react";

import { putColumnUpdate, deleteColumn } from "@/api/data"; // 칼럼 삭제, 칼럼 수정 API 함수 임포트
import icX from "@/assets/common/ic-x.svg";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { Modal } from "@/components/modal/Modal";
import { cn } from "@/lib/cn";

import { ColumnDeleteAlertModal } from "./ColumnDeleteAlertModal";

interface APIError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

interface ColumnEditModalProps {
  columnId: number;
  initialTitle: string;
  columnList?: string[];
  onCancel?: () => void;
  onEdit?: () => void;
}

export function ColumnEditModal({
  columnId,
  initialTitle,
  columnList = [],
  onCancel,
  onEdit,
}: ColumnEditModalProps) {
  const [editedTitle, setEditedTitle] = useState(initialTitle);
  const [originTitle] = useState(initialTitle);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 삭제하기 버튼 클릭 시 delete alert 모달을 띄우고 상태 제어를 위해 추가
  const [isDeleteAlertModalOpen, setIsDeleteAlertModalOpen] = useState(false);

  // isInputEmpty : 아무것도 입력되지 않은 상태
  const isInputEmpty = editedTitle.trim().length === 0;

  // isInputSame : 입력값과 기존 칼럼명이 일치하는 상태
  const isInputSameOrigin = editedTitle.trim() === originTitle.trim();

  // isInputDuplicated : 입력한 칼럼명이 칼럼 리스트에 존재하는 상태 (중복)
  const isInputDuplicatedOthers = columnList
    .filter((title) => title !== originTitle)
    .includes(editedTitle.trim());

  /** 취소 버튼 핸들러 */
  const handleColumnEditModalClose = () => {
    onCancel?.();
  };

  /** 변경 버튼 핸들러 */
  const handleColumnTitleChange = async () => {
    if (isInputEmpty) {
      setErrorMsg(
        "수정할 칼럼명을 먼저 입력한 다음, 변경 버튼을 클릭해 주세요!"
      );
      return;
    }

    if (isInputSameOrigin) {
      setErrorMsg("앗, 기존 칼럼명과 일치합니다! 다른 이름을 입력해 주세요😇");
      return;
    }

    if (isInputDuplicatedOthers) {
      setErrorMsg(
        "동일한 이름의 칼럼이 이미 존재합니다. 칼럼 리스트를 확인해 주세요😇"
      );
      return;
    }

    // API 함수 putColumnUpdate 실행
    try {
      setIsLoading(true);
      await putColumnUpdate(columnId, { title: editedTitle.trim() });
      onEdit?.();
    } catch (error) {
      const errorData = error as APIError;
      setErrorMsg(
        errorData.response?.data?.message || "칼럼 수정에 실패하였습니다."
      );
    } finally {
      setIsLoading(false);
    }
  };

  /** 삭제하기 버튼 핸들러 */
  const handleAllColumnCardDelete = async () => {
    // API 함수 deleteColumn 실행
    try {
      setIsLoading(true);
      await deleteColumn(columnId);
      alert("해당 컬럼의 모든 할 일 카드들이 성공적으로 삭제되었습니다!");
      onEdit?.();
    } catch (error) {
      const errorData = error as APIError;
      alert(errorData.response?.data?.message || "칼럼 삭제에 실패하였습니다.");
    }
  };

  // 삭제하기 버튼이 클릭되어 ColumnEditDeleteAlertModal이 열린 상태
  if (isDeleteAlertModalOpen) {
    return (
      <ColumnDeleteAlertModal
        onCancel={() => setIsDeleteAlertModalOpen(false)} // No 클릭 시 모달 닫기
        onDelete={handleAllColumnCardDelete} // Yes 클릭 시 칼럼 삭제 실행
      />
    );
  }

  return (
    <Modal>
      {/* For responsive(Desktop | Tablet | Mobile) modal width */}
      <div className="w-full max-w-83.75 min-w-83.75 md:max-w-150 md:min-w-150">
        {/* Modal Title */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-300">칼럼 관리</h2>
          <button
            type="button"
            onClick={handleColumnEditModalClose}
            className="relative h-6 w-6 transition-transform hover:scale-110 active:opacity-70"
          >
            <Image src={icX} height={24} width={24} alt="닫기 버튼" />
          </button>
        </div>
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
          {/* 왼쪽 : 삭제하기 버튼 */}
          <button
            type="button"
            onClick={() => setIsDeleteAlertModalOpen(true)}
            className={cn(
              "text-Pretendard w-fit justify-start text-base font-semibold text-red-500 underline md:text-lg"
            )}
          >
            삭제하기
          </button>

          {/* 오른쪽 : 취소|변경 버튼 */}
          <div className={cn("flex flex-1 justify-end gap-3 md:gap-5")}>
            <button
              type="button"
              onClick={handleColumnEditModalClose}
              className={cn(
                "flex h-12.5 flex-1 cursor-pointer items-center justify-center rounded-full bg-gray-900 px-7.5 py-1.5 text-base text-gray-100 md:h-15 md:text-lg"
              )}
            >
              취소
            </button>
            <button
              type="button"
              onClick={handleColumnTitleChange}
              className={cn(
                "bg-brand-500 flex h-12.5 flex-1 cursor-pointer items-center justify-center rounded-full px-7.5 py-1.5 text-base text-white md:h-15 md:text-lg"
              )}
            >
              {isLoading ? "변경 중..." : "변경"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
