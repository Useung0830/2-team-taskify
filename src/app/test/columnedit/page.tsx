"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { getDashboardList, getColumnList } from "@/api/data";
import { ColumnEditModal } from "@/app/dashboard/[id]/_components/ColumnEditModal";
// import { ColumnList } from "@/app/dashboard/[id]/_components/ColumnList";
import colorChip from "@/assets/dashboard/ic-colorchips.svg";

interface Column {
  id: number;
  title: string;
  teamId: string;
  createdAt: string;
  updatedAt: string;
}

// interface Dashboard {
//   id: number;
//   title: string;
//   color: string;
//   createdAt: string;
//   updatedAt: string;
//   createdByMe: boolean;
//   userId: number;
// }

export default function ColumnEditModalTest() {
  const [dashboardId, setDashboardId] = useState<number | null>(null);
  const [columns, setColumns] = useState<Column[]>([]);
  const [selectedColumn, setSelectedColumn] = useState<Column | null>(null);
  const [isColumnEditModalOpen, setIsColumnEditModalOpen] = useState(false); // 칼럼 수정 모달 상태 관리
  const [assignedTitle, setAssignTitle] = useState("");

  /**
   * 마운트 시
   * 대시보드 목록 조회 → 유효한 dashboardId 추출 → 칼럼 목록 조회 → columnId 추출
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashboardResponse = await getDashboardList({
          navigationMethod: "pagination",
          page: 1,
          size: 10,
        });

        const dashboard1st = dashboardResponse.dashboards[0];
        if (!dashboard1st) {
          alert("생성된 대시보드가 없습니다.");
          console.warn("생성된 대시보드가 없습니다.");
          return;
        }

        const dashboardId1st = dashboard1st.id;
        setDashboardId(dashboardId1st);

        const columnResponse = await getColumnList(dashboardId1st);
        if (columnResponse.result === "SUCCESS") {
          setColumns(columnResponse.data);

          if (columnResponse.data.length > 0) {
            // 데이터가 있을 때
            setSelectedColumn(columnResponse.data[0]);
          } else {
            // 데이터가 없을 때만 랜덤 제목 생성
            const defaultColumnSet = ["To do", "On progress", "Done"];
            const chosen = defaultColumnSet[Math.floor(Math.random() * 3)];
            setAssignTitle(chosen);
          }
        }
      } catch (error) {
        console.error("데이터 로딩 중 에러 발생 : ", error);
      }
    };
    fetchData();
  }, []);

  /** 칼럼 수정 모달 열기 핸들러 */
  const handleColumnEditModalOpen = () => {
    setIsColumnEditModalOpen(true);
  };

  /** 칼럼 수정 모달 닫기 핸들러 */
  const handleColumnEditModalClose = () => {
    setIsColumnEditModalOpen(false);
  };

  /** 칼럼 변경사항 적용 핸들러 */
  const handleColumnTitleChanged = async () => {
    if (!dashboardId || !selectedColumn) return;

    // 현재 columnId 확인
    const currentId = selectedColumn.id;

    // 서버에서 columnResponse 로드
    const columnResponseLoad = await getColumnList(dashboardId);

    // 서버 응답이 성공이라면 데이터 업데이트
    if (columnResponseLoad.result === "SUCCESS") {
      const updatedColumns = columnResponseLoad.data;
      setColumns(updatedColumns);

      const isUpdatedColumn = updatedColumns.find(
        (col: Column) => col.id === currentId
      );

      if (isUpdatedColumn) {
        setSelectedColumn(isUpdatedColumn);
      } else {
        setSelectedColumn(updatedColumns[0]);
      }
    }
    setIsColumnEditModalOpen(false);
  };

  return (
    <div className="px-5 text-gray-100 lg:px-12.5">
      <div className="flex items-center gap-1 pt-6 pb-3.5">
        <Image src={colorChip} alt="color chip" />
        <h1 className="text-2xl font-bold">칼럼 수정 모달 Test</h1>
      </div>

      <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
        <button
          onClick={handleColumnEditModalOpen}
          className="rounded-full bg-purple-950 px-10 py-6 text-xl font-bold text-white md:text-2xl"
        >
          칼럼 수정 모달 Open
        </button>
      </div>

      {/* 칼럼 수정 모달 렌더링 */}
      {isColumnEditModalOpen && (
        <ColumnEditModal
          columnId={selectedColumn?.id || 0}
          initialTitle={selectedColumn?.title || assignedTitle}
          columnsList={columns.map((col) => col.title)}
          onCancel={handleColumnEditModalClose}
          onEdit={handleColumnTitleChanged}
        />
      )}
    </div>
  );
}
