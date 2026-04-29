"use client";

import { useState } from "react";

import { updatePasswordAction } from "@/actions/setting";
import { Button } from "@/components/Button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
interface PasswordChangeProps {
  onBack: () => void;
}

export function PasswordChange({ onBack: handleBack }: PasswordChangeProps) {
  const [isPending, setIsPending] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [currentError, setCurrentError] = useState("");

  const handlePasswordUpdate = async () => {
    if (newPassword !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!currentPassword || !newPassword) {
      setError("모든 필드를 입력해주세요.");
      return;
    }

    if (newPassword.length < 9) {
      setError("비밀번호는 9자 이상이어야 합니다.");
      return;
    }

    setError("");
    setCurrentError("");

    try {
      setIsPending(true);

      const result = await updatePasswordAction({
        password: currentPassword,
        newPassword: newPassword,
      });

      if (result.success) {
        alert("비밀번호가 성공적으로 변경되었습니다.");
        handleBack();
      } else {
        setCurrentError("현재 비밀번호가 틀립니다.");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.";

      setError(errorMessage);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-7.5 max-md:gap-6">
        <Input errorMessage={currentError}>
          <Label htmlFor="currentPassword">현재 비밀번호</Label>
          <Input.Wrapper>
            <Input.Field
              id="currentPassword"
              type="password"
              placeholder="현재 비밀번호 입력"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </Input.Wrapper>
          <Input.Error />
        </Input>

        <Input errorMessage={error}>
          <Label htmlFor="newPassword">새 비밀번호</Label>
          <Input.Wrapper>
            <Input.Field
              id="newPassword"
              type="password"
              placeholder="새 비밀번호 입력"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                if (error) setError("");
              }}
            />
          </Input.Wrapper>
          <Input.Error />
        </Input>

        <Input errorMessage={error}>
          <Label htmlFor="confirmPassword">새 비밀번호 확인</Label>
          <Input.Wrapper>
            <Input.Field
              id="confirmPassword"
              type="password"
              placeholder="새 비밀번호 확인 입력"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (error) setError("");
              }}
            />
          </Input.Wrapper>
          <Input.Error />
        </Input>
      </div>

      <div className="max-md:bg-modal-background mt-auto flex w-135 items-center justify-center gap-5 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full max-md:gap-3 max-md:px-3.5 max-md:pb-9">
        <Button
          onClick={handleBack}
          size="lg"
          colorType="secondary"
          disabled={isPending}
        >
          취소
        </Button>
        <Button
          onClick={handlePasswordUpdate}
          size="lg"
          colorType="primary"
          disabled={isPending}
        >
          {isPending ? "변경 중..." : "비밀번호 변경"}
        </Button>
      </div>
    </>
  );
}
