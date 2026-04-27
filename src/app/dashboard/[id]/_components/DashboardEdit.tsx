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

export type ColorName = "red" | "orange" | "yellow" | "green" | "blue";

interface ColorMap {
  [hex: string]: ColorName;
}

export function DashboardEdit() {
  const params = useParams();
  const dashboardId = Number(params.id);

  const [dashboardData, setDashboardData] =
    useState<DashboardData>(initialDashboardData);

  const COLOR_MAP: ColorMap = {
    "#AE2E24": "red",
    "#9F4B00": "orange",
    "#BD8C00": "yellow",
    "#206E4E": "green",
    "#1458BC": "blue",
  };

  const REVERSE_COLOR_MAP = Object.fromEntries(
    Object.entries(COLOR_MAP).map(([hex, name]) => [name, hex])
  );

  useEffect(() => {
    if (!dashboardId) return;

    const fetchDashboard = async () => {
      try {
        const data = await getDashboardDetail(dashboardId);
        setDashboardData({
          title: data.title,
          color: data.color, // 서버에서 온 헥사코드 (예: #AE2E24)
        });
      } catch (error) {
        console.error("데이터 오류:", error);
      }
    };

    fetchDashboard();
  }, [dashboardId]);

  const selectedColorName: ColorName = COLOR_MAP[dashboardData.color];

  const handleColorChange = (name: string) => {
    const hexCode = REVERSE_COLOR_MAP[name];
    setDashboardData({ ...dashboardData, color: hexCode });
  };

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
        <DashboardColorChoiceList
          size={"edit"}
          selectedColorName={selectedColorName}
          onColorChange={handleColorChange}
        />
      </div>
    </form>
  );
}
