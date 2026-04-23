"use client";

import Image from "next/image";
import { useState } from "react";

import leftbtn from "../assets/ic_left_arrow.svg";
import rightbtn from "../assets/ic_right_arrow.svg";

import { mockdata } from "./mock";
import { MydashboardList } from "./MydashboardList";

export function MydashContainer() {
  const [currentPage, setCurrentPage] = useState(0);
  const SHOW_FIRST_ITEM = 3;
  const SHOW_ITEMS = 4;

  const getDataSlicing = () => {
    if (currentPage === 0) {
      return mockdata.slice(0, SHOW_FIRST_ITEM);
    }

    const start = SHOW_FIRST_ITEM + SHOW_ITEMS * (currentPage - 1);
    const end = start + SHOW_ITEMS;

    return mockdata.slice(start, end);
  };

  const totalPages =
    Math.ceil((mockdata.length - SHOW_FIRST_ITEM) / SHOW_ITEMS) + 1;

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage((p) => p + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage((p) => p - 1);
  };

  const pagedData = getDataSlicing();

  return (
    <div className="flex flex-col py-2.5">
      <MydashboardList data={pagedData} currentPage={currentPage} />
      <div className="ml-auto flex gap-5 pt-5">
        <div>
          {" "}
          {currentPage + 1} of {totalPages}
        </div>
        <button
          className="disabled: disabled:opacity-30"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          <Image src={leftbtn} alt="left" />
        </button>
        <button
          className="disabled: disabled:opacity-30"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          <Image src={rightbtn} alt="right" />
        </button>
      </div>
    </div>
  );
}
