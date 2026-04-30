"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { postDashboard } from "@/api/data";
import { Button } from "@/components/Button";
import {
  ColorName,
  DashboardColorChoiceList,
} from "@/components/DashboardColorChoiceList";
import { Input } from "@/components/input/input";
import { ModalHeader } from "@/components/modal/ModalHeader";

export default function NewDashboard() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectColor, setSelectColor] = useState();
  const [selectHex, setSelectHex] = useState("");
  const [hasSelection, setHasSelection] = useState<boolean>(false);
  const router = useRouter();

  const ColorMath = {
    red: "#ae2e24",
    orange: "#9f4b00",
    yellow: "#bd8c00",
    green: "#206e4e",
    blue: "#1458bc",
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (error) setError("");
  };

  const handleColorSelect = (id: ColorName) => {
    const hexcode = typeToHex(id);
    setSelectHex(hexcode);
    setHasSelection(true);
  };

  const postData = {
    title: value,
    color: selectHex,
  };

  //selectColor를 헥사코드로 바꿔주는 함수
  const typeToHex = (type: ColorName) => {
    return ColorMath[type];
  };

  //대시보드 생성하는 함수
  const handlePostNewDash = async () => {
    if (selectHex && value) {
      const response = await postDashboard(postData);
      router.push(`/dashboard/${response.id}`);
    }
  };

  const handleCancel = (e: React.MouseEvent) => {
    router.back();
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="border-gray-stroke flex flex-col gap-5 rounded-3xl">
      <ModalHeader>새 대시보드 생성</ModalHeader>
      <form onSubmit={handlePostNewDash} className="flex flex-col gap-5">
        <Input>
          <Input.Wrapper>
            <Input.Field
              id="test"
              placeholder="대시보드 이름을 입력해주세요."
              value={value}
              onChange={handleFieldChange}
            />
          </Input.Wrapper>
          <Input.Error />
        </Input>
        <DashboardColorChoiceList
          onColorChange={handleColorSelect}
          selectedColorName={selectColor}
          hasSelection={hasSelection}
        />
        <div className="flex gap-5">
          <Button colorType="secondary" type="button" onClick={handleCancel}>
            취소
          </Button>
          <Button>생성</Button>
        </div>
      </form>
    </div>
  );
}
