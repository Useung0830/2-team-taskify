"use client";

import { useEffect, useMemo, useState } from "react";

import { getColumnList, getDashboardList, postLogin } from "@/api/data";
import {
  ColumnAddModal,
  ColumnEditModal,
  ColumnDeleteAlertModal,
} from "@/app/dashboard/[id]/_components/modal";

export interface Column {
  columnId: number;
  title: string;
  teamId: string;
  createdAt: string;
  updatedAt: string;
}

export default function TestColumnManagementPage() {
  const [dashboardId, setDashboardId] = useState<number | null>(null);
  const [columnList, setColumnList] = useState<Column[]>([]);
  const [selectedcolumnId, setSelectedcolumnId] = useState<number | null>(null);

  const [isAddModalOpen, setIsAddMoalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteAlertModalOpen, setIsDeleteAlertModalOpen] = useState(false);

  const selectedColumn = useMemo(
    () => columnList.find((c) => c.columnId === selectedcolumnId) ?? null,
    [columnList, selectedcolumnId]
  );

  const refreshColumnList = async (dashboardId: number) => {
    const columnResponse = await getColumnList(dashboardId);
    if (columnResponse.result !== "SUCCESS") return;

    setColumnList(
      columnResponse.data.map((c) => ({
        columnId: c.id,
        title: c.title,
        teamId: c.teamId,
        createdAt: c.createdAt,
        updatedAt: c.updatedAt,
      }))
    );

    if (columnResponse.data.length === 0) {
      setSelectedcolumnId(null);
      return;
    }

    const isExisting = selectedcolumnId
      ? columnResponse.data.some((c) => c.id === selectedcolumnId)
      : false;

    setSelectedcolumnId(
      isExisting ? selectedcolumnId : columnResponse.data[0].id
    );
  };

  useEffect(() => {
    const init = async () => {
      try {
        // 테스트 로그인
        await postLogin({ email: "777@777.com", password: "123123123" });

        const dashboardResponse = await getDashboardList({
          navigationMethod: "pagination",
          page: 1,
          size: 1,
        });

        const firstDashboard = dashboardResponse.dashboards[0];
        if (!firstDashboard) {
          alert("생성된 대시보드가 없습니다.");
          return;
        }

        setDashboardId(firstDashboard.id);
        await refreshColumnList(firstDashboard.id);
      } catch (error) {
        alert(error instanceof Error ? error.message : "초기 로딩 실패");
      }
    };

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dashboardId]);

  return (
    <div className="p-6 text-white">
      <h1 className="mb-4 text-2xl font-bold">
        Test&nbsp;&nbsp;|&nbsp;&nbsp;Column
        Management&nbsp;&nbsp;|&nbsp;&nbsp;칼럼 추가, 수정, 삭제
      </h1>

      <div className="mb-5 flex flex-wrap gap-2">
        {columnList.map((col) => (
          <button
            key={col.columnId}
            type="button"
            onClick={() => setSelectedcolumnId(col.columnId)}
            className={`rounded px-3 py-1 ${
              selectedcolumnId === col.columnId ? "bg-brand-500" : "bg-gray-800"
            }`}
          >
            {col.title}
          </button>
        ))}
        {columnList.length === 0 && (
          <p className="text-gray-400">
            생성된 칼럼이 없습니다. 추가하기 버튼을 이용해 칼럼을 생성해 주세요!
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setIsAddMoalOpen(true)}
          disabled={!dashboardId}
          className="rounded bg-blue-700 px-4 py-2 disabled:opacity-50"
        >
          칼럼 추가하기
        </button>

        <button
          type="button"
          onClick={() => {
            if (!selectedColumn)
              return alert("수정할 칼럼을 먼저 선택해 주세요.");
            setIsEditModalOpen(true);
          }}
          className="rounded bg-purple-700 px-4 py-2"
        >
          칼럼 수정하기
        </button>

        <button
          type="button"
          onClick={() => {
            if (!selectedColumn)
              return alert("삭제할 칼럼을 먼저 선택해 주세요.");
            setIsDeleteAlertModalOpen(true);
          }}
          className="rounded bg-rose-700 px-4 py-2"
        >
          칼럼 삭제하기
        </button>
      </div>

      {isAddModalOpen && dashboardId && (
        <ColumnAddModal
          dashboardId={dashboardId}
          currentColumnList={columnList.map((c) => c.title)}
          maxColumns={10}
          onCancel={() => setIsAddMoalOpen(false)}
          onAdded={async () => {
            await refreshColumnList(dashboardId);
            setIsAddMoalOpen(false);
          }}
        />
      )}

      {isEditModalOpen && selectedColumn && (
        <ColumnEditModal
          columnId={selectedColumn.columnId}
          originTitle={selectedColumn.title}
          columnList={columnList.map((c) => c.title)}
          onCancel={() => setIsEditModalOpen(false)}
          onEdit={async () => {
            if (!dashboardId) return;
            await refreshColumnList(dashboardId);
            setIsEditModalOpen(false);
          }}
        />
      )}

      {isDeleteAlertModalOpen && selectedColumn && (
        <ColumnDeleteAlertModal
          columnId={selectedColumn.columnId}
          onCancel={() => setIsDeleteAlertModalOpen(false)}
          onDelete={() => {
            if (!dashboardId) return;
            setIsDeleteAlertModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
