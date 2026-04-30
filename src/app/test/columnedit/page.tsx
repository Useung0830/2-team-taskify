"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { getColumnList } from "@/api/data";
import { ColumnEditModal } from "@/app/dashboard/[id]/_components/ColumnEditModal";
import { ColumnList } from "@/app/dashboard/[id]/_components/ColumnList";
import colorChip from "@/assets/dashboard/ic-colorchips.svg";

interface ColumnListResponse {
  result: string; // SUCCESS 또는 FAIL
  data: Column[]; // {id: , title: , teamId: , createdAt: , updatedAt: } ...
}

// ColumnResponse 기준을 맞추기 위해 옵셔널 속성 추가
interface Column {
  id: number;
  title: string;
  color?: string;
  createdAt: string;
  updatedAt: string;
  createdByMe?: boolean;
  userId?: number;
}

export default function TestPageColumnEdit() {
  const [columns, setColumns] = useState<Column[]>([]);
  const [isColumnEditModalOpen, setIsColumnEditModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState<Column | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 테스트용 대시보드 아이디
  const TEST_DASHBOARD_ID = 18144;

  useEffect(() => {
    async function fetchData() {
      // 최소 로딩 시간 3초 설정
      await new Promise((resolve) => setTimeout(resolve, 3000));

      try {
        setIsLoading(true);
        const res = (await getColumnList(
          TEST_DASHBOARD_ID
        )) as unknown as ColumnListResponse;

        // 디버깅 위해 추가
        console.warn("API에서 받아온 데이터 : ", res.data);
        console.warn("API에서 받아온 데이터 결과 : ", res.result);

        if (res.result === "SUCCESS") {
          const fetchedData = Array.isArray(res.data) ? res.data : [];
          setColumns(fetchedData);
          console.warn("서버에서 데이터 불러오기 성공!");
          alert("서버에서 데이터 불러오기 성공!");
        } else {
          console.error("서버에서 데이터 불러오기 실패 : ", res.result);
          // 서버 응답이 FAIL이면 setColumns를 빈 배열로 초기화
          setColumns([]);
        }
      } catch (error) {
        console.error("데이터 로딩 에러 발생 : ", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [TEST_DASHBOARD_ID]);

  const handleColumnEditModal = (column: Column) => {
    setSelectedColumn(column);
    setIsColumnEditModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="font-pretendard animate-bounce p-10 text-lg font-semibold text-white md:text-2xl">
          API에서 ColumnList 데이터 불러오는 중📑 ...
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 text-gray-100 lg:px-12.5">
      <div className="flex items-center gap-1 pt-6 pb-3.5 md:mx-10 lg:mx-0">
        {/* colorChip도 데이터에 맞게 변동 필요 */}
        <Image src={colorChip} alt="color chip" />
        <h1 className="text-2xl font-bold">
          [ TestPage ]&nbsp;&nbsp;칼럼 수정
        </h1>
      </div>
      <div className="flex gap-5 overflow-x-auto">
        {columns.map((col) => (
          <ColumnList
            key={col.id}
            column={col}
            onSettingIconClick={() => handleColumnEditModal(col)}
          />
        ))}
      </div>

      {isColumnEditModalOpen && selectedColumn && (
        <ColumnEditModal
          columnId={selectedColumn.id}
          initialTitle={selectedColumn.title}
          columnsList={columns.map((c) => c.title)}
          onCancel={() => setIsColumnEditModalOpen(false)}
          onEdit={() => {
            setIsColumnEditModalOpen(false);
            // 변경 사항 반영을 위한 Page Reload (데이터 동기화) = router.refresh();
            window.location.reload();
          }}
        />
      )}
    </div>
  );
}
