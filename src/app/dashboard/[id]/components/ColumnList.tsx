"use client";

import { useState } from "react";

import { DeleteAlertModal } from "@/components/DeleteAlertModal";

import userAddImg from "@/assets/dashboard/img-userAdd.png";
import ColumnEdit from "../edit/page";

import { ColumnCard } from "./ColumnCard";
import { ColumnListHeader } from "./ColumnListHeader";

interface Columndata {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

interface ColumnListProps {
  column: Columndata;
}

export function ColumnList({ column }: ColumnListProps) {
  const { title } = column;

  // 칼럼 삭제 모달 상태 관리
  const [isColumnEdit, setIsColumnEdit] = useState(false);
  // const [isModifyState, setIsModifyState] = useState(false);
  const [isDeleteState, setIsDeleteState] = useState(false);

  const handleOpenEdit = () => {
    setIsColumnEdit(true);
  };

  return (
    <div className="flex w-full flex-col gap-5 md:mx-10 lg:mx-0">
      <ColumnListHeader
        title={title}
        contentCount={3}
        /**
         * 톱니바퀴 누르면 칼럼 관리로 -> 수정하기/삭제하기 버튼 선택 가능 -> 칼럼 수정/삭제 모달 띄우기
         **/
        onSettingClick={handleOpenEdit}
      />
      <ColumnCard
        cardTitle="기능 설정"
        creator="김정은"
        imgSrc={userAddImg}
        onClick={handleOpenEdit}
      />
      <ColumnCard
        cardTitle="레퍼런스 찾기"
        creator="박민영"
        onClick={handleOpenEdit}
      />
      <ColumnCard
        cardTitle="GUI 디자인"
        creator="박민영"
        imgSrc={userAddImg}
        onClick={handleOpenEdit}
      />
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
            // API 호출
          }}
        />
      )}
    </div>
  );
}
