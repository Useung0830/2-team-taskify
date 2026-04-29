"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

import { getColumnList } from "@/api/data";
import colorChip from "@/assets/dashboard/ic-colorchips.svg";

import { ColumnEditModal } from "./_components/ColumnEditModal";
import { ColumnList } from "./_components/ColumnList";
// import { DUMMY_COLUMNS } from "./mock";

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

export default function Dashboard() {
  // const data = DUMMY_COLUMNS;
  const params = useParams();
  const dashboardId = params?.id ? Number(params.id) : NaN;

  const [columns, setColumns] = useState<Column[]>([]);
  const [activeColumnId, setActiveColumnId] = useState<number | null>(null);

  const [isColumnEditModalOpen, setIsColumnEditModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColumn, setSelectedColumn] = useState<Column | null>(null);

  const activeColumn = columns.find((col) => col.id === activeColumnId);

  const handleTabSwitch = (id: number) => {
    setActiveColumnId(id);
  };

  /** 컬럼 수정 버튼 클릭 핸들러 */
  const handleColumnEditModal = (column: Column) => {
    setSelectedColumn(column);
    setIsColumnEditModalOpen(true);
  };

  useEffect(() => {
    async function fetchData() {
      // 최소 로딩 시간 3초 설정
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // 유효한 dashboardId가 아닐 경우 데이터 로딩을 중단하여 예외 처리
      if (!dashboardId || isNaN(dashboardId)) {
        setIsLoading(false);
        return;
      }

      try {
        const res = await getColumnList(dashboardId);
        const fetchedData: Column[] = res.data || [];

        setColumns(fetchedData);

        // 초기 렌더링 시, 미선택 상태를 고려해 칼럼 리스트의 첫 번째(인덱스 0번) ID를 가져와 자동 바인딩
        if (fetchedData.length > 0 && activeColumnId === null) {
          setActiveColumnId(fetchedData[0].id);
        }
      } catch (error) {
        console.error("데이터 로딩 에러 발생 : ", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dashboardId]);

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="font-pretendard animate-bounce p-10 text-lg font-semibold text-white md:text-2xl">
          API에서 ColumnList 데이터 불러오는 중📑 ...
        </div>
      </div>
    );

  return (
    <div className="px-5 text-gray-100 lg:px-12.5">
      <div className="flex items-center gap-1 pt-6 pb-3.5 md:mx-10 lg:mx-0">
        {/* colorChip도 데이터에 맞게 변동 필요 */}
        <Image src={colorChip} alt="color chip" />
        <h1 className="text-2xl font-bold">포트폴리오</h1>
      </div>

      {/* 모바일과 태블릿 환경 전용 UI */}
      <div className="flex w-full gap-4 overflow-x-auto py-6 md:mx-10 lg:hidden">
        {columns.map((column) => (
          <button
            key={column.id}
            value={column.title}
            onClick={() => handleTabSwitch(column.id)}
            className={`min-h-8 rounded-4xl border border-gray-600 px-4 whitespace-nowrap transition-colors ${
              activeColumnId === column.id
                ? "bg-green-500 text-white"
                : "bg-gray-900"
            }`}
          >
            {column.title}
          </button>
        ))}
      </div>
      <div className="pt-2.5 lg:hidden">
        <div className="flex w-full justify-center gap-1.5">
          {activeColumn && (
            <ColumnList
              column={activeColumn}
              onSettingIconClick={() => handleColumnEditModal(activeColumn)}
            />
          )}
        </div>
      </div>

      {/* 데스크탑 전용 화면 */}
      <div className="hidden gap-15 lg:flex">
        {columns.map((column) => (
          <ColumnList
            key={column.id}
            column={column}
            onSettingIconClick={() => handleColumnEditModal(column)}
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
