"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { putColumnUpdate } from "@/api/data";
import { Button } from "@/components/Button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { Modal } from "@/components/modal/Modal";
import { ModalHeader } from "@/components/modal/ModalHeader";

export default function ColumEditModal() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const columnId = Number(searchParams.get("columnId"));
  const existingColumnName = searchParams.get("columnName") || "";
  const [title, setTitle] = useState(existingColumnName);

  const handleCancel = () => {
    router.back();
  };

  const handleEdit = async () => {
    if (!columnId || isNaN(columnId)) {
      alert("올바르지 않은 칼럼 ID입니다.");
      return;
    }

    if (!title.trim()) {
      alert("수정할 칼럼명을 입력해 주세요.");
      return;
    }

    try {
      await putColumnUpdate(columnId, { title: title.trim() });
      alert("칼럼이 수정되었습니다.");

      router.back();
    } catch (error) {
      console.error("칼럼 수정 실패:", error);
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <Modal>
      <ModalHeader>칼럼 수정</ModalHeader>
      <div className="w-83.775 md:w-135">
        <Input>
          <Label
            htmlFor="columnModify"
            className="mt-4 mb-1 text-base md:mt-5 md:text-lg"
          >
            칼럼 이름
          </Label>
          <Input.Wrapper>
            <Input.Field
              id="columnModify"
              placeholder="수정할 칼럼명을 입력해주세요"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
          </Input.Wrapper>
          <Input.Error className="min-w-max text-sm whitespace-nowrap md:text-base" />
        </Input>

        <div className="mt-5 flex items-center justify-center gap-3 md:gap-5">
          <Button
            size="lg"
            colorType="secondary"
            className="flex-1 max-md:h-12.5"
            onClick={() => handleCancel()}
          >
            취소
          </Button>
          <Button
            size="lg"
            className="flex-1 max-md:h-12.5"
            colorType="primary"
            onClick={() => handleEdit()}
          >
            수정
          </Button>
        </div>
      </div>
    </Modal>
  );
}
