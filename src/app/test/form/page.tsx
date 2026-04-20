"use client";

import Input from "@/components/input/input";
import Label from "@/components/label/label";

const FormTest = () => {
  return (
    <div className="bg-background flex h-dvh flex-col gap-2 p-2">
      <Input>
        <Label htmlFor="name">이름</Label>
        <Input.Wrapper>
          <Input.SearchIcon />
          <Input.Field id="name" placeholder="이름을 입력해주세요" />
        </Input.Wrapper>
        <Input.Error>잘못된 이름입니다.</Input.Error>
      </Input>
      <Input>
        <Label htmlFor="password">비밀번호</Label>
        <Input.Wrapper>
          <Input.Field
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <Input.PasswordToggle />
        </Input.Wrapper>
      </Input>
      <Input inputSize="sm" disabled>
        <Label htmlFor="small" labelSize="sm">
          작은 사이즈
        </Label>
        <Input.Wrapper>
          <Input.Field id="small" placeholder="작은 사이즈" />
        </Input.Wrapper>
      </Input>
    </div>
  );
};

export default FormTest;
