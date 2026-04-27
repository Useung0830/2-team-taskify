"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getDashboardDetail } from "@/api/data";
import { DashboardColorChoiceList } from "@/components/DashboardColorChoiceList";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";

interface DashboardData {
  title: string;
  color: string;
}

const initialDashboardData: DashboardData = {
  title: "",
  color: "",
};

export function DashboardEdit() {
  const params = useParams();
  const dashboardId = Number(params.id);

  const [dashboardData, setDashboardData] =
    useState<DashboardData>(initialDashboardData);

  useEffect(() => {
    if (!dashboardId) return;

    const fetchDashboard = async () => {
      try {
        const data = await getDashboardDetail(dashboardId);
        setDashboardData({
          title: data.title,
          color: data.color,
        });
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchDashboard();
  }, [dashboardId]);
  return (
    <form className="flex flex-col gap-7.5 max-md:gap-4">
      <Input>
        <Label htmlFor="name">이름</Label>
        <Input.Wrapper>
          <Input.Field
            value={dashboardData.title}
            id="name"
            placeholder="이름을 입력해주세요"
            onChange={(e) =>
              setDashboardData({ ...dashboardData, title: e.target.value })
            }
          />
        </Input.Wrapper>
      </Input>
      <div className="min-w-83.75">
        <DashboardColorChoiceList size={"edit"} />
      </div>
    </form>
  );
}
