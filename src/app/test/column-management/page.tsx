"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { getColumnList, getDashboardList, postLogin } from "@/api/data";
import {
  ColumnAddModal,
  ColumnEditModal,
  ColumnDeleteAlertModal,
} from "@/app/dashboard/[id]/_components/modal";
import colorChip from "@/assets/dashboard/ic-colorchips.svg";

import { Toast } from "./Toast";

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

  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const notifyToast = (message: string) => {
    setToastMessage(message);
    setIsToastOpen(true);
  };

  const selectedColumn = useMemo(
    () => columnList.find((c) => c.columnId === selectedcolumnId) ?? null,
    [columnList, selectedcolumnId]
  );

  const refreshColumnList = async (id: number) => {
    const columnResponse = await getColumnList(id);
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
        await postLogin({ email: "777@777.com", password: "123123123" });

        const dashboardResponse = await getDashboardList({
          navigationMethod: "pagination",
          page: 1,
          size: 1,
        });

        const firstDashboard = dashboardResponse.dashboards[0];
        if (!firstDashboard) {
          notifyToast("생성된 대시보드가 없습니다.");
          return;
        }

        setDashboardId(firstDashboard.id);
        await refreshColumnList(firstDashboard.id);
      } catch (error) {
        notifyToast(
          error instanceof Error ? error.message : "초기 로딩에 실패했습니다."
        );
      }
    };

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-5 text-gray-100 lg:px-12.5">
      <div className="flex items-center gap-1 pt-6 pb-3.5">
        <Image src={colorChip} alt="color chip" />
        <h1 className="text-2xl font-bold">
          Test&nbsp;&nbsp;|&nbsp;&nbsp;Column
          Management&nbsp;&nbsp;|&nbsp;&nbsp;칼럼 추가, 수정, 삭제
        </h1>
      </div>

      {/* 칼럼 칩: 가로 스크롤 (최대 10개 대비) */}
      <div className="mb-4 flex w-full gap-2 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {columnList.map((col) => (
          <button
            key={col.columnId}
            type="button"
            onClick={() => setSelectedcolumnId(col.columnId)}
            className={`shrink-0 rounded px-3 py-1 whitespace-nowrap ${
              selectedcolumnId === col.columnId ? "bg-brand-500" : "bg-gray-800"
            }`}
          >
            {col.title}
          </button>
        ))}
      </div>

      {columnList.length === 0 && (
        <p className="mb-6 text-lg font-semibold text-gray-400 md:text-xl">
          생성된 칼럼이 없습니다. 추가하기 버튼을 이용해 칼럼을 생성하세요.
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={() => setIsAddMoalOpen(true)}
          disabled={!dashboardId}
          className="rounded bg-yellow-600 px-4 py-2 font-semibold disabled:opacity-50"
        >
          칼럼 추가하기
        </button>

        <button
          type="button"
          onClick={() => {
            if (!selectedColumn) {
              notifyToast("수정할 칼럼을 먼저 선택해 주세요.");
              return;
            }
            setIsEditModalOpen(true);
          }}
          className="rounded bg-blue-800 px-4 py-2 font-semibold text-white"
        >
          칼럼 수정하기
        </button>

        <button
          type="button"
          onClick={() => {
            if (!selectedColumn) {
              notifyToast("삭제할 칼럼을 먼저 선택해 주세요.");
              return;
            }
            setIsDeleteAlertModalOpen(true);
          }}
          className="rounded bg-rose-700 px-4 py-2 font-semibold"
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
          notifyToast={notifyToast}
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
          notifyToast={notifyToast}
        />
      )}

      {isDeleteAlertModalOpen && selectedColumn && (
        <ColumnDeleteAlertModal
          columnId={selectedColumn.columnId}
          onCancel={() => setIsDeleteAlertModalOpen(false)}
          onDelete={async () => {
            if (!dashboardId) return;
            await refreshColumnList(dashboardId);
            setIsDeleteAlertModalOpen(false);
          }}
          notifyToast={notifyToast}
        />
      )}

      <Toast
        open={isToastOpen}
        message={toastMessage}
        onClose={() => setIsToastOpen(false)}
      />
    </div>
  );
}
