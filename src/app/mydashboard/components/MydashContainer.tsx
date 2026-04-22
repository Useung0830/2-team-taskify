"use client";

import MydashboardList from "./MydashboardList";
import rightbtn from "../assets/rightBtn.svg";
import leftbtn from "../assets/leftBtn.svg";
import Image from "next/image";
import mockdata from "./mock";
import { useState } from "react";

export default function MydashContainer() {
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
          {currentPage} of {totalPages}
        </div>
        <Image
          onClick={() => {
            handlePrev;
          }}
          src={leftbtn}
          alt="left"
        />
        <Image
          onClick={() => {
            handleNext;
          }}
          src={rightbtn}
          alt="right"
        />
      </div>
    </div>
  );
}
