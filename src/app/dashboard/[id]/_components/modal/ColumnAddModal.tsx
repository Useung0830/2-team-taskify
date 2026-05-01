"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { postColumn } from "@/api/data";
import icX from "@/assets/common/ic-x.svg";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { Modal } from "@/components/modal/Modal";
import { cn } from "@/lib/cn";

interface ColumnAddProps {
  dashboardId: number;
  currentColumnList: string[];
  onCancel?: () => void;
  onAdded?: (columntitle: string) => Promise<void> | void;
  maxColumns?: number;
  notifyToast?: (message: string) => void;
}

export function ColumnAddModal({
  dashboardId,
  currentColumnList = [],
  onCancel,
  onAdded,
  maxColumns = 10,
  notifyToast,
}: ColumnAddProps) {
  const [title, setTitle] = useState("");
  const [inputErrorMsg, setInputErrorMsg] = useState("");
  const [isAddSubmitting, setIsAddSubmitting] = useState(false);

  const trimmedTitle = title.trim();
  //const isColumnAddDisabled = trimmedTitle.length === 0 || isAddSubmitting; // 칼럼 추가 비활성화 조건

  // currentColumnList에서 제목만 뽑아 데이터 정규화 후 배열에 저장
  const formattedColumnList = useMemo(
    () => currentColumnList.map((title) => title.trim().toLowerCase()),
    [currentColumnList]
  );

  const isDuplicatedTitle = formattedColumnList.includes(
    trimmedTitle.toLowerCase()
  );

  // 칼럼 추가 핸들러
  const handleColumnAdd = async () => {
    if (currentColumnList.length >= maxColumns) {
      setInputErrorMsg(`칼럼은 최대 ${maxColumns}개까지 생성할 수 있습니다!`);
      return;
    }

    if (isDuplicatedTitle) {
      setInputErrorMsg("중복된 칼럼명입니다.");
      return;
    }

    try {
      setIsAddSubmitting(true);

      await postColumn({
        title: trimmedTitle,
        dashboardId,
      });
      onAdded?.(trimmedTitle);
      notifyToast?.("성공적으로 칼럼이 추가되었습니다!");
      setTitle("");
    } catch (error) {
      notifyToast?.(
        error instanceof Error
          ? `${error.message}로 칼럼 추가에 실패하였습니다.`
          : "알 수 없는 오류로 칼럼 추가에 실패하였습니다."
      );
    } finally {
      setIsAddSubmitting(false);
    }
  };

  // 칼럼 입력 감지 핸들러
  const handleInputValueUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (inputErrorMsg) setInputErrorMsg("");
  };

  // 칼럼 생성 취소 핸들러
  const handleCancelColumnAdd = () => {
    onCancel?.();
  };

  return (
    <Modal>
      {/* Added for responsive (Desktop | Tablet | Mobile) */}
      <div className="w-full max-w-83.75 min-w-83.75 md:max-w-150 md:min-w-150">
        {/* ModalHeader: Title, Xbutton */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-300">새 칼럼 생성</h2>
          <button
            type="button"
            onClick={handleCancelColumnAdd}
            className="relative h-6 w-6 transition-transform hover:scale-110 active:opacity-70"
          >
            <Image src={icX} height={24} width={24} alt="닫기 버튼" />
          </button>
        </div>

        {/* Input Section */}
        <Input errorMessage={inputErrorMsg}>
          <Label htmlFor="columnname" className="mt-4 mb-3 md:mt-7">
            이름
          </Label>
          <Input.Wrapper>
            <Input.Field
              id="columnname"
              placeholder="칼럼명을 입력해주세요"
              value={title}
              onChange={handleInputValueUpdate}
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
            onClick={handleCancelColumnAdd}
            className={cn(
              "flex h-12.5 flex-1 cursor-pointer items-center justify-center rounded-full bg-gray-900 px-7.5 py-1.5 text-gray-100 md:h-15"
            )}
          >
            취소
          </button>
          <button
            type="button"
            onClick={handleColumnAdd}
            disabled={isAddSubmitting}
            className={cn(
              "bg-brand-500 flex h-12.5 flex-1 cursor-pointer items-center justify-center rounded-full px-7.5 py-1.5 text-white md:h-15"
            )}
          >
            생성
          </button>
        </div>
      </div>
    </Modal>
  );
}
