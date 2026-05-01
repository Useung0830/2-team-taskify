"use client";

import { useEffect, useRef, useState } from "react";

import { getCardList } from "@/api/data";

import { ColumnAdd } from "./ColumnAdd";
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
  dueDate?: string;
  assignee?: Assignee;
  imageUrl?: string;
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
        size: 5,
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

  return (
    <div className="flex w-full flex-col gap-5 md:mx-10 lg:mx-0">
      <ColumnListHeader title={title} contentCount={totalCount} />
      {cardList?.map((colCard) => (
        <ColumnCard
          key={colCard.id}
          cardTitle={colCard.title}
          tags={colCard.tags}
          creator={colCard.assignee?.nickname}
          imgSrc={colCard.imageUrl}
        />
      ))}
      {/* observer */}
      <div ref={observerTarget}></div>
      <ColumnAdd />
    </div>
  );
}
