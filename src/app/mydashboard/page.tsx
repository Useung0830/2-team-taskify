"use client";
import { useState } from "react";

import Input from "@/components/input/input";

import { Emptydashboard } from "./components/Emptydashboard";
import { InventionContainer } from "./components/InventionContainer";
import { MydashContainer } from "./components/MydashContainer";

export default function MyDashboard() {
  const hasMydata = true;
  const hasInvitedata = true;

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (error) setError("");
  };

  const handleFieldBlur = () => {
    if (value.length < 3) {
      setError("검색 글자 수는 3글자 이상이어야 합니다.");
    }
  };

  return (
    <div className="font-pretendard flex flex-col gap-3.5 px-5 text-gray-100">
      <h1 className="pt-3.5 pb-2.5 text-4xl font-bold">홈</h1>
      <div className="gap-3">
        <h2 className="py-1 text-lg font-bold md:text-[18px] lg:text-xl">
          내 대시보드
        </h2>
        {hasMydata ? <MydashContainer /> : <Emptydashboard dashtype="my" />}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <h2 className="flex flex-col py-1 text-lg font-bold md:text-[18px] lg:text-xl">
            초대받은 대시보드
          </h2>
          <div>
            {hasInvitedata && (
              <Input>
                <Input.Wrapper>
                  <Input.SearchIcon />
                  <Input.Field
                    id="test"
                    placeholder="검색"
                    value={value}
                    onChange={handleFieldChange}
                    onBlur={handleFieldBlur}
                  />
                </Input.Wrapper>
                <Input.Error />
              </Input>
            )}
          </div>
        </div>
        {hasInvitedata ? (
          <InventionContainer />
        ) : (
          <Emptydashboard dashtype="invite" />
        )}
      </div>
    </div>
  );
}
