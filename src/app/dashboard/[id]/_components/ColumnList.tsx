"use client";

import { useEffect, useRef, useState } from "react";

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

interface Params {
  columnId: number;
  size: number;
  cursorId?: number;
}

export function ColumnList({ column }: { column: ColumnList }) {
  const { title, id } = column;
  const [cardList, setCardList] = useState<GetCardListResponse[]>([]);
  const cursorId = useRef<number | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState<number>(0);
  const observerTarget = useRef<HTMLDivElement>(null);

  const fetchCardList = async () => {
    //로딩 중이거나 불러올 데이터가 없다면 그대로 리턴
    if (isLoading || !hasMore) return;

    //처음에 로딩 중으로 세팅
    setIsLoading(true);

    try {
      const params: Params = {
        columnId: id,
        // @TODO size 변경 필요
        size: 1,
        ...(cursorId.current && { cursorId: cursorId.current }),
      };

      const coldata = await getCardList(params);
      if (coldata && coldata.cards) {
        setTotalCount(coldata.totalCount);
        setCardList((prev) => {
          const updated = [...prev, ...coldata.cards];
          if (updated.length === coldata.totalCount) {
            setHasMore(false);
          }
          return updated;
        });

        if (coldata.cursorId) {
          cursorId.current = coldata.cursorId;
        }
      }
    } catch (e) {
      console.error("데이터 페칭에러: ", e);
    } finally {
      setIsLoading(false);
    }
  };

  //초기데이터를 넣어주는 useEffect
  useEffect(() => {
    const load = async () => {
      fetchCardList();
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (
          entry.isIntersecting &&
          !isLoading &&
          hasMore &&
          cursorId.current != null
        ) {
          await fetchCardList();
        }
      });
    }, options);

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, hasMore]);

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
        contentCount={totalCount}
        /**
         * 톱니바퀴 누르면 칼럼 관리로 -> 수정하기/삭제하기 버튼 선택 가능 -> 칼럼 수정/삭제 모달 띄우기
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
            // API 호출
          }}
        />
      )}
    </div>
  );
}
