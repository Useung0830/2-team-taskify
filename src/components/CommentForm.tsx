"use client";

import { useRef, useState } from "react";

import { useClickOutside } from "@/hooks/useClickOutside";

export function CommentForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleCancel = () => {
    setIsExpanded(false);
    setContent("");
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지

    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    try {
      // 여기에 실제 API 호출 로직이 들어갑니다.
      console.warn("전송할 데이터:", { content });

      // 성공 가정 시 로직
      alert("댓글이 등록되었습니다.");
      handleCancel(); // 등록 후 폼 닫기 및 초기화
    } catch (error) {
      console.error("등록 실패:", error);
    }
  };

  useClickOutside(formRef, () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  });
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex w-full items-start justify-center gap-3"
    >
      {isExpanded ? null : <div className="pt-2 text-gray-100">정은</div>}

      {isExpanded ? (
        <div className="relative flex flex-1 flex-col gap-2">
          <div className="focus-within:border-sky-blue min-h-30 w-full overflow-y-auto rounded-2xl border border-gray-400 px-5 py-5 pr-3 pb-12 transition-colors">
            <textarea
              value={content}
              autoFocus
              name="content"
              className="max-h-39 min-h-6.5 w-full resize-none overflow-y-auto bg-transparent text-white [scrollbar-gutter:stable] focus:outline-none [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-track]:bg-transparent"
              placeholder="댓글을 남겨보세요"
              onChange={handleContentChange}
            />
          </div>
          <div className="absolute right-6 bottom-4 flex justify-end gap-3.5">
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-full bg-gray-900 px-4 py-1.5 text-sm text-gray-100 transition-colors duration-300 hover:bg-gray-700"
            >
              취소
            </button>
            <button
              type="submit"
              className="bg-brand-600 hover:bg-brand-800 rounded-full px-4 py-1.5 text-sm text-white transition-colors duration-300"
            >
              등록
            </button>
          </div>
        </div>
      ) : (
        <input
          value={content}
          readOnly
          onClick={() => setIsExpanded(true)}
          className="focus:border-brand-600 hover:border-sky-blue h-10 flex-1 cursor-pointer rounded-4xl border border-gray-400 px-5 py-2.5 text-white transition-colors focus:outline-none"
          placeholder="댓글을 남겨보세요"
        />
      )}
    </form>
  );
}
