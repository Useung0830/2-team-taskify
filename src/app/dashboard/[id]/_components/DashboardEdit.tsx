"use client";

import { DashboardColorChoiceList } from "@/components/DashboardColorChoiceList";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";

export function DashboardEdit() {
  return (
    <>
      <Input>
        <Label htmlFor="name">이름</Label>
        <Input.Wrapper>
          <Input.Field id="name" placeholder="이름을 입력해주세요" />
        </Input.Wrapper>
      </Input>
      <div className="min-w-83.75">
        <DashboardColorChoiceList size={"edit"} />
      </div>
    </>
  );
}
