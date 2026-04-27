"use client";

import { useEffect, useState } from "react";

import { getCardList } from "@/api/data";
import { DeleteAlertModal } from "@/components/DeleteAlertModal";

import ColumnEdit from "../edit/page";

import { ColumnCard } from "./ColumnCard";
import { ColumnListHeader } from "./ColumnListHeader";

interface ColumnList {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  teamId: string;
  tags: string[];
}

interface Assignee {
  profileImageUrl: string;
  nickname: string;
  id: number;
}

interface GetCardListResponse {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: Assignee;
  imageUrl: string;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

export function ColumnList({ column }: { column: ColumnList }) {
  const { title, id, tags } = column;
  const [cardList, setCardList] = useState<GetCardListResponse[]>([]);

  useEffect(() => {
    //전송할 객체 생성
    const params = {
      columnId: id,
      size: 1,
    };

    //초기 카드리스트 불러오는 함수, 데이터를 불러오고 cardList state에 초기값 세팅
    const fetchCardList = async () => {
      //coldata안에 cursorId랑 total 있음
      const coldata = await getCardList(params);
      if (coldata && coldata.cards) {
        setCardList(coldata.cards);
      }
    };
    fetchCardList();
  }, [id]);

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
        contentCount={cardList.length}
        /**
         * 톱니바퀴 누르면 칼럼 관리로 -> 수정하기/삭제하기 버튼 선택 가능 -> 칼럼 수정/삭제 모달 띄우기
         **/
        onSettingClick={handleOpenEdit}
      />
      {cardList?.map((colCard) => (
        <ColumnCard
          key={colCard.id}
          cardTitle={colCard.title}
          tags={tags}
          // creator={colCard.assignee.nickname}
          // imgSrc={colCard.imageUrl}
          onClick={handleOpenEdit}
        />
      ))}
      {/* observer */}
      <div></div>
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
