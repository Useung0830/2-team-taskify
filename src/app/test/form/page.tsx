"use client";

import Input from "@/components/input/input";
import Label from "@/components/label/label";

const page = () => {
  return (
    <div className="bg-background flex h-dvh flex-col gap-2 p-2">
      <Input>
        <Label htmlFor="name">이름</Label>
        <Input.Box>
          <Input.SearchIcon />
          <Input.Field id="name" placeholder="이름을 입력해주세요" />
        </Input.Box>
        <Input.Error>잘못된 이름입니다.</Input.Error>
      </Input>
      <Input>
        <Label htmlFor="password">비밀번호</Label>
        <Input.Box>
          <Input.Field
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <Input.PasswordToggle />
        </Input.Box>
      </Input>
      <Input inputSize="sm" disabled>
        <Label htmlFor="small" labelSize="sm">작은 사이즈</Label>
        <Input.Box>
          <Input.Field id="small" placeholder="작은 사이즈" />
        </Input.Box>
      </Input>
    </div>
  );
};

export default page;
