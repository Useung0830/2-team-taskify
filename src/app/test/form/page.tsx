"use client";

import { useState } from "react";

import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { Textarea } from "@/components/Textarea/Textarea";

export default function FormTest() {
  const [value, setValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [error, setError] = useState("");

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  const handleFieldBlur = () => {
    if (value.length < 3) {
      setError("검색 글자 수는 3글자 이상이어야 합니다.");
    }
  };

  return (
    <div className="bg-background flex h-dvh flex-col gap-2 p-2">
      <Input>
        <Label htmlFor="name">이름</Label>
        <Input.Wrapper>
          <Input.Field id="name" placeholder="이름을 입력해주세요" />
        </Input.Wrapper>
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
          작은 사이즈 + 비활성화
        </Label>
        <Input.Wrapper>
          <Input.Field id="small" placeholder="작은 사이즈" />
        </Input.Wrapper>
      </Input>
      <Input errorMessage={error}>
        <Label htmlFor="test">검색</Label>
        <Input.Wrapper>
          <Input.SearchIcon />
          <Input.Field
            id="test"
            placeholder="메시지를 입력해주세요"
            value={value}
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
          />
        </Input.Wrapper>
        <Input.Error />
      </Input>
      <div className="flex gap-2 text-white">
        <p>입력값:</p>
        <p className="text-base text-gray-300">{value}</p>
      </div>

      {/* Textarea */}
      <Textarea
        value={textareaValue}
        onChange={handleTextareaChange}
        placeholder="메세지를 입력해주세요"
        label="textarea"
      />
    </div>
  );
}
