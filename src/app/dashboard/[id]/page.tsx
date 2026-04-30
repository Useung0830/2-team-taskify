"use client";

import { use, useEffect, useState } from "react";

import { getColumnList, getDashboardDetail, postLogin } from "@/api/data";
import { HashtagIcon } from "@/assets/dashboard/ic-colorchips";

import { ColumnEditModal } from "./_components/ColumnEditModal";
import { ColumnList } from "./_components/ColumnList";
// import { DUMMY_COLUMNS } from "./mock";

// ColumnResponse 기준을 맞추기 위해 옵셔널 속성 추가
export interface Column {
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

export default function Dashboard({ params }: DashboardPageProps) {
  const [columnList, setColumnList] = useState<ColumnList[]>();
  const [activeCol, setActiveCol] = useState(columnList?.[0]);
  const [dashboardDetail, setDashboardDetail] = useState<Dashboard>();
  const { id } = use(params);

  useEffect(() => {
    const setUp = async () => {
      //임시 로그인
      await postLogin({ email: "333@333.com", password: "123123123" });
    };
    const fetchdashboardData = async () => {
      const columnData = await getColumnList(id);
      const dashboardData = await getDashboardDetail(id);
      setColumnList(columnData.data);
      setDashboardDetail(dashboardData);

      //columndata가 불러와졌고, 유효할 때 activeCol을 0번 인덱스로 초기화
      if (columnData.data && columnData.data.length > 0) {
        setActiveCol(columnData.data[0]);
      }
    };
    setUp();
    fetchdashboardData();
  }, [id]);

  const handleTabSwitch = (col: ColumnList) => {
    setActiveCol(() => col);
  };

  /** 컬럼 수정 버튼 클릭 핸들러 */
  const handleColumnEditModal = (column: Column) => {
    setSelectedColumn(column);
    setIsColumnEditModalOpen(true);
  };

  useEffect(() => {
    async function fetchData() {
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

  return (
    <div className="px-5 text-gray-100 lg:px-12.5">
      <div className="flex items-center gap-1 pt-6 pb-3.5 md:mx-10 lg:mx-0">
        {/* @TODO 컬러도 prop으로 바꿔서 데이터에 따라 바뀌도록 구현 */}
        <HashtagIcon />
        <h1 className="text-2xl font-bold">{dashboardDetail?.title}</h1>
      </div>

      {/* 모바일과 태블릿 환경 전용 UI */}
      <div className="flex w-full gap-4 py-6 md:mx-10 lg:hidden">
        {/* 버튼 리스트 */}
        {columnList?.map((column) => (
          <button
            key={column.id}
            value={column.title}
            onClick={() => handleTabSwitch(column)}
            className={`min-h-8 cursor-pointer rounded-4xl border border-gray-600 px-4 whitespace-nowrap transition-colors ${
              activeCol?.id === column.id
                ? "bg-green-500 text-white"
                : "bg-gray-900"
            }`}
          >
            {column.title}
          </button>
        ))}
      </div>
      {/* 실제 컬럼 리스트 */}
      <div className="pt-2.5 lg:hidden">
        <div className="flex w-full justify-center gap-1.5">
         {activeCol ? (
            <ColumnList key={activeCol.id} column={activeCol}  onSettingIconClick={() => handleColumnEditModal(activeCol)}/>
          ) : (
            <div className="text-gray-400">컬럼 데이터가 없습니다.</div>
          )}
        </div>
      </div>

      {/* 데스크탑 전용 화면 */}
      <div className="hidden gap-15 lg:flex">
        {columnList?.map((column) => (
          <ColumnList key={column.id} column={column} onSettingIconClick={() => handleColumnEditModal(column)}/>
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
