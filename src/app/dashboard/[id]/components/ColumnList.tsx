"use client";

import { useState } from "react";

import { DeleteAlertModal } from "@/components/DeleteAlertModal";

import userAddImg from "../assets/img-userAdd.png";

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
        <div>
          <h2 className="mb-6 text-xl">컬럼 관리</h2>
          {/* 수정 버튼 클릭 시 칼럼 수정 모달 오픈
          <button
            onClick={() => {
              setIsModifyState(true);
            }}
            className="rounded bg-violet-600 p-2 text-white"
          >
            수정하기
          </button> */}

          {/* 삭제 버튼 클릭 시 칼럼 삭제 모달 오픈 */}
          <button
            onClick={() => {
              setIsDeleteState(true);
            }}
            className="h-15 w-15 text-white"
          >
            삭제하기
          </button>
          <button onClick={() => setIsColumnEdit(false)}>닫기</button>
        </div>
      )}
      {/* 수정하기 모달 로직 */}

      {/* 삭제하기 모달 로직 */}
      {isDeleteState && (
        <div>
          <DeleteAlertModal
            onCancel={() => setIsDeleteState(false)} // 취소 시 삭제 모달만 닫기
            onDelete={() => {
              setIsDeleteState(false); // 삭제 완료 후 닫기
            }}
          />
        </div>
      )}
    </div>
  );
}
