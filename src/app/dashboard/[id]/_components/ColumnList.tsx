"use client";

import { useEffect, useRef, useState } from "react";

import { getCardList } from "@/api/data";
import { DeleteAlertModal } from "@/components/DeleteAlertModal";

import ColumnEdit from "../edit/page";

import { ColumnCard } from "./ColumnCard";
import { ColumnListHeader } from "./ColumnListHeader";

// ColumnResponse 기준을 맞추기 위해 옵셔널 속성 추가
export interface Columndata {
  id: number;
  title: string;
  color?: string;
  createdAt: string;
  updatedAt: string;
  createdByMe?: boolean;
  userId?: number;
}

interface ColumnListProps {
  column: Columndata;
  onSettingIconClick?: () => void; // 추가
}

export function ColumnList({ column, onSettingIconClick }: ColumnListProps) {
  const { title } = column;

  const handleColumnEditModal = () => {
    onSettingIconClick?.();
  };

  return (
    <div className="flex w-full flex-col gap-5 md:mx-10 lg:mx-0">
      <ColumnListHeader
        title={title}
        contentCount={totalCount}
        /**
         * 대시보드 페이지에서 세팅 아이콘 클릭 → 칼럼 관리(Column Management) → 즉시 칼럼 수정 모달창 열기 → 취소/변경 버튼 탑재 → 삭제 경고 모달창을 띄우기 위한 트리거가 칼럼 수정 모달창에서 삭제하기 버튼, 피그마 시안과 달리 실제 vercel로 배포된 것에서 칼럼 수정 모달에 삭제하기 버튼 존재   
         **/
        onSettingClick={handleOpenEdit}
      />
      {cardList?.map((colCard) => (
        <ColumnCard
          key={colCard.id}
          cardTitle={colCard.title}
          // tags={tags}
          // creator={colCard.assignee.nickname}
          // imgSrc={colCard.imageUrl}
          onClick={handleOpenEdit}
        />
      ))}
      {/* observer */}
      <div ref={observerTarget}></div>
      {/* 관리 버튼 클릭 -> /dashboard/{dashboardid}/edit 이동 -> 수정/삭제하기 버튼 선택에 따른 상태 관리 */}
      {isColumnEdit && (
        <ColumnEdit
          onClose={() => setIsColumnEdit(false)}
          onDelete={() => {
            setIsColumnEdit(false); // 관리창 닫기
            setIsDeleteState(true); // 삭제 확인 모달 열기
          }}
        />
      )}
      {/* 수정하기 모달 로직 */}

      {/* 삭제하기 모달 로직 */}
      {isDeleteState && (
        <DeleteAlertModal
          onCancel={() => setIsDeleteState(false)}
          onDelete={() => {
            setIsDeleteState(false);
          }}
        />
      )}
    </div>
  );
}
