"use client";

import userAddImg from "../_assets/img-userAdd.png";

import { ColumnCard } from "./ColumnCard";
import { ColumnListHeader } from "./ColumnListHeader";

interface Columndata {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

interface ColumnListProps {
  column: Columndata;
}

export function ColumnList({ column }: ColumnListProps) {
  const { title } = column;

  return (
    <div className="flex w-full flex-col gap-5 md:mx-10 lg:mx-0">
      <ColumnListHeader title={title} contentCount={3} />
      <ColumnCard cardTitle="기능 설정" creator="김정은" imgSrc={userAddImg} />
      <ColumnCard cardTitle="레퍼런스 찾기" creator="박민영" />
      <ColumnCard cardTitle="GUI 디자인" creator="박민영" imgSrc={userAddImg} />
    </div>
  );
}
