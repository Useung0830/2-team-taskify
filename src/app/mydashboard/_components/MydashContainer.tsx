"use client";

import { useState } from "react";

import { PaginationButton } from "@/components/PaginationButton";

import { useWindowSize } from "../hooks/usewindow-size";
import { DashboardList, SIZE } from "../page";

import { MydashboardList } from "./MydashboardList";

export function MydashContainer({
  data,
  total,
  loadPage,
  handleNeedsMoreData,
}: {
  data: DashboardList[];
  total: number;
  loadPage: number;
  handleNeedsMoreData: () => void;
}) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const widthSize = useWindowSize();
  const SHOW_FIRST_ITEM = widthSize >= 1024 ? 3 : 1;
  const SHOW_ITEMS = widthSize >= 1024 ? 4 : 2;

  const needsFetchMore = () => {
    if (Math.round((SIZE * loadPage) / SHOW_ITEMS) >= currentPage) {
      handleNeedsMoreData();
    }
  };

  const getDataSlicing = () => {
    if (currentPage === 0) {
      return data.slice(0, SHOW_FIRST_ITEM);
    }

    const start = SHOW_FIRST_ITEM + SHOW_ITEMS * (currentPage - 1);
    const end = start + SHOW_ITEMS;

    return data.slice(start, end);
  };

  const totalPages = Math.ceil((total - SHOW_FIRST_ITEM) / SHOW_ITEMS) + 1;

  const onClickNext = () => {
    needsFetchMore();
    if (currentPage < totalPages - 1) setCurrentPage((p) => p + 1);
  };

  const onClickPrev = () => {
    if (currentPage > 0) setCurrentPage((p) => p - 1);
  };

  const pagedData = getDataSlicing();

  return (
    <div className="flex flex-col py-2.5">
      <MydashboardList data={pagedData} currentPage={currentPage + 1} />
      <PaginationButton
        current={currentPage}
        total={totalPages}
        handleClickPrev={onClickPrev}
        handleClickNext={onClickNext}
      />
    </div>
  );
}
