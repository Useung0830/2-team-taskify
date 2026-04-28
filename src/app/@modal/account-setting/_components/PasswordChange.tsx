// _components/PasswordChange.tsx
"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";

interface PasswordChangeProps {
  onBack: () => void; // 다시 계정 설정으로 돌아가는 함수
}

export function PasswordChange({ onBack: handleBack }: PasswordChangeProps) {
  const [isPending, setIsPending] = useState(false);

  const handlePasswordUpdate = async () => {
    // 비밀번호 변경 API 로직 작성
    setIsPending(true);
    // ... logic
    setIsPending(false);
  };

  return (
    <>
      <div className="flex flex-col gap-7.5 max-md:gap-6">
        <Input>
          <Label htmlFor="currentPassword">현재 비밀번호</Label>
          <Input.Wrapper>
            <Input.Field
              id="currentPassword"
              type="password"
              placeholder="현재 비밀번호 입력"
            />
          </Input.Wrapper>
        </Input>
        <Input>
          <Label htmlFor="newPassword">새 비밀번호</Label>
          <Input.Wrapper>
            <Input.Field
              id="newPassword"
              type="password"
              placeholder="새 비밀번호 입력"
            />
          </Input.Wrapper>
        </Input>
        <Input>
          <Label htmlFor="newPassword">새 비밀번호</Label>
          <Input.Wrapper>
            <Input.Field
              id="newPassword"
              type="password"
              placeholder="새 비밀번호 입력"
            />
          </Input.Wrapper>
        </Input>
      </div>

      <div className="max-md:bg-modal-background mt-auto flex w-135 items-center justify-center gap-5 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full max-md:gap-3 max-md:px-3.5 max-md:pb-9">
        <Button
          onClick={handleBack}
          size="lg"
          colorType="secondary"
          className="max-md:flex-1"
        >
          취소
        </Button>
        <Button
          onClick={handlePasswordUpdate}
          size="lg"
          colorType="primary"
          className="max-md:flex-1"
          disabled={isPending}
        >
          {isPending ? "변경 중..." : "비밀번호 변경"}
        </Button>
      </div>
    </>
  );
}
