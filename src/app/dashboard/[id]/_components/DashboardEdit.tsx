"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getDashboardDetail, putDashboardUpdate } from "@/api/data";
import { DashboardColorChoiceList } from "@/components/DashboardColorChoiceList";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { SaveToast } from "@/components/Toast";

export interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}
interface DashboardData {
  title: string;
  color: string;
}

const initialDashboardData: DashboardData = {
  title: "",
  color: "",
};

type ColorName = "red" | "orange" | "yellow" | "green" | "blue";

interface ColorMap {
  [hex: string]: ColorName;
}

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

export function DashboardEdit() {
  const params = useParams();
  const dashboardId = Number(params.id);

  const [dashboardData, setDashboardData] =
    useState<DashboardData>(initialDashboardData);
  const [originalData, setOriginalData] =
    useState<DashboardData>(initialDashboardData);
  const [isUpdating, setIsUpdating] = useState(false);

  const isChanged =
    dashboardData.title !== originalData.title ||
    dashboardData.color !== originalData.color;

  useEffect(() => {
    if (!dashboardId) return;

    const fetchDashboard = async () => {
      try {
        const data = await getDashboardDetail(dashboardId);
        const fetchedData = {
          title: data.title,
          color: data.color,
        };
        setDashboardData(fetchedData);
        setOriginalData(fetchedData);
      } catch (error) {
        console.error("데이터 오류:", error);
      }
    };

    fetchDashboard();
  }, [dashboardId]);

  const handleSave = async () => {
    try {
      setIsUpdating(true);
      await putDashboardUpdate(dashboardId, dashboardData);

      // 저장 성공 시 현재 데이터를 다시 원본으로 설정 (토스트 사라짐)
      setOriginalData(dashboardData);
      alert("변경사항이 저장되었습니다.");
    } catch (error) {
      const err = error as ApiError;
      const errorMessage =
        err.response?.data?.message || "저장에 실패했습니다.";
      alert(errorMessage);
    } finally {
      setIsUpdating(false);
    }
  };

  const selectedColorName: ColorName = COLOR_MAP[dashboardData.color];

  const handleColorChange = (name: string) => {
    const hexCode = REVERSE_COLOR_MAP[name];
    setDashboardData({ ...dashboardData, color: hexCode });
  };

  return (
    <div>
      <form
        className="flex flex-col gap-7.5 max-md:gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
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
            type={"edit"}
            selectedColorName={selectedColorName}
            onColorChange={handleColorChange}
          />
        </div>
      </form>
      {isChanged && <SaveToast onSave={handleSave} isLoading={isUpdating} />}
    </div>
  );
}
